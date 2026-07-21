export type Testimonial = {
  name: string;
  eventType: string;
  quote: string;
  rating: number;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Clara & Tomás',
    eventType: 'Boda campestre',
    quote: 'Todo fue impecable, desde la atención hasta la decoración. El lugar respiraba elegancia y calma.',
    rating: 5,
    date: 'Junio 2024',
  },
  {
    name: 'Marta L.',
    eventType: 'Celebración familiar',
    quote: 'Un entorno precioso para reunir a toda la familia. Nos sentimos acompañados en cada detalle.',
    rating: 5,
    date: 'Mayo 2024',
  },
  {
    name: 'Alejandro R.',
    eventType: 'Evento corporativo',
    quote: 'La finca transmite exclusividad, funcionalidad y una experiencia muy cuidada para nuestros invitados.',
    rating: 5,
    date: 'Abril 2024',
  },
];
