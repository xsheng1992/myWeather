import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Suggest from './Suggest'

import * as date from '../util/date'
import stl from '../source/css/wsugg.css'

const topList = [
	{name: 'air', txt: '空气污染扩散'},
	{name: 'comf', txt: '舒适度指数'},
	{name: 'cw', txt: '洗车指数'},
	{name: 'drsg', txt: '穿衣指数'}
]
const botList = [
	{name: 'flu', txt: '感冒指数'},
	{name: 'sport', txt: '运动指数'},
	{name: 'trav', txt: '旅游指数'},
	{name: 'uv', txt: '紫外线指数'}
]

class Wsugg extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showTop: false,
			showBottom: false,
			name: ''
		}
		this.handleClickTop = this.handleClickTop.bind(this)
		this.handleClickBot = this.handleClickBot.bind(this)
	}

	setTop(name) {
		this.setState({
			showTop: true,
			showBottom: false,
			name: name
		})
	}
	setBot(name) {
		this.setState({
			showTop: false,
			showBottom: true,
			name: name
		})
	}
	clearBox() {
		this.setState({
			showTop: false,
			showBottom: false,
			name: ''
		})
	}

	handleClickTop(name) {
		return name === this.state.name ? this.clearBox() : this.setTop(name)
	}
	handleClickBot(name) {
		return name === this.state.name ? this.clearBox() : this.setBot(name)
	}

	render() {
		const { wdata } = this.props

		return (
			<div className={stl.suggBox+' clearfix'}>
				{
					topList.map((item, index)=>{
						return (
							<Suggest 
								data={wdata[item.name]} 
								name={item.name}
								dname={this.state.name}
								txt={item.txt}
								onclick={this.handleClickTop}
								key={`suggItem_${index}`} 
							/>
						)
					})
				}
				<ReactCSSTransitionGroup
					transitionName="slide-sugg"
	        component="div"
	        className={stl.suggMsgOuter}
	        transitionEnterTimeout={500}
	        transitionLeaveTimeout={500}>
	        {this.state.showTop && 
						<div className={stl.suggMsg} key="suggestionTop">
							<p>{wdata[this.state.name].txt}</p>
						</div>
					}
				</ReactCSSTransitionGroup>
				{
					botList.map((item, index)=>{
						return (
							<Suggest 
								data={wdata[item.name]} 
								name={item.name}
								dname={this.state.name}
								txt={item.txt}
								onclick={this.handleClickBot}
								key={`suggItem_${index}`} 
							/>
						)
					})
				}
				<ReactCSSTransitionGroup
					transitionName="slide-sugg"
	        component="div"
	        className={stl.suggMsgOuter}
	        transitionEnterTimeout={500}
	        transitionLeaveTimeout={500}>
	        {this.state.showBottom && 
						<div className={stl.suggMsg} key="suggestionTop"> 
							<p>{wdata[this.state.name].txt}</p>
						</div>
					}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default Wsugg