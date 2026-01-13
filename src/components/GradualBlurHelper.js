/**
 * GradualBlur Helper - Vanilla JS version
 * Creates gradual blur effect without React
 * 
 * Usage:
 * const blurId = createGradualBlur({
 *   containerId: 'my-container',
 *   position: 'bottom',
 *   height: '6rem',
 *   strength: 2,
 *   divCount: 5
 * });
 */

export function createGradualBlur(options = {}) {
  const {
    containerId,
    target = 'parent',
    position = 'bottom',
    height = '6rem',
    strength = 2,
    divCount = 5,
    curve = 'bezier',
    exponential = true,
    opacity = 1
  } = options;

  if (!containerId) {
    console.error('GradualBlur: containerId is required');
    return null;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`GradualBlur: Container with id "${containerId}" not found`);
    return null;
  }

  // Create blur overlay container
  const blurContainer = document.createElement('div');
  blurContainer.style.position = 'absolute';
  blurContainer.style.left = '0';
  blurContainer.style.right = '0';
  blurContainer.style.width = '100%';
  blurContainer.style.height = height;
  blurContainer.style.pointerEvents = 'none';
  blurContainer.style.zIndex = '10';
  
  if (position === 'bottom') {
    blurContainer.style.bottom = '0';
  } else {
    blurContainer.style.top = '0';
  }

  // Calculate blur values for each div
  const blurValues = [];
  const heightUnit = height.match(/[a-z]+/)?.[0] || 'rem';
  const heightValue = parseFloat(height);
  
  for (let i = 0; i < divCount; i++) {
    let progress = i / (divCount - 1);
    
    // Apply curve
    if (curve === 'bezier') {
      progress = exponential 
        ? Math.pow(progress, 2) 
        : 1 - Math.pow(1 - progress, 2);
    }
    
    const blurValue = progress * strength * 10; // Convert strength to px
    blurValues.push(blurValue);
  }

  // Create divs with blur
  blurValues.forEach((blur, index) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = '0';
    div.style.right = '0';
    div.style.width = '100%';
    div.style.height = `${heightValue / divCount}${heightUnit}`;
    div.style.backdropFilter = `blur(${blur}px)`;
    div.style.webkitBackdropFilter = `blur(${blur}px)`;
    div.style.opacity = opacity * (1 - index / divCount);
    div.style.pointerEvents = 'none';
    
    if (position === 'bottom') {
      div.style.bottom = `${(divCount - index - 1) * (heightValue / divCount)}${heightUnit}`;
    } else {
      div.style.top = `${index * (heightValue / divCount)}${heightUnit}`;
    }
    
    blurContainer.appendChild(div);
  });

  // Ensure parent container has relative positioning
  const parent = container.parentElement;
  if (parent && window.getComputedStyle(parent).position === 'static') {
    parent.style.position = 'relative';
  }

  // Append blur container to parent
  if (parent) {
    parent.appendChild(blurContainer);
  } else {
    container.appendChild(blurContainer);
  }

  return blurContainer;
}

/**
 * Create HTML structure with GradualBlur
 * Returns HTML string that can be inserted into pages
 */
export function createGradualBlurSectionHTML(content = '', options = {}) {
  const {
    height = 500,
    padding = '6rem 2rem',
    containerId = `gradual-blur-${Date.now()}`,
    blurId = `${containerId}-blur`
  } = options;

  return `
    <section style="position: relative; height: ${height}px; overflow: hidden;" id="${containerId}">
      <div style="height: 100%; overflow-y: auto; padding: ${padding};">
        ${content}
      </div>
      <div id="${blurId}"></div>
    </section>
  `;
}

