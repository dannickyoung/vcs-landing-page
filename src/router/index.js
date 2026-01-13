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
    }
  }

  async handleRoute() {
    try {
      let path = window.location.pathname.slice(1);
      if (path === '' || path === '/') path = 'home';
      
      const handler = this.routes[path] || this.routes['404'];
      
      if (handler) {
        // Trigger page transition out
        await this.transitionOut();
        
        // Load new page
        await handler();
        
        // Trigger page transition in
        await this.transitionIn();
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
    
    // Clean up any page-specific animations/intervals
    // This will be called from main.js if needed
    if (typeof window.cleanupPageAnimations === 'function') {
      window.cleanupPageAnimations();
    }
    
    const mainContent = document.getElementById('app-content');
    if (mainContent && mainContent.innerHTML.trim() !== '' && this.gsap) {
      return new Promise((resolve) => {
        this.gsap.to(mainContent, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: resolve
        });
      });
    }
    return Promise.resolve();
  }

  async transitionIn() {
    const mainContent = document.getElementById('app-content');
    if (mainContent) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (this.gsap && mainContent.innerHTML.trim() !== '') {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        return new Promise((resolve) => {
          this.gsap.to(mainContent, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.1,
            onComplete: resolve
          });
        });
      } else {
        // Fallback if GSAP not loaded or no content
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
        return Promise.resolve();
      }
    }
    return Promise.resolve();
  }
}

export default Router;

