export type Space = {
  id: string;
  name: string;
  description: string;
  image: string;
  gallery: string[];
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

export const cabinEquipment = [
  'Aire frio/calor',
  'Salamandra',
  'Tender',
  'Copas de vino',
  'Elementos de cocina',
  'Vajilla',
  'Horno electrico',
  'Microondas',
  'Pava electrica',
  'Anafe electrico',
  'Bolsa de agua caliente para cama',
  'Secador de pelo',
  'Jabon, shampoo y crema enjuague',
  'Toallas pequenas y grandes',
  'Sommier doble + cama cucheta',
];

const cabinInterior = '/images/interiorequipado.png';
const cabinExterior = '/images/galeria-partecabañas.png';

export const spaces: Space[] = [
  {
    id: 'las-acacias',
    name: 'Las Acacias',
    description:
      'Cabana equipada para una estadia practica y comoda. Ideal para parejas, familias chicas o grupos de hasta 3 personas.',
    image: cabinInterior,
    gallery: [cabinInterior, cabinExterior, '/images/sobrefinca.png'],
    capacity: 'Hasta 3 personas',
    services: cabinEquipment,
    category: 'Cabana',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '3 personas',
    accessibility: 'Consultar',
    coverage: 'Equipada',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
  },
  {
    id: 'la-tranquera',
    name: 'La Tranquera',
    description:
      'Cabana para 3 personas con la misma equipacion que Las Acacias, pensada para resolver lo necesario sin complicaciones.',
    image: cabinInterior,
    gallery: [cabinInterior, cabinExterior, '/images/sobrefinca2.png'],
    capacity: 'Hasta 3 personas',
    services: cabinEquipment,
    category: 'Cabana',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '3 personas',
    accessibility: 'Consultar',
    coverage: 'Equipada',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
  },
  {
    id: 'del-arroyo',
    name: 'Del Arroyo',
    description:
      'Cabana para 4 personas, equipada con cocina, ropa blanca de uso interno y climatizacion frio/calor.',
    image: cabinInterior,
    gallery: [cabinInterior, cabinExterior, '/images/piscina.png'],
    capacity: 'Hasta 4 personas',
    services: cabinEquipment,
    category: 'Cabana',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '4 personas',
    accessibility: 'Consultar',
    coverage: 'Equipada',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
  },
  {
    id: 'del-parque',
    name: 'Del Parque',
    description:
      'Cabana para 4 personas con la misma equipacion que Del Arroyo y acceso simple a los espacios comunes.',
    image: cabinInterior,
    gallery: [cabinInterior, cabinExterior, '/images/quincho.png'],
    capacity: 'Hasta 4 personas',
    services: cabinEquipment,
    category: 'Cabana',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '4 personas',
    accessibility: 'Consultar',
    coverage: 'Equipada',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
  },
];
