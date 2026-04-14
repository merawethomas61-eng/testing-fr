import Link from 'next/link';

export default function Tjenester() {
    const tjenester = [
        { tittel: 'EU-Kontroll', pris: 'Fra 1.190,-', beskrivelse: 'Lovpålagt sikkerhetssjekk utført av sertifiserte fagfolk. Vi går grundig gjennom kjøretøyet ditt.' },
        { tittel: 'Hovedservice', pris: 'Fra 3.490,-', beskrivelse: 'Omfattende service inkludert oljeskift, filterbytte og full diagnose av bilens vitale systemer.' },
        { tittel: 'Feilsøking & Diagnose', pris: 'Fra 990,-', beskrivelse: 'Lyser en lampe? Vi bruker avansert diagnoseutstyr for å lokalisere elektroniske og mekaniske feil.' },
        { tittel: 'Dekk & Felg', pris: 'Etter avtale', beskrivelse: 'Omlegging, avbalansering og dekkhotell. Vi fører premiummerker for optimalt veigrep.' },
        { tittel: 'Bremser & Slitedeler', pris: 'Pris på forespørsel', beskrivelse: 'Utskifting av klosser, skiver og calipere. Sikkerhet på veien er vår absolutte prioritet.' },
        { tittel: 'AC-Service', pris: 'Fra 1.490,-', beskrivelse: 'Rens og påfyll av gass for klimaanlegget, slik at du har frisk og kald luft i kupeen hele året.' }
    ];

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', margin: 0, padding: 0 }}>
            {/* Header */}
            <header style={{ backgroundColor: '#111', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span></h1>
                </Link>
                <nav style={{ display: 'flex', gap: '30px', fontWeight: '500' }}>
                    <Link href="/tjenester" style={{ color: '#e63946', textDecoration: 'none' }}>Tjenester</Link>
                    <Link href="/om-oss" style={{ color: '#fff', textDecoration: 'none' }}>Om oss</Link>
                    <Link href="/kontakt" style={{ color: '#fff', textDecoration: 'none' }}>Kontakt</Link>
                </nav>
            </header>

            {/* Main Content */}
            <main style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 20px' }}>
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#e63946', margin: '0 0 10px 0' }}>Vår Ekspertise</h2>
                    <h1 style={{ fontSize: '48px', fontWeight: '800', margin: 0, color: '#111' }}>Tjenester & Priser</h1>
                    <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', marginTop: '20px' }}>Vi tilbyr et komplett spekter av verkstedtjenester for alle bilmerker, med fokus på presisjon og kvalitet.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    {tjenester.map((t, i) => (
                        <div key={i} style={{ padding: '40px', backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '4px' }}>
                            <h3 style={{ fontSize: '22px', margin: '0 0 10px 0' }}>{t.tittel}</h3>
                            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#e63946', margin: '0 0 20px 0' }}>{t.pris}</p>
                            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', margin: 0 }}>{t.beskrivelse}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}