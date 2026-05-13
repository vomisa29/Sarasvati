// @ts-nocheck
import CardMatchDetail from "../ui/CardMatchDetail";
import { cardInfo } from "../services/BackEnd";
import Link from "next/link";

import HeaderResultado from "../ui/HeaderResultado";

type MatchingProps = {
  data: cardInfo[];
  Id: string;
  infoMipyme:object
};

export default function MatchingPage({ data, Id , infoMipyme}: MatchingProps){
    console.log("infoMipyme")
    console.log(infoMipyme);

    const classArr:string[] = [];

    let i = 0;
    while (i<3){
      if (i%2 == 1){
        classArr[i] = "relative bg-white rounded-2xl p-7 flex flex-col items-center text-center transition-shadow hover:shadow-lg row-span-3 max-w-min border-2 border-purple-600 shadow-md";
      }else{
        classArr[i] = "relative bg-white rounded-2xl p-7 flex flex-col items-center text-center transition-shadow hover:shadow-lg row-start-2 row-end-4 max-w-min border border-gray-300";
      }
      i++;
    }

    function compare(a,b){
      if(a[1] < b[1]){
        return -1;
      }
      if(a[1] > b[1]){
        return 1;
      }
      return 0;
    }
    data["Respuesta Modelo"].sort(compare)

    const lista_ordenada = [
      data["Respuesta Modelo"][1],
      data["Respuesta Modelo"][0],
      data["Respuesta Modelo"][2],
    ];



    return (
    <div className="relative bg-indigo-50 min-h-screen">

      <div className="pt-6 pb-6 mb-8 ml-30 mr-30">
        <HeaderResultado objetivo={infoMipyme.Objetivo[0]} empresa={infoMipyme.Empresa}/>
        

        <div className="flex grid grid-flow-col grid-rows-1 justify-center gap-15 pb-4">
          {lista_ordenada.map((item,index) => (
              <div key={index} className={classArr[index]}>
                  <CardMatchDetail index={index}  alias={item[0].alias} areas={item[0].areas_principales} costo={item[1]} id_mipyme={Id} presupuesto={item[0].presupuesto}/>
              </div>
            ))}
        </div>
      
        <div className="flex justify-center">
            <Link href="">
                    <button
                className={`px-10 py-4 text-white font-poppins fonts text-lg rounded-lg shadow-lg
                bg-(--primary)
                hover:scale-105 transition content-center`}
            >
              Terminar
        </button>
            </Link>
        </div>
      </div>

    </div>
  );
};

