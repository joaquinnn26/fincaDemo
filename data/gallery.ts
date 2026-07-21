export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  { src: '/images/real-villa.jpg', title: 'Entrada principal', category: 'Naturaleza', description: 'Vista exterior de una villa mediterránea con piscina.' },
  { src: '/images/real-garden.jpg', title: 'Ceremonia exterior', category: 'Jardines', description: 'Montaje real para ceremonia al aire libre.' },
  { src: '/images/real-couple.jpg', title: 'Boda en finca', category: 'Bodas', description: 'Pareja en un entorno de finca elegante.' },
  { src: '/images/real-pool.jpg', title: 'Piscina panorámica', category: 'Piscina', description: 'Piscina mediterránea con vistas abiertas.' },
  { src: '/images/real-reception.jpg', title: 'Recepción', category: 'Eventos', description: 'Mesa larga preparada para celebración.' },
  { src: '/images/real-room.jpg', title: 'Habitación boutique', category: 'Habitaciones', description: 'Alojamiento cálido con madera natural.' },
  { src: '/images/real-salon.jpg', title: 'Salón para montar', category: 'Eventos', description: 'Interior amplio preparado para montaje flexible.' },
  { src: '/images/real-couple.jpg', title: 'Retrato de boda', category: 'Bodas', description: 'Escena real de boda en jardines.' },
];
