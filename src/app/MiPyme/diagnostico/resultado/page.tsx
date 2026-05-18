"use client";

import ResultadoMipymePageHandler from "@/shared/pages/resultadoMipymePageHandler";
import { useSearchParams } from "next/navigation";


export default function ResultadoDiagnosticoPage(){

  const searchParams = useSearchParams();
  console.log(searchParams);

  console.log(searchParams);

  const data = searchParams.get("data");

  const answers = data
    ? JSON.parse(data): null;

  return (
    <ResultadoMipymePageHandler data={answers}/>
  )
}