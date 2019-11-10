import Header from '../../component/common/header.vue'
import ProductList from '../../component/product-list.vue'
import Sidemenu from '../../component/common/sidemenu.vue'
import Footer from '../../component/common/footer.vue'

const app = new Vue({
  el: '#app',
  components: {
    'product-list': ProductList,
    'common-header': Header,
    'side-menu': Sidemenu,
    'common-footer': Footer
  }
})
