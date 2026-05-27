// Schema.org JobPosting für die /karriere Seite
// TODO: Mit dem Kunden / JOIN-Account verifizieren und ggf. anpassen.

export default function KarriereJsonLd() {
  const baseOrg = {
    '@type': 'Organization',
    '@id': 'https://finder-gmbh.com/#org',
    name: 'Finder GmbH',
    sameAs: ['https://finder-gmbh.com', 'https://join.com/companies/finderjobs'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Greifswalder Str. 23',
      addressLocality: 'Berlin',
      postalCode: '10405',
      addressRegion: 'BE',
      addressCountry: 'DE',
    },
    telephone: '+49-30-70073555',
    email: 'info@finder-gmbh.info',
  };

  const jobs = [
    {
      title: 'Anlagenmechaniker SHK Kundendienst (m/w/d)',
      employmentType: 'FULL_TIME',
      description:
        'Sie fahren von Kunde zu Kunde, warten Heizungen, beheben Störungen und installieren Thermen oder Wärmepumpen. Kein Akkord, kein Rohbau.',
      minSalary: 3800,
      maxSalary: 4600,
    },
    {
      title: 'Servicetechniker Heizung & Sanitär (m/w/d)',
      employmentType: 'FULL_TIME',
      description:
        'Schwerpunkt Wartung und Inspektion von Heizungsanlagen in Berlin und Brandenburg. Mit Protokoll, Diagnose und Beratung beim Kunden.',
      minSalary: 3600,
      maxSalary: 4400,
    },
    {
      title: 'Ausbildung Anlagenmechaniker:in SHK (m/w/d)',
      employmentType: 'INTERN',
      description:
        '3,5-jährige Ausbildung im Berliner Meisterbetrieb. Heizungsbau, Sanitärinstallation, Wartung, Kundendienst. Start jährlich im August.',
      minSalary: 950,
      maxSalary: 1200,
    },
  ];

  const data = {
    '@context': 'https://schema.org',
    '@graph': jobs.map((j) => ({
      '@type': 'JobPosting',
      title: j.title,
      description: j.description,
      datePosted: new Date().toISOString().split('T')[0],
      employmentType: j.employmentType,
      hiringOrganization: baseOrg,
      jobLocation: {
        '@type': 'Place',
        address: baseOrg.address,
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'EUR',
        value: {
          '@type': 'QuantitativeValue',
          minValue: j.minSalary,
          maxValue: j.maxSalary,
          unitText: 'MONTH',
        },
      },
      qualifications:
        'Ausbildung als Anlagenmechaniker SHK oder vergleichbar (außer Ausbildungsstelle), Führerschein Klasse B, Deutsch B2.',
      jobBenefits:
        'Firmenwagen, übertarifliche Bezahlung, betriebliche Altersvorsorge, flexible Arbeitszeit, Markenwerkzeug, Antwort auf Bewerbung in 24 Stunden.',
      directApply: true,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
