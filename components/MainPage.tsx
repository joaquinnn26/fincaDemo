'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react';
import { availability } from '@/data/availability';
import { eventCases } from '@/data/events';
import { experiences } from '@/data/experiences';
import { faqs } from '@/data/faqs';
import { galleryItems } from '@/data/gallery';
import { siteConfig } from '@/data/site';
import { spaces } from '@/data/spaces';
import { testimonials } from '@/data/testimonials';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Reservar', href: '#reservar' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

const eventTypes = ['Boda', 'Evento privado', 'Empresa', 'Escapada'];

const highlights = [
  { value: '220', label: 'invitados' },
  { value: '24', label: 'huespedes' },
  { value: '10', label: 'zonas' },
  { value: '4.9', label: 'rating' },
];

const siteBasePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/fincaDemo' : '';
const withBasePath = (src: string) => src.startsWith('/images/') ? `${siteBasePath}${src}` : src;

export function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSpaceId, setActiveSpaceId] = useState(spaces[0]?.id ?? '');
  const [activeEvent, setActiveEvent] = useState(eventTypes[0]);
  const [activeGallery, setActiveGallery] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: availability[0]?.date ?? '',
    guests: '120',
    message: '',
  });

  const activeSpace = useMemo(
    () => spaces.find((space) => space.id === activeSpaceId) ?? spaces[0],
    [activeSpaceId],
  );

  const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hola, quiero consultar disponibilidad para ${activeEvent} en Finca Carranza Sosa.`,
  )}`;

  const updateForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7fb] font-sans text-[#111827]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1020]/84 text-white backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#inicio" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan-300 text-xs font-black text-slate-950 sm:h-10 sm:w-10 sm:text-sm">FE</span>
            <span className="truncate text-sm font-extrabold tracking-tight sm:text-lg">{siteConfig.name}</span>
          </Link>

          <nav className="hidden rounded-full border border-white/10 bg-white/8 p-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#reservar" className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-rose-300 sm:inline-flex">
              Reservar
            </a>
            <button type="button" onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 lg:hidden" aria-label="Abrir menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-[#0b1020]/96 px-4 py-3 lg:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold text-white/76 hover:bg-white/10">
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <main id="inicio">
        <section className="relative bg-[#0b1020] pt-24 text-white lg:min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,.24),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(251,113,133,.20),transparent_30%),linear-gradient(180deg,rgba(11,16,32,.1),rgba(11,16,32,.82))]" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pb-8 sm:px-6 sm:pb-10 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-semibold text-white/74 backdrop-blur sm:px-4 sm:text-sm">
                <Sparkles size={16} className="text-cyan-300" /> Finca premium para eventos
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-tight sm:mt-6 sm:text-6xl lg:text-8xl">
                Tu evento, armado en minutos.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
                Elegi fecha, formato y espacio sin navegar de mas. Una experiencia moderna para cotizar y reservar la finca.
              </p>
              <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
                <a href="#reservar" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-rose-300 sm:w-auto">
                  Consultar disponibilidad <ArrowRight size={18} />
                </a>
                <a href="#galeria" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/14 sm:w-auto">
                  Ver imagenes
                </a>
              </div>
            </div>

            <div className="grid h-[430px] grid-cols-4 grid-rows-5 gap-2 sm:h-[560px] sm:grid-cols-6 sm:grid-rows-6 sm:gap-3 lg:h-[680px]">
              <div className="relative col-span-4 row-span-3 overflow-hidden rounded-3xl sm:row-span-4 sm:rounded-[2rem]">
                <Image src={withBasePath('/images/real-villa.jpg')} alt="Entrada principal de la finca" fill priority className="object-cover" />
              </div>
              <div className="relative col-span-2 row-span-1 overflow-hidden rounded-3xl sm:row-span-3 sm:rounded-[2rem]">
                <Image src={withBasePath('/images/real-pool.jpg')} alt="Piscina de la finca" fill className="object-cover" />
              </div>
              <div className="relative col-span-2 row-span-1 overflow-hidden rounded-3xl sm:row-span-3 sm:rounded-[2rem]">
                <Image src={withBasePath('/images/real-reception.jpg')} alt="Salon principal" fill className="object-cover" />
              </div>
              <div className="relative hidden overflow-hidden rounded-[2rem] sm:col-span-2 sm:row-span-2 sm:block">
                <Image src={withBasePath('/images/real-couple.jpg')} alt="Ceremonia en la finca" fill className="object-cover" />
              </div>
              <div className="col-span-4 row-span-1 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:col-span-2 sm:row-span-2 sm:rounded-[2rem] sm:p-5">
                <p className="text-sm font-semibold text-cyan-300">Disponible</p>
                <p className="mt-1 text-2xl font-black sm:mt-2 sm:text-3xl">{availability[0]?.date}</p>
                <p className="mt-1 text-sm text-white/66 sm:mt-2">Primera fecha para consulta rapida.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-white py-6 dark:border-white/10 dark:bg-white/5">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-[#eef4ff] px-5 py-4 dark:bg-white/6">
                <p className="text-4xl font-black tracking-tight">{item.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-current/48">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reservar" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl bg-[#111827] p-5 text-white sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300 sm:text-sm sm:tracking-[0.18em]">Reserva guiada</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Decidi lo importante primero.</h2>
              <p className="mt-4 leading-7 text-white/64">Selecciona el tipo de evento y completa solo los datos necesarios. El resto se define por WhatsApp o email.</p>

              <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveEvent(type)}
                    className={`min-h-14 rounded-2xl border px-3 py-3 text-left text-sm font-black transition sm:px-4 sm:py-4 ${activeEvent === type ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 bg-white/7 text-white hover:bg-white/12'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl shadow-cyan-950/10 sm:grid-cols-2 sm:gap-5 sm:rounded-[2rem] sm:p-6">
              <div className="sm:col-span-2">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700 sm:text-sm sm:tracking-[0.18em]">Datos de consulta</p>
                <h3 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">Te respondemos con una propuesta inicial.</h3>
              </div>
              <label className="text-sm font-black text-slate-700">
                Nombre
                <input name="name" value={form.name} onChange={updateForm} className="form-field mt-2" placeholder="Ej: Ana" />
              </label>
              <label className="text-sm font-black text-slate-700">
                Telefono
                <input name="phone" value={form.phone} onChange={updateForm} className="form-field mt-2" placeholder="+54..." />
              </label>
              <label className="text-sm font-black text-slate-700">
                Fecha ideal
                <select name="date" value={form.date} onChange={updateForm} className="form-field mt-2">
                {availability.map((slot) => (
                  <option key={slot.date} value={slot.date}>{slot.date} - {slot.label}</option>
                ))}
                </select>
              </label>
              <label className="text-sm font-black text-slate-700">
                Invitados
                <input name="guests" value={form.guests} onChange={updateForm} className="form-field mt-2" placeholder="120" />
              </label>
              <label className="text-sm font-black text-slate-700 sm:col-span-2">
                Mensaje
                <textarea name="message" value={form.message} onChange={updateForm} className="form-field mt-2 min-h-28 resize-none" placeholder="Contanos fecha, tipo de evento o dudas principales" />
              </label>
              <div className="grid gap-3 sm:col-span-2 sm:flex sm:flex-wrap">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-rose-300 sm:w-auto">
                  WhatsApp <MessageCircle size={18} />
                </a>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-black text-slate-950 sm:w-auto">
                  Email <Send size={18} />
                </a>
              </div>
            </form>
          </div>
        </section>

        <section id="espacios" className="bg-[#eaf2ff] py-14 dark:bg-white/5 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300 sm:text-sm sm:tracking-[0.18em]">Espacios</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-6xl">Toca, mira y compara.</h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-current/62">Cada espacio muestra imagen, capacidad, precio orientativo y uso recomendado sin ventanas extras ni textos largos.</p>
            </div>

            <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[360px_1fr]">
              <div className="grid gap-3">
                {spaces.map((space) => (
                  <button
                    key={space.id}
                    type="button"
                    onClick={() => setActiveSpaceId(space.id)}
                    className={`group grid grid-cols-[76px_1fr] items-center gap-3 rounded-3xl border p-3 text-left transition sm:grid-cols-[92px_1fr] sm:gap-4 ${activeSpaceId === space.id ? 'border-cyan-700 bg-white shadow-lg shadow-black/5 dark:border-cyan-300 dark:bg-white/10' : 'border-black/5 bg-white/50 hover:bg-white dark:border-white/10 dark:bg-white/6'}`}
                  >
                    <span className="relative h-20 overflow-hidden rounded-2xl sm:h-24">
                      <Image src={withBasePath(space.image)} alt={space.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-black uppercase tracking-[0.12em] text-current/42 sm:text-xs sm:tracking-[0.16em]">{space.category}</span>
                      <span className="mt-1 block text-lg font-black tracking-tight sm:text-2xl">{space.name}</span>
                      <span className="mt-1 block text-sm text-current/58">{space.capacity}</span>
                    </span>
                  </button>
                ))}
              </div>

              {activeSpace ? (
                <article className="overflow-hidden rounded-3xl bg-[#111827] text-white shadow-2xl shadow-black/10 sm:rounded-[2rem]">
                  <div className="relative h-[360px] sm:h-[500px]">
                    <Image src={withBasePath(activeSpace.image)} alt={activeSpace.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/8 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300 sm:text-sm sm:tracking-[0.18em]">{activeSpace.category}</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-7xl">{activeSpace.name}</h3>
                    </div>
                  </div>
                  <div className="grid gap-5 p-5 sm:grid-cols-[1fr_1.2fr] sm:gap-6 sm:p-8">
                    <p className="text-base leading-8 text-white/66">{activeSpace.description}</p>
                    <dl className="grid gap-3 sm:grid-cols-2">
                      {[
                        ['Capacidad', activeSpace.capacity],
                        ['Superficie', activeSpace.surface],
                        ['Ideal', activeSpace.recommendedFor],
                        ['Precio', activeSpace.price],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl bg-white/8 p-4">
                          <dt className="text-xs font-black uppercase tracking-[0.14em] text-white/42">{label}</dt>
                          <dd className="mt-2 font-bold">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.id} className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5 dark:bg-white/6 sm:rounded-[2rem]">
                <div className="relative h-56 sm:h-72">
                  <Image src={withBasePath(experience.image)} alt={experience.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-tight">{experience.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-current/62">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="bg-[#111827] py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300 sm:text-sm sm:tracking-[0.18em]">Galeria</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-6xl">Imagenes primero.</h2>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setActiveGallery((value) => (value - 1 + galleryItems.length) % galleryItems.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/8" aria-label="Imagen anterior">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => setActiveGallery((value) => (value + 1) % galleryItems.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/8" aria-label="Imagen siguiente">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-[1.35fr_0.65fr]">
              <button type="button" onClick={() => setLightboxOpen(true)} className="group relative min-h-[420px] overflow-hidden rounded-3xl text-left sm:min-h-[560px] sm:rounded-[2rem] lg:min-h-[620px]">
                <Image src={withBasePath(galleryItems[activeGallery]?.src ?? '/images/real-villa.jpg')} alt={galleryItems[activeGallery]?.title ?? 'Galeria'} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300 sm:text-sm sm:tracking-[0.18em]">{galleryItems[activeGallery]?.category}</p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">{galleryItems[activeGallery]?.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">{galleryItems[activeGallery]?.description}</p>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {galleryItems.slice(0, 4).map((item, index) => (
                  <button key={item.src} type="button" onClick={() => setActiveGallery(index)} className={`relative min-h-28 overflow-hidden rounded-2xl border text-left sm:min-h-36 sm:rounded-3xl ${activeGallery === index ? 'border-cyan-300' : 'border-white/10'}`}>
                    <Image src={withBasePath(item.src)} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/34" />
                    <p className="absolute bottom-3 left-3 right-3 text-sm font-black">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300 sm:text-sm sm:tracking-[0.18em]">Eventos reales</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-6xl">Casos para imaginar el tuyo.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {eventCases.map((eventCase) => (
                <article key={eventCase.title} className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5 dark:bg-white/6 sm:rounded-[2rem]">
                  <div className="relative h-44">
                    <Image src={withBasePath(eventCase.image)} alt={eventCase.title} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-current/42">{eventCase.type}</p>
                    <h3 className="mt-2 text-xl font-black tracking-tight">{eventCase.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-current/62">{eventCase.story}</p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold"><Users size={16} /> {eventCase.guests}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 dark:bg-white/5 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300 sm:text-sm sm:tracking-[0.18em]">Confianza</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Opinion clara de clientes.</h2>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-5xl font-black tracking-tight sm:text-6xl">4.9</span>
                <span className="text-sm font-semibold text-current/52">rating medio<br />+300 experiencias</span>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-3xl border border-current/10 p-5 sm:rounded-[2rem]">
                  <div className="flex gap-1 text-rose-500 dark:text-rose-300">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-current/66">"{testimonial.quote}"</p>
                  <p className="mt-5 font-black">{testimonial.name}</p>
                  <p className="text-sm text-current/50">{testimonial.eventType}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#0b1020] py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-3xl sm:min-h-[560px] sm:rounded-[2rem] lg:min-h-[620px]">
                <Image src={withBasePath('/images/real-reception.jpg')} alt="Terraza de la finca" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300 sm:text-sm sm:tracking-[0.18em]">Contacto</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-6xl">Cotiza tu fecha.</h2>
                  <p className="mt-4 max-w-md leading-7 text-white/68">Respuesta directa con disponibilidad, espacio recomendado y proximo paso.</p>
                </div>
              </div>

              <div className="grid content-between gap-6 rounded-3xl border border-white/10 bg-white/7 p-5 sm:rounded-[2rem] sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <ContactLine icon={<Phone size={18} />} label="Telefono" value={siteConfig.phone} />
                  <ContactLine icon={<Mail size={18} />} label="Email" value={siteConfig.email} />
                  <ContactLine icon={<MapPin size={18} />} label="Ubicacion" value={siteConfig.address} />
                  <ContactLine icon={<Clock3 size={18} />} label="Horario" value={siteConfig.hours} />
                </div>

                <div className="divide-y divide-white/10">
                  {faqs.slice(0, 4).map((faq) => (
                    <details key={faq.question} className="group py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                        {faq.question}
                        <ArrowRight className="shrink-0 transition group-open:rotate-90" size={18} />
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-white/62">{faq.answer}</p>
                    </details>
                  ))}
                </div>

                <div className="grid gap-3 sm:flex sm:flex-wrap">
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 hover:bg-rose-300 sm:w-auto">
                    WhatsApp <MessageCircle size={18} />
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm font-black sm:w-auto">
                    Email <Send size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl sm:bottom-5 sm:right-5 sm:h-14 sm:w-14" aria-label="Contactar por WhatsApp">
        <Phone size={24} />
      </a>

      <footer className="bg-[#0b1020] px-4 pb-24 pt-10 text-white sm:px-6 sm:pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-black tracking-tight">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-white/50">{siteConfig.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={siteConfig.social.instagram} className="grid h-10 w-10 place-items-center rounded-full border border-white/12" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={`mailto:${siteConfig.email}`} className="grid h-10 w-10 place-items-center rounded-full border border-white/12" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
      </footer>

      {lightboxOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 px-4 py-5 sm:py-8" onClick={() => setLightboxOpen(false)}>
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between text-white">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300 sm:tracking-[0.18em]">{galleryItems[activeGallery]?.category}</p>
                <h3 className="text-xl font-black tracking-tight sm:text-3xl">{galleryItems[activeGallery]?.title}</h3>
              </div>
              <button type="button" onClick={() => setLightboxOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-white/16" aria-label="Cerrar">
                <X size={18} />
              </button>
            </div>
            <div className="relative h-[70vh] overflow-hidden rounded-3xl bg-white/5 sm:h-[76vh] sm:rounded-[2rem]">
              <Image src={withBasePath(galleryItems[activeGallery]?.src ?? '/images/real-villa.jpg')} alt={galleryItems[activeGallery]?.title ?? ''} fill className="object-cover" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ContactLine({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
      <p className="flex items-center gap-2 text-sm font-black text-cyan-300">{icon} {label}</p>
      <p className="mt-2 text-sm leading-6 text-white/70">{value}</p>
    </div>
  );
}
