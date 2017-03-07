<template>
	<div>
		<md-button class="md-raised md-primary" v-on:click.native="addTest">Add</md-button>
		<div class="test" v-for="test in allTests">{{ test }}</div>
	</div>
</template>

<script src="./app.js"></script>
<style lang="sass" src="./app.scss"></style>
