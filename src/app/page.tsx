import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1E1E1E]">
      <div className="text-center">  <Image 
          src="/brand/logo-real-sin-fondo.png" 
          alt="Criterio Media - Ojo Andino" 
          width={180} 
          height={180}
          priority
          className="mx-auto mb-8"
        />
        <h1 className="text-6xl font-bold text-[#D47C5A]">
          Criterio Media
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Próximamente
        </p>
      </div>
    </main>
  )
}
