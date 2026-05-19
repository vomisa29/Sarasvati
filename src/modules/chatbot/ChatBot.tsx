import { Standard } from "@typebot.io/react";

type props = {
  data: {
    Empresa: string,
    Plazo: string[],
    "Apoyo creativo": string,
    "Años operando":string,
    "Claridad actual":string,
    "Dificultades previas":string[],
    "Empleados":string,
    "Experiencia previa":string,
    "Materiales listos":string[],
    "Objetivo":string[],
    "Presencia digital":string,
    "Presupuesto":string,
    "Sector":string,
    "Top 3 al elegir":string[]
  }
}


export default function ChatBot(item:props){
  const data = item.data;
  const send_data= {
        nombreMipyme: data.Empresa,
        plazo: data.Plazo[0],
        apoyo: data["Apoyo creativo"],
        tiempoOperacion: data["Años operando"],
        claridad: data["Claridad actual"],
        dificultadesPasadas: data["Dificultades previas"],
        numEmpleados: data["Empleados"],
        experiencia: data["Experiencia previa"],
        materiales: data["Materiales listos"],
        objetivo: data["Objetivo"],
        presenciaDigital: data["Presencia digital"],
        presupuesto: data["Presupuesto"],
        sector: data["Sector"],
        prioridadesElegir: data["Top 3 al elegir"]
      }
  console.log("send_data Chatbot");
  console.log(send_data);
  return (
    <Standard
      typebot="chatbot-sarasvati-f5qagdx"
      apiHost="https://typebot.io"
      prefilledVariables={send_data}
      style={{ width: "100%", height: "600px" }}
    />
  );
};
