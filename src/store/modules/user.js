import { loginByTel, logOut } from '../../api/login';
import storage from '../../libs/storage.js';
import { Message } from 'iview';

const user = {
  state: {
    mobile: storage.get('Admin-Mobile'),
    token: storage.get('Admin-Token'),
		agent: "",
		tid: ""
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
		SET_MOBILE: (state, mobile) => {
			state.mobile = mobile;
		},
		SET_AGENT: (state, agent) => {
			state.agent = agent
		},
		SET_TID: (state, tid) => {
			state.tid = tid
		}
  },

  actions: {
    // 手机登录
    LoginByTel({ commit }, opt) {
      return new Promise((resolve, reject) => {
        loginByTel(opt.mobile, opt.code).then(res => {
			if(res.errCode!="10000"){
				Message.error({
					content: res.data,
					duration: 5,
				})
			}else{
				storage.set('Admin-Token', res.data);
				storage.set('Admin-Mobile', opt.mobile);
				commit('SET_TOKEN', res.data);
				commit('SET_MOBILE', opt.mobile);
				resolve();
			}
        }).catch(error => {
          reject(error);
        });
      });
    },
	// 退出登录
    LogOut({ commit }) {
      return new Promise((resolve,reject) => {
        logOut().then(res => {
			if(res.errCode==10000){
				Message.error({
					content: "你已退出登录",
					duration: 5,
				})
				storage.del('Admin-Token');
				storage.del('Admin-Mobile');
				commit('SET_TOKEN', 0);
				commit('SET_MOBILE', "");
				resolve();
			}else{
				Message.error({
					content: "error:"+res.errCode,
					duration: 5,
				})	
			}
        }).catch(error => {
          reject(error)
        })
      })
    },
		getAgent ({ commit }, agent) {
			commit('SET_AGENT', agent);
		},
		getTid ({ commit }, tid) {
			commit('SET_TID', tid);
		}
  }
};

export default user;
