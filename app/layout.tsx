import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lab-martinezruiz.vercel.app'),
  title: 'Laboratorio Clínico Martínez Ruiz | Resultados precisos y confiables',
  description:
    'Análisis clínicos en El Paraíso, Honduras. Química sanguínea, hematología, parasitología, uroanálisis, bacteriología y pruebas especiales.',
  openGraph: {
    images: [{ url: '/logo_v1.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/logo_v1.jpg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
