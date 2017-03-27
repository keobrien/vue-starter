import Vue from 'vue';

import App from './App.vue';
import * as globalStore from 'store';
import * as storeModule from './store';

export {
	init,
	App,
	storeModule
};

export default App;

//////////

function init( el ) {
	return new Vue({
		store: globalStore.store,
		el   : el,
		render: h => h(App)
	});
}