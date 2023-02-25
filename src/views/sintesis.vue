<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-2 Para la gestión oportuna de los riesgos y desastres se deben cumplir las normas y valorar el riesgo con el fin de establecer las medidas preventivas que permitan mitigar los efectos nocivos en caso de presentarse situaciones adversas no controladas. Estos son los temas tratados en este componente formativo.
    p.mb-5 A continuación las ideas principales y los temas desarrollados en el presente componente formativo.

    .row.justify-content-center
      .col-lg-10.my-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
