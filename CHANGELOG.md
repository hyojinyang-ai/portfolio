# Portfolio Update Changelog

## Overview
This document summarizes all the design and content updates made to the Hyojin Yang portfolio website.

---

## Changes Summary

### 1. About Page Redesign (`about.html`)

#### Added Sections

**HOW I WORK**
- Added new section between hero and the rest of content
- Two-paragraph description of work approach:
  - Focus on owning ambiguous problem spaces
  - End-to-end work from discovery to MVP
  - Partnership with PMs and engineers
  - Balance of user needs, business goals, and technical constraints

**HOW I CAN HELP**
- Added below "How I Work" section
- Six capability cards with descriptions:
  1. Product Discovery & Direction
  2. End-to-End Product Design
  3. Cross-Functional Execution
  4. UX Vision & Strategy
  5. Research at Scale
  6. UX Maturity & Enablement

**CURRENT STACK**
- Moved from landing page to About page
- Placed below "How I Can Help" section
- Converted from icon grid to clean table format
- Tools listed:
  - ChatGPT | Figma
  - Notion | V0.dev
  - Claude Code | Lovable
  - Cursor | (empty)

#### Removed Sections
- ✅ **"By The Numbers"** section (bullet points with statistics)
- ✅ **"In Keywords"** section (5 keyword cards: Product-Minded, Discovery-Led, Systems-Oriented, Cross-Functional, Outcome-Focused)

#### Design Updates
- Added `background: var(--bg-light)` to "How I Work & How I Can Help" section
- Consistent card styling for "How I Can Help" items
- Clean table layout with borders between rows for "Current Stack"
- Removed emojis from Current Stack for professional look

---

### 2. Landing Page Updates (`index.html`)

#### Work Experience Section
- Updated formatting: Added line breaks after company names
- Company name now on separate line from description
- Years appear on their own line below description

**Updated Dates:**
- King: 2022 — CURRENT (previously 2023 — CURRENT)
- Zalando: 2021 — 2022 (previously 2021 — 2023)
- Telenor: 2019 — 2021 (unchanged)
- H&M: 2015 — 2019 (previously 2017 — 2019)

#### Removed Sections
- ✅ **Current Stack** section (moved to About page)

---

## File Structure

### Modified Files
1. `about.html` - Major content and layout changes
2. `index.html` - Work experience date updates, Current Stack removal
3. All other HTML files unchanged (case study pages remain as-is)

---

## Design System Notes

### Typography
- Font: Roboto Mono (monospace)
- All headings use consistent uppercase styling
- Body text: 16px, line-height 1.8

### Colors
- Background (light): `var(--bg-light)`
- Text primary: `var(--text-dark)` / `#0A0A0A`
- Text secondary: `var(--text-gray)` / `#666`
- Borders: `#E5E5E5`
- Links: Underlined, color `#0A0A0A`

### Layout
- Max content width: 900px
- Section padding: 60px vertical
- Card padding: 20px
- Border radius: 8px (cards), 16px (images)

### Components
- **Cards**: White background, 8px border-radius, subtle shadow
- **Tables**: Full width, collapsed borders, 16px vertical padding per row
- **Section Headers**: 14px, bold, uppercase, 2px letter-spacing

---

## Content Highlights

### About Page Structure (Current)
1. Hero (image + intro + CV download)
2. How I Work (description)
3. How I Can Help (6 capability cards)
4. Current Stack (table format)
5. Back Home button
6. Footer

### Landing Page Structure (Current)
1. Hero (image + 5 paragraphs)
2. Divider
3. Work Experience (4 companies)
4. Footer

---

## Notes for Future Updates

### Potential Additions
- Consider adding testimonials or recommendations
- Project metrics/outcomes could be highlighted
- Contact information or booking link

### Consistency Checks
- All dates now follow "YYYY — YYYY" format
- Company names consistently underlined
- All external links open in new tab (`target="_blank"`)

---

## Version
**Last Updated:** February 2025
**Font:** Roboto Mono
**Theme:** Cloud Dancer (Pantone Color of the Year 2026)
