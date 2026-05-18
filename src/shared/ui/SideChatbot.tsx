import ChatBot from "@/modules/chatbot/ChatBot";
import { useRouter } from "next/navigation";

type props = {
    id_mipyme:string,
    data: {
      Empresa: string,
      Plazo: string[],
      "Apoyo creativo": string
    }
}

export default function SideChatbot(item:props){
    console.log("data")
    console.log(item.data)

    const router = useRouter();

    function changePage(){
      const dataJSON = encodeURIComponent(
        JSON.stringify(item.data)
      );

      router.push(`/MiPyme/matching/${item.id_mipyme}?data=${dataJSON}`);
    }

    return (
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

          <ChatBot data={item.data}/>
        
          <div className="bg-white border border-gray-200 rounded-b-2xl px-6 py-3 text-center">
            <p className="text-xs text-gray-400 pb-5">
              Powered by Sarasvati · Tu información es confidencial
            </p>
            <button onClick={changePage} className="bg-primary p-3 rounded-md">
                Finalizar Brief
            </button>
          </div>
        </div>
    )
}
