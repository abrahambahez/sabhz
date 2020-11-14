<template>
    <section class="journal-posts flex flex-direction-column justify-content-flex-start">
        <h3>entradas</h3>
        <div v-for="post in posts" :key="post.slug" class="margin-0 padding-05">
            <nuxt-link :to="post.path">
                {{ dateTitle(post.title) }}
            </nuxt-link>           

        </div>
  
    </section>
</template>

<script>

export default {
    name: 'DailyNotes',
    data() {
        return {
            posts: {}
        }
    },
    methods: {
        dateTitle(title) {
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateTitle = new Date(title + 'T00:00').toLocaleDateString('es-MX', options);
            return dateTitle
        }
    },
    async fetch() {
        return this.posts = await this.$content('diario')
        .where({ type: { $eq: 'nota diaria'} })
        .sortBy('createdAt', 'desc')
        .fetch()
    }
}
</script>

<style>
.journal-posts{
    min-width: 20%;
    min-height: 50%;
    overflow: auto;
    padding: 0 2.5rem;
}

</style>