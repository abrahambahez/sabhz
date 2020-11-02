<template>
  <footer class="container flex justify-content-space-between"> 
    
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
<style >
footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2rem;
  width:100%;
  margin-left: 25%;
}
</style>