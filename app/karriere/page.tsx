import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';

export const metadata: Metadata = {
    title: 'Karriere og ledige stillinger | Nittedal Auto',
    description:
        'Bli med på laget! Vi søker bilmekanikere, elbil-teknikere og lærlinger til vårt verksted i Nittedal. Konkurransedyktige betingelser og godt arbeidsmiljø.',
};

const stillinger = [
    {
        tittel: 'Bilmekaniker (fagbrev)',
        type: 'Fast, 100 %',
        beskrivelse:
            'Vi søker erfaren bilmekaniker med fagbrev i lette kjøretøy. Erfaring med VW-konsernet og moderne diagnose er et pluss.',
        krav: ['Fagbrev lett kjøretøy', 'Min 2 år erfaring', 'Førerkort kl. B', 'Gode samarbeidsevner'],
    },
    {
        tittel: 'Elbil-tekniker (høyvolt)',
        type: 'Fast, 100 %',
        beskrivelse:
            'Vi utvider elbil-teamet. Du blir med på høyvolt-sertifisering og får jobbe med Tesla, VW ID, Hyundai Ioniq og mye annet spennende.',
        krav: ['Fagbrev eller tilsvarende', 'Høyvolt-kurs (eller interesse for å ta det)', 'Nysgjerrighet på ny teknologi'],
    },
    {
        tittel: 'Lærling bilmekaniker',
        type: 'Læreplass, 2 år',
        beskrivelse:
            'Vi tar inn 1–2 lærlinger hvert år. Du får opplæring av erfarne svenner og rotasjon gjennom alle deler av verkstedet.',
        krav: ['Vg2 bil eller tilsvarende', 'Indre motivasjon og læringslyst'],
    },
    {
        tittel: 'Servicerådgiver / kundeansvarlig',
        type: 'Fast, 100 %',
        beskrivelse:
            'Du blir kundens ansikt mot verkstedet. Du tar imot biler, skriver opp ordrer, gir pristilbud og følger opp kunder.',
        krav: ['God bilforståelse', 'Strukturert og serviceinnstilt', 'Erfaring fra kundeservice'],
    },
];

export default function KarriereSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header />
            <Breadcrumbs items={[{ label: 'Karriere' }]} />

            <main style={{ maxWidth: '1000px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '40px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Bli med på laget
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>Ledige stillinger</h1>
                    <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, maxWidth: '780px' }}>
                        Vi er en bedrift i vekst, og vi trenger dyktige folk som ønsker å jobbe i et verksted hvor kvalitet
                        og ærlighet står i sentrum. Hos oss får du konkurransedyktige lønnsbetingelser, kurs og et godt
                        arbeidsmiljø.
                    </p>
                </header>

                <section style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                        {stillinger.map((s, i) => (
                            <article
                                key={i}
                                style={{
                                    padding: '28px',
                                    backgroundColor: '#fafafa',
                                    border: '1px solid #eaeaea',
                                    borderRadius: '6px',
                                }}
                            >
                                <p style={{ margin: 0, fontSize: '13px', color: '#e63946', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {s.type}
                                </p>
                                <h3 style={{ fontSize: '22px', margin: '8px 0 12px 0' }}>{s.tittel}</h3>
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.6 }}>{s.beskrivelse}</p>
                                <p style={{ fontSize: '13px', fontWeight: 700, margin: '12px 0 6px 0' }}>Du har:</p>
                                <ul style={{ paddingLeft: '20px', margin: 0, color: '#555', fontSize: '14px', lineHeight: 1.6 }}>
                                    {s.krav.map((k, j) => (
                                        <li key={j}>{k}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section style={{ marginBottom: '50px', padding: '32px', backgroundColor: '#111', color: '#fff', borderRadius: '8px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 12px 0' }}>Hvorfor jobbe hos oss?</h2>
                    <ul style={{ paddingLeft: '22px', lineHeight: 1.9, fontSize: '16px', color: '#ccc' }}>
                        <li>Ryddig lønnsavtale og pensjonsordning fra første krone</li>
                        <li>Firmabetalte kurs og sertifiseringer (høyvolt, hybrid, merkeverksted-kurs)</li>
                        <li>Moderne verksted med top-utstyr (Hunter, Bosch, Launch)</li>
                        <li>Gode kolleger og flat ledelsesstruktur</li>
                        <li>Bonusordning når vi når kvartalsvise mål</li>
                        <li>Felles lunsj og vi betaler treningsabonnement</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', margin: '0 0 14px 0' }}>Slik søker du</h2>
                    <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.7 }}>
                        Send CV og en kort beskrivelse av deg selv til{' '}
                        <a href="mailto:karriere@nittedalauto.no" style={{ color: '#e63946', fontWeight: 700 }}>
                            karriere@nittedalauto.no
                        </a>
                        . Vi tar også gjerne imot åpne søknader – fortell oss hva du kan bidra med!
                    </p>
                </section>
            </main>

            <CTASection heading="Har du et spørsmål?" text="Send mail til karriere@nittedalauto.no, eller kom innom for en uforpliktende prat." />
            <Footer />
        </div>
    );
}
