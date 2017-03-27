import Vue from 'vue';
import * as globalStore from 'store';

export {
	renderPassDataAttrAsProps
};

//////////

function renderPassDataAttrAsProps(tag, vueObject) {
	while(document.querySelector(tag)) {
		new Vue({
			store : globalStore.store,
			el    : tag,
			render: function(createElement) {
				return createElement(vueObject, {
					props: this.$el.dataset
				});
			}
		});
	}
}