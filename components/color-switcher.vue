<template>

    <p id="color-switcher"
      class="margin-0 sans sans-light size-08 primary pointer hover-color"
      @click="switchColor">
        {{colorToSwitch}} mode
    </p>

</template>

<script>
export default {
    name: 'ColorSwitcher',
    data() {
        return {
            actualColor: this.$colorMode.value
        }
    },
    computed: {
        colorToSwitch() {
            return this.actualColor === 'dark' ? 'light' : 'dark'
        }
    },
    methods: {
        switchColor() {
            if(this.actualColor === 'dark') {
                this.actualColor = 'light'
                return this.$colorMode.preference = 'light'
            } else {
                this.actualColor = 'dark'
                return this.$colorMode.preference = 'dark'  
            }
        }
    }
}
</script>
<style scoped>


</style>

