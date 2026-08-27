---
name: InaraX
colors:
  surface: '#f8faf9'
  surface-dim: '#d8dada'
  surface-bright: '#f8faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f4'
  surface-container: '#eceeee'
  surface-container-high: '#e7e8e8'
  surface-container-highest: '#e1e3e3'
  on-surface: '#191c1c'
  on-surface-variant: '#434656'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f1'
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
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cea700'
  on-tertiary-container: '#4e3e00'
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
  tertiary-fixed: '#ffe084'
  tertiary-fixed-dim: '#efc200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f8faf9'
  on-background: '#191c1c'
  surface-variant: '#e1e3e3'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system for InaraX is built on a foundation of **Corporate Modernism** with a distinct technical edge. It is designed to feel authoritative yet accessible, projecting an image of high-performance reliability. The visual language avoids decorative gimmicks in favor of precision, using intentional whitespace and structural grid elements to guide the user.

The target audience consists of professionals and decision-makers who value efficiency and technological sophistication. The UI should evoke a sense of "quiet confidence"—reassuring the user through stability while inspiring them through clean, forward-thinking aesthetics. High-quality execution of simple forms is preferred over complex visual effects.

## Colors
The palette is dominated by a core triad of Deep Blue, Solid Black, and Pure White, establishing a professional and high-contrast environment. 

- **Primary Blue (#0050EF):** Used for primary actions, key brand moments, and structural highlights.
- **Accent Yellow (#FFCF00):** Reserved for high-priority alerts, specialized status indicators, or subtle highlights that require immediate attention without breaking the professional tone.
- **Accent Green (#00DE10):** Utilized strictly for positive status indicators, success states, and growth metrics.
- **The Grey (#C5C7C7):** Serves as the primary color for borders, disabled states, and secondary text to maintain a soft hierarchy against the stark black and white.

## Typography
The typographic system utilizes a "Technical-Humanist" pairing. **Space Grotesk** (serving as the closest match for the 'Neo Tech' technical feel) is used for all headlines to provide a confident, geometric, and engineered appearance. **Open Sans** is utilized for all body copy and UI labels to ensure maximum legibility and a friendly, approachable reading experience.

Maintain generous line heights for body text to improve scanning. Display headings should use tighter tracking to emphasize their bold, structural nature.

## Layout & Spacing
This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A signature characteristic of this system is the use of **faint vertical lines** (6-8% opacity) visible within dark-themed sections or full-bleed containers. These lines provide a technical "blueprint" feel and reinforce the alignment of content.

Spacing follows an 8px base unit. Vertical rhythm should be consistent, using larger increments (48px+) between major sections to emphasize clarity. Motion plays a key role in layout transitions: elements should utilize a smooth fade-up on scroll (opacity 0 to 1, moving from `translateY: 24px` to `0` over a `0.6s` duration).

## Elevation & Depth
Elevation is handled with extreme subtlety to maintain a clean, professional profile. Rather than heavy stacking, the system uses **Soft Ambient Shadows** (`0 4px 24px rgba(0,0,0,0.06)`) to lift cards and modals off the surface.

For high-priority interactions, specifically the Primary CTA, a **Layered Soft-Glow Shadow** is applied. This involves using a tinted shadow derived from the Primary Blue color at a low opacity, creating a subtle luminescent effect that makes the button appear "powered on." Dark sections should remain flat, using the subtle grid lines mentioned in the Spacing section to define depth rather than shadows.

## Shapes
The shape language is precise and controlled. 
- **Buttons:** Use a fixed **8px** border radius, creating a sturdy and dependable look.
- **Cards and Containers:** Use a slightly softer **12px** radius to frame content comfortably.
- **Input Fields:** Match the button radius of **8px** to maintain consistency across interactive elements.

Iconography should follow a "linear-technical" style, using 2px stroke weights with slightly rounded terminals to match the font characteristics of Space Grotesk.

## Components
### Buttons
Primary CTAs are Solid Blue (#0050EF) with white text, featuring the layered soft-glow shadow on hover. Secondary buttons use a Grey (#C5C7C7) outline with no fill.

### Input Fields
Fields should have a 1px border using Grey (#C5C7C7). On focus, the border transitions to Primary Blue with a subtle 2px outer glow. Labels sit above the field in `label-md` styling.

### Cards
Cards are White (#FFFFFF) with a 1px Grey (#C5C7C7) border or the soft ambient shadow. There is no background tint for cards in the light mode; depth is created purely through the shadow or border.

### Status Indicators
Chips and badges for status use high-saturation fills (Success Green or Accent Yellow) with dark text to ensure high contrast and immediate recognizability.

### Technical Dividers
Horizontal rules should be light and thin (1px), often accompanied by a small "plus" icon or geometric mark at the intersection of grid lines to reinforce the technical narrative.