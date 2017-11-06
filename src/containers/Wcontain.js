import React, { Component } from 'react'
import { connect } from 'react-redux'

import Wnow from '../components/Wnow'
import Wdaily from '../components/Wdaily'
import Whourly from '../components/Whourly'
import Wsugg from '../components/Wsugg'

class Wcontain extends Component {
	render() {
		const { isFetching, weather } = this.props
		return (
			<div className="container">
				{weather.status === 'ok' && 
					<Wnow wdata={weather} />
				}
				{weather.status === 'ok' && weather.daily_forecast &&
					<Wdaily wdata={weather.daily_forecast} />
				}
				{weather.status === 'ok' && weather.hourly_forecast &&
					<Whourly wdata={weather.hourly_forecast} />
				}
				{weather.status === 'ok' && weather.hourly_forecast &&
					<Wsugg wdata={weather.suggestion} />
				}
			</div>
		)
	}
}

export default Wcontain