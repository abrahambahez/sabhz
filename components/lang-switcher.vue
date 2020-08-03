<template>
  <div>
    <nuxt-link
      id="lang-switcher"
      :to="switchLocalePath(switchLang)">{{ langToSwitch }}

    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      langToSwitch: 'English'
    }
  },
  computed: {
    switchLang() {
        if( this.$i18n.locale == 'es' ) {
            this.langToSwitch = 'English';
            return 'en'
            
        } else {
            this.langToSwitch = 'Español';
            return 'es'
            
        }
    }
  }
}
</script>
<style >
#lang-switcher {
  text-decoration: none;
  margin: 0;
  color: var(--color-primary);
  font-weight: 200;
  text-transform: uppercase;
  cursor: pointer;
  transition: color .25s ease;
}
</style>