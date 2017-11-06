import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { selectSite, invalidateSite, fetchWeatherIfNeeded } from '../actions'
import Wcontain from '../containers/Wcontain'

class Wdetail extends Component {
	constructor(props) {
		super(props);
		this.siteName = props.site
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(selectSite(this.siteName))
		dispatch(fetchWeatherIfNeeded(this.siteName))
	}

	render() {
		const { isFetching, lastUpdate, fetchError, weather } = this.props
		if(fetchError) {
			return (
				<div className="container">
					<p style={{
						fontSize: '50px',
						fontWeight: '200',
						textAlign: 'center',
						marginBottom: '30px'
					}}>
						出错啦!
					</p>

					<Link to="/"
						 style={{
						 	color: '#00f',
						 	display: 'block',
						 	fontSize: '30px',
						 	lineHeight: '60px',
						 	textAlign: 'center'
					}}>
						返回
					</Link>
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