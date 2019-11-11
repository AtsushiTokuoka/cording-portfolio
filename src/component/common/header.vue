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
            <a href="#" class="sp-navi-link">NAVI①</a>
          </li>
          <li class="sp-navi-list">
            <a href="#" class="sp-navi-link">NAVI②</a>
          </li>
          <li class="sp-navi-list">
            <a href="#" class="sp-navi-link">NAVI③</a>
          </li>
          <li class="sp-navi-list">
            <a href="#" class="sp-navi-link">NAVI④</a>
          </li>
        </ul>
      </nav>
      <nav class="header-pc-navi">
        <ul>
          <li class="pc-navi-list">
            <a href="#">NAVI①</a>
          </li>
          <li class="pc-navi-list">
            <a href="#">NAVI②</a>
          </li>
          <li class="pc-navi-list">
            <a href="#">NAVI③</a>
          </li>
          <li class="pc-navi-list">
            <a href="#">NAVI④</a>
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