import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://laboratorio.com'),
  title: 'Laboratorio Clínico | Exámenes Médicos Profesionales',
  description: 'Laboratorio clínico especializado en exámenes médicos con tecnología de vanguardia y resultados confiables.',
  openGraph: {
    images: [
      {
        url: '/logo_v1.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/logo_v1.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
