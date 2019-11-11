import Header from '../../component/common/header.vue'
import ProductList from '../../component/product-list.vue'
import ProductDetail from '../../component/product-detail.vue'
import Sidemenu from '../../component/common/sidemenu.vue'
import Footer from '../../component/common/footer.vue'

Vue.filter('price_format', function(val) {
  return val.toLocaleString()
})

const app = new Vue({
  el: '#app',
  components: {
    'product-list': ProductList,
    'product-detail': ProductDetail,
    'common-header': Header,
    'side-menu': Sidemenu,
    'common-footer': Footer
  }
})
