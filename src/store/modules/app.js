import storage from '../../libs/storage.js';

const app = {
	state: {
		subMenu: {},
	},
	mutations: {
		SET_SUBMENU: (state, router) => {
			state.subMenu = router
		},
	},
	actions: {
		updateSubMenu: ({ commit }, router) => {
			commit('SET_SUBMENU', router);
		},
	}
};

export default app;