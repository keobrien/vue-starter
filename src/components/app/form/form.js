'use strict';

import { mapActions, mapGetters } from 'vuex';
import ruStore from './store.js';

const NAMESPACE  =  'app/form';

var storeRegistered  =  false;

const form = {
	computed : { ...mapGetters( NAMESPACE, [ 'getSelected' ]) },
	methods  : { ...mapActions( NAMESPACE, [ 'setSelected' ]) },
	created( ) {
		if ( ! storeRegistered ) {
			this.$store.registerModule( [ 'app', 'form' ], ruStore );
			storeRegistered  =  true;
		}
		//console.log( 'created' );
	},
	mounted( ) {
		//console.log( 'mounted' );
	},
};

export default form;
