<template>

    <p
      id="color-switcher"
      class="margin-0 uppercase sans-light size-08 pointer primary"
      @click="switchColor">
        {{ colorToSwitch }}
    </p>

</template>

<script>
export default {
    name: 'ColorSwitcher',
    data() {
        return {
            colorToSwitch: 'light mode'
        }
    },
    methods: {
        switchColor() {
            if(this.$colorMode.value == 'dark') {
                this.colorToSwitch = 'dark mode';
                return this.$colorMode.preference = 'light'
                
            } else {
                this.colorToSwitch = 'light mode';
                return this.$colorMode.preference = 'dark'
                
            }
        }
    }

}
</script>
<style scoped>
#color-switcher {
    transition: color .25s ease;
}
#color-switcher:hover {
    color:var(--color);
    transition: color .25s ease;
}
</style>

