<template>

    <p
      id="color-switcher"
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
    margin: 0;
    color: var(--color-primary);
    font-weight: 200;
    text-transform: uppercase;
    cursor: pointer;
    transition: color .25s ease;
}
#color-switcher:hover {
    color:var(--color);
    transition: color .25s ease;
}
</style>

