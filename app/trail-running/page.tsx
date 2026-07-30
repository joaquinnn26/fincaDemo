import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Mountain, Route } from 'lucide-react';

const siteBasePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/fincaDemo' : '';
const withBasePath = (src: string) => (src.startsWith('/images/') ? `${siteBasePath}${src}` : src);

export default function TrailRunningPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#1b1f1a]">
      <section className="relative isolate min-h-screen overflow-hidden bg-[#1b1f1a] text-white">
        <Image src={withBasePath('/images/optimized/trailrunning.jpg')} alt="Trail Running Grand Trail Cerro Blanco" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,20,.78),rgba(16,24,20,.42)_46%,rgba(16,24,20,.94)),linear-gradient(90deg,rgba(16,24,20,.86),rgba(16,24,20,.28)_62%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/" className="mb-10 inline-flex w-fit items-center gap-2 rounded-lg border border-white/18 bg-white/10 px-4 py-2.5 text-sm font-black backdrop-blur-md transition hover:bg-white/18">
            <ArrowLeft size={17} /> Volver a la finca
          </Link>

          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-lg bg-[#f0c36a] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#1b1f1a]">
              <Mountain size={16} /> Pagina en preparacion
            </p>
            <h1 className="mt-5 text-[clamp(2.7rem,10vw,5.8rem)] font-black leading-[0.96] tracking-tight">
              Trail Running
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/78 sm:text-2xl">
              En Finca Carranza Sosa tambien se realizan eventos deportivos como Grand Trail Cerro Blanco. Este espacio va a reunir fechas, recorridos, inscripcion, reglamento y novedades.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <InfoCard icon={<CalendarDays size={21} />} title="Fechas" text="A definir." />
              <InfoCard icon={<Route size={21} />} title="Recorridos" text="Informacion proximamente." />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-lg border border-white/14 bg-white/10 p-5 backdrop-blur-md">
      <div className="text-[#f0c36a]">{icon}</div>
      <h2 className="mt-3 text-xl font-black tracking-tight">{title}</h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-white/66">{text}</p>
    </div>
  );
}
