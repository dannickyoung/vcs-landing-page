# GradualBlur Component Usage

Component created by Ansh - github.com/ansh-dhanani

## React Component Usage

```jsx
import GradualBlur from './components/GradualBlur';

<section style={{position: 'relative', height: 500, overflow: 'hidden'}}>
  <div style={{ height: '100%', overflowY: 'auto', padding: '6rem 2rem' }}>
    <!-- Content Here - such as an image or text -->
  </div>

  <GradualBlur
    target="parent"
    position="bottom"
    height="6rem"
    strength={2}
    divCount={5}
    curve="bezier"
    exponential={true}
    opacity={1}
  />
</section>
```

## Vanilla JS Usage (for HTML string templates)

### Option 1: Using the helper function

```javascript
import { createGradualBlur } from './components/GradualBlurHelper.js';

// In your page render function:
const html = `
  <section style="position: relative; height: 500px; overflow: hidden;" id="my-section">
    <div style="height: 100%; overflow-y: auto; padding: 6rem 2rem;" id="my-content">
      <!-- Your content here -->
    </div>
    <div id="my-blur"></div>
  </section>
`;

// After inserting HTML into DOM:
createGradualBlur({
  containerId: 'my-blur',
  position: 'bottom',
  height: '6rem',
  strength: 2,
  divCount: 5,
  curve: 'bezier',
  exponential: true,
  opacity: 1
});
```

### Option 2: Using the HTML generator

```javascript
import { createGradualBlurSectionHTML } from './components/GradualBlurHelper.js';

const html = createGradualBlurSectionHTML(
  '<p>Your content here</p>',
  {
    height: 500,
    padding: '6rem 2rem',
    containerId: 'my-section',
    blurId: 'my-blur'
  }
);

// After inserting HTML, initialize the blur:
createGradualBlur({
  containerId: 'my-blur',
  position: 'bottom',
  height: '6rem',
  strength: 2
});
```

## React Wrapper Usage (similar to ColorBends)

```javascript
import { mountGradualBlur } from './components/GradualBlurWrapper.jsx';

// In your page initialization:
mountGradualBlur('my-blur-container', {
  target: 'parent',
  position: 'bottom',
  height: '6rem',
  strength: 2,
  divCount: 5,
  curve: 'bezier',
  exponential: true,
  opacity: 1
});
```

## Props

- `target` (string): 'parent' to blur parent container, or selector string
- `position` (string): 'top' or 'bottom' - where to place the blur
- `height` (string): Height of the blur gradient (e.g., '6rem', '100px')
- `strength` (number): Blur strength multiplier (default: 2)
- `divCount` (number): Number of divs to create the gradient effect (default: 5)
- `curve` (string): 'bezier' or 'linear' (default: 'bezier')
- `exponential` (boolean): Whether to use exponential curve (default: true)
- `opacity` (number): Opacity of the overlay 0-1 (default: 1)

