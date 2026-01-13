# Quickstart: Design Tokens System

**Feature**: Design Tokens System  
**Date**: 2025-01-27

## Overview

The Design Tokens System provides centralized, maintainable design values (colors, typography, spacing, animations, etc.) that can be referenced across the VICI Studio website. Tokens are available in CSS, JavaScript, and JSON formats.

## Quick Reference

### Using Tokens in CSS

```css
/* Import tokens */
@import '@/design-tokens/tokens.css';

/* Use tokens */
.my-component {
  color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--typography-size-lg);
  border-radius: var(--border-radius-md);
  transition-duration: var(--animation-duration-standard);
}
```

### Using Tokens in JavaScript

```javascript
import { tokens } from '@/design-tokens/tokens.js';

// Access token values
const primaryColor = tokens.color.primary;
const mediumSpacing = tokens.spacing.md;
const headingSize = tokens.typography.size.xl;
```

### Using Tokens in Tailwind

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      spacing: {
        'token-md': 'var(--spacing-md)',
      },
    },
  },
};
```

## Token Categories

### Colors
- `--color-primary` / `--color-vici-red`: `#C00218`
- `--color-secondary`: Secondary brand color
- `--color-surface`: Background (theme-aware)
- `--color-text`: Text color (theme-aware)

### Typography
- `--typography-font-family-base`: `'Outfit', sans-serif`
- `--typography-font-family-serif`: `'Playfair Display', serif`
- `--typography-size-xs` through `--typography-size-8xl`
- `--typography-weight-light`: `300`
- `--typography-weight-regular`: `400`
- `--typography-weight-medium`: `500`
- `--typography-weight-semibold`: `600`
- `--typography-weight-bold`: `700`

### Spacing (8px base unit)
- `--spacing-xs`: `4px`
- `--spacing-sm`: `8px`
- `--spacing-md`: `16px`
- `--spacing-lg`: `24px`
- `--spacing-xl`: `32px`
- `--spacing-2xl`: `48px`
- `--spacing-3xl`: `64px`

### Animation
- `--animation-duration-fast`: `150ms`
- `--animation-duration-standard`: `300ms`
- `--animation-duration-slow`: `500ms`
- `--animation-easing-standard`: `cubic-bezier(0.4, 0, 0.2, 1)`

### Breakpoints
- `--breakpoint-sm`: `640px`
- `--breakpoint-md`: `768px`
- `--breakpoint-lg`: `1024px`
- `--breakpoint-xl`: `1280px`

## Theme Support

### Light Theme
Apply `.light` class to enable light theme:

```html
<body class="light">
  <!-- Light theme tokens active -->
</body>
```

### Dark Theme (Default)
Default theme, no class needed:

```html
<body>
  <!-- Dark theme tokens active -->
</body>
```

## Common Patterns

### Responsive Typography
```css
.heading {
  font-size: var(--typography-size-base);
}

@media (min-width: var(--breakpoint-md)) {
  .heading {
    font-size: var(--typography-size-lg);
  }
}
```

### Theme-Aware Colors
```css
.card {
  background-color: var(--color-surface);
  color: var(--color-text);
  /* Automatically adapts to light/dark theme */
}
```

### Consistent Spacing
```css
.section {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  gap: var(--spacing-md);
}
```

## Migration from Hardcoded Values

### Before
```css
.button {
  background-color: #C00218;
  padding: 16px 24px;
  font-size: 0.875rem;
}
```

### After
```css
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--typography-size-sm);
}
```

## File Structure

```
src/design-tokens/
├── tokens.css           # Main file (imports all categories)
├── tokens.js            # JavaScript export
├── tokens.json          # JSON export
├── colors.css           # Color tokens
├── typography.css       # Typography tokens
├── spacing.css          # Spacing tokens
├── animation.css        # Animation tokens
├── breakpoints.css      # Breakpoint tokens
└── borders-shadows.css  # Border & shadow tokens
```

## Next Steps

1. Import tokens in your component: `@import '@/design-tokens/tokens.css'`
2. Replace hardcoded values with token references
3. Use semantic names for new code, maintain brand names for compatibility
4. Test theme switching to ensure tokens work in both light and dark modes

