import Link from 'next/link'; // Imports Link from Next.js
import Image from 'next/image'; // Imports Image from Next.js

export default function Header(){
  return (
    <div className="relative bg-white border-2 border-b-gray-200 h-24 flex justify-start">
       <Link href="/" className="relative h-20 w-55 ml-20 mt-2 mb-2">
         <Image
           src="/logoHeader.png"
           alt="App's logo"
           fill
         />
       </Link>

       <Link href="/" className='self-center ml-10'>
         <p className="text-center text-(--textSec) font-[poppins]">
           Inicio
         </p>
       </Link>

       <Link href="/creativo/diagnostico" className='self-center ml-10'>
         <p className="text-center text-(--textSec) font-[poppins]">
           Para Creativos
         </p>
       </Link>

       <Link href="/MiPyme/diagnostico" className='self-center ml-10'>
         <p className="text-center text-(--textSec) font-[poppins]">
           Para MiPymes
         </p>
       </Link>

    </div>
  )
}