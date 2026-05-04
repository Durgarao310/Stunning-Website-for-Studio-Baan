You are a world-class creative developer and award-winning digital designer (Awwwards SOTY / FWA / CSS Design Awards level). Build a complete, production-ready, ultra-premium, hyper-minimal website for a high-end architecture studio named [STUDIO NAME].The website must feel like the absolute pinnacle of modern digital architecture — elegant, restrained, emotionally powerful, and technically flawless. It should deliver a buttery-smooth, cinematic browsing experience that feels luxurious and could realistically win Site of the Year in 2026.Design Direction (non-negotiable)Aesthetic: Extreme minimalism with architectural soul. Generous negative space, perfect typography hierarchy, subtle material tactility, and cinematic movement. Think Herzog & de Meuron meets Studio Müller or a digital version of the most refined physical architecture monograph.
Color palette: Warm off-white (#F8F5F0) background, deep charcoal text (#11110F), soft warm gray accents (#D1C8BE), and one signature accent (#B88A6E — terracotta/gold undertone) used very sparingly for CTAs and interactive highlights.
Typography: Headings use a refined geometric sans (Neue Haas Grotesk / Satoshi / obviously system fallback). Body uses Inter or system sans. Perfect kerning, massive scale contrast, and generous line height.
Motion: Everything must feel alive but never decorative. Use Lenis + Framer Motion. 60 fps, spring physics, scroll-triggered micro-animations, and subtle parallax. No cheap fade-ins — every animation must serve the architecture narrative.
Cursor: Custom ultra-minimal circular cursor that scales and changes state on interactive elements (with magnetic effect on project cards and buttons).
Performance: 100 Lighthouse scores across all metrics. Next/Image with proper sizes, lazy loading, and LQIP. No jank whatsoever.

Tech Stack (must use)Next.js 15 (App Router) + TypeScript
Tailwind CSS
Framer Motion + Lenis for scroll
shadcn/ui + custom components
Sanity.io or direct content layer (use placeholder data for now)
Fully responsive (mobile experience must feel equally premium)

Site Structure & Pages1. HomeFull-bleed cinematic hero with looping subtle video/background (or high-res image sequence) of signature architecture + massive elegant headline and tagline.
Smooth scroll indicator.
“Selected Works” — horizontal scroll snap section (desktop) / vertical on mobile with beautiful project cards that reveal metadata on hover/tap.
Studio philosophy teaser.
Awards / press marquee (subtle).
Newsletter signup in footer area.

2. WorkFilterable masonry grid (All, Residential, Commercial, Cultural, Institutional, etc.).
Project cards with stunning hover states (image scale + overlay reveal of year, location, typology).
Clicking any project opens a dedicated project page (see below).

3. Project Detail Pages (dynamic route)Full-bleed hero image/video.
Sticky project metadata panel (client, location, year, size, status, collaborators).
Rich image gallery with lightbox (horizontal scroll + thumbnail strip).
In-depth project text with pull quotes.
“Next Project” seamless transition at bottom.
Related projects carousel.

4. Studio (About)Hero with studio portrait or abstract spatial image.
In-depth “Our Story” narrative.
Values / philosophy presented as elegant full-width blocks.
Team grid — beautiful portraits that open rich modals with bio, role, and selected projects.
Studio timeline (vertical animated scroll).

5. ProcessBeautifully illustrated 5–6 step process with large numbers, minimal icons/SVGs, and expanding content panels on scroll.

6. JournalEditorial grid of thought-leadership articles (architecture, sustainability, craft, etc.).
Featured image + elegant typography. Clicking opens full article page.

7. ContactSplit layout: elegant contact form on one side, studio information + embedded map on the other.
Form must have beautiful success state animation.

8. Global ElementsMinimal sticky navigation (logo + menu items: Work, Studio, Process, Journal, Contact). Transparent on hero, solid on scroll.
Full-screen mobile menu with elegant animation.
Footer with all links, social icons, legal, and subtle copyright.
Preloader with custom line-drawing architectural motif animation.
Page transition system (smooth fade + slight scale).

Award-Winning Details to IncludeMagnetic cursor interactions
Scroll-triggered narrative animations
Perfect scroll snapping and momentum
Keyboard navigation & full accessibility
SEO-ready metadata per page
Open Graph images for every project and page
Subtle “back to top” behavior
Easter egg: hold “A” key on home to reveal a hidden 3D wireframe model (optional but impressive)

DeliverablesProvide the complete Next.js project structure with:All page files (app/page.tsx, app/work/page.tsx, dynamic project route, etc.)
Reusable components (ProjectCard, Navigation, Footer, etc.)
Tailwind config with custom fonts and colors
Framer Motion + Lenis setup
All placeholder content and Unsplash/Pexels architecture image URLs ready to swap
README with npm run dev instructions

Make every detail feel expensive, intentional, and emotionally resonant. This website should not just present an architecture studio — it should be architecture itself.Start building now.

