<template>
  <div>
    <nuxt-link
      :to="switchLang"
      class="margin-0 uppercase sans-light size-08 primary decoration-none"
      >{{ langToSwitch }}
      
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      langToSwitch: 'Site in English',
    }
  },
  computed: {
    switchLang() {
        if( this.$i18n.locale == 'es' ) {
            this.langToSwitch = 'Site in English';
            return '/en'
            
        } else {
            this.langToSwitch = 'Sitio en Español';
            return '/'
            
        }
    }
  }
}
</script>