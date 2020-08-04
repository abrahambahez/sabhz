<template>
  <footer class="container margin-left-auto margin-right-auto align-center" style="margin-top:12rem;">
      <color-switcher />
      <p class="sans-light size-08 secondary">{{ $t('messages.footer') }}</p>     
  </footer>
</template>

<script>
import ColorSwitcher from '@/components/color-switcher'
export default {
    name: 'MainFooter',
    components: {
        ColorSwitcher
    }

}
</script>

<style scoped>


</style>>