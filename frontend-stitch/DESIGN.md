---
name: InaraX
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e6'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ededfa'
  surface-container-high: '#e7e7f4'
  surface-container-highest: '#e1e1ee'
  on-surface: '#191b24'
  on-surface-variant: '#434656'
  inverse-surface: '#2e303a'
  inverse-on-surface: '#f0f0fd'
  outline: '#737687'
  outline-variant: '#c3c5d8'
  surface-tint: '#004ee9'
  primary: '#003cb9'
  on-primary: '#ffffff'
  primary-container: '#0050ef'
  on-primary-container: '#d5dbff'
  inverse-primary: '#b6c4ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#8b2200'
  on-tertiary: '#ffffff'
  tertiary-container: '#b53001'
  on-tertiary-container: '#ffd3c7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001550'
  on-primary-fixed-variant: '#003ab3'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872100'
  background: '#faf8ff'
  on-background: '#191b24'
  surface-variant: '#e1e1ee'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered for a professional, high-tech environment that prioritizes user reassurance through a "liquid glass" aesthetic. The brand personality is precise and innovative, balancing technical sophistication with a calm, trustworthy presence.

The visual style blends **Corporate Modern** structures with **Glassmorphism** accents. It utilizes translucent layers, subtle background blurs, and high-quality typography to create a sense of depth and clarity. The emotional response should be one of "controlled transparency"—where the interface feels advanced yet entirely legible and dependable.

## Colors
The palette is anchored by a high-energy primary blue and a stark neutral foundation.

- **Primary (#0050EF):** Used for critical actions, active states, and high-tech accents.
- **Surface (#F8FAF9):** An ultra-clean, slightly cool off-white used for the base background to reduce eye strain and enhance the "glass" effect of foreground elements.
- **Text (#131313):** A deep, near-black neutral for maximum legibility and professional contrast.

The "Liquid Glass" effect is achieved by applying the primary color at low opacities over the surface, or using white semi-transparent fills with `backdrop-filter: blur(20px)`.

## Typography
The system uses a dual-font strategy to balance high-tech precision with human readability.

- **Headlines:** Inter (substituting for Neo Tech) provides a geometric, systematic feel. It should be used for all headers and display text with tight letter-spacing to emphasize the technical aesthetic.
- **Body:** Open Sans is used for all long-form text and interface labels. Its humanist character ensures that the professional environment remains approachable and legible at all sizes.

## Layout & Spacing
This design system utilizes a **Fluid Grid** model based on an 8px rhythmic scale. 

- **Grid:** A 12-column layout on desktop, collapsing to 4 columns on mobile.
- **Safe Areas:** Large internal paddings within cards and containers (24px - 32px) help maintain the "liquid" feel, preventing content from feeling cramped.
- **Breakpoints:** Mobile (<600px), Tablet (600px - 1024px), Desktop (>1024px).
- **Alignment:** Consistent left-alignment for data and text, with center-aligned display sections for marketing or splash pages.

## Elevation & Depth
Depth is expressed through **Glassmorphism** and tonal layering rather than heavy shadows.

- **Base Layer:** The surface color (#F8FAF9).
- **Floating Layer:** White containers with 70% opacity and a 20px - 40px backdrop blur.
- **Highlights:** 1px solid borders using #FFFFFF at 20% opacity on the top and left edges of cards to simulate a light source reflecting off a glass edge.
- **Shadows:** Only used on active floating elements (modals, dropdowns). Shadows are long, soft, and tinted with the primary blue (e.g., 10% opacity blue) to maintain the high-tech glow.

## Shapes
The shape language is structured and professional, utilizing "Soft" roundedness to balance the rigidity of a technical interface with a modern touch.

- **Buttons & Inputs:** Use an 8px radius for a compact, efficient feel.
- **Cards & Modals:** Use a 12px radius to provide a distinct visual container that feels substantial.
- **Icons:** Should follow a 2px stroke weight with slight rounding on terminals to match the font characteristics.

## Components
Consistent application of the glass aesthetic across components:

- **Buttons:** Primary buttons are solid #0050EF with white text. Secondary buttons use a "Glass" style: white 20% background, 20px blur, and a #0050EF border.
- **Cards:** Defined by the 12px radius. They feature a 1px border (#131313 at 5% opacity) to provide definition against the light surface.
- **Input Fields:** 8px radius, white background, with a 1px stroke. On focus, the stroke changes to #0050EF with a soft 4px glow.
- **Chips:** Highly rounded (pill-shaped) with a light blue tinted background (#0050EF at 8% opacity) and Primary blue text.
- **Lists:** Clean dividers using 1px lines of #131313 at 5% opacity. High hover-state contrast using the Surface color.
- **Status Indicators:** Use the primary blue for "Processing/Active" states, maintaining the high-tech reassurance theme.