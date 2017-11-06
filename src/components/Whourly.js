import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import * as date from '../util/date'
import DailyCard from './DailyCard'
import stl from '../source/css/whourly.css'

class Whourly extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetail: false
		}
	}

	handleClick(e) {
		this.setState({
			showDetail: !this.state.showDetail
		})
	} 

	render() {
		const { wdata } = this.props

		return (
			<div className={stl.hourlyBox}>
				<h1 className={stl.head}>逐时报道</h1>
				<ul className={stl.hourList}>{
					wdata.map((hour, index)=>{
						return (
							<li key={`hourlist${index}`}>
								<p className={stl.htit}>
									<span className={stl.blue}>{date.getHourTime(hour.date)}</span>
									<span>{hour.cond.txt}</span>
								</p>
								<ReactCSSTransitionGroup
									transitionName="slide-down"
					        component="div"
					        className={stl.outerBox}
					        transitionEnterTimeout={300}
					        transitionLeaveTimeout={300}>
					        	{this.state.showDetail &&
					        		<div className={stl.hourDetail} key={`hourdbox_${index}`}>
					        			<div className={stl.dItem}>
					        				<span>湿度： </span>{hour.hum}%
					        			</div>
					        			<div className={stl.dItem}>
					        				<span>降水概率： </span>{hour.pop}%
					        			</div>
					        			<div className={stl.dItem}>
					        				<span>气压： </span>{hour.pres}
					        			</div>
					        			<div className={stl.dItem}>
					        				<span>温度： </span>{hour.tmp}°C
					        			</div>
					        			<div className={stl.dFullItem}>
					        				<span>风力风向： </span>{`${hour.wind.dir} ${hour.wind.sc} ${hour.wind.spd}kmph`}
					        			</div>
					        		</div>
					        	}
								</ReactCSSTransitionGroup>
							</li>)
					})}
					<li className={stl.lastItem}
						 onClick={e=>this.handleClick(e)}>
						{this.state.showDetail ? '收起' : '显示更多'}
					</li>
				</ul>
			</div>
		)
	}
}

export default Whourly