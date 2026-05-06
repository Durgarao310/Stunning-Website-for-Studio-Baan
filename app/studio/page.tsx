import { StudioPage } from "@/app/pages/StudioPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Studio",
  description: "Meet the team, values, and philosophy behind Studio Baan.",
  path: "/studio",
});

export default function StudioRoutePage() {
  return <StudioPage />;
}
