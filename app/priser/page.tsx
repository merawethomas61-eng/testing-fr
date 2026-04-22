import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';
import { services } from '@/app/lib/services';

export const metadata: Metadata = {
    title: 'Prisliste – Nittedal Auto | Fastpris på service og reparasjon',
    description:
        'Se våre priser på EU-kontroll, oljeskift, dekkskift, bremser og all service. Åpen og transparent prisliste med fastpris før vi starter.',
};

const extraPrices = [
    { name: 'Timepris mekaniker', price: '1 090,-' },
    { name: 'Timepris elbil-spesialist', price: '1 290,-' },
    { name: 'Diagnose og feilkodelesing', price: '990,-' },
    { name: 'Lysjustering og pære', price: 'Fra 490,-' },
    { name: 'Pollenfilter standard', price: '390,-' },
    { name: 'Pollenfilter aktivt kull', price: '590,-' },
    { name: 'Bremsevæskeskift', price: '790,-' },
    { name: 'Clutchbytte (2-pedal)', price: 'Fra 8 490,-' },
    { name: 'Clutchbytte (3-pedal)', price: 'Fra 6 990,-' },
    { name: 'Dekkskift og avbalansering (4 hjul)', price: '590,-' },
    { name: 'Dekkhotell (sesong)', price: 'Fra 1 490,-' },
    { name: 'Hjulstilling 4-hjuls', price: '990,-' },
    { name: 'AC-service R134a', price: '1 490,-' },
    { name: 'AC-service R1234yf', price: '1 890,-' },
    { name: 'Frontrute reparasjon (småt sprut)', price: 'Dekkes av forsikring' },
    { name: 'Frontruteskift med kalibrering', price: 'Dekkes av forsikring' },
    { name: 'Lånebil', price: 'Gratis ved lengre reparasjon' },
    { name: 'Henting og bringing (Nittedal)', price: '290,-' },
    { name: 'Henting og bringing (Oslo nord)', price: '490,-' },
    { name: 'Førkjøpsinspeksjon', price: '990,-' },
];

export default function PriserSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="priser" />
            <Breadcrumbs items={[{ label: 'Priser' }]} />

            <main style={{ maxWidth: '1000px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '40px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Åpent og transparent
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>Prisliste</h1>
                    <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, maxWidth: '780px' }}>
                        Hos oss får du alltid fastpris før vi starter arbeidet. Prisene under er veiledende startpriser
                        – merk at komplekse biler (f.eks. Audi RS, BMW M, luftfjærings-modeller og elbiler med batteri-
                        diagnose) kan ha høyere pris. Vi gir alltid et skriftlig tilbud etter diagnose.
                    </p>
                </header>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 20px 0' }}>Våre tjenester</h2>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: '#fff',
                            border: '1px solid #eaeaea',
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: '#f4f4f5' }}>
                                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Tjeneste
                                </th>
                                <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Tidsbruk
                                </th>
                                <th style={{ textAlign: 'right', padding: '14px 16px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Pris fra
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((s, i) => (
                                <tr key={s.slug} style={{ borderTop: i === 0 ? 'none' : '1px solid #eee' }}>
                                    <td style={{ padding: '14px 16px' }}>
                                        <Link href={`/tjenester/${s.slug}`} style={{ color: '#111', textDecoration: 'none', fontWeight: 600 }}>
                                            {s.shortTitle}
                                        </Link>
                                        <div style={{ fontSize: '13px', color: '#888' }}>{s.tagline}</div>
                                    </td>
                                    <td style={{ padding: '14px 16px', fontSize: '14px', color: '#555' }}>{s.duration}</td>
                                    <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: 700, color: '#e63946' }}>
                                        {s.priceFrom}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 20px 0' }}>Tilleggstjenester og timepris</h2>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: '#fff',
                            border: '1px solid #eaeaea',
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}
                    >
                        <tbody>
                            {extraPrices.map((e, i) => (
                                <tr key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid #eee' }}>
                                    <td style={{ padding: '14px 16px', fontSize: '15px' }}>{e.name}</td>
                                    <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: 700, color: '#111' }}>
                                        {e.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section style={{ marginBottom: '60px', padding: '32px', backgroundColor: '#f4f4f5', borderRadius: '8px' }}>
                    <h2 style={{ fontSize: '22px', margin: '0 0 12px 0' }}>Slik fungerer våre priser</h2>
                    <ul style={{ paddingLeft: '22px', lineHeight: 1.8 }}>
                        <li>Vi gir alltid fastpris før arbeidet starter.</li>
                        <li>Alle priser er inkludert mva.</li>
                        <li>Deler faktureres til innkjøpspris + 20 %.</li>
                        <li>Ved uforutsette funn stopper vi og kontakter deg før vi går videre.</li>
                        <li>Diagnose på 990 kr trekkes fra reparasjonspris ved bestilling.</li>
                    </ul>
                </section>
            </main>

            <CTASection
                heading="Be om tilbud"
                text="Fortell hva bilen trenger, så får du et konkret prisforslag innen 24 timer."
                primaryLabel="Be om tilbud"
                primaryHref="/bestill"
            />
            <Footer />
        </div>
    );
}
