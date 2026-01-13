# Design Tokens API Contract

**Feature**: Design Tokens System  
**Date**: 2025-01-27  
**Type**: Frontend-only (no HTTP API)

## Overview

Design tokens are accessed through multiple interfaces:
1. **CSS Custom Properties**: Primary format, native browser support
2. **JavaScript Module**: Programmatic access in code
3. **JSON Export**: Design tool integration

## CSS Custom Properties Interface

### Usage Pattern
```css
/* Token reference */
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--typography-body-size);
}

/* Theme-aware tokens */
.element {
  background-color: var(--color-surface);
  /* Resolves to dark value by default, light value when .light class is present */
}
```

### Token Categories

#### Colors
- `--color-primary` / `--color-vici-red`: Primary brand color
- `--color-secondary`: Secondary brand color
- `--color-neutral-*`: Neutral grays
- `--color-semantic-*`: Success, error, warning, info colors
- `--color-surface`: Background color (theme-aware)
- `--color-text`: Text color (theme-aware)
- `--color-text-muted`: Muted text color (theme-aware)

#### Typography
- `--typography-font-family-base`: Base font family
- `--typography-font-family-serif`: Serif font family (Playfair Display)
- `--typography-size-*`: Font sizes (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl)
- `--typography-weight-*`: Font weights (light, regular, medium, semibold, bold)
- `--typography-line-height-*`: Line heights (tight, normal, relaxed)
- `--typography-letter-spacing-*`: Letter spacing values

#### Spacing
- `--spacing-*`: Spacing scale (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px)

#### Animation
- `--animation-duration-*`: Animation durations (fast: 150ms, standard: 300ms, slow: 500ms)
- `--animation-easing-*`: Easing functions
- `--animation-delay-*`: Animation delays

#### Breakpoints
- `--breakpoint-sm`: 640px
- `--breakpoint-md`: 768px
- `--breakpoint-lg`: 1024px
- `--breakpoint-xl`: 1280px

#### Borders & Shadows
- `--border-radius-*`: Border radius values
- `--shadow-*`: Shadow/elevation values

## JavaScript Module Interface

### Import Pattern
```javascript
import { tokens } from '@/design-tokens/tokens.js';

// Access token value
const primaryColor = tokens.color.primary;
const spacingMd = tokens.spacing.md;
```

### Module Structure
```javascript
export const tokens = {
  color: {
    primary: '#C00218',
    secondary: '...',
    // ...
  },
  typography: {
    fontFamily: {
      base: "'Outfit', sans-serif",
      serif: "'Playfair Display', serif"
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      // ...
    },
    // ...
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    // ...
  },
  animation: {
    duration: {
      fast: '150ms',
      standard: '300ms',
      // ...
    },
    // ...
  },
  breakpoint: {
    sm: '640px',
    md: '768px',
    // ...
  }
};
```

## JSON Export Interface

### File Location
`src/design-tokens/tokens.json`

### Structure
```json
{
  "color": {
    "primary": {
      "value": "#C00218",
      "type": "color",
      "description": "Primary brand color"
    }
  },
  "typography": {
    "size": {
      "base": {
        "value": "1rem",
        "type": "dimension"
      }
    }
  }
}
```

## Theme Switching

### CSS Implementation
```css
:root {
  --color-surface: #000000; /* Dark theme default */
  --color-text: #FFFFFF;
}

.light {
  --color-surface: #FFFFFF; /* Light theme override */
  --color-text: #000000;
}
```

### JavaScript Theme Access
```javascript
import { getThemeTokens } from '@/design-tokens/tokens.js';

const lightTokens = getThemeTokens('light');
const darkTokens = getThemeTokens('dark');
```

## Error Handling

### Missing Token
- CSS: Falls back to browser default or shows warning in dev mode
- JavaScript: Throws error or returns `undefined` (configurable)
- JSON: Missing key returns `undefined`

### Invalid Token Value
- CSS: Browser ignores invalid value
- JavaScript: Validation on import, throws error for invalid values
- JSON: Schema validation on load

## Versioning

Tokens follow semantic versioning:
- **MAJOR**: Breaking changes (token removed, value type changed)
- **MINOR**: New tokens added
- **PATCH**: Token value updates (non-breaking)

Deprecated tokens remain available with deprecation warnings.

