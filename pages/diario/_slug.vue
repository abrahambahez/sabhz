<template>
  <main class="flex flex-wrap justify-content-space-around">
    <div id="list-notes">
      <daily-notes />
    </div>
    <div class="padding-top-25vh">
      <h1 class="container margin-auto overflow-wrap-break-word">{{ dateTitle }}</h1>
      <p 
      class="container margin-auto size-08 secondary"> 
      <span v-for="tag in content.tags" class="tag-separation" :key="tag">#{{tag}}</span>
      </p>
      <nuxt-content class="container margin-auto align-left padding-05" :document="content" />
      <backlinks-view :filterTerm="content.path.slice(1)" />
    </div>
   
  </main>
</template>

<script>

export default {
  data () {
    return {
      content: {}
    }
  },
  computed: {
    dateTitle() {
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateTitle = new Date(this.content.title + 'T00:00').toLocaleDateString('es-MX', options);
      return dateTitle
    }
  },
  async asyncData({ $content, params, app, error }) {
    
    const dailyNotes = await $content('diario').sortBy('createdAt', 'desc').limit(1).fetch()
    const lastNote = dailyNotes[0]
    const slug = params.slug || lastNote.slug;
    const content = await $content('diario', slug)
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
<style >

#list-notes{
  margin-top: 25vh;
}
@media screen and (max-width: 1001px) {
  #list-notes {
    order:2;
    margin-top: 6rem;
  }
} 
</style>

