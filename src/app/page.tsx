import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0D0D0D]">
      <Image
        src="/brand/ojo-andino.png" 
        alt="Criterio Media - Ojo Andino"
        width={400}
        height={400}
        priority
      />
    </main>
  )
}