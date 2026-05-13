type props = {
    empresa:string,
    sector: string,
    necesidad: string,
}


export default function SidebarBrief(item:props){

    const empresa = item.empresa;
    const sector = item.sector;
    const necesidad = item.necesidad;

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

    return(
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
                  <span className="text-gray-900 font-medium">{empresa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sector</span>
                  <span className="text-gray-900 font-medium text-right max-w-[140px]">
                    {sector}
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
    )
}