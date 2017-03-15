'use strict';

import { mapActions, mapGetters } from 'vuex';

import ruStore from 'components/app/form/store.js';

const form = {
	computed : { ...mapGetters( ruStore.namespace, [ 'getSelected' ]) },
	methods  : { ...mapActions( ruStore.namespace, [ 'setSelected' ]) },
};

export default form;
