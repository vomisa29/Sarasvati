// @ts-nocheck
"use client";

import Image from "next/image";
import { usePostCreativo } from "../hooks/usePostCreativo";
import { Creativo } from "../services/BackEnd";
import ResultadoCreativoPage from "@/shared/ui/resultadoCreativoPage";

type props = {
    data:Creativo
}

export default function ResultadoCreativoPageHandler({data}:props){

  const { Id, isLoading, error } = usePostCreativo(data);

  if (isLoading) {
    return <div className="flex justify-center bg-slate-300 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] min-h-screen relative text-center p-8">
        
        <div className="relative h-full w-200">
          <p className="text-gray-800 pb-10">Guardando Información...</p>
          <Image
            className="mx-auto"
            src="/loading.gif"
            alt="App's logo"
            width={100}
            height={100}
           />
        </div>
      </div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

    return (
        <div>
            <ResultadoCreativoPage creativoID={Id} answers={data}/>
        </div>
    )
}