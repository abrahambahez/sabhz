<template>
    <main id="main-section" class="container margin-left-auto margin-right-auto">
        <color-switcher />
        <lang-switcher />
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