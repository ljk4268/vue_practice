<template>
  <RouterLInk 
    to="/" 
    class="logo">
    <span>OMDbAPI</span>.com
  </RouterLInk>
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";

.logo {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  span {
    color: $primary;
  }
}
</style>