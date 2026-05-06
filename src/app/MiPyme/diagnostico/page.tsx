import Link from "next/link";

export default function DiagnosticoMiPyme(){
    return (
        <div>
          
          <div className="relative bg-[url(/mipyme.png)] bg-center text-center p-30 bg-no-repeat bg-cover h-225">
            {/* div para oscurecer el fondo */}
            <div className="absolute inset-0 bg-black/45" />
            
            <div className="relative mt-0 mb-0 m-auto max-w-[760px] z-1">
                <div className="inline-block bg-white/20 backdrop-blur-sm p-3 rounded-md mb-10">
                    <span className="text-[13px] font-bold text-white tracking-widest">
                        PARA MIPYMES
                    </span>
                </div>

                <h1 className="font-bold text-[52px] text-white font-[philosopher] mb-10 text-shadow-sm leading-[1.1]">
                    Conecta tu necesidad con el <span className="text-(--accent)">talento creativo</span> ideal
                </h1>

                <p className="text-[19px] text-white/90 max-w-[600px] mt-0 mb-10 ml-20 mr-20">
                    Tu negocio necesita crear y comunicar, pero encontrar al creativo correcto no siempre es fácil. Por eso te guiamos paso a paso.
                </p>

                <Link href="/MiPyme/diagnostico/formulario">
                  <button className="bg-(--accent) font-[poppins] font-semibold text-[17px] text-black rounded-[1vw] pl-10 pr-10 p-5 cursor-pointer">
                    Iniciar diagnóstico →
                  </button>                
                </Link>

            </div>
          </div>

          <div className="bg-white p-12">

            <h2 className="font-[philosopher] text-[34px] font-semibold text-black mb-8 text-center">
                Tu recorrido en Sarasvati
            </h2>

            <div className="flex flex-col gap-5 max-w-[800px] m-auto">
              {[
                {s:1,t:"Diagnóstico",d:"Responde unas preguntas rápidas sobre tu empresa, tu necesidad y tu experiencia previa. Con eso entendemos tu contexto y te orientamos hacia el siguiente paso."},
                {s:2,t:"Brief asistido con IA",d:"Nuestra inteligencia artificial te guía en una conversación para construir un brief profesional: objetivo, estilo, entregables, tiempos y presupuesto. Claro, completo y listo para ejecutar."},
                {s:3,t:"Matching",d:"Nuestro algoritmo analiza tu brief y te presenta los creativos más compatibles con tu proyecto según experiencia, sector, estilo y disponibilidad. Tú eliges con quién trabajar."},
                {s:4,t:"Seguimiento inteligente",d:"Durante la ejecución cuentas con acompañamiento asistido por IA: seguimiento del avance, feedback estructurado y visibilidad de cada etapa del proyecto en tiempo real."},
                {s:5,t:"Entrega y cierre",d:"Recibe los entregables finales, valida los resultados y cierra el proyecto con la tranquilidad de que todo se cumplió como se acordó. Tu reseña ayuda a fortalecer el ecosistema."},
              ].map(x => (
                <div key={x.s} className="flex flex-start gap-10 bg-white rounded-[1vw] border-1 border-black/20 p-3 pl-20 pr-20">
                    <div className="flex w-[114px] h-[52px] rounded-[1vw] bg-(--primaryMid)/70 justify-center items-center text-[20px] font-bold text-(--primary)">
                        {x.s}
                    </div>

                    <div>                        
                        <h3 className="font-[poppins] font-bold text-[19px] text-black mb-2">
                          {x.t}
                        </h3>
                        <p className="font-[poppins] text-[16px] text-(--textSec) leading-[1.6]">
                          {x.d}
                        </p>
                    </div>
                </div>
                ))}

                <Link href="/MiPyme/diagnostico/formulario" className="flex justify-center">
                  <button className="bg-(--primary) font-[poppins] font-semibold text-[17px] text-white rounded-[1vw] pl-10 pr-10 p-5 cursor-pointer">
                    Empezar Ahora →
                  </button>                
                </Link>
              </div>
            </div>
            
        </div>
    )
}