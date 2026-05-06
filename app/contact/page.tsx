import { ContactPage } from "@/app/pages/ContactPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Studio Baan to discuss architecture, interiors, or product design projects.",
  path: "/contact",
});

export default function ContactRoutePage() {
  return <ContactPage />;
}
