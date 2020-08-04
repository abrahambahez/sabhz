<template>
  <div class="flex justify-content-space-around flex-wrap margin-top-3 margin-bottom-3">
      <span 
      v-for="item in collections"
      :key="item"
      @click="selectCollection(item)"
      class="sans-light pointer hover-color transition-color"
      :class="[ activeItem == item ? 'active-collection' : 'inactive-collection' ]">
      {{ item }} </span>
  </div>
</template>

<script>
export default {
    name: 'CollectionFilter',
    data() {
        return {
            activeItem: this.collections[0]
        }
    },
    props: {
        collections: {
            type: Array,
            required: true
        }
    },
    methods: {
        selectCollection(selectedItem) {
            this.activeItem = selectedItem
            this.$emit('selectedCollection', selectedItem)
        }
    }

}
</script>

<style>

.active-collection {
    color: var(--color);
    text-decoration: underline;
}
.inactive-collection {
    color: var(--color-primary);
}
</style>