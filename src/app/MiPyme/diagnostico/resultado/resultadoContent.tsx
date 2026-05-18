import { useSearchParams } from "next/navigation";
import ResultadoMipymePageHandler from "@/shared/pages/resultadoMipymePageHandler";

export default function ResultadoContentMipymePage(){

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