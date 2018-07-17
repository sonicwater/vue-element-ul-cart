<template>
	<el-table :data="goodList" style="width: 100%">
	    <el-table-column prop="id" label="商品ID" width="180"></el-table-column>
	    <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
	    <el-table-column prop="price" label="单价" width="180"></el-table-column>
	    <el-table-column label="操作">
	    	<template slot-scope="scope">
		        <el-button size="mini" type="primary" icon="el-icon-plus" @click="addToCart( scope.row )">加入购物车</el-button>
	    		
		    </template>
	    </el-table-column>
	</el-table>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	name: 'goods',
  	data() {
		return {
			
		}
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
