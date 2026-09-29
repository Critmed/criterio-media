import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0D0D0D]">
      {/* Logo: 380px = medida base */}
      <div className="mb-[38px]"> {/* 380/10 = 38px aire ritual */}
        <Image
          src="/brand/criterio-logo-maestro-svg-removebg-preview.png"
          alt="Criterio Media - Ojo Andino"
          width={380}
          height={380}
          priority
          unoptimized
        />
      </div>

      {/* Texto: colores extraídos del logo */}
      <div className="text-center">
        {/* CRITERIO = Color del borde crema del rombo */}
        <h1
          className="font-black tracking-[0.4em] leading-[0.85]"
          style={{
            color: '#F5E6C8',
            fontSize: '54px'
          }}
        >
          CRITERIO
        </h1>

        {/* MEDIA = Color del ojo rosa central */}
        <h2
          className="font-extralight tracking-[0.7em] mt-[12px]"
          style={{
            color: '#EAAECB',
            fontSize: '24px'
          }}
        >
          MEDIA
        </h2>
      </div>
    </main>
  )
}