<template>
  <!--product detail-->
  <section class="l-product-area">
    <div class="m-pd-title mb-2">
      <h2 class="name">{{ currentProduct.name }}</h2>
    </div>
    <div class="m-pd-slide mb-4">
      <div class="main-img">
        <img
          v-bind:src="require('../assets/images/thumbnail/' + currentProduct.thumbnail[0])"
          alt="商品画像"
          class="js-main-img"
        />
      </div>
      <div class="sub-img">
        <div class="thumbnail" v-for="(image,index) in currentProduct.thumbnail" v-bind:key="image">
          <img
            v-bind:src="require('../assets/images/thumbnail/' + image)"
            alt="商品サムネイル"
            @click="changeImage(index)"
            v-bind:class="{'active':index === activeThumb}"
          />
        </div>
      </div>
    </div>
    <form action>
      <div class="m-order mb-4">
        <div class="order-detail">
          <dl class="order-row">
            <dt class="title">price</dt>
            <dd class="body">
              <span class="amount">￥{{currentProduct.price | price_format}}</span>
            </dd>
          </dl>
          <dl class="order-row">
            <dt class="title">
              <label for="quantity">quantity</label>
            </dt>
            <dd class="body">
              <input type="text" name id="quantity" class="quantity" />
            </dd>
          </dl>
        </div>
        <div class="cart-btn">
          <input type="submit" value="カートに入れる" class="m-btn color-type01 bold" />
        </div>
      </div>
    </form>
    <div class="m-description">
      <div class="title">商品説明</div>
      <p class="body">{{ currentProduct.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'product-detail',
  data: function() {
    return {
      targetId: '',
      currentProduct: {},
      // 商品リスト
      products: require('../assets/product-data.json'),
      activeThumb: 0 // 選択中のサムネイル判定フラグ
    }
  },
  methods: {
    changeImage: function(index) {
      // 選択したサムネイルをメイン画像へ
      const mainImg = $('.js-main-img')
      mainImg.attr('src', $(event.target).attr('src'))
      this.activeThumb = index //選択したサムネイルをアクティブ
    }
  },
  created: function() {
    // URLよりパラメータを取得。valueでtargetIdを初期化
    const params = location.search
      .substring(1, location.search.length)
      .split('=')
    this.targetId = params[1]

    // targetIdから商品を絞り込み
    this.currentProduct = this.products.find(product => {
      return product.id == this.targetId
    })
  }
}
</script>



