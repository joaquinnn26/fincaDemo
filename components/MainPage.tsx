'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowDown,
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
  { label: 'Cabanas', href: '#hospedajes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Actividades', href: '#actividades' },
  { label: 'Animales', href: '#animales' },
  { label: 'Ubicacion', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

const siteBasePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/fincaDemo' : '';
const withBasePath = (src: string) => (src.startsWith('/images/') ? `${siteBasePath}${src}` : src);

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
  const [activeCabinGalleryId, setActiveCabinGalleryId] = useState<string | null>(null);
  const [activeCabinGalleryIndex, setActiveCabinGalleryIndex] = useState(0);

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
  const activeCabinGallery = useMemo(
    () => spaces.find((space) => space.id === activeCabinGalleryId) ?? null,
    [activeCabinGalleryId],
  );

  const openCabinGallery = (cabinId: string, index = 0) => {
    setActiveCabinGalleryId(cabinId);
    setActiveCabinGalleryIndex(index);
  };

  const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hola, quiero consultar disponibilidad en Finca Carranza Sosa.',
  )}`;
  const mapsLink = siteConfig.social.googleMaps;
  const mapEmbedUrl = `https://www.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=14&output=embed`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F4EFE7] text-[#5C4635]">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'border-b border-[#D9D6CF] bg-[#FAF9F6]/94 shadow-[0_10px_30px_rgba(92,70,53,0.06)] backdrop-blur-xl' : 'bg-transparent text-white'}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
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
        <section className="relative isolate min-h-[720px] overflow-hidden bg-[#2F5D50] text-white sm:min-h-screen">
          <Image src={withBasePath('/images/hero-finca.png')} alt="Entrada de Finca Carranza Sosa rodeada de arboles" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,93,80,.58),rgba(47,93,80,.22)_48%,rgba(47,93,80,.74)),linear-gradient(90deg,rgba(47,93,80,.78),rgba(47,93,80,.18)_62%)]" />

          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 text-center sm:min-h-screen sm:px-6 sm:pb-20 sm:text-left lg:px-8">
            <div className="mx-auto max-w-3xl sm:mx-0">
              <p className="text-[0.68rem] font-light uppercase tracking-[0.28em] text-white/78 sm:text-xs sm:tracking-[0.34em]">Turismo rural</p>
              <h1 className="mt-4 max-w-4xl text-[clamp(2.45rem,13vw,6.7rem)] font-bold leading-[0.95] tracking-normal sm:mt-5">
                Cabanas rurales para descansar.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7 text-white/82 sm:mx-0 sm:mt-6 sm:text-xl sm:leading-8">
                Escapate del ruido y disfrutá de la naturaleza en un entorno pensado para desconectar.
              </p>
              <div className="mt-14 flex justify-center sm:mt-8 sm:justify-start">
                <a href="#hospedajes" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/24 bg-white/14 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_42px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/44 hover:bg-white/22 sm:px-6 sm:py-3.5">
                  Ver cabanas
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/16 text-white transition group-hover:translate-y-0.5 group-hover:bg-white/24">
                    <ArrowDown size={16} />
                  </span>
                </a>
              </div>
            </div>
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
              <div className="relative min-h-[260px] overflow-hidden rounded-2xl sm:min-h-[520px]">
                <Image src={withBasePath('/images/caballoparasobrelafinca.png')} alt="Caballo en el parque de la finca" fill className="object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[190px] overflow-hidden rounded-2xl sm:min-h-[240px]">
                  <Image src={withBasePath('/images/sobrefinca.png')} alt="Vista desde el interior hacia el parque de la finca" fill className="object-cover" />
                </div>
                <div className="rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] p-5 shadow-[0_18px_45px_rgba(92,70,53,0.05)] sm:p-6">
                  <div className="mb-5 h-1 w-14 rounded-full bg-[#B86E4B]" />
                  <div className="grid gap-4">
                    <div>
                      <p className="text-2xl font-bold text-[#2F5D50]">4</p>
                      <p className="mt-1 text-xs font-light uppercase tracking-[0.2em] text-[#6F6F6F]">Cabanas equipadas</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 border-t border-[#D9D6CF] pt-4">
                      <div>
                        <p className="text-xl font-bold text-[#5C4635]">6</p>
                        <p className="mt-1 text-xs font-normal leading-5 text-[#6F6F6F]">Espacios comunes</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-[#5C4635]">2</p>
                        <p className="mt-1 text-xs font-normal leading-5 text-[#6F6F6F]">Actividades rurales</p>
                      </div>
                    </div>
                  </div>
                </div>
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

          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[360px_1fr]">
            <label className="block lg:hidden">
              <span className="mb-2 block text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">Elegir cabana</span>
              <select
                value={activeCabinId}
                onChange={(event) => setActiveCabinId(event.target.value)}
                className="w-full rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] px-4 py-3.5 text-sm font-bold text-[#5C4635] shadow-[0_14px_35px_rgba(92,70,53,0.05)] outline-none focus:border-[#B86E4B]"
              >
                {spaces.map((cabin) => (
                  <option key={cabin.id} value={cabin.id}>
                    {cabin.name} - {cabin.capacity}
                  </option>
                ))}
              </select>
            </label>

            <div className="hidden gap-3 lg:grid">
              {spaces.map((cabin) => (
                <button
                  key={cabin.id}
                  type="button"
                  onClick={() => setActiveCabinId(cabin.id)}
                  className={`grid min-w-[245px] grid-cols-[68px_1fr] items-center gap-3 rounded-2xl border p-3 text-left transition lg:min-w-0 lg:grid-cols-[84px_1fr] lg:gap-4 ${activeCabinId === cabin.id ? 'border-[#2F5D50] bg-[#FAF9F6] shadow-[0_18px_45px_rgba(92,70,53,0.08)]' : 'border-[#D9D6CF] bg-[#FAF9F6]/58 hover:bg-[#FAF9F6]'}`}
                >
                  <span className="relative h-20 overflow-hidden rounded-xl lg:h-24">
                    <Image src={withBasePath(cabin.image)} alt={cabin.name} fill className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-lg font-bold tracking-normal text-[#5C4635] lg:text-xl">{cabin.name}</span>
                    <span className="mt-1 flex items-center gap-2 text-sm font-normal text-[#6F6F6F]">
                      <Users size={16} /> {cabin.capacity}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {activeCabin ? (
              <article className="overflow-hidden rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] shadow-[0_22px_60px_rgba(92,70,53,0.08)]">
                <div className="relative min-h-[260px] sm:min-h-[500px]">
                  <Image src={withBasePath(activeCabin.image)} alt={activeCabin.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-xs font-light uppercase tracking-[0.24em] text-white/72">{activeCabin.capacity}</p>
                    <h3 className="mt-2 text-3xl font-bold tracking-normal text-white sm:text-6xl">{activeCabin.name}</h3>
                  </div>
                </div>
                <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-normal leading-7 text-[#6F6F6F] sm:text-base sm:leading-8">{activeCabin.description}</p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <InfoTile label="Capacidad" value={activeCabin.capacity} />
                      <InfoTile label="Camas" value={activeCabin.surface} />
                    </div>
                    <button
                      type="button"
                      onClick={() => openCabinGallery(activeCabin.id)}
                      className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#B86E4B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a55f40] sm:w-auto"
                    >
                      Ver mas fotos de esta cabana
                    </button>
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
                    <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                      {activeCabin.gallery.map((src, index) => (
                        <button
                          key={`${activeCabin.id}-${src}`}
                          type="button"
                          onClick={() => openCabinGallery(activeCabin.id, index)}
                          className="relative h-20 overflow-hidden rounded-xl border border-[#D9D6CF] sm:h-24"
                          aria-label={`Ver foto ${index + 1} de ${activeCabin.name}`}
                        >
                          <Image src={withBasePath(src)} alt={`${activeCabin.name} foto ${index + 1}`} fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ) : null}
          </div>
        </section>

        <section className="bg-[#FAF9F6] py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">
              <div>
                <SectionKicker>Equipamiento</SectionKicker>
                <h2 className="section-title">Todo lo necesario para una estadia comoda.</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {equipmentGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <article key={group.title} className="rounded-2xl border border-[#D9D6CF] bg-white p-5 shadow-[0_18px_45px_rgba(92,70,53,0.05)] sm:p-6">
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

        <section id="galeria" className="bg-[#FAF9F6] py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <SectionKicker>Galeria</SectionKicker>
                <h2 className="section-title">Mira mas fotos del establecimiento.</h2>
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

            <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-5">
              <button type="button" onClick={() => setLightboxOpen(true)} className="group relative min-h-[360px] overflow-hidden rounded-2xl text-left sm:min-h-[640px]">
                <Image src={withBasePath(galleryItems[activeGallery]?.src ?? '/images/real-villa.jpg')} alt={galleryItems[activeGallery]?.title ?? 'Galeria'} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-light uppercase tracking-[0.24em] text-white/72">{galleryItems[activeGallery]?.category}</p>
                  <h3 className="mt-2 text-3xl font-bold tracking-normal text-white sm:text-5xl">{galleryItems[activeGallery]?.title}</h3>
                  <p className="mt-3 max-w-xl text-sm font-normal leading-7 text-white/76">{galleryItems[activeGallery]?.description}</p>
                </div>
              </button>

              <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-1">
                {galleryItems.slice(0, 4).map((item, index) => (
                  <button key={item.src} type="button" onClick={() => setActiveGallery(index)} className={`relative h-32 min-w-[180px] overflow-hidden rounded-2xl border text-left transition sm:min-h-40 sm:min-w-0 ${activeGallery === index ? 'border-[#B86E4B]' : 'border-[#D9D6CF]'}`}>
                    <Image src={withBasePath(item.src)} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/28" />
                    <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">{item.title}</p>
                  </button>
                ))}
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
              Caminatas, cabalgatas y espacios comunes para disfrutar el entorno rural.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...experiences, ...commonAreas].map((item) => {
              const Icon = areaIcons[item.id] ?? Leaf;
              return (
                <article key={item.id} className="group overflow-hidden rounded-2xl border border-[#D9D6CF] bg-[#FAF9F6] shadow-[0_18px_45px_rgba(92,70,53,0.05)]">
                  <div className="relative h-56 sm:h-64">
                    <Image src={withBasePath(item.image)} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-5 sm:p-6">
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

        <section id="animales" className="bg-[#2F5D50] py-12 text-white sm:py-24">
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
                  <div className="relative h-56 sm:h-72">
                    <Image src={withBasePath(item.image)} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-2xl font-bold tracking-normal">{item.title}</h3>
                    <p className="mt-3 text-sm font-normal leading-7 text-white/68">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trail-running" className="bg-[#F4EFE7] py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <article className="grid overflow-hidden rounded-2xl bg-[#FAF9F6] shadow-[0_22px_60px_rgba(92,70,53,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px] lg:min-h-[470px]">
                <Image src={withBasePath('/images/trailrunning.jpg')} alt="Trail running Cerro Blanco en entorno natural" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
                <p className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#F4EFE7] px-3 py-2 text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">
                  <Mountain size={16} className="text-[#B86E4B]" /> Evento especial
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-normal text-[#5C4635] sm:text-5xl">Trail Running Cerro Blanco</h2>
                <p className="mt-4 max-w-xl text-sm font-normal leading-7 text-[#6F6F6F] sm:text-base sm:leading-8">
                  La finca tambien realiza eventos de trail running de Cerro Blanco. Este apartado redirige a una pagina dedicada que se va a completar mas adelante.
                </p>
                <div className="mt-7">
                  <Link href="/trail-running" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B86E4B] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a55f40] sm:w-auto">
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
                className="h-[360px] w-full border-0 sm:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9F6] py-12 sm:py-24">
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

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-[90] inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.34)] ring-2 ring-white/80 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:w-auto sm:px-5" aria-label="Contactar por WhatsApp">
        <WhatsAppIcon />
        <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
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

      {activeCabinGallery ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/72 px-3 py-4 backdrop-blur-xl sm:px-4 sm:py-5" onClick={() => setActiveCabinGalleryId(null)}>
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.24em] text-white/62">Fotos de cabana</p>
                <h3 className="text-xl font-bold tracking-normal sm:text-3xl">{activeCabinGallery.name}</h3>
              </div>
              <button type="button" onClick={() => setActiveCabinGalleryId(null)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/18" aria-label="Cerrar fotos de cabana">
                <X size={18} />
              </button>
            </div>

            <div className="relative h-[62vh] overflow-hidden rounded-2xl bg-white/5 sm:h-[72vh]">
              <Image
                src={withBasePath(activeCabinGallery.gallery[activeCabinGalleryIndex] ?? activeCabinGallery.image)}
                alt={`${activeCabinGallery.name} foto ${activeCabinGalleryIndex + 1}`}
                fill
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => setActiveCabinGalleryIndex((value) => (value - 1 + activeCabinGallery.gallery.length) % activeCabinGallery.gallery.length)}
                className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md sm:left-3 sm:h-11 sm:w-11 sm:rounded-xl"
                aria-label="Foto anterior de cabana"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => setActiveCabinGalleryIndex((value) => (value + 1) % activeCabinGallery.gallery.length)}
                className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md sm:right-3 sm:h-11 sm:w-11 sm:rounded-xl"
                aria-label="Foto siguiente de cabana"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
              {activeCabinGallery.gallery.map((src, index) => (
                <button
                  key={`${activeCabinGallery.id}-modal-${src}`}
                  type="button"
                  onClick={() => setActiveCabinGalleryIndex(index)}
                  className={`relative h-16 overflow-hidden rounded-xl border sm:h-20 ${activeCabinGalleryIndex === index ? 'border-[#B86E4B]' : 'border-white/18'}`}
                  aria-label={`Abrir foto ${index + 1} de ${activeCabinGallery.name}`}
                >
                  <Image src={withBasePath(src)} alt={`${activeCabinGallery.name} miniatura ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {lightboxOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/72 px-3 py-4 backdrop-blur-xl sm:px-4 sm:py-5" onClick={() => setLightboxOpen(false)}>
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
            <div className="relative h-[66vh] overflow-hidden rounded-2xl bg-white/5 sm:h-[72vh]">
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

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
      <path d="M16.04 3.2A12.68 12.68 0 0 0 5.22 22.5L3.7 28.8l6.45-1.5a12.67 12.67 0 1 0 5.89-24.1Zm0 22.98a10.46 10.46 0 0 1-5.33-1.46l-.38-.23-3.83.9.92-3.72-.25-.39a10.42 10.42 0 1 1 8.87 4.9Zm5.73-7.8c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55a9.38 9.38 0 0 1-1.74-2.16c-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}
