<template>
  <main>
    <div class="padding-top-25vh">
      <p class="container margin-auto size-08 secondary"> 
        <span v-for="tag in content.tags" class="tag-separation" :key="tag">#{{tag}}</span>
      </p>
      <h1 class="container margin-auto overflow-wrap-break-word">
        {{ content.title }} 
        <span v-if="content.type != 'noindex'"
        class="secondary" style="opacity: .5;">
         • {{content.source_type}}
        </span>
      </h1>
      <p class="container margin-left-auto margin-right-auto padding-bottom-0 padding-top-0 secondary">
        <span class="author-separation" v-for="author in content.authors" :key="author">{{author}}</span>
      </p>
    </div>
    <nuxt-content class="container margin-auto align-left" :document="content" />
    <backlinks-view v-if="showBacklinks"   />

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
  async asyncData({ $content, params, error }) {
    const content = await $content('librero', params.slug).fetch()
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
<style >
.author-separation:not(:last-child):after {
    content:'; ';
}
#list-notes{
  margin-top: 25vh;
}
@media screen and (max-width: 1001px) {
  #list-notes{
    order:2;
    margin-top: 6rem;
  }
} 
</style>

