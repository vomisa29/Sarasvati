export default function InfoDescription(){
    return (

        <div className="relative flex flex-col bg-white text-center justify-center pl-72 pr-72 pt-20 pb-20 border-1 border-(--textSec)/80">
          <h2 style={{fontSize: 34, fontWeight: 700, color: "#000000", marginBottom: 8 }}>¿Cómo funciona?</h2>
          <p style={{ color: "#555555", fontSize: 15, marginBottom: 52 }}>Cuatro pasos para conectar tu necesidad con el talento ideal</p>
          <div style={{ display: "flex", gap: 24, maxWidth: 920, margin: "0 auto", justifyContent: "center" }}>
            {[
              { step: 1, title: "Diagnóstico", desc: "Respondé un cuestionario rápido sobre tu empresa y necesidad", icon: "🔍", bg: "#F0E4FD" },
              { step: 2, title: "Brief asistido", desc: "Nuestro asistente te guía para armar un encargo claro y completo", icon: "💬", bg: "#FDF8E1" },
              { step: 3, title: "Matching", desc: "Te mostramos los perfiles creativos más pertinentes para tu proyecto", icon: "🎯", bg: "#F0E4FD" },
              { step: 4, title: "Colaboración", desc: "Inicia el proyecto con claridad, seguimiento y evaluación", icon: "🤝", bg: "#FDF8E1" },
            ].map(s => (
              <div key={s.step} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: 20, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28 }}>{s.icon}</div>
                <div style={{ display: "inline-block", background: "#7A1BEE", color: "FFFFFF", fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 4, marginBottom: 10 }}>PASO {s.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#000000", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#555555", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
    )
}