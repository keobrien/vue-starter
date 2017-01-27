'use strict';

import App from "./App.vue";

describe('MyComponent', () => {
	it('has addTest method', () => {
		expect(typeof App.methods.addTest).toBe('function');
	});
});