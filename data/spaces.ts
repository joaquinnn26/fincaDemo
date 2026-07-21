export type Space = {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: string;
  services: string[];
  category: string;
  surface: string;
  recommendedFor: string;
  accessibility: string;
  coverage: string;
  proximity: string;
  price: string;
};

export const spaces: Space[] = [
  {
    id: 'jardines',
    name: 'Jardines',
    description: 'Avenidas de cipreses, zonas de descanso y un entorno natural ideal para ceremonias.',
    image: '/images/real-garden.jpg',
    capacity: 'Hasta 180 personas',
    services: ['Ceremonia', 'Decoración', 'Fotografía'],
    category: 'Exterior',
    surface: '2.400 m²',
    recommendedFor: 'Bodas y celebraciones',
    accessibility: 'Acceso cómodo',
    coverage: 'Parcial',
    proximity: '5 min del salón',
    price: 'Desde 1.800 €',
  },
  {
    id: 'salon',
    name: 'Salón principal',
    description: 'Un espacio elegante y luminoso para cenas, banquetes y eventos privados.',
    image: '/images/real-reception.jpg',
    capacity: 'Hasta 140 personas',
    services: ['Banquete', 'Música', 'Catering'],
    category: 'Interior',
    surface: '480 m²',
    recommendedFor: 'Eventos corporativos',
    accessibility: 'Total',
    coverage: 'Total',
    proximity: '2 min de las habitaciones',
    price: 'Desde 2.400 €',
  },
  {
    id: 'piscina',
    name: 'Piscina',
    description: 'Una piscina de diseño con terraza y sombras para reuniones relajadas.',
    image: '/images/real-pool.jpg',
    capacity: 'Hasta 80 personas',
    services: ['Descanso', 'Copas', 'Fotografía'],
    category: 'Exterior',
    surface: '320 m²',
    recommendedFor: 'Escapadas y cumpleaños',
    accessibility: 'Parcial',
    coverage: 'Parcial',
    proximity: '3 min del salón',
    price: 'Desde 900 €',
  },
  {
    id: 'habitaciones',
    name: 'Habitaciones',
    description: 'Alojamiento de diseño rural con vistas al jardín y máxima privacidad.',
    image: '/images/real-room.jpg',
    capacity: '24 huéspedes',
    services: ['Alojamiento', 'Desayuno', 'Spa'],
    category: 'Alojamiento',
    surface: '80 m²',
    recommendedFor: 'Escapadas',
    accessibility: 'Total',
    coverage: 'Total',
    proximity: '1 min del mirador',
    price: 'Desde 320 € / noche',
  },
];
