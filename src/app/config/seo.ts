export interface SeoPageConfig {
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: 'summary_large_image' | 'summary';
  robots: string;
}

export const SEO_CONFIG = {
  siteName: 'Brandmic Media',
  siteUrl: 'https://brandmicmedia.com',
  defaultTitle: 'Brandmic Media | Creative Branding Studio & Digital Marketing Agency',
  titleTemplate: '%s | Brandmic Media',
  defaultDescription:
    'Brandmic Media is a premier creative branding studio and digital marketing agency. We specialize in brand design, logo creation, video editing, social media marketing, and high-impact digital campaigns.',
  defaultImage: 'https://brandmicmedia.com/og-image.jpg',
  defaultImageAlt: 'Brandmic Media - Creative Branding Studio and Digital Marketing Agency',
  logoUrl: 'https://brandmicmedia.com/logo.png',
  locale: 'en_US',
  themeColor: '#fe6d12',
  backgroundColor: '#030712',
  
  contact: {
    email: 'brandmicmedia@gmail.com',
    phone: '+91 89408 30052',
    phoneClean: '+918940830052',
    instagram: 'https://www.instagram.com/brandmic_media/',
    address: {
      streetAddress: 'Padappai',
      addressLocality: 'Padappai',
      addressRegion: 'Tamil Nadu',
      postalCode: '601301',
      addressCountry: 'IN',
    },
    geo: {
      latitude: '12.8872',
      longitude: '80.0197',
    },
    priceRange: '₹₹',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-19:00',
  },

  pages: {
    home: {
      title: 'Brandmic Media | Creative Branding Studio & Digital Marketing Agency',
      metaDescription:
        'Elevate your brand with Brandmic Media. We combine creative brand design, video editing, social media marketing, and data-driven advertising to scale ambitious businesses.',
      canonical: 'https://brandmicmedia.com/',
      h1: 'We Build Brands With Direction',
      primaryKeyword: 'creative branding studio',
      secondaryKeywords: [
        'digital marketing agency',
        'brand design services',
        'video editing for brands',
        'social media marketing agency',
        'creative agency in Tamil Nadu'
      ],
      ogTitle: 'Brandmic Media | Creative Branding Studio & Digital Marketing Agency',
      ogDescription:
        'Creative branding, strategic digital marketing, high-impact video editing, and logo design to give your business an undeniable identity.',
      ogImage: 'https://brandmicmedia.com/og-image.jpg',
      twitterCard: 'summary_large_image',
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    services: {
      title: 'Creative Services & Marketing Solutions | Brandmic Media',
      metaDescription:
        'Explore Brandmic Media services: Brand Design, Logo Design, Digital Marketing, Script Writing, Video Editing, and Creative Content Strategy tailored for high conversion.',
      canonical: 'https://brandmicmedia.com/#services',
      h1: 'What We Do Best: Comprehensive Creative & Marketing Solutions',
      primaryKeyword: 'brand design services',
      secondaryKeywords: [
        'logo design services',
        'video editing agency',
        'digital marketing services',
        'script writing for ads',
        'content marketing strategy'
      ],
      ogTitle: 'Creative Services & Marketing Solutions | Brandmic Media',
      ogDescription:
        'From logo design to video editing and digital marketing, discover full-service creative solutions that scale your business.',
      ogImage: 'https://brandmicmedia.com/og-image.jpg',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
    },
    portfolio: {
      title: 'Featured Projects & Case Studies | Brandmic Media Portfolio',
      metaDescription:
        'Browse our portfolio of brand identities, e-commerce ad campaigns, commercial video edits, and digital marketing results delivered by Brandmic Media.',
      canonical: 'https://brandmicmedia.com/#portfolio',
      h1: 'Featured Work & Creative Portfolio',
      primaryKeyword: 'branding portfolio',
      secondaryKeywords: [
        'video editing portfolio',
        'digital marketing case studies',
        'startup branding examples',
        'rebranding projects'
      ],
      ogTitle: 'Featured Projects & Case Studies | Brandmic Media Portfolio',
      ogDescription:
        'Explore recent branding, video editing, and social marketing campaigns built by Brandmic Media.',
      ogImage: 'https://brandmicmedia.com/og-image.jpg',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
    },
    about: {
      title: 'About Brandmic Media | Creative Team, Mission & Values',
      metaDescription:
        'Learn about Brandmic Media, founded by Visual Communication graduates passionate about helping businesses grow through visual content and strategic digital storytelling.',
      canonical: 'https://brandmicmedia.com/#about',
      h1: "We're A Creative Branding Studio Built on Direction & Craft",
      primaryKeyword: 'branding agency about',
      secondaryKeywords: [
        'creative media agency',
        'visual communication agency',
        'advertising studio Tamil Nadu',
        'brand growth specialists'
      ],
      ogTitle: 'About Brandmic Media | Creative Team, Mission & Values',
      ogDescription:
        'Meet the creative minds behind Brandmic Media delivering measurable brand growth and striking visual design.',
      ogImage: 'https://brandmicmedia.com/og-image.jpg',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
    },
    contact: {
      title: 'Contact Brandmic Media | Start Your Project Today',
      metaDescription:
        'Get in touch with Brandmic Media for brand design, video editing, and digital marketing inquiries. Office in Padappai, Tamil Nadu. Fast 24-hour response.',
      canonical: 'https://brandmicmedia.com/#contact',
      h1: "Let's Start A Project Together",
      primaryKeyword: 'contact branding agency',
      secondaryKeywords: [
        'hire digital marketing agency',
        'video editing inquiry',
        'brand identity consultation',
        'Brandmic Media phone and email'
      ],
      ogTitle: 'Contact Brandmic Media | Start Your Project Today',
      ogDescription:
        'Ready to transform your brand? Reach out to Brandmic Media today for a customized proposal.',
      ogImage: 'https://brandmicmedia.com/og-image.jpg',
      twitterCard: 'summary_large_image',
      robots: 'index, follow',
    },
  },

  faqs: [
    {
      question: 'What services does Brandmic Media provide?',
      answer:
        'Brandmic Media specializes in Brand Design, Logo Creation, Digital Marketing Campaigns, Script Writing, Video Editing (including short-form reels and commercial ads), and Creative Content Strategy.',
    },
    {
      question: 'Where is Brandmic Media located?',
      answer:
        'Brandmic Media is headquartered in Padappai, Tamil Nadu 601301, India, serving ambitious brands locally, nationally, and internationally.',
    },
    {
      question: 'How do I start a branding or marketing project with Brandmic Media?',
      answer:
        'You can submit your project inquiry via our contact form on the website, email us directly at brandmicmedia@gmail.com, or call us at +91 89408 30052. Our team responds within 24 hours to schedule an initial consultation.',
    },
    {
      question: 'What is the typical turnaround time for a branding or video editing project?',
      answer:
        'Turnaround times depend on project scope. Logo and identity packages generally take 1–2 weeks, while video editing and integrated marketing campaigns range from a few days for single assets to 3–4 weeks for complete brand launches.',
    },
    {
      question: 'Does Brandmic Media offer customized packages for startups and local businesses?',
      answer:
        'Yes, we create flexible, milestone-based packages tailored specifically for startups, local businesses, and growing companies seeking high return on investment.',
    },
  ],
};

/**
 * Builds the complete Schema.org JSON-LD graph matching visible content.
 */
export function buildJsonLdGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Organization
      {
        '@type': 'Organization',
        '@id': `${SEO_CONFIG.siteUrl}/#organization`,
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SEO_CONFIG.siteUrl}/#logo`,
          inLanguage: 'en-US',
          url: SEO_CONFIG.logoUrl,
          contentUrl: SEO_CONFIG.logoUrl,
          caption: SEO_CONFIG.siteName,
        },
        image: {
          '@id': `${SEO_CONFIG.siteUrl}/#logo`,
        },
        email: SEO_CONFIG.contact.email,
        telephone: SEO_CONFIG.contact.phone,
        sameAs: [SEO_CONFIG.contact.instagram],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: SEO_CONFIG.contact.phoneClean,
            contactType: 'customer support',
            email: SEO_CONFIG.contact.email,
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Tamil'],
          },
        ],
      },
      // 2. LocalBusiness / ProfessionalService
      {
        '@type': 'ProfessionalService',
        '@id': `${SEO_CONFIG.siteUrl}/#localbusiness`,
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        logo: `${SEO_CONFIG.siteUrl}/#logo`,
        image: SEO_CONFIG.defaultImage,
        description: SEO_CONFIG.defaultDescription,
        telephone: SEO_CONFIG.contact.phone,
        email: SEO_CONFIG.contact.email,
        priceRange: SEO_CONFIG.contact.priceRange,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SEO_CONFIG.contact.address.streetAddress,
          addressLocality: SEO_CONFIG.contact.address.addressLocality,
          addressRegion: SEO_CONFIG.contact.address.addressRegion,
          postalCode: SEO_CONFIG.contact.address.postalCode,
          addressCountry: SEO_CONFIG.contact.address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SEO_CONFIG.contact.geo.latitude,
          longitude: SEO_CONFIG.contact.geo.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '19:00',
          },
        ],
      },
      // 3. WebSite
      {
        '@type': 'WebSite',
        '@id': `${SEO_CONFIG.siteUrl}/#website`,
        url: SEO_CONFIG.siteUrl,
        name: SEO_CONFIG.siteName,
        description: SEO_CONFIG.defaultDescription,
        publisher: {
          '@id': `${SEO_CONFIG.siteUrl}/#organization`,
        },
        inLanguage: 'en-US',
      },
      // 4. WebPage
      {
        '@type': 'WebPage',
        '@id': `${SEO_CONFIG.siteUrl}/#webpage`,
        url: SEO_CONFIG.siteUrl,
        name: SEO_CONFIG.pages.home.title,
        isPartOf: {
          '@id': `${SEO_CONFIG.siteUrl}/#website`,
        },
        about: {
          '@id': `${SEO_CONFIG.siteUrl}/#organization`,
        },
        description: SEO_CONFIG.pages.home.metaDescription,
        inLanguage: 'en-US',
      },
      // 5. BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${SEO_CONFIG.siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SEO_CONFIG.siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${SEO_CONFIG.siteUrl}/#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Portfolio',
            item: `${SEO_CONFIG.siteUrl}/#portfolio`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'About',
            item: `${SEO_CONFIG.siteUrl}/#about`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: `${SEO_CONFIG.siteUrl}/#contact`,
          },
        ],
      },
      // 6. Services Offered
      {
        '@type': 'ItemList',
        '@id': `${SEO_CONFIG.siteUrl}/#services-list`,
        name: 'Brandmic Media Creative & Marketing Services',
        itemListElement: [
          {
            '@type': 'Service',
            position: 1,
            name: 'Brand Design',
            description:
              'Create memorable brand identities that resonate with your target audience and stand out in competitive markets.',
            provider: {
              '@id': `${SEO_CONFIG.siteUrl}/#organization`,
            },
          },
          {
            '@type': 'Service',
            position: 2,
            name: 'Logo Design',
            description:
              'Custom logo design and visual branding assets crafted by professional visual designers.',
            provider: {
              '@id': `${SEO_CONFIG.siteUrl}/#organization`,
            },
          },
          {
            '@type': 'Service',
            position: 3,
            name: 'Digital Marketing',
            description:
              'Strategic performance marketing campaigns that amplify brand reach and drive measurable customer acquisition.',
            provider: {
              '@id': `${SEO_CONFIG.siteUrl}/#organization`,
            },
          },
          {
            '@type': 'Service',
            position: 4,
            name: 'Script Writing',
            description:
              'Compelling scripts for commercial videos, social ads, reels, and business presentations.',
            provider: {
              '@id': `${SEO_CONFIG.siteUrl}/#organization`,
            },
          },
          {
            '@type': 'Service',
            position: 5,
            name: 'Video Editing',
            description:
              'Dynamic video editing, motion graphics, and promotional reel production for high engagement.',
            provider: {
              '@id': `${SEO_CONFIG.siteUrl}/#organization`,
            },
          },
          {
            '@type': 'Service',
            position: 6,
            name: 'Creative Content Strategy',
            description:
              'End-to-end creative direction, editorial calendars, and content strategies aligned with company growth goals.',
            provider: {
              '@id': `${SEO_CONFIG.siteUrl}/#organization`,
            },
          },
        ],
      },
      // 7. FAQPage matching visible FAQ section
      {
        '@type': 'FAQPage',
        '@id': `${SEO_CONFIG.siteUrl}/#faq`,
        mainEntity: SEO_CONFIG.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
