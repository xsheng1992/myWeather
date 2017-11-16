import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { selectSite, invalidateSite, fetchWeatherIfNeeded } from '../actions'
import Wcontain from '../containers/Wcontain'
import stl from '../source/css/result.css'

class Wdetail extends Component {
	constructor(props) {
		super(props);
		this.siteName = props.site
		this.clickBack = this.clickBack.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(selectSite(this.siteName))
		dispatch(fetchWeatherIfNeeded(this.siteName))
		localStorage.setItem("cityName", this.siteName)
	}

	clickBack(e) {
		const url = localStorage.getItem("lastUrl")
		browserHistory.push(url)
	}

	render() {
		const { isFetching, lastUpdate, fetchError, weather } = this.props
		if(fetchError) {
			return (
				<div className="container">
					<p className={stl.wrong}>出错啦!</p>

					<span className={stl.backLink} onClick={this.clickBack}>
						返回
					</span>
				</div>
			)
		} else {
			return <Wcontain isFetching={isFetching} weather={weather} />
		}
	}
}

function mapStateToProps(state, ownProps) {
	const { weatherBySite } = state 
	const {
		isFetching,
		lastUpdate,
		fetchError,
		weather
	} = weatherBySite[ownProps.site] || {
		isFetching: false,
		fetchError: false,
		weather: {}
	}

	return {
		isFetching,
		lastUpdate,
		fetchError,
		weather
	}
}

export default connect(mapStateToProps)(Wdetail)