import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Review the terms governing access to the Studio Baan website, content, and communications.",
  path: "/terms-of-service",
});

const termsSections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you should not use the website.",
    ],
  },
  {
    title: "Website Purpose",
    body: [
      "This website is provided for general information about Studio Baan, its services, design philosophy, projects, and contact channels. Content on the site is provided for informational and promotional purposes only and does not constitute professional, legal, construction, engineering, or investment advice.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on this website, including text, graphics, branding, project descriptions, layouts, and other original materials, is owned by or licensed to Studio Baan unless otherwise stated. You may not reproduce, distribute, modify, publish, transmit, or commercially exploit any part of the website without prior written permission.",
    ],
  },
  {
    title: "Permitted Use",
    body: [
      "You may use this website only for lawful purposes and in a way that does not infringe the rights of others, damage the site, disrupt access, introduce malicious code, or interfere with its operation or security.",
    ],
  },
  {
    title: "Project and Service Inquiries",
    body: [
      "Submitting an inquiry through the website or by email does not create a client, consultant, or contractual relationship with Studio Baan. Any engagement for services is subject to a separate written agreement signed by the relevant parties.",
    ],
  },
  {
    title: "Third-Party Content and Links",
    body: [
      "The website may contain links to third-party websites, services, maps, or platforms for convenience. Studio Baan does not control and is not responsible for the availability, content, policies, or practices of those third parties.",
    ],
  },
  {
    title: "No Warranties",
    body: [
      "This website is provided on an 'as is' and 'as available' basis. To the maximum extent permitted by law, Studio Baan disclaims warranties of any kind, whether express or implied, including warranties of accuracy, completeness, merchantability, fitness for a particular purpose, non-infringement, and uninterrupted availability.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Studio Baan shall not be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or related to your use of, or inability to use, this website or its content.",
    ],
  },
  {
    title: "Changes to the Website or Terms",
    body: [
      "We may modify, suspend, or discontinue any part of the website at any time without notice. We may also update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the Netherlands, without regard to conflict of laws principles. Any disputes arising in connection with these terms or the website will be subject to the competent courts of the Netherlands, unless applicable law requires otherwise.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <div className="mb-16 md:mb-20 border-b border-border pb-10">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">
            Legal
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[0.95] tracking-tighter">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl opacity-60 leading-relaxed max-w-3xl">
            These terms govern access to and use of the Studio Baan website and
            associated communications made through it.
          </p>
          <p className="text-sm opacity-40 mt-6">Effective date: 6 May 2026</p>
        </div>

        <div className="space-y-14">
          {termsSections.map((section) => (
            <section key={section.title} className="space-y-5">
              <h2 className="text-2xl md:text-3xl tracking-tight">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base md:text-lg opacity-70 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-16 pt-10 border-t border-border">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-5">
            Contact and Questions
          </h2>
          <p className="text-base md:text-lg opacity-70 leading-relaxed">
            Questions about these terms can be directed to Studio Baan at
            hello@studiobaan.com.
          </p>
        </section>
      </div>
    </div>
  );
}
