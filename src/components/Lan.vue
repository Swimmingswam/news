<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item, index) in arrList">
	            	<a href="conText.html">
	                    <h2>{{item.title}}</h2>
	                    <p>{{item.content}}</p>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.fetchData()  //此处有误
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('src/data/content.data').then(function(res){
						_this.arrList=res.data;
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>