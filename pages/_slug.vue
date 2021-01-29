<template>
  <main>
    <section class="container">  
      <h1 class="title">
        {{ content.title.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) ? formatDate(content.title) : content.title}} 
        <span v-if="content.type != 'noindex'"
        class="type"
        @click="getPostList({type: content.type })">
        • {{content.type}}
        </span>
      </h1>
      <p v-if="content.type === 'nota de referencia' " class="authors-reference"
        :class="content.authors.length == 2 ? 'two-authors' : 'several-authors'">
        {{content.source_type}} de
        <span v-for="author in content.authors" :key="author">{{formatAuthor(author)}}</span>
      </p>
      <p class="tags"> 
        <span v-for="tag in content.tags" :key="tag">#{{tag}}</span>
      </p>
    </section>
    <nuxt-content class="content container" :document="content" />
    <backlinks-view v-if="content.slug !== 'index' " class="backlinks container" :filterTerm="content.slug" />
  </main>    
</template>

<script>
export default {
  data () {
    return {
      content: {}
    }
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const content = await $content(slug, {deep: true})
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });    
    return { content };
  },
  methods: {
    formatDate(str) {
        let date = new Date(str);
        return date.toLocaleString('es-MX', 
          { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
        })
    },
    formatAuthor(author){
      let [lastName, name] = author.split(', ');
      return name + ' ' + lastName;
    }
  },
  head() {
    return {
      title: this.content.title,
      meta: [
        { hid: 'description', name: 'description', content: this.content.excerpt },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.content.title },
        { hid: 'og:description', property: 'og:description', content: this.content.excerpt },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.content.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.content.excerpt }
      ]
    }
  }
}
</script>

