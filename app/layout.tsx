import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finca Carranza Sosa | Bodas, eventos y escapadas rurales',
  description:
    'Una finca de lujo para bodas, celebraciones privadas y escapadas rurales en plena naturaleza.',
  keywords: ['finca para bodas', 'finca para eventos', 'alojamiento rural', 'bodas en la naturaleza'],
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Finca Carranza Sosa',
    description: 'Un espacio exclusivo para bodas, celebraciones y escapadas rurales.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finca Carranza Sosa',
    description: 'Un espacio exclusivo para bodas, celebraciones y escapadas rurales.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
