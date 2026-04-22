import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
    title: 'Takk for din bestilling | Nittedal Auto',
    description: 'Vi har mottatt din forespørsel og kontakter deg innen kort tid.',
    robots: { index: false, follow: false },
};

export default function TakkSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header />
            <main
                style={{
                    maxWidth: '700px',
                    margin: '80px auto',
                    padding: '60px 30px',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#e63946',
                        color: '#fff',
                        fontSize: '40px',
                        lineHeight: '80px',
                        margin: '0 auto 30px auto',
                        fontWeight: 800,
                    }}
                >
                    ✓
                </div>
                <h1 style={{ fontSize: '40px', fontWeight: 800, margin: '0 0 14px 0' }}>Tusen takk!</h1>
                <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.6, margin: '0 0 30px 0' }}>
                    Vi har mottatt forespørselen din og sender deg en bekreftelse på e-post og SMS innen 2 timer i
                    åpningstiden. Ved akutte henvendelser, ring oss direkte på{' '}
                    <a href="tel:+4767000000" style={{ color: '#e63946', fontWeight: 700 }}>
                        67 00 00 00
                    </a>
                    .
                </p>
                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        href="/"
                        style={{
                            padding: '14px 28px',
                            backgroundColor: '#111',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 700,
                        }}
                    >
                        Tilbake til forsiden
                    </Link>
                    <Link
                        href="/blogg"
                        style={{
                            padding: '14px 28px',
                            backgroundColor: 'transparent',
                            color: '#111',
                            border: '1px solid #ccc',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 700,
                        }}
                    >
                        Les vår bilblogg
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
