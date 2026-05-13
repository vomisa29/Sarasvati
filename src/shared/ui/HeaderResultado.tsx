type props ={
  objetivo:string;
  empresa:string
}

export default function HeaderResultado(item: props){
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <p className="text-sm font-semibold text-purple-600 tracking-wide uppercase mb-2">
            Resultados para tu proyecto
          </p>
          <h1 className="font-['Philosopher'] text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {item.objetivo} — {item.empresa}
          </h1>
          <p className="text-gray-500 text-base">
            3 perfiles creativos con alta compatibilidad con tu brief
          </p>
        </div>
    )
}