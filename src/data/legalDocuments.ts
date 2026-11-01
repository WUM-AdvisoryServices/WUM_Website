export interface LegalSection {
  number: string;
  title: string;
  content?: string;
  bullets?: { label?: string; text: string }[];
}

export interface LegalDocument {
  id: 'privacy' | 'terms' | 'accessibility';
  title: string;
  lastUpdated: string;
  preamble: string;
  sections: LegalSection[];
}

export const privacyPolicyData: LegalDocument = {
  id: 'privacy',
  title: '1. PRIVACY POLICY',
  lastUpdated: 'November 2026',
  preamble:
    'WUM Advisory Services (SMC-Private) Limited (SECP CUI # 0314319) ("the Company," "we," "us," "our") is committed to protecting your organizational and personal data in accordance with the Companies Act 2017 and international data privacy norms.',
  sections: [
    {
      number: '1.1',
      title: 'Scope',
      content:
        'This Privacy Policy describes how we collect, use, store, disclose, and safeguard information when you access our website, use our web portal, or correspond with us. It applies to all visitors, prospective clients, and clients.',
    },
    {
      number: '1.2',
      title: 'Information We Collect',
      bullets: [
        {
          label: 'Information you provide directly',
          text: 'name, organization, email address, phone number, and the content of inquiries submitted via email or the web portal.',
        },
        {
          label: 'Technical data collected automatically',
          text: 'IP address, browser type and version, device identifiers, operating system, referring URLs, pages viewed, session duration, and server log data.',
        },
        {
          label: 'Engagement data',
          text: 'where an advisory engagement exists, information necessary to deliver services under the applicable engagement letter.',
        },
      ],
    },
    {
      number: '1.3',
      title: 'Cookies and Similar Technologies',
      content:
        'Our website uses strictly necessary cookies to maintain session integrity, ensure portal functionality, and support security features. We may collect aggregate, non-identifying analytics to improve site performance. We do not deploy advertising cookies or cross-site tracking technologies.',
    },
    {
      number: '1.4',
      title: 'How We Use Information',
      content:
        'We process data to: respond to inquiries; deliver and administer advisory services; maintain the security and integrity of our systems; comply with legal, regulatory, and record-keeping obligations; and improve site performance on an aggregate basis.',
    },
    {
      number: '1.5',
      title: 'Legal Basis and Consent',
      content:
        'We process personal data on the basis of your consent, the performance of a contract or engagement, compliance with legal obligations, and our legitimate interest in operating a secure website. By submitting information through our web portal, you acknowledge and consent to the processing described herein.',
    },
    {
      number: '1.6',
      title: 'Data Security',
      content:
        'We implement commercially reasonable technical and organizational safeguards, including encrypted transmission (SSL/TLS), restricted access controls, and secure server infrastructure, to protect data against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.',
    },
    {
      number: '1.7',
      title: 'Data Retention',
      content:
        'Data is retained only for as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory record-keeping obligations under the Companies Act 2017 and applicable tax regulations. Upon expiration of the retention period, data is securely deleted or irreversibly anonymized.',
    },
    {
      number: '1.8',
      title: 'Disclosure and Third Parties',
      content:
        'We do not sell, rent, or trade your data. We may share information with third-party service providers (such as hosting, IT support, or email services) strictly to facilitate our operations, bound by confidentiality obligations. We may disclose information where required by law, court order, or valid regulatory request, including inquiries from the SECP or tax authorities.',
    },
    {
      number: '1.9',
      title: 'Your Rights',
      content:
        'Subject to applicable law, you may request access to, rectification of, or erasure of your personal data, and may object to or restrict certain processing. Requests may be directed to official email and will be processed within a reasonable timeframe, subject to our legal and regulatory obligations.',
    },
    {
      number: '1.10',
      title: 'Third-Party Links',
      content:
        'Our website may contain links to third-party sites. We assume no responsibility for the content, privacy policies, or practices of external sites, and users are encouraged to review their respective policies.',
    },
    {
      number: '1.11',
      title: 'Amendments',
      content:
        'We reserve the right to update this policy at any time. The "Last updated" date reflects the most recent revision. Continued use of the site following an update constitutes acceptance of the revised policy.',
    },
    {
      number: '1.12',
      title: 'Contact',
      content:
        'Direct inquiries received at email or via our web portal are handled confidentially and never sold or distributed. Questions regarding this policy may be directed to the same address.',
    },
  ],
};

export const termsAndConditionsData: LegalDocument = {
  id: 'terms',
  title: '2. TERMS & CONDITIONS',
  lastUpdated: 'November 2026',
  preamble:
    'These Terms & Conditions ("Terms") govern your access to and use of the website and web portal of WUM Advisory Services (SMC-Private) Limited (SECP CUI # 0314319) ("the Company," "we," "us"). By accessing or using the site, you agree to be bound by these Terms. If you do not agree, please discontinue use.',
  sections: [
    {
      number: '2.1',
      title: 'Informational Purpose Only',
      content:
        'Content published on this website is provided for general informational purposes only and does not constitute financial, investment, tax, legal, or professional advice. Nothing on this site constitutes a solicitation, offer, or recommendation to enter into any transaction or advisory engagement. Advisory services are provided only pursuant to a separately executed engagement letter or written agreement.',
    },
    {
      number: '2.2',
      title: 'No Advisory Relationship',
      content:
        'Accessing this website, submitting an inquiry through the web portal, or corresponding via email does not create a client, fiduciary, or advisory relationship between you and the Company. Such a relationship arises only upon written acceptance of an engagement by the Company.',
    },
    {
      number: '2.3',
      title: 'Eligibility and Acceptable Use',
      content:
        'You agree to use the site only for lawful purposes and in accordance with these Terms. You shall not: (a) use the site for any unlawful purpose; (b) attempt to gain unauthorized access to the portal, servers, or systems; (c) transmit malicious code, spam, or harmful content; (d) interfere with the site\'s normal operation or security features; or (e) scrape, harvest, or systematically extract content without prior written consent.',
    },
    {
      number: '2.4',
      title: 'Accuracy of Information',
      content:
        'While we endeavor to keep information current and accurate, we make no representations or warranties, express or implied, as to the completeness, accuracy, reliability, or suitability of any content. Information may be changed or updated without notice. You rely on site content at your own risk.',
    },
    {
      number: '2.5',
      title: 'Intellectual Property',
      content:
        'All content on this website — including text, graphics, logos, layout, and design — is the property of the Company or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or republish any content without prior written consent.',
    },
    {
      number: '2.6',
      title: 'Limitation of Liability',
      content:
        'To the maximum extent permitted by applicable law, the Company, its directors, officers, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your access to, use of, or inability to use this website, including any reliance placed on its content.',
    },
    {
      number: '2.7',
      title: 'Indemnification',
      content:
        'You agree to indemnify and hold harmless the Company and its personnel from any claims, liabilities, damages, or expenses arising from your breach of these Terms or your misuse of the site.',
    },
    {
      number: '2.8',
      title: 'External Links',
      content:
        'The site may contain links to third-party websites, provided for convenience only. The Company assumes no responsibility for the content, accuracy, or practices of external sites.',
    },
    {
      number: '2.9',
      title: 'Privacy',
      content:
        'Your use of the site is also governed by our Privacy Policy, which describes how we collect, use, retain, and protect your data. By using the site, you acknowledge the practices described therein.',
    },
    {
      number: '2.10',
      title: 'Governing Law and Jurisdiction',
      content:
        'These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any dispute arising hereunder shall be subject to the exclusive jurisdiction of the competent courts of Pakistan.',
    },
    {
      number: '2.11',
      title: 'Amendments',
      content:
        'We reserve the right to modify these Terms at any time. Continued use of the site following any update constitutes acceptance of the revised Terms.',
    },
    {
      number: '2.12',
      title: 'Contact',
      content:
        'Questions regarding these Terms may be directed to management of WUM Advisory Services.',
    },
  ],
};

export const accessibilityStatementData: LegalDocument = {
  id: 'accessibility',
  title: '3. ACCESSIBILITY STATEMENT',
  lastUpdated: 'November 2026',
  preamble:
    'WUM Advisory Services (SMC-Private) Limited (SECP CUI # 0314319) is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to our website and web portal.',
  sections: [
    {
      number: '3.1',
      title: 'Conformance Status',
      content:
        'We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible for people with a wide range of disabilities. We recognize that full conformance is an ongoing process, and some areas of the site may not yet fully meet these standards.',
    },
    {
      number: '3.2',
      title: 'Measures We Take',
      bullets: [
        {
          text: 'Semantic HTML structure and logical heading hierarchy to support screen readers.',
        },
        {
          text: 'Sufficient color contrast ratios for text and interactive elements.',
        },
        {
          text: 'Keyboard-navigable interfaces, with visible focus indicators where technically feasible.',
        },
        {
          text: 'Alternative text for meaningful images and accessible labels for form controls.',
        },
        {
          text: 'Responsive layout supporting browser zoom and text resizing without loss of content.',
        },
        {
          text: 'Consistent navigation and predictable interaction patterns across pages.',
        },
      ],
    },
    {
      number: '3.3',
      title: 'Known Limitations',
      content:
        'We are actively working to identify and remediate accessibility barriers. Where third-party components or embedded content are used, their accessibility is governed by the respective providers, and we make reasonable efforts to select accessible solutions.',
    },
    {
      number: '3.4',
      title: 'Compatibility',
      content:
        'Our website is designed to be compatible with current versions of major browsers (Chrome, Firefox, Safari, Edge) and with common assistive technologies, including screen readers and keyboard-only navigation. Optimal experience may vary depending on the combination of browser and assistive technology used.',
    },
    {
      number: '3.5',
      title: 'Feedback and Contact',
      content:
        'We welcome feedback on the accessibility of our website. If you encounter an accessibility barrier, or require content in an alternative format, please contact us. We aim to respond to accessibility feedback within a reasonable timeframe and will make reasonable efforts to provide the information or service you need through an alternative means.',
    },
    {
      number: '3.6',
      title: 'Enforcement and Ongoing Improvement',
      content:
        'Accessibility is reviewed periodically as part of our website maintenance. This statement will be updated as our conformance status and remediation efforts progress.',
    },
  ],
};

export const legalDocumentsMap: Record<string, LegalDocument> = {
  privacy: privacyPolicyData,
  terms: termsAndConditionsData,
  accessibility: accessibilityStatementData,
};
