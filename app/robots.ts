import type { MetadataRoute } from 'next';

const BASE = 'https://nittedalauto.no';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/takk'],
        },
        sitemap: `${BASE}/sitemap.xml`,
        host: BASE,
    };
}
