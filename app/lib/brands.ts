export type Brand = {
    slug: string;
    name: string;
    country: string;
    description: string;
    commonIssues: string[];
    popularModels: string[];
    specialties: string[];
    toolNotes: string;
};

export const brands: Brand[] = [
    {
        slug: 'volkswagen',
        name: 'Volkswagen',
        country: 'Tyskland',
        description:
            'Volkswagen er et av Norges mest populære bilmerker, og vi har spesialkompetanse på både de tradisjonelle TSI- og TDI-motorene, samt den nye elbil-plattformen MEB (ID-serien).',
        commonIssues: [
            'Kjederekk-problematikk på 1.4 TSI og 1.8 TSI (EA888)',
            'DSG 7-trinn (DQ200) mekatronikkfeil',
            'AdBlue-system på TDI-motorer',
            'EGR-kjøler sprekk på 2.0 TDI (EA189)',
            'ID.3/ID.4 – programvare og ladespenning',
        ],
        popularModels: ['Golf', 'Passat', 'Tiguan', 'Touran', 'Polo', 'ID.3', 'ID.4', 'ID.5', 'e-Golf', 'Up!'],
        specialties: ['DSG-oljeskift', 'AdBlue-reparasjon', 'TSI-motoroverhaling', 'MEB-elbilservice'],
        toolNotes: 'VCDS (VAG-COM) og ODIS-diagnose for original dataadgang.',
    },
    {
        slug: 'audi',
        name: 'Audi',
        country: 'Tyskland',
        description:
            'Audi er Volkswagen-konsernets premium-merke. Vi jobber med både klassiske A4/A6 og nye elbiler som e-tron og Q4 e-tron.',
        commonIssues: [
            'Oljeforbruk på 2.0 TFSI (EA888)',
            'S-Tronic/DCT-problemer',
            'Luftfjæring Q7/A8',
            'e-tron – støtdemperlekkasjer',
        ],
        popularModels: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'Q4 e-tron', 'Q8 e-tron'],
        specialties: ['Quattro-drift', 'Luftfjæring', 'S-Tronic-overhaling'],
        toolNotes: 'Samme VAG-diagnose som VW – full tilgang til alle styreenheter.',
    },
    {
        slug: 'skoda',
        name: 'Škoda',
        country: 'Tsjekkia',
        description:
            'Škoda-biler deler plattform med VW, men har ofte bedre verdi for pengene. Vi kjenner både Octavia, Superb, Kodiaq og den nye Enyaq.',
        commonIssues: ['DSG-problemer', 'EGR og partikkelfilter', 'Enyaq 12V-batterifeil'],
        popularModels: ['Octavia', 'Superb', 'Kodiaq', 'Karoq', 'Fabia', 'Enyaq iV'],
        specialties: ['DSG-service', 'Elbil Enyaq-service'],
        toolNotes: 'VAG-diagnose.',
    },
    {
        slug: 'seat',
        name: 'SEAT',
        country: 'Spania',
        description:
            'SEAT og Cupra deler også VW-gener. Vi tar alle modeller – fra Ibiza til Cupra Formentor.',
        commonIssues: ['1.4 TSI kjederekk', 'DSG', 'AdBlue på TDI'],
        popularModels: ['Leon', 'Ibiza', 'Ateca', 'Tarraco', 'Formentor', 'Cupra Born'],
        specialties: ['Sportsoppheng', 'Chiptuning-forberedelse'],
        toolNotes: 'VAG-diagnose.',
    },
    {
        slug: 'bmw',
        name: 'BMW',
        country: 'Tyskland',
        description:
            'BMW kjenner vi godt – både tradisjonelle 3-serie og 5-serie, M-biler og de nye elbilene i4 og iX.',
        commonIssues: [
            'Timing chain på N47 dieselmotor',
            'Kjølekrets HP Fuel Pump',
            'VANOS-solenoide',
            'iDrive og programvare',
        ],
        popularModels: ['320d', '520d', 'X3', 'X5', 'i3', 'i4', 'iX', 'M3', 'M5'],
        specialties: ['N47 timing chain-bytte', 'iDrive-programvareoppdatering'],
        toolNotes: 'ISTA+ og Rheingold-diagnose.',
    },
    {
        slug: 'mercedes',
        name: 'Mercedes-Benz',
        country: 'Tyskland',
        description:
            'Mercedes er premium og avansert. Vi har kompetanse på både COMAND-infotainment, Airmatic-oppheng og EQ-elbilene.',
        commonIssues: ['Airmatic lekkasje', 'AdBlue-feil på OM651', 'EQ-batterikjøling'],
        popularModels: ['A-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'GLC', 'GLE', 'EQA', 'EQC', 'EQE'],
        specialties: ['Airmatic-reparasjon', 'MB-spesifikk koding'],
        toolNotes: 'Xentry/DAS-diagnose.',
    },
    {
        slug: 'toyota',
        name: 'Toyota',
        country: 'Japan',
        description:
            'Toyota er kjent for pålitelighet. Vi servicerer alle Toyotaer – fra Yaris til Land Cruiser, og hybridene Prius, RAV4 Hybrid og bZ4X elbil.',
        commonIssues: ['Hybridbatteri-kapasitetsfall på Prius II/III', 'Variable ventiltider (VVT-i)'],
        popularModels: ['Yaris', 'Corolla', 'RAV4', 'C-HR', 'Prius', 'Auris', 'Land Cruiser', 'bZ4X'],
        specialties: ['Hybridbatteri-service', 'Toyota Safety Sense-kalibrering'],
        toolNotes: 'Techstream-diagnose.',
    },
    {
        slug: 'honda',
        name: 'Honda',
        country: 'Japan',
        description:
            'Honda CR-V, Civic og Jazz er populære valg. Vi kjenner V-TEC, i-CTDi og de nyere hybridene.',
        commonIssues: ['AC-kompressor', 'EGR-rens', 'CVT-olje'],
        popularModels: ['CR-V', 'Civic', 'Jazz', 'HR-V', 'e:HEV', 'e'],
        specialties: ['CVT-oljeskift', 'Hybridservice'],
        toolNotes: 'HDS-diagnose.',
    },
    {
        slug: 'nissan',
        name: 'Nissan',
        country: 'Japan',
        description:
            'Qashqai, X-Trail og Leaf er blant de mest solgte Nissan-modellene i Norge. Vi kjenner både CVT-kasse og Leaf-elbatteriene.',
        commonIssues: ['CVT-overoppheting', 'Leaf batterikapasitet (Gen1)'],
        popularModels: ['Qashqai', 'X-Trail', 'Juke', 'Micra', 'Leaf', 'Ariya'],
        specialties: ['CVT-oljeskift', 'Leaf-batteridiagnose'],
        toolNotes: 'Consult III+-diagnose.',
    },
    {
        slug: 'mazda',
        name: 'Mazda',
        country: 'Japan',
        description:
            'Mazda SKYACTIV-teknologi krever presis kalibrering. Vi servicerer hele Mazda-serien.',
        commonIssues: ['DPF-tetting på SKYACTIV-D', 'Variable ventiler'],
        popularModels: ['Mazda3', 'Mazda6', 'CX-3', 'CX-5', 'CX-60', 'MX-30'],
        specialties: ['DPF-regenerering', 'Elbil MX-30-service'],
        toolNotes: 'IDS-diagnose.',
    },
    {
        slug: 'tesla',
        name: 'Tesla',
        country: 'USA',
        description:
            'Tesla har vi servicert siden Model S ble lansert. Vi er høyvolt-sertifisert og gjør alt fra bremsevæske til batteri-diagnose.',
        commonIssues: ['12V-batteri Model 3/Y', 'MCU-eMMC-feil', 'Lufthjulsoppheng Model S'],
        popularModels: ['Model 3', 'Model Y', 'Model S', 'Model X'],
        specialties: ['12V-bytte Model 3/Y uten frakobling', 'Bremsevæske og girolje', 'Programvare-klargjøring'],
        toolNotes: 'Tesla Toolbox 3 for service-informasjon og deleidentifikasjon.',
    },
    {
        slug: 'hyundai',
        name: 'Hyundai',
        country: 'Sør-Korea',
        description:
            'Hyundai Ioniq og Kona Electric er blant Norges mest solgte elbiler. Vi er oppdatert på både 400V og 800V e-GMP-plattformen.',
        commonIssues: ['Ioniq 5 ICCU-feil (12V-lading)', 'Kona bremser'],
        popularModels: ['Kona', 'Ioniq 5', 'Ioniq 6', 'Tucson', 'Santa Fe', 'i30'],
        specialties: ['e-GMP 800V-systemer', 'HEV/PHEV-service'],
        toolNotes: 'GDS-diagnose.',
    },
    {
        slug: 'kia',
        name: 'Kia',
        country: 'Sør-Korea',
        description:
            'Kia EV6, Niro EV og e-Soul er populære elbiler. Vi har også alle erfaringene fra Ceed, Sportage og Sorento.',
        commonIssues: ['EV6 ICCU', 'Sorento girkasse (DCT)'],
        popularModels: ['EV6', 'Niro EV', 'e-Soul', 'Ceed', 'Sportage', 'Sorento'],
        specialties: ['EV-service', 'DCT-girkasse'],
        toolNotes: 'GDS-diagnose.',
    },
    {
        slug: 'volvo',
        name: 'Volvo',
        country: 'Sverige',
        description:
            'Volvo XC40, XC60 og XC90 er blant Norges mest solgte familiebiler. Vi har lang erfaring med både T-motorer, Drive-E og nå Recharge-elbilene.',
        commonIssues: ['Sensus infotainment-feil', 'PCV-system T5/T6', 'XC40 Recharge-lading'],
        popularModels: ['XC40', 'XC60', 'XC90', 'V60', 'V90', 'XC40 Recharge', 'C40 Recharge', 'EX30', 'EX90'],
        specialties: ['Drive-E servicing', 'Recharge-PHEV batteriservice'],
        toolNotes: 'VIDA-diagnose.',
    },
    {
        slug: 'polestar',
        name: 'Polestar',
        country: 'Sverige',
        description:
            'Polestar 2 og 3 er Volvo-baserte elbiler. Vi har tilgang til samme diagnoseverktøy.',
        commonIssues: ['Ladeport-feil', 'Android Auto-systemet'],
        popularModels: ['Polestar 2', 'Polestar 3', 'Polestar 4'],
        specialties: ['Programvare', 'Batteri-CMU-diagnose'],
        toolNotes: 'Volvo VIDA-kompatibel.',
    },
    {
        slug: 'ford',
        name: 'Ford',
        country: 'USA',
        description:
            'Ford Focus, Fiesta og Kuga samt Mustang Mach-E elbilen – vi kan dem alle.',
        commonIssues: ['EcoBoost 1.0 kamrem', 'PowerShift-girkasse'],
        popularModels: ['Focus', 'Kuga', 'Fiesta', 'Mondeo', 'Transit', 'Mustang Mach-E'],
        specialties: ['PowerShift-overhaling', 'Mach-E-service'],
        toolNotes: 'IDS/FDRS-diagnose.',
    },
    {
        slug: 'opel',
        name: 'Opel',
        country: 'Tyskland',
        description:
            'Opel Astra, Corsa og Mokka-e er populære. Vi har også tilgang på reservedeler og diagnose.',
        commonIssues: ['EGR på 1.6 CDTI', 'Mokka-e ladeport'],
        popularModels: ['Astra', 'Corsa', 'Mokka-e', 'Combo-e'],
        specialties: ['Combo-e og Vivaro-e varebilservice'],
        toolNotes: 'Tech2/GDS-diagnose.',
    },
    {
        slug: 'peugeot',
        name: 'Peugeot',
        country: 'Frankrike',
        description:
            'Peugeot 208, 308 og e-208 – vi har tilpasset oss Stellantis-plattformen.',
        commonIssues: ['EP6 1.6 THP-kamrem', 'Partikkelfilter'],
        popularModels: ['208', '308', '3008', '5008', 'e-208'],
        specialties: ['EP6-motorservice', 'e-208 elbilservice'],
        toolNotes: 'DiagBox-diagnose.',
    },
    {
        slug: 'citroen',
        name: 'Citroën',
        country: 'Frankrike',
        description:
            'Citroën C3, C5 og e-C4 – komfortable biler med spesielle systemer som vi kjenner.',
        commonIssues: ['Hydropneumatisk fjæring (eldre)', 'C5 Aircross hybrid'],
        popularModels: ['C3', 'C5 Aircross', 'e-C4', 'Berlingo'],
        specialties: ['Hydrolit/Airbump'],
        toolNotes: 'DiagBox-diagnose.',
    },
    {
        slug: 'renault',
        name: 'Renault',
        country: 'Frankrike',
        description:
            'Renault Clio, Megane og Zoe – vi kjenner hele spekteret, inkludert den franske elbil-innovasjonen.',
        commonIssues: ['Zoe batterileasing', 'EDC-gir DSG'],
        popularModels: ['Clio', 'Megane', 'Captur', 'Zoe', 'Megane E-Tech', 'Kangoo E-Tech'],
        specialties: ['Zoe-service', 'Megane E-Tech elbil'],
        toolNotes: 'CLIP-diagnose.',
    },
    {
        slug: 'dacia',
        name: 'Dacia',
        country: 'Romania',
        description:
            'Dacia Duster og Sandero er populære budsjettbiler. Vi har god erfaring med både bensin og LPG-modeller.',
        commonIssues: ['Eldre modeller har TCE-turbo-problemer'],
        popularModels: ['Duster', 'Sandero', 'Jogger', 'Spring'],
        specialties: ['LPG-service', 'Spring elbilservice'],
        toolNotes: 'CLIP-diagnose (Renault-basert).',
    },
    {
        slug: 'suzuki',
        name: 'Suzuki',
        country: 'Japan',
        description:
            'Suzuki SX4, Vitara og Swift – pålitelige småbiler vi servicer ofte.',
        commonIssues: ['Mild Hybrid 48V-batteri'],
        popularModels: ['Swift', 'Vitara', 'SX4 S-Cross', 'Jimny'],
        specialties: ['Mild Hybrid-service'],
        toolNotes: 'Spesifikk SDS-diagnose.',
    },
    {
        slug: 'subaru',
        name: 'Subaru',
        country: 'Japan',
        description:
            'Subaru Forester, Outback og XV med boxermotor og symmetrisk firehjulsdrift – nisjebiler med lojale fans.',
        commonIssues: ['Topplokkspakning (eldre boxer)', 'CVT Lineartronic'],
        popularModels: ['Forester', 'Outback', 'XV', 'Solterra'],
        specialties: ['Boxer-motor', 'Solterra elbilservice'],
        toolNotes: 'SSM-diagnose.',
    },
    {
        slug: 'mitsubishi',
        name: 'Mitsubishi',
        country: 'Japan',
        description:
            'Mitsubishi Outlander PHEV er Norges mest solgte plug-in hybrid gjennom tidene. Vi kjenner systemet.',
        commonIssues: ['PHEV-batterikjøling', 'CVT-olje'],
        popularModels: ['Outlander PHEV', 'Eclipse Cross', 'ASX', 'Space Star'],
        specialties: ['PHEV-batteriservice'],
        toolNotes: 'MUT-III-diagnose.',
    },
    {
        slug: 'mini',
        name: 'MINI',
        country: 'Storbritannia',
        description:
            'MINI har samme plattform som BMW. Vi servicerer Cooper, Clubman, Countryman og MINI Electric.',
        commonIssues: ['N18 timing chain', 'Vannpumpe N14'],
        popularModels: ['Cooper', 'Countryman', 'Clubman', 'MINI SE Electric'],
        specialties: ['N18/N14-motorer', 'MINI SE elbil'],
        toolNotes: 'ISTA-diagnose (BMW).',
    },
];

export function getBrandBySlug(slug: string) {
    return brands.find((b) => b.slug === slug);
}
