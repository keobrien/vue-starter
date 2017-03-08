'use strict';

import { mapActions, mapGetters } from 'vuex';

const STORE_NAME  =  'app';

const form = {
	computed : { ...mapGetters( STORE_NAME, [ 'getSelected' ]) },
	methods  : { ...mapActions( STORE_NAME, [ 'setSelected' ]) }
};

export default form;
