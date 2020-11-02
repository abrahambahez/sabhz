<template>
    <section id="top-menu" class="container margin-left-auto margin-right-auto padding-top-1-5 flex justify-content-space-between">
        <nuxt-link :to="$i18n.locale === 'es' ? '/' : '/en' "
        class="secondary sans-light size-08">
            /sabhz
        </nuxt-link>   
        <nuxt-link to="archivo"
        class="secondary sans-light size-08">
            archivo
        </nuxt-link>
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