# DESIGN.md — Zanzibar Booking Website
> Agent-friendly design system for Google Stitch.
> Import this file into your Stitch canvas to generate consistent, high-fidelity UI across all screens.

---

## 🌍 Project Intent

**Business Objective:** A premium Zanzibar travel booking website that converts dream-seekers into paying guests. Target audience: affluent European and American travelers, honeymooners, and adventure explorers aged 25–55.

**Emotional Goal:** The user should feel *transported* the moment the page loads — warm sand between their toes, the smell of spices, turquoise water. Every screen should whisper "you need to be here."

**Design Persona:** Luxury boutique travel agency. Not sterile. Not corporate. Warm, tactile, editorial — like a beautifully curated travel magazine come to life.

---

## 🎨 Color Palette

### Primary Colors
| Name | Hex | Usage |
|---|---|---|
| Zanzibar Sand | `#F2E4C8` | Backgrounds, cards, warm fills |
| Ocean Deep | `#1A4A5A` | Headers, primary text, CTAs |
| Coral Sunset | `#E8704A` | Accent, hover states, highlights |
| Spice Gold | `#C8952A` | Badges, stars, premium labels |

### Secondary Colors
| Name | Hex | Usage |
|---|---|---|
| Seafoam | `#A8D5C2` | Secondary accents, success states |
| Ivory White | `#FDFAF4` | Page background, card backgrounds |
| Midnight Blue | `#0D2B38` | Deep backgrounds, footer, overlays |
| Dhow Timber | `#8B5E3C` | Earthy accents, dividers |

### Gradients
- **Hero Overlay:** `linear-gradient(180deg, rgba(13,43,56,0.0) 0%, rgba(13,43,56,0.75) 100%)`
- **CTA Button:** `linear-gradient(135deg, #E8704A 0%, #C8952A 100%)`
- **Card Hover:** `linear-gradient(180deg, transparent 50%, rgba(26,74,90,0.85) 100%)`

---

## 🔤 Typography

### Font Stack
- **Display / Hero Headlines:** `Cormorant Garamond` — weight 300, 400, 600. Elegant, editorial, timeless.
- **Body / UI Text:** `Inter` — weight 400, 500, 600. Clean and readable at all sizes.
- **Accent / Labels:** `Cormorant Garamond Italic` — for pull quotes, location names, taglines.

### Type Scale
| Role | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Hero Title | Cormorant Garamond | 72–96px | 300 | 1.05 |
| Section Headline | Cormorant Garamond | 48px | 400 | 1.1 |
| Card Title | Cormorant Garamond | 28px | 600 | 1.2 |
| Body Large | Inter | 18px | 400 | 1.7 |
| Body Regular | Inter | 16px | 400 | 1.6 |
| Label / Badge | Inter | 12px | 600 | 1.4 |
| Navigation | Inter | 14px | 500 | 1.4 |

---

## 📐 Layout & Spacing

### Grid
- **Desktop:** 12-column grid, max-width `1440px`, gutter `32px`, margin `80px`
- **Tablet:** 8-column grid, gutter `24px`, margin `40px`
- **Mobile:** 4-column grid, gutter `16px`, margin `20px`

### Spacing Scale (8px base)
`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px · 128px`

### Border Radius
- Cards: `16px`
- Buttons: `8px` (pill for CTAs: `100px`)
- Inputs: `10px`
- Image frames: `20px`
- Tags/Badges: `100px`

---

## 🖼️ Imagery & Visual Style

### Photo Treatment
- Use full-bleed, **cinematic photography** — never stock-looking images
- Preferred shots: aerial drone views of the archipelago, underwater coral scenes, candid sunset moments, close-ups of local spices and dhow boats
- Apply a **warm grade** (+10 warmth, +5 saturation) for brand consistency
- Hero images should have deep foreground shadows to ensure text contrast

### Illustration & Icons
- Use **thin-line icons** (1.5px stroke) in `Ocean Deep` or `Coral Sunset`
- No filled icon packs — keep them minimal and editorial
- Optional: hand-drawn style map illustrations of Zanzibar island for location sections

### Photography Composition Rules
- Always lead with **human emotion** — joy, wonder, relaxation — not just scenery
- The horizon line should appear in the upper 1/3 for water shots
- Include at least one architectural Zanzibar detail per screen (carved wooden doors, Swahili latticework)

---

## 🧩 Component Library

### Navigation Bar
- **Style:** Transparent on hero, transitions to `Ivory White` with shadow on scroll
- **Logo:** Left-aligned wordmark in `Ocean Deep` (or white over hero image)
- **Links:** `Inter 14px 500` with underline animation on hover
- **CTA Button:** "Book Now" — pill shaped, `Coral Sunset` gradient
- **Mobile:** Hamburger with full-screen overlay menu

### Hero Section
- **Layout:** Full viewport height (100vh), background is a looping short video or high-res image
- **Overlay:** Dark-to-transparent gradient (bottom-up)
- **Content:** Centered — eyebrow label (e.g. "Discover Zanzibar") + headline + subtext + search bar
- **Search Bar:** Floating glass-morphism card with: Destination · Check-in · Check-out · Guests · "Search" button
- **Scroll Indicator:** Subtle animated arrow at bottom

### Search Bar / Booking Widget
- Background: `rgba(255,255,255,0.15)` with `backdrop-filter: blur(20px)`
- Border: `1px solid rgba(255,255,255,0.3)`
- Inputs: white text on transparent background
- Dividers between fields: `rgba(255,255,255,0.2)`
- CTA: `Coral Sunset` gradient button, full height of widget

### Property / Villa Cards
- **Aspect ratio:** 4:3 image top, details below
- **Hover:** Zoom image subtly (scale 1.05), show full overlay with quick-view CTA
- **Contents:** Photo · Location tag (Seafoam badge) · Property name (Cormorant 28px) · Star rating (Spice Gold) · Nightly rate · "View Details" link
- **Shadow:** `0 8px 40px rgba(13,43,56,0.12)`

### Experience / Activity Cards
- **Style:** Tall portrait cards (3:4 ratio) — more editorial
- **Overlay:** Bottom gradient with title and duration/price
- **Tags:** Activity type badge (e.g. "Snorkeling", "Cultural Tour", "Sunset Dhow")

### Destination Feature Block
- Full-width alternating layout: Image left, text right (then flip)
- Large section number in faint `Zanzibar Sand` behind headline
- Short description (2–3 lines max) + bullet highlights + CTA link

### Testimonial / Review Section
- Background: `Midnight Blue`
- Large opening quote mark in `Coral Sunset`
- Quote text in `Cormorant Garamond Italic 28px`, `Ivory White`
- Guest name + nationality + trip type below
- Carousel with 5 reviews, dot indicators

### Pricing / Package Cards
- Three-tier layout: Budget · Boutique · Luxury
- Middle card ("Boutique") elevated with shadow and `Coral Sunset` border
- Features list with checkmarks in `Seafoam`
- Sticky CTA button at bottom of card

### Footer
- Background: `Midnight Blue`
- Three-column layout: Brand story · Quick links · Contact + social
- Newsletter input with `Coral Sunset` submit button
- Fine text: `Inter 12px`, `rgba(255,255,255,0.5)`

---

## 🗺️ Page Structure & Screens

### 1. Homepage
1. Hero (full viewport, video/image background, booking search widget)
2. Trust bar (logos: TripAdvisor, Condé Nast, Forbes Travel Guide)
3. Featured Destinations (3-col card grid: Stone Town · Nungwi · Paje · Mnemba)
4. "Why Zanzibar" editorial block (alternating image-text)
5. Popular Experiences (horizontal scroll on mobile, 4-col on desktop)
6. Social Proof (testimonials carousel on Midnight Blue background)
7. Featured Villas (large cards, 2-column)
8. Zanzibar Guide teaser (editorial CTA)
9. Newsletter signup
10. Footer

### 2. Property Listing Page
- Filter sidebar (sticky on desktop): Price · Type · Location · Amenities · Rating
- Masonry or grid layout of property cards (12 per page)
- Map toggle view (split screen: list left, map right)
- Sort bar: Recommended · Price Low-High · Top Rated

### 3. Property Detail Page
- Full-width photo gallery (hero + grid of 4 thumbnails, "View all" modal)
- Sticky booking sidebar: dates · guests · price · "Reserve" CTA
- Scrollable content: Overview · Amenities · Location map · Reviews · Similar properties
- Host/manager card with avatar and message button

### 4. Booking Flow (3 steps)
- **Step 1:** Trip Details — dates, guests, room type
- **Step 2:** Guest Details — contact info, special requests
- **Step 3:** Payment Summary — price breakdown, policies, confirm
- Progress stepper at top
- Summary sidebar (sticky) throughout

### 5. Experiences Page
- Editorial hero with "Things to Do" headline
- Category filter tabs: Water · Culture · Food · Wellness · Adventure
- Card grid with experience duration, price, difficulty badge

### 6. About / Story Page
- Full-bleed team or island photography
- Founder story in Cormorant editorial style
- Values section with icon grid
- Local partnerships + sustainability commitment

---

## ✨ Micro-interactions & Motion

- **Page load:** Staggered fade-up for hero elements (0ms · 150ms · 300ms delays)
- **Card hover:** `transform: translateY(-6px)` + shadow deepens over `200ms ease`
- **Button hover:** Gradient shift + slight scale `1.02` over `150ms`
- **Navigation scroll:** Background fade in over `300ms ease`
- **Image lazy load:** Blur-up effect (blurred placeholder → sharp)
- **Booking widget:** Inputs slide open with `height` animation
- **Map pins:** Pulse animation on hover

---

## 📱 Mobile-First Notes

- Search widget collapses to a pill button that expands into a full-screen modal
- Navigation becomes hamburger → full-screen overlay with large touch targets (min 48px)
- Cards stack vertically; horizontal scroll for experience categories
- Booking sidebar moves to bottom sheet on mobile
- Hero headline reduces to 48px on mobile, 36px on small screens
- Reduce animations on `prefers-reduced-motion`

---

## 🌐 Tone & Copywriting Voice

- **Tone:** Warm, knowledgeable, aspirational — like a well-traveled friend, not a sales page
- **Headlines:** Poetic, sensory, evocative. ("Where spice meets sea." / "Your private slice of paradise.")
- **Body copy:** Specific and informative. Name actual beaches, neighborhoods, experiences.
- **CTAs:** Action-first but not pushy. ("Explore Nungwi" not "Click Here")
- **Error states:** Friendly, helpful. ("Let's find another date that works.")

---

## 🔑 Key Differentiators to Express Visually

1. **Local expertise** — not a generic OTA, deeply embedded in Zanzibar culture
2. **Curated quality** — every listing hand-picked, not algorithmic
3. **Sustainability** — eco-conscious travel badge on qualifying properties
4. **End-to-end service** — flights + accommodation + experiences, all in one

---

## 📋 Stitch Agent Instructions

When generating screens from this DESIGN.md:
- Always use the full color palette — avoid defaulting to generic blues or grays
- Prioritize **large, cinematic imagery** over text-heavy layouts
- The booking widget should always be prominent and accessible
- Every screen should feel like it belongs in a luxury travel magazine
- Generate both **desktop and mobile** variants for all primary screens
- Use `Cormorant Garamond` for all headlines — this is non-negotiable for brand identity
- Incorporate subtle Swahili/Zanzibar cultural motifs (geometric patterns, dhow silhouettes) as decorative elements where appropriate
