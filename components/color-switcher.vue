<template>

    <div id="color-switcher"
      class="margin-0 size-08 pointer"
      @click="switchColor">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="color-switch-icon" fill-rule="evenodd" clip-rule="evenodd" d="M8 14C8 14 8 10.8137 8 7.5C8 4.18629 8 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" />
        </svg>
    </div>

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

<style>
.color-switch-icon {
    fill: var(--color-secondary);
    transition: all 0.25s ease-out;
}
.color-switch-icon:hover {
    fill: var(--color);
    transition: all 0.25s ease-in;
}

</style>

