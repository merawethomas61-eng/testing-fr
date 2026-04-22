import Link from 'next/link';

type Props = {
    heading?: string;
    text?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    variant?: 'red' | 'dark' | 'light';
};

export default function CTASection({
    heading = 'Trenger du verksted i Nittedal?',
    text = 'Bestill time på 60 sekunder, eller ring oss direkte for rask hjelp. Vi gir fastpris før vi starter.',
    primaryLabel = 'Bestill Time Nå',
    primaryHref = '/bestill',
    secondaryLabel = 'Ring 67 00 00 00',
    secondaryHref = 'tel:+4767000000',
    variant = 'red',
}: Props) {
    const palette =
        variant === 'red'
            ? { bg: '#e63946', color: '#fff', btn1: '#111', btn1Color: '#fff', btn2: 'transparent', btn2Color: '#fff', btn2Border: '#fff' }
            : variant === 'dark'
                ? { bg: '#111', color: '#fff', btn1: '#e63946', btn1Color: '#fff', btn2: 'transparent', btn2Color: '#fff', btn2Border: '#444' }
                : { bg: '#f4f4f5', color: '#111', btn1: '#e63946', btn1Color: '#fff', btn2: '#fff', btn2Color: '#111', btn2Border: '#ccc' };

    return (
        <section style={{ backgroundColor: palette.bg, color: palette.color, padding: '80px 20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '34px', fontWeight: 800, margin: '0 0 16px 0' }}>{heading}</h2>
            <p style={{ fontSize: '18px', margin: '0 auto 32px auto', maxWidth: '640px', opacity: 0.95 }}>{text}</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                    href={primaryHref}
                    style={{
                        padding: '16px 36px',
                        fontSize: '17px',
                        backgroundColor: palette.btn1,
                        color: palette.btn1Color,
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: 800,
                    }}
                >
                    {primaryLabel}
                </Link>
                <Link
                    href={secondaryHref}
                    style={{
                        padding: '16px 36px',
                        fontSize: '17px',
                        backgroundColor: palette.btn2,
                        color: palette.btn2Color,
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: 700,
                        border: `1px solid ${palette.btn2Border}`,
                    }}
                >
                    {secondaryLabel}
                </Link>
            </div>
        </section>
    );
}
