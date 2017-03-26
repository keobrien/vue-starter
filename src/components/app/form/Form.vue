<template>
	<div class="field-group">
		<md-input-container>
			<label for="ruOption">Select</label>
			<md-select name="ruOption" id="dataExtension" :value="getSelected" @input="setSelected">
				<md-option value="1">One</md-option>
				<md-option value="2">Two</md-option>
				<md-option value="3">Three</md-option>
			</md-select>
		</md-input-container>
	</div>
</template>

<script src="./form.js"></script>
<style lang="sass" src="./form.scss"></style>
