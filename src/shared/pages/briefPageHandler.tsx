"use client";

import SideChatbot from "../ui/SideChatbot";
import SidebarBrief from "../ui/SidebarBrief";


type props = {
    id_mipyme:string
    data: {
      Empresa: string,
      Plazo: string[],
      "Apoyo creativo": string
      Sector: string
    }
}

export default function BriefPageHandler(item:props){

    const Id = item.id_mipyme;
    const data = item.data;


    return (
     <div className="min-h-screen bg-gray-50 font-['Poppins'] flex flex-col">
        <div className="flex flex-1 max-w-6xl mx-auto w-full p-6 gap-6">
            <SidebarBrief empresa={data.Empresa} sector={data.Sector} necesidad={data["Apoyo creativo"]}/>

            <SideChatbot id_mipyme={Id} data={data}/>
        </div>
      </div>
    )
}