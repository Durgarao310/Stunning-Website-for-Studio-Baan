import { JournalPage } from "@/app/pages/JournalPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Journal",
  description:
    "Essays and reflections from Studio Baan on architecture, craft, and design culture.",
  path: "/journal",
});

export default function JournalRoutePage() {
  return <JournalPage />;
}
