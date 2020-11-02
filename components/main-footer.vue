<template>
  <footer class="container margin-left-auto margin-right-auto flex justify-content-space-between margin-top-4 padding-bottom-1-5"> 
    
    <color-switcher />
    <a href="mailto:tacto@sabhz.com" class="decoration-none secondary sans-light size-08">
        tacto@sabhz.com
    </a>

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
