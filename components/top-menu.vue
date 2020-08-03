<template>
    <section class="container margin-left-auto margin-right-auto">
      <lang-switcher />
      <color-switcher />
    </section>
</template>

<script>
import LangSwitcher from '@/components/lang-switcher'
import ColorSwitcher from '@/components/color-switcher'

export default {
    name: 'TopMenu',
    components: {
        LangSwitcher,
        ColorSwitcher
    }
}
</script>
<style scoped>
section {
    padding-top: 1.5rem;
    display: flex; 
    justify-content: space-between;
}
</style>