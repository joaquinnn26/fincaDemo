export type Experience = {
  id: string;
  title: string;
  description: string;
  image?: string;
  note?: string;
};

export const commonAreas: Experience[] = [
  {
    id: 'gimnasio',
    title: 'Gimnasio',
    description: 'Espacio comun para entrenar durante la estadia.',
    image: '/images/optimized/sobrefinca.jpg',
  },
  {
    id: 'quincho',
    title: 'Quincho',
    description: 'Sector compartido para reuniones, comidas y momentos de descanso.',
    image: '/images/optimized/quincho.jpg',
  },
  {
    id: 'pileta',
    title: 'Pileta',
    description: 'Piscina de uso comun para disfrutar al aire libre.',
    image: '/images/optimized/piscina.jpg',
  },
  {
    id: 'parque',
    title: 'Parque',
    description: 'Entorno verde para caminar, descansar, usar los asadores y pasar el dia.',
    image: '/images/optimized/nuevas/IMG_6697.jpg',
  },
  {
    id: 'granja',
    title: 'Granja ecologica',
    description: 'Espacio de contacto con la naturaleza dentro de la finca.',
    image: '/images/optimized/granjaecologica.jpg',
  },
  {
    id: 'asadores',
    title: 'Asadores',
    description: 'Asadores disponibles en el parque para comidas al aire libre.',
    image: '/images/optimized/nuevas/IMG_6634 (1).jpg',
  },
  {
    id: 'huerta',
    title: 'Huerta ecologica',
    description: 'Un espacio natural que esta en proceso para sumar nuevas experiencias a la finca.',
    note: 'En proceso.',
  },
];

export const experiences: Experience[] = [
  {
    id: 'caminatas',
    title: 'Caminatas',
    description: 'Actividad para recorrer el entorno natural de la finca.',
    image: '/images/optimized/nuevas/IMG_6608.jpg',
  },
  {
    id: 'paseos-a-caballo',
    title: 'Paseos a caballo',
    description: 'Servicio diferenciado para sumar una experiencia al aire libre.',
    image: '/images/optimized/cabalgata.jpg',
    note: 'Tienen precio aparte.',
  },
];
