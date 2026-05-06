import Image from "next/image";

export type CardProp = {
    index:number
    img:string
    title:string
    description:string
}

export default function Card(item:CardProp){
  return (
    <div className={`bg-(--primaryMid)${item.index%2 == 0 ? `/60` : `/80`} rounded-xl shadow-md border-2 border-purple-400 p-4 w-[500px] h-full flex flex-col justify-between`}>
      <div className="relative flex h-100 w-full">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="rounded-md mb-3 object-cover"
        />
      </div>


      <h3 className="text-gray-800 font-semibold pt-5 pd-5">{item.title}</h3>

      <p className="text-sm text-(--textSec) font-semibold mb-4">
        {item.description}
      </p>

      <button
          className={`px-10 py-4 text-white font-poppins fonts text-lg rounded-lg shadow-lg
          bg-${item.index%2 == 0? `(--primary)`: `(--primary)`}
          hover:scale-105 transition`}
      >
        Ver Detalle
      </button>
    </div>
  );
};