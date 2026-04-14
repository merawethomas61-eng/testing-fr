'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

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

      if (res.ok) {
        setSvar(data.text);
      } else {
        setSvar("Feil: " + data.error);
      }
    } catch (error) {
      setSvar("Beklager, det oppstod en kritisk feil i nettverket.");
    } finally {
      setLaster(false);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', margin: 0, padding: 0, lineHeight: '1.6' }}>

      {/* HEADER: Tydelig og enkel */}
      <header style={{ backgroundColor: '#111', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span></h1>
        </Link>
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center', fontWeight: '500' }}>
          <Link href="/tjenester" style={{ color: '#fff', textDecoration: 'none' }}>Tjenester</Link>
          <Link href="/om-oss" style={{ color: '#fff', textDecoration: 'none' }}>Om oss</Link>
          <Link href="/kontakt" style={{ color: '#fff', textDecoration: 'none' }}>Kontakt</Link>
          {/* Direkte CTA i headeren (StoryBrand regel #1) */}
          <Link href="/bestill" style={{ backgroundColor: '#e63946', color: '#fff', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
            Bestill Time
          </Link>
        </nav>
      </header>

      {/* 1. THE HERO (Gratesten: Hva tilbyr du, hvordan gjør det livet bedre, hvordan kjøper jeg det?) */}
      <section style={{ backgroundColor: '#f4f4f5', padding: '120px 20px', textAlign: 'center', borderBottom: '1px solid #e5e5e5' }}>
        <h1 style={{ fontSize: '56px', fontWeight: '900', margin: '0 auto 20px auto', maxWidth: '800px', color: '#111', lineHeight: '1.1' }}>
          Slipp bilstresset.<br />Kjør trygt på veien.
        </h1>
        <p style={{ fontSize: '22px', maxWidth: '600px', margin: '0 auto 40px auto', color: '#555' }}>
          Få ærlige priser, rask service og en bil du kan stole på. Vi er ditt lokale verksted som fikser problemet første gang.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {/* Direct CTA */}
          <Link href="/bestill" style={{ padding: '18px 40px', fontSize: '18px', backgroundColor: '#e63946', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(230, 57, 70, 0.3)' }}>
            Bestill Time Nå
          </Link>
          {/* Transitional CTA-knapp for de som tviler */}
          <a href="#ai-mekaniker" style={{ padding: '18px 40px', fontSize: '18px', backgroundColor: '#fff', color: '#111', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', border: '1px solid #ccc' }}>
            Sjekk feilen gratis
          </a>
        </div>
      </section>

      {/* 2. THE PROBLEM & EMPATHY (Helten har et problem, vi forstår det) */}
      <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>Bilen din skal fungere. Ikke være en byrde.</h2>
        <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.8' }}>
          Vi vet hvor frustrerende det er når varsellampene blinker, ulydene kommer, eller EU-kontrollen nærmer seg. Du er redd for å bli lurt av uforståelig fagspråk og skjulte kostnader. Hos Nittedal Auto snakker vi et språk du forstår, gir deg fastpris før vi starter, og setter sikkerheten din først.
        </p>
      </section>

      {/* 3. THE PLAN (3 enkle steg for å fjerne forvirring) */}
      <section style={{ backgroundColor: '#111', color: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '800', marginBottom: '60px' }}>Slik får du en problemfri bilhverdag</h2>

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#e63946', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', margin: '0 auto 20px auto' }}>1</div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Bestill time</h3>
              <p style={{ color: '#aaa' }}>Bruk vårt enkle skjema på nett, eller ring oss direkte. Vi finner en tid som passer deg.</p>
            </div>
            <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#e63946', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', margin: '0 auto 20px auto' }}>2</div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Vi fikser problemet</h3>
              <p style={{ color: '#aaa' }}>Lever bilen. Vi gir deg en ærlig diagnose og fastpris. Ingen skjulte overraskelser.</p>
            </div>
            <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#e63946', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', margin: '0 auto 20px auto' }}>3</div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Kjør trygt videre</h3>
              <p style={{ color: '#aaa' }}>Hent en bil du kan stole på, og kjør hjem med senkede skuldre og full trygghet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSITIONAL CTA / THE GUIDE (For kunden som er ubesluttsom - AI integrasjonen) */}
      <section id="ai-mekaniker" style={{ padding: '100px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', backgroundColor: '#fff', padding: '50px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '15px', fontWeight: '800' }}>Ikke klar for å bestille time enda?</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666', fontSize: '18px' }}>
            Beskriv problemet ditt til vår AI-mekaniker. Få en umiddelbar vurdering av hva som kan være galt, og om det er trygt å kjøre videre. Helt gratis.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="F.eks: Motoren rister når jeg kjører over 80 km/t..."
              style={{ padding: '20px', height: '140px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff', color: '#111', resize: 'vertical', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit' }}
            />
            <button
              type="submit"
              disabled={laster}
              style={{ padding: '18px', fontSize: '18px', fontWeight: 'bold', backgroundColor: laster ? '#999' : '#111', color: '#fff', border: 'none', borderRadius: '4px', cursor: laster ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s' }}
            >
              {laster ? 'Mekanikeren tenker...' : 'Få gratis vurdering'}
            </button>
          </form>

          {svar && (
            <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f4f4f5', borderLeft: '6px solid #111', borderRadius: '4px' }}>
              <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.7', margin: 0, color: '#111', fontSize: '16px' }}>{svar}</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. SUCCESS STAKES & FINAL CTA */}
      <section style={{ backgroundColor: '#e63946', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 20px 0' }}>Ikke ignorer varsellampene.</h2>
        <p style={{ fontSize: '20px', margin: '0 auto 40px auto', maxWidth: '600px' }}>Dyre reparasjoner kan unngås hvis problemet tas tidlig. La oss hjelpe deg før en liten feil blir et stort problem.</p>
        <Link href="/bestill" style={{ display: 'inline-block', padding: '18px 50px', fontSize: '20px', backgroundColor: '#111', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontWeight: '900' }}>
          Bestill Time I Dag
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#111', color: '#666', fontSize: '14px' }}>
        &copy; 2026 Nittedal Auto. Nettside bygget på StoryBrand-rammeverket for maksimal konvertering.
      </footer>
    </div>
  );
}