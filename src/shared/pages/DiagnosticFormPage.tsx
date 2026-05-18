// @ts-nocheck
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { DiagnosticSchema } from "./schemas/diagnostic.schema";
import { AnswersWithRulesSchema } from "./schemas/diagnostic.schema";
import { SetDiagnostic } from "./schemas/diagnostic.schema";

// import { postMipyme } from "../hooks/usePostMipyme";
// import { postCreativo } from "../hooks/usePostCreativo";

interface DiagnosticProps {
    steps: {
        title:string;
        sub:string;
        qs:{
            l:string,
            o?:string[],
            type?: boolean,
            top3?: boolean,
            multi?:boolean,
        }[];
    }[];
    tipo:string;
}


export default function DiagnosticFormPage({ steps, tipo }: DiagnosticProps) {
  
  DiagnosticSchema.parse(steps);
  SetDiagnostic(steps);

  const router = useRouter();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const cur = steps[step];

  const handleText = (qIdx: number, value: string) => {
    const key = `${step}-${qIdx}`;
    setAnswers(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggle = (qIdx, opt, multi, top3) => {
    const key = `${step}-${qIdx}`;// LLave de array respuestas

    setAnswers(prev => {
      const cur = prev[key] || [];

      if (multi || top3) {
        let updated;

        if (cur.includes(opt)) {
          updated = cur.filter(x => x !== opt);
        } else {
          updated = [...cur, opt];
        }

        // 👇 regla top3
        if (top3 && updated.length > 3) {
          updated = updated.slice(0, 3);
        }

        return { ...prev, [key]: updated };
      }

      return { ...prev, [key]: [opt] };
    });
  };

  const isSelected = (qIdx, opt) => (answers[`${step}-${qIdx}`] || []).includes(opt);

  const clickAnterior = () => {
    if (step === 0){
      if (tipo === "mipyme"){
        router.push("/MiPyme/diagnostico");
      }else{
        router.push("/creativo/diagnostico");
      }
      
    }else{
        setStep(step - 1);
        window.scrollTo(0, 0);
    }
  }

  async function clickSiguiente() {
    try {
    AnswersWithRulesSchema.parse(answers);

    if (step < steps.length - 1){
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      
      if (tipo === "mipyme"){
        //modificar objeto answers al formato de la base de datos
        const data = arreglar_mipyme(answers);

        const dataJSON = encodeURIComponent(
          JSON.stringify(data)
        );

        router.push(`/MiPyme/diagnostico/resultado?data=${dataJSON}`)
      }else{

        const data = arreglar_creativo(answers);

        const dataJSON = encodeURIComponent(
          JSON.stringify(data)
        );

        router.push(`/creativo/diagnostico/resultado?data=${dataJSON}`)
      }

    }

    } catch (error) {
      alert(error.issues[0]["message"]);
    }
  };

  function arreglar_mipyme(answers:object){
    let presupuesto = answers["1-3"][0];
    if (presupuesto == "No tengo idea de cuánto debería costar"){
      presupuesto = "no se";
    }

    return {
      "Apoyo creativo":answers["1-0"],
      "Años operando":answers["0-3"][0],
      "Claridad actual":answers["3-0"][0],
      "Dificultades previas":answers["2-1"],
      "Empleados":answers["0-1"][0],
      "Empresa":answers["0-0"],
      "Experiencia previa":answers["2-0"][0],
      "Materiales listos":answers["3-2"],
      "Objetivo":answers["1-1"],
      "Plazo":answers["1-2"],
      "Presencia digital":answers["0-4"][0],
      "Presupuesto":presupuesto,
      "Sector":answers["0-2"][0],
      "Top 3 al elegir":answers["3-1"]
    }
  }

  function arreglar_creativo(answers:object){
    return {
      "% >2 ajustes":answers["1-2"][0],
      "Alias":answers["0-0"],
      "Area principal":answers["0-1"],
      "Años exp":answers["0-2"][0],
      "Claridad briefs":answers["1-0"][0],
      "Criterios para aceptar":answers["2-0"],
      "Experiencia con Mipymes":answers["0-3"][0],
      "Fricciones frecuentes":answers["1-1"],
      "Herramientas":answers["2-4"],
      "Modalidad":answers["2-3"][0],
      "Portafolio":answers["3-0"],
      "Proyectos simultáneos":answers["2-2"][0],
      "Que espera de Sarasvati":answers["3-1"],
      "Rango precio":answers["2-1"][0],
      "Sectores con experiencia":answers["0-4"]
    }
  }
  return (
    <div className="bg-white min-h-100">
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "56px 32px" }}>

        <div style={{ display: "flex", gap: 10, marginBottom: 48 }}>
          {steps.map((_, i) => <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: i <= step ? "#7A1BEE" : "#000000", transition: "all 0.3s" }} />)}
        </div>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-block", background: "#7A1BEE", color: "#FFFFFF", fontSize: 13, fontWeight: 700, padding: "5px 16px", borderRadius: 6, marginBottom: 16 }}>PASO {step + 1} DE {steps.length}</div>
          <h2 style={{  fontSize: 36, fontWeight: 700, color: "#000000", marginBottom: 10 }}>{cur.title}</h2>
          <p style={{ fontSize: 17, color: "#555555"}}>{cur.sub}</p>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {cur.qs.map((q, qi) => (

            <div key={qi} style={{ background: "#FFFFFF", borderRadius: 18, border: `1px solid #000000`, padding: 32 }}>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#000000", marginBottom: 6 }}>{q.l}</p>
              {!q.multi && !q.top3 && <div style={{ marginBottom: 14 }} />}
              
              {q.multi && <p style={{ fontSize: 13, color: "#555555", marginBottom: 14 }}>Puedes seleccionar varias</p>}
              {q.top3 && <p style={{ fontSize: 13, color: "#555555", marginBottom: 14 }}>Danos tu top 3</p>}

              {(q.type) && 
                <input
                  type="text"
                  value={(answers["0-0"] as string) || ""}
                  onChange={(e) => handleText(qi, e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 10,
                    border: "1.5px solid #000000",
                    fontSize: 15,
                    outline: "none",
                    color: "#000000"
                  }}
                />
              }



              { (!q.type) && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {q.o.map(opt => {
                    const sel = isSelected(qi, opt);
                    return <button key={opt} onClick={() => toggle(qi, opt, q.multi, q.top3)} style={{ background: sel ? "#7A1BEE" : "#FFFFFF", color: sel ? "#FFFFFF" : "#000000", border: `1.5px solid ${sel ? "#7A1BEE" : "#000000"}`, borderRadius: 10, padding: "12px 20px", fontSize: 15, cursor: "pointer", fontWeight: sel ? 600 : 400, transition: "all 0.2s" }}>{opt}</button>;
                  })}
                </div>
              )};

            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 40 }}>
          <button onClick={clickAnterior} style={{ background: "none", border: `1px solid ${"#000000"}`, borderRadius: 12, padding: "14px 28px", fontSize: 16, color: "#555555", cursor: "pointer" }}>← {step === 0 ? "Volver" : "Anterior"}</button>
          <button onClick={clickSiguiente} style={{ background: "#7A1BEE", color: "#FFFFFF", border: "none", borderRadius: 12, padding: "14px 28px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>{step < steps.length - 1 ? "Siguiente →" : "Ver resultados →"}</button>
        </div>
      </div>
    </div>
  );
}


