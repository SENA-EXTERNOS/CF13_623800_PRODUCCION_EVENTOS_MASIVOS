export default {
  global: {
    componenteFormativo: 'Factores de riesgo y emergencias en un evento',
    descripcionCurso:
      'La finalidad de identificar los factores de riesgos y las amenazas asociadas a un evento está relacionada con el control y mitigación de las emergencias, por ello se debe comprender cuáles son los lineamientos de la normativa legal nacional, regional y local para desarrollarlo, cumpliendo con la documentación de los planes operativos normalizados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Riesgos, emergencias y psicología de masas ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Amenazas y vulnerabilidades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistema de gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Normativa local y nacional ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Entidades que intervienen en la gestión del riesgo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Matriz del riesgo y metodología para análisis del riesgo por colores',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Niveles de complejidad de un evento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Proceso de registro y solicitud de permisos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Amenaza, vulnerabilidad',
      referencia:
        'Comisión Nacional Técnica Asesora para el Conocimiento del Riesgo (2017) Terminologia sobre la gestión del riesgo de desastres y fenomenos amenazantes.',
      tipo: 'Documento PDF',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20761/Terminologia-GRD-2017.pdf?sequence=2',
    },
    {
      tema: 'Niveles de complejidad de un evento',
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (2018). <i>Guía técnica para la reglamentación local de eventos con aglomeraciones de público.</i>',
      tipo: 'Guía técnica',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/handle/20.500.11762/27735.',
    },
    {
      tema: 'Sistema de gestión del riesgo',
      referencia:
        'Fondo de Prevención y Atención de Emergencias (FOPAE) (2014). <i>Metodología de análisis de riesgo.</i>',
      tipo: 'Guía técnica',
      link:
        'https://www.sire.gov.co/documents/82884/83768/A.3.4+Metodologias+AR.pdf/81cee0d0-2f31-4c0e-b3eb-ad6831b1fda2.',
    },
    {
      tema: 'Sistema de gestión del riesgo',
      referencia:
        'UNGRD Gestión del riesgo de desastres. (2016), Plan nacional de Gestión del riesgo de desastres -UNGRD. (Video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Oeg1rftVTAA',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        '“Peligro latente de que un evento físico de origen natural, o causado, o inducido por la acción humana de manera accidental, se presente con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como también daños y pérdidas en los bienes, la infraestructura, los medios de sustento, la prestación de servicios y los recursos ambientales” (Ley 1523 de 2012, art. 4, núm. 3).',
    },
    {
      termino: 'Desastre',
      significado:
        'Es el resultado que se desencadena de la manifestación de uno o varios eventos naturales o antropogénicos no intencionales que al encontrar condiciones propicias de vulnerabilidad en las personas, los bienes, la infraestructura, los medios de subsistencia, la prestación de servicios o los recursos ambientales, causa daños o pérdidas humanas, materiales, económicas o ambientales, generando una alteración intensa, grave y extendida en las condiciones normales de funcionamiento de la sociedad, que exige del Estado y del sistema nacional ejecutar acciones de respuesta a la emergencia, rehabilitación y reconstrucción (Ley 1523 de 2012, art. 4, núm.. 8).',
    },
    {
      termino: 'Emergencia',
      significado:
        'Asunto o situación imprevistos que requieren una especial atención y deben solucionarse lo antes posible.',
    },
    {
      termino: 'Escenario',
      significado:
        '“toda edificación, estructura, instalación o espacio destinado de forma habitual o esporádica a la realización de eventos con aglomeración de personas” (Hernadez y Zapata 2018)',
    },
    {
      termino: 'Identificación del peligro',
      significado:
        'proceso para reconocer si existe un peligro y definir sus características.”NTC-OHSAS 18001-2007.p3”',
    },
    {
      termino: 'Matriz',
      significado:
        'Conjunto ordenado en una estructura de filas y columnas. Los elementos de este conjunto pueden ser objetos matemáticos de muy variados tipos (Sacau, 2004), aunque de forma particular, aquí se trabajará exclusivamente con matrices formadas por números reales.',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas, o una combinación de estos. “NTC-OHSAS 18001-2007. p3.”',
    },
    {
      termino: 'Psicología',
      significado:
        'Ciencia que investiga sobre los procesos mentales de personas y animales. La palabra proviene del griego psique- (actividad mental o alma) y -logía (estudio). Esta disciplina analiza las tres dimensiones de los mencionados procesos: cognitiva, afectiva y conductual (Pérez y Gardey, 2008).',
    },
    {
      termino: 'Riesgo de desastre',
      significado:
        'corresponde a los daños o pérdidas potenciales que pueden presentarse debido a los eventos físicos peligrosos de origen natural, socio-natural, tecnológico, biosanitario o humano no intencional, en un período de tiempo específico y que son determinados por la vulnerabilidad de los elementos expuestos; por consiguiente, el riesgo de desastres se deriva de la combinación de la amenaza y la vulnerabilidad (Ley 1523 de 2012).',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        '“Susceptibilidad o fragilidad física, económica, social, ambiental o institucional que tiene una comunidad de ser afectada o de sufrir efectos adversos en caso de que un evento físico peligroso se presente. Corresponde a la predisposición a sufrir pérdidas o daños de los seres humanos y sus medios de subsistencia, así como de sus sistemas físicos, sociales, económicos y de apoyo que pueden ser afectados por eventos físicos peligrosos” (Ley 1523 de 2012, art. 4, núm. 27).',
    },
  ],
  referencias: [
    {
      referencia:
        'Canto, J. y Gómez, L. (coords.) (1985) <i>Psicología social</i>. ',
      link: 'https://bit.ly/3RKKs1m.',
    },
    {
      referencia:
        'Congreso de Colombia (2012, 24 de abril). Ley 1523 de 2012, “por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones”. D. O. 48411.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141.',
    },
    {
      referencia:
        'Fondo de Prevención y Atención de Emergencias [FOPAE] (2014). Metodología de análisis de riesgo.',
      link: 'https://bit.ly/3cWsQkm.',
    },
    {
      referencia:
        'Hernández, N. y Zapata, G. (2018) Guía técnica para la reglamentación local de eventos con aglomeraciones de público. Unidad Nacional para la Gestión del Riesgo de Desastres [UNGRD].',
      link: 'https://bit.ly/3ASV1bW.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]-Consejo Colombiano de Seguridad (2007, 24 de octubre). Norma Técnica Colombiana NTC-OHSAS 18001. Sistemas de gestión en seguridad y salud ocupacional.',
      link: 'https://bit.ly/2Ikad55.',
    },
    {
      referencia:
        'Le Bon, G. (2007). <i>Psicología de las masas</i>. Biblioteca Virtual Antorcha.',
      link: 'https://bit.ly/3qlmM8b.',
    },
    {
      referencia:
        'Pérez, J. y Gardey, A. (2008). “Definición de psicología”. Definición. DE.',
      link: 'https://definicion.de/psicologia/.',
    },
    {
      referencia: 'Sacau, F. (2004). Definición de matriz. Educa Lab.',
      link:
        'http://recursostic.educacion.es/descartes/web/materiales_didacticos/Calculo_matricial_d3/defmat.htm.',
    },
    {
      referencia:
        'Sistema Nacional para la Gestión del Riesgo de Desastres [SNGRD]-Comité Nacional para el Conocimiento del Riesgo (2017). <i>Terminología sobre gestión del riesgo de desastres y fenómenos amenazantes.</i>',
      link:
        'http://portal.gestiondelriesgo.gov.co/Paginas/Glosario_Terminos_Gestion_del_Riesgo.aspx.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
