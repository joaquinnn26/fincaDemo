'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
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

const navItems = [
  { label: 'Departamentos', href: '#hospedajes' },
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
    image: '/images/optimized/nuevas/IMG_6669.jpg',
  },
  {
    title: 'Ovejas',
    text: 'Presencia de campo que refuerza el ambiente familiar y natural.',
    image: '/images/optimized/nuevas/IMG_6649.jpg',
  },
  {
    title: 'Granja ecologica',
    text: 'Un espacio de contacto simple con la naturaleza y la vida rural.',
    image: '/images/optimized/granjaecologica.jpg',
  },
];

const areaIcons: Record<string, React.ElementType> = {
  gimnasio: Dumbbell,
  quincho: Home,
  pileta: Waves,
  parque: Trees,
  granja: Leaf,
  huerta: Leaf,
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

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
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
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0986035751466!2d-64.45277399999999!3d-32.0665817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2a3bb9ad812e5%3A0x71a1bd5d0aa80163!2sFinca%20Carranza%20Sosa!5e0!3m2!1ses!2sar!4v1785371145561!5m2!1ses!2sar';

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
        <section className="relative isolate min-h-[720px] overflow-hidden bg-[#2F5D50] text-white sm:min-h-screen" data-reveal>
          <Image src={withBasePath('/images/optimized/hero-finca.jpg')} alt="Entrada de Finca Carranza Sosa rodeada de arboles" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,93,80,.58),rgba(47,93,80,.22)_48%,rgba(47,93,80,.74)),linear-gradient(90deg,rgba(47,93,80,.78),rgba(47,93,80,.18)_62%)]" />

          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 text-center sm:min-h-screen sm:px-6 sm:pb-20 sm:text-left lg:px-8">
            <div className="mx-auto max-w-3xl sm:mx-0">
              <p className="text-[0.68rem] font-light uppercase tracking-[0.28em] text-white/78 sm:text-xs sm:tracking-[0.34em]">Alojamiento rural</p>
              <h1 className="mt-4 max-w-4xl text-[clamp(2.45rem,13vw,6.7rem)] font-bold leading-[0.95] tracking-normal sm:mt-5">
                Alojamiento rural para descansar.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7 text-white/82 sm:mx-0 sm:mt-6 sm:text-xl sm:leading-8">
                Escapate del ruido y disfrutá de la naturaleza en un entorno pensado para desconectar.
              </p>
              <div className="mt-14 flex justify-center sm:mt-8 sm:justify-start">
                <a href="#hospedajes" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/24 bg-white/14 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_42px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/44 hover:bg-white/22 sm:px-6 sm:py-3.5">
                  Ver departamentos
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/16 text-white transition group-hover:translate-y-0.5 group-hover:bg-white/24">
                    <ArrowDown size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-shell" data-reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionKicker>Sobre la finca</SectionKicker>
              <h2 className="section-title">Un alojamiento rural pensado para descansar.</h2>
              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
                Finca Carranza Sosa combina naturaleza, tranquilidad y comodidad en una propuesta familiar. La experiencia prioriza el entorno.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['Ambiente familiar', 'Naturaleza', 'Alojamiento rural', 'Espacios abiertos'].map((item) => (
                  <p key={item} className="flex items-center gap-2 rounded-xl border border-[#D9D6CF] bg-[#FAF9F6] px-4 py-3 text-sm font-medium text-[#5C4635]">
                    <Check size={17} className="text-[#2F5D50]" /> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="relative min-h-[260px] overflow-hidden rounded-2xl sm:min-h-[520px]">
                <Image src={withBasePath('/images/optimized/nuevas/IMG_6669.jpg')} alt="Caballo en el parque de la finca" fill sizes="(min-width: 1024px) 36vw, (min-width: 640px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[190px] overflow-hidden rounded-2xl sm:min-h-[240px]">
                  <Image src={withBasePath('/images/optimized/sobrefinca.jpg')} alt="Vista desde el interior hacia el parque de la finca" fill sizes="(min-width: 1024px) 54vw, (min-width: 640px) 60vw, 100vw" className="object-cover" />
                </div>
                <div className="surface-card p-5 sm:p-6">
                  <div className="mb-5 h-1 w-14 rounded-full bg-[#B86E4B]" />
                  <div className="grid gap-4">
                    <div>
                      <p className="text-2xl font-bold text-[#2F5D50]">4</p>
                      <p className="mt-1 text-xs font-light uppercase tracking-[0.2em] text-[#6F6F6F]">Departamentos equipados</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 border-t border-[#D9D6CF] pt-4">
                      <div>
                        <p className="text-xl font-bold text-[#5C4635]">7</p>
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

        <section id="hospedajes" className="section-shell" data-reveal>
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <SectionKicker>Hospedajes</SectionKicker>
              <h2 className="section-title">Departamentos para elegir por capacidad.</h2>
            </div>
            <p className="max-w-2xl text-base font-normal leading-8 text-[#6F6F6F]">
              Dos departamentos para 3 personas y dos para 4 personas. Todos mantienen la misma linea de comodidad y equipamiento.
            </p>
          </div>

          <div className="mt-8 lg:mt-10">
            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-4 sm:px-0">
              {spaces.map((cabin) => (
                <button
                  key={cabin.id}
                  type="button"
                  onClick={() => setActiveCabinId(cabin.id)}
                  className={`group grid min-w-[230px] grid-cols-[72px_1fr] items-center gap-3 rounded-2xl border p-2.5 text-left transition sm:min-w-0 ${
                    activeCabinId === cabin.id
                      ? 'border-[#2F5D50] bg-[#FAF9F6] shadow-[0_14px_35px_rgba(92,70,53,0.08)]'
                      : 'border-[#D9D6CF] bg-[#FAF9F6]/62 hover:bg-[#FAF9F6]'
                  }`}
                >
                  <span className="relative h-[72px] overflow-hidden rounded-xl bg-[#F4EFE7]">
                    <Image src={withBasePath(cabin.image)} alt={cabin.name} fill sizes="72px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-base font-bold tracking-normal text-[#5C4635]">{cabin.name}</span>
                    <span className="mt-1 flex items-center gap-1.5 text-xs font-normal text-[#6F6F6F]">
                      <Users size={14} /> {cabin.capacity}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {activeCabin ? (
              <article key={activeCabin.id} className="cabin-panel surface-card mt-4 overflow-hidden">
                <button
                  type="button"
                  onClick={() => openCabinGallery(activeCabin.id)}
                  className="group relative block h-[280px] w-full overflow-hidden bg-[#F4EFE7] text-left sm:h-[360px] lg:h-[430px]"
                  aria-label={`Ver fotos de ${activeCabin.name}`}
                >
                  <Image src={withBasePath(activeCabin.image)} alt={activeCabin.name} fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/16 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      <Users size={14} /> {activeCabin.capacity}
                    </p>
                    <h3 className="mt-3 text-4xl font-bold tracking-normal text-white sm:text-6xl">{activeCabin.name}</h3>
                  </div>
                </button>

                <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">Departamento seleccionado</p>
                      <p className="mt-3 text-sm font-normal leading-7 text-[#6F6F6F] sm:text-base sm:leading-8">{activeCabin.description}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoTile label="Capacidad" value={activeCabin.capacity} />
                      <InfoTile label="Camas" value={activeCabin.surface} />
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                      <button
                        type="button"
                        onClick={() => openCabinGallery(activeCabin.id)}
                        className="accent-button w-full sm:w-auto"
                      >
                        Ver mas fotos
                      </button>
                      {activeCabin.airbnbUrl ? (
                        <a
                          href={activeCabin.airbnbUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF385C] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,56,92,0.2)] transition hover:bg-[#e63252] sm:w-auto"
                        >
                          <AirbnbMark /> Airbnb <ExternalLink size={15} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">Incluye</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {activeCabin.services.slice(0, 10).map((item) => (
                        <p key={item} className="flex items-start gap-2 rounded-xl bg-white px-3 py-2 text-sm font-normal leading-6 text-[#6F6F6F]">
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

        <section className="bg-[#FAF9F6] py-12 sm:py-24" data-reveal>
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
                    <article key={group.title} className="white-card p-5 sm:p-6">
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

        <section id="galeria" className="bg-[#FAF9F6] py-12 sm:py-24" data-reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <SectionKicker>Galeria</SectionKicker>
                <h2 className="section-title">Mira mas fotos del establecimiento.</h2>
              </div>
            </div>

            <div className="gallery-fade -mx-4 mt-8 overflow-hidden sm:-mx-6 lg:-mx-8 lg:mt-10">
              <div className="gallery-marquee flex w-max gap-4 px-4 sm:px-6 lg:px-8">
                {[...galleryItems, ...galleryItems].map((item, index) => {
                  const galleryIndex = index % galleryItems.length;

                  return (
                    <button
                      key={`${item.src}-${index}`}
                      type="button"
                      onClick={() => {
                        setActiveGallery(galleryIndex);
                        setLightboxOpen(true);
                      }}
                      className="group relative h-72 w-[82vw] shrink-0 overflow-hidden rounded-2xl border border-[#D9D6CF] bg-[#F4EFE7] shadow-[0_8px_24px_rgba(92,70,53,0.035)] sm:h-96 sm:w-[560px] lg:h-[420px] lg:w-[640px]"
                      aria-label={`Ver foto ${galleryIndex + 1} del establecimiento`}
                    >
                      <Image src={withBasePath(item.src)} alt={item.title} fill sizes="(min-width: 1024px) 640px, (min-width: 640px) 560px, 82vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="actividades" className="section-shell" data-reveal>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <SectionKicker>Actividades</SectionKicker>
              <h2 className="section-title">Experiencias al aire libre.</h2>
            </div>
            <p className="max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
              Caminatas, paseos a caballo y espacios comunes para disfrutar el entorno rural.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...experiences, ...commonAreas].map((item) => {
              const Icon = areaIcons[item.id] ?? Leaf;
              return (
                <article key={item.id} className="surface-card group overflow-hidden">
                  {item.image ? (
                    <div className="relative h-56 bg-[#F4EFE7] sm:h-64">
                      <Image src={withBasePath(item.image)} alt={item.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                    </div>
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-[#2F5D50] px-6 text-center text-white sm:h-64">
                      <div>
                        <p className="text-xs font-light uppercase tracking-[0.28em] text-white/64">Huerta ecologica</p>
                        <p className="mt-3 text-4xl font-bold tracking-normal">En proceso</p>
                      </div>
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#F4EFE7] text-[#2F5D50]">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-2xl font-bold tracking-normal text-[#5C4635]">{item.title}</h3>
                    <p className="mt-3 text-sm font-normal leading-7 text-[#6F6F6F]">{item.description}</p>
                    {'note' in item && item.note ? (
                      <p className={`mt-4 inline-flex rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] ${
                        item.id === 'paseos-a-caballo' ? 'bg-[#F4EFE7] text-[#B86E4B] ring-1 ring-[#B86E4B]/24' : 'bg-[#2F5D50] text-white'
                      }`}>
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="animales" className="bg-[#2F5D50] py-12 text-white sm:py-24" data-reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.26em] text-white/62">Animales de la finca</p>
                <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">Vida rural con una mirada cuidada.</h2>
              </div>
              <p className="max-w-2xl text-base font-normal leading-8 text-white/70">
                La presencia de caballos, ovejas, granja ecologica y una huerta ecologica en proceso acompana la experiencia sin perder una estetica natural y cuidada.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {animalItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-2xl border border-white/12 bg-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                  <div className="relative h-56 bg-[#24483E] sm:h-72">
                    <Image src={withBasePath(item.image)} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
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

        <section id="trail-running" className="bg-[#F4EFE7] py-12 sm:py-24" data-reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <article className="surface-card grid overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px] lg:min-h-[470px]">
                <Image src={withBasePath('/images/optimized/trailrunning.jpg')} alt="Grand Trail Cerro Blanco en entorno natural" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
                <p className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#F4EFE7] px-3 py-2 text-xs font-light uppercase tracking-[0.22em] text-[#6F6F6F]">
                  <Mountain size={16} className="text-[#B86E4B]" /> Grand Trail Cerro Blanco
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-normal text-[#5C4635] sm:text-5xl">Trail Running</h2>
                <p className="mt-4 max-w-xl text-sm font-normal leading-7 text-[#6F6F6F] sm:text-base sm:leading-8">
                  En Finca Carranza Sosa tambien se realizan eventos deportivos como Grand Trail Cerro Blanco. Este apartado redirige a una pagina dedicada que se va a completar mas adelante.
                </p>
                <div className="mt-7">
                  <Link href="/trail-running" className="accent-button w-full sm:w-auto">
                    Ver evento <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="ubicacion" className="section-shell" data-reveal>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionKicker>Ubicacion</SectionKicker>
              <h2 className="section-title">Llegar sin complicaciones.</h2>
              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
                Usa el mapa para calcular el camino hasta Finca Carranza Sosa y revisar el acceso antes de viajar. La ubicacion esta marcada en Google Maps para llegar directo desde el celular.
              </p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="primary-button mt-7">
                Abrir Google Maps <MapPin size={18} />
              </a>
            </div>
            <div className="surface-card map-reveal overflow-hidden" data-reveal>
              <iframe
                title="Ubicacion de Finca Carranza Sosa en Google Maps"
                src={mapEmbedUrl}
                className="h-[360px] w-full border-0 sm:h-[520px]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9F6] py-12 sm:py-24" data-reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <SectionKicker>Resenas</SectionKicker>
                <h2 className="section-title">Lo que cuentan quienes ya nos visitaron.</h2>
              </div>
            </div>
            <div className="reviews-shell white-card mt-10 p-3 sm:p-5">
              <div className="elfsight-app-6c2d303b-0c0e-4b06-bfb4-3c2d219e659f" data-elfsight-app-lazy />
            </div>
          </div>
        </section>

        <section id="contacto" className="section-shell" data-reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionKicker>Contacto</SectionKicker>
              <h2 className="section-title">Consultar disponibilidad.</h2>
              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#6F6F6F]">
                Accesos directos para escribir, revisar redes, ver Airbnb o abrir la ubicacion.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="primary-button">
                  WhatsApp <MessageCircle size={18} />
                </a>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="secondary-button">
                  Google Maps <MapPin size={18} />
                </a>
                <SocialButton href={siteConfig.social.instagram} label="Instagram" icon={<Instagram size={18} />} />
                <SocialButton href={siteConfig.social.facebook} label="Facebook" icon={<Facebook size={18} />} />
                <SocialButton href={siteConfig.social.airbnb} label="Airbnb" icon={<ExternalLink size={18} />} />
                <a href={`tel:${siteConfig.phone}`} className="secondary-button">
                  Telefono <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="surface-card divide-y divide-[#D9D6CF] px-6">
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

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="whatsapp-float fixed bottom-5 right-5 z-[90] inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.34)] ring-2 ring-white/80 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:w-auto sm:px-5" aria-label="Contactar por WhatsApp">
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

      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      {activeCabinGallery ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/72 px-3 py-4 backdrop-blur-xl sm:px-4 sm:py-5" onClick={() => setActiveCabinGalleryId(null)}>
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.24em] text-white/62">Fotos de departamento</p>
                <h3 className="text-xl font-bold tracking-normal sm:text-3xl">{activeCabinGallery.name}</h3>
              </div>
              <button type="button" onClick={() => setActiveCabinGalleryId(null)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/18" aria-label="Cerrar fotos de departamento">
                <X size={18} />
              </button>
            </div>

            <div className="relative h-[62vh] overflow-hidden rounded-2xl bg-white/5 sm:h-[72vh]">
              <Image
                src={withBasePath(activeCabinGallery.gallery[activeCabinGalleryIndex] ?? activeCabinGallery.image)}
                alt={`${activeCabinGallery.name} foto ${activeCabinGalleryIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => setActiveCabinGalleryIndex((value) => (value - 1 + activeCabinGallery.gallery.length) % activeCabinGallery.gallery.length)}
                className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md sm:left-3 sm:h-11 sm:w-11 sm:rounded-xl"
                aria-label="Foto anterior de departamento"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => setActiveCabinGalleryIndex((value) => (value + 1) % activeCabinGallery.gallery.length)}
                className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md sm:right-3 sm:h-11 sm:w-11 sm:rounded-xl"
                aria-label="Foto siguiente de departamento"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-3 flex max-w-full gap-2 overflow-x-auto pb-2 sm:gap-3">
              {activeCabinGallery.gallery.map((src, index) => (
                <button
                  key={`${activeCabinGallery.id}-modal-${src}`}
                  type="button"
                  onClick={() => setActiveCabinGalleryIndex(index)}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border sm:h-20 sm:w-28 ${activeCabinGalleryIndex === index ? 'border-[#B86E4B]' : 'border-white/18'}`}
                  aria-label={`Abrir foto ${index + 1} de ${activeCabinGallery.name}`}
                >
                  <Image src={withBasePath(src)} alt={`${activeCabinGallery.name} miniatura ${index + 1}`} fill sizes="112px" className="object-contain" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {lightboxOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/72 px-3 py-4 backdrop-blur-xl sm:px-4 sm:py-5" onClick={() => setLightboxOpen(false)}>
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex justify-end text-white">
              <button type="button" onClick={() => setLightboxOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/18" aria-label="Cerrar">
                <X size={18} />
              </button>
            </div>
            <div className="relative h-[66vh] overflow-hidden rounded-2xl bg-white/5 sm:h-[72vh]">
              <Image src={withBasePath(galleryItems[activeGallery]?.src ?? galleryItems[0]?.src ?? '/images/optimized/hero-finca.jpg')} alt={galleryItems[activeGallery]?.title ?? ''} fill sizes="100vw" className="object-contain" />
              <button
                type="button"
                onClick={() => setActiveGallery((value) => (value - 1 + galleryItems.length) % galleryItems.length)}
                className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md sm:left-3 sm:h-11 sm:w-11 sm:rounded-xl"
                aria-label="Foto anterior del establecimiento"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => setActiveGallery((value) => (value + 1) % galleryItems.length)}
                className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md sm:right-3 sm:h-11 sm:w-11 sm:rounded-xl"
                aria-label="Foto siguiente del establecimiento"
              >
                <ChevronRight size={20} />
              </button>
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
    <div className="rounded-xl border border-[#D9D6CF] bg-white/70 p-4">
      <p className="text-xs font-light uppercase tracking-[0.18em] text-[#6F6F6F]">{label}</p>
      <p className="mt-2 text-sm font-bold text-[#5C4635]">{value}</p>
    </div>
  );
}

function SocialButton({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="secondary-button">
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

function AirbnbMark() {
  return (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-[0.65rem] font-extrabold leading-none text-[#FF385C]" aria-hidden="true">
      A
    </span>
  );
}

