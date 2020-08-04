<template>
    <section class="margin-left-auto margin-right-auto padding-top-3">
       <!-- <collection-filter 
        :collections="$t('contentNavigation.collections')" 
        @selectedCollection="setCollection" />
        <p>{{ selectedCollection }}</p>
        <hr>-->
        <div v-for="post in posts" :key="post.slug" class="margin-bottom-3 margin-top-3">
            <h3>
                <nuxt-link :to="lang == 'es' ? post.slug : post.path">
                    {{ post.title }}
                </nuxt-link>
            </h3>
            <p class="sans primary sans-light margin-top-0">{{ post.collection }}</p>
            <p>{{ post.description }}</p>
            
        </div>

    </section>
</template>

<script>
import CollectionFilter from '@/components/collection-filter'
export default {
    name: 'ContentIndex',
    data() {
        return {
            posts: {},
            lang: this.$i18n.locale,
            selectedCollection: ''
        }
    },
    components: {
        CollectionFilter
    },
    async fetch() {
        return this.posts = await this.$content(this.$i18n.locale)
        .where({ slug: { $ne: 'index'} }) // replace 'index' for slug.params
        .fetch()
    },
    computed: {
        routedPath() {
            return this.$i18n.localePath
        }
    },
    methods: {
        setCollection: async function(selectedItem) {
            this.selectedCollection = selectedItem
            return this.posts = await this.$content(this.$i18n.locale)
            .where({ slug: { $ne: 'index'} })
            .where({ collection: { $contains: selectedItem} }) // replace 'index' for slug.params
            .fetch()
        }

    }



}
</script>

<style>

</style>