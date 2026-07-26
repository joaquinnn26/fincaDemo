export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: '/images/galeria-partecabañas.png',
    title: 'Cabanas',
    category: 'Alojamiento',
    description: 'Cuatro cabanas equipadas para 3 y 4 personas.',
  },
  {
    src: '/images/interiorequipado.png',
    title: 'Interior equipado',
    category: 'Comodidades',
    description: 'Ambientes preparados con cocina, vajilla, toallas y climatizacion.',
  },
  {
    src: '/images/piscina.png',
    title: 'Pileta',
    category: 'Espacio comun',
    description: 'Piscina compartida para disfrutar durante la estadia.',
  },
  {
    src: '/images/quincho.png',
    title: 'Quincho',
    category: 'Espacio comun',
    description: 'Sector compartido para comidas y reuniones.',
  },
  {
    src: '/images/asador.png',
    title: 'Asadores',
    category: 'Espacio comun',
    description: 'Entorno verde con lugar para descansar, caminar y usar los asadores.',
  },
  {
    src: '/images/cabalgata.png',
    title: 'Cabalgatas',
    category: 'Servicios',
    description: 'Cabalgatas disponibles con precio aparte.',
  },
  {
    src: '/images/trailrunning.jpg',
    title: 'Trail Running Cerro Blanco',
    category: 'Evento',
    description: 'Encuentro deportivo en el entorno natural de la finca.',
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
