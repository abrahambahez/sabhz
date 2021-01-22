<template>
    <div class="container margin-auto" >
        <br class="margin-top-2">
        <h2 class="margin-top-2 padding-left-1-2" v-if="backlinkPosts.length >= 1"> enlaces a esta nota</h2>
        <p class="margin-top-2 padding-left-1-2 secondary" v-else><i>Aún no hay enlaces a esta nota</i></p>
        <div class="flex flex-wrap ">
            <div class="post-container" v-for="backlinkPost in backlinkPosts" :key="backlinkPost.title" >
                <nuxt-link :to="backlinkPost.dir === '/notas' ? '/' + backlinkPost.slug : backlinkPost.path ">
                    <p class="margin-0 padding-top-1">{{backlinkPost.title}}</p>
                    <p class="margin-0 color size-08">{{ backlinkPost.excerpt }}</p>       
                </nuxt-link> 
                            
            </div>            
        </div>

    </div>
  
</template>

<script>
export default {
    name: 'BacklinksView',
    data () {
        return {
            backlinkPosts: {}
        }
    },
    props: {
        filterTerm: {
            type: String
        }
    },
    async fetch() {
        return this.backlinkPosts = await this.$content({deep: true})
        .only(['title', 'excerpt', 'type', 'slug', 'path', 'dir'])
        .where( { 
            'internalLinks' : { $contains: this.filterTerm }
        })
        .sortBy('title')
        .fetch()
    },
    methods: {
        setPath: function(backlink) {
            if(backlink.type === 'nota diaria') {
                return backlink.path
            } else if(backlink.type === 'nota de referencia') {
                return backlink.path
            } else {
                return backlink.slug
            }
        }
    }
}
</script>

<style scoped>
.post-container {
    padding: 0 1rem;
    margin: 1rem 0; 
    width: 18rem;  
    border: solid .08rem rgba(0,0,0,0);
    box-sizing: border-box;
}

.post-container:hover {
    background-color: var(--bg-secondary);
    border: solid .08rem var(--border-color);
    border-radius: .25rem;

}

</style>