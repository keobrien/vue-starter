import globalStore from 'store';
import _ from 'lodash';

export const namespace = 'app';
export const store = {
	namespaced: true,
	state     : {
		tests: [
			'Initial test 0'
		],
	},
	mutations : {
		ADD_TEST(state, text) { state.tests.push(text); }
	},
	actions   : {
		addTest({commit}, text) { commit('ADD_TEST', text); }
	},
	getters   : {}
};

globalStore.registerModule(namespace.split('/'), _.cloneDeep(store));

export default store;
