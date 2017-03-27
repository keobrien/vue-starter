'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

//Init applications
const store = new Vuex.Store( {
	strict: process.env.NODE_ENV !== 'production'
});

module.exports  =  store;
