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
  airbnbUrl?: string;
};

export const departmentEquipment = [
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

const airbnbUrls = {
  lasAcacias: 'https://www.airbnb.es/rooms/32063469?source_impression_id=p3_1785370972_P3fO7KbxilO7s506',
  laTranquera: 'https://www.airbnb.es/rooms/30998747?source_impression_id=p3_1785370972_P3p1Ny_qZrrP8E2j',
  delArroyo: 'https://www.airbnb.es/rooms/32042426?source_impression_id=p3_1785370972_P3PBJRb6dK9ULh5C',
};

const lasAcaciasGallery = [
  '/images/optimized/las acacias/portadaacacias.jpg',
  '/images/optimized/las acacias/lasacaciascamamodificada.jpg',
  '/images/optimized/las acacias/20260628_134653.jpg',
  '/images/optimized/las acacias/20260628_134712.jpg',
  '/images/optimized/las acacias/20260628_134724.jpg',
  '/images/optimized/las acacias/20260628_134757.jpg',
  '/images/optimized/las acacias/20260628_134807.jpg',
];

const laTranqueraGallery = [
  '/images/optimized/las tranqueras/20260628_150040.jpg',
  '/images/optimized/las tranqueras/20260628_150132.jpg',
  '/images/optimized/las tranqueras/20260628_150138.jpg',
  '/images/optimized/las tranqueras/20260628_150156.jpg',
  '/images/optimized/las tranqueras/20260628_150237.jpg',
  '/images/optimized/las tranqueras/20260628_150241.jpg',
  '/images/optimized/las tranqueras/20260628_150255.jpg',
  '/images/optimized/las tranqueras/20260628_150305.jpg',
  '/images/optimized/las tranqueras/20260628_150420.jpg',
  '/images/optimized/las tranqueras/20260628_150434.jpg',
];

const delArroyoGallery = [
  '/images/optimized/arroyo/20260628_151428.jpg',
  '/images/optimized/arroyo/20260628_151441.jpg',
  '/images/optimized/arroyo/20260628_151446.jpg',
  '/images/optimized/arroyo/20260628_151453.jpg',
  '/images/optimized/arroyo/20260628_151500.jpg',
  '/images/optimized/arroyo/20260628_151506.jpg',
  '/images/optimized/arroyo/20260628_151532.jpg',
  '/images/optimized/arroyo/20260628_151536.jpg',
  '/images/optimized/arroyo/20260628_151550.jpg',
  '/images/optimized/arroyo/20260628_151602.jpg',
  '/images/optimized/arroyo/20260628_151611.jpg',
  '/images/optimized/arroyo/20260628_151617.jpg',
  '/images/optimized/arroyo/20260628_151655.jpg',
  '/images/optimized/arroyo/20260628_151658.jpg',
];

const delParqueGallery = [
  '/images/optimized/del parque/20260628_145518.jpg',
  '/images/optimized/del parque/20260628_145531.jpg',
  '/images/optimized/del parque/20260628_145548.jpg',
  '/images/optimized/del parque/20260628_145750.jpg',
  '/images/optimized/del parque/20260628_145804.jpg',
  '/images/optimized/del parque/20260628_145816.jpg',
  '/images/optimized/del parque/20260628_145950.jpg',
  '/images/optimized/del parque/20260628_145958.jpg',
];

export const spaces: Space[] = [
  {
    id: 'las-acacias',
    name: 'Las Acacias',
    description:
      'Departamento equipado para una estadia practica y comoda. Ideal para parejas, familias chicas o grupos de hasta 3 personas.',
    image: lasAcaciasGallery[0],
    gallery: lasAcaciasGallery,
    capacity: 'Hasta 3 personas',
    services: departmentEquipment,
    category: 'Departamento',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '3 personas',
    accessibility: 'Consultar',
    coverage: 'Equipado',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
    airbnbUrl: airbnbUrls.lasAcacias,
  },
  {
    id: 'la-tranquera',
    name: 'La Tranquera',
    description:
      'Departamento para 3 personas con la misma equipacion que Las Acacias, pensado para resolver lo necesario sin complicaciones.',
    image: laTranqueraGallery[0],
    gallery: laTranqueraGallery,
    capacity: 'Hasta 3 personas',
    services: departmentEquipment,
    category: 'Departamento',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '3 personas',
    accessibility: 'Consultar',
    coverage: 'Equipado',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
    airbnbUrl: airbnbUrls.laTranquera,
  },
  {
    id: 'del-arroyo',
    name: 'Del Arroyo',
    description:
      'Departamento para 4 personas, equipado con cocina, ropa blanca de uso interno y climatizacion frio/calor.',
    image: delArroyoGallery[0],
    gallery: delArroyoGallery,
    capacity: 'Hasta 4 personas',
    services: departmentEquipment,
    category: 'Departamento',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '4 personas',
    accessibility: 'Consultar',
    coverage: 'Equipado',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
    airbnbUrl: airbnbUrls.delArroyo,
  },
  {
    id: 'del-parque',
    name: 'Del Parque',
    description:
      'Departamento para 4 personas con la misma equipacion que Del Arroyo y acceso simple a los espacios comunes.',
    image: delParqueGallery[0],
    gallery: delParqueGallery,
    capacity: 'Hasta 4 personas',
    services: departmentEquipment,
    category: 'Departamento',
    surface: 'Sommier doble + cucheta',
    recommendedFor: '4 personas',
    accessibility: 'Consultar',
    coverage: 'Equipado',
    proximity: 'Dentro de la finca',
    price: 'Consultar disponibilidad',
  },
];
