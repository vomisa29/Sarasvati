"use client";

import ChatBot from "@/modules/chatbot/ChatBot"
import Link from "next/link";
import { useRouter } from "next/navigation";

type props = {
    id_mipyme:string
    data: {
      Empresa: string,
      Plazo: string[],
      "Apoyo creativo": string
    }
}

export default function BriefPageHandler(item:props){

    const router = useRouter();

    const Id = item.id_mipyme;
    const data = item.data;

    function changePage(){
        const dataJSON = encodeURIComponent(
          JSON.stringify(data)
        );
        console.log("dsjkdaskjdahkj");
        router.push(`/MiPyme/matching/${Id}?data=${dataJSON}`);
    }

    return (
        <div className="justify-items-center bg-white">

            <div className="bg-accent pt-6 pb-6 w-full">
                <h1 className="text-4xl text-center text-black font-bold font-[poppins] ml-10 mr-10">
                    Sarasvati Brief
                </h1>
            </div>

            <ChatBot data={item.data}/>

            <div className="justify-items-center pb-4">
              <button onClick={changePage} className="bg-primary p-3">
                    Finalizar Brief
              </button>
            </div>
        </div>
    )
}