# Design System — Hyojin Yang Portfolio

All tokens are defined in `styles.css` under `:root`. Per-page brand overrides (King, Telenor, Zalando) only override `--primary-color` and `--primary-hover`; all other tokens inherit from the global system.

---

## 1. Color Tokens

### Base Palette
| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#0D0D0D` | Primary text, icons |
| `--color-ink-mid` | `#1A1A1A` | Headings, heavy UI |
| `--color-ink-strong` | `#333333` | Body text, labels |
| `--color-muted` | `#555555` | Secondary / supporting text |
| `--color-subtle` | `#666666` | Captions, meta labels |
| `--color-placeholder` | `#999999` | Placeholders, disabled states |

### Surface Palette
| Token | Value | Usage |
|---|---|---|
| `--color-surface` | `#FFFFFF` | Card and content background |
| `--color-bg` | `#FAF8F5` | Page background (warm white) |
| `--color-bg-tint` | `#F3F1ED` | Elevated surfaces, callouts |
| `--color-bg-subtle` | `#F5F5F5` | Neutral light background |

### Border
| Token | Value | Usage |
|---|---|---|
| `--color-border` | `rgba(0,0,0,0.08)` | Default borders, card outlines |
| `--color-border-mid` | `#E8E4DE` | Warm dividers, hover states |

### Semantic Aliases
The following aliases are kept for backwards compatibility with existing component CSS. They map to base tokens:

| Alias | Maps to |
|---|---|
| `--primary-color` | `--color-ink` (overridden per page for brand) |
| `--text-dark` | `--color-ink` |
| `--text-gray` | `--color-muted` |
| `--text-light` | `--color-placeholder` |
| `--bg-white` | `--color-surface` |
| `--bg-light` | `--color-bg-subtle` |
| `--cloud-dancer` | `--color-bg` |
| `--border-color` | `--color-border` |

### Per-Page Brand Overrides
Each case study overrides only `--primary-color` and `--primary-hover` in its local `<style>` block:

| Page | `--primary-color` | `--primary-hover` |
|---|---|---|
| king-case.html | `#FF6B35` (King Orange) | `#E65A2E` |
| telenor-case.html | `#0077C8` (Telenor Blue) | `#005A9C` |
| zalando-case.html | `#FF6900` (Zalando Orange) | `#E65A00` |

---

## 2. Spacing Scale

Based on a **4px base unit** with an 8px rhythm. Use these tokens for all `padding`, `margin`, and `gap` values.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `4px` | Micro gaps (icon spacing) |
| `--space-2` | `8px` | Tight spacing |
| `--space-3` | `12px` | Button padding (vertical) |
| `--space-4` | `16px` | Standard inner padding |
| `--space-5` | `20px` | Card padding (compact) |
| `--space-6` | `24px` | Button padding (horizontal), standard gap |
| `--space-7` | `28px` | Card gap |
| `--space-8` | `32px` | Card padding, section inner |
| `--space-10` | `40px` | Section spacing (small) |
| `--space-12` | `48px` | Section spacing (medium) |
| `--space-15` | `60px` | Section spacing (large) |
| `--space-20` | `80px` | Section spacing (xl) |
| `--space-24` | `96px` | Page section padding |
| `--space-30` | `120px` | Hero / top-level sections |

---

## 3. Typography Scale

### Font Families
| Role | Family |
|---|---|
| Body / UI | `"Plus Jakarta Sans", sans-serif` |
| Headings / Display | `"Space Mono", monospace` |

### Font Sizes
| Token | Value | Usage |
|---|---|---|
| `--text-xs` | `11px` | Labels, uppercase tags, step numbers |
| `--text-sm` | `13px` | Captions, meta text, button labels |
| `--text-base` | `15px` | Card body, secondary content |
| `--text-md` | `16px` | Primary body text (default) |
| `--text-lg` | `18px` | Lead paragraphs |
| `--text-xl` | `22px` | Small section headings |
| `--text-2xl` | `28px` | Section headings |
| `--text-3xl` | `clamp(28px, 3.5vw, 40px)` | Page-level headings (responsive) |

### Font Weights
| Token | Value | Usage |
|---|---|---|
| `--weight-regular` | `400` | Body text |
| `--weight-medium` | `500` | Buttons, emphasis |
| `--weight-semibold` | `600` | Sub-headings, labels |
| `--weight-bold` | `700` | Headings, display |

### Line Heights
| Token | Value | Usage |
|---|---|---|
| `--leading-tight` | `1.2` | Headings |
| `--leading-snug` | `1.4` | Subheadings |
| `--leading-normal` | `1.6` | Card body |
| `--leading-relaxed` | `1.75` | Default body |
| `--leading-loose` | `1.8` | Lead / hero text |

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-xs` | `4px` | Micro elements (skip link) |
| `--radius-sm` | `6px` | Tags, small inputs |
| `--radius-md` | `8px` | Standard components |
| `--radius-lg` | `12px` | Cards, panels, info boxes |
| `--radius-xl` | `20px` | Large cards |
| `--radius-2xl` | `32px` | Featured work cards |
| `--radius-3xl` | `44px` | `.work-card-inner` |
| `--radius-pill` | `100px` | All buttons |
| `--radius-full` | `50%` | Avatars, circular elements |

---

## 5. Component Patterns

### Buttons

**Primary (`.cta-button`)** — filled, pill-shaped. Used for "Back Home", case study CTAs.
```html
<a href="..." class="cta-button">Label</a>
```
- Background: `--color-ink` (overridden to brand color on case study pages)
- Border-radius: `--radius-pill`
- Padding: `--space-3` × `--space-6`
- Font size: `--text-sm`, weight: `--weight-medium`

**Outline (`.cta-hero`)** — transparent fill with dark border. Used on homepage hero.
```html
<a href="..." class="cta-hero">View featured work ↓</a>
```
- Border: `1.5px solid --color-ink`
- Border-radius: `--radius-pill`

### Cards

**Featured Work Card (`.work-card` + `.work-card-inner`)** — large rounded card with logo, meta, description.
- Border-radius: `--radius-3xl` (44px)
- Padding: `--space-8` (32px)
- Background: `--color-surface`
- Border: `--color-border`

**Content Card (`.context-card`)** — used inside case studies for CONTEXT / WHAT I DID / IMPACT sections.
- Border-radius: `--radius-lg` (12px)
- Background: `--color-bg-tint`

**Info Panel (`.case-study-card`)** — base card with shadow support.
- Border-radius: `--radius-lg` (12px)
- Padding: `--space-12` (48px)

### Section Headings

**Large heading** — page / section titles.
```html
<h2 style="font-size: var(--text-3xl); font-weight: var(--weight-bold); letter-spacing: -0.04em;">Title</h2>
```

**Uppercase label (`.section-label-sm`)** — small all-caps label above sections.
```html
<h2 class="section-label-sm">Section Name</h2>
```
- Font size: `--text-xs`, weight: `--weight-semibold`
- Letter spacing: `2px`, color: `--color-subtle`

---

## 6. What Changed

| Area | Before | After |
|---|---|---|
| Color tokens | 15+ hardcoded hex values, 4 variables | 12 named tokens + semantic aliases |
| Spacing | Ad-hoc `px` values (6–120px) | 14-step scale from `--space-1` to `--space-30` |
| Typography | 18+ font sizes, no variables | 8-step scale `--text-xs` → `--text-3xl` |
| Font weights | Mixed `600`/`700`/`bold` | 4 named weight tokens |
| Border radius | 8 different values, 4 CSS vars | 9-step system from `--radius-xs` to `--radius-pill` |
| Page overrides | Each page redefined full `:root` | Pages only override `--primary-color` and `--primary-hover` |
| Component classes | `section-title` used hardcoded `40px` | Uses `--text-3xl` |
| Card borders/bg | Used semantic aliases inconsistently | Uses `--color-*` tokens directly |
