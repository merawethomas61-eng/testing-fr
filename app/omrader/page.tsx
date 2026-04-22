import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { locations } from '@/app/lib/locations';

export const metadata: Metadata = {
    title: 'Bilverksted i Nittedal og omegn | Nittedal Auto',
    description:
        'Vi dekker hele Nittedal, Hakadal, Gjerdrum, Lillestrøm, Skedsmo, Oslo nord og Hadeland. Se lokale fordeler og bestill time der du bor.',
    keywords: ['bilverksted Nittedal', 'bilverksted Hakadal', 'bilverksted Gjerdrum', 'bilverksted Oslo nord'],
};

export default function OmraderOversikt() {
    const grouped = locations.reduce<Record<string, typeof locations>>((acc, loc) => {
        if (!acc[loc.region]) acc[loc.region] = [];
        acc[loc.region].push(loc);
        return acc;
    }, {});

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="omrader" />
            <Breadcrumbs items={[{ label: 'Områder vi dekker' }]} />

            <main style={{ maxWidth: '1200px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '50px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Lokalt og ekte
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 0 0' }}>
                        Bilverksted i Nittedal og omegn
                    </h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '20px', maxWidth: '780px', lineHeight: 1.6 }}>
                        Vi tar imot kunder fra hele Nittedal-dalen og nærliggende kommuner. Velg området ditt under for å se
                        kjørevei, lokale tilbud og hvilke tjenester som er mest etterspurt akkurat der du bor.
                    </p>
                </header>

                {Object.entries(grouped).map(([region, locs]) => (
                    <section key={region} style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '22px', margin: '0 0 24px 0', paddingBottom: '10px', borderBottom: '1px solid #eaeaea' }}>
                            {region}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            {locs.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    href={`/omrader/${loc.slug}`}
                                    style={{
                                        padding: '28px',
                                        backgroundColor: '#fafafa',
                                        border: '1px solid #eaeaea',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        color: '#111',
                                    }}
                                >
                                    <h3 style={{ fontSize: '22px', margin: '0 0 6px 0' }}>Bilverksted {loc.name}</h3>
                                    <p style={{ margin: '0 0 12px 0', color: '#e63946', fontWeight: 700, fontSize: '13px' }}>
                                        {loc.distanceKm === 0 ? 'Her ligger vi' : `${loc.distanceKm} km · ${loc.driveMinutes} min`}
                                    </p>
                                    <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6, margin: 0 }}>
                                        {loc.description.slice(0, 130)}...
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            <CTASection
                heading="Finner du ikke ditt område?"
                text="Vi tar imot kunder fra hele Stor-Oslo. Kontakt oss for henting og bringing."
            />
            <Footer />
        </div>
    );
}
