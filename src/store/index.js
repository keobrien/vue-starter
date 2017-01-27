'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

const actions = require('./actions');
const getters = require('./getters');
const mutations = require('./mutations');
const state = require('./state');

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	actions,
	state,
	getters,
	mutations
});