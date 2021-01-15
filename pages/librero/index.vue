<template>
  <main class="container margin-auto padding-top-25vh">
    <h1 class="">Lecturas</h1>
    <div class="flex">

      <h2 v-for="y in availableYears" :key="y" 
        class="inline-block min-width-120px pointer"
        :class="y == activeYear ? 'active-year' : 'primary' "
        @click="getYearReadings(y)">{{ y }}</h2>

    </div>
    <div v-for="(v, k) in content" :key="k">
      <h3 class="align-center">Lecturas de {{ setMonth(k)}}</h3>
      <div v-for="read in v" :key="read.slug">
        <p class="margin-0 padding-bottom-0">
          <nuxt-link :to="read.path">{{ read.title }}</nuxt-link>
        </p>
        <p class="margin-0 secondary padding-bottom-2">{{ read.source_type }} de 
          <span v-for="author in read.authors" :key="author + read.createdAt"
            class="natural-author-separation color">{{setAuthor(author)}}</span>
        </p>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return{
      activeYear: new Date().getFullYear(),
      availableYears: [],
      data: {},
      content: {},
      isActive: false
    }
  },
  async asyncData({ $content, params, app, error }) {
    const literatureNotes = await $content('librero')
      .sortBy('initial_read', 'asc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
        console.log(err);
      });

    // --- Function groupByYearMonth
    // from: https://stackoverflow.com/questions/43701245/javascript-array-of-objects-group-by-year-month-and-date/43701321
    function groupByYearMonth(arr) {
      return arr.reduce((acc, obj) => {
      
      // get the parts: year, month
      const yearmonth = obj.initial_read.substr(0, 7).split("-");
      
      // Add year if not already present
      if (!acc[yearmonth[0]]) acc[yearmonth[0]] = {};
      let year = acc[yearmonth[0]];
      
      // Add month if not already present
      if (!year[yearmonth[1]]) year[yearmonth[1]] = [];
      year[yearmonth[1]].push(obj);

      return acc
      }, {});
    }
    const data = groupByYearMonth(literatureNotes)
    // set active year
    let activeYear = new Date().getFullYear()
    let content = data[activeYear]

    // set available years 
    let availableYears = Object.keys(data).reverse()
    return {data, content, availableYears};
  },
  methods: {
    setMonth: function (mm) {
      const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
      let mIndex = Number(mm - 1)
      return meses[mIndex]
    },
    getYearReadings: function(year) {
      this.activeYear = year
      return this.content = this.data[year]
    },
    setAuthor: function(author) {
      let a = author.split(',');
      return a[1] + ' ' + a[0]
    }
  },
  head() {
    return {
      title: 'Librero | sabhz',
      meta: [
        {
          hid: 'description: ' + this.content.slug,
          name: 'description',
          content: 'Notas de referencia sobre libros y lecturas'
        }
      ]
    }
  }
}
</script>

<style>
.min-width-120px{
  min-width: 100px;
}
.active-year{
  color: var(--color);
  cursor: default;
}
.natural-author-separation:not(:last-child):after {
    content: ' y ';
}
</style>