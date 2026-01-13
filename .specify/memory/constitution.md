<!--
Sync Impact Report:
Version change: Template → 1.0.0
Modified principles: All placeholders replaced with concrete design studio principles
Added sections: Performance Standards, Animation Guidelines
Removed sections: None (template structure maintained)
Templates requiring updates:
  ✅ plan-template.md - Constitution Check section aligns with new principles
  ✅ spec-template.md - No changes needed (generic template)
  ✅ tasks-template.md - No changes needed (generic template)
Follow-up TODOs: None
-->

# VICI Studio Website Constitution

## Core Principles

### I. Mobile-First Design (NON-NEGOTIABLE)
Every interface MUST be designed and implemented mobile-first. Desktop layouts are progressive enhancements, not primary designs. All touch targets MUST meet minimum 44x44px requirements. Responsive breakpoints MUST be tested across real devices, not just browser resizing. Typography MUST remain readable at all viewport sizes with minimum 16px base font size.

**Rationale**: Design studio websites serve global audiences primarily on mobile devices. Mobile-first ensures core experiences work everywhere, with desktop as enhancement.

### II. Performance Excellence (NON-NEGOTIABLE)
All animations MUST maintain 60fps. Page load times MUST be under 3 seconds on 3G connections. Images MUST be optimized (WebP with fallbacks, lazy loading, responsive srcsets). JavaScript bundles MUST be code-split and lazy-loaded. Critical CSS MUST be inlined. No render-blocking resources.

**Rationale**: Design studios showcase visual work; slow performance undermines credibility. 60fps animations demonstrate technical excellence matching design quality.

### III. Visual Consistency & Design System
All visual elements MUST adhere to the established design system (color palette, typography scale, spacing system, component patterns). ColorBends backgrounds MUST use randomized but distinct palettes per page. Typography hierarchy MUST be consistent across all pages. Spacing MUST follow the 8px base unit system.

**Rationale**: Design studios must demonstrate design discipline. Inconsistent visuals undermine brand perception and user trust.

### IV. Smooth Animations & Transitions
All page transitions MUST use GSAP with appropriate easing functions. Scroll animations MUST use ScrollTrigger with proper cleanup. Menu animations MUST be smooth and reversible. Loading states MUST provide visual feedback. No jarring transitions or layout shifts.

**Rationale**: Smooth animations are signature of premium design work. They create emotional connection and demonstrate attention to detail.

### V. Accessibility Standards (WCAG 2.1 AA Minimum)
All interactive elements MUST be keyboard navigable. Focus indicators MUST be visible (2-3px outline, primary color). Color contrast MUST meet 4.5:1 for body text, 3:1 for large text. Semantic HTML MUST be used (nav, main, section, article). ARIA labels MUST be provided when semantic HTML is insufficient. Alt text MUST be descriptive for all images.

**Rationale**: Design excellence includes inclusive design. Accessibility ensures all users can experience the work, reflecting studio values.

### VI. Code Quality & Maintainability
Components MUST be modular and reusable. CSS MUST use Tailwind utilities with custom properties for theming. JavaScript MUST be organized by feature/domain. No inline styles except for dynamic values. Code MUST be readable and well-commented for complex logic. File sizes MUST be kept under 400 lines where possible.

**Rationale**: Maintainable code enables rapid iteration and feature additions. Clean architecture supports long-term project health.

## Performance Standards

### Animation Performance
- All animations MUST use `transform` and `opacity` properties (GPU-accelerated)
- `will-change` MUST be set for animated elements, removed after animation
- Scroll-triggered animations MUST use throttling/debouncing
- Canvas-based backgrounds (ColorBends) MUST use React with proper cleanup

### Loading Performance
- Initial bundle size MUST be under 200KB gzipped
- Images MUST use lazy loading below the fold
- Fonts MUST use `font-display: swap`
- Critical rendering path MUST be optimized

### Runtime Performance
- No memory leaks (event listeners MUST be cleaned up)
- No layout thrashing (batch DOM reads/writes)
- Smooth scrolling (60fps) on all devices
- Proper use of `requestAnimationFrame` for animations

## Animation Guidelines

### Page Transitions
- Duration: 300-500ms for page transitions
- Easing: `power2.out` or `power3.out` for entrances
- Opacity fade combined with subtle transform (translateY)
- Loading screen MUST animate out smoothly

### Micro-interactions
- Button hover states: 150-200ms transitions
- Menu toggle: Coordinated timeline animations
- Scroll indicators: Smooth opacity/transform changes
- Filter tabs: Animated underline with proper timing

### Scroll Animations
- Elements MUST fade in as they enter viewport
- Stagger animations for lists/grids
- Parallax effects MUST be subtle and performant
- Scroll-triggered content MUST not cause layout shifts

## Development Workflow

### Code Review Requirements
- All PRs MUST verify mobile responsiveness
- Performance budgets MUST be checked (Lighthouse scores)
- Accessibility MUST be validated (keyboard navigation, screen reader)
- Animation smoothness MUST be tested on real devices
- Visual regression testing for design system compliance

### Quality Gates
- Lighthouse Performance score MUST be 90+ on mobile
- Lighthouse Accessibility score MUST be 95+
- No console errors or warnings in production
- All interactive elements MUST be testable manually
- Cross-browser testing on Chrome, Safari, Firefox, Edge

### Deployment Process
- Production builds MUST be optimized (minified, tree-shaken)
- Images MUST be compressed and optimized
- Bundle analysis MUST be reviewed before deployment
- Staging environment MUST mirror production for testing

## Governance

This constitution supersedes all other development practices. Amendments require:
1. Documentation of rationale for change
2. Impact assessment on existing features
3. Update to relevant templates and documentation
4. Version bump following semantic versioning

All feature implementations MUST pass Constitution Check before proceeding to implementation. Violations MUST be justified in complexity tracking with simpler alternatives considered.

**Version**: 1.0.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
