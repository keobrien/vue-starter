<template>
	<div>
		<button type="button" class="success button" v-on:click="addTest">Add</button>
		<div class="test" v-for="test in allTests">{{ test }}</div>
	</div>
</template>

<script src="./app.js"></script>
<style lang="sass" src="./app.scss"></style>
