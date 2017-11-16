import React, { Component } from 'react'
import { Link, browserHistory, withRouter } from 'react-router'
import { searchCity, findCity, provinces, getUpCities, getCity } from '../../datas/cityfilters'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import stl from '../source/css/home.css'

const Home = React.createClass({
	getInitialState() {
		return {
			provinces: provinces,
			upcities: '',
			cities: '',
			spvince: '',
			supcity: '',
			scity: ''
		}
	},

	routerWillLeave(nextLocation) {
		localStorage.setItem("lastUrl", '/click')
		localStorage.setItem("clickConfig", JSON.stringify(this.state))
  },

	componentDidMount() {
		const { provinces, upcities, cities, spvince, supcity } = JSON.parse(localStorage.getItem("clickConfig")),
					scity = localStorage.getItem("cityName")
		this.setState({provinces, upcities, cities, spvince, supcity, scity})
		
		const { route, router } = this.props
		router.setRouteLeaveHook(route, this.routerWillLeave)
	},

	clickPvince(e) {
		const pname = e.currentTarget.innerHTML
		return pname === this.state.spvince ? false :
			this.setState({
				upcities: getUpCities(pname),
				cities: '',
				spvince: pname,
				supcity: '',
				scity: ''
			})
	},
	clickUpcity(e) {
		const uname = e.currentTarget.innerHTML
		return uname === this.state.supcity ? false :
			this.setState({
				cities: getCity(uname),
				supcity: uname,
				scity: ''
			})
	},

	render() {
		return (
			<div className="container">
				<div className={stl.listOuter}>
					<h3 className={stl.clickTitle}>选择省份:</h3>
					{this.state.provinces.map((item)=>(
						<button className={`${stl.cityPill} ${(this.state.upcities && item === this.state.spvince) ? stl.activePill:''}`} 
										onClick={this.clickPvince} 
										key={`Province_${item}`}>
							{item} 
						</button>
					))}
				</div>

				{this.state.upcities && 
					<div className={stl.listOuter}>
						<h3 className={stl.clickTitle}>选择上级城市:</h3>
						{this.state.upcities.map((item)=>(
							<button className={`${stl.cityPill} ${(this.state.cities && item === this.state.supcity) ? stl.activePill:''}`} 
											onClick={this.clickUpcity} 
											key={`Upcity_${item}`}>
								{item}
							</button>
						))}
					</div>
				}

				{this.state.cities && 
					<div className={stl.listOuter}>
						<h3 className={stl.clickTitle}>选择城市:</h3>
						{this.state.cities.map((item)=>(
							<Link to={`/result/${item.city_en}`} 
										className={`${stl.cityPill} ${(item.city_en === this.state.scity) ? stl.activePill:''}`} 
										key={`City_${item.city_en}`}> 
								{item.city_cn}
							</Link>
						))}
					</div>
				}
					
			</div>
		)
	}
})

export default withRouter(Home)