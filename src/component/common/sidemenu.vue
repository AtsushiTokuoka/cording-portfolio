<template>
  <aside class="l-sidemenu col-md-4 mt-4 mt-md-0">
    <div class="info">
      <h2 class="ttl">ポートフォリオ概要</h2>
      <p class="text">
        作例として、レスポンシブのECサイト商品一覧ページと商品詳細ページを作成いたしました。
        <br />デザイン面の実務経験はありませんので、デザインデータのサンプルを入手し、それをもとにコーディングのみを行いました。
        <br />
      </p>
    </div>
    <div class="info">
      <h2 class="ttl">意識した点</h2>
      <p class="text">
        SMACSSによるCSS設計をベースにコーディングし、再利用可能なモジュールに分割することで、保守しやすい設計を意識しました。
        <br />レスポンシブ対応についてはBootstrapのルールを取り入れ、
        要件に応じて変更できるように、カスタマイズ用のscssファイルでBootstrapの初期設定を上書きできるような構成にしました。
        <br />なお、各モジュールをコンポーネントごとに分割するために、vue.jsの単一ファイルコンポーネントで構成しました。
      </p>
    </div>
  </aside>
  <!-- sidebar end-->
</template>

<script>
export default {
  name: 'sidemenu',
  data: function() {
    return {}
  }
}
</script>