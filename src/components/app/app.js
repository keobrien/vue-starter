'use strict';

import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import appStore from './store.js';
import ruForm from './form/Form.vue';

const NAMESPACE  =  'app';

const app = {
	computed   : { ...mapGetters( NAMESPACE, [ 'allTests' ]) },
	methods    : { ...mapActions( NAMESPACE, [ 'addTest' ]) },
	components : { 'ru-form' : ruForm },
	init       : initilize
};

export default app;

var appStoreInit  =  false;
function initilize ( store, el ) {

	if ( ! appStoreInit ) {
		store.registerModule( NAMESPACE, appStore );
		appStoreInit  =  true;
	}

	new Vue({
		store: store,
		el   : el,
		render: h => h(app)
	});
}

