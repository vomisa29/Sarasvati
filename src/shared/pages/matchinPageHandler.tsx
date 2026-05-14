"use client";

import MatchingPage from "@/shared/pages/matchingPage";
import { useFetchResultadoDiagnostico } from "@/shared/hooks/useFetchResultadoDiagnostico";
import Image from "next/image";

type props = {
    id_mipyme:string,
    data:object
}

export default function MatchingPageHandler(item:props){

  const { diagnosticos, isLoading, error } = useFetchResultadoDiagnostico(item.id_mipyme);

  if (isLoading) {
    return <div className="flex justify-center bg-slate-300 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] min-h-screen relative text-center p-8">
        
        <div className="relative h-full w-200">
          <p className="text-gray-800 pb-10">Calculo Matching...</p>
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
            <MatchingPage data={diagnosticos} Id={item.id_mipyme} infoMipyme={item.data}/>
        </div>
    )
}