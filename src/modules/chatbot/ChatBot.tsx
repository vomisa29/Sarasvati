import { Standard } from "@typebot.io/react";

type props = {
  data: {
    Empresa: string,
    Plazo: string[],
    "Apoyo creativo": string
  }
}


export default function ChatBot(item:props){
  const data = item.data;
  
  return (
    <Standard
      typebot="chatbot-sarasvati-f5qagdx"
      apiHost="https://typebot.io"
      prefilledVariables={{
        nombreMipyme: data.Empresa,
        plazo: data.Plazo[0],
        apoyo: data["Apoyo creativo"]
      }}
      style={{ width: "100%", height: "600px" }}
    />
  );
};
