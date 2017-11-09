import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { searchCity, findCity, provinces, getUpCities, getCity } from '../../datas/cityfilters'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import stl from '../source/css/home.css'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state= {
			provinces: provinces,
			upcities: '',
			cities: '',
			spvince: '',
			supcity: '',
			scity: ''
		}
		this.clickPvince = this.clickPvince.bind(this)
		this.clickUpcity = this.clickUpcity.bind(this)
	}
	componentDidMount() {
		//filters()
	}

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
	}
	clickUpcity(e) {
		const uname = e.currentTarget.innerHTML
		return uname === this.state.supcity ? false :
			this.setState({
				cities: getCity(uname),
				supcity: uname,
				scity: ''
			})
	}

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
										className={stl.cityPill} 
										activeClassName={stl.activePill}
										onClick={this.clickCity} 
										key={`Upcity_${item.city_cn}`}>
								{item.city_cn}
							</Link>
						))}
					</div>
				}
					
			</div>
		)
	}
}

export default Home