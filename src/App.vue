<template>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
export default {
  created() {
    this.$store.dispatch('loadProducts')
    this.$store.dispatch('loadCart')
    this.$store.dispatch('loadSelectedProduct')
  }
}
</script>
