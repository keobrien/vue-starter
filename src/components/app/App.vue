<template>
	<form v-on:submit.prevent="handleSubmit">
		<input type="text" v-model="inputData">
		<button type="submit">Add</button>
		<div class="test" v-for="test in allTests">{{ test }}</div>
	</form>
</template>

<script>
	import Vue from 'vue';
	import { mapActions, mapGetters } from 'vuex';

	import store from 'store.js';
	import appStore from './store.js';

	const app = {
		data() {
			return {
				inputData: ''
			}
		},
		computed: {
			...mapGetters( appStore.namespace, [
				'allTests'
			])
		},
		methods : {
			...mapActions(appStore.namespace, [
				'addTest'
			]),
			handleSubmit
		},
		init,
	};

	export default app;

	//////////

	function handleSubmit() {
		this.addTest(this.inputData);
		this.inputData = '';
	}

	function init ( el ) {
		return new Vue({
			store: store,
			el   : el,
			render: h => h(app)
		});
	}
</script>
<style lang="sass" scoped>
	.test {
		background: #ccc;
	}
</style>
