<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Amenazas y vulnerabilidades

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        p(data-aos="fade-down") Otros conceptos claves que debe diferenciar y conocer a fondo, son amenaza y vulnerabilidad.  Las amenazas hacen referencia a aquellas situaciones o peligros, ya sean de origen natural, antrópico o socio naturales, que pueden dar lugar a una emergencia, siendo probable la ocurrencia de un desastre. Para ello, es importante identificar de manera oportuna la vulnerabilidad de los recursos, las personas y los sistemas o procesos.
        .color-fondo-text2.bg-color(data-aos="fade-down")
          .color-fondo-text2__texto 
            p #[b Amenaza:] De acuerdo con el marco legal vigente para Colombia, se define amenaza como el “peligro latente de que un evento físico de origen natural, causado, o inducido por la acción humana de manera accidental, se presente con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como también daños y pérdidas en los bienes, la infraestructura, los medios de sustento, la prestación de servicios y los recursos ambientales” (Ley 1523, 2012, art. 4, núm.. 3).  
      .col-lg-4
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img16_1.svg', alt='')

    h4(data-aos="fade-down").mb-5 Las amenazas pueden ser: 

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg1")(data-aos="fade-right")
      .row.justify-content-center.align-items-center(titulo="Posibles")
        .col-lg-8
          p Son aquellos eventos que no se han manifestado, pero que pueden llegar a presentarse si las condiciones ambientales y los comportamientos humanos desencadenan su materialización. Se identifican con el color verde. Por ejemplo, en una zona sin antecedentes de terremotos, pero sí con alta sismicidad, es posible la ocurrencia de un terremoto. 
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img18.svg', alt='')   
      .row.justify-content-center.align-items-center(titulo="Probables")
        .col-lg-8
          p Son eventos de los que existen manifestaciones o evidencia científica que nos indica que pueden llegar a materializarse. Este tipo de amenazas se identifican con color amarillo. Por ejemplo, una construcción cerca de una ladera puede generar remoción de tierra en masa.  
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img19.svg', alt='')    
      .row.justify-content-center.align-items-center(titulo="Inminentes")
        .col-lg-8
          p Fenómenos esperados que tienen altas posibilidades de materializarse. Se identifican con el color rojo. Por ejemplo, si al hacer seguimiento a las condiciones atmosféricas, el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) anuncia posibles tormentas eléctricas, es algo de lo que se tiene evidencia científica y que podría materializarse. 
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img20.svg', alt='') 

    p(data-aos="fade-down") De acuerdo con la UNGRD, en el país se deberán identificar las amenazas clasificadas según su origen en tres tipos: naturales, antrópicas y socio naturales.
         
    p.mb-4 A continuación, se estudiarán los conceptos y características de cada una de ellas.   

    SlyderA(tipo="b")(data-aos="fade-left").bg3.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.col-md-10.col-sm-8.media
          h4 Amenazas Naturales
          p Las amenazas naturales, como su nombre lo indica, están relacionadas con las condiciones atmosféricas, biológicas y del ambiente, cuyo origen está asociado a los cambios climáticos y a procesos naturales de la tierra relacionados con cambios en su geología, en la atmósfera o aparición de enfermedades o infestaciones que pueden llegar a afectar el desarrollo normal de un evento. De acuerdo con esta subclasificación, las amenazas naturales pueden ser, entre otras: 
          ul.lista-ul
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Tsunamis.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Terremotos.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Erupciones volcánicas.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Tormentas eléctricas.

          p Para identificar las amenazas naturales que pueden llegar a afectar el desarrollo normal de cualquier actividad económica, se deberá tener en cuenta la ubicación geográfica de la organización, su cercanía con afluentes hídricos, formaciones volcánicas y demás aspectos que a criterio del evaluador puedan desencadenar una amenaza de origen natural.
           
        .col-lg-4.col-md-10.col-sm-8.media
          img.img-a.img-t(src='@/assets/curso/temas/img22.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-lg-6.col-md-10.col-sm-8.media
          h4 Amenazas Antrópicas
          p Las amenazas antrópicas están relacionadas con los peligros asociados al desarrollo de las diferentes actividades económicas para la producción de bienes o servicios. Surgen por fallas en sistemas y procesos que pueden generar afectaciones locativas, al medio ambiente y a terceros, afectando la salud y la integridad de las personas y la continuidad del negocio. Algunos ejemplos son: 
          ul.lista-ul
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Colapso estructural.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Incendio. 
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Explosiones. 
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Delitos informáticos. 
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Derrame de sustancias químicas.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Derrame de biológicos o radioactivos. 
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Fugas de gases o sustancias tóxicas, entre otros. 
           
        .col-lg-4.col-md-10.col-sm-8.media
          img.img-a.img-t(src='@/assets/curso/temas/img23.svg', alt='') 
      .row.justify-content-center.align-items-center
        .col-lg-6.col-md-10.col-sm-8.media
          h4 Amenazas Socio Naturales
          p Las amenazas socio naturales son aquellas relacionadas con fenómenos de tipo biológico o físico químico, asociados a los cambios ambientales por la intervención de los seres humanos en los ecosistemas. Por ejemplo:  

          ul.lista-ul
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Pandemias.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Remociones en masa.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Avenidas torrenciales.
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Inundaciones. 
            li.ps-3.mb-1
              i.lista-ul__vineta 
              p.mb-0 Incendios forestales.
           
        .col-lg-4.col-md-10.col-sm-8.media
          img.img-a.img-t(src='@/assets/curso/temas/img24.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-4
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img25.png', alt='')              
      .col-lg-8
        p(data-aos="fade-down") Por su parte, la #[b vulnerabilidad], hace referencia a las condiciones físicas, económicas, culturales y sociales que afectan la respuesta de un individuo o un grupo de individuos ante la materialización de una amenaza que puede afectar las condiciones de salud y el entorno del individuo o grupo social, por cambios en su hábitat, economía y demás aspectos habituales de su condición, generando respuestas diversas dependiendo de la capacidad de adaptación y manejo de recursos que se tenga.        

    p(data-aos="fade-down").mb-5 El grado de vulnerabilidad depende de los factores de riesgo existentes en el entorno y de los recursos con los que se cuente para afrontarlos. Para determinar el nivel de vulnerabilidad, se debe analizar de manera independiente, así:

    .row.justify-content-center.align-items-stretch.mb-5 
      .col-lg-4.bg6.p-4(data-aos="fade-left")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/img27.png', alt='')
        .text-center(data-aos="fade-down")
          h4.mb-4 Vulnerabilidad en los sistemas o procesos
          p.mb-0 Para la valoración de riesgos es muy importante identificar la vulnerabilidad en los sistemas y procesos, además se debe identificar la respuesta que la organización tenga frente a los  recursos, tales como: servicios públicos, sistemas alternos de agua, energía, comunicaciones y como desde antes de que un posible evento se manifieste, se pueden identificar medidas de rehabilitación para garantizar la continuidad del negocio y las acciones que contribuyan a una recuperación rápida y eficiente ante la emergencia.  
      .col-lg-4.bg7.p-4
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/img28.png', alt='')
        .text-center(data-aos="fade-down")
          h4.mb-4 Vulnerabilidad de las personas 
          p.mb-0 Es evaluada a partir de la capacitación y entrenamiento para la atención de emergencias y  gestión de la organización en cuanto a la documentación de planes de emergencia y contingencia, convenios de ayuda mutua establecidos y condiciones de seguridad, como personal fijo y flotante dentro de las instalaciones.
      .col-lg-4.bg8.p-4(data-aos="fade-right")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/img29.png', alt='')
        .text-center(data-aos="fade-down")
          h4.mb-4 Vulnerabilidad de los recursos
          p.mb-0 El nivel de vulnerabilidad de los recursos se determina mediante un inventario de los elementos con los que cuenta la organización para atender una emergencia en caso de su posible materialización, de manera que pueda atender oportunamente la situación de peligro. Se deben considerar los recursos logísticos tales como señalización, condiciones de las vías de evacuación e infraestructura y equipos como sistemas de detección de humo y alarmas que permitan monitorear la amenaza. 
</template>

<script>
export default {
  name: 'Tema2',
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
