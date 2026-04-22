import Link from 'next/link';

type HeaderProps = {
    active?:
        | 'hjem'
        | 'tjenester'
        | 'omrader'
        | 'bilmerker'
        | 'blogg'
        | 'priser'
        | 'om-oss'
        | 'kontakt'
        | 'faq';
};

const navLinks: Array<{ href: string; label: string; key: NonNullable<HeaderProps['active']> }> = [
    { href: '/tjenester', label: 'Tjenester', key: 'tjenester' },
    { href: '/omrader', label: 'Områder', key: 'omrader' },
    { href: '/bilmerker', label: 'Bilmerker', key: 'bilmerker' },
    { href: '/priser', label: 'Priser', key: 'priser' },
    { href: '/blogg', label: 'Blogg', key: 'blogg' },
    { href: '/om-oss', label: 'Om oss', key: 'om-oss' },
    { href: '/kontakt', label: 'Kontakt', key: 'kontakt' },
];

export default function Header({ active }: HeaderProps) {
    return (
        <header
            style={{
                backgroundColor: '#111',
                padding: '18px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                position: 'sticky',
                top: 0,
                zIndex: 50,
                borderBottom: '1px solid #222',
            }}
        >
            <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 800, letterSpacing: '1px' }}>
                    NITTEDAL <span style={{ color: '#e63946' }}>AUTO</span>
                </h1>
            </Link>
            <nav
                style={{
                    display: 'flex',
                    gap: '22px',
                    alignItems: 'center',
                    fontWeight: 500,
                    flexWrap: 'wrap',
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        style={{
                            color: active === link.key ? '#e63946' : '#fff',
                            textDecoration: 'none',
                            fontSize: '15px',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/bestill"
                    style={{
                        backgroundColor: '#e63946',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '14px',
                    }}
                >
                    Bestill Time
                </Link>
            </nav>
        </header>
    );
}
