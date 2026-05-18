type MatchingProps = {
  index:number;
  alias: string;
  areas: string[];
  costo: number;
  id_mipyme:string;
  presupuesto:string;
};

export default function CardMatchDetail(item:MatchingProps){

  function obtenerIniciales(nombre:string) {
  return nombre
    .trim()
    .split(/\s+/)
    .map(p => p.charAt(0).toUpperCase())
    .join("");
  }
  
  const iniciales = obtenerIniciales(item.alias);

  console.log(item);
  return (
    
    <div className="p-4 w-60 h-100 flex flex-col justify-center items-center">
      {/* <div className="relative flex h-70 w-70 w-full">
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

      <p className="text-sm text-(--textSec) font-semibold mb-4">Costo Modelo: {item.costo}</p> */}

      {/* Badge mejor match */}
      {(item.index%2 == 1) && (
      <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-[11px] font-bold px-4 py-1 rounded-b-lg tracking-wide">
        MEJOR MATCH
      </div>
      )}

      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mb-4 bg-purple-100 text-purple-500">
        {iniciales}
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.alias}</h3>
      <p className="text-sm text-gray-500 mb-3">{"Rol Creativo"}</p>


      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 justify-center mb-4">
        {item.areas.map(s => (
          <span key={s} className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-700">
            {s}
          </span>
        ))}
      </div>

      {/* Stats
      <div className="flex gap-4 text-sm text-gray-400 mb-4">
      <span>⭐ {p.rating}</span>
      <span>{p.projects} proy.</span>
      </div> */}

       {/* Precio */}
       <p className="text-base font-bold text-gray-900 mb-5">{item.presupuesto}</p>

       {/* CTA */}
       <button
        // onClick={() => onViewProfile?.(p.id)}
        className={`w-full py-3 px-5 rounded-xl text-sm font-semibold transition-colors ${
         (item.index%2 == 1)
         ? "bg-purple-600 text-white hover:bg-purple-700"
         : "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50"
        }`}
       >
        Ver perfil
       </button>
    </div>

  );
};