import React, { Component } from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory, Redirect } from 'react-router'
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
					<Route path="/" component={Main}>
						<IndexRedirect to="/add"/>
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