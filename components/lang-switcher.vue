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
      langToSwitch: 'English',
    }
  },
  computed: {
    switchLang() {
        if( this.$i18n.locale == 'es' ) {
            this.langToSwitch = 'English';
            return '/en'
            
        } else {
            this.langToSwitch = 'Español';
            return '/'
            
        }
    }
  }
}
</script>