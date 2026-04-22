import Link from 'next/link';

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
    return (
        <nav
            aria-label="Brødsmulesti"
            style={{
                maxWidth: '1200px',
                margin: '24px auto 0 auto',
                padding: '0 20px',
                fontSize: '13px',
                color: '#666',
            }}
        >
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <li>
                    <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>
                        Hjem
                    </Link>
                </li>
                {items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ color: '#ccc' }}>/</span>
                        {item.href && i < items.length - 1 ? (
                            <Link href={item.href} style={{ color: '#666', textDecoration: 'none' }}>
                                {item.label}
                            </Link>
                        ) : (
                            <span style={{ color: '#111', fontWeight: 600 }}>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
