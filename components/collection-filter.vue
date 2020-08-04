<template>
  <div class="flex justify-content-space-around">
      <span 
      v-for="item in collections"
      :key="item"
      @click="selectCollection(item)"
      class="sans-light pointer secondary">
      {{ item }} </span>
  </div>
</template>

<script>
export default {
    name: 'CollectionFilter',
    props: {
        collections: {
            type: Array,
            required: true
        }
    },
    methods: {
        selectCollection(selectedItem) {
            this.$emit('selectedCollection', selectedItem)
        }
    }

}
</script>

<style>

</style>