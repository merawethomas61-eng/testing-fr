import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';

export const metadata: Metadata = {
    title: 'Om oss | Nittedal Auto – Ditt lokale bilverksted siden 2009',
    description:
        'Nittedal Auto er et uavhengig, sertifisert bilverksted med over 15 års erfaring. Les historien vår, møt teamet og se hvorfor lokale bileiere stoler på oss.',
};

const team = [
    { navn: 'Anders Olsen', rolle: 'Daglig leder og verksmester', beskrivelse: 'Over 20 års erfaring. Sertifisert kontrollør og VW/Audi-spesialist.' },
    { navn: 'Tore Næss', rolle: 'Elbil-tekniker (høyvolt)', beskrivelse: 'Tesla og VAG elbil-spesialist. Lærer opp hele teamet i nye systemer.' },
    { navn: 'Elin Berg', rolle: 'Dekk- og service-rådgiver', beskrivelse: 'Din kontakt for time og dekkhotell. Kjenner alle våre kunder ved navn.' },
    { navn: 'Kristoffer Hansen', rolle: 'Servicetekniker', beskrivelse: 'Ekspert på BMW, Mercedes og AC-service.' },
    { navn: 'Hedda Solheim', rolle: 'Lærling (2. år)', beskrivelse: 'Vi er stolt læringsbedrift og investerer i neste generasjon.' },
];

export default function OmOssSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header active="om-oss" />
            <Breadcrumbs items={[{ label: 'Om oss' }]} />

            <main style={{ maxWidth: '1000px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <section style={{ marginBottom: '50px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Vår historie
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0', lineHeight: 1.1 }}>
                        Lokal ekspertise.
                        <br />
                        Global standard.
                    </h1>
                    <p style={{ fontSize: '19px', color: '#555', lineHeight: 1.7, maxWidth: '800px' }}>
                        Nittedal Auto ble etablert i 2009 med én enkel visjon: Å skape et verksted hvor åpenhet, faglig
                        stolthet og kundeservice står i sentrum. Vi vet at bilen er en kritisk del av din hverdag, og vi
                        behandler den deretter.
                    </p>
                    <p style={{ fontSize: '17px', color: '#444', lineHeight: 1.7, maxWidth: '800px', marginTop: '20px' }}>
                        Vi kurser mekanikerne våre kontinuerlig i ny teknologi, inkludert moderne elbil-systemer og
                        avansert diagnostikk, for å alltid ligge i forkant av bransjeutviklingen. I dag er vi et av
                        Nittedals mest anerkjente uavhengige verksted med spesialkompetanse på alle store bilmerker.
                    </p>
                </section>

                <section
                    style={{
                        display: 'flex',
                        gap: '40px',
                        flexWrap: 'wrap',
                        padding: '40px',
                        backgroundColor: '#f4f4f5',
                        borderRadius: '8px',
                        marginBottom: '60px',
                    }}
                >
                    {[
                        { n: '15+', l: 'år i bransjen' },
                        { n: '10 000+', l: 'fornøyde kunder' },
                        { n: '24 mnd', l: 'garanti' },
                        { n: '100 %', l: 'åpen prising' },
                        { n: '25+', l: 'bilmerker' },
                        { n: '5', l: 'sertifiserte teknikere' },
                    ].map((s, i) => (
                        <div key={i} style={{ flex: '1 1 160px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '38px', fontWeight: 800, margin: 0, color: '#111' }}>{s.n}</h3>
                            <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', margin: '6px 0 0 0' }}>
                                {s.l}
                            </p>
                        </div>
                    ))}
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '32px', margin: '0 0 30px 0', fontWeight: 800 }}>Våre verdier</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {[
                            { t: 'Ærlighet først', p: 'Vi anbefaler aldri reparasjoner du ikke trenger. Punktum.' },
                            { t: 'Fastpris alltid', p: 'Du får skriftlig tilbud før vi starter. Ingen skjulte overraskelser.' },
                            { t: 'Teknologi i front', p: 'Vi investerer i kurs og utstyr slik at vi kan ta hånd om de nyeste bilene.' },
                            { t: 'Lokal forankring', p: 'Vi kjenner Nittedal, og mange av kundene våre er blitt gode venner.' },
                        ].map((v, i) => (
                            <div key={i} style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '6px' }}>
                                <h3 style={{ fontSize: '20px', margin: '0 0 10px 0' }}>{v.t}</h3>
                                <p style={{ fontSize: '15px', color: '#555', margin: 0, lineHeight: 1.6 }}>{v.p}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '32px', margin: '0 0 30px 0', fontWeight: 800 }}>Teamet vårt</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                        {team.map((m, i) => (
                            <article key={i} style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '6px', backgroundColor: '#fafafa' }}>
                                <h3 style={{ fontSize: '20px', margin: '0 0 4px 0' }}>{m.navn}</h3>
                                <p style={{ fontSize: '13px', color: '#e63946', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {m.rolle}
                                </p>
                                <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: 1.6 }}>{m.beskrivelse}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '32px', margin: '0 0 20px 0', fontWeight: 800 }}>Sertifiseringer og partnere</h2>
                    <ul style={{ paddingLeft: '22px', lineHeight: 1.9, fontSize: '16px', color: '#444' }}>
                        <li>Godkjent PKK-kontrollstasjon (EU-kontroll)</li>
                        <li>NBF-medlem (Norges Bilbransjeforbund)</li>
                        <li>Høyvolt-sertifisert for elbilarbeid</li>
                        <li>Autopass/-bompartner for bedriftskunder</li>
                        <li>Godkjent verksted for de fleste forsikringsselskap</li>
                        <li>Lærebedrift godkjent av fylkeskommunen</li>
                    </ul>
                </section>
            </main>

            <CTASection heading="Bli en av våre faste kunder" text="Bestill time, så får du personlig oppfølging fra dag én." />
            <Footer />
        </div>
    );
}
