//actions.js
import fetch from 'isomorphic-fetch'

//和风天气key
const HKEY = '04e0c987d7df4539a727b5a804ad4349'

export const SELECT_SITE = 'SELECT_SITE'
export const INVALIDATE_SITE = 'INVALIDATE_SITE'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

export function selectSite(site) {
	return {
		type: SELECT_SITE,
		site
	}
}
export function invalidateSite(site) {
	return {
		type: INVALIDATE_SITE,
		site
	}
}
export function requestWeather(site) {
	return {
		type: REQUEST_WEATHER,
		site
	}
}
export function receiveWeather(site, json) {
	return {
		type: RECEIVE_WEATHER,
		site,
		weather: json.HeWeather5,
		receiveAt: Date.now()
	}
}
export function receiveError(site, error) {
	return {
		type: RECEIVE_ERROR,
		site,
		fetchError: true,
		errorMsg: error
	}
}


function fetchWeather(site) {
	return (dispatch) => {
		//发起请求
		dispatch(requestWeather(site))

		//获取数据 `https://free-api.heweather.com/v5/weather?city=${site}&key=${HKEY}`
		return fetch(`../../datas/${site}.json`)
						.then(response => response.json())
						.then(json => dispatch(receiveWeather(site, json)))
						.catch(error => dispatch(receiveError(site, error)))
	}
}

function shouldFetchWeather(state, site) {
	const weather = state.weatherBySite[site]
	if(!weather) {
		return true
	} else if(weather.isFetching) {
		return false
	} else if(Date.now() - weather.lastUpdate > 3600000) {
		return true
	} else {
		return weather.didInvalidate || weather.fetchError
	}
}

export function fetchWeatherIfNeeded(site) {
	return (dispatch, getState) => {
		if(shouldFetchWeather(getState(), site)) {
			return dispatch(fetchWeather(site))
		}
	}
}