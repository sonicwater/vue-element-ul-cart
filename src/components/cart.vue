<template>
	<div>
		<el-table :data="cartProducts" style="width: 100%">
		    <el-table-column prop="id" label="商品ID" width="180"></el-table-column>
		    <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
		    <el-table-column label="数量" width="180">
		    	<template slot-scope="scope">
					<el-input-number size="mini" :min="1" :value="scope.row.num" v-on:input="handleBlur" @change="handleChange( scope.row )"></el-input-number>
		    	</template>
		    </el-table-column>
		    <el-table-column prop="price" label="单价" width="180"></el-table-column>
		    <el-table-column prop="total_num" label="总价" width="180"></el-table-column>
		    <el-table-column label="操作" width="180">
		    	<template slot-scope="scope">
			        <el-button type="danger" plain icon="el-icon-delete" size="mini" @click="dialogVisibleTrue( scope.row )">删除</el-button>
			    </template>
		    </el-table-column>
		</el-table>

		<Info v-if="totalNum"></Info>

		<el-dialog title="注意" :visible.sync="dialogVisible" width="20%">
		  	<span>确定要删除这个商品吗?</span>
		  	<span slot="footer" class="dialog-footer">
		    	<el-button @click="dialogVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="dialogSure">确 定</el-button>
		  	</span>
		</el-dialog>
	</div>
  	
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Info from './info'

export default {
	name: 'cart',
  	data() {
		return {
			dialogVisible : false,
			result : null,
			input_number_value:1
		}
	},
	computed:{
		...mapGetters([
			'cartProducts','totalNum'
		])
	},
	components: {
    	Info
  	},
	methods: {
		...mapActions(['delProduct','numChange']),
		dialogVisibleTrue( data ){
			this.dialogVisible = true;
			this.result = data;
		},
		dialogSure(){
			this.delProduct( this.result );
        	this.dialogVisible = false;
      	},
      	handleBlur(value){
      		this.input_number_value = value
      	},
      	handleChange( data ) {
        	data.value = this.input_number_value;
        	this.numChange( data );
      	}
    },
    created(){
        
    },
    mounted(){
    	
    }
}
</script>

<style scoped>
	.el-table th>.cell{text-align: center;}
	.el-table td>.cell{text-align: center;}
</style>
