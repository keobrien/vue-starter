<template>
	<form v-on:submit.prevent="handleSubmit">
		<input type="text" v-model="inputData">
		<button type="submit">Add</button>
		<div class="test" v-for="test in tests">{{ test }}</div>
	</form>
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	import { namespace as appStoreNamespace } from './store.js';

	const App = {
		data() {
			return {
				inputData: ''
			}
		},
		computed: {
			...mapState( appStoreNamespace, [
				'tests'
			])
		},
		methods : {
			...mapActions( appStoreNamespace, [
				'addTest'
			]),
			handleSubmit
		},
	};

	export default App;

	//////////

	function handleSubmit() {
		this.addTest(this.inputData);
		this.inputData = '';
	}
</script>
<style lang="sass" scoped>
	.test {
		background: #ccc;
	}
</style>
