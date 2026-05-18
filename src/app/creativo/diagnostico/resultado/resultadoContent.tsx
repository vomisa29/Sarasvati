import { useSearchParams } from "next/navigation";
import ResultadoCreativoPageHandler from "@/shared/pages/resultadoCreativoPageHandler";

export default function ResultadoCreativoContentPage(){


  const searchParams = useSearchParams();

  const data = searchParams.get("data");

  const answers = data
    ? JSON.parse(data): null;

    return (
        <ResultadoCreativoPageHandler data={answers}/>
    )
}