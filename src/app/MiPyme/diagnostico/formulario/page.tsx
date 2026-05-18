import DiagnosticFormPage from "@/shared/pages/DiagnosticFormPage";

export default function DiagnosticoMiPyme(){
    const dxMipyme = [
    { title: "Sobre tu empresa", sub: "Cuéntanos un poco sobre tu negocio", qs: [
        { l: "¿Cual es el nombre de tu empresa?", type: true},
        { l: "¿Cuántos empleados tiene tu empresa?", o: ["1–5 (solo yo o un equipo pequeño)","6–20","21–50","51+"] },
        { l: "¿En qué sector opera tu negocio?", o: ["Gastronomía / alimentos","Moda / belleza","Tecnología / software","Salud / bienestar","Educación","Servicios profesionales","Comercio / retail","Turismo / hotelería","Industria / manufactura","Otro"] },
        { l: "¿Cuánto tiempo lleva operando tu empresa?", o: ["Menos de 1 año","1–3 años","3–5 años","Más de 5 años"] },
        { l: "¿Cómo describirías tu presencia digital actual?", o: ["Tengo redes activas y página web","Solo redes sociales (pero las manejo)","Tengo redes pero casi no publico","Muy básica o desactualizada","No tengo presencia digital"] },
    ]},
    { title: "Tu necesidad creativa", sub: "¿Qué tipo de apoyo creativo tienes en mente?", qs: [
        { l: "¿Qué tipo de apoyo creativo tienes en mente?", multi: true, o: ["Diseño gráfico (piezas, posts, flyers)","Branding / identidad de marca","Contenido para redes sociales","Fotografía de producto o marca","Video / reels / animación","Estrategia de contenido o marketing","Diseño web o landing page","Copywriting / textos","Packaging / diseño de empaques","No tengo claro aún"] },
        { l: "¿Cuál es el objetivo principal de este proyecto?", o: ["Lanzar un producto o servicio nuevo","Mejorar, rediseñar o refrescar mi marca","Generar contenido constante para redes","Hacer una campaña específica (temporada, evento)","Profesionalizar mi imagen","Aumentar ventas o conversiones","No lo tengo definido todavía"] },
        { l: "¿Tienes un plazo en mente para este proyecto?", o: ["Lo necesito urgente (menos de 1 semana)","En las próximas 2–3 semanas","Dentro de 1–2 meses","No tengo prisa, quiero hacerlo bien","No lo he pensado"] },
        { l: "¿Tienes un presupuesto estimado?", o: ["Menos de $500.000 COP","$500.000 – $1.000.000","$1.000.000 – $3.000.000","$3.000.000 – $5.000.000","$5.000.000 – $10.000.000","Más de $10.000.000","No tengo idea de cuánto debería costar"] },
    ]},
    { title: "Tu experiencia previa", sub: "Entender tu historia nos ayuda a conectarte mejor", qs: [
        { l: "¿Has contratado servicios creativos antes?", o: ["Sí, varias veces (freelancers o agencias)","Una o dos veces","Solo con conocidos o referidos","Nunca"] },
        { l: "¿Cuál fue tu mayor dificultad en experiencias anteriores?", multi: true, o: ["Explicar bien lo que necesitaba","Encontrar al creativo adecuado","Muchos retrabajos y rondas de ajustes","El resultado no fue lo que esperaba","Problemas con tiempos de entrega","Problemas con el presupuesto o pagos","Dar feedback claro","Comparar opciones entre creativos","No he tenido dificultades","No aplica (nunca he contratado)"] },
    ]},
    { title: "Tu forma de trabajar", sub: "Queremos entender tus preferencias para darte el match perfecto", qs: [
        { l: "¿Qué tan claro tienes lo que necesitas hoy?", o: ["Muy claro, sé exactamente qué pedir","Tengo una idea general pero me falta aterrizar","Sé que necesito algo pero no sé qué exactamente","Estoy explorando opciones"] },
        { l: "¿Qué es lo más importante para ti al elegir un creativo?", top3: true, o: ["Que entienda mi negocio y mi sector","Calidad del portafolio","Precio","Rapidez de entrega","Que me guíe en el proceso","Experiencia comprobable","Buenas reseñas de otros clientes","Que esté en mi ciudad"] },
        { l: "¿Tienes materiales listos para compartir con el creativo?", multi: true, o: ["Logo y guía de marca","Fotos de mis productos/servicios","Textos o información del negocio","Referencias visuales de lo que me gusta","Presupuesto definido","No tengo nada preparado"] },
    ]},
    ];
    return (
        <DiagnosticFormPage steps={dxMipyme} tipo="mipyme"/>
    )
}