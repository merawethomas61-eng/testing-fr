import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { blogPosts } from '@/app/lib/blog';

export const metadata: Metadata = {
    title: 'Bilblogg og guider | Nittedal Auto',
    description:
        'Gratis bil-guider fra erfarne teknikere. EU-kontroll, dekk, elbil-vedlikehold, girkasse, varsellamper og mer – skrevet for norske bilister.',
};

export default function BloggOversikt() {
    const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

    const sorted = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="blogg" />
            <Breadcrumbs items={[{ label: 'Blogg' }]} />

            <main style={{ maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '50px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Kunnskap som lønner seg
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>Bilblogg og guider</h1>
                    <p style={{ fontSize: '20px', color: '#555', maxWidth: '740px', lineHeight: 1.6 }}>
                        Praktiske guider for norske bilister, skrevet av våre egne teknikere. Vi deler kunnskap som
                        forlenger livet til bilen din og sparer deg for penger.
                    </p>
                </header>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    {categories.map((cat) => (
                        <span
                            key={cat}
                            style={{
                                backgroundColor: '#f4f4f5',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '13px',
                                fontWeight: 600,
                            }}
                        >
                            {cat}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '60px' }}>
                    {sorted.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/blogg/${p.slug}`}
                            style={{
                                padding: '28px',
                                backgroundColor: '#fafafa',
                                border: '1px solid #eaeaea',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                color: '#111',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}
                        >
                            <p style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#e63946', fontWeight: 700 }}>
                                {p.category} · {p.readMinutes} min lesetid
                            </p>
                            <h3 style={{ fontSize: '22px', margin: '0', lineHeight: 1.3, fontWeight: 700 }}>{p.title}</h3>
                            <p style={{ fontSize: '15px', color: '#555', margin: 0, lineHeight: 1.6 }}>{p.excerpt}</p>
                            <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>
                                {new Date(p.date).toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })} · {p.author}
                            </p>
                        </Link>
                    ))}
                </div>
            </main>

            <CTASection variant="dark" heading="Trenger du personlig råd?" text="Send oss en melding eller kom innom for en uforpliktende sjekk." />
            <Footer />
        </div>
    );
}
