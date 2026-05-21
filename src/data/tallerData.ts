// Datos de servicios principales
export const mainServices = [
  {
    icon: "MTR",
    title: "Revision General del Motor",
    description: "Diagnostico completo del motor para detectar fallas de rendimiento, consumo y temperatura.",
    features: [
      "Diagnóstico computarizado",
      "Revisión de filtros",
      "Control de fluidos",
      "Verificación de correas"
    ],
    isHighlighted: true
  },
  {
    icon: "ELE",
    title: "Sistema Electrico",
    description: "Control y reparacion del circuito electrico para asegurar arranque, carga y funcionamiento estable.",
    features: [
      "Control de batería",
      "Revisión de alternador",
      "Sistema de encendido",
      "Bujías y cables"
    ]
  },
  {
    icon: "FRN",
    title: "Frenos y Suspension",
    description: "Servicio tecnico en frenos y suspension para mejorar seguridad, frenado y estabilidad en manejo.",
    features: [
      "Pastillas y discos",
      "Líquido de frenos",
      "Amortiguadores",
      "Alineación y balanceo"
    ]
  },
  {
    icon: "TRN",
    title: "Transmisión",
    description: "Mantenimiento y reparacion de caja manual o automatica, con ajuste fino y pruebas de funcionamiento.",
    features: [
      "Cambio de aceite",
      "Reparación de fugas",
      "Ajuste de embrague",
      "Diagnóstico de fallas"
    ]
  },
  {
    icon: "REF",
    title: "Sistema de Refrigeracion",
    description: "Control del sistema de refrigeracion para evitar recalentamientos y proteger la vida util del motor.",
    features: [
      "Control con refractómetro",
      "Cambio de refrigerante",
      "Revisión de radiador",
      "Termostato y bomba"
    ]
  },
  {
    icon: "MNT",
    title: "Servicios Generales",
    description: "Mantenimiento preventivo y correctivo para mantener tu vehiculo confiable todo el ano.",
    features: [
      "Cambio de aceite",
      "Filtros y luces",
      "Inspección pre-VTV",
      "Servicios programados"
    ]
  }
];

// Estadísticas del taller
export const tallerStats = [
  { number: "5", label: "Anos de experiencia", icon: "EXP", suffix: "+" },
  { number: "100", label: "Vehiculos reparados", icon: "AUT", suffix: "+" },
  { number: "80", label: "Clientes que vuelven", icon: "CLT", suffix: "%" },
  { number: "100%", label: "Compromiso con la calidad", icon: "SAT" }
];

// Proceso de trabajo
export const workProcess = [
  {
    step: 1,
    title: "Diagnóstico",
    description: "Reviso el vehiculo y detecto la causa real del problema con criterio tecnico.",
    icon: "D1"
  },
  {
    step: 2,
    title: "Presupuesto",
    description: "Te explico trabajo, repuestos y tiempos en un presupuesto claro y sin sorpresas.",
    icon: "D2"
  },
  {
    step: 3,
    title: "Reparacion",
    description: "Realizo la reparacion con mano de obra especializada y repuestos de calidad.",
    icon: "D3"
  },
  {
    step: 4,
    title: "Entrega",
    description: "Pruebo el auto, lo entrego y te doy recomendaciones para su cuidado.",
    icon: "D4"
  }
];

// Testimoniales
export const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Cliente desde 2020",
    content: "Me explicaron la falla del motor en detalle, cumplieron el plazo y el auto quedo andando perfecto.",
    rating: 5
  },
  {
    name: "María González",
    role: "Propietaria de Taxi",
    content: "Necesito el auto todos los dias y siempre responden rapido. Trabajo prolijo y presupuesto respetado.",
    rating: 5
  },
  {
    name: "José Martínez",
    role: "Conductor de Uber",
    content: "Se ocuparon de frenos y suspension, me mostraron piezas y pruebas. Transparencia total de principio a fin.",
    rating: 5
  }
];

// Información de contacto
export const contactInfo = {
  phoneDisplay: "092 084 766",
  phoneE164: "+59892084766",
  whatsapp: "59892084766",
  instagram: "https://www.instagram.com/tallerg.c/",
  address: "La Teja, Montevideo",
  email: "info@tallergc.com",
  hours: {
    weekdays: "Atencion personalizada",
    saturday: "Horario a convenir",
    sunday: "Horario a convenir"
  }
};
