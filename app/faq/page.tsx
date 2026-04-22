import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { faqs } from '@/app/lib/faqs';

export const metadata: Metadata = {
    title: 'Ofte stilte spørsmål (FAQ) | Nittedal Auto',
    description:
        'Svar på de mest stilte spørsmålene om bestilling, priser, garanti, forsikring og bilmerker. Finner du ikke svaret? Ta kontakt med oss.',
};

export default function FAQSide() {
    const grouped = faqs.reduce<Record<string, typeof faqs>>((acc, f) => {
        if (!acc[f.category]) acc[f.category] = [];
        acc[f.category].push(f);
        return acc;
    }, {});

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header active="faq" />
            <Breadcrumbs items={[{ label: 'FAQ' }]} />

            <main style={{ maxWidth: '900px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '50px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Støtte
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>
                        Ofte stilte spørsmål
                    </h1>
                    <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.6 }}>
                        Her finner du svar på de mest vanlige spørsmålene om bestilling, priser, garanti, forsikring og
                        bilmerker. Finner du ikke det du leter etter? Ring oss eller bruk kontaktskjemaet.
                    </p>
                </header>

                {Object.entries(grouped).map(([cat, items]) => (
                    <section key={cat} style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', margin: '0 0 16px 0', paddingBottom: '10px', borderBottom: '1px solid #eaeaea' }}>
                            {cat}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {items.map((f, i) => (
                                <details
                                    key={i}
                                    style={{
                                        border: '1px solid #eaeaea',
                                        borderRadius: '6px',
                                        padding: '20px 24px',
                                        backgroundColor: '#fafafa',
                                    }}
                                >
                                    <summary style={{ fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}>{f.q}</summary>
                                    <p style={{ marginTop: '12px', fontSize: '15px', color: '#444', lineHeight: 1.7 }}>{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            <CTASection
                heading="Fant du ikke svaret?"
                text="Ring oss på 67 00 00 00, eller send melding via kontaktskjemaet."
                primaryLabel="Kontakt oss"
                primaryHref="/kontakt"
            />
            <Footer />
        </div>
    );
}
