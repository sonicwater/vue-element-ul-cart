export default {

	addToCart({ commit },product) {
		commit('ADD_TO_CART',{
            id:product.id
        })
	},

    numChange({ commit }, data) {
        commit('NUM_CHANGE',{
            id:data.id,
            value:data.value
        })
    },

	//删除购物车的指定的商品
    delProduct({commit},product){
        commit('DELETE',product)
    },

    //清空购物车
    clearAllCart({commit}){
        commit('CLEAR')
    }

}