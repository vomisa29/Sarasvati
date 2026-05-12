"use client";

import BriefPageHandler from "@/shared/pages/briefPageHandler";
import { useParams, useSearchParams } from "next/navigation";

export default function BriefPage(){

  const params = useParams();

  const searchParams = useSearchParams();

  const data = searchParams.get("data");

  const dataMipyme = data
    ? JSON.parse(decodeURIComponent(data))
    : null;

  return (
    <BriefPageHandler id_mipyme={params.mipymeID} data={dataMipyme}/>
  )
}

