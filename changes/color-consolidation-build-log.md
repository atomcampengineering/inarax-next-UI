# Color consolidation build log

Tracks the audit, decisions, and changes behind consolidating color/radius
usage across `/`, `/b2b`, and `/courses` into one standard, so any future
"why does this look different on page X" question can be traced back to
*why* something was built the way it was. Same format as
`changes/home-page-build-log.md` and `changes/courses-page-build-log.md`.

## Status

- [x] Audit complete, decisions made
- [x] `app/globals.css` updated (radius, new success token family)
- [x] `app/(main)/b2b/_sections/Hero.tsx` updated
- [x] `app/(main)/courses/_sections/Hero.tsx` updated
- [x] `app/(main)/b2b/_sections/WhyGenericTrainingFails.tsx` updated
- [x] Verified in browser (desktop)
- [ ] Verified on a real mobile viewport (same outstanding gap as the other two logs)

---

## 2026-08-04 — Planning + implementation entry

### Why this happened

Three page routes were each translated from a separate static mockup file
(`frontend-stitch/code.html`, `frontend-stitch/home/code.html`,
`frontend-stitch/courses/code.html`) across earlier sessions. Each mockup
shipped its own slightly different `tailwind-config` for the same token
names, and `app/globals.css` ended up an inconsistent blend accumulated
across those sessions — producing visibly different colors for the same
conceptual role depending on which page you were looking at. The user
asked for a full audit and a single consolidated standard.

### Audit findings (via an Explore agent sweep of `app/` and `components/`)

1. **`--color-primary` (#003cb9, ~70 usages) vs `--color-primary-container`
   (#0050ef, ~8 usages)** — both conceptually "the brand blue," but two
   different hexes. `frontend-stitch/home/DESIGN.md`'s prose calls out
   "Primary Blue (#0050EF)"; the courses mockup also defines
   `primary: #0050ef`. But `frontend-stitch/home/code.html`'s own
   `tailwind-config` — the actual mockup `primary`/`on-surface`/
   `on-surface-variant`/`outline-variant` were ported from in an earlier
   session — defines `primary: #003cb9`, matching the current theme
   exactly.
2. The courses mockup also wanted different values than the current theme
   for `on-surface` (#131313 vs current #191c1c — note #131313 already
   exists in the theme as `--color-inarax-black`), `on-surface-variant`
   (#5f5e5e vs current #434656), `outline-variant` (#c5c7c7 vs current
   #c3c5d8), and the bare/DEFAULT `--radius` (0.5rem vs current 0.25rem).
3. b2b had 5 hard-coded arbitrary hex colors with no equivalent token
   anywhere in the 48-token palette: a cream Hero background
   (`bg-[#FFFBF0]`, `app/(main)/b2b/_sections/Hero.tsx:12`) and a 4-color
   green "success" callout card in `WhyGenericTrainingFails.tsx:35-39`
   (`bg-[#ECF7ED]`, `border-[#C6E7C8]`, `text-[#2E7D32]`,
   `text-[#1B5E20]`) — the only green anywhere in the site. No cream or
   green family existed in the token set at all.
4. 27 raw `bg-white`/`text-white`/`border-white` usages and 26 of 48
   defined `--color-*` tokens completely unused — noted but **not** part
   of this pass (see Out of scope below).

### Decisions

- **`primary` / `primary-container` / `on-surface` / `on-surface-variant`
  / `outline-variant`: kept unchanged.** The user's call: "if there's a
  conflict, use the home page as reference." Since the current
  `globals.css` values for these five tokens already came directly from
  `frontend-stitch/home/code.html`'s own `tailwind-config` in an earlier
  session, this confirms and makes *permanent* the status quo — it
  **supersedes** `changes/courses-page-build-log.md`'s earlier
  *provisional* "keep current, per this page's decision" call with a
  deliberate, cross-page standard: the home mockup is now the documented
  source of truth for these tokens, not just a default that happened to
  survive.
- **Bare `--radius` (DEFAULT): changed from `0.25rem` to `0.5rem`**,
  adopting the courses mockup's value. Confirmed via grep: exactly 3
  usages exist site-wide, all on `/courses` (two CTA buttons in
  `Hero.tsx`, one badge in `ProgramCards.tsx`) — a fully contained,
  zero-surprise blast radius.
- **b2b's Hero background: `bg-[#FFFBF0]` → `bg-white`**, and **courses'
  Hero background: explicit `bg-white` added** (it previously had no
  explicit background, inheriting the body's default `bg-surface`). Per
  the user's explicit instruction, both now match the home page's own
  Hero background exactly, rather than inventing a new one-off cream
  token. All three page Heroes now share the identical `bg-white`.
- **b2b's green success card: formalized as real theme tokens**, mirroring
  the theme's existing `error`/`on-error`/`error-container`/
  `on-error-container` 4-role pattern:
  ```
  --color-success: #2e7d32;
  --color-on-success: #ffffff;
  --color-success-container: #ecf7ed;
  --color-on-success-container: #1b5e20;
  ```
  The card's border (`#C6E7C8`, which doesn't map cleanly onto that
  4-role pattern — no token family in this palette has a dedicated border
  role) uses Tailwind's opacity modifier against the new `--color-success`
  token instead of a 5th one-off token: `border-success/30`. This isn't
  pixel-identical to the original `#C6E7C8` but is visually very close
  (confirmed via screenshot) and keeps the family the same width as
  `error`'s.

### Out of scope (deliberately deferred, not overlooked)

- **27 raw `bg-white`/`text-white`/`border-white` usages** across
  `_sections/FinalCta.tsx`, `PathSteps.tsx`, `KeyFeatures.tsx`, `Hero.tsx`,
  `B2BBand.tsx`, `WhyChooseInaraX.tsx`, `TwoBrainsArchitecture.tsx`, and
  b2b's `HowItWorks.tsx`/`FinalCta.tsx`/`ThreeMovingParts.tsx`/`Faq.tsx`.
  Not touched — white renders identically everywhere regardless of
  whether it's spelled `bg-white` or a `#ffffff`-valued token, so this
  isn't a *visual inconsistency* the way items 1-3 were, just an
  unmanaged parallel color system. Revisit separately if full token
  governance is wanted later.
- **26 of 48 defined `--color-*` tokens are unused** (`secondary*`,
  `error`/`error-container` family, most `on-tertiary*`/`on-secondary*`,
  `surface-variant`/`surface-dim`/`surface-bright`/`surface-tint`,
  `inverse-primary`/`inverse-on-surface`, etc.) — inert clutter, zero
  visual effect, not touched. Listed here so a future reader doesn't
  assume they were missed.
- **`--color-inarax-black` was *not* merged into `on-surface`**, even
  though the "keep current" decision means they stay numerically distinct
  anyway (`#131313` vs `#191c1c`) in this pass. Worth noting for the
  future: if `on-surface` is ever revisited toward `#131313` (the courses
  mockup's value), `inarax-black` should still be kept as a separate
  token rather than retired — it's used for a different semantic role
  (dark CTA-card backgrounds in `FinalCta.tsx`/`TwoBrainsArchitecture.tsx`,
  and once as headline text color in home's `Hero.tsx`) than `on-surface`
  (default body/heading text color, never used as a background).
- **`.glass-card`/`.liquid-glass`/`.soft-glow-shadow`/`.primary-cta-glow`
  in `app/globals.css`'s `@layer components`** hard-code raw `rgba(...)`
  values that numerically match `--color-primary-container` (`0,80,239`)
  without being derived from it via `var()`. Not a current bug (values
  still match), but a latent one if `primary-container` is ever changed
  again. Not addressed in this pass.

### Known side effect (not a bug, flagging for awareness)

`app/(main)/_sections/KeyFeatures.tsx` uses `text-primary ...
hover:text-primary-container` on two links — since `primary` and
`primary-container` were **not** unified in this pass (both kept at their
current, different values), this hover effect is unaffected and continues
to work as before. Flagging only because it was identified as a risk
during planning in case a future pass *does* unify these two tokens.

### Verification performed

- `npx tsc --noEmit` — clean.
- `eslint` on all changed files — clean.
- Headless Chrome + CDP screenshots (dev server had moved from port 3002
  to port 3000 since the last session — Metabase, an unrelated local
  service, had been occupying 3000 previously):
  - `/b2b` Hero — confirmed `bg-white`, headline/badge/CTA/image all
    render correctly.
  - `/b2b` `WhyGenericTrainingFails` callout card — confirmed the new
    `success`/`on-success-container` tokens and `border-success/30` render
    a pale mint card with a green icon and dark green text, visually close
    to the original hard-coded greens.
  - `/courses` Hero — confirmed `bg-white` and the new `0.5rem` radius on
    both CTA buttons (subtle, visible corner softening vs. the old
    `0.25rem`).
- **Not yet done:** a real mobile-width screenshot pass, and a full
  re-check of `/` and Navbar/Footer to confirm nothing else shifted
  (expected: nothing should, since no other token values changed).
