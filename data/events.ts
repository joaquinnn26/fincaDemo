export type EventCase = {
  title: string;
  type: string;
  guests: string;
  spaces: string[];
  story: string;
  image: string;
};

export const eventCases: EventCase[] = [
  {
    title: 'Boda campestre',
    type: 'Boda',
    guests: '120 invitados',
    spaces: ['Jardines', 'Salón principal', 'Terraza'],
    story: 'Una celebración íntima con ceremonia al aire libre y cena bajo las estrellas.',
    image: '/images/real-couple.jpg',
  },
  {
    title: 'Celebración familiar',
    type: 'Familiar',
    guests: '85 invitados',
    spaces: ['Jardines', 'Zona infantil', 'Piscina'],
    story: 'Un día completo para reunir a la familia y disfrutar de la naturaleza.',
    image: '/images/real-villa.jpg',
  },
  {
    title: 'Retreat corporativo',
    type: 'Empresarial',
    guests: '60 invitados',
    spaces: ['Salón principal', 'Habitaciones', 'Terraza'],
    story: 'Un entorno exclusivo para reuniones, talleres y alojamiento de varios días.',
    image: '/images/real-salon.jpg',
  },
];
