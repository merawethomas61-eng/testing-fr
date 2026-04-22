import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const BASE = 'https://nittedalauto.no';

export const metadata: Metadata = {
    metadataBase: new URL(BASE),
    title: {
        default: 'Nittedal Auto – Bilverksted i Nittedal for alle bilmerker og elbiler',
        template: '%s | Nittedal Auto',
    },
    description:
        'Ditt lokale bilverksted i Nittedal. EU-kontroll, service, bremser, dekkhotell, elbil-service og mer. Fastpris, 24 måneders garanti og ærlige råd.',
    keywords: [
        'bilverksted Nittedal',
        'EU-kontroll Nittedal',
        'bilservice Nittedal',
        'elbil verksted',
        'dekkhotell Nittedal',
        'bilmekaniker Nittedal',
        'Nittedal Auto',
    ],
    authors: [{ name: 'Nittedal Auto' }],
    openGraph: {
        type: 'website',
        locale: 'nb_NO',
        url: BASE,
        siteName: 'Nittedal Auto',
        title: 'Nittedal Auto – Bilverksted i Nittedal',
        description:
            'Ditt lokale bilverksted i Nittedal. EU-kontroll, service, bremser, dekkhotell, elbil-service og mer.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nittedal Auto – Bilverksted i Nittedal',
        description:
            'Ditt lokale bilverksted i Nittedal. EU-kontroll, service, bremser, dekkhotell, elbil-service og mer.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    alternates: { canonical: BASE },
};

const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Nittedal Auto',
    url: BASE,
    telephone: '+4767000000',
    priceRange: '$$',
    image: `${BASE}/opengraph-image.jpg`,
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hadelandsveien 123',
        addressLocality: 'Nittedal',
        postalCode: '1482',
        addressRegion: 'Viken',
        addressCountry: 'NO',
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:30',
            closes: '16:00',
        },
    ],
    areaServed: ['Nittedal', 'Hakadal', 'Gjerdrum', 'Lillestrøm', 'Oslo'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="nb" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
