import React, { Component } from 'react'

import stl from '../source/css/wsugg.css'

class Suggest extends Component {
	render() {
		const { name, dname, txt, data, onclick } = this.props

		return (
			<div className={stl.suggItem} onClick={e=>onclick(name)} style={{backgroundColor: name===dname? '#eee' : '#fafafa'}}>
				<p>{txt}</p>
				<img className={stl.suggImg} src={require(`../source/images/sugg/${name}.png`)} />
				<p className={stl.suggBrf}>{data.brf}</p>
			</div>
		)
	}
}

export default Suggest