// @ts-nocheck
import { useRouter } from "next/navigation";

type props = {
    mipymeID:string,
    answers:object
}


export default function ResultadoMipymePage({mipymeID, answers}:props){
  const LEVELS = [
  { level:1, name:"Semilla", emoji:"\u{1F331}",
    headline:"Tu negocio está empezando su camino digital",
    analysis:"Todavía no tienes presencia digital clara ni has trabajado con creativos. Eso está perfecto — todos empiezan por aquí. Lo importante es que estás dando el primer paso. El brief asistido va a ser tu mejor aliado porque te guía desde cero.",
    rec:"Te recomendamos empezar con lo básico: una identidad visual sólida (logo, colores, tipografía) y contenido inicial para redes. No intentes hacer todo a la vez." },
  { level:2, name:"Brote", emoji:"\u{1F33F}",
    headline:"Ya tienes la intención, falta estructura",
    analysis:"Tienes alguna presencia digital y una idea de lo que necesitas, pero falta aterrizar. Probablemente has intentado hacer cosas por tu cuenta o con conocidos, pero no con un proceso claro.",
    rec:"El brief asistido te ayudará a convertir esa idea en un encargo concreto. Enfócate en definir bien tu público y tu estilo visual antes de producir contenido." },
  { level:3, name:"Crecimiento", emoji:"\u{1F333}",
    headline:"Tienes base, pero necesitas profesionalizar",
    analysis:"Tu negocio ya tiene presencia digital y has trabajado con creativos, pero probablemente enfrentaste retrabajos o resultados que no eran lo esperado. Sabes lo que necesitas pero no siempre sabes cómo pedirlo.",
    rec:"El brief asistido va a marcar la diferencia para ti. Con un brief bien armado, vas a reducir retrabajos y conseguir un creativo que realmente entienda tu visión." },
  { level:4, name:"Florecimiento", emoji:"\u{1F338}",
    headline:"Vas bien, es momento de escalar",
    analysis:"Tienes presencia digital activa, has trabajado con creativos y sabes más o menos qué pedir. Tu reto ahora no es empezar sino mejorar: conseguir mejores resultados y encontrar creativos que estén a la altura.",
    rec:"Aprovecha el brief asistido para ser más preciso. Mientras más detallado sea tu brief, mejor será el match y menos rondas de ajustes tendrás." },
  { level:5, name:"Expansión", emoji:"\u{1F680}",
    headline:"Tu negocio ya vuela, necesitas consistencia",
    analysis:"Tienes presencia digital sólida, experiencia con creativos y claridad sobre lo que necesitas. Tu desafío es encontrar aliados creativos de largo plazo que mantengan el nivel que tu marca ya tiene.",
    rec:"El matching de Sarasvati te conecta con creativos verificados. Busca relaciones de largo plazo, no solo proyectos puntuales." },
  { level:6, name:"Madurez", emoji:"\u{1F451}",
    headline:"Eres referente, busca aliados estratégicos",
    analysis:"Tu negocio tiene madurez digital avanzada: presencia activa, experiencia con creativos, claridad total y materiales listos. Buscas creativos que aporten valor estratégico, no solo ejecución.",
    rec:"Usa el brief para comunicar hacia dónde va tu marca. Sarasvati te conecta con los mejores perfiles según compatibilidad real." },
  ];

  const LEVEL_STYLES = {
  1: { color:"text-amber-700", bg:"bg-amber-50", border:"border-amber-200", barColor:"bg-amber-400" },
  2: { color:"text-lime-700", bg:"bg-lime-50", border:"border-lime-200", barColor:"bg-lime-500" },
  3: { color:"text-green-700", bg:"bg-green-50", border:"border-green-200", barColor:"bg-green-500" },
  4: { color:"text-purple-700", bg:"bg-purple-50", border:"border-purple-200", barColor:"bg-purple-500" },
  5: { color:"text-blue-700", bg:"bg-blue-50", border:"border-blue-200", barColor:"bg-blue-500" },
  6: { color:"text-amber-600", bg:"bg-amber-50", border:"border-amber-300", barColor:"bg-purple-500" },
};

  function calcLevel(answers) {
    let s = 0;
    const a = answers || {};
    // Presencia digital (0-3 puntos)
    const p = a.presencia || a.presenciaDigital || "";
    if (p.includes("redes activas y página") || p.includes("web")) s += 3;
    else if (p.includes("Solo redes")) s += 2;
    else if (p.includes("casi no publico") || p.includes("básica")) s += 1;
    // Experiencia previa con creativos (0-3)
    const e = a.experiencia || a.experienciaPrevia || "";
    if (e.includes("varias veces")) s += 3;
    else if (e.includes("Una o dos")) s += 2;
    else if (e.includes("conocidos") || e.includes("referidos")) s += 1;
    // Claridad de necesidad (0-3)
    const c = a.claridad || a.claridadNecesidad || "";
    if (c.includes("Muy claro") || c.includes("exactamente")) s += 3;
    else if (c.includes("idea general")) s += 2;
    else if (c.includes("necesito algo") || c.includes("no sé qué")) s += 1;
    // Materiales disponibles (0-3)
    const m = a.materiales || [];
    const mCount = Array.isArray(m) ? m.length : (typeof m === "string" ? m.split(",").length : 0);
    if (mCount >= 4) s += 3; else if (mCount >= 2) s += 2; else if (mCount >= 1) s += 1;
    // Si marcó "No tengo nada" no suma
    if (s <= 2) return 0;
    if (s <= 4) return 1;
    if (s <= 6) return 2;
    if (s <= 8) return 3;
    if (s <= 10) return 4;
    return 5;
  }

  const router = useRouter();

  function onContinue(){
    const dataJSON = encodeURIComponent(
        JSON.stringify(answers)
      );

    router.push(`/MiPyme/brief/${mipymeID}?data=${dataJSON}`)
  }
  const lvlIdx = calcLevel(answers);
  const lvl = LEVELS[lvlIdx];
  const sty = LEVEL_STYLES[lvl.level];
  const barWidths = ["17%","33%","50%","67%","83%","100%"];

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins']">
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-16">
        <div className="flex gap-2 mb-8">
          {[1,2,3,4].map(i => <div key={i} className="flex-1 h-1.5 rounded-full bg-purple-600" />)}
        </div>
        <div className="text-center mb-10">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">✓ DIAGNÓSTICO COMPLETADO</div>
          <h1 className="font-['Philosopher'] text-3xl font-bold text-gray-900 mb-2">
            {`${answers.Empresa}, estos son tus resultados`}
          </h1>
          <p className="text-gray-500">Análisis de madurez digital de <span className="font-semibold text-gray-700">{answers.Empresa || "tu negocio"}</span></p>
        </div>

        {/* Nivel de madurez */}
        <div className={`${sty.bg} ${sty.border} border rounded-2xl p-8 mb-6`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{lvl.emoji}</span>
            <div>
              <p className="text-sm text-gray-500">Tu nivel de madurez digital</p>
              <p className={`text-3xl font-bold ${sty.color} font-['Philosopher']`}>Nivel {lvl.level}: {lvl.name}</p>
            </div>
          </div>

          {/* Barra */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Semilla</span><span>Madurez</span>
            </div>
            <div className="w-full h-3 bg-white rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${sty.barColor}`} style={{width: barWidths[lvlIdx]}} />
            </div>
            <div className="flex justify-between mt-2">
              {LEVELS.map((l,i) => <span key={i} className={`text-sm ${i === lvlIdx ? "opacity-100" : "opacity-30"}`}>{l.emoji}</span>)}
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 text-lg mb-3">{lvl.headline}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{lvl.analysis}</p>
          <div className="bg-white/70 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-700 mb-1">💡 Nuestra recomendación</p>
            <p className="text-sm text-gray-600 leading-relaxed">{lvl.rec}</p>
          </div>
        </div>

        {/* Siguiente paso */}
        <div className="bg-white border border-gray-200 rounded-2xl p-7 mb-8">
          <h3 className="font-semibold text-gray-900 mb-5">Tu siguiente paso</h3>
          <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white text-xl flex-shrink-0">💬</div>
            <div>
              <p className="font-semibold text-gray-900">Brief asistido con IA</p>
              <p className="text-gray-500 text-sm mt-1">Nuestra IA te guiará en una conversación para construir un brief profesional. Con un buen brief, el creativo entiende exactamente qué necesitas y el resultado es radicalmente mejor.</p>
            </div>
          </div>
        </div>

        <button onClick={onContinue} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors">
          Continuar al Brief Asistido →
        </button>
        <p className="text-center text-gray-400 text-sm mt-4">Toma 5-8 minutos y marca toda la diferencia</p>
      </div>
    </div>
  );
}