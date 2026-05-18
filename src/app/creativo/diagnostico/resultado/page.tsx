"use client";

import ResultadoCreativoPageHandler from "@/shared/pages/resultadoCreativoPageHandler";
import { useSearchParams } from "next/navigation";

export default function ResultadoCreativoPage(){


  const searchParams = useSearchParams();

  const data = searchParams.get("data");

  const answers = data
    ? JSON.parse(data): null;

    return (
        <ResultadoCreativoPageHandler data={answers}/>
    )
}