import type { Config } from "tailwindcss";

/**
 * Tailwind v3 config — the JS-based equivalent of the `@theme` block that
 * used to live in `app/globals.css` under Tailwind v4's CSS-first theming.
 * Token values are carried over 1:1 from that block; see the comments here
 * and in `app/globals.css` for the reasoning behind each group.
 */
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Material Design 3–style semantic roles. Each brand family
        // (primary/secondary/tertiary/error/success) repeats the same
        // 4-role shape: the base color, "on-*" (text/icons drawn on top of
        // it), "*-container" (a tinted surface for that role), and
        // "on-*-container" (text/icons on that container). The
        // "*-fixed"/"*-fixed-dim"/"on-*-fixed"/"on-*-fixed-variant" tokens
        // are MD3 fixed-tone variants — colors that stay put across states
        // instead of remapping. Grouped below by role family, in that
        // intended reading order, rather than alphabetically.

        // --- Primary (brand blue) ---
        primary: "#003cb9",
        "on-primary": "#ffffff",
        "primary-container": "#0050ef",
        "on-primary-container": "#d5dbff",
        "primary-fixed": "#dce1ff",
        "primary-fixed-dim": "#b6c4ff",
        "on-primary-fixed": "#001550",
        "on-primary-fixed-variant": "#003ab3",
        // MD3 elevation tint, derived from primary — applied as a faint
        // overlay on elevated surfaces so they read as "closer" to the viewer.
        "surface-tint": "#004ee9",

        // --- Secondary (neutral gray accent) ---
        secondary: "#5f5e5e",
        "on-secondary": "#ffffff",
        "secondary-container": "#e5e2e1",
        "on-secondary-container": "#656464",
        "secondary-fixed": "#e5e2e1",
        "secondary-fixed-dim": "#c8c6c5",
        "on-secondary-fixed": "#1c1b1b",
        "on-secondary-fixed-variant": "#474646",

        // --- Tertiary (amber/gold accent) ---
        tertiary: "#735c00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#cea700",
        "on-tertiary-container": "#4e3e00",
        "tertiary-fixed": "#ffe084",
        "tertiary-fixed-dim": "#efc200",
        "on-tertiary-fixed": "#231b00",
        "on-tertiary-fixed-variant": "#574500",

        // --- Error ---
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // --- Success — custom addition, not part of the original MD3
        // export. Mirrors the 4-role shape of the error family exactly.
        // Currently used only by the b2b "why personalization matters"
        // callout card. ---
        success: "#2e7d32",
        "on-success": "#ffffff",
        "success-container": "#ecf7ed",
        "on-success-container": "#1b5e20",

        // --- Surface & background (page/card backgrounds and their text) ---
        surface: "#f8faf9",
        "on-surface": "#191c1c",
        "surface-variant": "#e1e3e3",
        "on-surface-variant": "#434656",
        "surface-dim": "#d8dada",
        "surface-bright": "#f8faf9",
        // Ascending elevation scale: lowest = furthest back (e.g. cards on
        // the page), highest = closest to the viewer (e.g. modals, dropdowns).
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f4",
        "surface-container": "#eceeee",
        "surface-container-high": "#e7e8e8",
        "surface-container-highest": "#e1e3e3",
        background: "#f8faf9",
        "on-background": "#191c1c",

        // --- Outline (borders, dividers) ---
        outline: "#737687",
        "outline-variant": "#c3c5d8",

        // --- Inverse (dark-on-light flips, used for high-contrast bands
        // like FinalCta sections) ---
        "inverse-surface": "#2e3131",
        "inverse-on-surface": "#eff1f1",
        "inverse-primary": "#b6c4ff",

        // --- Brand-specific one-offs (outside the MD3 role system) ---
        "inarax-black": "#131313",
      },

      borderRadius: {
        // DEFAULT overrides Tailwind's stock 0.25rem `rounded` (used as-is
        // on the courses page's Hero CTA buttons and a ProgramCards badge) —
        // must stay explicit or those regress to the smaller stock radius.
        DEFAULT: "0.5rem",
        // lg/xl/full below already equal Tailwind v3's own defaults; kept
        // explicit to mirror the source `@theme` block 1:1 rather than
        // relying on values happening to line up.
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        // Layout constants (page-shell measurements, unprefixed).
        "container-max": "1280px",
        "margin-mobile": "24px",
        "margin-desktop": "64px",
        gutter: "24px",
        base: "8px",

        // General-purpose size scale.
        // Gotcha (carried over from the v4 `@theme` block): prefixed
        // "size-" (not bare xs/sm/md/lg/xl) because Tailwind's `width`,
        // `height`, `maxWidth`, and `maxHeight` theme functions all spread
        // `theme('spacing')` by default — in both v3 and v4. An unprefixed
        // `size-xl` here would silently collide with `max-w-xl`'s stock
        // 36rem value the same way it did under v4; the "size-" prefix
        // sidesteps that collision regardless of Tailwind version.
        "size-xs": "4px",
        "size-sm": "12px",
        "size-md": "24px",
        "size-lg": "48px",
        "size-xl": "80px",
      },

      fontFamily: {
        // Space Grotesk for display/headline roles, Open Sans for
        // body/label roles. Inter is legacy — kept only for the two roles
        // (headline-sm, label-caps) that still reference it.
        "display-lg-mobile": ["var(--font-space-grotesk)", "sans-serif"],
        "display-lg": ["var(--font-space-grotesk)", "sans-serif"],
        "body-md": ["var(--font-open-sans)", "sans-serif"],
        "body-lg": ["var(--font-open-sans)", "sans-serif"],
        "headline-md": ["var(--font-space-grotesk)", "sans-serif"],
        "headline-lg": ["var(--font-space-grotesk)", "sans-serif"],
        "label-md": ["var(--font-open-sans)", "sans-serif"],
        "label-caps": ["var(--font-inter)", "sans-serif"],
        "headline-sm": ["var(--font-inter)", "sans-serif"],
        "body-sm": ["var(--font-open-sans)", "sans-serif"],
      },

      fontSize: {
        // Each role bundles font-size with its matching line-height,
        // letter-spacing, and font-weight, so a single `text-*` class
        // (e.g. `text-headline-md`) applies the complete type style —
        // same compound-utility behavior as the v4 `--text-*` tokens,
        // expressed here via Tailwind v3's fontSize tuple format.
        "display-lg-mobile": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "display-lg": [
          "64px",
          { lineHeight: "70.4px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28.8px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "31.2px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "38.4px", fontWeight: "700" }],
        "label-md": [
          "14px",
          { lineHeight: "16.8px", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        "label-caps": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "700" },
        ],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;
