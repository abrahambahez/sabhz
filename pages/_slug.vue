<template>
  <main style="display: flex;">
    <section class="main-container" :class="{ 'fix-container': openResults}">  
      <h1 class="title">
        {{ content.title.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) ? formatDate(content.title) : content.title}} 
      </h1>
      <p v-if="content.tags[0] === 'nota-referencia' " class="authors-reference"
        :class="content.authors.length == 2 ? 'two-authors' : 'several-authors'">
        {{content.source_type}} de
        <span v-for="author in content.authors" :key="author">{{formatAuthor(author)}}</span>
      </p>
      <p class="tags"> 
        <span v-for="tag in content.tags" :key="tag"
          @click="getResults(tag)">#{{tag}}</span>
      </p>
      <nuxt-content class="content" :document="content" />
      <backlinks-view v-if="content.slug !== 'index' " class="backlinks" :filterTerm="content.slug" />
    </section>
    <tags-list 
      :list="results" 
      :list-title="resultsTitle" 
      :list-count="resultsCount" 
      :class="{'open-results': openResults}"
      @close-list="openResults = $event"
    />
  </main>    
</template>

<script>
import BacklinksView from '~/components/backlinks-view.vue';
import TagsList from '~/components/tags-list.vue';
import formatDate from '@/methods/formatDate.js';

export default {
  mixins: [formatDate],
  data () {
    return {
      content: {},
      results: [],
      resultsTitle: '',
      resultsCount: 0,
      openResults: false
    }
  },
  components: {
    BacklinksView,
    TagsList
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
    formatAuthor(author){
      let [lastName, name] = author.split(', ');
      return name + ' ' + lastName;
    },
    getResults: async function(tag) {
      this.results = await this.$content()
        .where({tags: {'$contains': tag}})
        .sortBy('title', 'desc')
        .fetch()

        this.resultsTitle = '#'+tag;
        this.resultsCount = this.results.length
        this.openResults = true;
    }
  },
  head() {
    return {
      title: this.content.title + ' | sabhz',
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

