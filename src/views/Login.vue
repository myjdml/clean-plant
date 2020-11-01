
<!--eslint-disable no-tabs-->
<!--eslint-disable spaced-comment-->
<template>
	<div>
		<button @click="login" class="join">大弹窗</button>
		<button @click="smallPop" class="join">小弹窗</button>
		<div class="join">打卡成功!</div>
		<popup></popup>
		<infopopup info="打卡成功" type="succesd"> </infopopup>
	</div>
</template>

<script>
/* eslint-disable no-tabs */
/* eslint-disable indent */
import popup from '../components/popup/indexPopup'
import infopopup from '../components/popup/infoPopup'
export default {
	components: {
		popup,
		infopopup
	},
	data () {
		return {
			num: 0,
			show: false
		}
	},
	methods: {
		login () {
			this.$store.commit('showIndexPopup', true)
		},
		smallPop () {
			this.$store.commit('showInfoPopup', true)
		}
	},
	created () {
		setTimeout(() => {
			this.login()
		}, 1000)
	}
}

</script>
<style lang='scss' scoped>
.join {
	font-family: 'clear';
	font-size: 90px;
}
</style>
