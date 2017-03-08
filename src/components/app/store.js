'use strict';

export default {
	namespaced: true,
	state     : {
		tests: [ 'asd' ],
		selected: "1"
	},
	mutations : {
		ADD_TEST( state, text ) {
			state.tests.push(text);
		},
		SELECT( state, option ) {
			state.selected  =  option;
		}
	},
	actions   : {
		addTest: ( { commit }, text ) => {
			commit( 'ADD_TEST', text );
		},
		setSelected: ( { commit }, value ) => {
			commit( 'SELECT', value );
		}
	},
	getters   : {
		allTests: state => state.tests,
		getSelected: state => state.selected
	}
};
