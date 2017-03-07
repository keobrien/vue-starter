'use strict';

import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import appStore from './store.js';

const STORE_NAME  =  'app';

const app = {
	computed : { ...mapGetters( STORE_NAME, [ 'allTests' ]) },
	methods  : { ...mapActions( STORE_NAME, [ 'addTest' ]) },
	init     : initilize
};

export default app;

var appStoreInit  =  false;
function initilize ( store, el ) {

	if ( ! appStoreInit ) {
		store.registerModule( STORE_NAME, appStore );
		appStoreInit  =  true;
	}

	new Vue({
		store: store,
		el   : el,
		render: h => h(app)
	});
}

