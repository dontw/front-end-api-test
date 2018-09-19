<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/shiba">shiba</router-link> |
      <router-link to="/cate">cate</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getToken")
  }
}
</script>
