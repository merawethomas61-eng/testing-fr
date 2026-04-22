export type Service = {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    priceFrom: string;
    duration: string;
    intro: string;
    description: string[];
    included: string[];
    benefits: string[];
    faq: Array<{ q: string; a: string }>;
    relatedSlugs: string[];
    keywords: string[];
};

export const services: Service[] = [
    {
        slug: 'eu-kontroll',
        title: 'EU-kontroll i Nittedal',
        shortTitle: 'EU-kontroll',
        tagline: 'Lovpålagt sikkerhetskontroll utført av sertifiserte kontrollører',
        priceFrom: '1 190,-',
        duration: 'Ca. 45 minutter',
        intro:
            'EU-kontroll (også kjent som periodisk kjøretøykontroll) er en lovpålagt sikkerhetskontroll som alle biler i Norge må gjennom. Hos Nittedal Auto har vi godkjent kontrollstasjon, og vi kjører EU-kontroll for alle bilmerker med moderne testutstyr.',
        description: [
            'Vi er en autorisert og sertifisert kontrollstasjon, og kan utføre EU-kontroll for personbiler, varebiler under 3500 kg, campingbiler, tilhengere og motorsykler. Kontrollen utføres alltid av en teknisk godkjent kontrollør, og vi rapporterer direkte til Statens vegvesen.',
            'Du får beskjed om kontrollen minst to måneder før fristen, men vi anbefaler å booke tidlig – spesielt i månedene før sommerferien og før vinteren setter inn. Da er det mindre kø, og du rekker å få fikset eventuelle mangler i god tid.',
            'Om bilen har mangler får du alltid en ærlig diagnose, et fastpris-estimat, og muligheten til å få jobben gjort hos oss før en etterkontroll. Vi sender aldri en bil fra oss som ikke er trafikksikker.',
        ],
        included: [
            'Visuell og teknisk kontroll av understell, bremser, styring og hjuloppheng',
            'Lys og elektrisk anlegg inkludert blinklys, bremselys og nærlys',
            'Kontroll av dekk, felg, støtdempere og fjæring',
            'Eksosanlegg og miljømåling (avgassmåling)',
            'Karosseri, speil, vindusviskere og vindusruter',
            'Utfyllende rapport og dokumentasjon til Statens vegvesen',
        ],
        benefits: [
            'Vi gir deg fastpris før vi starter – ingen skjulte overraskelser',
            'Rask saksbehandling og rapport samme dag',
            'Tilbud om reparasjon av mangler med prioritert time',
            'Gratis kaffe og wifi i ventesonen vår',
            'Erfarne kontrollører med over 15 år i bransjen',
        ],
        faq: [
            {
                q: 'Hvor ofte må jeg ta EU-kontroll?',
                a: 'Nye biler må gjennom første EU-kontroll fire år etter første gangs registrering, deretter annethvert år. For eldre biler gjelder toårs-intervall. Sjekk frist på Vegvesenet eller i Vegvesenet-appen.',
            },
            {
                q: 'Hva skjer om jeg ikke tar EU-kontroll i tide?',
                a: 'Bilen blir avregistrert, og du kan få kjøreforbud. Vi anbefaler å booke minst én måned før frist – da har du tid til å utbedre eventuelle mangler uten stress.',
            },
            {
                q: 'Hva hvis bilen får merknader?',
                a: 'Vi gir deg en tydelig oversikt over hva som må gjøres. Små mangler kan ofte fikses på dagen, mens større jobber får fastpris og egen time. Etter utbedring gjennomfører vi etterkontroll.',
            },
            {
                q: 'Kan jeg ta EU-kontroll i et annet distrikt?',
                a: 'Ja, EU-kontroll gjelder nasjonalt. Vi tar imot kunder fra hele Nittedal og nabokommuner som Gjerdrum, Skedsmo, Lørenskog og Oslo-området.',
            },
        ],
        relatedSlugs: ['hovedservice', 'bremser', 'feilsoking', 'lysjustering'],
        keywords: [
            'EU-kontroll Nittedal',
            'periodisk kjøretøykontroll',
            'EU-kontroll stasjon',
            'EU-kontroll bil',
            'PKK Nittedal',
        ],
    },
    {
        slug: 'hovedservice',
        title: 'Hovedservice og årsservice',
        shortTitle: 'Hovedservice',
        tagline: 'Komplett service som forlenger bilens levetid',
        priceFrom: '3 490,-',
        duration: '2–4 timer',
        intro:
            'En grundig hovedservice er den billigste bilforsikringen du kan kjøpe. Vi følger bilprodusentens anbefalte serviceintervaller og bruker originaldeler eller deler av like god kvalitet, slik at nybilgaranti og verdi opprettholdes.',
        description: [
            'Hovedservice er en omfattende gjennomgang av bilens vitale systemer, hvor vi bytter olje, filtre og kontrollerer alt fra motorkjøling til bremseeffekt. En godt vedlikeholdt bil bruker mindre drivstoff, har høyere bruktverdi og gir deg trygghet på veien.',
            'Vi fører digital servicehistorikk og stempler servicehefte – viktig dersom du en dag skal selge bilen. Serviceintervaller følger alltid produsentens spesifikasjoner, enten det er hvert 15.000, 20.000 eller 30.000 km.',
            'Under servicen får du en komplett sjekkliste og, om nødvendig, et forslag til forebyggende reparasjoner – men alltid med fastpris og uten press.',
        ],
        included: [
            'Skifte av motorolje og oljefilter',
            'Bytte av luftfilter, pollenfilter og drivstoffilter ved behov',
            'Kontroll og etterfylling av alle væsker (kjølevæske, bremsevæske, servostyring, spylervæske)',
            'Kontroll av belter, slanger og drivaksler',
            'Kontroll av bremser, dekk, støtdempere og avgassrenseanlegg',
            'Feilkodelesing og nullstilling av serviceintervall',
            'Utfyllende sjekkliste og digital servicerapport',
        ],
        benefits: [
            'Bevarer nybilgaranti og bruktbilverdi',
            'Lavere drivstofforbruk med ren motor',
            'Finner små problemer før de blir store og dyre',
            'Digitalt servicehefte – følger bilen hele levetiden',
            'Hentebil og lånebil tilgjengelig for lengre servicer',
        ],
        faq: [
            {
                q: 'Hvor ofte trenger bilen hovedservice?',
                a: 'De fleste biler har service hver 15.000–30.000 km eller hver 12.–24. måned. Elbiler har egne intervaller, men trenger også service på bremser, filter og chassis.',
            },
            {
                q: 'Kan dere stemple servicehefte?',
                a: 'Ja. Vi fører digital servicehistorikk hos produsenten der det er mulig, i tillegg til tradisjonelt servicehefte.',
            },
            {
                q: 'Må jeg på merkeverksted for å beholde garantien?',
                a: 'Nei. Etter EU-reguleringen Block Exemption kan du bruke et uavhengig merkeverksted som følger produsentens spesifikasjoner og bruker godkjente deler – uten å miste garantien.',
            },
        ],
        relatedSlugs: ['oljeskift', 'bremser', 'eu-kontroll', 'feilsoking'],
        keywords: ['hovedservice Nittedal', 'årsservice bil', 'service alle bilmerker', 'lavpris service'],
    },
    {
        slug: 'oljeskift',
        title: 'Oljeskift og filterbytte',
        shortTitle: 'Oljeskift',
        tagline: 'Rask og rimelig oljeservice med premiumolje',
        priceFrom: '890,-',
        duration: '45–60 minutter',
        intro:
            'Oljeskift er den billigste formen for vedlikehold – og den mest undervurderte. Gammel olje mister smøreevnen, forurenser motoren og kan gjøre dyre reparasjoner nødvendige.',
        description: [
            'Vi fører premium fullsyntetisk olje fra anerkjente merker som Castrol, Mobil 1 og Shell Helix, i alle viskositeter (0W-20, 0W-30, 5W-30, 5W-40, 10W-40). Vi velger alltid riktig spesifikasjon for din bil – LongLife, ACEA C3, VW 504.00 eller hva produsenten krever.',
            'Under oljeskiftet skifter vi også oljefilter og kontrollerer tetninger, sump og oljetrykk. Dersom vi oppdager lekkasjer gir vi deg fastpris på utbedring.',
        ],
        included: [
            'Tapping av gammel olje og forsvarlig avfallshåndtering',
            'Skifte av oljefilter med originaldel eller tilsvarende',
            'Påfylling av ny olje i korrekt spesifikasjon og mengde',
            'Kontroll av alle væsker',
            'Lekkasjekontroll under bil',
            'Nullstilling av serviceintervall',
        ],
        benefits: [
            'Mens-du-venter time tilgjengelig',
            'Vi bruker kun olje som matcher bilprodusentens spesifikasjoner',
            'Miljøvennlig avhending av brukt olje og filter',
            'Fast lav pris på de vanligste oljevolumer',
        ],
        faq: [
            {
                q: 'Hvor ofte bør jeg skifte olje?',
                a: 'Vanligvis hver 15.000–20.000 km eller hver 12. måned. Kjører du mye kortdistanse eller pulseskjøring, anbefaler vi oftere skifte.',
            },
            {
                q: 'Kan jeg velge olje selv?',
                a: 'Ja, så lenge oljen oppfyller produsentens spesifikasjoner. Vi kan også bruke olje du har med selv (BYO – bring your own).',
            },
        ],
        relatedSlugs: ['hovedservice', 'feilsoking', 'eu-kontroll'],
        keywords: ['oljeskift Nittedal', 'billig oljeskift', 'oljeskift bil', 'fullsyntetisk olje'],
    },
    {
        slug: 'bremser',
        title: 'Bremseservice og bremsebytte',
        shortTitle: 'Bremser',
        tagline: 'Trygge bremser – din viktigste sikkerhet',
        priceFrom: '2 290,-',
        duration: '1–3 timer',
        intro:
            'Bremsene er det viktigste sikkerhetssystemet i bilen. Når klossene synger, pedalen blir svampete, eller varsellampen lyser, er det på tide å ta det på alvor. Vi skifter klosser, skiver, kaliper og bremsevæske på alle bilmerker – med kvalitetsdeler og full garanti.',
        description: [
            'Vi bruker bremseklosser fra Brembo, TRW, ATE, Textar og Ferodo – samme kvalitet som originaldelene fra fabrikk. Du kan også velge keramiske lavstøvsklosser hvis du er lei av støvete felger.',
            'En komplett bremseservice inkluderer måling av skivetykkelse, visuell inspeksjon av kaliper og bremseslanger, bytte av væske ved behov, og alltid en prøvekjøring før du henter bilen.',
        ],
        included: [
            'Utskifting av bremseklosser foran eller bak',
            'Utskifting av bremseskiver ved behov',
            'Rensing og kontroll av kaliper og styrepinner',
            'Bytte av bremsevæske (DOT 4 eller DOT 5.1)',
            'Lufting av bremsesystem',
            'Funksjonstest og prøvekjøring',
        ],
        benefits: [
            'Kvalitetsdeler med 24 måneders garanti',
            'Fastpris før vi starter arbeidet',
            'Gratis bremsesjekk og estimat',
            'Vi kan skifte bremser på alle bilmerker – også elbiler',
        ],
        faq: [
            {
                q: 'Hvor ofte må jeg skifte bremseklosser?',
                a: 'Det varierer fra 30.000 til 80.000 km, avhengig av kjøring. Bykjøring sliter mye mer enn landeveiskjøring.',
            },
            {
                q: 'Hvorfor suser bremsene mine?',
                a: 'Som regel skyldes det slitte klosser eller deformerte skiver. Vi anbefaler bremsesjekk så fort lyden oppstår.',
            },
            {
                q: 'Bruker elbiler bremser sjeldnere?',
                a: 'Ja, regenerativ brems reduserer slitasjen betydelig, men bremseskivene kan ruste raskere. Vi anbefaler ekstra kontroll på elbilbremser.',
            },
        ],
        relatedSlugs: ['hovedservice', 'eu-kontroll', 'feilsoking', 'dekk-og-felg'],
        keywords: ['bremsebytte Nittedal', 'bremseklosser pris', 'bremseskiver bil', 'bremseservice'],
    },
    {
        slug: 'dekk-og-felg',
        title: 'Dekkskift, dekkhotell og balansering',
        shortTitle: 'Dekk & felg',
        tagline: 'Omlegging, avbalansering og trygg oppbevaring',
        priceFrom: '590,- (omlegging)',
        duration: '30–60 minutter',
        intro:
            'Riktig dekk er forskjellen på kontroll og katastrofe. Vi tilbyr dekkomlegging, avbalansering, dekkhotell og salg av premium sommerdekk, vinterdekk og helårsdekk til alle biltyper.',
        description: [
            'Dekkhotellet vårt er temperaturregulert og overvåket. Vi henter dekkene dine ut klare til montering når sesongen kommer. Ingen mer leting etter dekk i kalde garasjer.',
            'Vi fører Michelin, Continental, Bridgestone, Nokian, Pirelli, Goodyear og Hankook – både premium og budsjettdekk. Du får ærlig råd om hvilke dekk som passer deg, bilen og kjørestilen din.',
        ],
        included: [
            'Demontering av gamle dekk og montering av nye',
            'Avbalansering på datastyrt maskin',
            'Kontroll av ventiler og TPMS (dekktrykksensorer)',
            'Trykkjustering til produsentens anbefaling',
            'Momenttrekk av hjulbolter',
            'Tilbud om oppbevaring i dekkhotell',
        ],
        benefits: [
            'Dekkhotell med henting og bringing',
            'Premium- og budsjettdekk på lager',
            'Fastpris uansett felgstørrelse (opp til 22")',
            'SMS-varsel før dekkbytte-sesongen',
        ],
        faq: [
            {
                q: 'Når er det tid for vinterdekk?',
                a: 'Ifølge loven er det krav om vinterdekk fra 1. november til første mandag etter 2. påskedag. Vi anbefaler å bytte så snart temperaturen nærmer seg 7 °C.',
            },
            {
                q: 'Hva koster dekkhotell?',
                a: 'Fra 1.490,- i sesongen. Du får påminnelse, lagring i oppvarmet bygg og montering ved hjemkomst.',
            },
        ],
        relatedSlugs: ['hjulstilling', 'bremser', 'eu-kontroll'],
        keywords: ['dekkomlegging Nittedal', 'dekkhotell', 'vinterdekk', 'sommerdekk', 'dekksalg'],
    },
    {
        slug: 'hjulstilling',
        title: 'Hjulstilling og firehjulsstyring',
        shortTitle: 'Hjulstilling',
        tagline: 'Presis justering med 3D-måling',
        priceFrom: '990,-',
        duration: '45 minutter',
        intro:
            'Feil hjulstilling gir skjevslitasje på dekk, dårligere veigrep og unødvendig drivstofforbruk. Med topp moderne 3D-laser kontrollerer og justerer vi alle fire hjul til millimeterpresisjon.',
        description: [
            'Hjulstilling utføres når du merker at bilen trekker til siden, når rattet står skjevt, eller etter skader som kantsteinsmøter og fartsdumper. Det bør også gjøres etter bytte av støtdempere, kulebolter eller styreledd.',
            'Vi bruker utstyr fra Hunter og Beissbarth, og kalibrerer både camber, caster og toe-in.',
        ],
        included: [
            '3D-måling av alle fire hjul',
            'Justering av toe-in og toe-out',
            'Camber- og caster-justering der bilen tillater det',
            'Rapport før og etter justering',
            'Kontroll av kulebolter, styreledd og hjullagre',
        ],
        benefits: [
            'Jevnere dekkslitasje – sparer penger på dekk',
            'Bedre veigrep og stabilitet',
            'Lavere drivstofforbruk (opptil 5 %)',
            'Utføres samme dag – mens du venter',
        ],
        faq: [
            {
                q: 'Hvor ofte bør hjulstilling kontrolleres?',
                a: 'Vi anbefaler kontroll ved dekkskifte, ved mistanke om skjev slitasje, eller hvert andre år.',
            },
        ],
        relatedSlugs: ['dekk-og-felg', 'bremser', 'hovedservice'],
        keywords: ['hjulstilling Nittedal', '4-hjulskontroll', 'firehjulsmåling'],
    },
    {
        slug: 'ac-service',
        title: 'AC-service og klimaanlegg',
        shortTitle: 'AC-service',
        tagline: 'Kjølig, ren og frisk kupéluft hele året',
        priceFrom: '1 490,-',
        duration: '60 minutter',
        intro:
            'Klimaanlegget mister opptil 10 % av gassen hvert år. Vi utfører AC-service med R134a og R1234yf, renser systemet og bytter pollenfilter for bedre luftkvalitet.',
        description: [
            'En AC-service består av full tapping av gamle gassrester, lekkasjetest, vakuumpumping, og ny påfylling av riktig type kuldemedium og olje. Vi bruker automatisk service-maskin fra Bosch for presis dosering.',
            'Mange opplever dårlig lukt i kupéen – det skyldes ofte sopp og bakterier i fordamperen. Vi kan supplere med antibakteriell bombe og pollenfilter-skift.',
        ],
        included: [
            'Utstuing og vakuumpumping av anlegg',
            'Lekkasjetest med UV og trykk',
            'Påfylling av korrekt mengde kuldemedium og olje',
            'Kontroll av viftemotor og temperaturregulering',
            'Tilbud om pollenfilter-bytte',
        ],
        benefits: [
            'Kald luft på varme dager, rask avrimning om vinteren',
            'Friskere kupé uten soppvekst',
            'Lavere drivstofforbruk med effektivt anlegg',
            'Samme tjeneste til elbiler (varmepumpesystem)',
        ],
        faq: [
            {
                q: 'Hvor ofte trenger AC service?',
                a: 'Hvert 2. år er tommelfingerregelen. Bruker du AC-en lite om vinteren, tørker pakningene og lekkasjer oppstår lettere.',
            },
        ],
        relatedSlugs: ['hovedservice', 'feilsoking', 'pollenfilter'],
        keywords: ['AC-service Nittedal', 'klimaanlegg bil', 'aircondition bil', 'R1234yf'],
    },
    {
        slug: 'feilsoking',
        title: 'Feilsøking og diagnose',
        shortTitle: 'Feilsøking',
        tagline: 'Avanserte diagnoseverktøy og erfarne teknikere',
        priceFrom: '990,-',
        duration: '30–90 minutter',
        intro:
            'Lyser en varsellampe? Går bilen ujevnt? Vi har verktøy for å lese feilkoder på alle moderne bilmerker – inkludert elbiler – og finner årsaken før vi anbefaler reparasjon.',
        description: [
            'Med diagnoseverktøy fra Autologic, Bosch KTS og Launch kan vi lese og tolke feilkoder fra motor, girkasse, ABS, airbag, klima og andre styreenheter (ECU). Vi slukker ikke bare lampen – vi finner roten til problemet.',
            'Ofte blir diagnose trukket fra reparasjonsprisen dersom du velger å fikse feilen hos oss.',
        ],
        included: [
            'Full feilkodelesing på alle styreenheter',
            'Skriftlig rapport med forklaring',
            'Estimat og fastpris på reparasjon',
            'Sletting av feilkoder og testkjøring',
        ],
        benefits: [
            'Ingen "prøve-og-feile"-reparasjoner',
            'Rapport du kan ta med til forsikring eller selger',
            'Diagnose trekkes fra reparasjonsprisen',
        ],
        faq: [
            {
                q: 'Hvorfor lyser motorlampen?',
                a: 'Det kan skyldes alt fra løs tankdeksel til defekt lambdasonde eller katalysator. Kun diagnose kan gi presist svar.',
            },
        ],
        relatedSlugs: ['motorreparasjon', 'eu-kontroll', 'hovedservice'],
        keywords: ['feilsøking bil Nittedal', 'OBD2 diagnose', 'motorlampe lyser', 'feilkoder bil'],
    },
    {
        slug: 'motorreparasjon',
        title: 'Motorreparasjon og motoroverhaling',
        shortTitle: 'Motorreparasjon',
        tagline: 'Fra tenningsspoler til komplett motorbytte',
        priceFrom: 'Etter diagnose',
        duration: '1–5 dager',
        intro:
            'Vi reparerer både små og store motorfeil. Tenningsspoler, tennplugger, registerreim, vannpumpe, turboladere, EGR-ventiler og mer. For alvorlige skader kan vi tilby komplett motorbytte med bruktmotor eller overhalt motor.',
        description: [
            'Nittedal Auto har lang erfaring med tyske, japanske og koreanske motorer. Vi kjenner fallgruvene – som VWs 1.4 TSI kjederekk-problematikk, BMWs timing chain-feil på N47, og Toyotas variabel ventiltider-problemer.',
            'Vi kan spesialisere oss på alt fra alminnelig vedlikehold til avanserte motorjobber som toppakningsbytte, ventilstyreskift og overhaling.',
        ],
        included: [
            'Detaljert diagnose før arbeidet starter',
            'Fastpris eller timepris etter ønske',
            'Originaldeler eller kvalitetsalternativer',
            'Kompletteringstest og prøvekjøring',
            'Inntil 24 måneders garanti på arbeidet',
        ],
        benefits: [
            'Spesialisert kompetanse på alle store merker',
            'Lånebil tilgjengelig ved lengre reparasjoner',
            'Ærlige råd: vi anbefaler aldri unødvendige jobber',
        ],
        faq: [
            {
                q: 'Er det verdt å reparere en eldre motor?',
                a: 'Det vurderer vi sammen med deg. Vi gir ærlig økonomisk vurdering – noen ganger er det bedre å bytte bil.',
            },
        ],
        relatedSlugs: ['feilsoking', 'girkassereparasjon', 'turbo'],
        keywords: ['motorreparasjon Nittedal', 'motorbytte bil', 'registerreim', 'toppakning'],
    },
    {
        slug: 'girkassereparasjon',
        title: 'Girkassereparasjon og girkassebytte',
        shortTitle: 'Girkasse',
        tagline: 'Automat, manuell og DSG – vi løser det',
        priceFrom: 'Etter diagnose',
        duration: '1–4 dager',
        intro:
            'Rykk og napp ved girskift? Usikker på om det er clutch eller girkasse? Vi reparerer alle typer girkasser: manuell, automat, CVT og DSG/DKG.',
        description: [
            'Vi tilbyr oljebytte på automatgir (ATF-skift), clutchskift på manuelle biler, overhaling av DSG-kasser og komplett girkassebytte ved behov. Mange problemer løses med riktig oljeservice før en dyr reparasjon.',
        ],
        included: [
            'Feilsøking av gir og kløtsj',
            'ATF-skift med spyling eller tradisjonelt oljeskift',
            'Clutchskift med sentralføring og svinghjul ved behov',
            'DSG-oljeskift med originalvæske',
        ],
        benefits: [
            'Spesialisert på DSG 7-trinn og ZF 8HP',
            'Fastpris etter diagnose',
            'Garanti på alt arbeid',
        ],
        faq: [
            {
                q: 'Hvor ofte bør ATF byttes?',
                a: 'Anbefalt hver 60.000–80.000 km selv om noen produsenter sier "livslang olje". Regelmessig bytte forlenger kassens levetid betraktelig.',
            },
        ],
        relatedSlugs: ['motorreparasjon', 'feilsoking', 'hovedservice'],
        keywords: ['girkassereparasjon', 'DSG-olje', 'ATF skift', 'clutchskift Nittedal'],
    },
    {
        slug: 'turbo',
        title: 'Turbo-reparasjon og -bytte',
        shortTitle: 'Turbo',
        tagline: 'Power og effekt tilbake',
        priceFrom: 'Etter diagnose',
        duration: '1–2 dager',
        intro:
            'Mister bilen krefter? Ryker det hvit eller blå røyk? Turbolader kan være overbelastet. Vi bytter turboladere, rebuilder der det er lønnsomt, og kontrollerer oljetilførsel og intercooler.',
        description: [
            'Turboer sliter mest på diesel- og TSI-motorer, særlig ved mye kortdistansekjøring. Vi har lang erfaring med Garrett, Borg Warner, IHI, Mitsubishi og KKK.',
        ],
        included: [
            'Feilkodelesing og trykkmåling',
            'Turbo-bytte eller rebuild',
            'Rens eller bytte av oljeledning',
            'Kontroll av ladeluftrør og intercooler',
        ],
        benefits: [
            'Fastpris inkludert olje og pakninger',
            'Reman-turboer med garanti',
            '24 måneders garanti på arbeid',
        ],
        faq: [
            { q: 'Kan turboen repareres?', a: 'Noen kan overhales, andre må byttes helt. Vi gir ærlig råd etter demontering.' },
        ],
        relatedSlugs: ['motorreparasjon', 'feilsoking'],
        keywords: ['turbo bytte', 'turbolader reparasjon', 'chiptuning'],
    },
    {
        slug: 'elbil-service',
        title: 'Elbil-service og høyvolt-sertifiserte mekanikere',
        shortTitle: 'Elbil-service',
        tagline: 'Sertifisert for Tesla, VW ID, Hyundai, Kia, BMW i, Audi e-tron',
        priceFrom: '1 890,-',
        duration: '1–2 timer',
        intro:
            'Elbiler trenger også service – bare annerledes. Vi er høyvolt-sertifiserte og kan servicere de fleste elbiler: alt fra girkasseolje på enkeltmotor til batteritest, bremsevæske og klimaanlegg.',
        description: [
            'Selv om elbilen ikke har motorolje, må bremser, girolje, bremsevæske, pollenfilter, støtdempere og hjulstilling kontrolleres. I tillegg utfører vi batteritest og diagnose på 12V-systemet.',
            'Vi er trygge på Tesla Model 3/Y/S/X, VW ID.3/ID.4/ID.5, Skoda Enyaq, Audi e-tron/Q4 e-tron, BMW i3/i4/iX, Hyundai Ioniq 5/6/Kona, Kia EV6/e-Niro/e-Soul, Nissan Leaf, Polestar, Peugeot e-208 og mange flere.',
        ],
        included: [
            'Full batteritest og celledata-logging',
            'Bremsevæskeskift og kontroll (elbiler trenger det oftere)',
            'Girolje i differensial/reduksjonsgir',
            'Klimaanlegg og varmepumpe-service',
            'Programvare-oppdatering (hvor mulig)',
            'Kontroll av 12V-batteri',
        ],
        benefits: [
            'Høyvolt-sertifiserte teknikere',
            'Samme kompetanse som merkeverksted – lavere pris',
            'Beholder garanti iht. Block Exemption',
        ],
        faq: [
            {
                q: 'Kan jeg bruke verksted utenom merkeverksted og beholde garanti?',
                a: 'Ja, så lenge vi bruker originaldeler eller deler av tilsvarende kvalitet, og utfører service etter produsentens spesifikasjoner.',
            },
            {
                q: 'Hvor lang levetid har batteriet?',
                a: 'De fleste elbilbatterier beholder 80–90 % kapasitet etter 8–10 år. Vi tilbyr detaljert kapasitetstest.',
            },
        ],
        relatedSlugs: ['batteritest', 'bremser', 'ac-service', 'hovedservice'],
        keywords: ['elbil verksted Nittedal', 'Tesla service', 'VW ID.4 service', 'elbil batteritest'],
    },
    {
        slug: 'batteritest',
        title: 'Batteritest og batteribytte',
        shortTitle: 'Batteri',
        tagline: 'Gratis batteritest – nytt batteri montert mens du venter',
        priceFrom: '1 290,- (nytt batteri)',
        duration: '30 minutter',
        intro:
            'Kaldt vær, korte turer og infotainment sliter på 12V-batteriet. Vi tester med Midtronics-tester og bytter batterier fra Varta, Banner, Exide og Bosch.',
        description: [
            'Vi fører batterier til alle biler, også start-stopp (AGM, EFB) og elbil-12V. Registrering av nytt batteri i bilens BMS er inkludert på moderne biler.',
        ],
        included: ['Belastnings- og CCA-test', 'Kontroll av ladesystem og generator', 'Montering og registrering av nytt batteri'],
        benefits: ['Gratis test', 'Premiumbatterier med 4–6 års garanti'],
        faq: [
            { q: 'Hvor lenge varer et batteri?', a: 'Typisk 4–7 år. Start-stopp krever AGM, og kortdistanse sliter ekstra.' },
        ],
        relatedSlugs: ['elbil-service', 'feilsoking'],
        keywords: ['bilbatteri Nittedal', 'batteribytte', 'AGM batteri'],
    },
    {
        slug: 'lysjustering',
        title: 'Lysjustering og lyktebytte',
        shortTitle: 'Lysjustering',
        tagline: 'Riktig lys – trygg kjøring i mørket',
        priceFrom: '490,-',
        duration: '20 minutter',
        intro:
            'Feiljustert lys blender motkjørende og gjør at du ser dårligere. Vi justerer til riktig vinkel med digital lysmåler, og kan bytte pærer fra H7/H11 halogen til LED og xenon.',
        description: ['Moderne matrix-LED og laserlys krever spesial-utstyr – det har vi.'],
        included: ['Digital lysmåling', 'Justering av nærlys og fjernlys', 'Pærebytte etter behov'],
        benefits: ['Rask time, lav pris', 'Godkjent for EU-kontroll'],
        faq: [{ q: 'Må jeg kalibrere LED?', a: 'Ja, matrix-LED krever ofte kalibrering etter lyktebytte.' }],
        relatedSlugs: ['eu-kontroll', 'feilsoking'],
        keywords: ['lysjustering Nittedal', 'frontlykter', 'LED pærer'],
    },
    {
        slug: 'pollenfilter',
        title: 'Pollenfilter og luftfilter',
        shortTitle: 'Pollenfilter',
        tagline: 'Ren luft i kupeen – bort med allergi og sopplukt',
        priceFrom: '390,-',
        duration: '15–30 minutter',
        intro:
            'Tett pollenfilter gir dårlig kabinluft, dugg på innsiden av rutene og kan trigge allergi. Vi bytter rått filter, eller aktivt kullfilter for bedre filtrering.',
        description: ['Vi anbefaler bytte minimum én gang i året – helst før pollensesongen.'],
        included: ['Nytt filter (standard, pollen eller aktivt kullfilter)', 'Rens av filterhus', 'Funksjonstest'],
        benefits: ['Bedre klima i bilen', 'Reduserer allergireaksjoner', 'Billig vedlikehold'],
        faq: [{ q: 'Hvor ofte bør pollenfilter skiftes?', a: 'Hvert 15.000 km eller årlig. Oftere i bymiljø.' }],
        relatedSlugs: ['ac-service', 'hovedservice'],
        keywords: ['pollenfilter bil', 'kabinluftfilter', 'bytte pollenfilter'],
    },
    {
        slug: 'fronrutebytte',
        title: 'Frontrute- og ruteskift',
        shortTitle: 'Frontrute',
        tagline: 'Steinsprut? Ring oss – vi ordner forsikringsdelen',
        priceFrom: 'Dekkes av forsikring',
        duration: '1–2 timer',
        intro:
            'Vi tilbyr steinspruttreparasjon, full ruteskift og kalibrering av frontkamera (ADAS) – alle merker, alle modeller. Vi tar hele dialogen med forsikringsselskapet ditt.',
        description: ['Ved moderne biler med frontkamera krever ruteskift kalibrering – det gjør vi inhouse.'],
        included: [
            'Henting og levering ved behov',
            'Kontakt med forsikringsselskap',
            'Kalibrering av frontkamera og LDW',
            '2 års lekkasjegaranti',
        ],
        benefits: ['Egenandel-nivå: 2.500–4.000 kr', 'Lånebil i inntil 2 dager ved større skader'],
        faq: [{ q: 'Hvor stor sprekk kan repareres?', a: 'Opp til 25 mm, avhengig av posisjon.' }],
        relatedSlugs: ['eu-kontroll', 'feilsoking'],
        keywords: ['frontruteskift Nittedal', 'steinsprut', 'rutereparasjon'],
    },
    {
        slug: 'karrosseri',
        title: 'Karrosseri og lakkering',
        shortTitle: 'Karrosseri',
        tagline: 'Ettersom nytt – skadereparasjon og småbulker',
        priceFrom: 'Etter befaring',
        duration: '1–10 dager',
        intro:
            'Vi samarbeider med sertifiserte karrosserimekanikere for skadereparasjon, parkeringsbulker, steinsprut i lakk og full omlakkering.',
        description: ['Godkjent av alle store forsikringsselskap. Vi tar takst og forhåndsgodkjenning på vegne av deg.'],
        included: ['Befaring og takst', 'Retting, sveising og lakkering', 'Polering og detailing', 'Forsikringsoppgjør'],
        benefits: ['Lånebil inkludert', 'PPG- og Glasurit-lakk med fargematch'],
        faq: [{ q: 'Kan dere ta småbulker uten lakkering?', a: 'Ja, Paintless Dent Repair (PDR) fra 890,-' }],
        relatedSlugs: ['fronrutebytte'],
        keywords: ['karrosseri Nittedal', 'bulkereparasjon', 'lakkering bil'],
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug);
}
