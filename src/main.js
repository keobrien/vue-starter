'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';

import App from './components/app/App.vue';

//Init Global Dependencies
Vue.use( Vuex );
Vue.use( VueResource );
Vue.use( VueMaterial );

//Init applications
const store = new Vuex.Store( {
	strict: process.env.NODE_ENV !== 'production'
});

App.init( store, 'main-app' );
App.init( store, 'main-app-2' );
