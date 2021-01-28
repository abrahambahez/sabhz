<template>
    <section >
        <global-search @getQuery="setQuery"/>
        <div v-for="post in posts" :key="post.slug">       
            <nuxt-link :to="post.slug">
                {{ post.title }}
            </nuxt-link>           
            <p >
                {{ post.type }}
                <span v-for="tag in post.tags" :key="tag">
                     #{{tag}} 
                </span>
            </p>
        </div>
  
    </section>
</template>

<script>

export default {
    name: 'PostsArchive',
    data() {
        return {
            posts: {},
            query: ''
        }
    },
    methods: {
        setQuery: function (q) {
            this.query = q;
            this.$fetch();
        }
    },
    async fetch() {
        if( this.query == '' ) {
            return this.posts = await this.$content()
            .where({ type: { $ne: 'noindex'} })
            .fetch()
        } else {
            return this.posts = await this.$content()
            .where({ type: { $ne: 'noindex'} })
            .search(this.query)
            .fetch()
        }
        
    }
}
</script>

<style>

</style>