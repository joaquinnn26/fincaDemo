export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: '/images/hero-finca.png',
    title: 'Cabanas',
    category: 'Alojamiento',
    description: 'Cuatro cabanas equipadas para 3 y 4 personas.',
  },
  {
    src: '/images/hogarcabaña.jpg',
    title: 'Interior equipado',
    category: 'Comodidades',
    description: 'Ambientes preparados con cocina, vajilla, toallas y climatizacion.',
  },
  {
    src: '/images/real-pool.jpg',
    title: 'Pileta',
    category: 'Espacio comun',
    description: 'Piscina compartida para disfrutar durante la estadia.',
  },
  {
    src: '/images/asador.png',
    title: 'Parque',
    category: 'Espacio comun',
    description: 'Entorno verde con lugar para descansar, caminar y usar los asadores.',
  },
  {
    src: '/images/salon.jpg',
    title: 'Quincho',
    category: 'Espacio comun',
    description: 'Sector compartido para comidas y reuniones.',
  },
  {
    src: '/images/caballo.png',
    title: 'Actividades',
    category: 'Servicios',
    description: 'Caminatas y cabalgatas disponibles. Las cabalgatas tienen costo aparte.',
  },
  {
    src: '/images/ovejas.png',
    title: 'Granja ecologica',
    category: 'Naturaleza',
    description: 'Un espacio de contacto con la naturaleza dentro de la finca.',
  },
  {
    src: '/images/ovejascaballo.png',
    title: 'Vida rural',
    category: 'Animales',
    description: 'Ovejas, caballos y entorno natural dentro de la finca.',
  },
];
