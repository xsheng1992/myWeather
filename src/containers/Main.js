import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Main extends Component {
	render() {
		return (
			/*
			<ReactCSSTransitionGroup
        transitionName="slide"
        component="div"
        className="wrap"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
				{React.cloneElement(this.props.children, {
          key: location.pathname
        })}
			</ReactCSSTransitionGroup>
			*/
			<div className="main">
				{this.props.children}
			</div>
		)
	}
}

export default Main