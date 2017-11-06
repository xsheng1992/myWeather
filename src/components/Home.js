import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { searchCity, findCity } from '../../datas/cityfilters'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import stl from '../source/css/home.css'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state= {
			searchResult: [],
			showList: false
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
		this.handleKeyUp = this.handleKeyUp.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	componentDidMount() {
		//filters()
	}

	handleClick(e) {
		const value = this.refs.site.value.trim()
		if(value) {
			//验证地名是否存在
			const site = findCity(value)
			//跳转天气详情页面
			return site ? browserHistory.push(`/result/${site}`) : alert('未找到地名')
		} else {
			alert(`请输入有效的地名`)
		}
	}

	handleInput(e) {
		const value = this.refs.site.value.trim()
		this.setState({
			searchResult: searchCity(value),
			showList: true
		})
	}
	handleBlur(e) {
		this.setState({
			showList: false
		})
	}
	handleKeyUp(e) {
		if(e.keyCode === 13) {
			this.handleClick()
		}
	}

	render() {
		return (
			<div className="container">
				<h1 className={stl.title}>请输入地名以查询天气：</h1>
				<div className={stl.inputBox}>
					<input placeholder="搜索城市名" ref="site" className={stl.sInput} 
						onInput={this.handleInput} 
						onFocus={this.handleInput} 
						onBlur={this.handleBlur} 
						onKeyUp={this.handleKeyUp} 
						style={{borderBottomLeftRadius: this.state.showList ? '0' : '10px'}}
					/>
					<button onClick={this.handleClick} className={stl.sButton}>查询</button>
					<ReactCSSTransitionGroup
						transitionName="slide500"
		        component="div"
		        transitionEnterTimeout={500}
		        transitionLeaveTimeout={500}
					>
						{this.state.showList && this.state.searchResult.length>0 &&
							<div className={stl.listContain}>
								<div className={stl.rlist} key="searchResultList">
									{this.state.searchResult.map((item, index)=>{
										return index > 9 ? null : (
											<Link to={`/result/${item.enName}`} key={item.id}>
												<p>{`${item.enName}-${item.cnName}`}</p>
											</Link>
										) 
									})}
								</div>
							</div>
						}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		)
	}
}

export default Home