"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CustomCursor } from "@/app/components/CustomCursor";
import { Footer } from "@/app/components/Footer";
import { Navigation } from "@/app/components/Navigation";
import { Preloader } from "@/app/components/Preloader";
import { ScrollToTop } from "@/app/components/ScrollToTop";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
