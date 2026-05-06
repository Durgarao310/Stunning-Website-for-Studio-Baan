import { ServicesPage } from "@/app/pages/ServicesPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Architecture, interior design, product design, and research services by Studio Baan.",
  path: "/services",
});

export default function ServicesRoutePage() {
  return <ServicesPage />;
}
