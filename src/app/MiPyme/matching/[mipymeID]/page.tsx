import MatchingPageHandler from "@/shared/pages/matchinPageHandler";

export default async function MatchingMiPymePage({

    params,
  }: {
    params: { mipymeID: string };
  }) {
  const { mipymeID } = await params;

  return (
    <MatchingPageHandler id_mipyme={mipymeID}/>
  )
}