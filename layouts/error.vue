<template>
  <div class="container margin-auto align-center" style="padding-top:25vh;" >
    <div v-if="error.statusCode === 404">
        <h1>Mmm...🐱‍👤</h1>
        <p>Lo siento, parece que esta nota no existe o cambió de nombre</p>
    </div>
     <div v-else>
        <h1>¡Uy! 🦔</h1>
        <p>Ocurrió un error con el enlace, posiblemente esta nota no existe, cambió de nombre o hay algo mal en el servidor</p>
    </div>   
    <div>
      <p>
        Puedes <NuxtLink to="/">volver al inicio</NuxtLink>
        o intentar <NuxtLink to="/archivo">buscarla en el archivo</NuxtLink>
      </p>
      
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>