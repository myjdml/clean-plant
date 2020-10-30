<!--eslint-disable no-tabs-->
<template>
	<div :class="$store.state.showIndexPopup ? 'show default' : 'hidden default'">
		<div class="popup">
			<button @click="hidden">X</button>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-tabs */
/* eslint-disable indent */
/**
 * @description: 弹出框组件
 * @param {*}
 * @return {*}
 * @author: 林其星
 */

export default {
	data () {
		return {
		}
	},
	methods: {
		hidden () {
			this.$store.commit('showIndexPopup', false)
		}
	}
}
</script>
<style lang='scss' scoped>
.popup {
	width: 100vw;
	height: 100vh;
	background-image: url('../../assets/image/home/background.png');
	background-size: cover;
}
.default {
	position: absolute !important;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
}
.show,
.hidden {
	position: absolute;
}
.show {
	opacity: 1;
	animation: show 0.5s ease-in-out;
}
.hidden {
	opacity: 0;
	animation: hidden 0.3s linear;
	visibility: hidden;
}
@keyframes show {
	0% {
		opacity: 0;
		transform: translateY(-50%) translateX(-50%) scale(1);
	}
	100% {
		opacity: 1;
		transform: translateY(-50%) translateX(-50%) scale(1);
	}
}
@keyframes hidden {
	0% {
		opacity: 1;
		transform: translateY(-50%) translateX(-50%) scale(1);
	}
	100% {
		opacity: 0;
		transform: translateY(-60%) translateX(-50%) scale(0.99);
		overflow: hidden;
	}
}
</style>
