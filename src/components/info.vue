<template>
	<div>
		<el-row :gutter="20">
		  	<el-col :span="6">总数：{{totalNum}}</el-col>
		  	<el-col :span="6">合计价格：{{totalPrice}}</el-col>
		  	<el-col :span="6">
		  		<el-button type="danger" size="medium" icon="el-icon-delete" @click="dialogDeleteAll">清空购物车</el-button>
		  	</el-col>
		  	<el-col :span="6"></el-col>
		</el-row>

		<el-dialog title="注意" :visible.sync="dialogVisible" width="20%">
		  	<span>要清空购物车吗?</span>
		  	<span slot="footer" class="dialog-footer">
		    	<el-button @click="dialogVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="dialogSure">确 定</el-button>
		  	</span>
		</el-dialog>
	</div>
  	
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	name: 'info',
  	data() {
		return {
			dialogVisible : false
		}
	},
	computed:{
		...mapGetters(['totalPrice','totalNum'])
	},
	methods: {
		...mapActions(['clearAllCart']),
		dialogDeleteAll( data ){
			this.dialogVisible = true;
		},
		dialogSure(){
			this.clearAllCart();
        	this.dialogVisible = false;
      	}
    }
}
</script>

<style scoped>
	.el-col-6{padding: 20px; text-align: center;}
</style>
