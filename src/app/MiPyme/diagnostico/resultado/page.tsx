"use client";

export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ResultadoContentMipymePage from "./resultadoContent";


export default function ResultadoDiagnosticoPage(){
    return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ResultadoContentMipymePage />
    </Suspense>
  );
}