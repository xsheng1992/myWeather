//cityfilters.js
import cities from './cities'
import zjcities from './citiesZJ'

//获取省
export const provinces = zjcities.map(item=>item.province_cn).filter((elem,index,self)=>(self.indexOf(elem)===index))
export const getUpCities = (province) => {
	return cities.filter(item=>(item.province_cn === province))
					.map(item=>item.upcity_cn)
					.filter((elem,index,self)=>(self.indexOf(elem)===index))
}
export const getCity = (upcity) => {
	return cities.filter(item=>(item.upcity_cn === upcity))
}

export const searchCity = (str) => {
	return cities.filter(item=>(item.city_cn.includes(str) || item.city_en.includes(str)))
					.map(item=>({id:item.id, enName: item.city_en, cnName: item.city_cn}))
}

export const findCity = (str) => {
	const res = zjcities.find((item)=>(item.city_cn === str || item.city_en === str))
	return res ? res.city_en : null
}

export default function filter() {
	//console.log(searchCity('hangz'))
}