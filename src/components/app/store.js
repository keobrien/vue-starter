'use strict';

export default {
	namespaced: true,
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
