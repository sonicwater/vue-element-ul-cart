<template>
  	<div>
  		<el-container>
		  	<el-aside width="200px">
		  		<el-menu router :default-active="$route.path" class="el-menu-vertical-demo nav">
		      		<el-menu-item index="/">
			        	<i class="el-icon-menu"></i>
			        	<span slot="title">home</span>
			      	</el-menu-item>
			      	<el-menu-item index="/cart">
			        	<i class="el-icon-goods"></i>
			        	<span slot="title">
			        		cart
			        		<el-badge class="mark" v-if="totalNum" :value="totalNum" />
			        	</span>
			      	</el-menu-item>
			    </el-menu>
		  	</el-aside>
		  	<el-main>
		  		<el-tag v-if="page == 'home'">商品列表</el-tag>
		  		<el-tag v-if="page == 'cart'">购物车</el-tag>
				<Goods v-if="page == 'home'"></Goods>
				<Cart v-if="page == 'cart'"></Cart>
		  	</el-main>
		</el-container>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Goods from './goods'
import Cart from './cart'

export default {
	name: 'layout',
	props:['page'],
  	data() {
		return {
			
		}
	},
	components: {
    	Goods,
    	Cart
  	},
	computed:{
		...mapGetters([
			'goodList','totalNum'
		])
	},
	methods: {
		...mapActions(['addToCart'])
    },
    created(){
        
    },
    mounted(){
        // console.log(this.totalPrice)
    }
}
</script>

<style scoped>
</style>
