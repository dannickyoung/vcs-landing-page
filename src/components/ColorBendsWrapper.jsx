import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorBends from '@/components/ui/ColorBends/ColorBends';

export function mountColorBends(containerId) {
  try {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`ColorBends container with id "${containerId}" not found`);
      return null;
    }
    
    const root = createRoot(container);
    root.render(
      <ColorBends
        rotation={45}
        speed={0.2}
        colors={["#ffebeb","#c00218","#ff8f9a"]}
        transparent
        autoRotate={0}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      />
    );
    
    return root;
  } catch (error) {
    console.error('Error mounting ColorBends:', error);
    return null;
  }
}

