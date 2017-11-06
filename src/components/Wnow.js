import React, { Component } from 'react'

import * as date from '../util/date'
import stl from '../source/css/wnow.css'

class Wnow extends Component {
	render() {
		const { wdata } = this.props,
					loctime = wdata.basic.update.loc,
					apinum = wdata.aqi.city.aqi

		return (
			<div className={stl.header}>
				<h1 className="hidden">实时天气</h1>
				<h2>{wdata.basic.city}</h2>
				<p className={stl.fullDate}>{date.getFullDate(loctime)} · {date.getWeek(loctime)}</p>
				<img src={require(`../source/images/${wdata.now.cond.code}.png`)} />
				<p className={stl.cond}>{wdata.now.cond.txt} · {wdata.now.wind.sc}</p>
				<p className={stl.tmp}>{wdata.now.tmp}°C</p>
				<p>
					{apinum < 50 &&
						<span className={stl.aqitype1}>{apinum} 空气质量优</span>
					}
					{apinum >= 50 && apinum < 100 &&
						<span className={stl.aqitype2}>{apinum} 空气质量良</span>
					}
					{apinum >= 100 && apinum < 150 &&
						<span className={stl.aqitype2}>{apinum} 轻度污染</span>
					}
					{apinum >= 150 && apinum < 200 &&
						<span className={stl.aqitype2}>{apinum} 中度污染</span>
					}
					{apinum >= 200 && apinum < 300 &&
						<span className={stl.aqitype2}>{apinum} 重度污染</span>
					}
					{apinum >= 300 && apinum < 500 &&
						<span className={stl.aqitype2}>{apinum} 严重污染</span>
					}
				</p>
			</div>
		)
	}
}

export default Wnow