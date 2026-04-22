import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { services } from '@/app/lib/services';

export const metadata: Metadata = {
    title: 'Tjenester og priser | Nittedal Auto – Komplett bilverksted',
    description:
        'EU-kontroll, hovedservice, bremser, dekkhotell, elbil-service og mye mer. Vi fikser alle bilmerker med fastpris og full garanti. Se hele listen over tjenester og priser.',
    keywords: [
        'bilverksted Nittedal',
        'EU-kontroll',
        'hovedservice',
        'dekkhotell',
        'elbil verksted',
        'bilservice',
    ],
};

export default function TjenesterOversikt() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="tjenester" />
            <Breadcrumbs items={[{ label: 'Tjenester' }]} />

            <main style={{ maxWidth: '1200px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#e63946', margin: '0 0 10px 0' }}>
                        Vår Ekspertise
                    </h2>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: 0, color: '#111' }}>
                        Tjenester & priser
                    </h1>
                    <p style={{ fontSize: '20px', color: '#555', maxWidth: '720px', marginTop: '20px', lineHeight: 1.6 }}>
                        Vi tilbyr et komplett spekter av verkstedtjenester for alle bilmerker i Nittedal og omegn.
                        Fastpris før vi starter, 24 måneders garanti på arbeid, og en ærlig diagnose du kan stole på.
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                        marginBottom: '80px',
                    }}
                >
                    {services.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/tjenester/${s.slug}`}
                            style={{
                                padding: '32px',
                                backgroundColor: '#fafafa',
                                border: '1px solid #eaeaea',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                color: '#111',
                                display: 'block',
                                transition: 'all 0.2s',
                            }}
                        >
                            <h3 style={{ fontSize: '22px', margin: '0 0 8px 0', fontWeight: 700 }}>{s.shortTitle}</h3>
                            <p style={{ fontSize: '13px', fontWeight: 700, color: '#e63946', margin: '0 0 16px 0' }}>
                                Fra {s.priceFrom} · {s.duration}
                            </p>
                            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.6, margin: 0 }}>{s.tagline}</p>
                            <p style={{ marginTop: '16px', color: '#e63946', fontWeight: 600, fontSize: '14px' }}>
                                Les mer →
                            </p>
                        </Link>
                    ))}
                </div>

                <section
                    style={{
                        padding: '60px',
                        backgroundColor: '#111',
                        color: '#fff',
                        borderRadius: '8px',
                        marginBottom: '80px',
                    }}
                >
                    <h2 style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 20px 0' }}>
                        Alt du trenger – på ett sted
                    </h2>
                    <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#ccc', maxWidth: '800px' }}>
                        Vi er et komplett bilverksted som kan ta imot bilen din for service, reparasjon, EU-kontroll,
                        dekkskifte og spesialistoppdrag. Vi bruker originaldeler og premium-kvalitetsdeler fra
                        anerkjente merker som Bosch, Brembo, Sachs, Valeo og Gates. Alt arbeid utføres av erfarne
                        teknikere med full dokumentasjon.
                    </p>
                </section>
            </main>

            <CTASection
                heading="Klar for å bestille?"
                text="Bruk bestillingsskjemaet, eller ring oss direkte. Vi gir deg fastpris før vi starter jobben."
            />
            <Footer />
        </div>
    );
}
