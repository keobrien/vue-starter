'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import App from './components/app/App.vue';

//const App2 = Vue.extend( App, { computed: ( ) => { return 5; } } );

//Init Global Dependencies
Vue.use( VueResource );
Vue.use( VueMaterial );

App.init( 'main-app' );
App.init( 'main-app-2' );
