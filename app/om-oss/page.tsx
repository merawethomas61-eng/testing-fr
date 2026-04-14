import Link from 'next/link';

export default function OmOss() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', margin: 0, padding: 0 }}>
            <header style={{ backgroundColor: '#111', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span></h1>
                </Link>
                <nav style={{ display: 'flex', gap: '30px', fontWeight: '500' }}>
                    <Link href="/tjenester" style={{ color: '#fff', textDecoration: 'none' }}>Tjenester</Link>
                    <Link href="/om-oss" style={{ color: '#e63946', textDecoration: 'none' }}>Om oss</Link>
                    <Link href="/kontakt" style={{ color: '#fff', textDecoration: 'none' }}>Kontakt</Link>
                </nav>
            </header>

            <main style={{ maxWidth: '900px', margin: '100px auto', padding: '0 20px' }}>
                <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#e63946', margin: '0 0 10px 0' }}>Vår Historie</h2>
                <h1 style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 40px 0', color: '#111' }}>Lokal ekspertise.<br />Global standard.</h1>

                <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', borderBottom: '1px solid #eaeaea', paddingBottom: '60px', marginBottom: '60px' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444', margin: '0 0 20px 0' }}>
                            Nittedal Auto ble etablert med én enkel visjon: Å skape et verksted hvor åpenhet, faglig stolthet og kundeservice står i sentrum. Vi vet at bilen er en kritisk del av din hverdag, og vi behandler den deretter.
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444', margin: 0 }}>
                            Våre mekanikere kurses kontinuerlig i ny teknologi, inkludert moderne elbil-systemer og avansert diagnostikk, for å alltid ligge i forkant av bransjeutviklingen.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
                    <div>
                        <h4 style={{ fontSize: '40px', fontWeight: '800', margin: '0 0 5px 0', color: '#111' }}>15+</h4>
                        <p style={{ margin: 0, color: '#666', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>År i bransjen</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '40px', fontWeight: '800', margin: '0 0 5px 0', color: '#111' }}>10k</h4>
                        <p style={{ margin: 0, color: '#666', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Fornøyde kunder</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '40px', fontWeight: '800', margin: '0 0 5px 0', color: '#111' }}>100%</h4>
                        <p style={{ margin: 0, color: '#666', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Garanti på deler</p>
                    </div>
                </div>
            </main>
        </div>
    );
}