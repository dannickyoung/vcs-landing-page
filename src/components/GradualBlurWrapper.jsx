import React from 'react';
import { createRoot } from 'react-dom/client';
import GradualBlur from './GradualBlur';

// Global reference to store blur root instances for cleanup
let pageBlurRoot = null;

/**
 * Mount GradualBlur component into a container
 * Similar to ColorBendsWrapper pattern
 */
export function mountGradualBlur(containerId, options = {}) {
  try {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`GradualBlur container with id "${containerId}" not found`);
      return null;
    }
    
    const root = createRoot(container);
    root.render(<GradualBlur {...options} />);
    
    return root;
  } catch (error) {
    console.error('Error mounting GradualBlur:', error);
    return null;
  }
}

/**
 * Mount GradualBlur to the page (fixed position, for main scroll)
 * This creates a blur effect at the bottom of the viewport
 */
export function mountPageScrollBlur(options = {}) {
  try {
    // Clean up existing blur if any
    if (pageBlurRoot) {
      pageBlurRoot.unmount();
      pageBlurRoot = null;
    }

    // Create container for page blur
    let container = document.getElementById('page-scroll-blur');
    if (!container) {
      container = document.createElement('div');
      container.id = 'page-scroll-blur';
      document.body.appendChild(container);
    }

    // Default options for page scroll blur
    const defaultOptions = {
      target: 'page',
      position: 'bottom',
      height: '6rem',
      strength: 2,
      divCount: 5,
      curve: 'bezier',
      exponential: false,
      opacity: 1,
      zIndex: 1000,
      ...options
    };

    pageBlurRoot = createRoot(container);
    pageBlurRoot.render(<GradualBlur {...defaultOptions} />);
    
    return pageBlurRoot;
  } catch (error) {
    console.error('Error mounting page scroll blur:', error);
    return null;
  }
}

/**
 * Clean up page scroll blur
 */
export function unmountPageScrollBlur() {
  if (pageBlurRoot) {
    pageBlurRoot.unmount();
    pageBlurRoot = null;
  }
  const container = document.getElementById('page-scroll-blur');
  if (container) {
    container.remove();
  }
}

/**
 * Create HTML structure with GradualBlur for vanilla JS usage
 * Returns HTML string that can be inserted into pages
 */
export function createGradualBlurSection(content = '', options = {}) {
  const {
    height = 500,
    padding = '6rem 2rem',
    containerId = `gradual-blur-${Date.now()}`,
    blurOptions = {}
  } = options;

  return `
    <section style="position: relative; height: ${height}px; overflow: hidden;" id="${containerId}-section">
      <div style="height: 100%; overflow-y: auto; padding: ${padding};" id="${containerId}-content">
        ${content}
      </div>
      <div id="${containerId}-blur"></div>
    </section>
  `;
}

