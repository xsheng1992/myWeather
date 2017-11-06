import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import Main from '../containers/Main'
import Home from '../components/Home'
import Result from '../components/Result'

const store = configureStore()

export default class RootApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={Main}>
						<IndexRoute component={Home} />
						<Route path="/result(/:site)" component={Result}></Route>
					</Route>
				</Router>
			</Provider>
		)
	}
}