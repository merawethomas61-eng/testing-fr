'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';
import { services } from '@/app/lib/services';
import { locations } from '@/app/lib/locations';
import { brands } from '@/app/lib/brands';
import { blogPosts } from '@/app/lib/blog';

export default function Home() {
    const [input, setInput] = useState('');
    const [svar, setSvar] = useState('');
    const [laster, setLaster] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setLaster(true);
        setSvar('');
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: input }),
            });
            const data = await res.json();
            if (res.ok) setSvar(data.text);
            else setSvar('Feil: ' + data.error);
        } catch {
            setSvar('Beklager, det oppstod en kritisk feil i nettverket.');
        } finally {
            setLaster(false);
        }
    };

    const topServices = services.slice(0, 6);
    const topLocations = locations.slice(0, 8);
    const topBrands = brands.slice(0, 12);
    const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', margin: 0, padding: 0, lineHeight: 1.6 }}>
            <Header active="hjem" />

            <section
                style={{
                    backgroundColor: '#f4f4f5',
                    padding: '120px 20px',
                    textAlign: 'center',
                    borderBottom: '1px solid #e5e5e5',
                }}
            >
                <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '3px', margin: '0 0 20px 0' }}>
                    Bilverksted i Nittedal siden 2009
                </p>
                <h1
                    style={{
                        fontSize: '60px',
                        fontWeight: 900,
                        margin: '0 auto 24px auto',
                        maxWidth: '900px',
                        color: '#111',
                        lineHeight: 1.05,
                    }}
                >
                    Slipp bilstresset.
                    <br />
                    Kjør trygt på veien.
                </h1>
                <p style={{ fontSize: '22px', maxWidth: '700px', margin: '0 auto 40px auto', color: '#555', lineHeight: 1.6 }}>
                    Få ærlige priser, rask service og en bil du kan stole på. Vi er ditt lokale verksted som fikser
                    problemet første gang – for alle bilmerker og alle elbiler.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        href="/bestill"
                        style={{
                            padding: '18px 40px',
                            fontSize: '18px',
                            backgroundColor: '#e63946',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 700,
                            boxShadow: '0 4px 6px rgba(230, 57, 70, 0.3)',
                        }}
                    >
                        Bestill Time Nå
                    </Link>
                    <a
                        href="#ai-mekaniker"
                        style={{
                            padding: '18px 40px',
                            fontSize: '18px',
                            backgroundColor: '#fff',
                            color: '#111',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 700,
                            border: '1px solid #ccc',
                        }}
                    >
                        Sjekk feilen gratis
                    </a>
                </div>
                <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', fontSize: '14px', color: '#555', fontWeight: 600 }}>
                    <span>✓ Fastpris før vi starter</span>
                    <span>✓ 24 mnd garanti</span>
                    <span>✓ Alle bilmerker og elbiler</span>
                    <span>✓ Lånebil ved behov</span>
                </div>
            </section>

            <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Vår Ekspertise
                    </p>
                    <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '10px 0 14px 0' }}>Populære tjenester</h2>
                    <p style={{ fontSize: '18px', color: '#555', maxWidth: '640px', margin: '0 auto' }}>
                        Alt fra rask EU-kontroll og oljeskift til komplett elbil-service og motor-reparasjon.
                    </p>
                </header>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {topServices.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/tjenester/${s.slug}`}
                            style={{ padding: '28px', border: '1px solid #eaeaea', borderRadius: '6px', textDecoration: 'none', color: '#111', backgroundColor: '#fafafa' }}
                        >
                            <h3 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>{s.shortTitle}</h3>
                            <p style={{ fontSize: '13px', color: '#e63946', fontWeight: 700, margin: '0 0 12px 0' }}>Fra {s.priceFrom}</p>
                            <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: 1.6 }}>{s.tagline}</p>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link href="/tjenester" style={{ color: '#e63946', fontWeight: 700, textDecoration: 'none', fontSize: '17px' }}>
                        Se alle tjenester →
                    </Link>
                </div>
            </section>

            <section style={{ backgroundColor: '#111', color: '#fff', padding: '100px 20px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 800, marginBottom: '60px' }}>
                        Slik får du en problemfri bilhverdag
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
                        {[
                            { n: 1, t: 'Bestill time', p: 'Bruk vårt enkle skjema på nett, eller ring oss direkte. Vi finner en tid som passer deg.' },
                            { n: 2, t: 'Vi fikser problemet', p: 'Lever bilen. Vi gir deg en ærlig diagnose og fastpris. Ingen skjulte overraskelser.' },
                            { n: 3, t: 'Kjør trygt videre', p: 'Hent en bil du kan stole på, og kjør hjem med senkede skuldre og full trygghet.' },
                        ].map((s) => (
                            <div key={s.n} style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: '#e63946',
                                        color: '#fff',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        margin: '0 auto 20px auto',
                                    }}
                                >
                                    {s.n}
                                </div>
                                <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{s.t}</h3>
                                <p style={{ color: '#aaa' }}>{s.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="ai-mekaniker" style={{ padding: '100px 20px', backgroundColor: '#f9f9f9' }}>
                <div style={{ maxWidth: '750px', margin: '0 auto', backgroundColor: '#fff', padding: '50px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '15px', fontWeight: 800 }}>
                        Ikke klar for å bestille time enda?
                    </h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666', fontSize: '18px' }}>
                        Beskriv problemet ditt til vår AI-mekaniker. Få en umiddelbar vurdering av hva som kan være galt, og
                        om det er trygt å kjøre videre. Helt gratis.
                    </p>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="F.eks: Motoren rister når jeg kjører over 80 km/t..."
                            style={{
                                padding: '20px',
                                height: '140px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                backgroundColor: '#fff',
                                color: '#111',
                                resize: 'vertical',
                                width: '100%',
                                boxSizing: 'border-box',
                                fontFamily: 'inherit',
                            }}
                        />
                        <button
                            type="submit"
                            disabled={laster}
                            style={{
                                padding: '18px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                backgroundColor: laster ? '#999' : '#111',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: laster ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.2s',
                            }}
                        >
                            {laster ? 'Mekanikeren tenker...' : 'Få gratis vurdering'}
                        </button>
                    </form>
                    {svar && (
                        <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f4f4f5', borderLeft: '6px solid #111', borderRadius: '4px' }}>
                            <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7, margin: 0, color: '#111', fontSize: '16px' }}>
                                {svar}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Lokalt forankret
                    </p>
                    <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '10px 0 14px 0' }}>Områder vi dekker</h2>
                    <p style={{ fontSize: '18px', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
                        Vi tar imot kunder fra hele Nittedal-dalen og nærliggende kommuner.
                    </p>
                </header>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                    {topLocations.map((l) => (
                        <Link
                            key={l.slug}
                            href={`/omrader/${l.slug}`}
                            style={{ padding: '20px', border: '1px solid #eaeaea', borderRadius: '6px', textDecoration: 'none', color: '#111', backgroundColor: '#fafafa' }}
                        >
                            <h3 style={{ fontSize: '17px', margin: '0 0 4px 0' }}>Bilverksted {l.name}</h3>
                            <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>
                                {l.distanceKm === 0 ? 'Her ligger vi' : `${l.distanceKm} km · ${l.driveMinutes} min`}
                            </p>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Link href="/omrader" style={{ color: '#e63946', fontWeight: 700, textDecoration: 'none', fontSize: '17px' }}>
                        Se alle områder →
                    </Link>
                </div>
            </section>

            <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Alle bilmerker
                    </p>
                    <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '10px 0 14px 0' }}>Spesialkompetanse på alle merker</h2>
                </header>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                    {topBrands.map((b) => (
                        <Link
                            key={b.slug}
                            href={`/bilmerker/${b.slug}`}
                            style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '20px', textDecoration: 'none', color: '#111', fontSize: '14px', fontWeight: 600 }}
                        >
                            {b.name}
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Link href="/bilmerker" style={{ color: '#e63946', fontWeight: 700, textDecoration: 'none', fontSize: '17px' }}>
                        Se alle bilmerker →
                    </Link>
                </div>
            </section>

            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ marginBottom: '40px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Fra bloggen
                    </p>
                    <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '10px 0 14px 0' }}>Guider fra våre teknikere</h2>
                </header>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {latestPosts.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/blogg/${p.slug}`}
                            style={{ padding: '24px', border: '1px solid #eaeaea', borderRadius: '6px', textDecoration: 'none', color: '#111', backgroundColor: '#fff' }}
                        >
                            <p style={{ margin: 0, fontSize: '12px', color: '#e63946', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {p.category}
                            </p>
                            <h3 style={{ fontSize: '20px', margin: '8px 0 10px 0', lineHeight: 1.3 }}>{p.title}</h3>
                            <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: 1.6 }}>{p.excerpt.slice(0, 130)}...</p>
                        </Link>
                    ))}
                </div>
            </section>

            <CTASection heading="Ikke ignorer varsellampene." text="Dyre reparasjoner kan unngås hvis problemet tas tidlig." />
            <Footer />
        </div>
    );
}
