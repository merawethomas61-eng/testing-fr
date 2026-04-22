import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { blogPosts, getPostBySlug } from '@/app/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'Ikke funnet' };
    return {
        title: `${post.title} | Nittedal Auto`,
        description: post.excerpt,
        alternates: { canonical: `/blogg/${post.slug}` },
    };
}

export default async function BloggInnlegg({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const related = post.relatedSlugs
        .map((s) => getPostBySlug(s))
        .filter((x): x is NonNullable<typeof x> => Boolean(x));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { '@type': 'Organization', name: 'Nittedal Auto' },
        publisher: { '@type': 'Organization', name: 'Nittedal Auto' },
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header active="blogg" />
            <Breadcrumbs items={[{ label: 'Blogg', href: '/blogg' }, { label: post.title }]} />

            <article style={{ maxWidth: '780px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '40px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        {post.category} · {post.readMinutes} min lesetid
                    </p>
                    <h1 style={{ fontSize: '42px', fontWeight: 800, margin: '14px 0 20px 0', lineHeight: 1.2 }}>
                        {post.title}
                    </h1>
                    <p style={{ fontSize: '20px', color: '#555', lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                    <p style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>
                        Publisert {new Date(post.date).toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })} av{' '}
                        {post.author}
                    </p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '17px', lineHeight: 1.8, color: '#222' }}>
                    {post.content.map((block, i) => (
                        <div key={i}>
                            {block.heading && (
                                <h2 style={{ fontSize: '24px', margin: '10px 0 16px 0', fontWeight: 800 }}>{block.heading}</h2>
                            )}
                            {block.paragraphs.map(
                                (p, j) =>
                                    p && (
                                        <p key={j} style={{ margin: '0 0 16px 0' }}>
                                            {p}
                                        </p>
                                    ),
                            )}
                            {block.list && (
                                <ul style={{ paddingLeft: '22px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {block.list.map((li, k) => (
                                        <li key={k}>{li}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {post.tags.map((t) => (
                        <span
                            key={t}
                            style={{
                                backgroundColor: '#f4f4f5',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                fontSize: '13px',
                                color: '#555',
                            }}
                        >
                            #{t}
                        </span>
                    ))}
                </div>
            </article>

            {related.length > 0 && (
                <section style={{ maxWidth: '1100px', margin: '60px auto 0 auto', padding: '0 20px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 24px 0' }}>Les også</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/blogg/${r.slug}`}
                                style={{
                                    padding: '24px',
                                    backgroundColor: '#fafafa',
                                    border: '1px solid #eaeaea',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color: '#111',
                                }}
                            >
                                <p style={{ margin: 0, fontSize: '12px', color: '#e63946', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {r.category}
                                </p>
                                <h3 style={{ fontSize: '18px', margin: '8px 0 6px 0' }}>{r.title}</h3>
                                <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: 1.5 }}>{r.excerpt.slice(0, 120)}...</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <div style={{ marginTop: '60px' }}>
                <CTASection
                    heading="Klar for å ta vare på bilen din?"
                    text="Bestill time på vårt verksted i Nittedal, eller ring for gratis råd."
                />
            </div>
            <Footer />
        </div>
    );
}
