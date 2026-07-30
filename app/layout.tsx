import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://joaquinnn26.github.io/fincaDemo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Finca Carranza Sosa | Alojamiento rural en Cordoba',
    template: '%s | Finca Carranza Sosa',
  },
  description:
    'Finca Carranza Sosa ofrece alojamiento rural con departamentos equipados, parque arbolado, pileta, quincho, asadores, caminatas y paseos a caballo.',
  applicationName: 'Finca Carranza Sosa',
  authors: [{ name: 'Finca Carranza Sosa' }],
  creator: 'Finca Carranza Sosa',
  publisher: 'Finca Carranza Sosa',
  keywords: [
    'Finca Carranza Sosa',
    'alojamiento rural',
    'departamentos rurales',
    'finca en Cordoba',
    'alojamiento con pileta',
    'quincho y asadores',
    'paseos a caballo',
    'cabanas rurales',
    'turismo rural',
    'Grand Trail Cerro Blanco',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Finca Carranza Sosa | Alojamiento rural',
    description:
      'Departamentos equipados, parque, pileta, quincho, asadores y actividades al aire libre en un entorno natural.',
    url: '/',
    siteName: 'Finca Carranza Sosa',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/optimized/hero-finca.jpg',
        width: 1200,
        height: 630,
        alt: 'Finca Carranza Sosa rodeada de naturaleza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finca Carranza Sosa | Alojamiento rural',
    description:
      'Alojamiento rural con departamentos equipados, pileta, quincho, asadores y actividades al aire libre.',
    images: ['/images/optimized/hero-finca.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Finca Carranza Sosa',
  url: siteUrl,
  description:
    'Alojamiento rural con departamentos equipados, espacios comunes, pileta, quincho, asadores y actividades al aire libre.',
  image: `${siteUrl}/images/optimized/hero-finca.jpg`,
  telephone: '+541158883035',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Departamentos equipados', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pileta', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Quincho', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Asadores', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Paseos a caballo', value: true },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -32.0665817,
    longitude: -64.452774,
  },
  sameAs: [
    'https://www.instagram.com/fincacarranzasosa/',
    'https://www.facebook.com/fincacarranzasosa/about/',
    'https://maps.app.goo.gl/YEUGUAHY5cZQKg8BA',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
