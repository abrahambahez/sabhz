<template>
  <main class="container margin-auto padding-top-25vh">
    <h1>Lecturas</h1>
    <div v-for="(year, key) in content" :key="key">
      <h2 class="align-right">{{ key }}</h2>
      <div v-for="(month, key, index) in year" :key="index">
        <h3 class="align-right">{{ setMonth(key) }}</h3>
        <div v-for="i in month" :key="i.slug">
          <p class="margin-0 padding-bottom-0">
            <nuxt-link :to="i.path">{{ i.title }}</nuxt-link>
          </p>
          <p class="margin-0 secondary size-08">
            {{ i.source_type }}
          </p>

        </div>
      </div>
    </div>
    <!--
    <div v-for="item in content" :key="item.slug" class="padding-top-08">       
        <nuxt-link :to="`${item.path}`">
            {{ item.title }}
        </nuxt-link>           
        <p class="margin-0 size-08 secondary">
            <span class="padding-right-08">{{ item.source_type }} </span>
            <span v-for="tag in item.tags" class="tag-separation" style="opacity:.5;" 
            :key="tag">#{{tag}}</span>
        </p>
    </div>
    -->
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, app, error }) {
    const literatureNotes = await $content('librero')
      .sortBy('initial_read', 'asc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
        console.log(err);
      });

    // from: https://stackoverflow.com/questions/43701245/javascript-array-of-objects-group-by-year-month-and-date/43701321
    function groupByYearMonth(arr) {
      let year, month
      return arr.reduce((acc, obj) => {
      
      // get the parts: year, month
      const yearmonth = obj.initial_read.substr(0, 7).split("-");
      
      // Add year if not already present
      if (!acc[yearmonth[0]]) acc[yearmonth[0]] = {};
      year = acc[yearmonth[0]];
      
      // Add month if not already present
      if (!year[yearmonth[1]]) year[yearmonth[1]] = [];
      month = year[yearmonth[1]];
      month.push(obj)

      return acc
      }, {});
    }
    const content = groupByYearMonth(literatureNotes)
    console.log(content)
    return {content};
  },
  methods: {
    setMonth: function (mm) {
      const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
      let mIndex = Number(mm - 1)
      return meses[mIndex]
    }
  },
  head() {
    return {
      title: 'Librero | sabhz',
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