"use client";

export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ResultadoContentCreativoPage from "./resultadoContent";


export default function ResultadoDiagnosticoPage(){
    return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ResultadoContentCreativoPage />
    </Suspense>
  );
}