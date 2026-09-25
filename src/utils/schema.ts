export const organizationSchema = (origin: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': new URL('/#organization', origin).toString(),
  name: 'AM Digital',
  alternateName: 'AM Outsourcing Services Joint Stock Company',
  url: origin.toString(),
  email: 'info@amdigital.ninja',
  foundingDate: '2015',
  description: 'AI-powered GTM operations agency serving DTC ecommerce, technology and global market-entry teams.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Floor 4, Viwaseen Tower, 48 To Huu Street',
    addressLocality: 'Hanoi',
    addressCountry: 'VN',
  },
  areaServed: ['Vietnam', 'Southeast Asia', 'United States', 'Europe', 'India', 'Latin America'],
  knowsAbout: ['Go-to-market strategy', 'Influencer marketing', 'User-generated content', 'SEO', 'AEO', 'GEO', 'Marketing automation'],
});
