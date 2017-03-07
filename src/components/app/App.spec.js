'use strict';

import App from "./App.vue";

describe('Main Application', () => {
	it('has addTest method', () => {
		expect(typeof App.methods.addTest).toBe('function');
	});
});
