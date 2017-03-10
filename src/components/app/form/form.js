'use strict';

import { mapActions, mapGetters } from 'vuex';
import ruStore from './store.js';

const NAMESPACE  =  'app/form';

var storeRegistered  =  false;

const form = {
	computed : { ...mapGetters( NAMESPACE, [ 'getSelected' ]) },
	methods  : { ...mapActions( NAMESPACE, [ 'setSelected' ]) },
	beforeCreate ( ) {
		if ( ! storeRegistered ) {
			this.$store.registerModule( [ 'app', 'form' ], ruStore );
			storeRegistered  =  true;
		}
		//@todo track instances and register store on first created and remove store on last
		//console.log( 'before create called', this._uid );
	},
	destroyed ( ) {
		//console.log( 'destroyed called', this._uid );
	}
};

export default form;
