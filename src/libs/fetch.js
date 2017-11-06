import axios from 'axios';
import { Message } from 'iview';
import store from '../store';

// 创建axios实例
const service = axios.create({
	//baseURL: process.env.BASE_API, // api的base_url
	type: 'post',//请求类型，默认为 post
	timeout: 20000,// 请求超时时间
	headers:{
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'X-Requested-With': 'XMLHttpRequest',
		'Accept':'application/json, text/javascript, */*; q=0.01'
	}
});

// request拦截器
service.interceptors.request.use(config => {
	// Do something before request is sent
	config.method = config.type;//配置请求类型
	if (store.getters.token) { // 让每个请求携带token,请根据实际情况自行修改
    	config.data['token'] = store.getters.token;
	}

	let params = {};
	// 过滤掉空值参数
	for (let key in config.data) {
		// if (config.data[key] == null){
		// 	config.data[key] !== "" 
		// }
		params[key] = config.data[key] || "";
	}
	//json转键值对格式
	let transformRequest = (data) => {
		let ret = ''
		for (let key in data) {
			ret += encodeURIComponent(key) +'=' +encodeURIComponent(data[key]) +'&'
		}
		return ret
	}

	//配置请求参数
	if(config.type=="get"){
		config.params = params;
	}else if(config.type=="post"){
		config.data = transformRequest(params);
	}

  	return config;
}, error => {
	// Do something with request error
	console.log(error); // for debug
	Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
	response => {
		let code = response.data.code;
		if (response.status !== 200) {
			Message.error({
				content: res.message,
				duration: 5,
			})
			if (response.status === 401) {
				Message.warning('登录失效，请重新登录');
				store.dispatch('LogOut').then(() => {
					location.href = "#/login"
				});
			}
			if (response.status == 403){
				Message.warning('Access-Control-Allow-Origin');
			}
			if (response.status === 500) {
				Message.warning(response.data.data);
			}
			return Promise.reject(error);
		}else{
			return response.data;
		}
	},
	error => {
		if (error == "Error: Request failed with status code 401") {
			store.dispatch('LogOut').then(() => {
				Message.warning(error);
				location.href = "#/login"
			})
			return;
		}
		console.log(error);// for debug
		Message.error({
			content: error,
			duration: 5,
		})
		return Promise.reject(error);
	}
)

export default service;
