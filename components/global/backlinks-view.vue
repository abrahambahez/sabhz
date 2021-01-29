<template>
    <div>
        <br>
        <h2 v-if="backlinkPosts.length >= 1"> enlaces a esta nota</h2>
        <p v-else><i>Aún no hay enlaces a esta nota</i></p>
        <div>

        <nuxt-link v-for="backlinkPost in backlinkPosts" :key="backlinkPost.title" 
            :to="backlinkPost.slug" class="backlink-link">
            <h4>{{backlinkPost.title.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) ? formatDate(backlinkPost.title) : backlinkPost.title}}</h4>
            <p class="excerpt">{{ backlinkPost.excerpt }}</p>
        </nuxt-link> 
                
                            
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
        .only(['title', 'excerpt', 'type', 'slug'])
        .where( { 
            'internalLinks' : { $contains: this.filterTerm }
        })
        .sortBy('title')
        .fetch()
    },
    methods: {
        formatDate(str) {
        let date = new Date(str);
        return date.toLocaleString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        }
    }
}
</script>