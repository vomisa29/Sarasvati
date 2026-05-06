import Image from "next/image";

type MatchingProps = {
  index:number;
  alias: string;
  areas: string[];
  costo: number;
  id_mipyme:string;
};

export default function CardMatchDetail(item:MatchingProps){
  return (
    <div className={`bg-(--primaryMid)${item.index%2 == 0 ? `/60` : `/80`} rounded-xl shadow-md border-2 border-purple-400 p-4 w-[500px] h-full flex flex-col justify-between`}>
      <div className="relative flex h-100 w-full">
        <Image
          src={"/mainpage3.jpg"}
          alt={item.alias}
          fill
          className="rounded-md mb-3 object-cover"
        />
      </div>


      <h3 className="text-gray-800 font-semibold pt-5 pd-5 pb-3">Creativo {item.alias}</h3>

      <div>
        <h4 className="text-sm text-(--textSec) font-semibold mb-4">Areas Principales</h4>

        
        {item.areas && item.areas.map((area,index) => (
          <p key={index} className="text-sm text-(--textSec) font-semibold mb-4">
              * {area}
          </p>
        ))}
      </div>

      <p className="text-sm text-(--textSec) font-semibold mb-4">Costo Modelo: {item.costo}</p>

    </div>
  );
};