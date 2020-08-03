<template>
  <div>
    <top-menu />
    <Nuxt />
  </div>
</template>

<script>
import TopMenu from '@/components/top-menu'


export default {
  components: {
    TopMenu
  }
}
</script>

<style>
.top-menu {
  display: flex;
}
</style>
