import Header from '../../component/common/header.vue'
import ProductList from '../../component/product-list.vue'

const app = new Vue({
  el: '#app',
  components: {
    'product-list': ProductList,
    'common-header': Header
  }
})
