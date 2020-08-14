<template>
    <section class="margin-left-auto margin-right-auto padding-top-3 padding-bottom-3 align-center">
        
        <div v-for="post in posts" :key="post.slug" class="margin-bottom-3 margin-top-3">
            <h6 class="margin-bottom-0">
                <nuxt-link :to="lang == 'es' ? post.slug : post.path">
                    {{ post.title }}
                </nuxt-link>
            </h6>
            <p class="margin-0 secondary sans size-08">{{ post.collection }}</p>    
        </div>

    </section>
</template>

<script>

export default {
    name: 'PostsArchive',
    data() {
        return {
            posts: {},
            lang: this.$i18n.locale,
            selectedCollection: this.$t('contentNavigation.collections')[0]
        }
    },
    async fetch() {
        return this.posts = await this.$content(this.$i18n.locale)
        .where({ collection: { $ne: ''} })
        .fetch()
    }
}
</script>

<style>

</style>