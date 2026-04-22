import Link from 'next/link';
import { services } from '@/app/lib/services';
import { locations } from '@/app/lib/locations';
import { brands } from '@/app/lib/brands';

export default function Footer() {
    const topServices = services.slice(0, 8);
    const topLocations = locations.slice(0, 10);
    const topBrands = brands.slice(0, 10);

    return (
        <footer style={{ backgroundColor: '#0b0b0b', color: '#bbb', padding: '70px 20px 30px 20px', marginTop: 'auto' }}>
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                    gap: '40px',
                }}
            >
                <div>
                    <h3 style={{ color: '#fff', fontSize: '20px', margin: '0 0 16px 0', fontWeight: 800 }}>
                        NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span>
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                        Ditt lokale, sertifiserte bilverksted i Nittedal. Vi fikser alle bilmerker med ærlige priser og
                        full garanti.
                    </p>
                    <p style={{ fontSize: '13px', lineHeight: 1.7, marginTop: '16px', color: '#888' }}>
                        Hadelandsveien 123
                        <br />
                        1482 Nittedal
                        <br />
                        Tlf: 67 00 00 00
                        <br />
                        post@nittedalauto.no
                    </p>
                </div>

                <div>
                    <h4 style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 16px 0' }}>
                        Tjenester
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {topServices.map((s) => (
                            <li key={s.slug}>
                                <Link
                                    href={`/tjenester/${s.slug}`}
                                    style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}
                                >
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/tjenester" style={{ color: '#e63946', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                                Se alle tjenester →
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 16px 0' }}>
                        Områder vi dekker
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {topLocations.map((loc) => (
                            <li key={loc.slug}>
                                <Link
                                    href={`/omrader/${loc.slug}`}
                                    style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}
                                >
                                    Bilverksted {loc.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/omrader" style={{ color: '#e63946', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                                Alle områder →
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 16px 0' }}>
                        Bilmerker
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {topBrands.map((b) => (
                            <li key={b.slug}>
                                <Link
                                    href={`/bilmerker/${b.slug}`}
                                    style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}
                                >
                                    {b.name}-verksted
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/bilmerker" style={{ color: '#e63946', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                                Alle bilmerker →
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 16px 0' }}>
                        Informasjon
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li><Link href="/om-oss" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Om oss</Link></li>
                        <li><Link href="/priser" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Prisliste</Link></li>
                        <li><Link href="/garanti" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Garanti</Link></li>
                        <li><Link href="/karriere" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Karriere</Link></li>
                        <li><Link href="/faq" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Ofte stilte spørsmål</Link></li>
                        <li><Link href="/blogg" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Blogg og guider</Link></li>
                        <li><Link href="/personvern" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Personvern</Link></li>
                        <li><Link href="/vilkar" style={{ color: '#bbb', textDecoration: 'none', fontSize: '14px' }}>Vilkår</Link></li>
                    </ul>
                </div>
            </div>

            <div
                style={{
                    maxWidth: '1200px',
                    margin: '50px auto 0 auto',
                    paddingTop: '20px',
                    borderTop: '1px solid #222',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    color: '#666',
                }}
            >
                <div>&copy; {new Date().getFullYear()} Nittedal Auto AS. Org.nr. 912 345 678. Alle rettigheter reservert.</div>
                <div>
                    <Link href="/sitemap.xml" style={{ color: '#666', textDecoration: 'none', marginRight: '16px' }}>
                        Sitemap
                    </Link>
                    <Link href="/personvern" style={{ color: '#666', textDecoration: 'none', marginRight: '16px' }}>
                        Personvern
                    </Link>
                    <Link href="/vilkar" style={{ color: '#666', textDecoration: 'none' }}>
                        Vilkår
                    </Link>
                </div>
            </div>
        </footer>
    );
}
