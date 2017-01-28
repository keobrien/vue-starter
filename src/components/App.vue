<template>
	<div>
		<button v-on:click="addTest">Add</button>
		<div class="test" v-for="test in allTests">{{ test }}</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['allTests'])
	},
	methods: {
		...mapActions(['addTest'])
	}
};
</script>

<style lang="sass" scoped>
@import "../_variables.scss";

.test {
	background: $bg-color;
}
</style>
