<template>
    <main id="main-section" class="container margin-left-auto margin-right-auto">
        <lang-switcher />
        <a href="mailto:tacto@sabhz.com" 
        class="sans-light size-08 primary decoration-none transition-color hover-color pointer">
        tacto@sabhz.com</a>
    </main>
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
<style>
#main-section {
    padding-top: 1.5rem;
    display: flex; 
    justify-content: space-between;
}
</style>