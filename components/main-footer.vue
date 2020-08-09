<template>
  <footer class="container margin-left-auto margin-right-auto flex justify-content-space-between margin-top-4 padding-bottom-1-5"> 
    <color-switcher />
    <lang-switcher />
    
    <nuxt-link :to="$i18n.locale === 'es' ? '/contacto' : '/en/contact' "
    class="decoration-none sans-light size-08">
        {{ $t('messages.contactPage') }}
    </nuxt-link>
  </footer>
</template>

<script>
import ColorSwitcher from '@/components/color-switcher'
import LangSwitcher from '@/components/lang-switcher'

export default {
    name: 'MainFooter',
    components: {
        ColorSwitcher,
        LangSwitcher
    }

}
</script>
