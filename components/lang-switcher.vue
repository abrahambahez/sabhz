<template>
    <nuxt-link
      :to="switchLang"
      class="sans-light size-08 secondary decoration-none"
      >{{ langToSwitch }}
      
    </nuxt-link>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      langToSwitch: 'english site',
    }
  },
  computed: {
    switchLang() {
        if( this.$i18n.locale == 'es' ) {
            this.langToSwitch = 'english site';
            return '/en'
            
        } else {
            this.langToSwitch = 'sitio en español';
            return '/'
            
        }
    }
  }
}
</script>