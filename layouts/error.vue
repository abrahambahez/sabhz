<template>
  <div style="padding-top:25vh;">
    <div v-if="error.statusCode === 404">
        <h1>Esta página no existe 🦔</h1>
        <p class="container margin-auto align-center">Lo siento, parece que ocurrió un error con el enlace</p>
    </div>
     <div v-else>
        <h1>Ocurrió un error inesperado 🐱‍💻</h1>
        <p>Lo siento, parece que ocurrió un error con el enlace</p>
    </div>   
    <div class="container margin-auto align-center">
        <NuxtLink to="/">vuelve al inicio</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>