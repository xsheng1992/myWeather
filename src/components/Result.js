import React, { Component } from 'react'
import { Link } from 'react-router'
import Wdetail from './Wdetail'

import stl from '../source/css/result.css'

class Result extends Component {
	render() {
		const siteName = this.props.params.site

		return (
			<div className={stl.container} key="result">
				<p className={stl.navTop}>
					<Link to="/"></Link>
				</p>
				<Wdetail site={siteName}></Wdetail>
			</div>
		)
	}
}

export default Result