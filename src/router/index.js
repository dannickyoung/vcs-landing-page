// Simple client-side router
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = '';
    this.gsap = null; // Will be set from main.js
    this.scrollTrigger = null; // Will be set from main.js
    this.init();
  }
  
  setGSAP(gsapInstance) {
    this.gsap = gsapInstance;
  }
  
  setScrollTrigger(scrollTriggerInstance) {
    this.scrollTrigger = scrollTriggerInstance;
  }

  init() {
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Handle link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-route]');
      if (link) {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        this.navigate(route);
      }
    });
  }
  
  // Method to handle initial route (called after routes are registered)
  async handleInitialRoute() {
    try {
      let path = window.location.pathname.slice(1);
      if (path === '' || path === '/') path = 'home';
      
      const handler = this.routes[path] || this.routes['404'];
      
      if (handler) {
        // On initial load, skip transition out
        await handler();
        // Only transition in
        await this.transitionIn();
      }
    } catch (error) {
      console.error('Error handling initial route:', error);
      throw error;
    }
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    if (path !== this.currentRoute) {
      this.currentRoute = path;
      window.history.pushState({}, '', path === '/' ? '/' : `/${path}`);
      this.handleRoute();
    } else {
      // Same route — scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  async handleRoute() {
    try {
      let path = window.location.pathname.slice(1);
      if (path === '' || path === '/') path = 'home';
      
      const handler = this.routes[path] || this.routes['404'];
      
      if (handler) {
        // Scroll to top immediately when route changes (before transition)
        window.scrollTo({ top: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Trigger page transition out
        await this.transitionOut();
        
        // Ensure we're still at top after transition out
        window.scrollTo({ top: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Load new page
        await handler();

        // Ensure scroll is at top after content is rendered
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Trigger page transition in (which also scrolls to top)
        await this.transitionIn();

        // Final scroll reset after transition completes
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    } catch (error) {
      console.error('Error handling route:', error);
      // Fallback to 404 if route fails
      const handler404 = this.routes['404'];
      if (handler404) {
        await handler404();
      }
    }
  }

  async transitionOut() {
    // Clean up ScrollTrigger instances to prevent errors
    if (this.scrollTrigger) {
      const allTriggers = this.scrollTrigger.getAll();
      allTriggers.forEach(trigger => {
        trigger.kill();
      });
    }
    
    // Clean up page scroll blur
    if (typeof window.unmountPageScrollBlur === 'function') {
      window.unmountPageScrollBlur();
    }
    
    // Clean up any page-specific animations/intervals
    // This will be called from main.js if needed
    if (typeof window.cleanupPageAnimations === 'function') {
      window.cleanupPageAnimations();
    }
    
    const mainContent = document.getElementById('app-content');
    if (mainContent && mainContent.innerHTML.trim() !== '' && this.gsap) {
      // Ensure black background is maintained during transition
      mainContent.style.backgroundColor = '#000000';
      document.body.style.backgroundColor = '#000000';
      document.documentElement.style.backgroundColor = '#000000';
      
      // Create black overlay to prevent white flash
      let overlay = document.getElementById('transition-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'transition-overlay';
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000000; z-index: 9999; pointer-events: none; opacity: 0;';
        document.body.appendChild(overlay);
      }
      
      return new Promise((resolve) => {
        // Fade in overlay as content fades out
        this.gsap.to(overlay, {
          opacity: 1,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            // Fade out content
            this.gsap.to(mainContent, {
              opacity: 0,
              y: 20,
              duration: 0.2,
              ease: 'power2.in',
              onComplete: resolve
            });
          }
        });
      });
    }
    return Promise.resolve();
  }

  async transitionIn() {
    const mainContent = document.getElementById('app-content');
    if (mainContent) {
      // Scroll to top immediately (before any other operations)
      window.scrollTo({ top: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Ensure black background before transition
      mainContent.style.backgroundColor = '#000000';
      document.body.style.backgroundColor = '#000000';
      document.documentElement.style.backgroundColor = '#000000';
      
      if (this.gsap && mainContent.innerHTML.trim() !== '') {
        // Set initial state immediately to prevent white flash
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.backgroundColor = '#000000';
        
        const overlay = document.getElementById('transition-overlay');
        
        // Use requestAnimationFrame to ensure styles are applied before animation
        return new Promise((resolve) => {
          requestAnimationFrame(() => {
            // Fade in new content
            this.gsap.to(mainContent, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              delay: 0.1,
              onComplete: () => {
                // Fade out overlay after content is visible
                if (overlay) {
                  this.gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power2.out',
                    onComplete: () => {
                      if (overlay && overlay.parentNode) {
                        overlay.remove();
                      }
                      resolve();
                    }
                  });
                } else {
                  resolve();
                }
              }
            });
          });
        });
      } else {
        // Fallback if GSAP not loaded or no content
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
        mainContent.style.backgroundColor = '#000000';
        
        // Remove overlay if it exists
        const overlay = document.getElementById('transition-overlay');
        if (overlay) overlay.remove();
        
        return Promise.resolve();
      }
    }
    return Promise.resolve();
  }
}

export default Router;

