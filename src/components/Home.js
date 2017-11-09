import React, { Component } from 'react'
import { Link, IndexLink, browserHistory } from 'react-router'
import { searchCity, findCity } from '../../datas/cityfilters'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import stl from '../source/css/home.css'

class Home extends Component {
	render() {
		return (
			<div className="home">
				<nav>
					<header className={stl.header}>
						<h1>添加城市</h1>
					</header>
					<ul className={stl.selectNav}>
						<li><IndexLink to="/add" activeClassName={stl.activeLink}>搜索添加</IndexLink></li>
						<li><Link to="/click" activeClassName={stl.activeLink}>选择地区添加</Link></li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default Home