import Link from 'next/link';

export default function Tjenester() {
    return (
        <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h1>Bestill Time</h1>
            <p>Dette er en placeholder-side for tjenestene.</p>
            <Link href="/" style={{ color: '#e63946', textDecoration: 'underline' }}>Tilbake til forsiden</Link>
        </div>
    );
}