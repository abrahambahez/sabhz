<template>
    <section class="margin-left-auto margin-right-auto padding-top-3 padding-bottom-3 align-left">
        <global-search @getQuery="setQuery"/>
        <div v-for="post in posts" :key="post.slug" class="padding-top-08">       
            <nuxt-link :to="post.slug">
                {{ post.title }}
            </nuxt-link>           
            <p class="margin-0 size-08 secondary">
                {{ post.type }}
                <span v-for="tag in post.tags" class="tag-separation opacity-05" :key="tag">
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
            return this.posts = await this.$content('notas')
            .where({ type: { $ne: 'noindex'} })
            .fetch()
        } else {
            return this.posts = await this.$content('notas')
            .where({ type: { $ne: 'noindex'} })
            .search(this.query)
            .fetch()
        }
        
    }
}
</script>

<style>

</style>