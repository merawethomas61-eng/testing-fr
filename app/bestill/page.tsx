import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { services } from '@/app/lib/services';

export const metadata: Metadata = {
    title: 'Bestill time | Nittedal Auto – Rask verkstedtime i Nittedal',
    description:
        'Bestill tid for EU-kontroll, service eller reparasjon. Fastpris før vi starter, rask tilbakemelding og lånebil ved behov.',
};

export default function Bestill() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', backgroundColor: '#f4f4f5', minHeight: '100vh' }}>
            <Header />
            <Breadcrumbs items={[{ label: 'Bestill time' }]} />

            <main style={{ maxWidth: '760px', margin: '40px auto 80px auto', padding: '0 20px' }}>
                <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 12px 0', textAlign: 'center' }}>
                        Bestill verkstedtime
                    </h1>
                    <p style={{ color: '#666', textAlign: 'center', margin: '0 0 40px 0', lineHeight: 1.6 }}>
                        Fyll ut skjemaet, så kontakter vi deg innen 2 timer i åpningstiden for å bekrefte tid og pris.
                    </p>

                    <form action="/takk" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                                    Navn *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ditt navn"
                                    style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '15px', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                                    Telefon *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="12 34 56 78"
                                    style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '15px', boxSizing: 'border-box' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                                E-post
                            </label>
                            <input
                                type="email"
                                placeholder="din@epost.no"
                                style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '15px', boxSizing: 'border-box' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                                Registreringsnummer
                            </label>
                            <input
                                type="text"
                                placeholder="F.eks: AB 12345"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '15px',
                                    boxSizing: 'border-box',
                                    textTransform: 'uppercase',
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                                Hva trenger du hjelp til? *
                            </label>
                            <select
                                required
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '15px',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <option value="">Velg tjeneste...</option>
                                {services.map((s) => (
                                    <option key={s.slug} value={s.slug}>
                                        {s.shortTitle} (fra {s.priceFrom})
                                    </option>
                                ))}
                                <option value="annet">Annet – beskriv under</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                                Ønsket tidsperiode
                            </label>
                            <select
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '15px',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <option>Snarest mulig</option>
                                <option>Denne uken</option>
                                <option>Neste uke</option>
                                <option>Om 2–4 uker</option>
                                <option>Jeg er fleksibel</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                                Tilleggsinformasjon
                            </label>
                            <textarea
                                placeholder="Eventuelle lyder, varsellamper eller andre detaljer vi bør vite om."
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '15px',
                                    height: '110px',
                                    resize: 'vertical',
                                    boxSizing: 'border-box',
                                    fontFamily: 'inherit',
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', paddingTop: '6px' }}>
                            <label style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px', color: '#444' }}>
                                <input type="checkbox" /> Jeg trenger lånebil
                            </label>
                            <label style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px', color: '#444' }}>
                                <input type="checkbox" /> Henting og bringing
                            </label>
                            <label style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px', color: '#444' }}>
                                <input type="checkbox" /> Jeg venter på verkstedet
                            </label>
                        </div>

                        <button
                            type="submit"
                            style={{
                                marginTop: '10px',
                                width: '100%',
                                padding: '18px',
                                backgroundColor: '#e63946',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                fontWeight: 800,
                                fontSize: '17px',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}
                        >
                            Send forespørsel
                        </button>
                        <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', margin: 0 }}>
                            Ved å sende forespørselen godtar du våre{' '}
                            <Link href="/personvern" style={{ color: '#666' }}>
                                personvernvilkår
                            </Link>
                            .
                        </p>
                    </form>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center', color: '#666', fontSize: '14px' }}>
                    <p>
                        Haster det? Ring oss direkte:{' '}
                        <a href="tel:+4767000000" style={{ color: '#e63946', fontWeight: 700 }}>
                            67 00 00 00
                        </a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
