export type FAQ = { q: string; a: string; category: string };

export const faqs: FAQ[] = [
    {
        category: 'Bestilling og pris',
        q: 'Hvordan bestiller jeg time?',
        a: 'Enklest er å bruke bestillingsskjemaet på /bestill, eller ringe oss på 67 00 00 00. Du får bekreftelse per SMS innen 2 timer.',
    },
    {
        category: 'Bestilling og pris',
        q: 'Får jeg fastpris før arbeidet starter?',
        a: 'Ja, alltid. Etter diagnose får du et skriftlig fastpris-tilbud som du kan takke ja eller nei til. Ingen arbeid utføres uten ditt samtykke.',
    },
    {
        category: 'Bestilling og pris',
        q: 'Tar dere Vipps eller kort?',
        a: 'Vi aksepterer Vipps, BankAxept, Visa, Mastercard og faktura (for bedriftskunder og med kredittsjekk).',
    },
    {
        category: 'Bestilling og pris',
        q: 'Har dere lånebil?',
        a: 'Ja, vi har 3 lånebiler som du kan reservere kostnadsfritt ved lengre reparasjoner. Forsikring og bompenger dekker vi.',
    },
    {
        category: 'Garanti',
        q: 'Hvilken garanti har jeg på arbeid og deler?',
        a: 'Vi gir 24 måneders garanti på arbeid og originaldeler. Ved bruk av bruktdeler (overhalte motorer, girkasser) er det 12 måneder.',
    },
    {
        category: 'Garanti',
        q: 'Kan jeg miste bilgarantien hvis jeg ikke går til merkeverksted?',
        a: 'Nei. EU-reguleringen Block Exemption gir deg rett til å bruke uavhengig verksted som følger produsentens spesifikasjoner – uten å miste nybilgarantien.',
    },
    {
        category: 'Bilmerker',
        q: 'Hvilke bilmerker kan dere jobbe med?',
        a: 'Vi jobber med alle merker – fra norske klassikere til nye elbiler. Se vår bilmerker-side for detaljer om spesialkompetanse.',
    },
    {
        category: 'Bilmerker',
        q: 'Kan dere reparere elbiler?',
        a: 'Ja, vi er høyvolt-sertifiserte og har erfaring med Tesla, VW ID, Hyundai Ioniq, Kia EV6, BMW i-serien, Audi e-tron, Polestar og mange flere.',
    },
    {
        category: 'Service',
        q: 'Hvor lang tid tar en EU-kontroll?',
        a: 'Selve kontrollen tar 45 minutter. Vi anbefaler at du setter av én time med buffer.',
    },
    {
        category: 'Service',
        q: 'Kan jeg vente på verkstedet?',
        a: 'Ja, vi har ventesone med gratis kaffe, wifi og barnevennlig hjørne. For lengre reparasjoner er lånebil et alternativ.',
    },
    {
        category: 'Service',
        q: 'Utfører dere service på gamle biler?',
        a: 'Ja. Vi jobber med alt fra 1990-modeller og oppover. For klassikere (før 1990) anbefaler vi våre partnere innen veteranbiler.',
    },
    {
        category: 'Dekk',
        q: 'Har dere dekkhotell?',
        a: 'Ja, vi har klimaregulert dekkhotell med plass til 400 sett. Pris fra 1.490,- i sesongen. Vi SMS-varsler før skifte.',
    },
    {
        category: 'Forsikring',
        q: 'Kan dere håndtere forsikringssaker?',
        a: 'Ja. Vi er godkjent av alle større forsikringsselskap og ordner takst, forhåndsgodkjenning og oppgjør for deg.',
    },
    {
        category: 'Forsikring',
        q: 'Hva gjør jeg ved steinsprut i frontruten?',
        a: 'Ring oss med en gang. Små steinsprut kan repareres (uten egenandel hos de fleste forsikringsselskap). Større skader krever ruteskift.',
    },
    {
        category: 'Miljø',
        q: 'Hva gjør dere med brukt olje og filter?',
        a: 'Vi samarbeider med Ragn-Sells for sertifisert avhending av olje, filter, batterier og dekk. Alt resirkuleres forsvarlig.',
    },
    {
        category: 'Område',
        q: 'Kommer dere til meg for henting?',
        a: 'Ja, vi tilbyr henting og bringing innen Nittedal, Hakadal, Gjerdrum og deler av Oslo nord. Kontakt oss for pris.',
    },
];
