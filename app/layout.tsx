import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finca Carranza Sosa | Alojamiento rural',
  description:
    'Alojamiento rural con cuatro cabanas equipadas, espacios comunes, caminatas, cabalgatas y eventos de trail running.',
  keywords: ['cabanas', 'finca', 'alojamiento rural', 'pileta', 'cabalgatas', 'trail running cerro blanco'],
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Finca Carranza Sosa',
    description: 'Alojamiento rural con cabanas equipadas, espacios comunes y actividades al aire libre.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finca Carranza Sosa',
    description: 'Alojamiento rural con cabanas equipadas, espacios comunes y actividades al aire libre.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
