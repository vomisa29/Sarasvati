import BriefPageHandler from "@/shared/pages/briefPageHandler";

export default async function BriefPage({

    params,
  }: {
    params: { mipymeID: string };
  }) {
  const { mipymeID } = await params;

  return (
    <BriefPageHandler id_mipyme={mipymeID}/>
  )
}

