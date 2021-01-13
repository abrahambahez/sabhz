<template>
    <section id="top-menu" class="container margin-left-auto margin-right-auto padding-top-1-5 flex justify-content-space-between align-content-center">
        <nuxt-link to="/"
        class="secondary sans-light size-08 weight-bold" style="padding-top:1.5px;">
            sabhz
        </nuxt-link>
        <div class="margin-0 interpunct-separator">
            <nuxt-link to="/diario"
            class="secondary sans-light size-08">
               diario
            </nuxt-link>
            <nuxt-link to="/librero"
            class="secondary sans-light size-08">
               librero
            </nuxt-link>
            <nuxt-link to="/archivo"
            class="secondary sans-light size-08">
               archivo
            </nuxt-link>            
        </div>  

    </section>
</template>

<script>
import ColorSwitcher from '@/components/color-switcher'

export default {
    name: 'TopMenu',
    components: {
        ColorSwitcher
    }
}
</script>
<style>
.interpunct-separator > *:not(:last-child)::after {
    content: ' ·';
}
</style>