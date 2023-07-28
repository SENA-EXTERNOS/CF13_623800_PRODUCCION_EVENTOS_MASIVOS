<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Niveles de complejidad de un evento 

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-8
        p(data-aos="fade-down").mb-0 Después de valorar las amenazas y la vulnerabilidad de un evento, es posible establecer su nivel de riesgo y por lo tanto su complejidad, bien sea este de afluencia masiva de público o no. 
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img33.png', alt='')

    p(data-aos="fade-down").mb-4 De acuerdo a lo anterior se puede categorizar como complejo o no complejo. 

    .row.justify-content-center.align-items-stretch.mb-5.bg9.p-4           
      .col-lg-6
        .row.justify-content-center.align-items-center           
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img44.svg', alt='')                    
          .col-lg-10
            ul.lista-ul
              li
                i.fas.fa-fire
                p.mb-0  #[b Alta probabilidad] de materialización de amenazas, daños a infraestructura, lugar, asistentes, etc.
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img45.svg', alt='')   
      .col-lg-6
        .row.justify-content-center.align-items-center 
          .col-lg-10
            img.mb-4.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img47.svg', alt='')            
            ul.lista-ul
              li
                i.fas.fa-fire-extinguisher
                p.mb-0 #[b Baja probabilidad] de materialización de amenazas, sin daños infraestructura, lugar, asistentes, etc.
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img46.svg', alt='')

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img48.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Teniendo en cuenta lo anterior, un evento es #[b complejo] cuando su calificación es alta después de valorar el riesgo, a partir de la probabilidad de materialización de las amenazas identificadas y de que estas puedan generar un daño considerable al lugar o entorno donde se desarrolla la actividad, a los asistentes, a la infraestructura y al medio ambiente. Para este tipo de eventos se debe activar el Sistema Nacional de Gestión del Riesgo de Desastres.
          br
          br
          | Un evento se clasifica como #[b no complejo], cuando la valoración del riesgo de afectación a los asistentes, la infraestructura o el medio ambiente es bajo o moderado, con poca probabilidad de que las amenazas identificadas se materialicen y afecten el escenario y el entorno.

    p.mb-4 Lo invitamos a ver el siguiente video para profundizar en este tema:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ulftHcvB2u0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mb-5 Para determinar el tipo de evento, la Guía técnica para la reglamentación local de eventos con aglomeraciones en público (2018) establece los lineamientos de acuerdo con cada una de las variables, y unas categorías para evaluar la ponderación y el nivel de riesgo de ejecución del evento:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img49.svg', alt='') 

    .tarjeta.color-primario.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Para profundizar este tema puedes consultar el  Anexo 2: Modelo para la categorización de eventos con aglomeraciones de público.
            .col-sm-auto
              a.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/ANEXO_2_MODELO_PARA_LA_CATEGORIZACION_DE_EVENTOS.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download  

    .row.justify-content-center.align-items-center    
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            p.mb-0.tv De acuerdo con el cumplimiento de los requisitos para el manejo de aglomeraciones, es importante planificar y gestionar los recursos necesarios para anticiparse a una posible emergencia, ya que la responsabilidad de cualquier situación adversa durante el desarrollo del evento recae sobre quien lo organiza.                          
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img50.png', alt='')    

       
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
