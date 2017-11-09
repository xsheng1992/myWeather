import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import Main from '../containers/Main'
import Home from '../components/Home'
import SearchAdd from '../components/SearchAdd'
import ClickAdd from '../components/ClickAdd'
import Result from '../components/Result'

const store = configureStore()

export default class RootApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Redirect from="/" to="/add" />
					<Route path="/" component={Main}>
						<Route path="add" component={Home}>
							<IndexRoute component={SearchAdd}></IndexRoute>
							<Route path="/click" component={ClickAdd}></Route>
						</Route>
						<Route path="result(/:site)" component={Result}></Route>
					</Route>
				</Router>
			</Provider>
		)
	}
}