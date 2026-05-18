"use client";

import { Suspense } from "react";
import ResultadoCreativoPageHandler from "@/shared/pages/resultadoCreativoPageHandler";
import { useSearchParams } from "next/navigation";

export default function ResultadoCreativoPage(){


  const searchParams = useSearchParams();

  const data = searchParams.get("data");

  const answers = data
    ? JSON.parse(data): null;

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <ResultadoCreativoPageHandler data={answers}/>
        </Suspense>
    )
}
