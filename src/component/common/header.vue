<template>
  <header class="l-header" id="pagetop">
    <div class="inner container">
      <h1 class="header-ttl">
        <a href="index.html">PORTFOLIO</a>
      </h1>
      <p class="header-icon-sp">
        <i class="icon" @click="menuOpen"></i>
      </p>
      <!--sp_icon_wrap-->
      <nav class="header-sp-navi js-menuToggle">
        <ul class="wrap">
          <li class="sp-navi-list">
            <a href="#" class="sp-navi-link">navi1</a>
          </li>
          <li class="sp-navi-list">
            <a href="#" class="sp-navi-link">navi2</a>
          </li>
          <li class="sp-navi-list">
            <a href="#" class="sp-navi-link">navi3</a>
          </li>
          <li class="sp-navi-list">
            <a href="#" class="sp-navi-link">navi4</a>
          </li>
        </ul>
      </nav>
      <nav class="header-pc-navi">
        <ul>
          <li class="pc-navi-list">
            <a href="#">navi1</a>
          </li>
          <li class="pc-navi-list">
            <a href="#">navi2</a>
          </li>
          <li class="pc-navi-list">
            <a href="#">navi3</a>
          </li>
          <li class="pc-navi-list">
            <a href="#">navi4</a>
          </li>
        </ul>
      </nav>
      <!-- pc_navi -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'common-header',
  data() {
    return {}
  },
  methods: {
    menuOpen: e => {
      $('.js-menuToggle').slideToggle(200)
      $(e.target).toggleClass('close')
    }
  }
}
</script>