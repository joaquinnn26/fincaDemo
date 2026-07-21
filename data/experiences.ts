export type Experience = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    id: 'weddings',
    title: 'Bodas',
    description: 'Ceremonias al aire libre, cenas íntimas y celebraciones con una atmósfera inolvidable.',
    image: '/images/real-couple.jpg',
  },
  {
    id: 'families',
    title: 'Eventos familiares',
    description: 'Espacios para reencuentros, aniversarios y celebraciones con todos los detalles cuidados.',
    image: '/images/real-villa.jpg',
  },
  {
    id: 'company',
    title: 'Reuniones de empresa',
    description: 'Un entorno exclusivo para retreats, convenciones y momentos de trabajo en naturaleza.',
    image: '/images/real-salon.jpg',
  },
  {
    id: 'retreats',
    title: 'Escapadas rurales',
    description: 'Un retiro sereno para desconectar, descansar y disfrutar de la arquitectura del lugar.',
    image: '/images/real-room.jpg',
  },
];
