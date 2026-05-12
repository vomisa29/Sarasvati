export default function MatchResults() {
  
  // ─── DATOS DE EJEMPLO (reemplazar con datos reales del algoritmo) ───
  const defaultMatches = [
    {
      id: "C01",
      name: "Valentina Restrepo",
      role: "Content Creator & Fotógrafa",
      initials: "VR",
      matchPercent: 94,
      skills: ["Fotografía gastronómica", "Reels", "Stories"],
      price: "$800K - $1.2M",
      rating: 4.8,
      projects: 23,
      available: true,
      isBest: true,
      matchReasons: [
        "Experiencia directa en tu sector",
        "Estilo visual afín a lo que buscas",
        "Dentro de tu rango de presupuesto",
        "Disponible para empezar ya"
      ]
    },
    {
      id: "C02",
      name: "Santiago Méndez",
      role: "Diseñador Gráfico & Social Media",
      initials: "SM",
      matchPercent: 87,
      skills: ["Diseño de posts", "Branding", "Motion graphics"],
      price: "$600K - $900K",
      rating: 4.6,
      projects: 18,
      available: true,
      isBest: false,
      matchReasons: [
        "Perfil complementario a tu necesidad",
        "Experiencia con MiPymes colombianas",
        "Presupuesto competitivo"
      ]
    },
    {
      id: "C03",
      name: "Camila Torres",
      role: "Estratega de Contenido",
      initials: "CT",
      matchPercent: 81,
      skills: ["Estrategia digital", "Copywriting", "Calendarios"],
      price: "$1M - $1.5M",
      rating: 4.9,
      projects: 31,
      available: false,
      isBest: false,
      matchReasons: [
        "La mejor valorada de la plataforma",
        "Experiencia en estrategia para tu sector",
        "Disponible en 2 semanas"
      ]
    }
  ];

  const profiles = defaultMatches;
  const brief = { necesidad: "Contenido para redes sociales", sector: "Gastronomía → Restaurante" };

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins']">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <p className="text-sm font-semibold text-purple-600 tracking-wide uppercase mb-2">
            Resultados para tu proyecto
          </p>
          <h1 className="font-['Philosopher'] text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {brief.necesidad} — {"Tu empresa"}
          </h1>
          <p className="text-gray-500 text-base">
            {profiles.length} perfiles creativos con alta compatibilidad con tu brief
          </p>
        </div>

        {/* 3 Cards horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {profiles.map((p, i) => (
            <div
              key={p.id}
              className={`relative bg-white rounded-2xl p-7 flex flex-col items-center text-center transition-shadow hover:shadow-lg ${
                p.isBest 
                  ? "border-2 border-purple-600 shadow-md" 
                  : "border border-gray-200"
              }`}
            >
              {/* Badge mejor match */}
              {p.isBest && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-[11px] font-bold px-4 py-1 rounded-b-lg tracking-wide">
                  MEJOR MATCH
                </div>
              )}

              {/* Match circle */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                p.isBest ? "mt-3" : ""
              } ${
                p.matchPercent >= 90 
                  ? "border-[3px] border-purple-600" 
                  : p.matchPercent >= 85 
                    ? "border-[3px] border-purple-400" 
                    : "border-[3px] border-gray-300"
              }`}>
                <span className={`text-2xl font-bold ${
                  p.matchPercent >= 90 ? "text-purple-600" : p.matchPercent >= 85 ? "text-purple-400" : "text-gray-500"
                }`}>
                  {p.matchPercent}%
                </span>
              </div>

              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mb-4 ${
                i === 0 ? "bg-purple-100 text-purple-600" 
                : i === 1 ? "bg-amber-50 text-amber-600" 
                : "bg-purple-50 text-purple-500"
              }`}>
                {p.initials}
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{p.role}</p>

              {/* Disponibilidad */}
              {p.available ? (
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-md mb-4">
                  Disponible
                </span>
              ) : (
                <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-md mb-4">
                  En 2 semanas
                </span>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {p.skills.map(s => (
                  <span key={s} className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-700">
                    {s}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span>⭐ {p.rating}</span>
                <span>{p.projects} proy.</span>
              </div>

              {/* Precio */}
              <p className="text-base font-bold text-gray-900 mb-5">{p.price}</p>

              {/* CTA */}
              <button
                // onClick={() => onViewProfile?.(p.id)}
                className={`w-full py-3 px-5 rounded-xl text-sm font-semibold transition-colors ${
                  p.isBest
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50"
                }`}
              >
                Ver perfil
              </button>
            </div>
          ))}
        </div>

        {/* Transparencia del matching */}
        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h3 className="font-semibold text-gray-900 text-base mb-4">¿Por qué estos perfiles?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            Nuestro algoritmo analizó tu brief y cruzó tu necesidad, sector, estilo visual, presupuesto y plazo con los perfiles de nuestra base de creativos verificados. Cada porcentaje refleja qué tan bien se alinea ese creativo con lo que necesitas.
          </p>
          
          {/* Razones por perfil */}
          <div className="space-y-4">
            {profiles.map(p => (
              <div key={p.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  p.isBest ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"
                }`}>
                  {p.matchPercent}%
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{p.name}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {p.matchReasons.map((r, idx) => (
                      <span key={idx} className="text-xs text-gray-500">✓ {r}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
