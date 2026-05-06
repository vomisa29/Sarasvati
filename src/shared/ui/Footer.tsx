import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return (   
        <footer className="bg-black pl-40 pr-40 pt-15 pb-10">
        
        <div className="flex justify-center max-w-[1200px] max-h-[400px]">
          <div className="mr-20">
            <div className="flex items-center gap-5 mb-5">
                <Image
                src="/logo.png"
                alt="Logo"
                height={64}
                width={32}
                />
                <span className="font-[philosopher] font-semibold text-[22px] font-[700px] text-(--accent)">
                SARASVATI
                </span>
            </div>
            <p className="text-[14px] text-zinc-400 max-w-[280px]">
                Ecosistema digital que conecta MiPymes con talento creativo.
            </p>
          </div>

          <div className="flex ml-20 gap-10 text-[16px]">
            <div>
                <p className="font-[poppins] font-semibold mb-5 text-(--accent)">
                  Plataforma
                </p>
                
                {[{l:"Cómo funciona",k:"/"},{l:"Para MiPymes",k:"/MiPyme/diagnostico"},{l:"Para Creativos",k:"/creativo/diagnostico"}].map(i =>
                <div key={i.l}>
                    <Link href={i.k}>
                    <p className="font-[poppins] text-zinc-400 mb-3 cursor-pointer">
                        {i.l}
                    </p>
                    </Link>
                </div>
                )}
            </div>

            <div>
                <p className="font-semibold mb-5 text-(--accent)">
                  Soporte
                </p>
                {["Centro de ayuda","Contacto","Términos","Privacidad"].map(l =>
                <p key={l} className="font-[poppins] text-zinc-400 mb-3 cursor-pointer">
                    {l}
                </p>
                )}
            </div>

          </div>
        </div>
        
        <div className="font-[poppins] border-1 border-transparent border-t-(--textSec) text-center text-[13px] text-(--textSec) pt-10 pb-10">
            © 2026 Sarasvati — Todos los derechos reservados
        </div>
        </footer>        
    )
}