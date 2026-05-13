// ─────────────────────────────────────────────────────────
// COMPONENTE: PÁGINA DEL BRIEF ASISTIDO (React + TailwindCSS)
// Ruta: /MiPyme/brief
//
// Es el wrapper visual alrededor del chatbot de Typebot.
// Sidebar izquierdo con datos del diagnóstico + campos del brief.
// Área derecha donde se embebe el chatbot.
//
// Props:
//   userName,  diagnosticData, typebotUrl
//
// PARA EL INGENIERO:
// - Reemplazar el contenido del chat area con el embed de Typebot
//   (ya sea via iframe o Typebot React SDK: @typebot.io/react)
// - Los datos de diagnosticData vienen del paso anterior
// ─────────────────────────────────────────────────────────

export default function BriefPage() {
  const sector = "sector";
  const necesidad = "necesidad";
  const subsector = "subsector?";

  const briefFields = [
    { icon: "🎯", label: "Necesidad general" },
    { icon: "🎪", label: "Objetivo del proyecto" },
    { icon: "📦", label: "Entregables esperados" },
    { icon: "👥", label: "Público objetivo" },
    { icon: "🎨", label: "Referencias visuales" },
    { icon: "📁", label: "Materiales disponibles" },
    { icon: "⏰", label: "Tiempo / urgencia" },
    { icon: "💰", label: "Presupuesto" },
    { icon: "⚠️", label: "Restricciones" },
    { icon: "🏆", label: "Criterio de éxito" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins'] flex flex-col">
      <div className="flex flex-1 max-w-6xl mx-auto w-full p-6 gap-6">

        {/* ─── SIDEBAR ─── */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Tu Brief</h3>
              <span className="text-xs font-bold bg-yellow-400 text-gray-900 px-3 py-1 rounded-full">
                En construcción
              </span>
            </div>

            {/* Datos del diagnóstico */}
            <div className="bg-purple-50 rounded-xl p-4 mb-6">
              <p className="text-xs text-purple-600 font-semibold uppercase tracking-wide mb-3">
                Datos del diagnóstico
              </p>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Empresa</span>
                  <span className="text-gray-900 font-medium">{"Empresa"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sector</span>
                  <span className="text-gray-900 font-medium text-right max-w-[140px]">
                    {sector}{subsector ? ` → ${subsector}` : ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Necesidad</span>
                  <span className="text-gray-900 font-medium text-right max-w-[140px]">{necesidad}</span>
                </div>
              </div>
            </div>

            {/* Campos del brief */}
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">
              Campos del brief
            </p>
            <div className="space-y-3">
              {briefFields.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-base">{f.icon}</span>
                  <span className="text-sm text-gray-500">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs text-gray-400 leading-relaxed">
                💡 La IA te irá guiando para completar cada campo. Al terminar, tu brief estará listo para el matching.
              </p>
            </div>
          </div>
        </div>

        {/* ─── CHAT AREA ─── */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="bg-white border border-gray-200 rounded-t-2xl px-6 py-4 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
              {/* Reemplazar con <img src="/logo.png" className="h-7" /> */}
              <span className="text-purple-600 font-bold text-lg">S</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Asistente de Brief — Sarasvati</p>
              <p className="text-sm text-green-500">● En línea</p>
            </div>
          </div>

          {/* Chat body - AQUÍ VA EL TYPEBOT */}
          {/* 
            OPCIÓN A - iframe:
            <iframe src={typebotUrl} className="w-full flex-1 min-h-[600px] border-0" />

            OPCIÓN B - Typebot SDK (recomendado):
            import { Standard } from "@typebot.io/react"
            <Standard typebot="tu-typebot-id" style={{ width: "100%", height: "600px" }} />
          */}
          <div className="flex-1 bg-white border-x border-gray-200 min-h-[600px] flex flex-col">
            {/* Mensaje de ejemplo - reemplazar con Typebot */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="flex gap-3 mb-4 max-w-[80%]">
                <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">S</span>
                </div>
                <div className="bg-gray-50 rounded-[4px_16px_16px_16px] px-4 py-3 text-[15px] text-gray-800 leading-relaxed">
                  ¡Hola{"-Empresa-"}! Veo que completaste tu diagnóstico para <strong>{"tu negocio"}</strong>. Vamos a construir un brief profesional juntos. Cuéntame, ¿qué necesitas?
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="border-t border-gray-200 px-6 py-4 flex gap-3 items-center">
              <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 flex-shrink-0">
                📎
              </button>
              <input
                type="text"
                placeholder="Escribe tu respuesta..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:border-purple-500 focus:outline-none"
              />
              <button className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 flex-shrink-0">
                →
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-b-2xl px-6 py-3 text-center">
            <p className="text-xs text-gray-400">
              Powered by Sarasvati · Tu información es confidencial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
