export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readMinutes: number;
    author: string;
    category: string;
    tags: string[];
    content: Array<{ heading?: string; paragraphs: string[]; list?: string[] }>;
    relatedSlugs: string[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: 'hvor-ofte-ma-jeg-ta-eu-kontroll',
        title: 'Hvor ofte må jeg ta EU-kontroll? Alt du trenger å vite',
        excerpt:
            'Alle biler i Norge må gjennom EU-kontroll, men intervallet varierer etter bilens alder. Les om fristene, kravene og hva som skjer hvis du glemmer.',
        date: '2025-09-12',
        readMinutes: 6,
        author: 'Nittedal Auto Redaksjon',
        category: 'EU-kontroll',
        tags: ['EU-kontroll', 'sikkerhet', 'Vegvesenet'],
        content: [
            {
                paragraphs: [
                    'EU-kontroll (eller periodisk kjøretøykontroll) er en lovpålagt sikkerhetssjekk. Norge har overtatt EU-regelverket, og alle registrerte kjøretøy må gjennom kontrollen med jevne mellomrom.',
                ],
            },
            {
                heading: 'Nye biler: første EU-kontroll etter 4 år',
                paragraphs: [
                    'For biler som er første gang registrert i Norge skal første EU-kontroll gjennomføres innen 4 år, regnet fra første registrering. Deretter må bilen kontrolleres hvert 2. år.',
                ],
            },
            {
                heading: 'Eldre biler: kontroll annethvert år',
                paragraphs: [
                    'For biler som er eldre enn 4 år gjelder 2-års intervall. Du får varsel fra Statens vegvesen minst 2 måneder før frist.',
                ],
            },
            {
                heading: 'Hva skjer hvis du glemmer?',
                paragraphs: [
                    'Bilen blir avregistrert, forsikringen opphører, og du får ikke lov til å kjøre. Heldigvis kan du bestille time opp til 2 måneder før fristen, så du har god tid til å unngå problemer.',
                ],
                list: [
                    'Du får SMS og brev minst 2 måneder før frist',
                    'Vi anbefaler å booke så tidlig som mulig – verksteder er fulle mot slutten av måneden',
                    'Ved mangler: du har 2 måneder på etterkontroll',
                ],
            },
            {
                heading: 'Hva koster EU-kontroll?',
                paragraphs: [
                    'Hos Nittedal Auto er EU-kontroll fra 1.190,-. Pris inkluderer rapport til Statens vegvesen og gratis oppsummering av anbefalt vedlikehold.',
                ],
            },
        ],
        relatedSlugs: ['sjekkliste-for-eu-kontroll', 'hva-koster-bilhold-i-norge'],
    },
    {
        slug: 'sjekkliste-for-eu-kontroll',
        title: 'Sjekkliste før EU-kontroll: 12 ting du bør fikse selv',
        excerpt:
            'Med litt forberedelse kan du spare penger og unngå påpekninger. Her er 12 enkle sjekkpunkter du kan gjøre selv før du kommer til oss.',
        date: '2025-08-30',
        readMinutes: 8,
        author: 'Anders Olsen, bilkontrollør',
        category: 'EU-kontroll',
        tags: ['EU-kontroll', 'DIY', 'sjekkliste'],
        content: [
            {
                paragraphs: [
                    'De vanligste avvikene i EU-kontrollen er små ting som enkelt kan fikses hjemme. Her er vår sjekkliste:',
                ],
                list: [
                    'Sjekk at alle lys fungerer – blinklys, bremselys, skiltlys',
                    'Rengjør registreringsskiltet så det er lesbart',
                    'Sjekk dekkmønsteret – minimum 1,6 mm (3 mm for vinterdekk anbefales)',
                    'Fyll spylervæske og bytt tørre vindusviskere',
                    'Kontroller dekkmønsteret på begge sider',
                    'Sjekk at speilene ikke er knekte eller løse',
                    'Kontroller at sikkerhetsbeltene ruller inn og ut riktig',
                    'Se etter oljelekkasjer under bilen',
                    'Test parkeringsbrems – den skal holde bilen i brattbakker',
                    'Lytt etter ulyder ved bremsing',
                    'Rens bagasjerommet – tunge ting kan påvirke bremsetest',
                    'Fyll drivstoff til minimum kvart tank',
                ],
            },
            {
                heading: 'Hva vi sjekker hos verkstedet',
                paragraphs: [
                    'Etter din egen sjekk, måler vi bremsekraft, ser på understell, bremseskiver, oppheng og avgassverdier. Dette er ting du ikke kan se selv, men som er like viktige.',
                ],
            },
        ],
        relatedSlugs: ['hvor-ofte-ma-jeg-ta-eu-kontroll', 'vinterdekk-vs-helaarsdekk'],
    },
    {
        slug: 'vinterdekk-vs-helaarsdekk',
        title: 'Vinterdekk vs helårsdekk: Hva er best i Norge?',
        excerpt:
            'Er helårsdekk et godt nok alternativ, eller bør du fortsatt bytte mellom sommer- og vinterdekk? Vi tester og forklarer.',
        date: '2025-10-18',
        readMinutes: 7,
        author: 'Elin Berg, dekkspesialist',
        category: 'Dekk',
        tags: ['dekk', 'vinterdekk', 'helårsdekk'],
        content: [
            {
                paragraphs: [
                    'Sesongskiftet nærmer seg og mange lurer: trenger jeg fortsatt vinterdekk, eller er helårsdekk godt nok? Svaret avhenger av hvor du bor og hvor du kjører.',
                ],
            },
            {
                heading: 'Helårsdekk – fordelene',
                paragraphs: [
                    'Helårsdekk (3PMSF/"snowflake"-merket) er godkjent for vinterkjøring i Norge. De sparer deg for dekkhotell og to bytter i året.',
                ],
                list: [
                    'Lavere totalpris over året',
                    'Ingen stress med sesongbytte',
                    'Godt nok for bilister som kjører lite på vinteren',
                    'Passer for deg som bor i Oslo/Bergen/Trondheim med lite snø',
                ],
            },
            {
                heading: 'Vinterdekk – fortsatt overlegen',
                paragraphs: [
                    'Ekte vinterdekk har mykere gummiblanding og flere lameller. Ved temperaturer under 7 °C og på snø/is vinner de overlegent.',
                ],
                list: [
                    '30–40 % kortere bremsevei på is',
                    'Bedre veigrep i kulde',
                    'Påkrevd på Hadelandsveien og i Nittedal på glatt føre',
                ],
            },
            {
                heading: 'Vår anbefaling',
                paragraphs: [
                    'For Nittedal og omegn anbefaler vi fortsatt rene vinterdekk. Det er lange perioder med snø og is. Bare hvis du kjører lite og hovedsakelig i byen kan helårsdekk være et godt alternativ.',
                ],
            },
        ],
        relatedSlugs: ['nar-bytte-til-vinterdekk', 'daekkhotell-verdt-det'],
    },
    {
        slug: 'nar-bytte-til-vinterdekk',
        title: 'Når bør jeg bytte til vinterdekk? (2026-utgaven)',
        excerpt:
            'Dato-regelen er 1. november, men temperaturen bør styre. Les når du faktisk bør bytte for best sikkerhet og minst slitasje.',
        date: '2025-10-05',
        readMinutes: 5,
        author: 'Nittedal Auto Redaksjon',
        category: 'Dekk',
        tags: ['dekk', 'vinterdekk', 'sesong'],
        content: [
            {
                paragraphs: [
                    'Lovens krav til vinterdekk er fra 1. november til første mandag etter 2. påskedag. Men termometeret er den beste indikatoren.',
                ],
                list: [
                    'Bytt så snart temperaturen kryper under 7 °C om morgenen',
                    'Sommerdekk blir harde og mister grep i kulde',
                    'Vinterdekk sliter raskere på varm asfalt – vent med sommerdekk til over 10 °C',
                ],
            },
        ],
        relatedSlugs: ['vinterdekk-vs-helaarsdekk', 'daekkhotell-verdt-det'],
    },
    {
        slug: 'daekkhotell-verdt-det',
        title: 'Er dekkhotell verdt pengene? Regnestykket',
        excerpt:
            'Dekkhotell koster penger – men du sparer bensin, garasjeplass og risiko. Vi regner på det.',
        date: '2025-10-01',
        readMinutes: 4,
        author: 'Elin Berg',
        category: 'Dekk',
        tags: ['dekkhotell', 'økonomi'],
        content: [
            {
                paragraphs: [
                    'Vi legger dekkene dine inn på temperaturregulert lager. Du betaler ca. 1.490,- i sesongen. Men hva er alternativet?',
                ],
                list: [
                    'Trille dekkene inn i kjelleren – tar 30 min + rygg',
                    'Leie minilager – ofte like dyrt',
                    'Oppbevare ute – skader dekkenes levetid kraftig',
                    'Kjøre to sett helårsdekk – ekstra slitasje',
                ],
            },
            {
                heading: 'Fordelen ved dekkhotell',
                paragraphs: [
                    'Vi tar med dekkene når du kommer til sesongbytte. Du slipper all logistikk. Dekkene er kontrollert og balanserte klar til montering.',
                ],
            },
        ],
        relatedSlugs: ['vinterdekk-vs-helaarsdekk'],
    },
    {
        slug: 'hva-koster-bilhold-i-norge',
        title: 'Hva koster det egentlig å ha bil i Norge? (2026)',
        excerpt:
            'Bilhold er mer enn drivstoff og forsikring. Vi regner ut den totale kostnaden per kilometer for bensin, diesel og elbil.',
        date: '2025-07-15',
        readMinutes: 10,
        author: 'Nittedal Auto Redaksjon',
        category: 'Bilhold',
        tags: ['økonomi', 'TCO'],
        content: [
            {
                paragraphs: [
                    'De fleste undervurderer hva det koster å ha bil. Vi har regnet på tre typiske biler – en bensinbil, en diesel og en elbil.',
                ],
            },
            {
                heading: 'Bensin: Toyota Yaris 1.5',
                paragraphs: [
                    'Forsikring: 8.000,- | Drivstoff (15.000 km): 16.500,- | Service: 3.500,- | Dekk: 2.000,- | Bompenger: 6.000,- | Verdifall: 15.000,- | Årsavgift og trafikkforsikring: 3.000,-. Totalt ca. 54.000,- per år, eller 3,60 kr/km.',
                ],
            },
            {
                heading: 'Diesel: Volkswagen Passat',
                paragraphs: [
                    'Totalt ca. 62.000,- per år. Passer best for deg som kjører over 20.000 km.',
                ],
            },
            {
                heading: 'Elbil: Hyundai Kona Electric',
                paragraphs: [
                    'Strøm: 6.000,- | Service: 2.500,- | Fordeler: ingen bompenger i mange områder, gratis parkering. Totalt ca. 38.000,- per år.',
                ],
            },
            {
                heading: 'Konklusjon',
                paragraphs: [
                    'Elbil er billigst på lang sikt, men har høyere innkjøp. Diesel passer til langkjørere. Bensin er greit for bybruk under 10.000 km/år.',
                ],
            },
        ],
        relatedSlugs: ['elbil-eller-hybrid'],
    },
    {
        slug: 'elbil-eller-hybrid',
        title: 'Elbil eller hybrid? Slik velger du riktig',
        excerpt:
            'Vi har kjørt begge i fem år. Her er hvem som bør velge hva, og hvilke feller du skal unngå.',
        date: '2025-06-20',
        readMinutes: 9,
        author: 'Nittedal Auto Redaksjon',
        category: 'Bilvalg',
        tags: ['elbil', 'hybrid'],
        content: [
            {
                paragraphs: [
                    'Overgangen til elbil skjer fort, men hybrider har også en plass. Her er en ærlig sammenligning.',
                ],
            },
            {
                heading: 'Velg elbil hvis ...',
                paragraphs: [''],
                list: [
                    'Du har egen lademulighet hjemme',
                    'Kjører mest under 400 km per dag',
                    'Verdsetter lav servicekostnad',
                ],
            },
            {
                heading: 'Velg hybrid hvis ...',
                paragraphs: [''],
                list: [
                    'Du kjører lange avstander regelmessig',
                    'Ikke har hjemmelading',
                    'Trenger tilhengerfeste med høy tilhengervekt',
                ],
            },
        ],
        relatedSlugs: ['hva-koster-bilhold-i-norge', 'elbil-vedlikehold'],
    },
    {
        slug: 'elbil-vedlikehold',
        title: 'Elbil-vedlikehold: Hva må gjøres – og ikke gjøres',
        excerpt:
            'Elbiler har færre slitedeler, men ikke null. Her er den komplette vedlikeholdslisten.',
        date: '2025-05-22',
        readMinutes: 7,
        author: 'Tore Næss, høyvolt-sertifisert mekaniker',
        category: 'Elbil',
        tags: ['elbil', 'vedlikehold'],
        content: [
            {
                paragraphs: [
                    'Elbiler har ikke motorolje, eksos eller tennplugger. Men andre ting trenger jevnlig kjærlighet:',
                ],
                list: [
                    'Bremsevæske – hvert 2 år (elbiler bruker mindre mekaniske bremser, men væsken eldes likevel)',
                    'Girolje i reduksjonsgir – hvert 3-5 år',
                    'Pollenfilter årlig',
                    'Kontroll av 12V-batteri',
                    '4-hjulskontroll etter dekkskifte',
                    'Kontroll av underside – saltskade',
                    'Oppdatering av programvare (ofte OTA)',
                ],
            },
        ],
        relatedSlugs: ['elbil-eller-hybrid', 'kulde-og-rekkevidde'],
    },
    {
        slug: 'kulde-og-rekkevidde',
        title: 'Kulde og rekkevidde: Hvordan beskytte elbilen din om vinteren',
        excerpt:
            'Rekkevidden kan falle 30 % i minusgrader. Slik minimerer du tapet.',
        date: '2025-11-10',
        readMinutes: 6,
        author: 'Tore Næss',
        category: 'Elbil',
        tags: ['elbil', 'vinter'],
        content: [
            {
                paragraphs: ['Kulde påvirker elbil-rekkevidde betydelig. Her er tipsene:'],
                list: [
                    'Forvarm bilen mens den lader – ikke etter at du har kjørt av',
                    'Bruk setevarme og rattvarme – mye mer effektivt enn full kupeoppvarming',
                    'Hold batterinivå mellom 20–80 % for daglig bruk',
                    'Bruk varmepumpe (hvis bilen har det)',
                    'Holdladning ved parkering i ekstrem kulde',
                ],
            },
        ],
        relatedSlugs: ['elbil-vedlikehold'],
    },
    {
        slug: 'dsg-oljeskift',
        title: 'DSG-oljeskift: Hvorfor er det så viktig?',
        excerpt:
            'VW-konsernets DSG-gir er genial teknikk, men krever oljeskift. Unnlatelse kan føre til reparasjon på 40.000+ kroner.',
        date: '2025-04-14',
        readMinutes: 5,
        author: 'Anders Olsen',
        category: 'Girkasse',
        tags: ['DSG', 'VW', 'girkasse'],
        content: [
            {
                paragraphs: [
                    'DSG (Direct Shift Gearbox) finnes i de fleste moderne VW, Audi, Skoda og Seat. Oljen i DSG-en er spesialolje og må skiftes hvert 60.000 km – selv om VW sier "livslang".',
                ],
            },
            {
                heading: 'Våte vs tørre DSG',
                paragraphs: [
                    'Våte DSG (DQ250, DQ500) har 7 liter olje. Tørre DQ200 har mindre og annen olje. Vi bruker alltid spesifisert olje (G 052 182 / G 052 529).',
                ],
            },
        ],
        relatedSlugs: ['girkasse-problemer'],
    },
    {
        slug: 'girkasse-problemer',
        title: '7 tegn på at girkassen din er i trøbbel',
        excerpt:
            'Fra rykk ved giring til merkelige lyder – hør etter disse 7 signalene.',
        date: '2025-03-08',
        readMinutes: 6,
        author: 'Anders Olsen',
        category: 'Girkasse',
        tags: ['girkasse', 'feilsøking'],
        content: [
            {
                paragraphs: ['Symptomene kommer ofte før en total girkassehavari. Hør etter disse:'],
                list: [
                    'Rykk ved giring (spesielt DSG)',
                    'Lang forsinkelse mellom gir og respons',
                    'Knirking eller rasling når du skifter',
                    'Bilen "smiker seg" på kløtsjen',
                    'Oljelekkasje under bilen',
                    'Brennlukt etter hard kjøring',
                    'Girposisjonssensor-feil (P0705-kode)',
                ],
            },
        ],
        relatedSlugs: ['dsg-oljeskift'],
    },
    {
        slug: 'bremser-naar-bytte',
        title: 'Bremseklosser og -skiver: Når er det på tide å bytte?',
        excerpt:
            'Bremseservice handler om sikkerhet. Her er symptomene som krever at du kommer inn umiddelbart.',
        date: '2025-02-14',
        readMinutes: 5,
        author: 'Nittedal Auto Redaksjon',
        category: 'Bremser',
        tags: ['bremser', 'sikkerhet'],
        content: [
            {
                paragraphs: ['Bremsene er det viktigste sikkerhetssystemet. Her er 6 tegn på at noe er galt:'],
                list: [
                    'Skriking eller metallyd ved bremsing',
                    'Pedal som synker til bunn eller er svampete',
                    'Bilen drar til siden når du bremser',
                    'Rystelser i rattet eller pedalen',
                    'Gul eller rød varsellampe',
                    'Lang bremsevei – kommer ikke ned i fart som før',
                ],
            },
        ],
        relatedSlugs: ['sjekkliste-for-eu-kontroll'],
    },
    {
        slug: 'varsellamper-guide',
        title: 'Komplett guide til bilens varsellamper',
        excerpt:
            'Hva betyr egentlig de ulike lampene i dashbordet? Rødt er alvor, gult er advarsel, grønt er informasjon.',
        date: '2025-01-20',
        readMinutes: 11,
        author: 'Nittedal Auto Redaksjon',
        category: 'Feilsøking',
        tags: ['varsellamper', 'dashboard'],
        content: [
            {
                paragraphs: [
                    'Moderne biler har over 60 ulike varsellamper. Her er de viktigste du må forstå:',
                ],
            },
            {
                heading: 'Røde varsellamper – stopp umiddelbart',
                paragraphs: [''],
                list: [
                    'Oljetrykk lav – stans motoren umiddelbart',
                    'Temperaturlampe (rød) – motor overopphetet',
                    'Bremsesystem – bremsevæske for lav',
                    'Airbag',
                    'Ladning (batteri) – generator virker ikke',
                ],
            },
            {
                heading: 'Gule varsellamper – bestill time snart',
                paragraphs: [''],
                list: [
                    'Motorkontroll (check engine)',
                    'ABS',
                    'ESP/DSC',
                    'Partikkelfilter (DPF)',
                    'Dekktrykk',
                    'Glødepluggindikator (diesel)',
                ],
            },
            {
                heading: 'Grønne og blå lys',
                paragraphs: [
                    'Grønne lys er informasjon – blinklys, cruise control, lykter. Blå lys er fjernlys eller forvarmer. Ingen fare.',
                ],
            },
        ],
        relatedSlugs: ['check-engine-lyser'],
    },
    {
        slug: 'check-engine-lyser',
        title: 'Check engine-lampen lyser – hva nå?',
        excerpt:
            'Ikke få panikk. Den gule motorlampen kan være alt fra løs tankdeksel til dyr reparasjon. Vi forklarer.',
        date: '2025-01-05',
        readMinutes: 5,
        author: 'Anders Olsen',
        category: 'Feilsøking',
        tags: ['motorlampe', 'OBD'],
        content: [
            {
                paragraphs: [
                    'Motorkontroll-lampen utløses av alt fra trivielle ting til alvorlige feil. Vi kobler OBD2-skanner og leser feilkodene for deg – ofte gratis hvis du fikser feilen hos oss.',
                ],
                list: [
                    'Løs eller defekt tankdeksel (vanligste årsak!)',
                    'Defekt lambdasonde',
                    'Feil i katalysator',
                    'EGR-ventil',
                    'Tennplugger eller spoler',
                    'Misstenkt turbo-feil',
                ],
            },
        ],
        relatedSlugs: ['varsellamper-guide'],
    },
    {
        slug: 'bilkjop-sjekkliste',
        title: 'Bilkjøp-sjekkliste: 20 ting å sjekke før du betaler',
        excerpt:
            'Kjøper du brukt? Ta med denne listen og spar deg selv for 50.000+ i uventede reparasjoner.',
        date: '2024-12-10',
        readMinutes: 12,
        author: 'Nittedal Auto Redaksjon',
        category: 'Bilkjøp',
        tags: ['bilkjøp', 'brukt bil'],
        content: [
            {
                paragraphs: [
                    'Et grundig bilkjøp krever tid. Her er vår 20-punkters sjekkliste basert på 15 års verkstederfaring:',
                ],
                list: [
                    'Sjekk kjørelengde opp mot servicehistorikk',
                    'Lever registreringsnummeret inn i Vegvesenets app',
                    'Forsikre deg om at bilen ikke er stjålet',
                    'Kontroller om bilen står i pant',
                    'Spør etter servicebok og -heft',
                    'Sjekk EU-kontroll-historikk',
                    'Se etter rust – hjulbuer, bunnplater',
                    'Kontroller dekkmønster (jevn slitasje = god hjulstilling)',
                    'Åpne og lukk alle dører og ruter',
                    'Test klimaanlegget (A/C og varme)',
                    'Kjør bilen i minst 20 minutter – alle gir og motorbelastning',
                    'Lytt etter ulyder ved akselerasjon og bremsing',
                    'Test cruise control',
                    'Bruk OBD2-skanner – feilkoder?',
                    'Sjekk oljen – melkefarge = vann i olje',
                    'Se under bilen – lekkasjer?',
                    'Kjenn på motoren når den er kald – starter den enkelt?',
                    'Kontroller elektriske funksjoner: vindu, soltak, navigasjon',
                    'Få vår førkjøpsinspeksjon (990,-)',
                    'Forhandle på grunnlag av eventuelle funn',
                ],
            },
        ],
        relatedSlugs: ['varsellamper-guide'],
    },
    {
        slug: 'riktig-dekktrykk',
        title: 'Riktig dekktrykk: Spar penger og kjør tryggere',
        excerpt:
            'Feil dekktrykk koster deg både i drivstoff og sikkerhet. Her er reglene.',
        date: '2024-11-02',
        readMinutes: 4,
        author: 'Elin Berg',
        category: 'Dekk',
        tags: ['dekk', 'tips'],
        content: [
            {
                paragraphs: [
                    'Riktig dekktrykk angis i tankdekselet eller B-stolpen. Vanligvis 2,2–2,5 bar foran og 2,0–2,4 bar bak, men sjekk alltid bilen din.',
                ],
                list: [
                    'Kontroller månedlig og før lange turer',
                    'Mål alltid med kalde dekk',
                    'Lavt trykk = 5-10 % mer drivstoff, kortere dekklevetid',
                    'Moderne biler har TPMS – lytt til advarslene',
                ],
            },
        ],
        relatedSlugs: ['vinterdekk-vs-helaarsdekk'],
    },
];

export function getPostBySlug(slug: string) {
    return blogPosts.find((p) => p.slug === slug);
}
