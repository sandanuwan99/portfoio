import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#080b12',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Janitha Sandanuwan | Software Engineer',
  description:
    'Software Engineer specializing in Java, Spring Boot, Next.js, TypeScript, and Microsoft SQL Server. Experienced in enterprise ERP, financial workflows, and distributed microservices.',
  keywords: [
    'Janitha Sandanuwan',
    'Software Engineer',
    'Full-Stack Developer',
    'Java Developer',
    'Spring Boot Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Microsoft SQL Server',
    'Enterprise Software',
    'Clean Architecture',
    'Microservices',
    'Azure DevOps',
    'Sri Lanka Software Engineer',
  ],
  authors: [{ name: 'Janitha Sandanuwan', url: 'https://github.com/sandanuwan99' }],
  creator: 'Janitha Sandanuwan',
  metadataBase: new URL('https://janitha-sandanuwan.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://janitha-sandanuwan.dev',
    title: 'Janitha Sandanuwan | Software Engineer',
    description:
      'Building reliable, scalable software systems with Java, Spring Boot, Next.js, and Microsoft SQL Server.',
    siteName: 'Janitha Sandanuwan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janitha Sandanuwan | Software Engineer',
    description:
      'Building reliable, scalable software systems with Java, Spring Boot, Next.js, and Microsoft SQL Server.',
    creator: '@sandanuwan99',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080b12] text-slate-100 font-sans antialiased selection:bg-sky-900/60 selection:text-white">
        {children}
      </body>
    </html>
  );
}
