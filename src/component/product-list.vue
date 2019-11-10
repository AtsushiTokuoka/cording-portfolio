<template>
  <!--ITEMS-->
  <section class="g-mb30-sp g-mb30-pc">
    <div class="m-disp-item g-mb26-sp g-mb20-pc">
      <div class="item-box" v-for="product in products">
        <div class="inner">
          <img
            class="thumbnail"
            v-bind:src="require('../assets/images/product/' + product.image)"
            alt
          />
          <p class="product-name">{{product.name}}</p>
          <p class="price">金額：{{product.price}}</p>
          <a href="detail.html" class="m-btn color-type01">商品詳細へ</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'product-list',
  data: function() {
    return {
      // 商品リスト
      products: [
        { name: '商品タイトル①', price: 1580, image: 'item_01.jpg' },
        { name: '商品タイトル②', price: 1580, image: 'item_02.jpg' },
        { name: '商品タイトル③', price: 1580, image: 'item_03.jpg' },
        { name: '商品タイトル④', price: 1580, image: 'item_04.jpg' },
        { name: '商品タイトル⑤', price: 1580, image: 'item_05.jpg' },
        { name: '商品タイトル⑥', price: 1580, image: 'item_06.jpg' },
        { name: '商品タイトル⑦', price: 1580, image: 'item_07.jpg' },
        { name: '商品タイトル⑧', price: 1580, image: 'item_08.jpg' },
        { name: '商品タイトル⑨', price: 1580, image: 'item_09.jpg' },
        { name: '商品タイトル⑩', price: 1580, image: 'item_10.jpg' },
        { name: '商品タイトル⑪', price: 1580, image: 'item_11.jpg' },
        { name: '商品タイトル⑫', price: 1580, image: 'item_12.jpg' }
      ]
    }
  }
}
</script>



