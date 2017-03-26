'use strict';

import store from 'store.js';

const appStore  =  {
	namespaced: true,
	namespace: 'app',
	state     : {
		tests: [ 'asd' ],
	},
	mutations : {
		ADD_TEST( state, text ) {
			state.tests.push(text);
		}
	},
	actions   : {
		addTest: ( { commit }, text ) => {
			commit( 'ADD_TEST', text );
		}
	},
	getters   : {
		allTests: state => state.tests,
	}
};

store.registerModule( appStore.namespace , appStore );

module.exports  =  appStore;
