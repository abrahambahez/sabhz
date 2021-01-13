<template>
  <main class="container margin-auto padding-top-25vh">
    <h1>Librero</h1>
    <div v-for="item in content" :key="item.slug" class="padding-top-08">       
        <nuxt-link :to="`${item.path}`">
            {{ item.title }}
        </nuxt-link>           
        <p class="margin-0 size-08 secondary">
            <span class="padding-right-08">{{ item.source_type }} </span>
            <span v-for="tag in item.tags" class="tag-separation" style="opacity:.5;" :key="tag">
                    #{{tag}} 
            </span>
        </p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, app, error }) {
    const slug = params.slug;
    const content = await $content('librero')
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
        console.log(err);
      });
    return { content };
  },
  head() {
    return {
      title: `${this.content.title} | sabhz `,
      meta: [
        {
          hid: 'description: ' + this.content.slug,
          name: 'description',
          content: this.content.description
        }
      ]
    }
  }
}
</script>

<style>

</style>