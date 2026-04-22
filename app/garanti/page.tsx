import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CTASection from '@/app/components/CTASection';

export const metadata: Metadata = {
    title: 'Garanti på arbeid og deler | Nittedal Auto',
    description:
        '24 måneders garanti på arbeid og originaldeler. Les alt om hva garantien dekker, hvordan du reklamerer og dine rettigheter etter kjøpsloven.',
};

export default function GarantiSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header />
            <Breadcrumbs items={[{ label: 'Garanti' }]} />

            <main style={{ maxWidth: '800px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <header style={{ marginBottom: '40px' }}>
                    <p style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                        Trygghet
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '10px 0 14px 0' }}>Vår garanti</h1>
                    <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7 }}>
                        Du skal kunne stole på arbeidet vi gjør. Derfor gir vi markedets beste garanti på både reparasjoner
                        og deler – i tillegg til dine lovbestemte rettigheter etter kjøpsloven og håndverkertjenesteloven.
                    </p>
                </header>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 16px 0' }}>Slik fungerer garantien</h2>
                    <ul style={{ paddingLeft: '22px', lineHeight: 1.9, fontSize: '16px' }}>
                        <li>
                            <strong>24 måneders garanti</strong> på arbeid og originaldeler – uten kilometerbegrensning.
                        </li>
                        <li>
                            <strong>12 måneders garanti</strong> på bruktdeler (overhalte motorer, girkasser, brukte
                            styreenheter).
                        </li>
                        <li>Garantien følger bilen – ikke eieren. Selger du bilen innen garantiperioden, overtar neste eier garantien.</li>
                        <li>Vi dekker både deler og arbeidstid dersom noe skulle gå galt på grunn av feil hos oss.</li>
                        <li>Slitedeler (bremseklosser, vindusviskere, batteri, filter) har normal slitasjevarsel fra produsent.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 16px 0' }}>Hvordan reklamere?</h2>
                    <ol style={{ paddingLeft: '22px', lineHeight: 1.9, fontSize: '16px' }}>
                        <li>Kontakt oss på post@nittedalauto.no eller 67 00 00 00.</li>
                        <li>Beskriv problemet og legg ved faktura/ordreregistrering om mulig.</li>
                        <li>Vi inviterer bilen inn for en kostnadsfri inspeksjon.</li>
                        <li>Ved dekningsmessig feil fikser vi uten kostnad.</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '40px', padding: '28px', backgroundColor: '#f4f4f5', borderRadius: '6px' }}>
                    <h3 style={{ fontSize: '20px', margin: '0 0 12px 0' }}>Dine rettigheter etter loven</h3>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                        I tillegg til vår bedriftsgaranti har du som forbruker rettigheter etter kjøpsloven og
                        håndverkertjenesteloven. Reklamasjonsfrist på arbeider og deler er 5 år i forbrukerforhold.
                        Reklamasjon må meldes innen rimelig tid etter oppdagelse.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '26px', margin: '0 0 16px 0' }}>Dette dekker garantien ikke</h2>
                    <ul style={{ paddingLeft: '22px', lineHeight: 1.9, fontSize: '16px', color: '#555' }}>
                        <li>Normal slitasje (bremseklosser, dekk, batteri, filter).</li>
                        <li>Skade som følge av ulykke, uhell, frost, brann eller feilbruk.</li>
                        <li>Deler du har bestilt og levert selv (egen-medbrakte deler).</li>
                        <li>Endringer/modifikasjoner utført av andre etter vår reparasjon.</li>
                    </ul>
                </section>
            </main>

            <CTASection heading="Spørsmål om garanti?" text="Vi svarer raskt og ærlig på alt om garantier og reklamasjoner." />
            <Footer />
        </div>
    );
}
