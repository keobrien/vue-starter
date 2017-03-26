<template>
<md-layout>
	<md-layout md-flex="70" md-flex-offset="30">
		<div>
			<md-button class="md-raised md-primary" v-on:click.native="addTest">Add</md-button>
			<div class="test" v-for="test in allTests">{{ test }}</div>
		</div>
	</md-layout>
	<md-layout md-flex="70" md-flex-offset="30">
		<ru-form dave="awesome"></ru-form>
	</md-layout>
</md-layout>
</template>

<script src="./app.js"></script>
<style lang="sass" src="./app.scss"></style>
