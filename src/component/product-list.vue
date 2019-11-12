<template>
  <!--ITEMS-->
  <section>
    <div class="m-sortbox mb-3">
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
          <a v-bind:href="'detail.html?id=' + product.id" class="m-btn color-type01">商品詳細へ</a>
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
      products: require('../assets/product-data.json')
    }
  }
}
</script>



