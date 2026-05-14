export default function InfoDetail(){
    return(
      <div style={{ background: "#FFFFFF", padding: "100px 8%", display: "flex", gap: 32, maxWidth: 1200, margin: "0 auto" }}>
        {[
          {title:"Para MiPymes",sub:"Tu negocio necesita crear y comunicar. Encontrar al creativo correcto no siempre es fácil, por eso te guiamos paso a paso.",items:["Diagnóstico de tu necesidad y madurez digital","Brief asistido paso a paso","Matching con creativos verificados","Menos retrabajos, más claridad"],cta:"Empezar como MiPyme →",nav:"mipyme"},
          {title:"Para Creativos",sub:"Sabemos lo que implica recibir un brief incompleto. Por eso diseñamos un proceso donde todo se resuelve antes de que el proyecto llegue a tus manos.",items:["Briefs completos y accionables","Proyectos filtrados por compatibilidad","Menos rondas de ajustes","Tu portafolio habla por ti en el matching"],cta:"Empezar como Creativo →",nav:"creativo"},
        ].map(card => (
          <div key={card.title} style={{ flex: 1, background: "#FFFFFF", borderRadius: 24, border: `1px solid #E5E5E5`, padding: 44, borderTop: `5px solid` }}>
            <h3 style={{ fontSize: 26, fontWeight: 700, color: "#000000", marginBottom: 12 }}>{card.title}</h3>
            <p style={{ fontSize: 16, color: "#000000", marginBottom: 24, lineHeight: 1.6 }}>{card.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {card.items.map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, color: "#000000" }}>
                  <div style={{ width: 24, height: 24, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>✓</div>{b}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>        
    )
}