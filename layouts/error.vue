<template>
  <div class="container error-container">
    <div v-if="error.statusCode === 404">
      <h1>Mmm...🍃</h1>
      <p>Lo siento, parece que esta nota no existe o cambió de nombre</p>
    </div>

    <div v-else>
      <h1>¡Uy! 🦔</h1>
      <p>Ocurrió un error con el enlace, posiblemente esta nota no existe, cambió de nombre o hay algo mal en el servidor</p>
    </div> 

    <NuxtLink to="/">vuelve al inicio</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>
<style >
.error-container {
  min-height: 70vh;
}
</style>