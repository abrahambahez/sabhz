<template>
  <main >
    <div style="padding-top:25vh;">
      
      <h1 class="container margin-auto overflow-wrap-break-word">
        {{ content.title }} 
        <span v-if="content.type != 'noindex'"
        class="secondary" style="opacity: .5;">
         • {{content.type}}
        </span>
      </h1>
      <p 
      class="container margin-auto size-08 italic secondary"> 
      <span v-for="tag in content.tags" class="tag-separation" :key="tag"> #{{tag}} </span>
      </p>
    </div>
    <nuxt-content class="container margin-auto align-left" :document="content" />
    <backlinks-view v-if="showBacklinks" :filterTerm="content.slug" />

  </main>
</template>

<script>

export default {
  data () {
    return {
      content: {},
      showBacklinks: true
    }
  },
  async asyncData({ $content, params, app, error }) {
    const slug = params.slug || "index";
    const locale = app.i18n.locale
    const content = await $content(locale, slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });
    const showBacklinks = content.type === 'noindex' || content.type === 'índice' ? false : true;
    return { content, showBacklinks};
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

</style>

