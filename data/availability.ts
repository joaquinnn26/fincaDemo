export type AvailabilitySlot = {
  date: string;
  status: 'available' | 'busy' | 'inquiry' | 'high-season';
  label: string;
};

export const availability: AvailabilitySlot[] = [
  { date: '2026-07-24', status: 'available', label: 'Disponible' },
  { date: '2026-07-25', status: 'busy', label: 'Ocupado' },
  { date: '2026-08-01', status: 'inquiry', label: 'Bajo consulta' },
  { date: '2026-08-15', status: 'high-season', label: 'Temporada alta' },
  { date: '2026-09-10', status: 'available', label: 'Disponible' },
  { date: '2026-10-02', status: 'available', label: 'Disponible' },
];
