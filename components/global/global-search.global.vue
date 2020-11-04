<template>
    <div class="margin-bottom-4">
        <label for="global-search" class="size-1 secondary ">Buscar por</label>
        <div class="flex">
            <input id="global-search" class="global-search" type="text" v-model="query"
            @input="getQuery(query)"
            placeholder="título, texto, ..."
            >
        </div>
    </div>

  
</template>

<script>
export default {
    name: 'GlobalSearch',
    data: function(){
        return {
            query: ''
        }
    },
    methods: {
        getQuery: function(query) {
            this.$emit('getQuery', query);
        }
    }
}
</script>

<style>
.global-search {
    background-color: transparent;
    color: var(--color-secondary);
    font-size: 3rem;
    font-weight: 700;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: .25rem solid var(--border-color);
    width: 100%;
}
</style>