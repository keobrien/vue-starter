'use strict';

import store from 'store.js';
require( 'components/app/store.js' );

const ruStore  =  {
	namespaced: true,
	namespace: 'app/form',
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
	},
};

store.registerModule( ruStore.namespace.split( '/' ) , ruStore );

module.exports  =  ruStore;
