<template>
  <main class="container margin-auto align-left">
      <nuxt-content :document="content" />
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

  }
}
</script>
<style>
main {
  width: 60%;
  margin:auto;
}

</style>

