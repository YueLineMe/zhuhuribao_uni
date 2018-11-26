<template>
	<view class="content">
		<view class="uni-list">
			<view class="part2">
				<swiper class="banner-box" indicator-dots autoplay indicator-active-color="#169bd5" circular :interval="5000"
				:duration="300" indicator-color="rgba(0,0,0,.3)">
					<swiper-item v-for="(item, index) in topList" :key="index" @tap="openInfo" :data-newsid="item.id">
						<image class="banner-image" :src="item.image" mode="aspectFill" lazy-load></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" 
			@tap="openInfo" :data-newsId="item.id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.images"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				topList:[]
			};
		},
		onLoad() {
			uni.request({
				url: 'http://news-at.zhihu.com/api/4/news/latest',
				method: 'GET',
				data: {},
				success: res => {
					this.list=res.data.stories;
					this.topList=res.data.top_stories;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			openInfo(e){
				uni.navigateTo({
					url: '../newsInfo/newsInfo?id='+e.currentTarget.dataset.newsid
				});
			}
		}
	}
</script>

<style>
	.part2 {
		width: 100%;
		height: 360px;
		border-bottom: 20px solid #f9f9f9;
		float:left;
		overflow: hidden;
		position: relative;
	}

	.part2:after {
		content: " ";
		height: 20px;
		border-radius: 50%;
		background: #f9f9f9;
		position: absolute;
		bottom: -10px;
		left: -20px;
		right: -20px;
	}

	.banner-box {
		width: 100%;
		height: 100%;
	}

	.banner-image {
		width: 100%;
		height: 100%;
	}

</style>
