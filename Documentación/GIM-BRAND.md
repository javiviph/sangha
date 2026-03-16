# Design System Strategy: High-End Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Grounded Sanctuary."** 

This system moves beyond the standard "wellness app" aesthetic by embracing a sophisticated editorial layout that mimics high-end print journals. Rather than relying on rigid grids and boxy containers, we prioritize **intentional asymmetry** and **breathable compositions**. 

The goal is to evoke tranquility through "The Digital Curator" approach: using sophisticated layering, oversized serif typography, and a "paper-on-paper" depth model. This removes the digital friction of traditional UI, making the interface feel like an organic extension of a mindfulness practice.

---

## 2. Colors
Our palette is rooted in the earth. It uses deep, wine-pressed reds and sun-baked terracotta to provide warmth against a neutral, cream-based canvas.

*   **Primary (`#5f0006` / `#801818`):** Use for high-authority moments, main CTAs, and key brand expressions.
*   **Secondary (`#895110` / `#e69e58`):** Use for supportive actions, highlighting secondary paths, and warm accents in the UI.
*   **Surface Tiers:** We utilize a "Cream-on-Cream" hierarchy. `surface` (`#fcf9f4`) is our global backdrop. `surface-container-low` (`#f6f3ee`) and `high` (`#ebe8e3`) create the physical architecture.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or card definition. The interface must remain "borderless." Boundaries are defined exclusively through background color shifts. If a section needs to stand out, place a `surface-container-low` block against the `surface` background.

### Signature Textures & Glass
To add "soul," use subtle linear gradients (e.g., `primary` to `primary_container`) on large buttons and hero elements. For floating navigation or over-image cards, apply **Glassmorphism**: use `surface` at 70% opacity with a `24px` backdrop blur to soften the digital edge.

---

## 3. Typography
The typography system relies on the high-contrast tension between an elegant Serif and a modern, utilitarian Sans-Serif.

*   **Display & Headlines (Newsreader):** This serif font is our "Voice of Wisdom." Use `display-lg` (3.5rem) with tight letter-spacing for hero sections. It should feel authoritative yet grounded.
*   **Body & Labels (Manrope):** Our "Functional Guide." Manrope provides a clean, rhythmic reading experience. Use `body-lg` (1rem) for standard reading and `label-md` for metadata.
*   **Hierarchy Note:** Always lead with the Serif. Even in small headers, the Serif provides the "Editorial" feel that separates this system from a generic template.

---

## 4. Elevation & Depth
In this design system, depth is **Tonal**, not structural. We mimic the physical layering of fine stationery.

*   **The Layering Principle:** Stacking determines importance. A "Card" is simply a `surface-container-lowest` (`#ffffff`) shape sitting on a `surface-container-low` (`#f6f3ee`) background. This creates a soft, natural lift.
*   **Ambient Shadows:** If a floating element (like a FAB or Menu) requires a shadow, it must be nearly invisible. Use the `on_surface` color at 5% opacity with a `32px` blur and `8px` Y-offset. It should feel like a soft glow, not a hard drop-shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a border (e.g., in high-contrast mode), use `outline_variant` at 15% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Rounded-xl (`1.5rem`), using the `primary_container` color. Text is `on_primary`. Apply a very subtle 5% vertical gradient to give it a "pressed" tactile feel.
*   **Secondary:** Rounded-xl, `secondary_container` background. Use for "soft" actions like 'Save for Later.'
*   **Tertiary:** No background. Serif `label-md` text with a `2px` underline in `secondary` color, offset by `4px`.

### Cards & Lists
*   **The Forbiddance of Dividers:** Horizontal lines are replaced by vertical whitespace (`spacing-8` or `12`).
*   **Cards:** Use `rounded-lg` (1rem). Content should be inset heavily (`spacing-6`) to maintain the feeling of luxury and space.

### Inputs & Form Fields
*   **Styling:** Use a `surface-container-highest` fill with a `rounded-md` corner. 
*   **Focus State:** Instead of a heavy border, the background color should shift to `surface_bright` with a `2px` `secondary` bottom-only accent.

### Immersive Components (App Specific)
*   **Meditation Player:** A full-screen `surface` overlay using Glassmorphism elements for controls, allowing the nature-based imagery to bleed through the background.
*   **Serenity Chips:** For filtering meditation types. Use `surface-container-high` for unselected and `primary` with `on_primary` for selected. Rounded-full (`9999px`).

---

## 6. Do's and Don'ts

### Do:
*   **Use Intentional Asymmetry:** If you have a two-column layout, make one column 60% and the other 40%. It feels more "designed" and less "templated."
*   **Embrace Negative Space:** If you think a section needs more content, it probably needs more whitespace instead. Use `spacing-20` (7rem) between major sections.
*   **Tint Your Neutrals:** Always ensure your "greys" are actually warm-toned (`on_surface_variant`). Pure #000000 or neutral #888888 is forbidden.

### Don't:
*   **Don't use "Standard" Boxes:** Avoid the "bootstrap" look. No hard corners, no heavy shadows, and absolutely no 1px dividers.
*   **Don't Overcrowd:** Never put more than 3-4 primary actions on a single screen. Sanctuary requires focus.
*   **Don't Use Stock-y Imagery:** Avoid bright, saturated, or "posed" photography. Use desaturated, soft-focus, and naturalistic imagery that matches the `surface` color tones.