"use client";

import ChatBot from "@/modules/chatbot/ChatBot"
import Link from "next/link";

type props = {
    id_mipyme:string
}

export default function BriefPageHandler(item:props){

    return (
        <div className="justify-items-center bg-white">

            <div className="bg-accent pt-6 pb-6 w-full">
                <h1 className="text-4xl text-center text-black font-bold font-[poppins] ml-10 mr-10">
                    Sarasvati Brief
                </h1>
            </div>

            <ChatBot/>

            <div className="justify-items-center pb-4">
              <Link href={`/MiPyme/matching/${item.id_mipyme}`}>
                <button className="bg-primary p-3">
                    Finalizar Brief
                </button>
              </Link>
            </div>
        </div>
    )
}