// @ts-nocheck
import CardMatchDetail from "../ui/CardMatchDetail";
import { cardInfo } from "../services/BackEnd";
import Link from "next/link";

type MatchingProps = {
  data: cardInfo[];
  tipo: string;
  Id: string;
};

export default function MatchingPage({ data, tipo, Id }: MatchingProps){
    const classArr:string[] = [];

    let i = 0;
    while (i<3){
      if (i%2 == 1){
        classArr[i] = "row-span-3";
      }else{
        classArr[i] = "row-start-2 row-end-4";
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
    <div className="relative bg-white min-h-screen">

      <div className="pt-6 pb-6 mb-8">
        <h1 className="text-4xl text-center text-black font-bold font-[poppins] ml-10 mr-10">
          Hola {tipo}, estas son las recomendaciones que tenemos para ti
        </h1>
      </div>

      <div className="flex grid grid-flow-col grid-rows-1 justify-center gap-15 pb-4">
        {lista_ordenada.map((item,index) => (
            <div key={index} className={classArr[index]}>
                <CardMatchDetail index={index}  alias={item[0].alias} areas={item[0].areas_principales} costo={item[1]} id_mipyme={Id}/>
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
  );
};

