<template>
  <footer>
    <Logo />
    <a 
      href="https://www.omdbapi.com/"
      target="_blank">
      (c){{ new Date().getFullYear() }} OMDbAPI
    </a>
  </footer>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
  footer {
    padding: 70px 0;
    text-align: center;
    opacity:  .3;
    .logo {
      display: block;
      margin-bottom: 4px;
    }
  }
</style>