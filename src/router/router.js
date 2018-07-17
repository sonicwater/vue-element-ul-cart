import App from '../App'
import Home from '../page/home'
import Cart from '../page/cart'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '/',
        component: Home
    }, {
        path: '/cart',
        component: Cart
    }]
}]