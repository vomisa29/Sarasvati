import Link from "next/link";
import Image from "next/image";

export default function Hero(){
    return (
        <div className="flex justify-evenly pl-50 pr-50">
          {/* Left Side */}
          <div className="flex flex-col h-full w-full pt-30 pb-40 pl-40 pr-40">
            
            <div className="bg-(--primary) p-2 rounded-xl mb-10 h-full w-120 text-center">
              <span className="text-lg font-[poppins] font-semibold text-white uppercase">
                Ecosistema de colaboración creativa
              </span>
            </div>

            <h1 className="text-[56px] font-[philosopher] font-semibold text-black leading-none w-full mb-10">
              Logramos que la colaboración creativa funcione <span className="text-(--primary)">desde el primer día.</span>
            </h1>

            <p className="text-[20px] font-[poppins] text-(--textSec) mb-15">
              Somos un ecosistema digital que acompaña a empresas y creativos desde el primer momento:
               diagnosticamos la necesidad, clarificamos el encargo y generamos conexiones bajo criterios reales de compatibilidad.
            </p>

            <div className="flex gap-12 justify-evenly">
              <Link href="/MiPyme/diagnostico">
                <button className="bg-(--primary) text-[15] font-[poppins] font-semibold text-white rounded-xl pt-4 pb-4 pl-8 pr-8 cursor-pointer">
                    Soy MiPyme →
                </button>
              </Link>
              
              <Link href="/creativo/diagnostico">
                <button className="text-[15] font-[poppins] font-semibold text-(--primary) border-1 border-(--primary) rounded-xl pt-4 pb-4 pl-8 pr-8 cursor-pointer">
                    Soy Creativo →
                </button>
              </Link>
            </div>

          </div>

          {/*Right Side*/}
          <div className="flex justify-center">

            <div className="relative h-150 w-150 mr-40 mt-20">
                <Image
                    src="/mainpage.gif"
                    alt="App's logo"
                    fill
                />
            </div>
          </div>
        </div>
    )
}