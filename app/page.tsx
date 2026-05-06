import { HomePage } from "@/app/pages/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Architecture, Interiors, Product Design",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
