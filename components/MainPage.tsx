'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BedDouble,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  ExternalLink,
  Facebook,
  Flame,
  Home,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  Phone,
  ShowerHead,
  Star,
  Trees,
  Users,
  Utensils,
  Waves,
  X,
} from 'lucide-react';
import { commonAreas, experiences } from '@/data/experiences';
import { faqs } from '@/data/faqs';
import { galleryItems } from '@/data/gallery';
import { siteConfig } from '@/data/site';
import { spaces } from '@/data/spaces';
import { testimonials } from '@/data/testimonials';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Hospedajes', href: '#hospedajes' },
  { label: 'Actividades', href: '#actividades' },
  { label: 'Animales', href: '#animales' },
  { label: 'Ubicacion', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

const siteBasePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/fincaDemo' : '';
const withBasePath = (src: string) => (src.startsWith('/images/') ? `${siteBasePath}${src}` : src);

const quickStats = [
  { value: '4', label: 'cabanas equipadas' },
  { value: '14', label: 'huespedes maximos' },
  { value: '6', label: 'espacios comunes' },
  { value: 'Trail', label: 'Cerro Blanco' },
];

const equipmentGroups = [
  { title: 'Confort', icon: BedDouble, items: ['Aire frio/calor', 'Salamandra', 'Bolsa de agua caliente para cama', 'Sommier doble + cama cucheta'] },
  { title: 'Cocina', icon: Utensils, items: ['Copas de vino', 'Elementos de cocina', 'Vajilla', 'Horno electrico', 'Microondas', 'Pava electrica', 'Anafe electrico'] },
  { title: 'Bano', icon: ShowerHead, items: ['Secador de pelo', 'Jabon', 'Shampoo', 'Crema enjuague', 'Toallas pequenas y grandes'] },
];

const animalItems = [
  {
    title: 'Caballos',
    text: 'Parte del paisaje rural y de las experiencias al aire libre de la finca.',
    image: '/images/caballo.png',
  },
  {
    title: 'Ovejas',
    text: 'Presencia de campo que refuerza el ambiente familiar y natural.',
    image: '/images/ovejas.png',
  },
  {
    title: 'Granja ecologica',
    text: 'Un espacio de contacto simple con la naturaleza y la vida rural.',
    image: '/images/ovejascaballo.png',
  },
];

const areaIcons: Record<string, React.ElementType> = {
  gimnasio: Dumbbell,
  quincho: Home,
  pileta: Waves,
  parque: Trees,
  granja: Leaf,
  asadores: Flame,
};

export function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCabinId, setActiveCabinId] = useState(spaces[0]?.id ?? '');
  const [activeGallery, setActiveGallery] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const activeCabin = useMemo(
    () => spaces.find((space) => space.id === activeCabinId) ?? spaces[0],
    [activeCabinId],
  );

  const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hola, quiero consultar disponibilidad en Finca Carranza Sosa.',
  )}`;
  const mapsLink = siteConfig.social.googleMaps;
  const mapEmbedUrl = `https://www.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=14&output=embed`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F4EFE7] text-[#5C4635]">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'border-b border-[#D9D6CF] bg-[#FAF9F6]/94 shadow-[0_10px_30px_rgba(92,70,53,0.06)] backdrop-blur-xl' : 'bg-transparent text-white'}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#inicio" className="flex min-w-0 items-center">
            <BrandLogo light={!scrolled && !menuOpen} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`rounded-xl px-4 py-2 text-sm font-medium transition ${scrolled || menuOpen ? 'text-[#6F6F6F] hover:bg-[#F4EFE7] hover:text-[#5C4635]' : 'text-white/78 hover:bg-white/12 hover:text-white'}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className={`hidden items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition sm:inline-flex ${scrolled || menuOpen ? 'bg-[#2F5D50] text-white hover:bg-[#24483e]' : 'bg-white text-[#2F5D50] hover:bg-[#F4EFE7]'}`}>
              Consultar <MessageCircle size={17} />
            </a>
            <button type="button" onClick={() => setMenuOpen((value) => !value)} className={`grid h-11 w-11 place-items-center rounded-xl border transition lg:hidden ${scrolled || menuOpen ? 'border-[#D9D6CF] bg-white text-[#5C4635]' : 'border-white/22 bg-white/12 text-white'}`} aria-label="Abrir menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-[#D9D6CF] bg-[#FAF9F6] px-4 py-3 lg:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-medium text-[#6F6F6F] hover:bg-[#F4EFE7] hover:text-[#5C4635]">
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <main id="inicio">
        <section className="relative isolate min-h-screen overflow-hidden bg-[#2F5D50] text-white">
          <Image src={withBasePath('/images/hero-finca.png')} alt="Entrada de Finca Carranza Sosa rodeada de arboles" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,93,80,.58),rgba(47,93,80,.22)_48%,rgba(47,93,80,.74)),linear-gradient(90deg,rgba(47,93,80,.78),rgba(47,93,80,.18)_62%)]" />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-light uppercase tracking-[0.34em] text-white/78">Turismo rural</p>
              <h1 className="mt-5 max-w-4xl text-[clamp(3rem,10vw,6.7rem)] font-bold leading-[0.92] tracking-normal">
                Descanso entre naturaleza y calma.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-white/82 sm:text-xl">
                Alojamiento rural con cabanas equipadas, espacios abiertos, granja ecologica y actividades para desconectar del ritmo cotidiano.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B86E4B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(47,93,80,0.18)] transition hover:bg-[#a55f40]">
                  Consultar disponibilidad <ArrowRight size={18} />
                </a>
                <a href="#hospedajes" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/26 bg-white/12 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/18">
                  Ver hospedajes
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9F6]">
          <div className="mx-auto grid max-w-7xl gap-0 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {quickStats.map((item) => (
              <div key={item.label} className="border-[#D9D6CF] py-5 sm:border-l sm:px-7 first:sm:border-l-0">
                <p className="text-4xl font-bold tracking-normal text-[#2F5D50]">{item.value}</p>
                <p className="mt-2 text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre" className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionKicker>Sobre la finca</SectionKicker>
              <h2 className="section-title">Un alojamiento rural pensado para descansar.</h2>
              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
                Finca Carranza Sosa combina naturaleza, tranquilidad y comodidad en una propuesta familiar. La experiencia prioriza el entorno.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['Ambiente familiar', 'Naturaleza', 'Turismo rural', 'Espacios abiertos'].map((item) => (
                  <p key={item} className="flex items-center gap-2 rounded-xl border border-[#D9D6CF] bg-[#FAF9F6] px-4 py-3 text-sm font-medium text-[#5C4635]">
                    <Check size={17} className="text-[#2F5D50]" /> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-2xl sm:min-h-[520px]">
                <Image src={withBasePath('/images/asador.png')} alt="Parque con asadores y arboles" fill className="object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[240px] overflow-hidden rounded-2xl">
                  <Image src={withBasePath('/images/hogarcabaña.jpg')} alt="Interior calido de cabana con hogar" fill className="object-cover" />
                </div>
                <div className="rounded-2xl bg-[#2F5D50] p-6 text-white">
                  <p className="text-xs font-light uppercase tracking-[0.24em] text-white/62">Identidad</p>
                  <p className="mt-3 text-2xl font-bold leading-tight">Naturaleza, calidad y calma en una experiencia rural.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-[#FAF9F6] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <SectionKicker>Galeria</SectionKicker>
                <h2 className="section-title">Fotografias protagonistas.</h2>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => setActiveGallery((value) => (value - 1 + galleryItems.length) % galleryItems.length)} className="icon-button" aria-label="Imagen anterior">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => setActiveGallery((value) => (value + 1) % galleryItems.length)} className="icon-button" aria-label="Imagen siguiente">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
              <button type="button" onClick={() => setLightboxOpen(true)} className="group relative min-h-[460px] overflow-hidden rounded-2xl text-left sm:min-h-[640px]">
                <Image src={withBasePath(galleryItems[activeGallery]?.src ?? '/images/real-villa.jpg')} alt={galleryItems[activeGallery]?.title ?? 'Galeria'} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-light uppercase tracking-[0.24em] text-white/72">{galleryItems[activeGallery]?.category}</p>
                  <h3 className="mt-2 text-3xl font-bold tracking-normal text-white sm:text-5xl">{galleryItems[activeGallery]?.title}</h3>
                  <p className="mt-3 max-w-xl text-sm font-normal leading-7 text-white/76">{galleryItems[activeGallery]?.description}</p>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {galleryItems.slice(0, 4).map((item, index) => (
                  <button key={item.src} type="button" onClick={() => setActiveGallery(index)} className={`relative min-h-36 overflow-hidden rounded-2xl border text-left transition sm:min-h-40 ${activeGallery === index ? 'border-[#B86E4B]' : 'border-[#D9D6CF]'}`}>
                    <Image src={withBasePath(item.src)} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/28" />
                    <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="hospedajes" className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <SectionKicker>Hospedajes</SectionKicker>
              <h2 className="section-title">Cabanas para elegir por capacidad.</h2>
            </div>
            <p className="max-w-2xl text-base font-normal leading-8 text-[#6F6F6F]">
              Dos cabañas para 3 personas y dos para 4 personas. Todas mantienen la misma linea de comodidad y equipamiento.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[360px_1fr]">
            <div className="grid gap-3">
              {spaces.map((cabin) => (
                <button
                  key={cabin.id}
                  type="button"
                  onClick={() => setActiveCabinId(cabin.id)}
                  className={`grid grid-cols-[84px_1fr] items-center gap-4 rounded-2xl border p-3 text-left transition ${activeCabinId === cabin.id ? 'border-[#2F5D50] bg-[#FAF9F6] shadow-[0_18px_45px_rgba(92,70,53,0.08)]' : 'border-[#D9D6CF] bg-[#FAF9F6]/58 hover:bg-[#FAF9F6]'}`}
                >
                  <span className="relative h-24 overflow-hidden rounded-xl">
                    <Image src={withBasePath(cabin.image)} alt={cabin.name} fill className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-xl font-bold tracking-normal text-[#5C4635]">{cabin.name}</span>
                    <span className="mt-1 flex items-center gap-2 text-sm font-normal text-[#6F6F6F]">
                      <Users size={16} /> {cabin.capacity}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {activeCabin ? (
              <article className="overflow-hidden rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] shadow-[0_22px_60px_rgba(92,70,53,0.08)]">
                <div className="relative min-h-[330px] sm:min-h-[500px]">
                  <Image src={withBasePath(activeCabin.image)} alt={activeCabin.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-xs font-light uppercase tracking-[0.24em] text-white/72">{activeCabin.capacity}</p>
                    <h3 className="mt-2 text-4xl font-bold tracking-normal text-white sm:text-6xl">{activeCabin.name}</h3>
                  </div>
                </div>
                <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-base font-normal leading-8 text-[#6F6F6F]">{activeCabin.description}</p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <InfoTile label="Capacidad" value={activeCabin.capacity} />
                      <InfoTile label="Camas" value={activeCabin.surface} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">Incluye</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {activeCabin.services.slice(0, 10).map((item) => (
                        <p key={item} className="flex items-start gap-2 text-sm font-normal leading-6 text-[#6F6F6F]">
                          <Check className="mt-1 shrink-0 text-[#2F5D50]" size={16} /> {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ) : null}
          </div>
        </section>

        <section className="bg-[#FAF9F6] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <SectionKicker>Equipamiento</SectionKicker>
                <h2 className="section-title">Comodidad sin sobrecargar la informacion.</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {equipmentGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <article key={group.title} className="rounded-2xl border border-[#D9D6CF] bg-white p-6 shadow-[0_18px_45px_rgba(92,70,53,0.05)]">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#F4EFE7] text-[#2F5D50]">
                        <Icon size={22} />
                      </div>
                      <h3 className="mt-5 text-xl font-bold tracking-normal text-[#5C4635]">{group.title}</h3>
                      <div className="mt-4 grid gap-2">
                        {group.items.map((item) => (
                          <p key={item} className="text-sm font-normal leading-6 text-[#6F6F6F]">{item}</p>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="actividades" className="section-shell">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <SectionKicker>Actividades</SectionKicker>
              <h2 className="section-title">Experiencias al aire libre.</h2>
            </div>
            <p className="max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
              Caminatas, cabalgatas y espacios comunes para disfrutar el entorno rural. Las cabalgatas tienen precio aparte.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...experiences, ...commonAreas].map((item) => {
              const Icon = areaIcons[item.id] ?? Leaf;
              return (
                <article key={item.id} className="group overflow-hidden rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] shadow-[0_18px_45px_rgba(92,70,53,0.05)]">
                  <div className="relative h-64">
                    <Image src={withBasePath(item.image)} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#F4EFE7] text-[#2F5D50]">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-2xl font-bold tracking-normal text-[#5C4635]">{item.title}</h3>
                    <p className="mt-3 text-sm font-normal leading-7 text-[#6F6F6F]">{item.description}</p>
                    {'note' in item && item.note ? (
                      <p className="mt-4 inline-flex rounded-xl bg-[#B86E4B] px-3 py-2 text-sm font-medium text-white">{item.note}</p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="animales" className="bg-[#2F5D50] py-16 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.26em] text-white/62">Animales de la finca</p>
                <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">Vida rural con una mirada cuidada.</h2>
              </div>
              <p className="max-w-2xl text-base font-normal leading-8 text-white/70">
                La presencia de caballos, vacas y granja ecologica acompana la experiencia sin perder una estetica elegante, natural y contemporanea.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {animalItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-2xl bg-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                  <div className="relative h-72">
                    <Image src={withBasePath(item.image)} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold tracking-normal">{item.title}</h3>
                    <p className="mt-3 text-sm font-normal leading-7 text-white/68">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trail-running" className="bg-[#F4EFE7] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <article className="grid overflow-hidden rounded-2xl bg-[#FAF9F6] shadow-[0_22px_60px_rgba(92,70,53,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[340px] lg:min-h-[470px]">
                <Image src={withBasePath('/images/hero-finca.png')} alt="Trail running Cerro Blanco en entorno natural" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <p className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#F4EFE7] px-3 py-2 text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">
                  <Mountain size={16} className="text-[#B86E4B]" /> Evento especial
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-normal text-[#5C4635] sm:text-5xl">Trail Running Cerro Blanco</h2>
                <p className="mt-4 max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
                  La finca tambien realiza eventos de trail running de Cerro Blanco. Este apartado redirige a una pagina dedicada que se va a completar mas adelante.
                </p>
                <div className="mt-7">
                  <Link href="/trail-running" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B86E4B] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a55f40]">
                    Ver evento <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="ubicacion" className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionKicker>Ubicacion</SectionKicker>
              <h2 className="section-title">Llegar sin complicaciones.</h2>
              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
                La finca cuenta con ubicacion en Google Maps. El acceso esta pensado para que la consulta y el viaje sean claros desde el primer contacto.
              </p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2F5D50] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#24483e]">
                Abrir Google Maps <MapPin size={18} />
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] shadow-[0_22px_60px_rgba(92,70,53,0.08)]">
              <iframe
                title="Ubicacion de Finca Carranza Sosa en Google Maps"
                src={mapEmbedUrl}
                className="h-[520px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9F6] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <SectionKicker>Testimonios</SectionKicker>
                <h2 className="section-title">Experiencias tranquilas y cuidadas.</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-2xl border border-[#D9D6CF] bg-white p-6 shadow-[0_18px_45px_rgba(92,70,53,0.05)]">
                  <div className="flex gap-1 text-[#B86E4B]">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-normal leading-7 text-[#6F6F6F]">"{testimonial.quote}"</p>
                  <p className="mt-6 text-base font-bold text-[#5C4635]">{testimonial.name}</p>
                  <p className="mt-1 text-xs font-light uppercase tracking-[0.18em] text-[#6F6F6F]">{testimonial.eventType}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionKicker>Contacto</SectionKicker>
              <h2 className="section-title">Consultar disponibilidad.</h2>
              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
                Accesos directos para escribir, revisar redes, ver Airbnb o abrir la ubicacion.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-button bg-[#2F5D50] text-white hover:bg-[#24483e]">
                  WhatsApp <MessageCircle size={18} />
                </a>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="contact-button border border-[#D9D6CF] bg-[#FAF9F6] text-[#5C4635]">
                  Google Maps <MapPin size={18} />
                </a>
                <SocialButton href={siteConfig.social.instagram} label="Instagram" icon={<Instagram size={18} />} />
                <SocialButton href={siteConfig.social.facebook} label="Facebook" icon={<Facebook size={18} />} />
                <SocialButton href={siteConfig.social.airbnb} label="Airbnb" icon={<ExternalLink size={18} />} />
                <a href={`tel:${siteConfig.phone}`} className="contact-button border border-[#D9D6CF] bg-[#FAF9F6] text-[#5C4635]">
                  Telefono <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="divide-y divide-[#D9D6CF] rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] px-6">
              {faqs.slice(0, 5).map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#5C4635]">
                    {faq.question}
                    <ArrowRight className="shrink-0 transition group-open:rotate-90" size={18} />
                  </summary>
                  <p className="mt-3 text-sm font-normal leading-7 text-[#6F6F6F]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-[#2F5D50] text-white shadow-[0_18px_45px_rgba(47,93,80,0.24)] transition hover:bg-[#24483e] sm:bottom-5 sm:right-5" aria-label="Contactar por WhatsApp">
        <MessageCircle size={25} />
      </a>

      <footer className="bg-[#FAF9F6] px-4 py-10 text-[#5C4635] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-[#D9D6CF] pt-8 sm:flex-row sm:items-center">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-md text-sm font-normal leading-6 text-[#6F6F6F]">{siteConfig.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="footer-icon" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="footer-icon" aria-label="Facebook"><Facebook size={18} /></a>
            <a href={siteConfig.social.airbnb} target="_blank" rel="noreferrer" className="footer-icon" aria-label="Airbnb"><ExternalLink size={18} /></a>
            <a href={mapsLink} target="_blank" rel="noreferrer" className="footer-icon" aria-label="Google Maps"><MapPin size={18} /></a>
          </div>
        </div>
      </footer>

      {lightboxOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 px-4 py-5" onClick={() => setLightboxOpen(false)}>
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between text-white">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.24em] text-white/62">{galleryItems[activeGallery]?.category}</p>
                <h3 className="text-xl font-bold tracking-normal sm:text-3xl">{galleryItems[activeGallery]?.title}</h3>
              </div>
              <button type="button" onClick={() => setLightboxOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/18" aria-label="Cerrar">
                <X size={18} />
              </button>
            </div>
            <div className="relative h-[72vh] overflow-hidden rounded-2xl bg-white/5">
              <Image src={withBasePath(galleryItems[activeGallery]?.src ?? '/images/real-villa.jpg')} alt={galleryItems[activeGallery]?.title ?? ''} fill className="object-cover" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <span className={`leading-none ${light ? 'text-white' : 'text-[#5C4635]'}`}>
      <span className="block text-[0.68rem] font-light uppercase tracking-[0.42em]">Finca</span>
      <span className="mt-1 block text-base font-extrabold uppercase tracking-normal sm:text-lg">Carranza Sosa</span>
    </span>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-light uppercase tracking-[0.26em] text-[#6F6F6F]">{children}</p>;
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#F4EFE7] p-4">
      <p className="text-xs font-light uppercase tracking-[0.18em] text-[#6F6F6F]">{label}</p>
      <p className="mt-2 text-sm font-bold text-[#5C4635]">{value}</p>
    </div>
  );
}

function SocialButton({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="contact-button border border-[#D9D6CF] bg-[#FAF9F6] text-[#5C4635]">
      {label} {icon}
    </a>
  );
}
