import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Salgs- og leveringsvilkår | Nittedal Auto',
    description:
        'Våre generelle salgs- og leveringsvilkår for verkstedtjenester, deler og lånebil. Les vilkårene før du bestiller time.',
    robots: { index: true, follow: true },
};

export default function VilkarSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header />
            <Breadcrumbs items={[{ label: 'Vilkår' }]} />

            <main style={{ maxWidth: '800px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <h1 style={{ fontSize: '40px', fontWeight: 800, margin: '0 0 20px 0' }}>Salgs- og leveringsvilkår</h1>
                <p style={{ fontSize: '15px', color: '#888' }}>Sist oppdatert: 1. januar 2026</p>

                <section style={{ marginTop: '40px', lineHeight: 1.8, fontSize: '16px', color: '#333' }}>
                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>1. Generelt</h2>
                    <p>
                        Disse vilkårene gjelder for alle tjenester levert av Nittedal Auto AS. Ved bestilling av time,
                        aksept av tilbud eller innlevering av kjøretøy aksepterer du disse vilkårene.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>2. Tilbud og pris</h2>
                    <p>
                        Vi gir alltid skriftlig fastpris etter diagnose. Tilbudet gjelder i 14 dager dersom ikke annet er
                        avtalt. Dersom uforutsette forhold kommer frem under arbeid, stopper vi og innhenter nytt samtykke
                        før vi går videre.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>3. Levering</h2>
                    <p>
                        Vi avtaler fast tid for henting. Ved forsinkelser utover 1 time varsler vi deg. Du plikter å hente
                        bilen innen 7 dager etter ferdigstillelse. Forsinkelse utover dette kan gi lagerleie på 290 kr/dag.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>4. Betaling</h2>
                    <p>
                        Betaling skjer ved henting. Vi aksepterer Vipps, kort og BankAxept. Bedriftskunder kan få faktura
                        med 14 dagers betalingsfrist etter kredittsjekk.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>5. Mangler og reklamasjon</h2>
                    <p>
                        Reklamasjon skal fremmes innen rimelig tid etter oppdagelse. Se vår{' '}
                        <a href="/garanti" style={{ color: '#e63946', fontWeight: 700 }}>
                            garantiside
                        </a>{' '}
                        for utfyllende informasjon om dine rettigheter.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>6. Lånebil</h2>
                    <p>
                        Lånebil leveres med full tank og skal leveres tilbake med full tank. Forsikring (kasko med 6.000 kr
                        egenandel) er inkludert. Bompenger og fartsbøter faktureres kunde.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>7. Ansvar</h2>
                    <p>
                        Vi er erstatningsansvarlige for direkte tap som følge av feil/mangler i vårt arbeid. Vårt ansvar er
                        begrenset til de beløp som dekkes av vår ansvarsforsikring, og gjelder ikke indirekte tap som
                        inntektstap eller følgeskader på annet materiell.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>8. Avbestilling</h2>
                    <p>
                        Avbestilling senere enn 24 timer før avtalt tid kan medføre et gebyr på 490 kr. Bestilte deler
                        debiteres etter innkjøp.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>9. Verneting</h2>
                    <p>Avtalen er underlagt norsk rett. Nedre Romerike tingrett er verneting ved tvist.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
