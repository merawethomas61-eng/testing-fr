'use client';

import { useState, FormEvent } from 'react';

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
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', lineHeight: '1.6', margin: 0, padding: 0 }}>

      {/* 1. Header / Meny */}
      <header style={{ backgroundColor: '#111', color: '#fff', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span></h1>
        <nav style={{ display: 'flex', gap: '30px', fontWeight: '500' }}>
          <span style={{ cursor: 'pointer' }}>Tjenester</span>
          <span style={{ cursor: 'pointer' }}>Om oss</span>
          <span style={{ cursor: 'pointer' }}>Kontakt</span>
        </nav>
      </header>

      {/* 2. Hero Section (Hovedblikkfang for SEO) */}
      <section style={{ backgroundColor: '#f4f4f5', padding: '100px 20px', textAlign: 'center', borderBottom: '1px solid #e5e5e5' }}>
        <h2 style={{ fontSize: '48px', margin: '0 0 20px 0', fontWeight: '800' }}>Ditt pålitelige bilverksted</h2>
        <p style={{ fontSize: '20px', maxWidth: '650px', margin: '0 auto 40px auto', color: '#4a4a4a' }}>
          Vi utfører service, EU-kontroll og reparasjoner på alle bilmerker. Opplev trygghet på veien med sertifiserte mekanikere.
        </p>
        <button style={{ padding: '18px 40px', fontSize: '18px', backgroundColor: '#e63946', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(230, 57, 70, 0.3)' }}>
          Bestill Time Nå
        </button>
      </section>

      {/* 3. Tjenester Grid (Strukturert innhold for SEO) */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '50px', fontWeight: '700' }}>Hva vi tilbyr</h3>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['EU-Kontroll', 'Årlig Service', 'Dekk & Felg', 'Feilsøking & Diagnose'].map((tjeneste) => (
            <div key={tjeneste} style={{ flex: '1 1 220px', padding: '40px 20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#f4f4f5', borderRadius: '50%', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🔧</div>
              <h4 style={{ margin: '0 0 15px 0', fontSize: '20px' }}>{tjeneste}</h4>
              <p style={{ fontSize: '15px', color: '#666', margin: 0 }}>Presisjon og kvalitet i alle ledd for din sikkerhet.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AI Assistent Seksjonen (Din funksjonalitet) */}
      <section style={{ backgroundColor: '#111', color: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '15px', fontWeight: '700' }}>Spør vår Digitale Mekaniker</h3>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: '#a1a1aa', fontSize: '18px' }}>
            Lyser en varsellampe? Beskriv problemet ditt under, så gir vår AI-assistent deg en umiddelbar, foreløpig analyse.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="F.eks: Motoren lager en tikke-lyd når den er kald..."
              style={{ padding: '20px', height: '140px', fontSize: '16px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#222', color: '#fff', resize: 'vertical', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit' }}
            />
            <button
              type="submit"
              disabled={laster}
              style={{ padding: '18px', fontSize: '18px', fontWeight: 'bold', backgroundColor: laster ? '#444' : '#e63946', color: '#fff', border: 'none', borderRadius: '8px', cursor: laster ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s' }}
            >
              {laster ? 'Søker i feilkoder...' : 'Analyser problem'}
            </button>
          </form>

          {svar && (
            <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#222', borderLeft: '6px solid #e63946', borderRadius: '4px' }}>
              <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.7', margin: 0, color: '#f4f4f5', fontSize: '16px' }}>{svar}</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. Footer */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f4f4f5', color: '#666', fontSize: '14px', borderTop: '1px solid #e5e5e5' }}>
        &copy; 2026 Nittedal Auto. Demoprosjekt for SEO og AI-arkitektur.
      </footer>
    </div>
  );
}