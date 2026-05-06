export type SitePageId =
  | "home"
  | "work"
  | "services"
  | "studio"
  | "process"
  | "journal"
  | "contact"
  | "privacy"
  | "terms";

export const siteRoutes = {
  home: "/",
  work: "/work",
  services: "/services",
  studio: "/studio",
  process: "/process",
  journal: "/journal",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
} as const;

export const navigationItems: Array<{
  name: string;
  id: Exclude<SitePageId, "home" | "process">;
}> = [
  { name: "Work", id: "work" },
  { name: "Services", id: "services" },
  { name: "Studio", id: "studio" },
  { name: "Journal", id: "journal" },
  { name: "Contact", id: "contact" },
];

export const footerItems: Array<{
  name: string;
  id: Exclude<SitePageId, "home" | "services">;
}> = [
  { name: "Work", id: "work" },
  { name: "Studio", id: "studio" },
  { name: "Process", id: "process" },
  { name: "Journal", id: "journal" },
  { name: "Contact", id: "contact" },
];

export function getProjectHref(projectId: string) {
  return `${siteRoutes.work}/${projectId}`;
}

export function getPageIdFromPathname(pathname: string): SitePageId {
  if (pathname === siteRoutes.home) {
    return "home";
  }

  if (pathname.startsWith(`${siteRoutes.work}/`)) {
    return "work";
  }

  const matchedRoute = Object.entries(siteRoutes).find(
    ([, href]) => href === pathname,
  )?.[0];

  return (matchedRoute as SitePageId | undefined) ?? "home";
}
