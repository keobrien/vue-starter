'use strict';

import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import appStore from './store.js';
import ruForm from './form/Form.vue';

const STORE_NAME  =  'app';

const app = {
	computed   : { ...mapGetters( STORE_NAME, [ 'allTests' ]) },
	methods    : { ...mapActions( STORE_NAME, [ 'addTest' ]) },
	components : { 'ru-form' : ruForm },
	init       : initilize
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
		render: h => h(app),
	});

}

