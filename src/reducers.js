//reducers.js
import { combineReducers } from 'redux'
import { SELECT_SITE, INVALIDATE_SITE, REQUEST_WEATHER,
				 RECEIVE_WEATHER, RECEIVE_ERROR } from './actions'

function selectedSite(state = 'beijing', action) {
	switch(action.type) {
		case SELECT_SITE:
			return action.site 
		default:
			return state
	}
} 

function weathers(state = {
	isFetching: false,
	didInvalidate: false,
	fetchError: false,
	weather: {}
}, action) {
	switch(action.type) {
		case INVALIDATE_SITE:
			return Object.assign({}, state, {
				didInvalidate: true,
				fetchError: false
			})
		case REQUEST_WEATHER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetchError: false
			})
		case RECEIVE_WEATHER:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetchError: false,
				weather: action.weather[0],
				lastUpdate: action.receiveAt
			})
		case RECEIVE_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetchError: true,
				errorMsg: action.errorMsg
			})
		default: 
			return state
	}
}

function weatherBySite(state = {}, action) {
	switch(action.type) {
		case INVALIDATE_SITE:
		case REQUEST_WEATHER:
		case RECEIVE_WEATHER:
		case RECEIVE_ERROR:
			return Object.assign({}, state, {
				[action.site]: weathers(state[action.site], action)
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	selectedSite,
	weatherBySite
})

export default rootReducer