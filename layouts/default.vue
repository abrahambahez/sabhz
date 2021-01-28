<template>
  <div class="page-container">
    <top-menu />
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
import TopMenu from '@/components/top-menu'
import MainFooter from '@/components/main-footer'


export default {
  components: {
    TopMenu,
    MainFooter
  }
}
</script>

<style>
.top-menu {
  display: flex;
}
</style>
