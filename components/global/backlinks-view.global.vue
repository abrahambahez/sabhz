<template>
    <div class="container margin-auto" >
        <hr>
        <h2>Notas relacionadas</h2>
        <div class="flex flex-wrap ">
            <div class="post-container" v-for="backlinkPost in backlinkPosts" :key="backlinkPost.title" >
                <nuxt-link :to="backlinkPost.slug">
                    <p class="margin-0 padding-top-1">{{ backlinkPost.title }}</p>           
                </nuxt-link> 
                <p class="margin-0">{{ backlinkPost.description }}</p>            
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
            'node' : { $eq: this.filterTerm },
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