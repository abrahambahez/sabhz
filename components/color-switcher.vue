<template>

    <p id="color-switcher"
      class="margin-0 uppercase sans-light size-08 primary">
        <span @click="$colorMode.preference = 'light' "
        class="transition-color hover-color pointer">light</span>
        <span> | </span>
        <span @click="$colorMode.preference = 'dark' "
        class="transition-color hover-color pointer">dark</span>
    </p>

</template>

<script>
export default {
    name: 'ColorSwitcher',
    data() {
        return {
            actualColor: this.$colorMode.value,
            availableColors: ['dark', 'light']
        }
    },
    computed: {
        alternativeColor() {
            return this.availableColors.filter(i => i == this.$colorMode.value )
            
        }
    },
    methods: {
        switchColor(colorToSwitch) {
            
            return this.$colorMode.preference = colorToSwitch               

        }
    }
}
</script>
<style scoped>


</style>

