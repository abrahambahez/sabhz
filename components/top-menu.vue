<template>
    <section id="top-menu" class="container margin-left-auto margin-right-auto padding-top-1-5 flex justify-content-space-between">
        <color-switcher />
        <nuxt-link :to="$i18n.locale === 'es' ? '/' : '/en' "
        class="decoration-none sans-light size-08">
            /sabhz
        </nuxt-link>   
        <nuxt-link :to="$i18n.locale === 'es' ? '/archivo' : '/en/archive' "
        class="decoration-none sans-light size-08">
            {{ $t('messages.archive') }}
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