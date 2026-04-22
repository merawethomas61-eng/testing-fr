import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { brands, getBrandBySlug } from '@/app/lib/brands';
import { services } from '@/app/lib/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);
    if (!brand) return { title: 'Ikke funnet' };
    return {
        title: `${brand.name}-verksted i Nittedal | Service, reparasjon og deler`,
        description: `Spesialkompetanse på ${brand.name}. ${brand.description.slice(0, 120)}`,
        alternates: { canonical: `/bilmerker/${brand.slug}` },
    };
}

export default async function BilmerkePage({ params }: Props) {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);
    if (!brand) notFound();

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="bilmerker" />
            <Breadcrumbs
                items={[{ label: 'Bilmerker', href: '/bilmerker' }, { label: brand.name }]}
            />

            <main style={{ maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <section style={{ marginBottom: '50px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        {brand.country}
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>
                        {brand.name}-verksted i Nittedal
                    </h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '0', maxWidth: '800px', lineHeight: 1.6 }}>
                        {brand.description}
                    </p>
                </section>

                <section style={{ marginBottom: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <div>
                        <h2 style={{ fontSize: '24px', margin: '0 0 16px 0' }}>Vanlige feil og symptomer på {brand.name}</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {brand.commonIssues.map((issue, i) => (
                                <li
                                    key={i}
                                    style={{ paddingLeft: '24px', position: 'relative', fontSize: '15px', lineHeight: 1.6 }}
                                >
                                    <span style={{ position: 'absolute', left: 0, top: 0, color: '#e63946', fontWeight: 800 }}>
                                        ⚠
                                    </span>
                                    {issue}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '24px', margin: '0 0 16px 0' }}>Vår {brand.name}-spesialitet</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {brand.specialties.map((sp, i) => (
                                <li
                                    key={i}
                                    style={{ paddingLeft: '24px', position: 'relative', fontSize: '15px', lineHeight: 1.6 }}
                                >
                                    <span style={{ position: 'absolute', left: 0, top: 0, color: '#111', fontWeight: 800 }}>
                                        ✓
                                    </span>
                                    {sp}
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: '20px', fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                            <strong>Diagnoseverktøy:</strong> {brand.toolNotes}
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '24px', margin: '0 0 16px 0' }}>Populære {brand.name}-modeller vi servicerer</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {brand.popularModels.map((m) => (
                            <span
                                key={m}
                                style={{
                                    backgroundColor: '#f4f4f5',
                                    padding: '10px 18px',
                                    borderRadius: '4px',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                }}
                            >
                                {brand.name} {m}
                            </span>
                        ))}
                    </div>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '24px', margin: '0 0 20px 0' }}>Tjenester for {brand.name}-eiere</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                        {services.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/tjenester/${s.slug}`}
                                style={{
                                    padding: '16px',
                                    border: '1px solid #eaeaea',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    color: '#111',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <p style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{s.shortTitle} for {brand.name}</p>
                                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#e63946' }}>Fra {s.priceFrom}</p>
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
                    <h2 style={{ fontSize: '26px', margin: '0 0 16px 0' }}>Hvorfor uavhengig verksted for {brand.name}?</h2>
                    <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#ccc' }}>
                        Siden 2007 har EU-reguleringen Block Exemption gitt deg rett til å bruke uavhengig verksted uten å
                        miste nybilgarantien. Vi bruker originaldeler eller kvalitetsalternativer, følger produsentens
                        serviceplaner og dokumenterer arbeidet. Du får samme kvalitet til betydelig lavere pris enn hos
                        merkeverksted.
                    </p>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '22px', margin: '0 0 16px 0' }}>Andre bilmerker vi er spesialister på</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {brands
                            .filter((b) => b.slug !== brand.slug)
                            .slice(0, 14)
                            .map((b) => (
                                <Link
                                    key={b.slug}
                                    href={`/bilmerker/${b.slug}`}
                                    style={{
                                        padding: '8px 14px',
                                        border: '1px solid #ddd',
                                        borderRadius: '20px',
                                        textDecoration: 'none',
                                        color: '#333',
                                        fontSize: '13px',
                                    }}
                                >
                                    {b.name}
                                </Link>
                            ))}
                    </div>
                </section>
            </main>

            <CTASection
                heading={`Bestill service på din ${brand.name}`}
                text="Få fastpris før vi starter. Garanti på alt arbeid."
            />
            <Footer />
        </div>
    );
}
