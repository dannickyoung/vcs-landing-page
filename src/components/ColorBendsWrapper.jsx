import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorBends from '@/components/ui/ColorBends/ColorBends';

export function mountColorBends(containerId, options = {}) {
  try {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`ColorBends container with id "${containerId}" not found`);
      return null;
    }
    
    const {
      rotation = 45,
      colors = ["#f8495a","#c00218","#ff8f9a"],
      speed = 0.2,
      transparent = true,
      autoRotate = 0,
      scale = 0.5,
      frequency = 1,
      warpStrength = 1,
      mouseInfluence = 1,
      parallax = 0.5,
      noise = 0.1
    } = options;
    
    const root = createRoot(container);
    root.render(
      <ColorBends
        rotation={rotation}
        speed={speed}
        colors={colors}
        transparent={transparent}
        autoRotate={autoRotate}
        scale={scale}
        frequency={frequency}
        warpStrength={warpStrength}
        mouseInfluence={mouseInfluence}
        parallax={parallax}
        noise={noise}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      />
    );
    
    return root;
  } catch (error) {
    console.error('Error mounting ColorBends:', error);
    return null;
  }
}

// Generate random color combinations and rotation for each page
export function getColorBendsConfigForPage(pageRoute) {
  // Color palettes - extremely distinct combinations for maximum visual variety
  const colorPalettes = {
    'work': ["#3a86ff", "#06ffa5", "#f5f5f0"], // Blue, Mint Green, Off White - blue/green/off-white
    'services': ["#ffbe0b", "#fb5607", "#ff006e"], // Yellow, Orange, Hot Pink - warm spectrum
    'team': ["#06ffa5", "#118ab2", "#ef476f"], // Mint Green, Blue, Coral - fresh mix
    'contact': ["#7209b7", "#f72585", "#4cc9f0"], // Deep Purple, Magenta, Sky Blue - electric
    'about': ["#f77f00", "#fcbf49", "#eae2b7"], // Orange, Gold, Cream - warm earth tones
    'socialmedia-video': ["#ff006e", "#8338ec", "#3a86ff"], // Hot Pink, Violet, Blue - social/electric
  };
  
  // Get base route (remove project slug if present)
  const baseRoute = pageRoute.split('/')[0];
  
  // Check if this is a project detail page (work/slug)
  const isProjectPage = pageRoute.startsWith('work/') && pageRoute !== 'work';
  
  let colors;
  if (isProjectPage) {
    // Generate random colors for each project based on slug hash
    const projectSlug = pageRoute.split('/')[1] || '';
    const colorHash = projectSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Predefined diverse color palettes for projects
    const projectPalettes = [
      ["#ff6b6b", "#4ecdc4", "#ffe66d"], // Red, Teal, Yellow
      ["#a8e6cf", "#ffd3b6", "#ffaaa5"], // Mint, Peach, Coral
      ["#95e1d3", "#f38181", "#fce38a"], // Turquoise, Pink, Yellow
      ["#aa96da", "#c5fad5", "#ffffd2"], // Purple, Green, Cream
      ["#ff8a80", "#82b1ff", "#b388ff"], // Red, Blue, Purple
      ["#ffd54f", "#81c784", "#64b5f6"], // Yellow, Green, Blue
      ["#f48fb1", "#90caf9", "#a5d6a7"], // Pink, Blue, Green
      ["#ce93d8", "#80deea", "#fff59d"], // Purple, Cyan, Yellow
      ["#ffab91", "#b2dfdb", "#c5e1a5"], // Orange, Teal, Light Green
      ["#ef9a9a", "#90caf9", "#a5d6a7"], // Light Red, Blue, Green
      ["#b39ddb", "#80cbc4", "#ffcc80"], // Lavender, Teal, Orange
      ["#ffccbc", "#b2ebf2", "#c8e6c9"], // Peach, Cyan, Light Green
    ];
    
    // Select palette based on hash
    colors = projectPalettes[colorHash % projectPalettes.length];
  } else {
    // Use predefined palette for base routes
    colors = colorPalettes[baseRoute];
    
    if (!colors) {
      // Fallback
      colors = colorPalettes['work'] || ["#f8495a", "#6366f1", "#10b981"];
    }
  }
  
  // Generate rotation based on full route (0-360 degrees) for uniqueness
  const routeHash = pageRoute.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rotation = routeHash % 360;
  
  return {
    colors,
    rotation
  };
}

