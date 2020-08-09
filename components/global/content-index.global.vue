<template>
    <section class="margin-left-auto margin-right-auto padding-top-3 padding-bottom-3">
        <h2 class="align-center">{{ $t('contentNavigation.collectionsTitle') }}</h2>
        <collection-filter 
        :collections="$t('contentNavigation.collections')" 
        @selectedCollection="setCollection" />
        
        <div v-for="post in posts" :key="post.slug" class="margin-bottom-3 margin-top-3">
            <h3 class="margin-bottom-0">
                <nuxt-link :to="lang == 'es' ? post.slug : post.path" class="decoration-none">
                    {{ post.title }}
                </nuxt-link>
            </h3>
            <p class="margin-0">{{ post.description }}</p>       
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
            selectedCollection: this.$t('contentNavigation.collections')[0]
        }
    },
    components: {
        CollectionFilter
    },
    async fetch() {
        return this.posts = await this.$content(this.$i18n.locale)
        .where({ collection: { $contains: this.selectedCollection} })
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
            .where({ collection: { $contains: selectedItem} })
            .fetch()
        }

    }



}
</script>

<style>

</style>