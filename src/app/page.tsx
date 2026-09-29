import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0D0D0D]">
      {/* Logo en tercio superior visual */}
      <div className="mb-8">
        <Image
          src="/brand/criterio-logo-maestro-svg-removebg-preview.png"
          alt="Criterio Media - Ojo Andino"
          width={380}
          height={380}
          priority
          unoptimized
        />
      </div>

      {/* Texto compensando peso visual del rombo */}
      <div className="text-center">
        <h1 className="text-[52px] md:text-[72px] font-black text-[#F5E6C8] tracking-[0.35em] leading-[0.9]">
          CRITERIO
        </h1>
        <h2 className="text-[22px] md:text-[28px] font-extralight text-[#EAAECB] tracking-[0.6em] mt-3">
          MEDIA
        </h2>
      </div>
    </main>
  )
}