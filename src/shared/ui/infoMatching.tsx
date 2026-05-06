export function InfoMatching(){
    return (
    <div className="flex-1 bg-gray-200 rounded-[30px] shadow-lg p-10 m-5 h-9/10 justify-center items-center">
      
      <h1 className="text-2xl font-semibold text-black mb-6">
        Información Sobre “MiPyme/Creativo”
      </h1>

      <div className="grid grid-cols-2 gap-10 h-full">
        
        <div className="h-full">
          <h3 className="font-semibold mb-3 text-black">Resumen del Brief:</h3>

          <p className="text-sm text-black mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            lobortis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            Nulla id diam faucibus, condimentum massa sit amet, euismod sapien.
            Quisque commodo dictum felis at scelerisque.
          </p>
        </div>

        <div className="border border-gray-400 flex flex-col items-center justify-center text-center h-9/10 p-6">
          <p className="mb-4 text-black">Link acceso al Brief</p>
          <p className="text-black">Thumbnail</p>
        </div>

      </div>
    </div>
    )
}