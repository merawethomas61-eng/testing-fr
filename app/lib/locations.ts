export type Location = {
    slug: string;
    name: string;
    region: string;
    distanceKm: number;
    driveMinutes: number;
    zip: string;
    description: string;
    neighborhoods: string[];
    popularServices: string[];
    travelTip: string;
};

export const locations: Location[] = [
    {
        slug: 'nittedal',
        name: 'Nittedal',
        region: 'Nittedal kommune',
        distanceKm: 0,
        driveMinutes: 0,
        zip: '1482',
        description:
            'Vi ligger sentralt i Nittedal, lett tilgjengelig fra både Riksveg 4 og Hadelandsveien. Som ditt lokale verksted fikser vi alt fra EU-kontroll og oljeskift til tyngre motor- og girkassejobber – for alle bilmerker.',
        neighborhoods: ['Rotnes', 'Kjul', 'Slattum', 'Hakadal', 'Åneby', 'Glittre', 'Sørli', 'Gjelleråsen'],
        popularServices: ['eu-kontroll', 'hovedservice', 'bremser', 'dekk-og-felg'],
        travelTip:
            'Vi ligger 3 minutter fra Nittedal stasjon – ta toget hjem mens bilen er hos oss, og hent den på ettermiddagen.',
    },
    {
        slug: 'hakadal',
        name: 'Hakadal',
        region: 'Nittedal kommune',
        distanceKm: 6,
        driveMinutes: 10,
        zip: '1488',
        description:
            'Hakadal-kunder velger oss for pålitelig service og ærlige priser. Vi har mange faste kunder fra Hakadal som vi har fulgt i over ti år.',
        neighborhoods: ['Hakadal sentrum', 'Åneby', 'Varingskollen'],
        popularServices: ['eu-kontroll', 'vinterdekk', 'feilsoking'],
        travelTip: 'Bestill morgentimer – rekker nesten Trondheim-togavgangen fra Hakadal stasjon etter service.',
    },
    {
        slug: 'rotnes',
        name: 'Rotnes',
        region: 'Nittedal kommune',
        distanceKm: 2,
        driveMinutes: 4,
        zip: '1482',
        description:
            'Rotnes er Nittedals sentrum og kun noen minutter fra verkstedet vårt. Vi har mange faste kunder som tar turen hit ukentlig.',
        neighborhoods: ['Rotnes sentrum', 'Slattum', 'Kjul'],
        popularServices: ['oljeskift', 'hovedservice', 'ac-service'],
        travelTip: 'Ta gjerne bussen fra Rotnes torg – du får lunsj på kafeen mens vi jobber.',
    },
    {
        slug: 'slattum',
        name: 'Slattum',
        region: 'Nittedal kommune',
        distanceKm: 4,
        driveMinutes: 7,
        zip: '1483',
        description:
            'Slattum er et populært boligområde med mange nybygde hus og familier med to biler. Vi tilbyr gjerne henting og bringing for Slattum-kunder.',
        neighborhoods: ['Slattum', 'Sørli', 'Skytta'],
        popularServices: ['hovedservice', 'elbil-service', 'dekk-og-felg'],
        travelTip: 'Vi tilbyr lånebil slik at du kommer deg hjem mens jobben pågår.',
    },
    {
        slug: 'kjul',
        name: 'Kjul',
        region: 'Nittedal kommune',
        distanceKm: 3,
        driveMinutes: 5,
        zip: '1482',
        description:
            'Fra Kjul er vi kun noen minutter unna. Mange av våre kunder har Kjul-adresse og velger oss for rask service og ærlige priser.',
        neighborhoods: ['Kjul', 'Kruttverket', 'Glittre'],
        popularServices: ['oljeskift', 'eu-kontroll'],
        travelTip: 'Gang- og sykkelvei hele veien hit – drop off og kom tilbake senere.',
    },
    {
        slug: 'aneby',
        name: 'Åneby',
        region: 'Nittedal kommune',
        distanceKm: 5,
        driveMinutes: 9,
        zip: '1484',
        description:
            'Åneby-kunder får samme høye servicenivå som våre nærkunder. Vi ordner gjerne transport ved lengre reparasjoner.',
        neighborhoods: ['Åneby', 'Bjørnholtveien', 'Rauelihøgda'],
        popularServices: ['vinterdekk', 'hovedservice', 'feilsoking'],
        travelTip: 'Tog og buss går hver halvtime fra Åneby.',
    },
    {
        slug: 'gjerdrum',
        name: 'Gjerdrum',
        region: 'Gjerdrum kommune',
        distanceKm: 15,
        driveMinutes: 18,
        zip: '2022',
        description:
            'Gjerdrum-kunder tar ofte turen til oss for spesialiserte tjenester som elbil-service og DSG-oljeskift.',
        neighborhoods: ['Ask', 'Brådalen', 'Veståsen'],
        popularServices: ['elbil-service', 'girkassereparasjon', 'turbo'],
        travelTip: 'Kort avstand over Gjerdrumsletta – 18 min bilkjøring.',
    },
    {
        slug: 'skedsmokorset',
        name: 'Skedsmokorset',
        region: 'Lillestrøm kommune',
        distanceKm: 12,
        driveMinutes: 15,
        zip: '2020',
        description:
            'Mange Skedsmokorset-kunder velger oss for å slippe rushtid mot Oslo, og fordi vi gir mer ærlig vurdering enn merkeverksted.',
        neighborhoods: ['Skedsmokorset', 'Holt-Vestbygda', 'Leirsund'],
        popularServices: ['eu-kontroll', 'bremser', 'hovedservice'],
        travelTip: 'Ta E6 opp til Gardermoen-avkjøring og videre Rv4.',
    },
    {
        slug: 'lillestrom',
        name: 'Lillestrøm',
        region: 'Lillestrøm kommune',
        distanceKm: 18,
        driveMinutes: 22,
        zip: '2000',
        description:
            'Lillestrøm-kunder verdsetter vår fastprispolitikk og at vi håndterer alle bilmerker – inkludert Tesla og andre elbiler.',
        neighborhoods: ['Lillestrøm sentrum', 'Strømmen', 'Kjeller'],
        popularServices: ['elbil-service', 'feilsoking', 'ac-service'],
        travelTip: 'Tog fra Lillestrøm stasjon til Nittedal går 3 ganger i timen.',
    },
    {
        slug: 'lorenskog',
        name: 'Lørenskog',
        region: 'Lørenskog kommune',
        distanceKm: 20,
        driveMinutes: 28,
        zip: '1470',
        description:
            'Kunder fra Lørenskog kommer til oss for rask EU-kontroll og lavere priser enn i Oslo/Groruddalen.',
        neighborhoods: ['Lørenskog sentrum', 'Skårer', 'Strømmen'],
        popularServices: ['eu-kontroll', 'oljeskift'],
        travelTip: 'Tog via Lillestrøm – ca. 45 minutter totalt.',
    },
    {
        slug: 'oslo-nord',
        name: 'Oslo Nord',
        region: 'Oslo kommune',
        distanceKm: 16,
        driveMinutes: 25,
        zip: '0987',
        description:
            'Vi tar imot mange kunder fra Nord-Oslo – særlig Grorud, Romsås, Kalbakken og Stovner. Billigere enn sentrum, og vi har kortere ventetid.',
        neighborhoods: ['Grorud', 'Romsås', 'Stovner', 'Kalbakken', 'Rødtvet'],
        popularServices: ['hovedservice', 'eu-kontroll', 'elbil-service'],
        travelTip: 'Ta Rv4 direkte nordover – ingen bomring.',
    },
    {
        slug: 'grorud',
        name: 'Grorud',
        region: 'Oslo kommune',
        distanceKm: 14,
        driveMinutes: 22,
        zip: '0950',
        description:
            'Grorud-kunder slipper Oslo-priser og tar turen til oss på 20 minutter via Rv4.',
        neighborhoods: ['Grorud', 'Ammerud', 'Rødtvet'],
        popularServices: ['eu-kontroll', 'oljeskift', 'bremser'],
        travelTip: 'Ingen bomring – spar 30 kroner hver vei.',
    },
    {
        slug: 'groruddalen',
        name: 'Groruddalen',
        region: 'Oslo kommune',
        distanceKm: 15,
        driveMinutes: 24,
        zip: '0956',
        description:
            'Fra Groruddalen kjører du rett ut av Oslo og slipper bompenger. Vi har konkurransedyktige priser og rask turnaround.',
        neighborhoods: ['Bjerke', 'Stovner', 'Alna', 'Grorud'],
        popularServices: ['hovedservice', 'feilsoking'],
        travelTip: 'Bruk Trondheimsveien mot nord – rett frem til verkstedet.',
    },
    {
        slug: 'harestua',
        name: 'Harestua',
        region: 'Lunner kommune',
        distanceKm: 10,
        driveMinutes: 14,
        zip: '2743',
        description:
            'Harestua er bare en kort biltur unna, og mange av våre kunder derfra velger oss fremfor verksted på Jaren eller Gran.',
        neighborhoods: ['Harestua', 'Viubråtan', 'Grua'],
        popularServices: ['vinterdekk', 'hovedservice', 'eu-kontroll'],
        travelTip: 'Ta Rv4 sørover – du er hos oss på et kvarter.',
    },
    {
        slug: 'jessheim',
        name: 'Jessheim',
        region: 'Ullensaker kommune',
        distanceKm: 30,
        driveMinutes: 32,
        zip: '2050',
        description:
            'Fra Jessheim kjører du E6 og Rv4 sørover. Mange velger oss når lokale verksteder er fullbooket.',
        neighborhoods: ['Jessheim sentrum', 'Gystadmarka', 'Kisa'],
        popularServices: ['feilsoking', 'girkassereparasjon'],
        travelTip: 'Via E6 – 32 minutter på en god dag.',
    },
    {
        slug: 'gardermoen',
        name: 'Gardermoen-området',
        region: 'Ullensaker kommune',
        distanceKm: 32,
        driveMinutes: 35,
        zip: '2060',
        description:
            'Reisende og næringsliv rundt Gardermoen bruker oss for firmabiler. Vi kan hente og levere biler om ønskelig.',
        neighborhoods: ['Gardermoen', 'Nordmoen', 'Alsterdal'],
        popularServices: ['hovedservice', 'elbil-service'],
        travelTip: 'Vi har servicetilbud for bedrifter med flere biler.',
    },
    {
        slug: 'maura',
        name: 'Maura',
        region: 'Nannestad kommune',
        distanceKm: 22,
        driveMinutes: 28,
        zip: '2032',
        description:
            'Kunder fra Maura setter pris på våre ærlige diagnoser og fastpriser. Vi har mange faste kunder fra området.',
        neighborhoods: ['Maura', 'Eltonåsen', 'Holter'],
        popularServices: ['eu-kontroll', 'feilsoking', 'bremser'],
        travelTip: 'Fv120 sørover – minimalt med trafikk.',
    },
    {
        slug: 'nannestad',
        name: 'Nannestad',
        region: 'Nannestad kommune',
        distanceKm: 24,
        driveMinutes: 30,
        zip: '2030',
        description:
            'Nannestad-kunder har valgt oss i mange år for vår kompetanse på elbiler og hybrider.',
        neighborhoods: ['Nannestad', 'Låke', 'Bjørke'],
        popularServices: ['elbil-service', 'ac-service'],
        travelTip: 'Vi koordinerer med Gardermoen hvis du skal reise.',
    },
    {
        slug: 'hadeland',
        name: 'Hadeland',
        region: 'Gran og Lunner kommuner',
        distanceKm: 35,
        driveMinutes: 35,
        zip: '2770',
        description:
            'Hadeland-kunder får konkurransedyktige priser og rask turnaround hos oss, særlig på DSG-service og automatgir.',
        neighborhoods: ['Jaren', 'Gran', 'Brandbu', 'Lunner'],
        popularServices: ['girkassereparasjon', 'hovedservice'],
        travelTip: 'Rv4 sørover – en fin biltur gjennom landskapet.',
    },
    {
        slug: 'skedsmo',
        name: 'Skedsmo',
        region: 'Lillestrøm kommune',
        distanceKm: 15,
        driveMinutes: 20,
        zip: '2013',
        description:
            'Skedsmo og omegn leverer stadig flere biler til oss for feildiagnose og reparasjon av moderne systemer.',
        neighborhoods: ['Skedsmo', 'Leirsund', 'Frogner'],
        popularServices: ['feilsoking', 'hovedservice'],
        travelTip: 'Rv22 og Fv120 – 20 minutter på en god dag.',
    },
];

export function getLocationBySlug(slug: string) {
    return locations.find((l) => l.slug === slug);
}
