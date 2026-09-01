import { useEffect } from 'react';
import { COMPANY } from '../config/company';

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
  schema = null
}) {
  const fullTitle = title
    ? `${title} | ${COMPANY.name}`
    : `${COMPANY.name} | House Construction & Engineering in Kandy, Sri Lanka`;

  const metaDescription = description || COMPANY.description;
  const canonicalUrl = canonical
    ? `${COMPANY.url}${canonical}`
    : `${COMPANY.url}${window.location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', metaDescription);

    // 3. Open Graph Meta Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', COMPANY.name);

    // 4. Twitter Card Meta Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    // 5. Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Schema
    const scriptId = 'qb-jsonld-schema';
    let scriptElement = document.getElementById(scriptId);

    const defaultSchemas = [
      {
        "@context": "https://schema.org",
        "@type": ["HouseBuilder", "GeneralContractor", "LocalBusiness"],
        "@id": `${COMPANY.url}/#organization`,
        "name": COMPANY.name,
        "legalName": COMPANY.legalName,
        "description": COMPANY.description,
        "url": COMPANY.url,
        "telephone": COMPANY.phone,
        "email": COMPANY.email,
        "image": image,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": COMPANY.address.streetAddress,
          "addressLocality": COMPANY.address.addressLocality,
          "addressRegion": COMPANY.address.addressRegion,
          "postalCode": COMPANY.address.postalCode,
          "addressCountry": COMPANY.address.addressCountry
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": COMPANY.geo.latitude,
          "longitude": COMPANY.geo.longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Kandy" },
          { "@type": "AdministrativeArea", "name": "Peradeniya" },
          { "@type": "AdministrativeArea", "name": "Katugastota" },
          { "@type": "AdministrativeArea", "name": "Kundasale" },
          { "@type": "AdministrativeArea", "name": "Ampitiya" },
          { "@type": "AdministrativeArea", "name": "Digana" },
          { "@type": "AdministrativeArea", "name": "Kadugannawa" }
        ],
        "sameAs": [
          COMPANY.socials.facebook,
          COMPANY.socials.tiktok,
          COMPANY.socials.instagram
        ]
      }
    ];

    const schemasToInject = schema
      ? Array.isArray(schema) ? [...defaultSchemas, ...schema] : [...defaultSchemas, schema]
      : defaultSchemas;

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schemasToInject);

  }, [fullTitle, metaDescription, canonicalUrl, type, image, schema]);

  return null;
}
