<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6 
        p(data-aos="fade-down") ¡Bienvenido Aprendiz! El estudio de este componente formativo le permitirá identificar las amenazas, los factores de riesgos y su respectiva correlación con el marco normativo legal nacional, regional y local, para gestionar eventos que cumplan con los requisitos establecidos por las entidades gubernamentales de nuestro país. Teniendo en cuenta el cumplimiento de estos requisitos, se podrán solicitar los permisos para el desarrollo de los eventos, según las necesidades del cliente.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.svg', alt='')  

      .col-lg-10
        p(data-aos="fade-down") En el siguiente video conocerá de forma general,  los temas que se estudiarán a lo largo de este componente formativo. Muchos éxitos en su proceso de aprendizaje. 
      .tarjeta.position-relative
        .row.justify-content-center.align-items-center
          .col-lg-2.col-5.mb-lg-0.mb-3
            .imagen-absolute
              img(data-aos="zoom-in")(src='@/assets/curso/temas/img2.png', alt='')        

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
