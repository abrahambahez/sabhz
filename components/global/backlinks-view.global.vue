<template>
    <div class="container margin-auto" >
        <hr class="width-100 margin-bottom-0">
        <h2 class="margin-top-2 padding-left-1-2" v-if="backlinkPosts.length >= 1"> enlaces a esta nota</h2>
        <p class="margin-top-2 padding-left-1-2 secondary" v-else><i>Aún no hay enlaces a esta nota</i></p>
        
        <div class="flex flex-wrap ">
            <div class="post-container" v-for="backlinkPost in backlinkPosts" :key="backlinkPost.title" >
                <nuxt-link :to="backlinkPost.slug">
                    <p class="margin-0 padding-top-1">{{ backlinkPost.title }}</p>
                    <p class="margin-0 color">{{ backlinkPost.description }}</p>          
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
        },
        selfPath: {
            type: String
        }
    },
    async fetch() {

        return this.backlinkPosts = await this.$content(this.$i18n.locale)
        .only(['title', 'description', 'slug', 'path'])
        .where( { 
            'internalLinks' : { $contains: this.filterTerm },
            'path' : { $ne: this.selfPath }
        })
        .sortBy('title')
        .fetch()
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
.post-container p {
    font-size: .8rem;
}
.post-container:hover {
    background-color: var(--bg-secondary);
    border: solid .08rem var(--border-color);
    border-radius: .25rem;

}

</style>