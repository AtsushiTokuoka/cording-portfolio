<template>
  <!--product detail-->
  <section class="l-product-area">
    <div class="m-pd-title mb-2">
      <h2 class="name">商品タイトル①</h2>
    </div>
    <div class="m-pd-slide mb-4">
      <div class="main-img">
        <img src="../assets/images/thumbnail/thumb01.jpg" alt="商品画像" />
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
              <span class="amount">￥1,580&nbsp;</span>
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
    return {}
  }
}
</script>



