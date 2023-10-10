<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Riesgos, emergencias y psicología de masas 
      
      
    .row.justify-content-end.align-items-stretch.mb-5           
      .col-lg-1.bg10.d-none.d-lg-block
      .col-lg-9.bg10.ps-5.p-3
        p(data-aos="fade-down").mb-0 Colombia, dada su diversidad geográfica y sus condiciones climáticas, está expuesta a sismos, inundaciones y deslizamientos, entre otros, así como a eventos peligrosos de origen antrópico que pueden dar origen de emergencias tales como incendios forestales o estructurales, explosiones, asonadas, revueltas, etc. Todos estos son posibles factores desencadenantes de sucesos indeseados, capaces de generar una emergencia, que no es otra cosa que la materialización de un riesgo que interrumpe el normal funcionamiento o desarrollo de una actividad. 
    .tarjeta.position-relative
      .row.justify-content-center.align-items-center
        .col-lg-2.col-5.mb-lg-0.mb-3
          .imagen-absolute3
            img(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')  
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-7
        p(data-aos="fade-down").my-3 Es por esto que se debe tener claridad en la conceptualización de situaciones claves como ‘riesgo’ y ‘emergencia’, ya que estos, asociados al comportamiento de un grupo poblacional, pueden generar una respuesta acertada o, por el contrario, convertirse en un factor agravante de la situación y pasar de ser una emergencia para convertirse en un desastre, al sobrepasar la capacidad de respuesta que se tiene para un evento determinado.  
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.png', alt='')

    
    p(data-aos="fade-down").mb-4 A continuación, algunos conceptos claves que debe tener en cuenta:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg1")(data-aos="fade-right")
      .row.justify-content-center.align-items-center(titulo="Peligro")
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img5.svg', alt='')
        .col-lg-8
          p En los entornos sociales, culturales y laborales tenemos exposición a condiciones que pueden ocasionar un daño. #[b La Norma Técnica Colombiana NTC-OHSAS 18001 de 2007] define el peligro como una fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas, o una combinación de estos. 

          p #[b Los peligros, de acuerdo con la Guía Técnica Colombiana GTC 45, se clasifican en]: biológicos, físicos, químicos, psicosociales, fenómenos naturales y condiciones de seguridad. Esta clasificación deberá ser analizada para poder identificar no solo aquellas situaciones de origen natural asociadas a las emergencias, sino también las condiciones de tipo biológico, físico, químico o de infraestructura que pueden producir un daño en caso de su materialización.  
      .row.justify-content-center.align-items-center(titulo="Riesgo")
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img6.svg', alt='')
        .col-lg-8
          p “Combinación de la probabilidad de que ocurra un(os) evento(s) o exposición(es) peligroso(s), y la severidad de la lesión o enfermedad (3.8) que puede ser causada por el(los) evento(s) o exposición(es)” (#[b NTC-OHSAS 18001, 2007, p. 5]).

          p Para valorar y determinar el nivel de un riesgo siempre se deberán tener en cuenta la probabilidad de la materialización de un peligro y la consecuencia de su manifestación. En Colombia, #[b la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD)] clasifica el nivel de riesgo en alto, medio y bajo, y los representa con tres colores: rojo (alto), amarillo (medio) y verde (bajo). A partir de esta calificación se establecen las medidas de control preventivas en la gestión y control de los riesgos.
      .row.justify-content-center.align-items-center(titulo="Riesgos de desastres")
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img7.svg', alt='')
        .col-lg-8
          p Es la materialización de las amenazas ya sean de origen natural o antrópico. De acuerdo con la #[b Ley 1523 de 2012], “corresponde a los daños o pérdidas potenciales que pueden presentarse debido a los eventos físicos peligrosos de origen natural, socio-natural tecnológico, biosanitario o humano no intencional, en un período de tiempo específico, y que son determinados por la vulnerabilidad de los elementos expuestos; por consiguiente, el riesgo de desastres se deriva de la combinación de la amenaza y la vulnerabilidad” (art. 4, núm. 25).

          p Teniendo en cuenta la definición anterior, se refuerza la importancia de contemplar aspectos no solo de tipo natural, sino como ya se mencionó en la identificación de peligros, la valoración de aspectos asociados a la condiciones tecnológicas y humanas que también pueden producir la ocurrencia de un desastre. 
      .row.justify-content-center.align-items-center(titulo="Emergencia")
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img8.svg', alt='')
        .col-lg-8
          p Es aquel escenario que entorpece el normal funcionamiento de una organización y que puede generar afectaciones a la continuidad de una organización. #[b Una emergencia, según la Ley 1523 de 2012], es la “situación caracterizada por la alteración o interrupción intensa y grave de las condiciones normales de funcionamiento u operación de una comunidad, causada por un evento adverso o por la inminencia de este, que obliga a una reacción inmediata y que requiere la respuesta de las instituciones del Estado, los medios de comunicación y de la comunidad en general” (art. 4, núm. 9).

          p #[b Dependiendo de la gravedad], las emergencias se dividen en tres tipos:

          ul.lista-ul
            li
              i.lista-ul__vineta 
              p.mb-0 #[b Conato de emergencia], es decir, aquella que solo involucra una parte del proceso y puede ser controlada con los recursos de la organización.

            li
              i.lista-ul__vineta 
              p.mb-0 #[b Emergencia parcial] o evento adverso, requiere de equipos de socorro establecidos en los comités de ayuda mutua con instituciones del sector aledaño a la ocurrencia del evento. Este tipo de emergencia no afecta a terceras personas y queda limitada a la organización donde ocurrió.

            li
              i.lista-ul__vineta 
              p.mb-0 #[b Emergencia general] o evento adverso, no puede ser controlado con los recursos de la organización y requiere la participación de organismos de socorro tales como bomberos, policía, defensa civil, Cruz Roja, entre otros existentes en la región, para brindar la atención y controlar la situación presentada. 
      .row.justify-content-center.align-items-center(titulo="Desastres")
        .col-lg-2
          img.img-a.img-t(src='@/assets/curso/temas/img9.svg', alt='')
        .col-lg-8
          p Ocurren cuando la emergencia sobrepasa la capacidad de respuesta ante un evento. #[b La Ley 1523 de 2012] lo define como “el resultado que se desencadena de la manifestación de uno o varios eventos naturales o antropogénicos no intencionales que al encontrar condiciones propicias de vulnerabilidad en las personas, los bienes, la infraestructura, los medios de subsistencia, la prestación de servicios o los recursos ambientales, causa daños o pérdidas humanas, materiales, económicas o ambientales, generando una alteración intensa, grave y extendida en las condiciones normales de funcionamiento de la sociedad, que exige del Estado y del sistema nacional ejecutar acciones de respuesta a la emergencia, rehabilitación y reconstrucción”  (art. 4, núm.. 8).

    .row.justify-content-start.align-items-stretch.mb-5           
      .col-lg-9
        .cajon.color-primario.p-4(data-aos="flip-down")
          h4(data-aos="fade-down") Psicología de masas
          p.pe-5(data-aos="fade-down").mb-0 Estudia la conducta humana. Se ocupa de los grupos de individuos, en particular del porqué algunos de ellos, ante un estímulo, se contagian del comportamiento de los demás y lo repiten sin cuestionar su actuar. A esta conducta se debe prestar especial atención, toda vez que en eventos masivos puede desencadenar acciones que van en contravía del instinto de conservación y preservación que cada uno tiene.

    .tarjeta.position-relative
      .row.justify-content-center.align-items-center
        .col-lg-2.col-5.mb-lg-0.mb-3
          .imagen-absolute4
            img(data-aos="zoom-in")(src='@/assets/curso/temas/img10.png', alt='')  
    .bg2.p-3.mb-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 #[b Teniendo en cuenta lo anterior], surge la importancia en la intervención y planeación de eventos, creando conductas, pautas y lineamientos que garanticen la preservación de la integridad de las personas que participan.

    p(data-aos="fade-down").mb-5 De acuerdo con lo estudiado por Gustave Le Bon (2007), con respecto a la psicología de masas, se deben tener en cuenta los siguientes aspectos.

    SlyderA(tipo="b")(data-aos="fade-left").bg3.p-4.mb-5
      .row.justify-content-center.align-items-center(titulo="Titulo item 1")
        .col-lg-7.col-md-10.col-sm-8.media
          h4 Impulsividad, movilidad e irritabilidad de las masas:
          p Son características fundamentales de la masa que está conducida casi exclusivamente por el inconsciente. Sus actos están más influidos por la médula espinal que por el cerebro. Las acciones realizadas pueden ser perfectas en cuanto a su ejecución, pero al no estar dirigidas por el cerebro, el individuo actúa según los azares de la excitación.
        .col-lg-3.col-md-10.col-sm-8.media
          img.img-a.img-t(src='@/assets/curso/temas/img11.svg', alt='')
      .row.justify-content-center.align-items-center(titulo="Titulo item 1")
        .col-lg-7.col-md-10.col-sm-8.media
          h4 Sugestibilidad y credulidad de las masas:
          p Al respecto, Le Bon (2007) expresa: “Una de las características generales de las masas es una sugestibilidad excesiva y hemos mostrado cuán contagiosa es una sugestión en toda aglomeración humana. Esto explica la rápida orientación de los sentimientos en un determinado sentido. Por neutra que se la suponga, la masa se encuentra generalmente en un estado de atención expectante favorable a la sugestión. La primera sugestión formulada se impone inmediatamente, por contagio, a todos los cerebros y establece en seguida la orientación (apart. 2).
        .col-lg-3.col-md-10.col-sm-8.media
          img.img-a.img-t(src='@/assets/curso/temas/img13.svg', alt='')          
      .row.justify-content-center.align-items-center(titulo="Titulo item 1")
        .col-lg-7.col-md-10.col-sm-8.media
          h4 Exageración y simplismo de los sentimientos de las masas:
          p “Los sentimientos buenos o malos, manifestados por una masa, presentan la doble característica de ser muy simples y exagerados. En este aspecto, así como en tantos otros, el individuo-masa se aproxima a los seres primitivos” (Le Bon, 2007, apart. 3).
        .col-lg-3.col-md-10.col-sm-8.media
          img.img-a.img-t(src='@/assets/curso/temas/img14.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        .color-fondo-text.bg-color.mb-3(data-aos="fade-down")
          .color-fondo-text__texto 
            p De acuerdo con los conceptos referidos anteriormente, se debe tener en cuenta la importancia de analizar el comportamiento de un grupo en caso de la ocurrencia de un suceso catastrófico que requiera procesos de evacuación, por ello, en la gestión de emergencias y desastres se contemplan los procedimientos operativos normalizados para responder ante una emergencia, evitando que las personas salgan afectadas. Siempre se deberá garantizar que se cuenta con los recursos necesarios para la orientación y atención de las masas dentro de un evento.

        p(data-aos="fade-down") Con ese fin se clasifica el tipo de masas en activas y pasivas. Las primeras se consideran turbas y las segundas audiencias o públicos. La característica principal de la turba, consiste en que todos los miembros están enfocados en la realización de la misma actividad o tienen el mismo comportamiento, siendo más difícil el control. Por esa razón, es importante designar un líder que pueda garantizar la activación de planes de evacuación en masa a través de gestos que lleven al cambio de comportamientos y garanticen la seguridad de las personas. 
      .col-lg-6
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img15.png', alt='')

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-4
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img16.png', alt='')                 
      .col-lg-8
        p(data-aos="fade-down") Por esa razón es importante designar un líder que pueda garantizar la activación de planes de evacuación en masa a través de gestos que lleven al cambio de comportamientos y garanticen la seguridad de las personas.          
     
        .color-fondo-text1.bg-color(data-aos="fade-down")
          .color-fondo-text1__texto 
            p Para las audiencias o públicos el manejo también requiere de líderes, pero por grupos o sectores. Teniendo en cuenta sus características como grupo social, están dispersos haciendo que el manejo sea más individualizado. Al igual que en la turba, la finalidad de los líderes es preservar la integridad física y psicológica de las personas a su cargo. Estos aspectos deberán ser contemplados en la logística y planeación de los eventos. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
