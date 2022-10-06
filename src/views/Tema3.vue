<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Sistema de gestión del riesgo 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez claros los conceptos necesarios, es hora de comprender para qué sirven los sistemas de gestión del riesgo.  El Gobierno nacional, a partir de los antecedentes históricos de desastres presentados en el país, ha venido ajustando la legislación para que a escala departamental, local y en las entidades e instituciones de orden público y privado se adopten medidas orientadas a la gestión oportuna de los riesgos y la minimización de los impactos negativos de estos en las poblaciones, garantizando así la salubridad y la seguridad de quienes se pueden ver vulnerados ante la materialización de las amenazas existentes en el territorio nacional. 

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Normativa local y nacional 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        p(data-aos="fade-down").mb-0 Con el fin de establecer normas y procedimientos claros para la prevención y atención de desastres, se han generado leyes y decretos que orientan y regulan estos procesos. 
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img33-1.png', alt='')

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5.cajon.color-primario.p-4(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 #[b Dentro de la normativa sobre el tema se encuentran:]
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-7
              h4(data-aos="fade-down") 1 de mayo de 1989
              p(data-aos="fade-down") Decreto 919 de 1989, “por el cual se organiza el Sistema Nacional para la Prevención y Atención de Desastres y se dictan otras disposiciones”.
            .col-md-6.col-lg-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34.png', alt='')
          .row.justify-content-center.align-items-center.text-start
            .col-md-6.col-lg-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img35.png', alt='')          
            .col-md-6.mb-4.mb-md-0.col-lg-7
              h4(data-aos="fade-down") 3 de noviembre de 2011 
              p(data-aos="fade-down") Decreto 4147 de 2011, “por el cual se crea la Unidad Nacional para la Gestión del Riesgo de Desastres, se establece su objeto y estructura”.

              p(data-aos="fade-down") Esta unidad tiene como finalidad proponer acciones preventivas para la gestión de riesgos a escala nacional y local y articularse con los sistemas administrativos para el cumplimiento de sus funciones. 

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.col-lg-7
              h4(data-aos="fade-down") 5 de enero de 2012
              p(data-aos="fade-down") Ley 1505 de 2012, “por medio de la cual se crea el Subsistema Nacional de Voluntarios de Primera Respuesta y se otorgan estímulos a los voluntarios de la Defensa Civil, de los Cuerpos de Bomberos de Colombia y de la Cruz Roja Colombiana y se dictan otras disposiciones en materia de voluntariado en primera respuesta”.

              p(data-aos="fade-down") El objetivo de esta ley es estimular y reconocer a los organismos de socorro voluntarios acreditados en el país para fortalecer su capacidad de respuesta ante emergencias.
            .col-md-6.col-lg-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img36.png', alt='')
          .row.justify-content-center.align-items-center.text-start
            .col-md-6.col-lg-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img37.png', alt='')            
            .col-md-6.mb-4.mb-md-0.col-lg-7
              h4(data-aos="fade-down") 24 de abril de 2012
              p(data-aos="fade-down") Ley 1523 de 1012. Adopta la política nacional de gestión de riesgos de desastres y establece el Sistema Nacional de Gestión del Riesgo de Desastres para emitir regulaciones y normativas que permitan mitigar el riesgo y lograr un manejo adecuado de las emergencias cuando se presenten, replicando los lineamientos a todo el territorio.
              p(data-aos="fade-down") Para ello se crean en los departamentos los consejos de gestión de riesgo de desastre con sus comités, y a escala local el consejo municipal de la gestión del riesgo de desastres con sus comités. Estas entidades están conformadas por instituciones públicas y privadas, y es responsabilidad de los gobernadores y alcaldes intervenir y ejecutar actividades de mitigación de los factores de riesgo que puedan llegar a afectar la salubridad y la seguridad de su jurisdicción.

                                        
    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2	Entidades que intervienen en la gestión del riesgo

    p(data-aos="fade-down").mb-5 De acuerdo con la normativa vigente, en Colombia se establece un orden jerárquico para las entidades que se encargan de la getión del riesgo, dado  a nivel nacional, departamental y local.
    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5.cajon.color-primario.p-4(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 #[b  estas entidades u organización son:] 

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Consejo Nacional para la Gestión del Riesgo")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img40.svg', alt='')
          .col-lg-6
            h4 Consejo Nacional para la Gestión del Riesgo
            p Se encarga de coordinar todo el sistema nacional para la gestión del riesgo de desastres y es liderado por el presidente de la república.  
      .py-3.py-md-4(titulo="Unidad Nacional para la Gestión del Riesgo de Desastres")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img41.svg', alt='')
          .col-lg-6
            h4 Unidad Nacional para la Gestión del Riesgo de Desastres
            p Encargada de coordinar todo el sistema nacional para la gestión del riesgo, mediante actividades de mitigación orientadas a fortalecer las capacidades de respuesta y manejo de desastres a escala nacional y local. De esta unidad de gestión se despliega la responsabilidad de tres comités:

            p #[b Comité de Conocimiento]: Encargado de construir lineamientos y promover procesos de investigación para conocer el riesgo, y generar conceptos que permitan la intervención oportuna. 
            p #[b Comité de Reducción:] Dirige las políticas; su finalidad es modificar o controlar las condiciones de riesgo existentes haciendo intervención prospectiva. 

            p #[b Comité de Manejo de Desastres:] Orienta políticas de manejo de desastres y establece los procesos de recuperación y rehabilitación cuando se ha materializado una amenaza y los recursos no son suficientes para la atención. Su objetivo es garantizar la reconstrucción de condiciones económicas, infraestructura y servicios con el fin de disminuir la vulnerabilidad de las personas afectadas.              
      .py-3.py-md-4(titulo="Consejos departamentales, distritales y municipales para la gestión del riesgo")
        .row.justify-content-center.align-items-center.py-3
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img42.svg', alt='')
          .col-lg-6
            h4 Consejos departamentales, distritales y municipales para la gestión del riesgo
            p Son los encargados de la gestión del riesgo y de cumplir los lineamientos emitidos a escala nacional para implementar las medidas preventivas orientadas al control específico de las amenazas de cada uno de los territorios. Tienen como fin salvaguardar la integridad de sus habitantes, para ello establecen alianzas interinstitucionales que permitan el seguimiento a las condiciones que puedan afectar una región.

    .bg2.p-3.mb-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Teniendo en cuenta cómo se organizan las instituciones nacionales, departamentales y locales para la gestión del riesgo de desastres, se deberán tramitar los respectivos permisos y actividades para el desarrollo de las actividades económicas en el país.

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Matriz del riesgo y metodología para análisis del riesgo por colores

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img43.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para elaborar la matriz de riesgos, se debe aplicar la metodología de análisis de riesgo por colores, teniendo en cuenta que esta constituye una herramienta subjetiva, no obstante, al ser cualitativa permite identificar el tipo de amenazas, establecer el nivel de vulnerabilidad de las personas, los recursos, sistemas y procesos y, de acuerdo con ello, calificar el nivel de riesgo para el desarrollo de las actividades según las necesidades específicas de las organizaciones. 

    .tarjeta.color-primario.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Para comprender a fondo este tema, le recomendamos descargar y estudiar el siguiente documento: Anexo 1 Metodología para el análisis de riesgos por colores, p. 11.
            .col-sm-auto
              a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/ANEXO_1_METODOLOGIA_ANALISIS_DE_RIESGO_POR_COLERES.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download                                       
</template>

<script>
export default {
  name: 'Tema3',
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
