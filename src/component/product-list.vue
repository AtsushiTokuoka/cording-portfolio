<template>
  <!--ITEMS-->
  <section>
    <div class="m-sortbox mb-3 text-right">
      <label for="sort" class="ttl">並び替え：</label>
      <select id="sort" v-model.number="sortOrder" class="select-menu">
        <option value="1">標準（名前順）</option>
        <option value="2">価格が安い順</option>
        <option value="3">価格が高い順</option>
      </select>
    </div>
    <div class="m-disp-item">
      <div class="item-box" v-for="product in filteredList">
        <div class="inner">
          <img
            class="thumbnail"
            v-bind:src="require('../assets/images/product/' + product.image)"
            alt
          />
          <p class="product-name">{{product.name}}</p>
          <p class="price">￥{{product.price | price_format}}</p>
          <a href="detail.html" class="m-btn color-type01">商品詳細へ</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'product-list',
  computed: {
    filteredList: function() {
      const newList = [] //並べ替え表示用の配列

      //ロード時は並べ替え実行前の順番で初期化
      this.products.forEach(el => {
        newList.push(el)
      })

      // case別に並び替えを実行
      switch (this.sortOrder) {
        case 1: //標準(名前順)
          newList.sort(function(a, b) {
            if (a.name.toUpperCase() === b.name.toUpperCase()) {
              return 0
            }
            return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          })
          break
        case 2: //価格が安い順
          newList.sort(function(a, b) {
            return a.price - b.price
          })
          break
        case 3: // 価格が高い順
          newList.sort(function(a, b) {
            return b.price - a.price
          })
      }

      return newList
    }
  },
  data: function() {
    return {
      sortOrder: 1,
      // 商品リスト
      products: [
        { name: '商品タイトル②', price: 1200, image: 'item_02.jpg' },
        { name: '商品タイトル①', price: 1580, image: 'item_01.jpg' },
        { name: '商品タイトル③', price: 600, image: 'item_03.jpg' },
        { name: '商品タイトル④', price: 400, image: 'item_04.jpg' },
        { name: '商品タイトル⑥', price: 1000, image: 'item_06.jpg' },
        { name: '商品タイトル⑤', price: 1100, image: 'item_05.jpg' },
        { name: '商品タイトル⑦', price: 900, image: 'item_07.jpg' },
        { name: '商品タイトル⑨', price: 850, image: 'item_09.jpg' },
        { name: '商品タイトル⑧', price: 980, image: 'item_08.jpg' },
        { name: '商品タイトル⑪', price: 750, image: 'item_11.jpg' },
        { name: '商品タイトル⑩', price: 700, image: 'item_10.jpg' },
        { name: '商品タイトル⑫', price: 800, image: 'item_12.jpg' }
      ]
    }
  }
}
</script>



