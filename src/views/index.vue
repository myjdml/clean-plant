<!--eslint-disable no-tabs-->
<!--eslint-disable spaced-comment-->
<template>
	<div class="index">
		<!-- 打卡任务 -->
		<div class="index-title">
			<p>勤俭节约21天拍照打卡活动</p>
			<div class="ware"></div>
		</div>
		<div class="index-block">
			<div class="index-block-inner">
				<div class="index-block-title">
					<p class="task">打卡任务</p>
					<p class="check-All" @click="checkAll">查看全部</p>
				</div>
				<div class="index-info">
					<p>
						希望同学们可以通过7天的打卡活动，养成珍惜粮食，勤俭节约的好习惯。
					</p>
				</div>
			</div>
		</div>
		<!-- 打卡记录 -->
		<div class="index-record">
			<div class="index-record-title">
				<p>打卡记录</p>
				<div class="index-today-block">
					<div class="today-clockin"></div>
					<div class="today-detail"></div>
				</div>
			</div>
		</div>
		<!-- 打卡日历 -->
		<div class="clockin-calendar">
			<div class="clockin-title">
				<p>
					已打卡 <a>{{ num }}/7</a> 天
				</p>
			</div>
			<div class="calendarlist"></div>
		</div>
	</div>
	<indexPopup></indexPopup>
</template>

<script>
/* eslint-disable no-tabs */
/* eslint-disable indent */
import indexPopup from '../components/popup/indexPopup'
// import calendar from '../components/calendar/calendar'
// import { useRouter } from 'vue-router'
import * as dayjs from 'dayjs'
export default {
	components: {
		indexPopup
		// calendar
	},
	data () {
		return {
			num: 1,
			daylist: [
				{ num: 19, state: '', week: '周一' },
				{ num: 19, state: '', week: '周二' },
				{ num: 19, state: '', week: '周三' },
				{ num: 19, state: '', week: '周四' },
				{ num: 19, state: '', week: '周五' },
				{ num: 19, state: '', week: '周六' },
				{ num: 19, state: '', week: '周日' }
			]
		}
	},
	methods: {
		checkAll () {
			this.$store.commit('showIndexPopup', true)
		}
	},
	created () {
		console.log(dayjs.unix(1318781876))
	}
}
</script>
<style lang='scss' scoped>
.index {
	width: 100vw;
	height: 100vh;
	background-image: url('../assets/image/home/background.png');
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'clear';
	letter-spacing: 2px;
	p {
		margin: 0;
	}
	.index-title {
		font-family: 'clear';
		font-weight: 400;
		color: #ec4800;
		line-height: 28px;
		width: 100vw;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		p {
			position: relative;
			transform: translateX(46px);
			font-size: 46px;
			line-height: 50px;
			margin: 0;
		}
		.ware {
			position: relative;
			transform: translateX(46px) translateY(10px);
			width: 620px;
			height: 17px;
			background-image: url('../assets/image/index/ware.png');
			background-size: cover;
		}
	}
	.index-block {
		width: 680px;
		height: 250px;
		margin-right: 24px;
		background-image: url('../assets/image/index/block.png');
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.index-block-inner {
			width: 620px;
			height: 167px;
			display: flex;
			flex-direction: column;
		}
		.index-block-title {
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: space-between;
			margin-top: 20px;
			p {
				font-family: 'clear';
			}
			.task {
				color: #ff6c00;
				font-size: 50px;
				margin-left: 40px;
			}
			.check-All {
				color: #5786fc;
				font-size: 30px;
				margin-right: 40px;
			}
		}
		.index-info {
			text-align: left;
			color: #ff940b;
			margin-left: 40px;
			margin-top: 20px;
			line-height: 40px;
		}
	}
	.index-record {
		margin-top: 56px;
		width: 100vw;
		display: flex;
		justify-content: center;
		.index-record-title {
			width: 660px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p {
				color: #ff5a00;
				font-size: 50px;
				margin-left: 40px;
			}
		}
		.index-today-block {
			display: flex;
			flex-direction: row;
			.today-clockin {
				width: #{158 * 1.2}px;
				height: #{53 * 1.2}px;
				margin-right: 40px;
				background-image: url('../assets/image/index/todayButton.png');
				background-size: cover;
			}
			.today-detail {
				width: #{53 * 1.2}px;
				height: #{43 * 1.2}px;
				background-image: url('../assets/image/index/more.png');
				background-size: cover;
			}
		}
	}
	.clockin-calendar {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		.clockin-title {
			width: 660px;
			text-align: left;
			p,
			a {
				font-size: 28px;
			}
			p {
				margin-left: 40px;
				color: #ff940b;
			}
			a {
				color: #3272fe;
			}
		}
		.calendarlist {
			display: flex;
			flex-direction: row;
		}
	}
}
</style>
