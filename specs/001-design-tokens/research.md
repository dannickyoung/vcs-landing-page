# Research: Design Tokens System

**Feature**: Design Tokens System  
**Date**: 2025-01-27  
**Phase**: 0 - Research & Discovery

## Research Questions

### 1. Design Token Organization Structure

**Question**: How should design tokens be organized to balance maintainability with ease of use?

**Decision**: Use hierarchical organization by category (colors, typography, spacing, animation, breakpoints, borders/shadows) in separate CSS files, with a main tokens.css that imports all categories. This allows:
- Easy navigation and maintenance
- Selective imports if needed
- Clear separation of concerns
- Scalability as tokens grow

**Rationale**: Based on industry best practices (W3C Design Tokens Community Group, Style Dictionary patterns) and the need to maintain existing Tailwind integration.

**Alternatives Considered**:
- Single file: Rejected - becomes unmaintainable with 50+ tokens
- Flat structure: Rejected - loses semantic grouping
- Component-based: Rejected - tokens are cross-cutting, not component-specific

### 2. Token Naming Convention

**Question**: What naming convention should be used for design tokens?

**Decision**: Use hierarchical naming with category prefix: `--{category}-{semantic-name}` (e.g., `--color-primary`, `--spacing-md`, `--typography-heading-size-xl`). Support both semantic names (primary, secondary) and brand names (vici-red) as aliases.

**Rationale**: Hierarchical naming provides:
- Clear category identification
- Prevents naming conflicts
- Enables autocomplete in IDEs
- Supports semantic meaning while maintaining brand identity

**Alternatives Considered**:
- Flat naming (e.g., `--primary`): Rejected - ambiguous without context
- BEM-style: Rejected - too verbose for tokens
- camelCase: Rejected - CSS custom properties convention is kebab-case

### 3. Theme Variation Strategy

**Question**: How should light/dark theme variations be handled?

**Decision**: Use CSS custom property overrides with `.light` and `.dark` class selectors (or `[data-theme]` attribute). All color tokens defined in `:root` for default (dark), with light theme overrides in `.light` selector. This maintains:
- Single source of truth per token
- Easy theme switching
- No JavaScript required for theme changes
- Performance (native CSS, no runtime cost)

**Rationale**: Aligns with existing codebase pattern (already uses `.dark` class in input.css) and CSS best practices for theming.

**Alternatives Considered**:
- Separate token files per theme: Rejected - harder to maintain consistency
- JavaScript-based theming: Rejected - adds runtime overhead, violates performance principles
- CSS variables with calc(): Rejected - unnecessary complexity

### 4. Multi-Format Export Strategy

**Question**: How should tokens be exported to JavaScript and JSON formats?

**Decision**: Generate JavaScript and JSON exports from CSS custom properties using a build script or runtime parser. CSS remains the source of truth. JavaScript module exports structured objects, JSON exports flat key-value pairs suitable for design tools.

**Rationale**: 
- CSS custom properties are the native format for web
- Single source of truth prevents sync issues
- Build-time generation ensures consistency
- Runtime parsing possible but less performant

**Alternatives Considered**:
- JSON as source: Rejected - loses CSS native benefits, requires build step for CSS
- JavaScript as source: Rejected - CSS custom properties are more appropriate for web
- Manual sync: Rejected - error-prone, maintenance burden

### 5. Tailwind Integration Strategy

**Question**: How should design tokens integrate with existing Tailwind CSS setup?

**Decision**: Extend Tailwind config to reference CSS custom properties using `var()` syntax. Maintain existing Tailwind classes while adding token-based alternatives. Create Tailwind utilities that map to design tokens (e.g., `text-token-primary` → `var(--color-primary)`).

**Rationale**: 
- Maintains backward compatibility (FR-012)
- Leverages Tailwind's utility system
- Allows gradual migration
- No breaking changes to existing code

**Alternatives Considered**:
- Replace Tailwind entirely: Rejected - too disruptive, violates backward compatibility
- Ignore Tailwind: Rejected - existing codebase heavily uses Tailwind
- Tailwind plugin: Considered but not needed - CSS variables work directly

### 6. Token Extraction from Existing Codebase

**Question**: How should existing design values be extracted and organized?

**Decision**: Manual audit of codebase to identify:
- All color values (hex, rgb, named colors)
- Typography values (font sizes, weights, line heights, letter spacing)
- Spacing values (padding, margin, gap values)
- Animation values (durations, easing functions)
- Breakpoint values (media query breakpoints)
- Border radius and shadow values

Then organize into token categories, establish naming conventions, and create token definitions.

**Rationale**: Systematic extraction ensures no values are missed and establishes comprehensive token system from day one.

**Alternatives Considered**:
- Automated extraction: Considered but manual audit more reliable for first version
- Incremental extraction: Rejected - incomplete token system defeats purpose

### 7. Documentation Generation

**Question**: How should design token documentation be generated?

**Decision**: Create a simple documentation generator that reads token definitions and generates markdown documentation with:
- Token name and value
- Category
- Usage examples
- Theme variants (if applicable)
- Related tokens

Can be enhanced later with automated generation from token files.

**Rationale**: Documentation is critical for adoption (SC-007). Initial manual/script-based approach ensures accuracy, can be automated later.

**Alternatives Considered**:
- Manual documentation: Acceptable for initial version
- Full automation: Deferred - can be added after token system is established
- External tools: Considered but adds dependencies

## Key Findings

1. **CSS Custom Properties are the right foundation**: Native browser support, zero runtime cost, perfect for theming
2. **Hierarchical organization scales**: Category-based files maintain clarity as token count grows
3. **Backward compatibility is critical**: Existing Tailwind classes must continue working during migration
4. **Theme support is straightforward**: CSS custom property overrides provide clean solution
5. **Multi-format exports enable tooling**: JavaScript and JSON formats unlock design tool integration

## References

- [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - Token organization patterns
- [CSS Custom Properties Best Practices](https://web.dev/css-custom-properties/)
- [Tailwind CSS Custom Properties](https://tailwindcss.com/docs/customizing-colors#using-css-variables)

