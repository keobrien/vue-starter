'use strict';

import store from 'store';

const appStore = {
	namespaced: true,
	namespace : 'app',
	state     : {
		tests: ['Initial test 0'],
	},
	mutations : {
		ADD_TEST(state, text) {
			state.tests.push(text);
		}
	},
	actions   : {
		addTest: ({commit}, text) => {
			commit('ADD_TEST', text);
		}
	},
	getters   : {
		allTests: state => state.tests,
	}
};

store.registerModule(appStore.namespace, appStore);

module.exports = appStore;
