export type Experience = {
  id: string;
  title: string;
  description: string;
  image: string;
  note?: string;
};

export const commonAreas: Experience[] = [
  {
    id: 'gimnasio',
    title: 'Gimnasio',
    description: 'Espacio comun para entrenar durante la estadia.',
    image: '/images/real-salon.jpg',
  },
  {
    id: 'quincho',
    title: 'Quincho',
    description: 'Sector compartido para reuniones, comidas y momentos de descanso.',
    image: '/images/salon.jpg',
  },
  {
    id: 'pileta',
    title: 'Pileta',
    description: 'Piscina de uso comun para disfrutar al aire libre.',
    image: '/images/real-pool.jpg',
  },
  {
    id: 'parque',
    title: 'Parque',
    description: 'Entorno verde para caminar, descansar, usar los asadores y pasar el dia.',
    image: '/images/asador.png',
  },
  {
    id: 'granja',
    title: 'Granja ecologica',
    description: 'Espacio de contacto con la naturaleza dentro de la finca.',
    image: '/images/ovejas.png',
  },
  {
    id: 'asadores',
    title: 'Asadores',
    description: 'Asadores disponibles en el parque para comidas al aire libre.',
    image: '/images/asador.png',
  },
];

export const experiences: Experience[] = [
  {
    id: 'caminatas',
    title: 'Caminatas',
    description: 'Actividad para recorrer el entorno natural de la finca.',
    image: '/images/hero-finca.png',
  },
  {
    id: 'cabalgatas',
    title: 'Cabalgatas',
    description: 'Servicio diferenciado para sumar una experiencia al aire libre.',
    image: '/images/caballo.png',
    note: 'Tienen precio aparte.',
  },
];
