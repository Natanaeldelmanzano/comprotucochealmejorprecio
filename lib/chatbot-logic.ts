// Base de conocimiento del chatbot
const knowledgeBase = {
  // Información general
  general: {
    proceso: [
      "El proceso de venta es muy sencillo: 1) Solicitas una tasación online o por teléfono, 2) Concertamos una inspección del vehículo, 3) Te hacemos una oferta firme sin compromiso, y 4) Si aceptas, realizamos el pago inmediato y gestionamos la transferencia.",
      "Vendernos tu coche es rápido y seguro. Desde la tasación hasta el pago, todo puede completarse en 24-48 horas.",
      "Nuestro proceso está diseñado para ahorrarte tiempo y molestias. No tienes que pagar nada por la gestión, nos encargamos de todos los trámites sin coste adicional para ti.",
    ],
    pago: [
      "El pago se realiza por transferencia bancaria inmediata, asegurando seguridad y trazabilidad.",
      "Te pagamos en el momento de la firma. La transferencia suele ser efectiva en menos de 24 horas, dependiendo de tu banco.",
      "Garantizamos un pago rápido y seguro. Una vez cerrado el acuerdo, recibirás el dinero sin demoras ni complicaciones.",
    ],
    recogida: [
      "Podemos recoger tu coche en cualquier punto de Asturias sin coste adicional, o puedes venir a nuestra oficina en Oviedo.",
      "Ofrecemos servicio de recogida a domicilio en toda Asturias, para tu mayor comodidad.",
      "No es necesario que traigas el coche a nuestras instalaciones, podemos desplazarnos hasta donde estés para evaluarlo y cerrar la operación.",
    ],
    financiado: [
      "Sí, puedes vender tu coche aunque esté financiado, pero antes hay que liquidar la deuda con la financiera.",
      "Si tu coche tiene una financiación pendiente, podemos ayudarte a gestionar la cancelación del préstamo como parte del proceso de compra.",
      "Para vehículos con financiación pendiente, descontamos el importe de la deuda del precio de compra y nos encargamos de todos los trámites.",
    ],
  },

  // Tasación y valoración
  tasacion: {
    calculo: [
      "La tasación se basa en: modelo, marca y año, kilómetros recorridos, estado mecánico y estético, historial de mantenimiento, y oferta y demanda del mercado.",
      "Valoramos tu coche según múltiples factores, incluyendo su antigüedad, kilometraje, estado general, y la demanda actual en el mercado.",
      "Nuestro sistema de tasación profesional tiene en cuenta todos los aspectos relevantes de tu vehículo para ofrecerte el mejor precio posible.",
    ],
    itv: [
      "Sí, un coche con ITV en vigor se valora mejor, aunque no es imprescindible para venderlo.",
      "La ITV en vigor es un factor positivo en la tasación, pero podemos comprar vehículos con la ITV caducada.",
      "Aunque no es obligatorio tener la ITV en vigor para vender el coche, sí influye positivamente en la valoración.",
    ],
    averias: [
      "Sí, compramos coches con daños o averías, pero la tasación se ajusta según su estado.",
      "Podemos comprar tu coche aunque tenga problemas mecánicos o estéticos, ajustando la oferta en función de los costes de reparación.",
      "Las averías o daños no son un impedimento para comprar tu vehículo, simplemente se reflejarán en la valoración final.",
    ],
    negociable: [
      "Nuestras ofertas se basan en datos de mercado reales y son firmes, aunque siempre intentamos ofrecer el mejor precio posible.",
      "El precio que ofrecemos es el resultado de un análisis exhaustivo del mercado y del estado de tu vehículo, por lo que es una oferta justa y competitiva.",
      "Aunque nuestras tasaciones son firmes, siempre estamos abiertos a escuchar tus argumentos si consideras que hay factores adicionales que deban tenerse en cuenta.",
    ],
  },

  // Impuestos y tasas
  impuestos: {
    transferencia: [
      "El coste de la transferencia en Asturias incluye: ITP (4% del valor fiscal si el coche tiene menos de 15 CVF; 8% si tiene más), Tasa DGT (54,60€), y opcionalmente la gestión en gestoría (100-150€).",
      "La transferencia de un vehículo en Asturias implica el pago del Impuesto de Transmisiones Patrimoniales y la tasa de la DGT, pero nosotros nos encargamos de todos estos trámites sin coste adicional para ti.",
      "No te preocupes por los costes de transferencia, están incluidos en nuestro servicio y no tendrás que pagar nada extra.",
    ],
    itp: [
      "El ITP se calcula multiplicando el valor venal del coche (según las tablas de Hacienda) por el porcentaje aplicable (4% o 8% dependiendo de los caballos fiscales).",
      "Para calcular el ITP, se aplica un porcentaje (4% o 8%) sobre el valor fiscal del vehículo, que depende de su antigüedad y modelo según las tablas oficiales de Hacienda.",
      "El cálculo del ITP tiene en cuenta la depreciación del vehículo según su antigüedad, aplicando porcentajes que van desde el 100% para coches de menos de un año hasta el 10% para vehículos de más de 10 años.",
    ],
    pago_itp: [
      "El ITP se paga en la Agencia Tributaria del Principado de Asturias o por sede electrónica, pero nosotros nos encargamos de este trámite por ti.",
      "No tendrás que preocuparte por el pago del ITP, ya que gestionamos todos los trámites fiscales como parte de nuestro servicio integral.",
      "El pago del ITP forma parte de los trámites que nosotros asumimos, sin coste adicional para ti.",
    ],
    circulacion: [
      "Sí, el Impuesto de Circulación debe estar al día antes de vender el coche. Si no lo has pagado, se descontará de la oferta.",
      "Es importante que el Impuesto de Circulación esté pagado antes de la venta. En caso contrario, podemos descontar su importe del precio final.",
      "El Impuesto Municipal de Circulación debe estar abonado para realizar la transferencia. Si está pendiente, lo tendremos en cuenta en nuestra oferta.",
    ],
    multas: [
      "Las multas se mantienen a nombre del anterior titular hasta la transferencia. Es recomendable resolver cualquier sanción pendiente antes de la venta.",
      "Si tu vehículo tiene multas pendientes, es aconsejable pagarlas antes de la venta para evitar complicaciones en el proceso de transferencia.",
      "Las multas no transferidas seguirán siendo responsabilidad del vendedor, por lo que recomendamos regularizar esta situación antes de la venta.",
    ],
  },

  // Trámites administrativos
  tramites: {
    documentacion: [
      "Para vender tu coche necesitas: DNI o NIE del titular, permiso de circulación, ficha técnica, justificante de pago del ITP, y contrato de compraventa.",
      "Los documentos básicos para la venta son tu identificación personal y la documentación del vehículo (permiso de circulación y ficha técnica).",
      "Necesitarás presentar tu DNI y la documentación completa del vehículo. No te preocupes si te falta algún documento, podemos asesorarte sobre cómo obtenerlo.",
    ],
    contrato: [
      "El contrato de compraventa es un documento legal donde se establecen las condiciones de la venta, incluyendo los datos del comprador, del vendedor y del vehículo.",
      "Este documento formaliza la transacción y protege tanto al comprador como al vendedor, estableciendo claramente las condiciones de la venta.",
      "El contrato incluye información detallada sobre el vehículo, el precio acordado, y las responsabilidades de ambas partes.",
    ],
    reserva_dominio: [
      "Si el coche tiene reserva de dominio o embargo, debe cancelarse antes de la venta. Podemos asesorarte sobre cómo proceder en estos casos.",
      "La reserva de dominio o los embargos son cargas que impiden la libre transmisión del vehículo y deben resolverse previamente.",
      "En caso de que tu vehículo tenga cargas, podemos ayudarte a gestionar su cancelación como parte del proceso de compra.",
    ],
    tiempo_transferencia: [
      "La transferencia suele reflejarse en la DGT entre 3 y 10 días hábiles después de completar todos los trámites.",
      "El tiempo de procesamiento de la transferencia por parte de la DGT varía, pero generalmente se completa en menos de dos semanas.",
      "Una vez realizados todos los trámites, la transferencia quedará registrada en el sistema de la DGT en un plazo aproximado de una semana.",
    ],
    verificar_transferencia: [
      "Puedes verificar si la transferencia se ha completado solicitando un informe de tráfico en la DGT o consultando online con tu DNI y el número de bastidor.",
      "La DGT ofrece un servicio online para comprobar la situación administrativa de tu vehículo, incluyendo su titularidad actual.",
      "Te proporcionaremos confirmación una vez que la transferencia esté completada, pero también puedes verificarlo directamente a través de la DGT.",
    ],
  },

  // ITV y estado del vehículo
  itv: {
    obligatorio: [
      "No es obligatorio tener la ITV en vigor para vender un coche, pero es recomendable. Sin ITV, la tasación puede ser menor.",
      "Aunque puedes vender tu coche con la ITV caducada, tenerla en vigor mejora la valoración y facilita el proceso de venta.",
      "La ITV vigente no es un requisito legal para la venta, pero sí es un factor positivo que consideramos en nuestra tasación.",
    ],
    no_pasa: [
      "Si tu coche no pasa la ITV, puedes venderlo igualmente, pero el comprador tendrá que asumir la responsabilidad de pasarla para poder circular.",
      "Un vehículo que no supera la ITV puede venderse, aunque su valor se verá afectado por los posibles costes de reparación necesarios.",
      "La no superación de la ITV no impide la venta, pero sí influye en la valoración final del vehículo.",
    ],
    coste: [
      "El coste de la ITV en Asturias es de aproximadamente 45-55€ para turismos diésel o gasolina, dependiendo del tipo de vehículo y la estación.",
      "Las tarifas de la ITV varían según el tipo de vehículo y combustible, pero para un turismo estándar rondan los 50€ en Asturias.",
      "El precio de la inspección técnica depende de varios factores, incluyendo el tipo de motor y la antigüedad del vehículo.",
    ],
    caducada: [
      "Sí, puedes vender un coche con ITV caducada, pero el comprador asumirá la renovación y no podrá circular legalmente hasta pasarla.",
      "La venta de un vehículo con ITV caducada es legal, aunque afectará a su valoración y el comprador deberá regularizar esta situación.",
      "Vendemos coches con la ITV caducada, ajustando la tasación para reflejar este factor.",
    ],
  },

  // Seguridad y garantías
  seguridad: {
    proceso_seguro: [
      "Sí, ofrecemos un proceso 100% legal y transparente, con todas las garantías y documentación necesaria.",
      "Nuestra empresa cumple con todos los requisitos legales y fiscales, garantizando una transacción segura y sin sorpresas.",
      "Contamos con más de 15 años de experiencia en el sector y miles de clientes satisfechos que avalan la seguridad de nuestro proceso.",
    ],
    pago_inmediato: [
      "Garantizamos el pago mediante transferencia bancaria al momento de la firma, con comprobante inmediato.",
      "El pago se realiza en el mismo momento de formalizar la compraventa, sin demoras ni condiciones adicionales.",
      "Utilizamos transferencia bancaria inmediata para que puedas verificar la operación en el acto.",
    ],
    cambio_titularidad: [
      "Nosotros gestionamos el cambio de titularidad de inmediato, asumiendo toda la responsabilidad del proceso.",
      "La transferencia del vehículo se inicia el mismo día de la compra, garantizando que todos los trámites se realizan correctamente.",
      "No tendrás que preocuparte por el cambio de titularidad, nos encargamos de todo el proceso administrativo.",
    ],
    multas_posteriores: [
      "Si recibes multas tras la venta, contáctanos para verificar el estado de la transferencia. Si la transferencia ya estaba completada, puedes recurrir la multa presentando el contrato de compraventa.",
      "En caso de recibir multas después de vendernos tu coche, te ayudaremos a gestionar la situación y a demostrar que ya no eras el propietario en el momento de la infracción.",
      "Las multas recibidas después de la venta pueden recurrirse. Te proporcionaremos toda la documentación necesaria para demostrar que el vehículo ya no era de tu propiedad.",
    ],
    propietario_fallecido: [
      "Sí, puedes vender un coche si el propietario ha fallecido, pero es necesario presentar el certificado de defunción y la documentación que acredite la aceptación de la herencia.",
      "En caso de fallecimiento del titular, los herederos pueden vender el vehículo una vez completados los trámites sucesorios correspondientes.",
      "Para vender un vehículo heredado, necesitarás acreditar tu condición de heredero mediante la documentación pertinente (testamento, declaración de herederos, etc.).",
    ],
    cancelar_venta: [
      "No, una vez firmada la transferencia, la venta es definitiva y no puede cancelarse, ya que se trata de un contrato legalmente vinculante.",
      "La compraventa de un vehículo es un acto jurídico firme que no puede revocarse una vez formalizado, salvo que ambas partes acuerden lo contrario.",
      "Tras la firma del contrato y la transferencia, la operación se considera completada y legalmente vinculante para ambas partes.",
    ],
  },

  // Información de la empresa
  empresa: {
    direccion: [
      "Nuestra dirección física es Avenida de la Innovación, 25, 33011 Oviedo, Asturias. Estamos cerca del Parque Tecnológico de Asturias, con fácil acceso desde la A-66.",
      "Nos encontramos en Avenida de la Innovación, 25, 33011 Oviedo, Asturias. Tenemos un amplio aparcamiento para clientes y estamos bien comunicados con transporte público.",
      "Puedes visitarnos en Avenida de la Innovación, 25, 33011 Oviedo. Nuestras instalaciones están abiertas de lunes a viernes de 9:00 a 20:00 y sábados de 10:00 a 14:00.",
    ],
    horario: [
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 20:00 y sábados de 10:00 a 14:00. Domingos y festivos permanecemos cerrados.",
      "Estamos disponibles para atenderte de lunes a viernes de 9:00 a 20:00 y sábados de 10:00 a 14:00. Si lo prefieres, podemos concertar una cita fuera de este horario.",
      "Atendemos de lunes a viernes de 9:00 a 20:00 y sábados de 10:00 a 14:00. Para urgencias fuera de este horario, puedes contactarnos por email y te responderemos lo antes posible.",
    ],
    contacto: [
      "Puedes contactarnos en el teléfono 984263220 o por email a info@comprotucochealmejorprecio.net. Nuestro horario de atención es de lunes a viernes de 9:00 a 20:00 y sábados de 10:00 a 14:00.",
      "Estamos disponibles en el 984263220 o por email. También puedes visitarnos en nuestra sede en Oviedo, con servicio en todo el Principado de Asturias.",
      "¿Prefieres que te llamemos nosotros? Puedo tomar tus datos y un asesor se pondrá en contacto contigo lo antes posible.",
    ],
    experiencia: [
      "Contamos con más de 15 años de experiencia en el sector de la compraventa de vehículos usados. Nuestro equipo está formado por profesionales con amplia experiencia en tasación y peritación de vehículos.",
      "Desde 2008 nos dedicamos a la compra de coches usados, habiendo gestionado más de 10.000 operaciones con éxito. Nuestra experiencia nos permite ofrecerte el mejor servicio y las mejores condiciones del mercado.",
      "Somos una empresa consolidada con más de 15 años en el sector. Nuestro conocimiento del mercado y nuestra red de contactos nos permiten ofrecerte el mejor precio por tu vehículo usado.",
    ],
    ventajas: [
      "Las principales ventajas de vendernos tu coche son: 1) Mejor precio garantizado, 2) Pago inmediato, 3) Gestión gratuita de todos los trámites, 4) Proceso rápido y seguro, 5) Sin comisiones ni gastos ocultos, y 6) Servicio a domicilio en toda Asturias.",
      "Ofrecemos hasta un 10% más que la competencia, pago inmediato, gestión gratuita de trámites, tasación profesional, y nos desplazamos a donde estés sin coste adicional. Todo ello con la garantía de más de 15 años de experiencia en el sector.",
      "Con nosotros obtienes el mejor precio del mercado, un proceso rápido y sin complicaciones, y la tranquilidad de que nos encargamos de toda la burocracia. Además, te ofrecemos asesoramiento personalizado durante todo el proceso.",
    ],
  },
}

// Palabras clave para identificar la intención del usuario
const keywords = {
  // Saludos y despedidas
  greeting: ["hola", "buenas", "saludos", "qué tal", "buenos días", "buenas tardes", "buenas noches"],
  gracias: ["gracias", "muchas gracias", "te lo agradezco", "agradecido"],

  // Proceso de venta
  proceso: [
    "proceso",
    "cómo funciona",
    "pasos",
    "cómo es",
    "cómo vender",
    "procedimiento",
    "vender mi coche",
    "quiero vender",
  ],
  pago: ["pago", "cobro", "dinero", "transferencia", "cuándo pagan", "forma de pago", "cómo me pagan", "cuándo cobro"],
  recogida: ["recogida", "recoger", "llevar", "traer", "desplazar", "a domicilio", "ir a ver"],
  financiado: ["financiado", "financiación", "préstamo", "hipoteca", "leasing", "renting", "deuda"],

  // Tasación
  tasacion: ["tasar", "tasación", "valorar", "valoración", "precio", "cuánto", "vale", "valor", "cuánto me dan"],
  itv_tasacion: ["itv", "inspección", "técnica", "vehículos", "pasar la itv", "itv caducada", "sin itv"],
  averias: ["avería", "averiado", "roto", "falla", "problema", "golpe", "accidente", "reparación"],
  negociable: ["negociar", "negociable", "regatear", "mejor oferta", "subir precio", "más dinero"],

  // Impuestos
  transferencia: [
    "transferencia",
    "cambio titular",
    "cambio nombre",
    "poner a mi nombre",
    "coste transferencia",
    "precio transferencia",
  ],
  itp: ["itp", "impuesto transmisiones", "impuesto transferencia", "impuesto compraventa", "tributos"],
  circulacion: ["impuesto circulación", "impuesto municipal", "impuesto vehículos", "ivtm", "rodaje"],
  multas: ["multa", "sanción", "dgt", "tráfico", "radar", "aparcamiento"],

  // Documentación
  documentacion: ["documentos", "documentación", "papeles", "qué necesito", "trámites", "requisitos"],
  contrato: ["contrato", "compraventa", "documento", "firmar", "acuerdo"],
  reserva_dominio: ["reserva dominio", "embargo", "carga", "deuda", "impago", "financiera"],
  tiempo_transferencia: ["cuánto tarda", "tiempo", "plazo", "días", "semanas", "demora"],

  // ITV
  itv_obligatorio: ["itv obligatoria", "necesito itv", "sin itv puedo", "obligatorio itv", "requisito itv"],
  itv_no_pasa: ["no pasa itv", "fallar itv", "suspender itv", "rechazar itv", "itv negativa"],
  itv_coste: ["coste itv", "precio itv", "cuánto cuesta itv", "valor itv", "pagar itv"],
  itv_caducada: ["itv caducada", "itv vencida", "sin itv", "renovar itv", "actualizar itv"],

  // Seguridad
  seguridad: ["seguro", "seguridad", "confianza", "fiable", "estafa", "legal", "garantía"],
  pago_inmediato: ["pago inmediato", "cobrar ya", "cobrar enseguida", "pago rápido", "al momento"],
  cambio_titularidad: ["cambio titularidad", "nuevo propietario", "a mi nombre", "cambiar papeles"],
  multas_posteriores: ["multas después", "multa posterior", "recibir multa", "multa antigua", "sanción después"],
  propietario_fallecido: ["fallecido", "fallecimiento", "muerto", "defunción", "heredero", "herencia"],

  // Empresa
  direccion: ["dirección", "ubicación", "dónde estáis", "dónde están", "calle", "avenida", "localización", "sede"],
  horario: ["horario", "hora", "abierto", "cerrado", "atención", "cuando", "días"],
  contacto: ["contacto", "teléfono", "email", "correo", "llamar", "contactar", "número"],
  experiencia: ["experiencia", "años", "trayectoria", "historia", "tiempo", "desde cuándo", "cuánto tiempo"],
  ventajas: ["ventajas", "beneficios", "por qué", "mejor", "diferencia", "comparación", "por qué vosotros"],
}

// Función para obtener la respuesta del chatbot
export async function getChatbotResponse(userMessage: string): Promise<string> {
  const message = userMessage.toLowerCase()

  // Identificar la intención del usuario
  let category = ""
  let intent = ""
  let maxMatches = 0

  // Buscar coincidencias en las palabras clave
  for (const [key, keywordList] of Object.entries(keywords)) {
    let matches = 0
    for (const keyword of keywordList) {
      if (message.includes(keyword)) {
        matches++
      }
    }

    if (matches > maxMatches) {
      maxMatches = matches

      // Determinar la categoría y la intención
      if (key === "greeting" || key === "gracias") {
        category = key
        intent = key
      } else if (["proceso", "pago", "recogida", "financiado"].includes(key)) {
        category = "general"
        intent = key
      } else if (["tasacion", "itv_tasacion", "averias", "negociable"].includes(key)) {
        category = "tasacion"
        intent = key.replace("itv_tasacion", "itv")
      } else if (["transferencia", "itp", "circulacion", "multas"].includes(key)) {
        category = "impuestos"
        intent = key
      } else if (["documentacion", "contrato", "reserva_dominio", "tiempo_transferencia"].includes(key)) {
        category = "tramites"
        intent = key
      } else if (["itv_obligatorio", "itv_no_pasa", "itv_coste", "itv_caducada"].includes(key)) {
        category = "itv"
        intent = key.replace("itv_", "")
      } else if (
        ["seguridad", "pago_inmediato", "cambio_titularidad", "multas_posteriores", "propietario_fallecido"].includes(
          key,
        )
      ) {
        category = "seguridad"
        intent = key
      } else if (["direccion", "horario", "contacto", "experiencia", "ventajas"].includes(key)) {
        category = "empresa"
        intent = key
      }
    }
  }

  // Si no se identifica ninguna intención específica
  if (category === "") {
    if (message.length < 10) {
      category = "greeting"
      intent = "greeting"
    } else {
      // Respuesta por defecto
      const defaultResponses = [
        "Gracias por tu mensaje. Si tienes dudas específicas sobre la tasación o venta de tu vehículo, no dudes en preguntarme o llamar directamente a nuestro equipo al 984263220.",
        "Entiendo. ¿Te gustaría obtener más información sobre cómo vender tu coche con nosotros o preferirías hablar directamente con un asesor?",
        "Estoy aquí para resolver tus dudas sobre la venta de tu vehículo. ¿Hay algo específico que quieras saber sobre nuestro servicio?",
      ]
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    }
  }

  // Obtener respuestas para la categoría e intención identificadas
  let responses: string[] = []

  if (category === "greeting") {
    responses = [
      "¡Hola! Soy el asistente virtual de ComproTuCocheAlMejorPrecio. ¿En qué puedo ayudarte hoy?",
      "¡Bienvenido! Estoy aquí para ayudarte con la venta de tu coche. ¿Qué necesitas saber?",
      "¡Hola! Estoy aquí para ayudarte con la venta de tu coche. ¿Qué necesitas saber?",
      "¡Hola! ¿Cómo puedo ayudarte a vender tu coche al mejor precio hoy?",
    ]
  } else if (category === "gracias") {
    responses = [
      "¡De nada! Estoy aquí para ayudarte. ¿Hay algo más en lo que pueda asistirte?",
      "Es un placer poder ayudarte. Si tienes más preguntas, no dudes en consultarme.",
      "Para eso estamos. ¿Necesitas información adicional sobre algún otro aspecto?",
    ]
  } else if (knowledgeBase[category] && knowledgeBase[category][intent]) {
    responses = knowledgeBase[category][intent]
  } else {
    // Si no se encuentra la categoría o intención específica
    responses = [
      "Gracias por tu pregunta. Para información más detallada sobre este tema, te recomendaría hablar directamente con uno de nuestros asesores al 984263220.",
      "Entiendo tu consulta. Para darte la información más precisa y actualizada, sería mejor que contactaras con nuestro equipo de atención al cliente.",
      "Esta es una consulta interesante. Para ofrecerte la mejor respuesta, te sugiero que nos llames al 984263220 o nos visites en nuestra sede en Oviedo.",
    ]
  }

  // Seleccionar una respuesta aleatoria
  const randomIndex = Math.floor(Math.random() * responses.length)
  return responses[randomIndex]
}

