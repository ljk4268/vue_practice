<template>
  <div>
    Child: {{ msg }}
  </div>
</template>

<script>
export default {
  inject: ['msg']
}
</script>