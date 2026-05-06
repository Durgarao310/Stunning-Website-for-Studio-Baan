import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read how Studio Baan collects, uses, and protects personal information across this website and its client communications.",
  path: "/privacy-policy",
});

const policySections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect personal information you choose to provide when you contact us, request a consultation, subscribe to updates, or otherwise communicate with Studio Baan. This may include your name, email address, phone number, company details, project information, and any other information you voluntarily share.",
      "We may also collect limited technical information automatically when you visit the website, including device type, browser information, pages viewed, referral source, and general usage analytics. This information is used to maintain site performance, understand audience behavior, and improve the website experience.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use personal information to respond to inquiries, evaluate potential projects, communicate about our services, manage client relationships, improve website functionality, and send updates where you have asked to receive them.",
      "We do not sell your personal information. We only use it where necessary for legitimate business purposes, to fulfill requests you make, to comply with legal obligations, or where you have given consent.",
    ],
  },
  {
    title: "Sharing and Service Providers",
    body: [
      "We may share information with trusted service providers who support website hosting, analytics, communications, or operational administration. These providers are expected to handle information securely and only for the purposes we specify.",
      "We may also disclose information where required by law, regulation, legal process, or to protect the rights, safety, and operations of Studio Baan, its clients, or the public.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "This website may use cookies or similar technologies to support core site functionality, monitor traffic patterns, and understand how visitors interact with the site. You can control cookies through your browser settings, though some features may not function as intended if cookies are disabled.",
    ],
  },
  {
    title: "Data Retention and Security",
    body: [
      "We retain information only for as long as reasonably necessary for the purposes described in this policy, including business, contractual, legal, accounting, and archival requirements.",
      "We apply reasonable technical and organizational safeguards to protect personal information. No internet transmission or storage system is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on your location, you may have rights to request access to, correction of, deletion of, restriction of, or objection to the use of your personal information. You may also have the right to withdraw consent where processing is based on consent.",
      "To make a privacy-related request, contact us at hello@studiobaan.com. We may need to verify your identity before completing certain requests.",
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      "This website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of external sites. You should review their privacy policies separately.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. The updated version will be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <div className="mb-16 md:mb-20 border-b border-border pb-10">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">
            Legal
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[0.95] tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl opacity-60 leading-relaxed max-w-3xl">
            This Privacy Policy explains how Studio Baan collects, uses, stores,
            and protects personal information when you visit this website or
            communicate with our studio.
          </p>
          <p className="text-sm opacity-40 mt-6">Effective date: 6 May 2026</p>
        </div>

        <div className="space-y-14">
          {policySections.map((section) => (
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
          <h2 className="text-2xl md:text-3xl tracking-tight mb-5">Contact</h2>
          <p className="text-base md:text-lg opacity-70 leading-relaxed">
            If you have questions about this Privacy Policy or how your
            information is handled, contact Studio Baan at hello@studiobaan.com.
          </p>
        </section>
      </div>
    </div>
  );
}
