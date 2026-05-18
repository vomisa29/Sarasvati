import DiagnosticFormPage from "@/shared/pages/DiagnosticFormPage";

export default function DiagnosticoCreativo(){
const dxCreativo = [
  { title: "Tu perfil profesional", sub: "Cuéntanos un poco sobre ti", qs: [
    { l: "¿Cual es tu nombre creativo?", type: true},
    { l: "¿Cuál es tu área principal de trabajo?", multi: true, o: ["Diseño gráfico","Branding / identidad de marca","Fotografía","Video","Motion graphics","Ilustración","Contenido para redes (Community Management)","Estrategia de marketing / contenido","Copywriting / redacción","Diseño web / UI","Packaging"] },
    { l: "¿Cuántos años de experiencia tienes como freelance o independiente?", o: ["Menos de 1 año","1–3 años","3–5 años","Más de 5 años"] },
    { l: "¿Has trabajado con Micro, pequeñas y medianas empresas colombianas antes?", o: ["Sí, es mi tipo de cliente principal","Sí, entre otros tipos de clientes","Pocas veces","Nunca"] },
    { l: "¿En qué sectores tienes más experiencia?", multi: true, o: ["Gastronomía / alimentos","Moda / belleza","Tecnología","Salud / bienestar","Educación","Servicios profesionales","Comercio / retail","Turismo / hotelería","Cualquier sector","Otro"] },
  ]},
  { title: "Tu experiencia con clientes", sub: "Entender tu historia nos ayuda a conectarte mejor", qs: [
    { l: "¿Qué tan claros suelen ser los briefs que recibes?", o: ["Casi siempre llegan claros y completos","A veces claros, a veces no","La mayoría llegan incompletos o confusos","Casi nunca recibo un brief formal"] },
    { l: "¿Cuáles son las fricciones más frecuentes en tus proyectos?", multi: true, o: ["Brief incompleto o ambiguo","Feedback confuso o contradictorio","Demasiadas rondas de ajustes","Tiempos de entrega irreales","Muchos aprobadores","Expectativas no alineadas con el presupuesto","Cambios de alcance sin ajuste de precio","Demora en pagos","Falta de materiales del cliente (fotos, logos, textos)"] },
    { l: "¿Qué porcentaje de tus proyectos requieren más de 2 rondas de ajustes?", o: ["Menos del 20%","Entre 20% y 50%","Más del 50%","Casi todos"] },
  ]},
  { title: "Cómo te gustaría trabajar", sub: "Queremos entender tus preferencias para darte el match perfecto", qs: [
    { l: "¿Qué criterios usas para decidir si aceptas un proyecto?", multi: true, o: ["Que el brief sea claro","Que el presupuesto sea justo","Que el sector me interese","Que el plazo sea realista","Que el cliente esté abierto a mis propuestas","Que haya un proceso de feedback definido","Que sea un proyecto recurrente o de largo plazo"] },
    { l: "¿Cuál es tu rango de precio habitual por proyecto?", o: ["Menos de $500.000 COP","$500.000 – $1.000.000","$1.000.000 – $3.000.000","$3.000.000 – $5.000.000","$5.000.000 – $10.000.000","Más de $10.000.000","Depende completamente del proyecto"] },
    { l: "¿Cuántos proyectos puedes manejar simultáneamente?", o: ["1–2","3–4","5+","Depende del tamaño"] },
    { l: "¿Qué modalidad de trabajo prefieres?", o: ["100% remoto","Presencial cuando sea necesario","Híbrido","Me adapto"] },
    { l: "¿Qué herramientas usas para entregar y comunicarte?", multi: true, o: ["WhatsApp","Google Drive / Wetransfer","Correo electrónico","Trello / Notion / Asana","Slack / Discord","Reuniones por Zoom/Meet"] },
  ]},
  { title: "Tu portafolio y visibilidad", sub: "Queremos conocer tu trabajo", qs: [
    { l: "¿Dónde muestras actualmente tu portafolio?", multi: true, o: ["Instagram","Behance / Dribbble","Página web propia","LinkedIn","TikTok","No tengo portafolio público todavía"] },
    { l: "¿Qué te gustaría que Sarasvati hiciera por ti?", multi: true, o: ["Traerme clientes con briefs claros","Filtrar proyectos que encajen con mi perfil","Ayudarme a cotizar mejor","Darme visibilidad ante MiPymes","Proteger mis condiciones de trabajo","Reducir retrabajos y rondas innecesarias","Darme herramientas para gestionar proyectos","Capacitarme para mejorar mis habilidades"] },
  ]},
  ];
    return (
        <DiagnosticFormPage steps={dxCreativo} tipo="creativo"/>
    )
}