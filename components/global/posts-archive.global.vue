<template>
    <section class="margin-left-auto margin-right-auto padding-top-3 padding-bottom-3 align-left">
        <global-search @getQuery="setQuery"/>
        <div v-for="post in posts" :key="post.slug" class="padding-top-08">       
            <nuxt-link :to="post.slug">
                {{ post.title }}
            </nuxt-link>           
            <p class="margin-0 size-08 secondary">
                {{ post.type }}
                <span v-for="tag in post.tags" class="tag-separation" style="opacity:.5;">
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
            sorting: 'type',
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
        return this.posts = await this.$content(this.$i18n.locale)
        .where({ node: { $ne: ''} })
        .sortBy(this.sorting)
        .search(this.query)
        .fetch()
    }
}
</script>

<style>

</style>