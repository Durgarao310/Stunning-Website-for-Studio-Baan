import { WorkPage } from "@/app/pages/WorkPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Selected architecture, interior, and product design projects by Studio Baan.",
  path: "/work",
});

export default function WorkRoutePage() {
  return <WorkPage />;
}
