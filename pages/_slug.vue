<template>
  <main>
      <h1 class="container margin-auto"> {{ content.title }} </h1>
      <nuxt-content class="container margin-auto align-left" :document="content" />
  </main>
</template>

<script>
export default {

  async asyncData({ $content, params, app, error }) {
    const slug = params.slug || "index";
  
    const content = await $content(app.i18n.locale, slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
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
<style >
main > h1 {
  padding-top: 25vh;
}
</style>

