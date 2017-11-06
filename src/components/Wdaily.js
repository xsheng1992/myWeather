import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import * as date from '../util/date'
import DailyCard from './DailyCard'
import stl from '../source/css/wdaily.css'

class Wdaily extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCard: false,
			index: 0
		}
	}

	handleClick(index) {
		this.setState({
			showCard: true,
			index: index
		})
	} 

	clickHideMask(e) {
		e.nativeEvent.stopImmediatePropagation();
		this.setState({showCard: false})
	}

	render() {
		const { wdata } = this.props

		return (
			<div>
				<h1 className="hidden">逐日预报</h1>
				<ul className={stl.dailyBox}>
					{
						wdata.map((daily, index)=>{
							return (
								<li key={`daily_${index}`} onClick={e => this.handleClick(index)}>
									<p className={stl.dayName}>{index===0 ? '今天' : date.getWeek(daily.date)}</p>
									<p className={stl.shortDay}>{date.getShortDate(daily.date)}</p>
									<img src={require(`../source/images/${daily.cond.code_d}.png`)} className={stl.imgIcon} />
									<p className={stl.tmpMax}>最高：{daily.tmp.max}°</p>
									<p className={stl.tmpMin}>最低：{daily.tmp.min}°</p>
								</li>
							)
						})
					}
				</ul>
				
				<ReactCSSTransitionGroup
          transitionName="fade"
          className={stl.fade}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={100}>
          {this.state.showCard === true && 
          	<span>
	          	<div className={stl.mask} onClick={e => this.clickHideMask(e)}></div>
	          	<DailyCard key="dailyCard" wdata={wdata[this.state.index]} />
          	</span>
					}
        </ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default Wdaily