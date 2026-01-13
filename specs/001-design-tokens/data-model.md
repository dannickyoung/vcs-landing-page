# Data Model: Design Tokens System

**Feature**: Design Tokens System  
**Date**: 2025-01-27  
**Phase**: 1 - Design

## Entities

### Design Token

A named value representing a design decision that can be referenced across the codebase.

**Attributes**:
- `name` (string, required): Token identifier following naming convention (e.g., `color-primary`, `spacing-md`)
- `value` (string, required): Actual design value (e.g., `#C00218`, `16px`, `300ms`)
- `category` (enum, required): Token category - `color`, `typography`, `spacing`, `animation`, `breakpoint`, `border`, `shadow`
- `description` (string, optional): Human-readable description of token purpose
- `theme` (enum, optional): Theme variant - `default`, `light`, `dark` (for color tokens)
- `alias` (string[], optional): Alternative names that reference this token (e.g., `vici-red` → `color-primary`)
- `deprecated` (boolean, default: false): Whether token is deprecated
- `deprecationMessage` (string, optional): Migration guidance for deprecated tokens

**Relationships**:
- Belongs to a Token Category
- May have multiple Theme Variants (for color tokens)
- May be aliased by other tokens

**Validation Rules**:
- Name MUST follow hierarchical convention: `{category}-{semantic-name}`
- Value MUST be valid for token type (hex for colors, px/rem for spacing, etc.)
- Color tokens MUST have contrast ratio documented for accessibility
- Typography tokens MUST include size, weight, line-height, letter-spacing
- Spacing tokens MUST follow 8px base unit system

**State Transitions**:
- `draft` → `active`: Token is defined and ready for use
- `active` → `deprecated`: Token is being phased out
- `deprecated` → `removed`: Token is no longer available

### Token Category

Grouping of related design tokens by type.

**Categories**:
1. **Color**: Brand colors, semantic colors, neutral colors, with light/dark variants
2. **Typography**: Font families, sizes, weights, line heights, letter spacing
3. **Spacing**: Padding, margin, gap values following 8px base unit
4. **Animation**: Durations, easing functions, delays
5. **Breakpoint**: Responsive design breakpoints (mobile, tablet, desktop)
6. **Border**: Border radius values
7. **Shadow**: Elevation/shadow values

**Attributes**:
- `name` (string, required): Category name
- `tokens` (DesignToken[], required): Tokens belonging to this category
- `file` (string, required): CSS file containing category tokens

### Theme Variant

Different token values for different visual themes.

**Variants**:
- `default` (dark): Default theme used across most of the site
- `light`: Light theme used on Services and About pages

**Attributes**:
- `name` (string, required): Theme identifier
- `selector` (string, required): CSS selector for theme (e.g., `.light`, `[data-theme="light"]`)
- `colorTokens` (DesignToken[], required): Color tokens with theme-specific values

## Token Naming Convention

### Structure
`--{category}-{semantic-name}`

### Examples
- `--color-primary` (semantic) → `#C00218` (vici-red)
- `--color-vici-red` (brand) → `#C00218`
- `--typography-heading-size-xl` → `3rem`
- `--spacing-md` → `16px`
- `--animation-duration-standard` → `300ms`
- `--breakpoint-tablet` → `768px`

### Semantic vs Brand Names
- Semantic names (`primary`, `secondary`) provide meaning and flexibility
- Brand names (`vici-red`) maintain brand identity
- Both reference the same underlying value
- Semantic names preferred for new code, brand names maintained for backward compatibility

## Token Value Types

### Color Tokens
- Format: Hex (`#C00218`), RGB (`rgb(192, 2, 24)`), or HSL
- Must include light/dark variants
- Must document contrast ratios

### Typography Tokens
- Font family: String (e.g., `'Outfit', sans-serif`)
- Size: Rem or px (e.g., `1.25rem`, `20px`)
- Weight: Number (e.g., `300`, `400`, `500`, `600`, `700`)
- Line height: Number or unitless (e.g., `1.2`, `1.5`)
- Letter spacing: Em or px (e.g., `0.05em`, `5px`)

### Spacing Tokens
- Format: Px values following 8px base unit
- Scale: `4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px`

### Animation Tokens
- Duration: Milliseconds (e.g., `150ms`, `300ms`, `500ms`)
- Easing: CSS easing function or cubic-bezier (e.g., `ease-out`, `cubic-bezier(0.4, 0, 0.2, 1)`)
- Delay: Milliseconds (e.g., `100ms`, `200ms`)

### Breakpoint Tokens
- Format: Px values for min-width media queries
- Values: `640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl)

### Border Tokens
- Border radius: Rem or px (e.g., `0.5rem`, `8px`, `12px`)

### Shadow Tokens
- Format: CSS box-shadow values
- Elevation levels: `0, 1, 2, 3, 4` (subtle to prominent)

