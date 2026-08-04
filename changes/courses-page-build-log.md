# Courses page build log

Tracks the plan, CSS conflicts, and decisions behind building the real
`/courses` page from `frontend-stitch/courses/code.html`, so any future UI
problem on this page can be traced back to *why* something was built the
way it was. Same format as `changes/home-page-build-log.md` — entries are
appended as work happens.

## Status

- [x] Conflicts reviewed and decisions made
- [x] `app/(main)/courses/_sections/` components built
- [x] `app/(main)/courses/page.tsx` composes them
- [x] Verified in browser (desktop) — see 2026-07-31 implementation entry
- [ ] Verified on a real mobile viewport (only desktop has been screenshotted so far, same gap as the home-page log)

---

## 2026-07-31 — Planning entry

### Scope note: Navbar/Footer/nav differences ignored

`frontend-stitch/courses/code.html` has its own `<nav>` and `<footer>`
markup that differs from what's already built (different nav links —
adds "How it works", drops the current site's exact copy; different
footer columns — "Legal"/"Company"/"Connect" instead of the current
"Product"/"Legal"/"Contact"). **Per instruction, these are ignored.** The
existing shared `components/layout/Navbar.tsx` and
`components/layout/Footer.tsx` will keep being used unchanged, exactly as
they were for the `/` and `/b2b` pages. Only the `<main>` content between
them is being translated into new page-specific sections.

### Component breakdown

New `app/(main)/courses/_sections/` (mirroring `b2b`'s and the homepage's
per-route private-folder pattern), composed by `app/(main)/courses/page.tsx`
(currently a one-line placeholder, to be replaced):

| File | Content | Layout notes |
|---|---|---|
| `Hero.tsx` | "PUBLIC CATALOG" badge, H1 "AI programs that start where you are", paragraph, two CTAs, and a 3-stop "Placement → Core skills → Career" path-preview card connected by a horizontal line | Decorative vertical `grid-line-v` lines behind the hero (desktop only) |
| `ProgramCards.tsx` | "Choose your AI program" — two side-by-side program cards (AI for Engineers / AI for Professionals), each with badge, title, tagline, description, price, CTA link | `grid-cols-1 md:grid-cols-2` |
| `HowInaraxAdapts.tsx` | Parent section wrapping two sub-blocks sharing one background: `AdaptiveShowcase` (3 image cards: Assessment/Personalization/Mastery, using a new `.liquid-glass` style) and `EcosystemFeatures` (4-col feature grid: AI Tutor/Dynamic Lessons/Credentials/Community) | `grid-cols-1 md:grid-cols-3` (showcase), `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (features) |
| `CommunityBlurb.tsx` | "More than a course, be part of a community" — two paragraphs, no imagery | Simple centered text block |
| `FinalCta.tsx` | Closing CTA — "Ready to start learning?", two buttons, one link to the B2B page | Distinct copy from both `b2b` and homepage `FinalCta.tsx` |

**Reused, not rebuilt:** `Navbar`, `Footer` (per scope note above), `Reveal`
(replaces this mockup's own `.reveal`/`.reveal.active` classes + vanilla
`IntersectionObserver` script at the bottom of the file — same reasoning
as the home and b2b pages: a second, CSS-class-driven reveal mechanism
would conflict with the established convention).

### CSS conflict audit

This mockup ships its **own** `tailwind-config` script, separate from (and
partially inconsistent with) both earlier mockups. Cross-checked every
token against the current `app/globals.css`.

**Already compatible, no changes needed:**
- `surface-container-low/highest/lowest`, `primary-container`,
  `primary-fixed`, `on-primary-fixed`, `on-primary-fixed-variant`,
  `tertiary-fixed`, `tertiary`, `background`, `surface`, `on-primary` — all
  match current theme values exactly.
- `radius-lg` (0.5rem), `radius-xl` (0.75rem), `radius-full` (9999px) —
  all match.
- Spacing scale (`xs/sm/md/lg/xl` = 4/12/24/48/80px, plus
  `margin-mobile`/`margin-desktop`/`gutter`/`base`) — identical to the
  `home/` mockup's scale already handled. Same translation rule applies:
  bare `gap-md`, `p-lg`, `px-md`, `py-sm`, `mb-md`, `mt-lg`, `pt-md`,
  `space-y-sm`, etc. all need the `size-` prefix (`gap-size-md`,
  `p-size-lg`, ...); `base`/`margin-mobile`/`margin-desktop`/`gutter`
  stay unprefixed, same as before.
- Font families and font sizes (`display-lg`, `display-lg-mobile`,
  `headline-lg`, `headline-md`, `body-lg`, `body-md`, `label-md`) — every
  value matches what's already in `app/globals.css` from the home-page
  work. No new font tokens needed.
- `.soft-glow-shadow` — already exists, reused as-is.

**Real conflicts — need a decision before implementing:**

1. **`primary` color mismatch.** This mockup defines `primary: #0050ef`.
   The current theme's `--color-primary` is `#003cb9` (the *original*
   mockup's blue, carried forward unchanged through the home-page work,
   where only `primary-container` got updated to `#0050ef`). Every
   `bg-primary`/`text-primary`/`border-primary` in this mockup's hero
   badge, CTA buttons, price links, etc. assumes `#0050ef`. Note
   `frontend-stitch/home/DESIGN.md` itself calls `#0050EF` "Primary Blue"
   — so this mockup may simply be correcting a gap left from the earlier
   session (`primary-container` was updated, `primary` wasn't).
2. **`on-surface` color mismatch.** Mockup: `#131313`. Current theme:
   `#191c1c`. Notably, `#131313` is the *exact* value already sitting in
   the theme as `--color-inarax-black` — so this may just be `on-surface`
   catching up to a value we already introduced under a different name.
3. **`on-surface-variant` color mismatch.** Mockup: `#5f5e5e`. Current
   theme: `#434656`.
4. **`outline-variant` color mismatch.** Mockup: `#c5c7c7`. Current theme:
   `#c3c5d8`.
5. **`DEFAULT` border radius (bare `rounded` class) mismatch.** Mockup:
   `0.5rem`. Current theme's `--radius`: `0.25rem`. This mockup uses the
   *bare* `rounded` class (not `rounded-lg`/`rounded-xl`) on the Hero CTA
   buttons and the program-card badges, so this isn't cosmetic — those
   elements would render with the wrong corner radius if `--radius` isn't
   updated.
6. **`.glass-card` name collision with different values.** This mockup's
   `<style>` block redefines `.glass-card` (`backdrop-filter: blur(12px)`,
   border `rgba(197,199,199,0.3)`, no hover effect) — different from the
   `.glass-card` already in `app/globals.css` (`blur(20px)`, border
   `rgba(19,19,19,0.05)`, hover lift). **This one doesn't block
   implementation** — grepping this mockup's own `<body>`, `.glass-card`
   is never actually used in its markup (only `.liquid-glass` is). Flagging
   it anyway since the name collision is real and could bite someone
   copy-pasting this mockup's `<style>` block wholesale later.

All four color conflicts (1–4) and the radius conflict (5) affect
`--color-primary`/`--color-on-surface`/`--color-on-surface-variant`/
`--color-outline-variant`/`--radius`, all of which are used **site-wide**
(Navbar, Footer, `b2b` sections, homepage sections) — same
"scoped vs. global" tension as the earlier home-page theme decisions.
Changing them to match this mockup would visibly shift the look of every
existing page, not just `/courses`.

**New CSS needed:**
- `.liquid-glass` (and its `:hover` state) — not in the current theme,
  used by the three "How inaraX adapts to you" image cards. Needs adding
  to `app/globals.css` `@layer components`. No conflict, just additive.

**Minor, non-blocking notes:**
- This mockup uses `max-w-7xl` (Tailwind's stock 80rem = 1280px) instead of
  the app's own `max-w-container-max` token, which is also 1280px —
  functionally identical. Recommend translating to `max-w-container-max`
  for consistency with every other section in the app, rather than
  introducing a second way to express the same width.
- `data-icon="..."` attributes on several `material-symbols-outlined`
  spans are inert (nothing in the mockup's own script reads them) — safe
  to drop when implementing.
- Inline `style="font-variation-settings: 'FILL' 1;"` (single-quoted) is
  the same pattern already used on the homepage via
  `style={{ fontVariationSettings: '"FILL" 1' }}` — same translation.

### Decision: keep the current theme values for all five conflicts

For all five conflicts above (`primary`, `on-surface`, `on-surface-variant`,
`outline-variant`, and the `DEFAULT` radius / bare `rounded`), the call is
to **use the current theme values, not this mockup's** — no changes to
`app/globals.css` for any of these. Practically, this means every
component below uses the class names exactly as they appear in the
mockup (`bg-primary`, `text-on-surface`, `text-on-surface-variant`,
`border-outline-variant`, `rounded`), and they resolve to whatever is
already in the theme (`#003cb9`, `#191c1c`, `#434656`, `#c3c5d8`, `0.25rem`
respectively) rather than the mockup's slightly different intended values
(`#0050ef`, `#131313`, `#5f5e5e`, `#c5c7c7`, `0.5rem`). No per-component
overrides, no arbitrary values — just the existing tokens, so `/courses`
will look *slightly* different from this specific mockup file in these
five spots, consistently with how `/`, `/b2b`, and the shared Navbar/Footer
already look.

### Next step

Proceeding to build `app/(main)/courses/_sections/` using this decision.

---

## 2026-07-31 — Implementation entry

Built five sections in `app/(main)/courses/_sections/` (`Hero`,
`ProgramCards`, `HowInaraxAdapts` + its two sub-components
`AdaptiveShowcase`/`EcosystemFeatures`, `CommunityBlurb`, `FinalCta`) and
wired them into `app/(main)/courses/page.tsx`, replacing the placeholder.
Added `.liquid-glass`/`.liquid-glass:hover` to `app/globals.css`
`@layer components` (additive, no conflict). `npx tsc --noEmit` and
`eslint` both pass clean.

### Applied as planned

- Every bare `xs/sm/md/lg/xl` spacing class translated to its
  `size`-prefixed equivalent (`gap-md` → `gap-size-md`, etc.); `base`,
  `margin-mobile`, `margin-desktop`, `gutter` left unprefixed, same rule
  as the home page.
- `max-w-7xl` → `max-w-container-max` throughout, per the "use the
  existing token" recommendation.
- All five color/radius conflicts resolved by using the current theme
  values unchanged (no `globals.css` color/radius edits) — see the
  Decision entry above.
- Navbar/Footer untouched, exactly as instructed.

### CTA destinations wired

- `FinalCta`'s "View pricing" → `/pricing` (existing built route).
- `FinalCta`'s "Training a team? Explore inaraX for organizations" →
  `/b2b`.
- Left as placeholders (mockup itself used plain `<a href="#">`, no
  obvious target): both "Explore AI for Engineers"/"Explore AI for
  Professionals" links in `ProgramCards` (no dedicated course-detail
  routes exist yet), and Hero's "Find your level" (a `<button>` in the
  mockup, no href).

### Known content issue (not introduced by this work, not fixed)

All three images in `AdaptiveShowcase.tsx` (Assessment/Personalization/
Mastery) use the mockup's `lh3.googleusercontent.com/aida/...` URLs (the
same `/aida/` — not `/aida-public/` — path pattern already flagged as
broken for the homepage's `KeyFeatures.tsx` middle image). All three
return `403 Forbidden` from Next's image optimizer. Same root cause,
same category as the already-documented "Hero image is a prototype URL"
gap in `README.md` — left as-is, matching the mockup exactly.

### Verification performed

- `npx tsc --noEmit` — clean.
- `eslint` on all new files — clean.
- Full visual pass via headless Chrome + CDP screenshots at 1440px width
  (desktop): confirmed Hero (path-preview card, CTAs), `ProgramCards`
  (both cards, staggered reveal), `HowInaraxAdapts` (3-card showcase +
  4-feature grid layout — images broken per the known issue above, but
  layout/spacing correct), `CommunityBlurb`, and `FinalCta` (button
  styling, working `/pricing` and `/b2b` links).
- **Not yet done:** a real mobile-width screenshot pass, same outstanding
  item as the home-page log.

---

## 2026-08-04 — Superseded by site-wide color consolidation

This log's "Decision: keep the current theme values for all five
conflicts" entry above is superseded by
`changes/color-consolidation-build-log.md`, which did a full cross-page
audit rather than a page-scoped one. Outcome for the five items that
entry covered:

- `primary`, `on-surface`, `on-surface-variant`, `outline-variant`:
  **reaffirmed** — still the current values, but now as a deliberate,
  permanent, cross-page standard (the user's rule: "use the home page as
  reference"), not just this page's provisional call.
- Bare `--radius` (DEFAULT): **changed**, from `0.25rem` to `0.5rem` —
  the courses mockup's original intent for this page's Hero CTA buttons
  and `ProgramCards` badge now actually applies. See the other log for
  the full before/after and verification.
