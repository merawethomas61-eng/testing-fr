import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Personvernerklæring | Nittedal Auto',
    description:
        'Slik behandler vi dine personopplysninger i tråd med GDPR og personopplysningsloven. Les om dine rettigheter og hvordan du kontakter oss.',
    robots: { index: true, follow: true },
};

export default function PersonvernSide() {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' }}>
            <Header />
            <Breadcrumbs items={[{ label: 'Personvern' }]} />

            <main style={{ maxWidth: '800px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                <h1 style={{ fontSize: '40px', fontWeight: 800, margin: '0 0 20px 0' }}>Personvernerklæring</h1>
                <p style={{ fontSize: '15px', color: '#888' }}>Sist oppdatert: 1. januar 2026</p>

                <section style={{ marginTop: '40px', lineHeight: 1.8, fontSize: '16px', color: '#333' }}>
                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>1. Behandlingsansvarlig</h2>
                    <p>
                        Nittedal Auto AS, org.nr. 912 345 678, Hadelandsveien 123, 1482 Nittedal, er behandlingsansvarlig
                        for personopplysningene som behandles i forbindelse med våre tjenester.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>2. Hvilke opplysninger samler vi inn?</h2>
                    <ul>
                        <li>Navn, telefonnummer, e-postadresse og adresse</li>
                        <li>Bilens registreringsnummer, merke og modell</li>
                        <li>Servicehistorikk og reparasjonsoversikt</li>
                        <li>Betalingsinformasjon (kun for gjennomføring av transaksjon)</li>
                        <li>Tekniske data ved OBD-diagnose</li>
                        <li>Foto fra skadebefaring, med samtykke</li>
                    </ul>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>3. Formål</h2>
                    <p>
                        Vi bruker opplysningene til å levere de tjenestene du bestiller, kommunisere med deg, oppfylle
                        lovpålagte plikter (f.eks. rapportering til Statens vegvesen) og forbedre våre tjenester.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>4. Dine rettigheter</h2>
                    <p>Du har rett til å:</p>
                    <ul>
                        <li>Få innsyn i hvilke opplysninger vi har om deg</li>
                        <li>Få rettet eller slettet uriktige opplysninger</li>
                        <li>Motsette deg markedsføring</li>
                        <li>Be om begrensning av behandling</li>
                        <li>Be om overføring av data (dataportabilitet)</li>
                        <li>Klage til Datatilsynet</li>
                    </ul>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>5. Lagring</h2>
                    <p>
                        Servicehistorikk og økonomiske data lagres i henhold til bokføringsloven i 5 år. Øvrige
                        opplysninger slettes når formålet er oppfylt.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>6. Informasjonskapsler (cookies)</h2>
                    <p>
                        Vi bruker minimalt med cookies – kun strengt nødvendige for at nettsiden skal fungere. Vi bruker
                        ikke tredjeparts sporing eller annonsekap-sler.
                    </p>

                    <h2 style={{ fontSize: '22px', marginTop: '30px' }}>7. Kontakt</h2>
                    <p>
                        For spørsmål om personvern, kontakt personvernombudet vårt på{' '}
                        <a href="mailto:personvern@nittedalauto.no" style={{ color: '#e63946', fontWeight: 700 }}>
                            personvern@nittedalauto.no
                        </a>
                        .
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
