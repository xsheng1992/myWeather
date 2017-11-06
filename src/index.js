import React from 'react'
import ReactDOM from 'react-dom'

import RootApp from './containers/RootApp'

//css
require('./source/css/animations.css')
require('./source/css/common.css')

const Root = document.querySelector('#app')

ReactDOM.render(
	<RootApp />, 
	Root
)