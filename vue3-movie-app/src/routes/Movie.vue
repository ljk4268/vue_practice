<template>
  <h1>
    Movie!
  </h1>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.id)
    this.$store.dispatch('movie/searchMovieWithId', {
      // movie/tt123762 ( = movie/:id )
      id: this.$route.params.id
    })
  }
}
</script>