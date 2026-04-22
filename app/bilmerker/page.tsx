import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { brands } from '@/app/lib/brands';

export const metadata: Metadata = {
    title: 'Bilmerker vi reparerer – VW, BMW, Mercedes, Tesla, Volvo m.fl. | Nittedal Auto',
    description:
        'Vi reparerer alle bilmerker: Volkswagen, Audi, BMW, Mercedes, Toyota, Volvo, Tesla, Hyundai, Kia, Ford og mange flere. Sertifiserte teknikere, originaldeler og full garanti.',
    keywords: ['VW verksted', 'BMW verksted', 'Mercedes verksted', 'Tesla service', 'Volvo verksted Nittedal'],
};

export default function BilmerkerOversikt() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="bilmerker" />
            <Breadcrumbs items={[{ label: 'Bilmerker' }]} />

            <main style={{ maxWidth: '1200px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '50px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Spesialkompetanse
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>
                        Vi reparerer alle bilmerker
                    </h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '0', maxWidth: '800px', lineHeight: 1.6 }}>
                        Fra tyske premium-biler til japanske familiebiler og amerikanske elbiler. Vi har diagnoseverktøy,
                        reservedeler og kompetanse til alle store merker – ofte til halvparten av prisen hos merkeverksted.
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                    {brands.map((b) => (
                        <Link
                            key={b.slug}
                            href={`/bilmerker/${b.slug}`}
                            style={{
                                padding: '28px',
                                backgroundColor: '#fafafa',
                                border: '1px solid #eaeaea',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                color: '#111',
                            }}
                        >
                            <h3 style={{ fontSize: '22px', margin: '0 0 6px 0' }}>{b.name}</h3>
                            <p style={{ margin: '0 0 12px 0', color: '#888', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {b.country}
                            </p>
                            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6, margin: 0 }}>
                                {b.description.slice(0, 130)}...
                            </p>
                            <p style={{ marginTop: '14px', color: '#e63946', fontWeight: 700, fontSize: '13px' }}>
                                Se {b.name}-spesialitet →
                            </p>
                        </Link>
                    ))}
                </div>
            </main>

            <CTASection
                heading="Bilmerket ditt ikke på listen?"
                text="Vi tar imot alle merker – også nisjebiler. Kontakt oss og fortell hva du kjører."
            />
            <Footer />
        </div>
    );
}
