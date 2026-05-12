"use client";

import MatchingPageHandler from "@/shared/pages/matchinPageHandler";
import { useParams, useSearchParams } from "next/navigation";

export default  function MatchingMiPymePage(){

  const params = useParams();

  const searchParams = useSearchParams();

  const data = searchParams.get("data");

  const dataMipyme = data
    ? JSON.parse(decodeURIComponent(data))
    : null;

  return (
    <MatchingPageHandler id_mipyme={params.mipymeID} data={dataMipyme}/>
  )
}