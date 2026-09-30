import { useEffect } from 'react';
import { SEO_CONFIG, buildJsonLdGraph } from '../config/seo';

interface SEOHeadProps {
  pageKey?: keyof typeof SEO_CONFIG.pages;
}

export function SEOHead({ pageKey = 'home' }: SEOHeadProps) {
  const page = SEO_CONFIG.pages[pageKey] || SEO_CONFIG.pages.home;

  useEffect(() => {
    // 1. Update document title
    document.title = page.title;

    // Helper to safely set or create meta tags
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let meta = document.head.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, attrValue);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper to safely set or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', page.metaDescription);
    setMetaTag('name', 'keywords', [page.primaryKeyword, ...page.secondaryKeywords].join(', '));
    setMetaTag('name', 'robots', page.robots);
    setMetaTag('name', 'author', SEO_CONFIG.siteName);
    setMetaTag('name', 'theme-color', SEO_CONFIG.themeColor);

    // Canonical link
    setLinkTag('canonical', page.canonical);

    // Open Graph Tags
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', SEO_CONFIG.siteName);
    setMetaTag('property', 'og:title', page.ogTitle);
    setMetaTag('property', 'og:description', page.ogDescription);
    setMetaTag('property', 'og:url', page.canonical);
    setMetaTag('property', 'og:image', page.ogImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', SEO_CONFIG.defaultImageAlt);
    setMetaTag('property', 'og:locale', SEO_CONFIG.locale);

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', page.twitterCard);
    setMetaTag('name', 'twitter:title', page.ogTitle);
    setMetaTag('name', 'twitter:description', page.ogDescription);
    setMetaTag('name', 'twitter:image', page.ogImage);
    setMetaTag('name', 'twitter:image:alt', SEO_CONFIG.defaultImageAlt);

    // Geo Meta Tags (for Local SEO in Padappai, Tamil Nadu)
    setMetaTag('name', 'geo.region', 'IN-TN');
    setMetaTag('name', 'geo.placename', `${SEO_CONFIG.contact.address.addressLocality}, ${SEO_CONFIG.contact.address.addressRegion}`);
    setMetaTag('name', 'geo.position', `${SEO_CONFIG.contact.geo.latitude};${SEO_CONFIG.contact.geo.longitude}`);
    setMetaTag('name', 'ICBM', `${SEO_CONFIG.contact.geo.latitude}, ${SEO_CONFIG.contact.geo.longitude}`);

    // Schema.org JSON-LD structured data
    let scriptTag = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-json-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(buildJsonLdGraph(), null, 2);
  }, [page, pageKey]);

  return null;
}
