import type { Metadata } from "next";
import "../src/styles/index.css";
import { AppShell } from "@/components/layout/AppShell";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="relative">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
