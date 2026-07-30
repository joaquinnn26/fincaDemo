export type Testimonial = {
  name: string;
  eventType: string;
  quote: string;
  rating: number;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Clara y Tomas',
    eventType: 'Escapada familiar',
    quote: 'El lugar transmite calma desde que llegas. Los departamentos son comodos y el entorno invita a descansar.',
    rating: 5,
    date: 'Junio 2024',
  },
  {
    name: 'Marta L.',
    eventType: 'Fin de semana rural',
    quote: 'Nos encanto el parque, la pileta y la posibilidad de pasar tiempo al aire libre en familia.',
    rating: 5,
    date: 'Mayo 2024',
  },
  {
    name: 'Alejandro R.',
    eventType: 'Descanso y caminatas',
    quote: 'La informacion fue clara, el contacto rapido y la estadia muy tranquila. Volveriamos.',
    rating: 5,
    date: 'Abril 2024',
  },
];
