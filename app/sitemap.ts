import type { MetadataRoute } from 'next';
import { services } from '@/app/lib/services';
import { locations } from '@/app/lib/locations';
import { brands } from '@/app/lib/brands';
import { blogPosts } from '@/app/lib/blog';

const BASE = 'https://nittedalauto.no';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages = [
        { url: `${BASE}/`, priority: 1.0, changeFrequency: 'weekly' as const },
        { url: `${BASE}/tjenester`, priority: 0.9, changeFrequency: 'weekly' as const },
        { url: `${BASE}/omrader`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${BASE}/bilmerker`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${BASE}/blogg`, priority: 0.8, changeFrequency: 'weekly' as const },
        { url: `${BASE}/priser`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${BASE}/om-oss`, priority: 0.6, changeFrequency: 'yearly' as const },
        { url: `${BASE}/kontakt`, priority: 0.6, changeFrequency: 'yearly' as const },
        { url: `${BASE}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${BASE}/garanti`, priority: 0.5, changeFrequency: 'yearly' as const },
        { url: `${BASE}/karriere`, priority: 0.5, changeFrequency: 'monthly' as const },
        { url: `${BASE}/bestill`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${BASE}/personvern`, priority: 0.3, changeFrequency: 'yearly' as const },
        { url: `${BASE}/vilkar`, priority: 0.3, changeFrequency: 'yearly' as const },
    ].map((p) => ({ ...p, lastModified: now }));

    const serviceUrls = services.map((s) => ({
        url: `${BASE}/tjenester/${s.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const locationUrls = locations.map((l) => ({
        url: `${BASE}/omrader/${l.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const brandUrls = brands.map((b) => ({
        url: `${BASE}/bilmerker/${b.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const blogUrls = blogPosts.map((p) => ({
        url: `${BASE}/blogg/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...serviceUrls, ...locationUrls, ...brandUrls, ...blogUrls];
}
