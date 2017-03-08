'use strict';

export default {
	namespaced: true,
	state     : {
		selected: ""
	},
	mutations : {
		SELECT( state, option ) {
			state.selected  =  option;
		}
	},
	actions   : {
		setSelected: ( { commit }, value ) => {
			commit( 'SELECT', value );
		}
	},
	getters   : {
		getSelected: state => state.selected
	}
};
