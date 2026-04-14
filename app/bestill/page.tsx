import Link from 'next/link';

export default function Bestill() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', margin: 0, padding: 0, backgroundColor: '#f4f4f5', minHeight: '100vh' }}>
            <header style={{ backgroundColor: '#111', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span></h1>
                </Link>
                <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Avbryt bestilling</Link>
            </header>

            <main style={{ maxWidth: '600px', margin: '80px auto', padding: '0 20px' }}>
                <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '800', margin: '0 0 10px 0', textAlign: 'center' }}>Bestill Verkstedtime</h1>
                    <p style={{ color: '#666', textAlign: 'center', margin: '0 0 40px 0' }}>Fyll ut skjemaet under, så kontakter vi deg for å bekrefte tidspunktet.</p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                        <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Registreringsnummer</label>
                            <input type="text" placeholder="F.eks: AB 12345" style={{ width: '100%', padding: '16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box', textTransform: 'uppercase' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Hva trenger du hjelp til?</label>
                            <select style={{ width: '100%', padding: '16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box', backgroundColor: '#fff' }}>
                                <option>Velg tjeneste...</option>
                                <option>EU-Kontroll</option>
                                <option>Årlig Service</option>
                                <option>Feilsøking / Diagnose</option>
                                <option>Annet (beskriv i neste felt)</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Tilleggsinformasjon</label>
                            <textarea placeholder="Eventuelle lyder, varsellamper eller andre detaljer vi bør vite om." style={{ width: '100%', padding: '16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', height: '100px', resize: 'vertical', boxSizing: 'border-box' }}></textarea>
                        </div>

                        <button type="button" style={{ marginTop: '10px', width: '100%', padding: '20px', backgroundColor: '#e63946', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '800', fontSize: '18px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Send Forespørsel
                        </button>
                        <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '10px' }}>Ved å sende forespørselen godtar du våre personvernvilkår.</p>
                    </form>
                </div>
            </main>
        </div>
    );
}