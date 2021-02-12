<template>
    <div>
        <br>
        <h2 v-if="backlinkPosts.length >= 1"> referencias a esta nota</h2>
        <p v-else><i>Esta nota no ha sido referenciada</i></p>
        <div>
            <nuxt-link v-for="backlinkPost in backlinkPosts" :key="backlinkPost.title" 
                :to="backlinkPost.slug" class="backlink-link">
                <h3>{{backlinkPost.title.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) ? formatDate(backlinkPost.title) : backlinkPost.title}}</h3>
                <p v-for="p in matchTokens(backlinkPost.text)" 
                    :key="p"
                    class="context-string"
                    >
                    {{clearMD(p)}}
                </p>
            </nuxt-link> 
        </div>

    </div>
  
</template>

<script>
import formatDate from '@/methods/formatDate.js';

export default {
    mixins: [formatDate],
    name: 'BacklinksView',
    data () {
        return {
            backlinkPosts: {},
            backlinkContext: ''
        }
    },
    props: {
        filterTerm: {
            type: String
        }
    },
    async fetch() {
        return this.backlinkPosts = await this.$content({text: true})
        .where( { 
            'internalLinks' : { $contains: this.filterTerm }
        })
        .sortBy('title')
        .fetch()
    },
    methods: {
        matchTokens: function(sourceText) {          
            let expr = new RegExp(`.+${this.filterTerm}.+`)
            return sourceText.match(expr)
        },
        clearMD: function(str) {
            const cleanMarkdown = /^\s|#|\*+|>+|_+|\[+|\]+|\(http.+\)|^---|-\s/g
            return str.replace(cleanMarkdown, '')
        }
    }
}
</script>
<style scoped>
.context-string{
    color: var(--color-secondary);
    font-size: 1rem;  
}
</style>