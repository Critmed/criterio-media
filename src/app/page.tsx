import Image from 'next/image'
import '../styles/colors.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-criterio-negro">
      <div className="text-center">
        <Image 
          src="/brand/criterio-logo-maestro.svg" 
          alt="Criterio Media - Ojo Andino" 
          width={180} 
          height={180}
          priority
          className="mx-auto mb-8"
        />
        <h1 className="text-6xl font-bold text-criterio-terracota">
          Criterio Media
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Próximamente
        </p>
      </div>
    </main>
  )
}
