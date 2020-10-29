
<!--eslint-disable no-tabs-->
<!--eslint-disable spaced-comment-->
<template>
	<div>
		<button @click="login">点击参与</button>
		<popup></popup>
	</div>
</template>

<script>
/* eslint-disable no-tabs */
/* eslint-disable indent */
import popup from '../components/popup/popup'
export default {
	components: {
		popup
	},
	data () {
		return {
			num: 0,
			show: false
		}
	},
	methods: {
		login () {
			this.$store.commit('show', true)
		}
	}
}

</script>
<style lang='scss' scoped>
</style>
