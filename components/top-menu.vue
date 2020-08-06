<template>
    <section id="top-menu" class="container margin-left-auto margin-right-auto padding-top-1-5 flex justify-content-space-between">
        <nuxt-link :to="$i18n.locale === 'es' ? '/' : '/en' "
        class="decoration-none sans-light size-08">
            {{ $t('messages.home') }}
        </nuxt-link>        
        <lang-switcher />
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