<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Proceso de registro y solicitud de permisos

    .row.justify-content-center.align-items-center        
      .col-lg-6
        .color-fondo-text.bg-color(data-aos="fade-down")
          .color-fondo-text__texto 
            p El proceso de solicitud de permisos será responsabilidad de los organizadores del evento y la autorización de este debe ser analizada y aprobada por las alcaldías municipales y distritales, que tienen la obligación de disponer de los mecanismos para la recepción de los documentos y la aprobación o negación de los permisos.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img51.png', alt='')

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img52.png', alt='')                
      .col-lg-6
        p(data-aos="fade-down").mb-0 El proceso de solicitud de permisos será responsabilidad de los organizadores del evento y la autorización de este debe ser analizada y aprobada por las alcaldías municipales y distritales, que tienen la obligación de disponer de los mecanismos para la recepción de los documentos y la aprobación o negación de los permisos.
    .position-relative
      .row.justify-content-center.align-items-center
        .col-lg-2.col-5.mb-lg-0.mb-3.d-none.d-lg-block
          .imagen-absolute2
            img(data-aos="zoom-in")(src='@/assets/curso/temas/img53.png', alt='')

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-12.cajon.color-primario.p-4(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 #[b Según la Guía técnica para la reglamentación local de eventos con aglomeraciones en público (2018, p. 32), se deben anexar los siguientes documentos:]

    ImagenInfografica.color-secundario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/img54.svg', alt='Guía técnica para la reglamentación local de eventos')

      .tarjeta.color-acento-botones.p-3(x="12%" y="48%" numero="1")
        .h5.mb-2 Casa de Eventos 
        p.mb-0 Existencia y representación legal o cédula, si es persona natural, del responsable del evento.  

      .tarjeta.color-acento-botones.p-3(x="21%" y="68%" numero="2")
        .h5.mb-2 Coliseo
        p.mb-0 Contrato o autorización del lugar donde tendrá lugar.  

      .tarjeta.color-acento-botones.p-3(x="31%" y="55%" numero="3")
        .h5.mb-2 Alcaldía punto 1 
        p.mb-0 Concepto del plan de gestión de riesgo, emitido por las entidades autorizadas en cada municipio o ciudad.  

      .tarjeta.color-acento-botones.p-3(x="41%" y="58%" numero="4")
        .h5.mb-2 Estación de Bomberos 
        p.mb-0 Concepto integral de seguridad humana y contra incendios, emitido por el cuerpo de bomberos, que solicitará el plan de emergencias y contingencias, con vías de evacuación y planes operativos para la atención de situaciones adversas que se puedan presentar en el desarrollo del evento.   

      .tarjeta.color-acento-botones.p-3(x="47%" y="50%" numero="5")
        .h5.mb-2 Secretaría de Medio Ambiente 
        p.mb-0 Concepto de manejo ambiental emitido por la Secretaría de Ambiente o la entidad que haga sus veces en los municipios o ciudades. 

      .tarjeta.color-acento-botones.p-3(x="57%" y="55%" numero="6")
        .h5.mb-2 Alcaldía punto 2 
        p.mb-0 Certificado de capacidad estructural. Las alcaldías serán las encargadas de disponer cuál será el ente que podrá emitir este certificado.

      .tarjeta.color-acento-botones.p-3(x="68%" y="66%" numero="7")
        .h5.mb-2 Oficina de seguros 
        p.mb-0 Póliza de responsabilidad civil. Constituir las garantías bancarias o de seguros que amparen los riesgos que el evento conlleva. 

      .tarjeta.color-acento-botones.p-3(x="75%" y="61%" numero="8")
        .h5.mb-2 Secretaría de Salud 
        p.mb-0 Conceptos sanitarios para el expendio de alimentos, bebidas y cumplimiento de condiciones higiénico-sanitarias. Debe ser expedido por la Secretaría de Salud o la entidad que haga sus veces en el distrito o municipio. 

      .tarjeta.color-acento-botones.p-3(x="83%" y="52%" numero="9")
        .h5.mb-2 Defensa Civil 
        p.mb-0 Contratos de prestación de servicios: 1) de seguridad; 2) de logística, y (3) de servicios de atención en salud (primeros auxilios, atención prehospitalaria y atención médica), habilitados por la entidad distrital o departamental de salud, según corresponda.                       

    .bg2.p-3.mb-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Después de radicados los documentos, las alcaldías municipales o distritales tendrán cinco días hábiles para emitir el concepto de favorabilidad o negación del evento. Los lineamientos emitidos por la UNGRD deben ser cumplidos a cabalidad para garantizar el control de las emergencias del evento. 

    .row.justify-content-center.align-items-center       
      .col-lg-10
        .row.justify-content-center.align-items-center       
          .col-lg-1.px-0
            img.img-t.me(data-aos="zoom-in")(src='@/assets/curso/temas/img55.svg', alt='')
          .col-lg-10.px-0.bg11.media-r
            p(data-aos="fade-down").media-text.mb-0.ps-5.p-2 Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros. 
</template>

<script>
export default {
  name: 'Tema5',
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
