# Home page build log

Tracks the plan, CSS conflicts, and decisions behind building the real `/`
homepage from `frontend-stitch/home/code.html`, so any future UI problem on
this page can be traced back to *why* something was built the way it was.
Entries are appended as work happens — this file is a running log, not a
one-time doc.

## Status

- [x] Plan reviewed and approved
- [x] `app/(main)/_sections/` components built
- [x] `app/(main)/page.tsx` composes them
- [x] Verified in browser (desktop) — see 2026-07-31 implementation entry
- [ ] Verified on a real mobile viewport (only desktop has been screenshotted so far)

---

## 2026-07-31 — Planning entry

### Component breakdown

New private folder `app/(main)/_sections/` (separate from the existing
`app/(main)/b2b/_sections/`), composed by `app/(main)/page.tsx` (currently a
placeholder, to be replaced):

| File | Content | Layout notes |
|---|---|---|
| `Hero.tsx` | Badge row, H1 "Personalized by AI. Verified by humans.", 4-item checklist grid, CTA + "Watch Demo", right-side AI-calibration preview card | `grid-cols-1 md:grid-cols-12`, `md:col-span-7` / `md:col-span-5` |
| `KeyFeatures.tsx` | "The two-door fork" — text / image / text | `grid-cols-1 md:grid-cols-3` |
| `PersonalizedPath.tsx` | Parent section wrapping three sub-blocks that share one section background: `PathSteps` (3 numbered image cards), `TwoBrainsArchitecture` (dark 2-col card), `B2BBand` (primary-colored CTA strip) | `grid-cols-1 md:grid-cols-12` (steps), `grid-cols-1 md:grid-cols-2` (two brains), `flex-col md:flex-row` (B2B band) |
| `WhyChooseInaraX.tsx` | 6-cell bordered grid alternating text/image | `grid-cols-1 md:grid-cols-3`, `border-b md:border-b-0 md:border-r` table-style dividers |
| `Faq.tsx` | 10 Q&A pairs (distinct content from `b2b/_sections/Faq.tsx`'s 6) | `grid-cols-1 md:grid-cols-2`, uses `AccordionItem` |
| `FinalCta.tsx` | Dark closing CTA band (distinct copy from `b2b/_sections/FinalCta.tsx`) | — |

**Reused, not rebuilt:**
- `components/layout/Navbar.tsx` — left unchanged (see Decisions below).
- `components/layout/Footer.tsx` — the mockup's footer markup is
  byte-identical to what's already built; no changes needed.
- `components/ui/Reveal.tsx` — replaces the mockup's `.reveal-on-scroll` /
  `.active` CSS classes and the vanilla `IntersectionObserver` `<script>` at
  the bottom of the mockup. Same reasoning as the `b2b` page: adding the CSS
  version too would create two parallel ways to do the same fade-up
  animation.
- `components/ui/AccordionItem.tsx` — replaces the mockup's native
  `<details>/<summary>` FAQ markup, so this FAQ gets the same expand/collapse
  behavior and animation as `b2b`'s FAQ instead of a second interaction
  pattern.

### CSS conflict audit

**Already compatible, no theme changes needed:**
- All 49 colors + `inarax-black` — identical to the palette already in
  `app/globals.css` `@theme` (ported in an earlier session).
- All font tokens used (`display-lg`, `display-lg-mobile`, `headline-md`,
  `headline-lg`, `body-md`, `body-lg`, `label-md`) — already defined.
- `.grid-blueprint`, `.soft-glow-shadow`, `.primary-cta-glow` — already in
  `@layer components`, just unused until now.
- `rounded-full` / `rounded-lg` / `rounded-xl` — already match the current
  theme values. `rounded-2xl` (Two Brains card) and `rounded-3xl` (CTA band)
  aren't customized by either mockup's `borderRadius` config, so they fall
  back to Tailwind's own stock values (1rem / 1.5rem) — not a conflict, just
  worth noting these two are intentionally un-themed.
- `w-*`/`h-*` usages (`w-8`, `h-12`, `w-16`, etc.) — all use Tailwind's
  numeric default scale, not the named `xs/sm/md/lg/xl` scale, so they're
  unaffected by the spacing rename below either way.
- `max-w-3xl`, `max-w-4xl`, `max-w-[700px]`, `max-w-[1440px]`, `max-w-full` —
  none of these are customized by our theme (our spacing scale only goes up
  to `xl`), so they resolve via Tailwind's stock `--container-3xl`/`4xl` or
  bypass the theme entirely (arbitrary values). No conflict.

**The one real, load-bearing conflict — bare `xs/sm/md/lg/xl` spacing
classes.** The mockup's HTML uses bare spacing-scale utility classes
(`gap-md`, `gap-lg`, `gap-sm`, `gap-xs`, `p-md`, `p-lg`, `px-sm`, `px-md`,
`px-xl`, `py-xs`, `py-md`, `mb-md`, `mb-sm`, `mb-xs`, `mt-md`, `mt-xl`,
`ml-lg`, `ml-xs`, `space-y-sm`, `space-y-md`), all relying on
`--spacing-md/lg/sm/xs/xl` existing as bare names. Those bare names no
longer exist in `app/globals.css` — they were renamed to `--spacing-size-*`
in an earlier session specifically because Tailwind v4 resolves `max-w-*`
from `--spacing-*` before its own `--container-*` scale, so a bare
`--spacing-xl` was silently hijacking `max-w-xl` (see the "Gotcha" callout
in `README.md`'s Theming section for the full story).

**Resolution:** every one of the classes above gets translated when written
into the new components:

| Mockup class | Translated to |
|---|---|
| `gap-md` / `gap-lg` / `gap-sm` / `gap-xs` | `gap-size-md` / `gap-size-lg` / `gap-size-sm` / `gap-size-xs` |
| `p-md` / `p-lg` | `p-size-md` / `p-size-lg` |
| `px-sm` / `px-md` / `px-xl` | `px-size-sm` / `px-size-md` / `px-size-xl` |
| `py-xs` / `py-md` | `py-size-xs` / `py-size-md` |
| `mb-md` / `mb-sm` / `mb-xs` | `mb-size-md` / `mb-size-sm` / `mb-size-xs` |
| `mt-md` / `mt-xl` | `mt-size-md` / `mt-size-xl` |
| `ml-lg` / `ml-xs` | `ml-size-lg` / `ml-size-xs` |
| `space-y-sm` / `space-y-md` | `space-y-size-sm` / `space-y-size-md` |
| `py-base` / `p-base` | **unchanged** — bare `base` never collided with anything, left as-is |
| `max-w-xl` (Hero paragraph) | **unchanged, not renamed** — this is exactly the utility the earlier fix was protecting; renaming it would reintroduce the original bug |
| `gap-gutter`, `px-margin-desktop` | **unchanged** — unique names, no collision, already existed |

### Decisions made (asked, not assumed)

1. **Navbar left as-is.** This mockup's nav differs from the existing
   shared `Navbar` (no "Home" link, image logo instead of text, "Sign
   in"/"Get started" instead of "Log in"/"Sign up"). Since `Navbar` is
   shared site-wide, it will **not** be changed based on this one page's
   mockup — the new home sections will render under the current Navbar
   unchanged.
2. **CTA destinations wired to existing routes where sensible.** Every CTA
   in the mockup is `href="#"` with no real target. Decision: point clearly
   mappable ones at real routes — `"For organizations →"` → `/b2b`,
   `"Request Demo"`/consultation-style CTAs → `/contact-sales`. CTAs with no
   obvious target (`"Start Learning Now"`, `"Get started"`, `"Start your
   placement"`) stay as `#` placeholders, same as the mockup.
3. **Dark section colors use the theme token, not the mockup's raw hex.**
   The mockup hardcodes `bg-[#0A0E12]` (Two Brains card, CTA band) and
   `bg-[#F7F7F8]` (personalized-path section background). Decision: use the
   existing `bg-inarax-black` (`#131313`) token instead of `#0A0E12` — a
   small, deliberate color shift in exchange for staying on the design-token
   system rather than adding a one-off arbitrary value.
4. **This log lives at `changes/home-page-build-log.md`** (this file),
   permanent and updated as implementation proceeds, rather than only a
   chat summary.

### Open item

`bg-[#F7F7F8]` (personalized-path section) wasn't explicitly resolved to a
token in the decisions above — it's close to `--color-surface-container-low`
(`#f2f4f4`) but not identical. Will flag again before implementing that
section if it isn't addressed by then.

### Next step

Awaiting go-ahead to start implementation. When it starts, this file will
be appended with an entry per component: what was built, exact class
translations applied, and any new conflict discovered during actual
implementation (as opposed to this static-analysis pass).

---

## 2026-07-31 — Implementation entry

Built all six sections in `app/(main)/_sections/` (`Hero`, `KeyFeatures`,
`PersonalizedPath` + its three sub-components `PathSteps`,
`TwoBrainsArchitecture`, `B2BBand`, `WhyChooseInaraX`, `Faq`, `FinalCta`)
and wired them into `app/(main)/page.tsx`, replacing the placeholder.
`npx tsc --noEmit` and `eslint` both pass clean.

### Decisions applied from the plan

- Navbar left untouched (per decision).
- CTAs wired: `KeyFeatures`' "Request a consultation" → `/contact-sales`,
  `B2BBand`'s "Request Demo" → `/contact-sales`, `FinalCta`'s "For
  organizations →" → `/b2b`, both consultation-CTA `Faq` answers →
  `/contact-sales`. Left as placeholders (no href, plain `<button>`, no
  obvious target): "Start Learning Now", "Get started" (KeyFeatures card),
  "Get started" (FinalCta), "Start your placement", "Watch Demo".
- `bg-[#0A0E12]` → `bg-inarax-black` in `TwoBrainsArchitecture.tsx` and
  `FinalCta.tsx`, per decision.
- `bg-[#F7F7F8]` (personalized-path section, the one open item from the
  planning entry) → `bg-surface-container-low`. Not explicitly confirmed
  with the same certainty as the `inarax-black` decision — flagging again
  here in case it needs revisiting.
- Every bare `xs/sm/md/lg/xl` spacing class from the mockup was translated
  to its `size-`-prefixed equivalent per the table in the planning entry
  above (e.g. `gap-md` → `gap-size-md`). `max-w-xl`, `py-base`/`p-base`,
  `gap-gutter`, `px-margin-desktop` were left unprefixed, as planned.

### Bug found during implementation: collapsed FAQ answers showed their first line

**Symptom:** every FAQ accordion item, while collapsed, showed roughly one
line of its answer text peeking out below the question.

**Root cause:** `Faq.tsx` originally passed
`contentClassName="px-size-md pb-size-md"` to `AccordionItem`. That prop
is applied to the *same* element that carries `max-height`/
`overflow-hidden` for the collapse animation. With `box-sizing: border-box`
(Tailwind's global default), an element with `max-height: 0` still renders
at least the height of its own padding — the content area shrinks to 0,
but the padding itself doesn't. Verified via computed styles in a headless
Chrome + CDP session: `maxHeight: "0px"` but `height: "24px"` (exactly the
`pb-size-md` value) before the fix; `height: "0px"` after.

Because `overflow: hidden` clips at the *box's* edge (24px), not a true 0,
the answer `<div>` — positioned at the top of that box — had its first
~24px (about one line) rendered visible instead of clipped.

`b2b/_sections/Faq.tsx` and `HowItWorks.tsx` never hit this because they
only ever put *horizontal* padding (`px-6`, `px-8`) on `contentClassName`,
keeping vertical padding (`pb-6`, `py-6`) on an inner child `<div>` instead
— the collapsing wrapper itself has no padding, so it correctly renders at
0px when collapsed regardless of what the child contains.

**Fix:** in `app/(main)/_sections/Faq.tsx`, changed `contentClassName` to
`"px-size-md"` (horizontal only) and moved `pb-size-md` onto the inner
answer `<div>`. Re-verified via the same CDP inspection: collapsed height
is now `0px` for every item, and a full-page screenshot confirms no text
leaks through on any of the 10 FAQ rows.

**Takeaway for future `AccordionItem` usage in this repo:** `contentClassName`
must only ever carry horizontal spacing (`px-*`) — any vertical padding
(`pt-*`/`pb-*`/`py-*`) must go on a child element inside `children`,
never on `contentClassName` itself.

### Known content issue (not introduced by this work, not fixed)

One image in `KeyFeatures.tsx` (the middle "Futuristic workspace
illustration" card, from the mockup's `lh3.googleusercontent.com/aida/...`
URL — note the `/aida/` path, not `/aida-public/` like every other image)
returns `403 Forbidden` when Next.js's image optimizer fetches it. This is
a broken/expired asset in the source mockup itself, same category as the
already-documented "Hero image is a prototype URL" known gap in
`README.md`. Left as-is, matching the mockup exactly — flagging here so a
broken image on that card is traceable back to this cause rather than
assumed to be a new bug.

### Verification performed

- `npx tsc --noEmit` — clean.
- `eslint` on all new files — clean.
- Full visual pass via headless Chrome screenshots at 1440px width
  (desktop) — confirmed Hero, footer, and FAQ collapse/expand behavior.
- **Not yet done:** a real mobile-width screenshot pass. The mockup's own
  responsive classes (`grid-cols-1 md:grid-cols-*`, `flex-col md:flex-row`)
  were carried over faithfully, but this hasn't been visually confirmed at
  a narrow viewport yet.
