<template>
  <!--product detail-->
  <section class="l-product-area">
    <div class="m-pd-title mb-2">
      <h2 class="name">{{ currentProduct.name }}</h2>
    </div>
    <div class="m-pd-slide mb-4">
      <div class="main-img">
        <img v-bind:src="require('../assets/images/product/' + currentProduct.image)" alt="商品画像" />
      </div>
      <div class="sub-img">
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/thumb02.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/thumb03.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/thumb04.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/thumb05.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/thumb01.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/gray.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/gray.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/gray.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/gray.jpg" alt="商品サムネイル" />
        </div>
        <div class="thumbnail">
          <img src="../assets/images/thumbnail/gray.jpg" alt="商品サムネイル" />
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
      <p class="body">
        説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明
        テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキ
        スト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
      </p>
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
      products: [
        { id: 2, name: '商品タイトル②', price: 1200, image: 'item_02.jpg' },
        { id: 1, name: '商品タイトル①', price: 1580, image: 'item_01.jpg' },
        { id: 3, name: '商品タイトル③', price: 600, image: 'item_03.jpg' },
        { id: 4, name: '商品タイトル④', price: 400, image: 'item_04.jpg' },
        { id: 6, name: '商品タイトル⑥', price: 1000, image: 'item_06.jpg' },
        { id: 5, name: '商品タイトル⑤', price: 1100, image: 'item_05.jpg' },
        { id: 7, name: '商品タイトル⑦', price: 900, image: 'item_07.jpg' },
        { id: 9, name: '商品タイトル⑨', price: 850, image: 'item_09.jpg' },
        { id: 8, name: '商品タイトル⑧', price: 980, image: 'item_08.jpg' },
        { id: 11, name: '商品タイトル⑪', price: 750, image: 'item_11.jpg' },
        { id: 10, name: '商品タイトル⑩', price: 700, image: 'item_10.jpg' },
        { id: 12, name: '商品タイトル⑫', price: 800, image: 'item_12.jpg' }
      ]
    }
  },
  mounted: function() {
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



