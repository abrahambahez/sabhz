<template>
    <section class="margin-left-auto margin-right-auto padding-top-3 padding-bottom-3 align-left">
        
        <div v-for="post in posts" :key="post.slug" class="padding-top-08">
            <nuxt-link :to="post.slug">
                {{ post.title }}
                
            </nuxt-link>           
           <!-- <p class="size-08 margin-bottom-0">{{post.description}}</p> -->
           <p class="margin-0 size-08">
               etiquetas: 
               <span v-for="tag in post.tags" :key="tag" class="tag-separation secondary">{{ tag }}</span>
            </p>
        </div>

    </section>
</template>

<script>

export default {
    name: 'PostsArchive',
    data() {
        return {
            posts: {}
        }
    },
    async fetch() {
        return this.posts = await this.$content(this.$i18n.locale)
        .where({ node: { $ne: ''} })
        .fetch()
    }
}
</script>

<style>

</style>