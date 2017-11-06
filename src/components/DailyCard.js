import React, { Component } from 'react'

import * as date from '../util/date'
import stl from '../source/css/dailycard.css'

class DailyCard extends Component {
	render() {
		const { wdata } = this.props

		return (
			<div className={stl.dailyCard} >
				<h1 className={stl.tithead}>{date.getFullDate(wdata.date)}</h1>
				<div className={stl.times}>
					<div className={stl.tItem}>
						<p>白天</p>
						<img src={require(`../source/images/${wdata.cond.code_d}.png`)} />
						<p className={stl.astro}>日出：{wdata.astro.sr}</p>
						<p className={stl.astro}>日落：{wdata.astro.ss}</p>
					</div>
					<div className={stl.tItem}>
						<p>夜晚</p>
						<img src={require(`../source/images/${wdata.cond.code_n}.png`)} />
						<p className={stl.astro}>月升：{wdata.astro.mr}</p>
						<p className={stl.astro}>月落：{wdata.astro.ms}</p>
					</div>
				</div>

				<p className={stl.maxmin}>最高：{wdata.tmp.max}°&nbsp;&nbsp;&nbsp;&nbsp;最低：{wdata.tmp.min}°</p>
				<p className={stl.wind}>{wdata.wind.dir} {wdata.wind.sc}</p>

				<ul className={stl.others}>
					<li><span>相对湿度:</span> {wdata.hum}%</li>
					<li><span>降水概率:</span> {wdata.pop}%</li>
					<li><span>降水量:</span> {wdata.pcpn}mm</li>
					<li><span>气压:</span> {wdata.pres}</li>
					<li><span>紫外线指数:</span> {wdata.uv}</li>
					<li><span>能见度:</span> {wdata.vis}km</li>
				</ul>
			</div>
		)
	}
}

export default DailyCard