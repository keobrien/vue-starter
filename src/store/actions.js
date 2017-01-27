'use strict';

module.exports = {
	addTest: ({ commit }, text) => {
		commit('ADD_TEST', text);
	}
};