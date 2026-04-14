import Link from 'next/link';

export default function Kontakt() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', margin: 0, padding: 0 }}>
            <header style={{ backgroundColor: '#111', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span></h1>
                </Link>
                <nav style={{ display: 'flex', gap: '30px', fontWeight: '500' }}>
                    <Link href="/tjenester" style={{ color: '#fff', textDecoration: 'none' }}>Tjenester</Link>
                    <Link href="/om-oss" style={{ color: '#fff', textDecoration: 'none' }}>Om oss</Link>
                    <Link href="/kontakt" style={{ color: '#e63946', textDecoration: 'none' }}>Kontakt</Link>
                </nav>
            </header>

            <main style={{ maxWidth: '1000px', margin: '100px auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px' }}>

                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#e63946', margin: '0 0 10px 0' }}>Ta kontakt</h2>
                        <h1 style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 40px 0', color: '#111' }}>Vi er her for å hjelpe deg.</h1>

                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>Besøksadresse</h3>
                            <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>Hadelandsveien 123<br />1482 Nittedal</p>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>Kontaktinformasjon</h3>
                            <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>Telefon: 67 00 00 00<br />E-post: post@nittedalauto.no</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>Åpningstider</h3>
                            <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>Man - Fre: 07:30 - 16:00<br />Lørdag - Søndag: Stengt</p>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 400px', backgroundColor: '#fafafa', padding: '50px', borderRadius: '4px', border: '1px solid #eaeaea' }}>
                        <h3 style={{ fontSize: '24px', margin: '0 0 30px 0' }}>Send en henvendelse</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input type="text" placeholder="Ditt navn" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }} />
                            <input type="email" placeholder="E-postadresse" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }} />
                            <textarea placeholder="Hva gjelder det?" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', height: '150px', resize: 'vertical' }}></textarea>
                            <button type="button" style={{ padding: '18px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>Send melding</button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    );
}