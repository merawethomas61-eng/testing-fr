import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { locations, getLocationBySlug } from '@/app/lib/locations';
import { services, getServiceBySlug } from '@/app/lib/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const loc = getLocationBySlug(slug);
    if (!loc) return { title: 'Ikke funnet' };
    return {
        title: `Bilverksted ${loc.name} – Nittedal Auto | EU-kontroll, service og reparasjon`,
        description: `Pålitelig bilverksted for innbyggere i ${loc.name}. Kun ${loc.distanceKm} km unna. EU-kontroll, service, bremser, dekk og elbil-service for alle bilmerker.`,
        alternates: { canonical: `/omrader/${loc.slug}` },
    };
}

export default async function OmradePage({ params }: Props) {
    const { slug } = await params;
    const loc = getLocationBySlug(slug);
    if (!loc) notFound();

    const popular = loc.popularServices
        .map((s) => getServiceBySlug(s))
        .filter((x): x is NonNullable<typeof x> => Boolean(x));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: `Nittedal Auto – bilverksted for ${loc.name}`,
        image: 'https://nittedalauto.no/opengraph-image.jpg',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hadelandsveien 123',
            addressLocality: 'Nittedal',
            postalCode: '1482',
            addressRegion: 'Viken',
            addressCountry: 'NO',
        },
        areaServed: { '@type': 'City', name: loc.name },
        telephone: '+4767000000',
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header active="omrader" />
            <Breadcrumbs
                items={[{ label: 'Områder', href: '/omrader' }, { label: loc.name }]}
            />

            <main style={{ maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <section style={{ marginBottom: '50px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Bilverksted for {loc.region}
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0', lineHeight: 1.1 }}>
                        Bilverksted i {loc.name}
                    </h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '0', maxWidth: '800px', lineHeight: 1.6 }}>
                        {loc.description}
                    </p>
                    <div style={{ display: 'flex', gap: '40px', marginTop: '32px', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ margin: 0, fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Avstand
                            </p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '24px', fontWeight: 800 }}>
                                {loc.distanceKm === 0 ? 'Her ligger vi' : `${loc.distanceKm} km`}
                            </p>
                        </div>
                        <div>
                            <p style={{ margin: 0, fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Kjøretid
                            </p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '24px', fontWeight: 800 }}>
                                {loc.driveMinutes === 0 ? '0 min' : `${loc.driveMinutes} min`}
                            </p>
                        </div>
                        <div>
                            <p style={{ margin: 0, fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Postnummer
                            </p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '24px', fontWeight: 800 }}>{loc.zip}</p>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '28px', margin: '0 0 16px 0' }}>Transporttips</h2>
                    <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#444' }}>{loc.travelTip}</p>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>Nabolag og områder vi dekker i {loc.name}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {loc.neighborhoods.map((n) => (
                            <span
                                key={n}
                                style={{
                                    backgroundColor: '#f4f4f5',
                                    padding: '8px 14px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                }}
                            >
                                {n}
                            </span>
                        ))}
                    </div>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>Populære tjenester for kunder fra {loc.name}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                        {popular.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/tjenester/${s.slug}`}
                                style={{
                                    padding: '24px',
                                    backgroundColor: '#fafafa',
                                    border: '1px solid #eaeaea',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color: '#111',
                                }}
                            >
                                <h3 style={{ fontSize: '18px', margin: '0 0 6px 0' }}>{s.shortTitle}</h3>
                                <p style={{ fontSize: '14px', color: '#e63946', margin: '0 0 8px 0', fontWeight: 700 }}>
                                    Fra {s.priceFrom}
                                </p>
                                <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: 1.6 }}>{s.tagline}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                <section
                    style={{
                        padding: '40px',
                        backgroundColor: '#111',
                        color: '#fff',
                        borderRadius: '8px',
                        marginBottom: '50px',
                    }}
                >
                    <h2 style={{ fontSize: '26px', margin: '0 0 16px 0' }}>Vi er ditt lokale alternativ for {loc.name}</h2>
                    <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#ccc' }}>
                        Mange velger oss fordi vi gir ærlig diagnose og ekte fastpris. Vi har mange faste kunder fra{' '}
                        {loc.name}-området og kjenner veiene og kjøreforholdene deres godt. Skulle du trenge det, kan vi
                        også hjelpe med henting og bringing.
                    </p>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>Alle våre tjenester for {loc.name}</h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '10px',
                        }}
                    >
                        {services.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/tjenester/${s.slug}`}
                                style={{
                                    padding: '14px 16px',
                                    border: '1px solid #eaeaea',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    color: '#333',
                                    fontSize: '14px',
                                }}
                            >
                                {s.shortTitle} i {loc.name}
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            <CTASection
                heading={`Bestill time fra ${loc.name}`}
                text="Få en ærlig diagnose og fastpris. Lånebil kan bestilles ved lengre reparasjoner."
            />
            <Footer />
        </div>
    );
}
