<template>
    <div class="margin-bottom-4">
        <label for="global-search" class="size-1 secondary align-center">Buscar por</label>
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
    font-size: 3.2rem;
    border: solid .08rem var(--border-color);
    border-radius: .25rem;
    width: 100%;
    padding-left: .8rem;
    caret-color: var(--link-color);
}
.global-search:hover, .global-search:focus {
    background-color: var(--bg-secondary);
}
input:focus, textarea:focus, select:focus{
    outline: none;
}
</style>