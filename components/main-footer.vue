<template>
  <footer class="container margin-left-auto margin-right-auto margin-top-12 margin-bottom-2 align-center"> 
      <p class="sans-light size-08 secondary">{{ $t('messages.footer.main') }}</p>
      <color-switcher />   
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