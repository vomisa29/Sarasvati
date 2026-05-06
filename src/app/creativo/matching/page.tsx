"use client";

import MatchingPage from "@/shared/pages/matchingPage";
import { useFetchResultadoDiagnostico } from "@/shared/hooks/useFetchResultadoDiagnostico";

export default function MatchingCreativoPage(id_mipyme:string) {
  const { diagnosticos, isLoading, error } = useFetchResultadoDiagnostico(id_mipyme);

  if (isLoading) {
    return <div className="bg-gray-500 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] min-h-screen relative text-center p-8">Cargando servicios...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

    return (
        <div>
            <MatchingPage data={diagnosticos} tipo="Creativo"/>
        </div>
    )
}