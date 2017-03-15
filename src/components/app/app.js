'use strict';

import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import store from 'store.js';
import ruForm from 'components/app/form/Form.vue';
import appStore from 'components/app/store.js';


const app = {
	state: { dave: 'cool' },
	computed   : { ...mapGetters( appStore.namespace, [ 'allTests' ]) },
	methods    : { ...mapActions( appStore.namespace, [ 'addTest' ]) },
	components : { 'ru-form' : ruForm },
	init       : initilize,
};

export default app;

function initilize ( el ) {
	return new Vue({
		store: store,
		el   : el,
		render: h => h(app)
	});
}

