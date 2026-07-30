# InaraX

InaraX is a B2B platform: an organization subscribes, and InaraX builds an
AI-skills training course personalized to every role and seniority level on
their team. Employees learn inside the app; org admins track progress,
completion, and quiz scores from a dashboard.

This repo is the marketing/product web app — currently the homepage plus a
few placeholder pages for the rest of the nav. It's a fresh Next.js (App
Router) project built from a static design mockup at
`frontend-stitch/code.html`, which was translated into typed React
components and a Tailwind v4 theme.

## Tech stack

| Layer       | Choice                                                          |
| ----------- | ---------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router, Turbopack)         |
| Language    | TypeScript (strict mode)                                         |
| Styling     | Tailwind CSS v4 (CSS-first config, no `tailwind.config.ts`)      |
| Fonts       | `next/font/google` — Inter (headings/UI), Open Sans (body copy)  |
| Icons       | Google Material Symbols Outlined (`<link>` in `app/layout.tsx`)  |
| Package mgr | npm                                                               |

No test runner, database, auth, or API layer exists yet — this is a static
marketing page.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (or next free port)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + next/typescript)
npx tsc --noEmit # typecheck
```

## Directory tree

```
inarax-new/
├── app/
│   ├── layout.tsx                # Root layout: fonts, metadata, <html>/<body>
│   ├── globals.css               # Tailwind import, @theme design tokens, custom CSS
│   ├── favicon.ico
│   └── (main)/               # Route group — shared Navbar + Footer layout
│       ├── layout.tsx              # Renders <Navbar/> + <main> + <Footer/> around every page below
│       ├── page.tsx                 # "/" — composes the homepage sections
│       ├── courses/page.tsx         # "/courses" — placeholder page
│       ├── pricing/page.tsx         # "/pricing" — placeholder page
│       ├── solutions/page.tsx       # "/solutions" — placeholder page
│       └── _sections/                # Private folder (not routable) — homepage-only sections
│           ├── Hero.tsx
│           ├── WhyGenericTrainingFails.tsx
│           ├── ThreeMovingParts.tsx
│           ├── HowItWorks.tsx
│           ├── WhyPartnerWithInaraX.tsx
│           ├── EnterpriseReady.tsx
│           ├── Faq.tsx
│           └── FinalCta.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Site-wide fixed nav (used on every marketing page)
│   │   └── Footer.tsx            # Site-wide footer
│   └── ui/
│       ├── Reveal.tsx            # Scroll-triggered fade-up wrapper (Client Component)
│       └── AccordionItem.tsx     # Generic expand/collapse primitive (Client Component)
├── public/                       # Static assets served at /  (currently just create-next-app boilerplate SVGs)
├── frontend-stitch/
│   └── code.html                 # Source-of-truth static mockup this app was built from
├── docs/                         # Next.js's own documentation, mirrored locally (see AGENTS.md — read before Next.js work)
├── next.config.ts / tsconfig.json / eslint.config.mjs / postcss.config.mjs
├── package.json
├── AGENTS.md / CLAUDE.md         # Engineering conventions for this repo (CLAUDE.md just points to AGENTS.md)
└── README.md                     # This file
```

## How the homepage fits together

`app/(main)/layout.tsx` renders `<Navbar />`, a `<main className="pt-20">`
wrapping `{children}`, and `<Footer />` around every page in the `(main)`
route group — so every marketing page gets the same chrome for free, without
each `page.tsx` re-importing `Navbar`/`Footer` itself.

`app/(main)/page.tsx` (the homepage, `/`) is a thin composition file —
it just renders all eight sections in mockup order. Each section is its own
file under `app/(main)/_sections/`, one per block in the original
mockup:

1. **Hero** — badge, headline, CTA, hero image in a rounded glass frame.
2. **WhyGenericTrainingFails** — problem statement + callout card.
3. **ThreeMovingParts** — org dashboard / InaraX / roles, 3-card grid.
4. **HowItWorks** — Subscribe → Course → Monitor, as an accordion.
5. **WhyPartnerWithInaraX** — 4-card audience grid (Procurement, L&D, Leadership, End Learner).
6. **EnterpriseReady** — 5-card grid (SSO, admin controls, expert review, data security, Atomcamp backing).
7. **Faq** — 6-question accordion.
8. **FinalCta** — dark closing CTA band.

`_sections/` uses the `_` prefix (a Next.js **private folder**) so these
files are colocated with the route that uses them but are never themselves
routable — they're implementation detail of `/`, not pages.

`Navbar` and `Footer` live at the top level under `components/layout/`,
not inside `_sections/` or the `(main)` folder, since `app/(main)/layout.tsx`
imports them once and every page in the group shares that one instance.

### Server vs. Client components

Per this repo's conventions (see `AGENTS.md`), everything is a Server
Component unless it actually needs interactivity or browser APIs:

- `Footer` and all eight section files are **Server Components** — no `"use client"`, no state.
- `Navbar` is a **Client Component** — it calls `usePathname()` (from `next/navigation`) to highlight whichever nav link matches the current route, which only works client-side.
- `components/ui/Reveal.tsx` and `components/ui/AccordionItem.tsx` are also **Client Components** — they need `useState`/`useEffect`/`IntersectionObserver`, which only run in the browser.

Sections import `Reveal`/`AccordionItem` where they need that behavior;
everything else in a section is plain static JSX.

### Sticky footer

`app/(main)/layout.tsx` wraps `Navbar`/`main`/`Footer` in a
`flex min-h-screen flex-col` container with `main` set to `flex-1`. Without
this, short pages (the `/courses`, `/pricing`, `/solutions` placeholders)
render shorter than the viewport and the footer ends up floating mid-page
with empty space below it — the classic "short content, floating footer"
layout bug. `flex-1` on `main` makes it grow to fill any leftover space,
pinning the footer to the bottom on short pages while still behaving
normally (footer directly follows content, page scrolls) on tall ones like
the homepage.

## Reusable primitives (`components/ui/`)

The original mockup (`frontend-stitch/code.html`) drove its interactivity
with two small vanilla-JS pieces: a `toggleAccordion()` function using
CSS class toggling + `max-height` transitions, and an `IntersectionObserver`
that added a `.visible` class to elements as they scrolled into view. Both
were reimplemented as React components instead of global CSS classes + DOM
scripting:

- **`Reveal`** — wraps any content; observes itself with an
  `IntersectionObserver` (threshold `0.1`, `rootMargin: "0px 0px -50px 0px"`,
  same as the original script) and flips from
  `opacity-0 translate-y-5` to `opacity-100 translate-y-0` once it enters
  the viewport, then stops observing. Takes an optional `delayMs` prop
  (applied as inline `transitionDelay`) to stagger multiple cards in a grid,
  matching the mockup's `delay-100`/`delay-200`/etc. classes.
- **`AccordionItem`** — a generic expand/collapse primitive used by both
  the "How it works" and FAQ sections, which have different visual
  styling but identical behavior. Takes `trigger` (header content),
  `children` (panel content), and className props for the card/button/
  content/chevron so each call site can match its own mockup styling
  exactly. Internally just a `useState<boolean>` toggling between
  `max-h-0` and `max-h-[500px]` with `overflow-hidden transition-[max-height]`
  — no shared/exclusive state between instances, so (like the mockup)
  multiple items can be open at once.

> **A React key-warning gotcha inside `AccordionItem`:** the `trigger` prop
> is wrapped in a bare Fragment — `<>{trigger}</>` — instead of being
> rendered as `{trigger}` directly next to the chevron `<span>`. React only
> exempts elements from key-checking when they're created as static JSX
> siblings *at their own creation site*; `trigger` is created in the caller
> (e.g. `HowItWorks`) and merely referenced here, so rendering it as one of
> two adjacent expression children triggered a spurious "Each child in a
> list should have a unique key prop" warning pointing at `AccordionItem`.
> Wrapping it in a Fragment makes it the sole child of that JSX position
> again, which sidesteps the check entirely — no DOM node added, no
> behavior change.

## Theming (`app/globals.css`)

This project uses **Tailwind CSS v4's CSS-first config** — there is no
`tailwind.config.ts`. All custom design tokens live in an `@theme` block in
`app/globals.css`, ported directly from the mockup's inline
`tailwind.config` script tag:

- **Colors** (`--color-*`) — the ~49-token Material Design 3–style palette (`primary`, `on-surface-variant`, `surface-container-high`, etc.) → generates `bg-*`, `text-*`, `border-*` utilities.
- **Border radius** (`--radius`, `--radius-lg`, `--radius-xl`, `--radius-full`) — the mockup overrides these to small values (e.g. `full` = `0.75rem`, not a true pill/circle), so `rounded-full` in this app is a soft rounded-square, not a circle. This is intentional, matching the mockup.
- **Spacing** (`--spacing-container-max`, `--spacing-margin-desktop`, etc.) — named tokens used as `max-w-container-max`, `px-margin-desktop`, `gap-gutter`.
- **Font families** (`--font-display-lg`, `--font-body-md`, etc.) — each points at the CSS variable exposed by `next/font/google` in `app/layout.tsx` (`--font-inter` or `--font-open-sans`), so `font-display-lg` etc. in JSX resolve to the right typeface.
- **Font sizes** (`--text-*` + paired `--text-*--line-height` / `--letter-spacing` / `--font-weight`) — Tailwind v4's way of expressing a design-system type scale (size + line-height + tracking + weight bundled under one utility name), matching the mockup's `fontSize` config exactly.

Two small pieces of plain CSS live in `app/globals.css` because Tailwind has
no utility for them, both wrapped in **`@layer components`**:

- `.material-symbols-outlined` — sets the icon font's `font-variation-settings` axes (`FILL`, `wght`, `GRAD`, `opsz`).
- `.glass-card` — the frosted-glass card look (`backdrop-filter: blur(20px)`, translucent background, custom box-shadow, hover lift) used across Hero, ThreeMovingParts, HowItWorks, WhyPartnerWithInaraX, and EnterpriseReady.

> **Why `@layer components` matters:** Tailwind v4 emits all of its own
> utilities inside `@layer utilities`. CSS cascade layers mean **un-layered
> rules always beat layered rules**, regardless of source order. Early on,
> `.glass-card` was plain (un-layered) CSS, which meant its own `background`
> silently overrode utility classes like `bg-primary` on any element
> combining both (this broke the "Central Intelligence" card in
> `ThreeMovingParts.tsx` — it rendered with no background/text at all).
> Wrapping custom classes in `@layer components` fixes this permanently:
> utility classes can always override them, same as everywhere else in
> Tailwind.

The old `prefers-color-scheme: dark` background/foreground block and
Geist fonts from the create-next-app boilerplate were removed — the mockup
has no dark mode (`darkMode: "class"` was configured but never used) and
uses Inter/Open Sans instead of Geist.

## Route plan

`/`, `/courses`, `/pricing`, and `/solutions` are built (the latter three as
placeholder pages — see below). The rest of the site's route tree was
planned in advance (so naming/structure stays consistent as more pages are
added) but isn't built yet — the footer's Enterprise/Contact Sales/Blog/
Careers/Privacy/Terms/Security links still point at routes that don't
exist:

```
app/(main)/            route group — shared Navbar + Footer layout (built)
├─ page.tsx                   "/"          ✅ built
├─ courses/page.tsx           "/courses"   ✅ built (placeholder)
├─ pricing/page.tsx           "/pricing"   ✅ built (placeholder)
├─ solutions/page.tsx         "/solutions" ✅ built (placeholder)
├─ enterprise/                "/enterprise"
├─ contact-sales/             "/contact-sales"  (both "Request a consultation" CTAs)
├─ blog/                      "/blog", "/blog/[slug]"
├─ careers/                   "/careers"
├─ privacy/                   "/privacy"
├─ terms/                     "/terms"
└─ security/                  "/security"

app/(auth)/                 route group — minimal centered layout, no nav/footer (not built)
├─ login/                     "/login"
└─ signup/                    "/signup"
```

The `/courses`, `/pricing`, and `/solutions` placeholder pages are
intentionally minimal — a heading + one line of text — just enough to prove
out routing and nav active-state highlighting before real content exists.
Each already gets the shared `Navbar`/`Footer` for free via
`app/(main)/layout.tsx`.

Not planned in detail yet: an authenticated product surface (the org admin
dashboard and the in-app learner experience mentioned in the copy) — that's
a separate surface from this marketing site.

## Known gaps / follow-ups

- **Hero image is a prototype URL.** `Hero.tsx` still points at the mockup's `lh3.googleusercontent.com` placeholder image (allowed via `images.remotePatterns` in `next.config.ts`). Swap for a permanent hosted asset before shipping.
- **Footer links are still placeholders.** They point at the planned-but-unbuilt route paths above and will 404 until those pages exist. Nav links (Home/Courses/Pricing/Solutions) are all live.

## Mobile navigation

Below the `md` breakpoint, `Navbar` swaps the inline nav links for a
hamburger button (`md:hidden`) that toggles a dropdown panel listing
Home/Courses/Pricing/Solutions — same active-link highlighting as desktop,
and it closes itself on navigation. The mockup itself had no mobile menu at
all (links just vanished below `md`); this was intentionally built out
beyond the mockup since a real site needs the nav reachable on small
screens.
