<template>
  <a click @click="doClick" :class="{ disabled: disabled }" class="myButton">{{ title }}</a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
	title: String,
	path: String,
	disabled: Boolean
})

const router = useRouter()

function doClick() {
	if (props.path && !props.disabled)
		router.push(props.path)
}
</script>

<style>
.myButton {
	box-shadow: 0px 0px 11px 2px #9fb4f2;
	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
	background-color:#7892c2;
	border-radius:7px;
	border:4px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:24px;
	padding:12px 37px;
	text-decoration:none;
}
.myButton:hover {
	background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
	background-color:#476e9e;
}
.myButton:active {
	position:relative;
	top:1px;
}

.disabled {
	color: #595959;
}
</style>