<template>
  <footer> 
    <div class="container flex justify-content-space-between">
      <color-switcher />
      <a href="mailto:tacto@sabhz.com" class="decoration-none secondary sans-light size-08">
          tacto@sabhz.com
      </a>
    </div>
    

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
  height: 2.5rem;
  width:100%;
}
footer > div {
  margin: 4rem auto 1.5rem auto;
}
</style>