// Schema.org Structured Data – LocalBusiness + JobPosting
// [PLATZHALTER] Vor Go-Live mit echten Firmendaten füllen

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://karriere.finder-gmbh.info/#org',
        name: 'Finder GmbH',
        description:
          'SHK-Betrieb für Sanitär, Heizung und Klimatechnik in Berlin und Brandenburg. Kundendienst, Wartung, Service.',
        url: 'https://karriere.finder-gmbh.info',
        telephone: '+49-30-70073555',
        email: 'info@finder-gmbh.info',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Greifswalder Str. 23',
          addressLocality: 'Berlin',
          postalCode: '10405',
          addressRegion: 'BE',
          addressCountry: 'DE',
        },
        openingHours: 'Mo-Fr 08:00-14:00',
        areaServed: ['Berlin', 'Brandenburg'],
      },
      {
        '@type': 'JobPosting',
        title: 'Anlagenmechaniker SHK (m/w/d) – Kundendienst',
        description:
          'Anlagenmechaniker SHK im Kundendienst, nicht auf der Baustelle. Übertariflich, eigener Firmenwagen, betriebliche Altersvorsorge, planbare Arbeitszeiten.',
        datePosted: new Date().toISOString().split('T')[0],
        employmentType: 'FULL_TIME',
        hiringOrganization: { '@id': 'https://karriere.finder-gmbh.info/#org' },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Berlin',
            addressRegion: 'BE',
            addressCountry: 'DE',
          },
        },
        baseSalary: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: {
            '@type': 'QuantitativeValue',
            minValue: 3800,
            maxValue: 4600,
            unitText: 'MONTH',
          },
        },
        qualifications: 'Ausbildung als Anlagenmechaniker SHK oder vergleichbar, Führerschein Klasse B, Deutsch B2.',
        jobBenefits: 'Firmenwagen, übertarifliche Bezahlung, betriebliche Altersvorsorge, flexible Arbeitszeit, Markenwerkzeug.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
