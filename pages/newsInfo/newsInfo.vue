<template>
	<view>
		<view id="newInfo" v-html="body"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				body:[]
			};
		},
		methods:{
			createLink(link){
				/* var link=document.createElement('link');
				link.rel="stylesheet";
				link.type="text/css";
				link.href=link;
				document.getElementsByTagName("head")[0].appendChild(link); */
			}
		},
		onLoad:function(e){
			uni.request({
				url: 'http://news-at.zhihu.com/api/4/news/'+e.id,
				success: res => {
					/* this.createLink(res.data.css); */
					this.body=res.data.body;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>

</style>
