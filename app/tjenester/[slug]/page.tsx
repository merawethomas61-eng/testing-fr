import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { services, getServiceBySlug } from '@/app/lib/services';
import { locations } from '@/app/lib/locations';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return { title: 'Ikke funnet' };
    return {
        title: `${service.title} – Fra ${service.priceFrom} | Nittedal Auto`,
        description: `${service.tagline}. ${service.intro.slice(0, 120)}...`,
        keywords: service.keywords,
        alternates: { canonical: `/tjenester/${service.slug}` },
    };
}

export default async function TjenestePage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const related = service.relatedSlugs
        .map((s) => getServiceBySlug(s))
        .filter((x): x is NonNullable<typeof x> => Boolean(x));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        provider: {
            '@type': 'AutoRepair',
            name: 'Nittedal Auto',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hadelandsveien 123',
                addressLocality: 'Nittedal',
                postalCode: '1482',
                addressCountry: 'NO',
            },
            telephone: '+4767000000',
        },
        areaServed: 'Nittedal, Hakadal, Gjerdrum, Oslo',
        description: service.intro,
        offers: { '@type': 'Offer', price: service.priceFrom, priceCurrency: 'NOK' },
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header active="tjenester" />
            <Breadcrumbs
                items={[{ label: 'Tjenester', href: '/tjenester' }, { label: service.shortTitle }]}
            />

            <main style={{ maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <section style={{ marginBottom: '60px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Tjeneste
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0', lineHeight: 1.1 }}>
                        {service.title}
                    </h1>
                    <p style={{ fontSize: '20px', color: '#555', margin: 0, maxWidth: '760px' }}>{service.tagline}</p>
                    <div style={{ display: 'flex', gap: '30px', marginTop: '32px', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ margin: 0, fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Pris
                            </p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '24px', fontWeight: 800, color: '#e63946' }}>
                                Fra {service.priceFrom}
                            </p>
                        </div>
                        <div>
                            <p style={{ margin: 0, fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Tidsbruk
                            </p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '24px', fontWeight: 800 }}>{service.duration}</p>
                        </div>
                        <div>
                            <p style={{ margin: 0, fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Garanti
                            </p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '24px', fontWeight: 800 }}>24 mnd</p>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <div>
                            <h2 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>Om tjenesten</h2>
                            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#333', marginTop: 0 }}>{service.intro}</p>
                            {service.description.map((p, i) => (
                                <p key={i} style={{ fontSize: '16px', lineHeight: 1.8, color: '#444' }}>
                                    {p}
                                </p>
                            ))}
                        </div>
                        <aside
                            style={{
                                backgroundColor: '#fafafa',
                                padding: '32px',
                                borderRadius: '8px',
                                border: '1px solid #eaeaea',
                                alignSelf: 'start',
                            }}
                        >
                            <h3 style={{ fontSize: '20px', margin: '0 0 16px 0' }}>Bestill {service.shortTitle.toLowerCase()}</h3>
                            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.6 }}>
                                Få fastpris før vi starter. Vi tar imot bestilling 24/7.
                            </p>
                            <Link
                                href="/bestill"
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    backgroundColor: '#e63946',
                                    color: '#fff',
                                    padding: '16px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    marginTop: '16px',
                                }}
                            >
                                Bestill time
                            </Link>
                            <Link
                                href="tel:+4767000000"
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    border: '1px solid #111',
                                    color: '#111',
                                    padding: '14px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    marginTop: '12px',
                                }}
                            >
                                Ring 67 00 00 00
                            </Link>
                        </aside>
                    </div>
                </section>

                <section style={{ marginBottom: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div>
                        <h2 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>Hva inngår?</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {service.included.map((item, i) => (
                                <li
                                    key={i}
                                    style={{
                                        paddingLeft: '28px',
                                        position: 'relative',
                                        fontSize: '16px',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    <span style={{ position: 'absolute', left: 0, top: 0, color: '#e63946', fontWeight: 800 }}>
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>Hvorfor velge oss?</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {service.benefits.map((item, i) => (
                                <li
                                    key={i}
                                    style={{
                                        paddingLeft: '28px',
                                        position: 'relative',
                                        fontSize: '16px',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    <span style={{ position: 'absolute', left: 0, top: 0, color: '#111', fontWeight: 800 }}>★</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '28px', margin: '0 0 24px 0' }}>Ofte stilte spørsmål</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {service.faq.map((f, i) => (
                            <details
                                key={i}
                                style={{
                                    border: '1px solid #eaeaea',
                                    borderRadius: '6px',
                                    padding: '20px 24px',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <summary style={{ fontWeight: 700, fontSize: '17px', cursor: 'pointer' }}>{f.q}</summary>
                                <p style={{ marginTop: '12px', fontSize: '16px', color: '#444', lineHeight: 1.7 }}>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <section style={{ marginBottom: '60px', padding: '40px', backgroundColor: '#f4f4f5', borderRadius: '8px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 20px 0' }}>
                        {service.shortTitle} for kunder i Nittedal og omegn
                    </h2>
                    <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.7, maxWidth: '800px' }}>
                        Vi tar imot kunder fra hele Nittedal kommune og nabokommunene. Velg område under for å se mer om
                        kjøretider og lokale fordeler:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                        {locations.map((loc) => (
                            <Link
                                key={loc.slug}
                                href={`/omrader/${loc.slug}`}
                                style={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #ddd',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    color: '#111',
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                }}
                            >
                                {service.shortTitle} {loc.name}
                            </Link>
                        ))}
                    </div>
                </section>

                {related.length > 0 && (
                    <section style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '28px', margin: '0 0 24px 0' }}>Relaterte tjenester</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/tjenester/${r.slug}`}
                                    style={{
                                        padding: '24px',
                                        border: '1px solid #eaeaea',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        color: '#111',
                                    }}
                                >
                                    <h3 style={{ fontSize: '18px', margin: '0 0 6px 0' }}>{r.shortTitle}</h3>
                                    <p style={{ fontSize: '14px', color: '#e63946', margin: '0 0 8px 0', fontWeight: 700 }}>
                                        Fra {r.priceFrom}
                                    </p>
                                    <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{r.tagline}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <CTASection
                heading={`Bestill ${service.shortTitle.toLowerCase()} i dag`}
                text="Få fastpris før vi starter arbeidet. Rask time og full garanti."
            />
            <Footer />
        </div>
    );
}
