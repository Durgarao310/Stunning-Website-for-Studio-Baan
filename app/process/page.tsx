import { ProcessPage } from "@/app/pages/ProcessPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Process",
  description:
    "Learn how Studio Baan approaches discovery, concept development, documentation, and delivery.",
  path: "/process",
});

export default function ProcessRoutePage() {
  return <ProcessPage />;
}
