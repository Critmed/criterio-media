import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0D0D0D]">

      {/* HERO */}
      <section className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="mb-[38px]">
          <Image
            src="/brand/ojo.png"
            alt="Criterio Media - Ojo Andino"
            width={380}
            height={380}
            priority
            unoptimized
          />
        </div>
        <div className="text-center">
          <h1
            className="font-[family-name:var(--font-cinzel)] font-black tracking-[0.4em] leading-[0.85]"
            style={{ color: '#F5E6C8', fontSize: '54px' }}
          >
            CRITERIO
          </h1>
          <h2
            className="font-[family-name:var(--font-cinzel)] font-normal tracking-[0.7em] mt-[12px]"
            style={{ color: '#EAAECB', fontSize: '24px' }}
          >
            MEDIA
          </h2>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="w-full max-w-3xl px-8 py-32 text-center">
        <h3 className="mb-8 font-[family-name:var(--font-manrope)] text-sm font-light tracking-[0.5em] text-rose-300">
          EL MANIFIESTO
        </h3>
        <p className="font-[family-name:var(--font-manrope)] text-2xl md:text-4xl font-extralight leading-relaxed text-amber-50">
          No creamos contenido.
          <br />
          <span className="font-bold text-rose-300">Forjamos criterio.</span>
          <br /><br />
          Donde otros ven ruido, nosotros trazamos
          <br />
          líneas de significado con precisión andina.
        </p>
      </section>

    </main>
  )
}