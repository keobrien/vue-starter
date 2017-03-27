import * as renderUtils from 'renderUtils';
import App from './App.vue';
import * as storeModule from './store';

export {
	init,
	App,
	storeModule
};

export default App;

//////////

function init( el ) {
	renderUtils.renderPassDataAttrAsProps(el, App);
}