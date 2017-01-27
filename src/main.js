'use strict';

import Vue from 'vue';
import store from './store';
import App from './components/App.vue';

new Vue({
	store,
	el: '#app',
	render: h => h(App)
});