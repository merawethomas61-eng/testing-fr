import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Kontakt | Nittedal Auto – Hadelandsveien 123, 1482 Nittedal',
    description:
        'Kom innom, ring eller send melding. Vi holder til sentralt i Nittedal med god parkering, og er kun noen minutter fra Rotnes stasjon.',
};

export default function KontaktSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="kontakt" />
            <Breadcrumbs items={[{ label: 'Kontakt' }]} />

            <main style={{ maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '40px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Ta kontakt
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>
                        Vi er her for å hjelpe deg
                    </h1>
                    <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, maxWidth: '760px' }}>
                        Ring, send e-post, eller stikk innom – vi tar imot deg som om du er fast kunde, uansett om det er
                        første gang du er her.
                    </p>
                </header>

                <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
                    <div>
                        <h2 style={{ fontSize: '22px', margin: '0 0 10px 0' }}>Besøksadresse</h2>
                        <p style={{ color: '#555', margin: '0 0 30px 0', lineHeight: 1.7 }}>
                            Hadelandsveien 123
                            <br />
                            1482 Nittedal
                            <br />
                            Norge
                        </p>

                        <h2 style={{ fontSize: '22px', margin: '0 0 10px 0' }}>Telefon og e-post</h2>
                        <p style={{ color: '#555', margin: '0 0 30px 0', lineHeight: 1.7 }}>
                            Sentralbord:{' '}
                            <a href="tel:+4767000000" style={{ color: '#111', fontWeight: 700 }}>
                                67 00 00 00
                            </a>
                            <br />
                            E-post:{' '}
                            <a href="mailto:post@nittedalauto.no" style={{ color: '#111', fontWeight: 700 }}>
                                post@nittedalauto.no
                            </a>
                            <br />
                            Karriere:{' '}
                            <a href="mailto:karriere@nittedalauto.no" style={{ color: '#111', fontWeight: 700 }}>
                                karriere@nittedalauto.no
                            </a>
                        </p>

                        <h2 style={{ fontSize: '22px', margin: '0 0 10px 0' }}>Åpningstider</h2>
                        <p style={{ color: '#555', margin: '0 0 30px 0', lineHeight: 1.7 }}>
                            Man – Fre: 07:30 – 16:00
                            <br />
                            Lørdag: Etter avtale
                            <br />
                            Søndag: Stengt
                        </p>

                        <h2 style={{ fontSize: '22px', margin: '0 0 10px 0' }}>Slik finner du oss</h2>
                        <p style={{ color: '#555', margin: 0, lineHeight: 1.7 }}>
                            Vi ligger rett ved Rv4 mellom Nittedal og Hakadal stasjoner. God parkering foran verkstedet.
                            Elbilladere tilgjengelig for kunder.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#fafafa', padding: '40px', borderRadius: '8px', border: '1px solid #eaeaea', alignSelf: 'start' }}>
                        <h3 style={{ fontSize: '22px', margin: '0 0 20px 0' }}>Send en melding</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <input
                                type="text"
                                placeholder="Ditt navn"
                                style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px' }}
                            />
                            <input
                                type="email"
                                placeholder="E-postadresse"
                                style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px' }}
                            />
                            <input
                                type="tel"
                                placeholder="Telefon (valgfritt)"
                                style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px' }}
                            />
                            <textarea
                                placeholder="Hva gjelder det?"
                                style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px', height: '120px', resize: 'vertical' }}
                            />
                            <button
                                type="button"
                                style={{
                                    padding: '16px',
                                    backgroundColor: '#111',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontWeight: 700,
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                }}
                            >
                                Send melding
                            </button>
                        </form>
                    </div>
                </section>

                <section
                    style={{
                        padding: '40px',
                        backgroundColor: '#111',
                        color: '#fff',
                        borderRadius: '8px',
                        marginBottom: '60px',
                        textAlign: 'center',
                    }}
                >
                    <h2 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>Akutt hjelp?</h2>
                    <p style={{ margin: '0 0 20px 0', color: '#ccc' }}>
                        Står du fast på veien, eller trenger du hjelp raskt? Ring oss direkte – vi hjelper gjerne.
                    </p>
                    <a
                        href="tel:+4767000000"
                        style={{
                            display: 'inline-block',
                            padding: '14px 36px',
                            backgroundColor: '#e63946',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 800,
                        }}
                    >
                        Ring 67 00 00 00
                    </a>
                </section>
            </main>
            <Footer />
        </div>
    );
}
