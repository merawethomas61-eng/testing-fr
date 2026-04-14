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
    <main style={{ maxWidth: '700px', margin: '50px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Min AI Assistent</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Skriv inn spørsmålet ditt her..."
          style={{ padding: '15px', height: '120px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', resize: 'vertical' }}
        />
        <button
          type="submit"
          disabled={laster}
          style={{ padding: '15px', fontSize: '16px', fontWeight: 'bold', backgroundColor: laster ? '#666' : '#000', color: '#fff', border: 'none', borderRadius: '8px', cursor: laster ? 'not-allowed' : 'pointer' }}
        >
          {laster ? 'Jobber med saken...' : 'Send inn'}
        </button>
      </form>

      {svar && (
        <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#f9f9f9', borderLeft: '5px solid #000', borderRadius: '4px' }}>
          <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', margin: 0 }}>{svar}</p>
        </div>
      )}
    </main>
  );
}