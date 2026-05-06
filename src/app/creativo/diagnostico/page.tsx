import Link from "next/link"

export default function DiagnosticoCreativo(){
    return (
        <div>
          
          <div className="relative bg-[url(/creativo.png)] bg-center text-center p-20 bg-no-repeat bg-cover h-200">
            {/* div para oscurecer el fondo */}
            <div className="absolute inset-0 bg-black/45" />
            
            <div className="relative mt-0 mb-0 m-auto max-w-[760px] z-1">
                <div className="inline-block bg-white/20 backdrop-blur-sm p-3 rounded-md mb-10">
                    <span className="text-[13px] font-bold text-white tracking-widest">
                        PARA CREATIVOS
                    </span>
                </div>

                <h1 className="font-bold text-[52px] text-white font-[philosopher] mb-10 text-shadow-sm leading-[1.1]">
                    Conectamos tu perfil con proyectos compatibles con <span className="text-(--accent)">tu experiencia, tu estilo y tu forma de trabajar</span>
                </h1>

                <p className="text-[19px] text-white/90 max-w-[600px] mt-0 mb-10 ml-20 mr-20">
                    Todo lo que necesitas para crear ya está resuelto antes de que el proyecto llegue a tus manos.
                </p>

                <Link href="/creativo/diagnostico/formulario">
                  <button className="bg-(--accent) font-[poppins] font-semibold text-[17px] text-black rounded-[1vw] pl-10 pr-10 p-5 cursor-pointer">
                    Crear mi perfil →
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
                  {s:1,t:"Crea tu perfil",d:"Registra tus especialidades, sectores de experiencia, portafolio, rango de precios y disponibilidad. Tu perfil es la base para conectarte con los proyectos correctos."},
                  {s:2,t:"Recibe proyectos compatibles",d:"Nuestro algoritmo de matching cruza tu perfil con los briefs de los clientes y te conecta con proyectos que se alinean con tu experiencia, tu estilo y tu forma de trabajar."},
                  {s:3,t:"Crea con superpoderes",d:"Trabaja sobre un brief claro y completo, con acceso a herramientas de inteligencia artificial que te apoyan en la creación de contenido, estrategias y propuestas. Más foco en crear, menos en adivinar."},
                  {s:4,t:"Entrega con respaldo",d:"Presenta tus entregables con la confianza de haber trabajado sobre un encargo bien definido, con expectativas alineadas y un proceso que respalda tu trabajo profesional."},
                  {s:5,t:"Cierre y reputación",d:"Cada proyecto cerrado fortalece tu perfil. Las evaluaciones te posicionan mejor dentro del ecosistema y hablan de tu trabajo ante futuros clientes."},
                ].map(x => (
                <div key={x.s} className="flex flex-start gap-10 bg-white rounded-[1vw] border-1 border-black/20 p-3 pl-20 pr-20">
                    <div className="flex w-[114px] h-[52px] rounded-[1vw] bg-(--accentLight) justify-center items-center text-[20px] font-bold text-(--accent)">
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

                <Link href="/creativo/diagnostico/formulario" className="flex justify-center">
                  <button className="bg-(--primary) font-[poppins] font-semibold text-[17px] text-white rounded-[1vw] pl-10 pr-10 p-5 cursor-pointer">
                    Empezar Ahora →
                  </button>                
                </Link>
              </div>
            </div>
            
        </div>
    )
}