// Main JavaScript entry point
import './input.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Router from './router/index.js';
import { createFooter } from './components/Footer.js';
import { createSectionOne } from './components/SectionOne.js';
import { renderHome } from './pages/Home.js';
import { renderWork } from './pages/Work.js';
import { renderProjectDetail } from './pages/ProjectDetail.js';
import { renderServices } from './pages/Services.js';
import { renderTeam } from './pages/Team.js';
import { renderContact } from './pages/Contact.js';
import { renderNews } from './pages/News.js'; // About Us page
import { renderPrivacy } from './pages/Privacy.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize router
const router = new Router();
router.setGSAP(gsap);


// Welcome screen animation
let welcomeScreenStartTime = null;
let welcomeScreenExited = false;

function initWelcomeScreen() {
  const welcomeScreen = document.getElementById('welcome-screen');
  const welcomeBrand = document.getElementById('welcome-brand');
  const welcomeSeparator = document.getElementById('welcome-separator');
  const welcomeLocation = document.getElementById('welcome-location');
  
  if (!welcomeScreen || !welcomeBrand || !welcomeLocation || !welcomeSeparator) return;
  
  // Prevent body scroll during welcome screen
  document.body.style.overflow = 'hidden';
  welcomeScreenStartTime = Date.now();
  welcomeScreenExited = false;
  
  // Set initial positions (off-screen)
  gsap.set(welcomeBrand, {
    x: -80,
    opacity: 0
  });
  
  gsap.set(welcomeLocation, {
    x: 80,
    opacity: 0
  });
  
  gsap.set(welcomeSeparator, {
    opacity: 0
  });
  
  // Intro animation: move towards center
  gsap.to(welcomeBrand, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    delay: 0.2
  });
  
  gsap.to(welcomeLocation, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    delay: 0.2
  });
  
  gsap.to(welcomeSeparator, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    delay: 0.2
  });
}

function exitWelcomeScreen() {
  if (welcomeScreenExited) return;
  
  const welcomeScreen = document.getElementById('welcome-screen');
  const welcomeBrand = document.getElementById('welcome-brand');
  const welcomeSeparator = document.getElementById('welcome-separator');
  const welcomeLocation = document.getElementById('welcome-location');
  
  if (!welcomeScreen || !welcomeBrand || !welcomeLocation || !welcomeSeparator) return;
  
  welcomeScreenExited = true;
  
  // Calculate remaining minimum display time (1.5 seconds)
  const minDisplayTime = 1500;
  const elapsed = Date.now() - (welcomeScreenStartTime || Date.now());
  const remainingTime = Math.max(0, minDisplayTime - elapsed);
  
  setTimeout(() => {
    // Exit animation: move away from center
    gsap.to(welcomeBrand, {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in'
    });
    
    gsap.to(welcomeLocation, {
      x: 80,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in'
    });
    
    gsap.to(welcomeSeparator, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in'
    });
    
    gsap.to(welcomeScreen, {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.in',
      onComplete: () => {
        welcomeScreen.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }, remainingTime);
}

// Initialize app
async function initApp() {
  
  // Initialize welcome screen first
  initWelcomeScreen();
  
  // Render footer (navigation is now in hero section)
  const footerContainer = document.getElementById('footer-container');
  const appContent = document.getElementById('app-content');
  
  if (footerContainer) footerContainer.innerHTML = createFooter();
  
  // Set up routes
  router.addRoute('home', async () => {
    try {
      if (appContent) {
        const currentRoute = getCurrentRoute();
        appContent.innerHTML = renderHome(currentRoute);
        updateNavigationArrows(currentRoute);
        updateFooterLinks(currentRoute);
        
        await initPageAnimations();
        // Initialize navigation after hero is rendered
        initNavigation();
        initMobileMenu();
        // Initialize Unicorn Studio
        initUnicornStudio();
      }
    } catch (error) {
      console.error('Error loading home page:', error);
      if (appContent) appContent.innerHTML = '<section class="pt-32 pb-20 px-5"><div class="max-w-7xl mx-auto"><h1 class="text-4xl font-bold">Error loading page</h1></div></section>';
    }
  });
  
  // Helper function to get current route
  function getCurrentRoute() {
    let path = window.location.pathname.slice(1);
    if (path === '' || path === '/') path = 'home';
    return path;
  }

  // Helper function to update navigation arrows based on active route
  function updateNavigationArrows(currentRoute) {
    const navLinks = document.querySelectorAll('[data-nav-item]');
    navLinks.forEach(link => {
      const navItem = link.getAttribute('data-nav-item');
      const arrow = link.querySelector('.nav-arrow');
      
      // Determine the base route for comparison (e.g., 'work' for '/work/dtrax')
      const baseRoute = currentRoute.split('/')[0];

      if (arrow) {
        arrow.style.display = navItem === baseRoute ? 'inline' : 'none';
      }

      // Make active link non-clickable and red
      if (navItem === baseRoute) {
        link.style.pointerEvents = 'none';
        link.style.cursor = 'default';
        link.classList.remove('hover:text-vici-red'); // Remove hover effect
        link.style.color = '#DC2626'; // Set to red (vici-red)
      } else {
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        link.classList.add('hover:text-vici-red');
      }
    });
  }

  // Helper function to update footer links based on active route
  function updateFooterLinks(currentRoute) {
    const footerLinks = document.querySelectorAll('footer a[data-route]');
    const baseRoute = currentRoute.split('/')[0];
    
    footerLinks.forEach(link => {
      const route = link.getAttribute('data-route');
      const linkText = link.textContent.trim();
      const cleanText = linkText.replace(/^→\s*/, ''); // Remove arrow if present
      
      // Handle home route
      if (route === 'home' && (baseRoute === 'home' || baseRoute === '')) {
        link.style.color = '#DC2626'; // vici-red
        link.style.pointerEvents = 'none';
        link.style.cursor = 'default';
        link.classList.remove('hover:text-vici-red');
        // Add arrow for active state
        link.innerHTML = `→ ${cleanText}`;
      } else if (route === baseRoute) {
        link.style.color = '#DC2626'; // vici-red
        link.style.pointerEvents = 'none';
        link.style.cursor = 'default';
        link.classList.remove('hover:text-vici-red');
        // Add arrow for active state
        link.innerHTML = `→ ${cleanText}`;
      } else {
        link.style.color = '';
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        link.classList.add('hover:text-vici-red');
        // Remove arrow for inactive state
        link.innerHTML = cleanText;
      }
    });
  }

  // Helper function to get project title by projectId
  function getProjectTitle(projectId) {
    const projects = {
      // Brand Design
      'dtrax-brand': "D'TRAX > BRANDING AND IDENTITY",
      'first-advisory-brand': 'FIRST ADVISORY > BRAND DESIGN',
      'gobrainly': 'GOBRAINLY > BRAND IDENTITY',
      'lumiere-consulting-brand': 'LUMIERE CONSULTING > BRAND DESIGN',
      // Product Design
      'dtrax-product': "D'TRAX > WEBSITE DESIGN & DEVELOPMENT",
      'first-advisory-product': 'FIRST ADVISORY > WEBSITE DESIGN & DEVELOPMENT',
      'loong-colorectal': 'LOONG COLORECTAL > WEBSITE DESIGN & DEVELOPMENT',
      'lumiere-consulting-product': 'LUMIERE CONSULTING > WEBSITE DESIGN & DEVELOPMENT',
      'ridm': 'RiDM > WEBSITE DESIGN & DEVELOPMENT',
      // Content Production
      'acw-group': 'ACW GROUP > CONTENT PRODUCTION',
      'banking-circle': 'BANKING CIRCLE > CONTENT PRODUCTION',
      'dtrax-mitsui': "D'TRAX X MITSUI CHEMICALS > CONTENT PRODUCTION",
      'loong-colorectal-content': 'LOONG COLORECTAL > CONTENT PRODUCTION',
      'singapore-pools': 'SINGAPORE POOLS > CONTENT PRODUCTION',
      'drum-awards': 'THE DRUM AWARDS > AWARD NIGHT HIGHLIGHTS',
      // AI Products
      'clard': 'CLARD > AI PRODUCT'
    };
    return projects[projectId] || '';
  }

  // Helper function to render non-home pages with section 1
  function renderPageWithSectionOne(pageContent, currentRoute, title = '') {
    return createSectionOne(currentRoute, title) + pageContent;
  }

  router.addRoute('work', async () => {
    if (appContent) {
      const currentRoute = getCurrentRoute();
      const pageContent = renderWork();
        appContent.innerHTML = renderPageWithSectionOne(pageContent, currentRoute);
        updateNavigationArrows(currentRoute);
        updateFooterLinks(currentRoute);
        initNavigation();
      initMobileMenu();
      initWorkFilters();
      // Initialize Unicorn Studio for work page
      initUnicornStudioWork();
    }
  });

  // All project slugs
  const projectSlugs = [
    'dtrax-brand', 'first-advisory-brand', 'gobrainly', 'lumiere-consulting-brand',
    'dtrax-product', 'first-advisory-product', 'loong-colorectal', 'lumiere-consulting-product', 'ridm',
    'acw-group', 'banking-circle', 'dtrax-mitsui', 'loong-colorectal-content', 'singapore-pools', 'drum-awards',
    'clard'
  ];

  // Generic project detail route handler
  projectSlugs.forEach(slug => {
    router.addRoute(`work/${slug}`, async () => {
      if (appContent) {
        const currentRoute = getCurrentRoute();
        const projectTitle = getProjectTitle(slug);
        const pageContent = renderProjectDetail(slug);
        appContent.innerHTML = renderPageWithSectionOne(pageContent, currentRoute, projectTitle);
        updateNavigationArrows('work');
        updateFooterLinks('work');
        initNavigation();
        initMobileMenu();
        // Initialize Unicorn Studio for work page
        initUnicornStudioWork();
      }
    });
  });

  router.addRoute('services', async () => {
    if (appContent) {
      const currentRoute = getCurrentRoute();
      const pageContent = renderServices();
        appContent.innerHTML = renderPageWithSectionOne(pageContent, currentRoute);
        updateNavigationArrows(currentRoute);
        updateFooterLinks(currentRoute);
        initNavigation();
      initMobileMenu();
      // Initialize Unicorn Studio for services page
      initUnicornStudioSectionOne('qn4S1BwsQmlLqLzudSQx');
    }
  });

  router.addRoute('team', async () => {
    if (appContent) {
      const currentRoute = getCurrentRoute();
      const pageContent = renderTeam();
        appContent.innerHTML = renderPageWithSectionOne(pageContent, currentRoute);
        updateNavigationArrows(currentRoute);
        updateFooterLinks(currentRoute);
        initNavigation();
      initMobileMenu();
      // Initialize Unicorn Studio for team page
      initUnicornStudioSectionOne('QZDPom0n1lRI4LwoRHVV');
    }
  });

  router.addRoute('contact', async () => {
    if (appContent) {
      const currentRoute = getCurrentRoute();
      const pageContent = renderContact();
        appContent.innerHTML = renderPageWithSectionOne(pageContent, currentRoute);
        updateNavigationArrows(currentRoute);
        updateFooterLinks(currentRoute);
        initNavigation();
      initMobileMenu();
      initContactForm();
      // Initialize Unicorn Studio for contact page
      initUnicornStudioSectionOne('f6xgIjnKSrj2Y8hxLDvj');
    }
  });

  router.addRoute('about', async () => {
    if (appContent) {
      const currentRoute = getCurrentRoute();
      const pageContent = renderNews();
        appContent.innerHTML = renderPageWithSectionOne(pageContent, currentRoute);
        updateNavigationArrows(currentRoute);
        updateFooterLinks(currentRoute);
        initNavigation();
      initMobileMenu();
      // Initialize Unicorn Studio for about page
      initUnicornStudioSectionOne('iqAn0SO7cFo2O3Z5dZw0');
    }
  });

  router.addRoute('privacy', async () => {
    if (appContent) {
      const currentRoute = getCurrentRoute();
      appContent.innerHTML = renderPrivacy();
      updateNavigationArrows(currentRoute);
      updateFooterLinks(currentRoute);
      initNavigation();
      initMobileMenu();
    }
  });

  router.addRoute('404', async () => {
    if (appContent) {
      const currentRoute = getCurrentRoute();
      const pageContent = '<section class="py-20 px-5"><div class="max-w-7xl mx-auto"><h1 class="text-4xl font-bold text-vici-white">Page Not Found</h1></div></section>';
        appContent.innerHTML = renderPageWithSectionOne(pageContent, currentRoute);
        updateNavigationArrows(currentRoute);
        updateFooterLinks(currentRoute);
        initNavigation();
      initMobileMenu();
    }
  });

  // Initialize Work page filters
  function initWorkFilters() {
    const filterButtons = document.querySelectorAll('.work-filter-btn');
    const projectItems = document.querySelectorAll('.work-project-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => {
          btn.classList.remove('active', 'border-vici-red', 'text-vici-white');
          btn.classList.add('border-transparent', 'text-vici-white/60');
        });
        button.classList.add('active', 'border-vici-red', 'text-vici-white');
        button.classList.remove('border-transparent', 'text-vici-white/60');

        // Filter projects
        projectItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Initialize Contact form with Web3Forms
  function initContactForm() {
    const form = document.getElementById('contact-form');
    
    // Create toast element and append to body if it doesn't exist
    let toast = document.getElementById('contact-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'contact-toast';
      toast.className = 'fixed top-0 left-0 right-0 z-[9999] flex justify-center pointer-events-none hidden';
      toast.style.position = 'fixed';
      toast.style.top = '0';
      toast.style.left = '0';
      toast.style.right = '0';
      toast.style.zIndex = '9999';
      toast.innerHTML = `
        <div id="toast-content" class="w-full max-w-md mx-5 mt-5 md:mt-6 bg-vici-black border border-vici-white/10 rounded-sm p-4 md:p-5 shadow-2xl pointer-events-auto transform transition-all duration-300 -translate-y-full opacity-0">
          <div class="flex items-start gap-3 md:gap-4">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg id="toast-icon" class="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 id="toast-title" class="text-base md:text-lg font-medium text-vici-white mb-1">Success!</h3>
              <p id="toast-message" class="text-sm md:text-base text-vici-white/80 leading-relaxed"></p>
            </div>
            <button id="toast-close" class="flex-shrink-0 text-vici-white/60 hover:text-vici-white transition-colors ml-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(toast);
    }
    
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    const toastClose = document.getElementById('toast-close');

    // Function to show toast
    function showToast(title, message, isSuccess = true) {
      if (!toast || !toastTitle || !toastMessage || !toastIcon) return;

      toastTitle.textContent = title;
      toastMessage.textContent = message;
      
      // Update icon based on success/error
      const iconContainer = toastIcon.parentElement;
      if (isSuccess) {
        toastIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
        toastIcon.classList.remove('text-vici-red', 'text-red-500');
        toastIcon.classList.add('text-green-500');
        // Update background color of icon container
        if (iconContainer) {
          iconContainer.className = iconContainer.className.replace(/bg-\S+/g, 'bg-green-500/20');
        }
      } else {
        toastIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
        toastIcon.classList.remove('text-green-500', 'text-vici-red');
        toastIcon.classList.add('text-red-500');
        // Update background color of icon container for errors
        if (iconContainer) {
          iconContainer.className = iconContainer.className.replace(/bg-\S+/g, 'bg-red-500/20');
        }
      }

      // Show toast with slide-in animation from top
      toast.classList.remove('hidden');
      setTimeout(() => {
        const toastContent = document.getElementById('toast-content');
        if (toastContent) {
          toastContent.style.opacity = '1';
          toastContent.style.transform = 'translateY(0)';
        }
      }, 10);

      // Auto-hide after 5 seconds
      setTimeout(() => {
        hideToast();
      }, 5000);
    }

    // Function to hide toast
    function hideToast() {
      if (!toast) return;
      const toastContent = document.getElementById('toast-content');
      if (toastContent) {
        toastContent.style.opacity = '0';
        toastContent.style.transform = 'translateY(-100%)';
      }
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 300);
    }

    // Close button handler
    if (toastClose) {
      toastClose.addEventListener('click', hideToast);
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'SENDING...';
        submitButton.disabled = true;

        // Hide any previous toast
        hideToast();

        try {
          // Get form data
          const formData = new FormData(form);
          
          // Send form to Web3Forms
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });

          const result = await response.json();

          if (result.success) {
            // Reset form
            form.reset();
            // Show success toast
            showToast('Success!', 'Thank you! Your message has been sent. We\'ll get back to you soon.', true);
          } else {
            throw new Error(result.message || 'Form submission failed');
          }
        } catch (error) {
          console.error('Web3Forms Error:', error);
          // Show error toast
          showToast('Error', 'Sorry, there was an error sending your message. Please try again.', false);
        } finally {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }
      });
    }
  }
  
  // Handle initial route after everything is set up
  await router.handleInitialRoute();
  
  // Exit welcome screen after initial route is loaded
  exitWelcomeScreen();
  
  // Initialize cookie notice
  initCookieNotice();
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Initialize footer animations
  initFooterAnimations();
}

// Footer animations
function initFooterAnimations() {
  const footerItems = document.querySelectorAll('.footer-item');
  
  if (footerItems.length > 0) {
    footerItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item.closest('footer'),
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }
}

// Scroll to top functionality
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.pointerEvents = 'auto';
      } else {
        scrollToTopBtn.style.opacity = '0.5';
        scrollToTopBtn.style.pointerEvents = 'none';
      }
    });
    
    // Initial state
    scrollToTopBtn.style.opacity = '0.5';
    scrollToTopBtn.style.pointerEvents = 'none';
  }
}

// Initialize portfolio carousel with hover scroll and auto-scroll
function initPortfolioScroll() {
  const scrollContainer = document.getElementById('portfolio-scroll-container') || document.querySelector('.portfolio-carousel');
  const trackerMarks = document.querySelectorAll('.portfolio-tracker-mark[data-index]');
  const titles = document.querySelectorAll('.portfolio-title');
  const imageItems = document.querySelectorAll('.portfolio-carousel-item');
  
  if (!scrollContainer || !imageItems.length) {
    console.warn('Portfolio carousel elements not found');
    return;
  }

  let currentIndex = 0;
  let autoScrollInterval = null;
  let isHovering = false;
  let isUserScrolling = false;

  // Throttle function for performance
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Function to update which carousel item is active (optimized)
  function updatePortfolioTracking() {
    const scrollTop = scrollContainer.scrollTop;
    const containerHeight = scrollContainer.clientHeight;
    const itemHeight = containerHeight;
    
    // Calculate active index based on scroll position (much faster than getBoundingClientRect)
    const activeIndex = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(activeIndex, imageItems.length - 1));
    
    if (clampedIndex === currentIndex) return; // Skip if no change
    
    currentIndex = clampedIndex;
    
    // Update active tracker mark (only update changed items)
    trackerMarks.forEach((mark, index) => {
      if (index === currentIndex) {
        mark.classList.add('active');
      } else {
        mark.classList.remove('active');
      }
    });
    
    // Update active title (only update changed items)
    titles.forEach((title, index) => {
      if (index === currentIndex) {
        title.classList.add('active');
      } else {
        title.classList.remove('active');
      }
    });
  }
  
  // Throttled version for scroll events
  const throttledUpdateTracking = throttle(updatePortfolioTracking, 100);

  // Function to scroll to next item (optimized)
  function scrollToNext() {
    if (!scrollContainer || imageItems.length === 0) return;
    
    const itemHeight = scrollContainer.clientHeight;
    const nextIndex = (currentIndex + 1) % imageItems.length;
    const targetScroll = nextIndex * itemHeight;
    
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      scrollContainer.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    });
  }

  // Function to start auto-scroll
  function startAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
    
    autoScrollInterval = setInterval(() => {
      if (!isHovering && !isUserScrolling) {
        scrollToNext();
      }
    }, 2000); // 2 second interval
  }

  // Function to stop auto-scroll
  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  // Handle mouse wheel scroll - allow free scrolling
  scrollContainer.addEventListener('wheel', (e) => {
    // Allow native scrolling with snap - don't prevent default
    isUserScrolling = true;
    
    // Reset user scrolling flag after a delay
    clearTimeout(window.portfolioScrollTimeout);
    window.portfolioScrollTimeout = setTimeout(() => {
      isUserScrolling = false;
    }, 1500);
  }, { passive: true });

  // Handle hover enter - pause auto-scroll
  scrollContainer.addEventListener('mouseenter', () => {
    isHovering = true;
    stopAutoScroll();
  });

  // Handle hover leave - resume auto-scroll
  scrollContainer.addEventListener('mouseleave', () => {
    isHovering = false;
    startAutoScroll();
  });

  // Update tracking on scroll (throttled for performance)
  scrollContainer.addEventListener('scroll', () => {
    throttledUpdateTracking();
    // Mark as user scrolling when scroll event fires
    isUserScrolling = true;
    clearTimeout(window.portfolioScrollTimeout);
    window.portfolioScrollTimeout = setTimeout(() => {
      isUserScrolling = false;
    }, 1500);
  }, { passive: true });

  // Initial update
  setTimeout(() => {
    updatePortfolioTracking();
    startAutoScroll();
  }, 100);
  
  // Update on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updatePortfolioTracking();
    }, 200);
  });
}


// Initialize page-specific animations
async function initPageAnimations() {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Hero title animation (optimized - use will-change)
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.style.willChange = 'opacity, transform';
    gsap.fromTo(heroTitle,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out', 
        delay: 0.3,
        onComplete: () => {
          heroTitle.style.willChange = 'auto'; // Remove will-change after animation
        }
      }
    );
  }
  
  // Hero bottom items animation (optimized - batch updates)
  const heroBottomItems = document.querySelectorAll('.hero-bottom-item');
  if (heroBottomItems.length > 0) {
    heroBottomItems.forEach((item) => {
      item.style.willChange = 'opacity, transform';
    });
    
    heroBottomItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power2.out', 
          delay: 0.8 + (index * 0.15),
          onComplete: () => {
            item.style.willChange = 'auto'; // Remove will-change after animation
          }
        }
      );
    });
  }
  
  // Initialize portfolio scroll tracking (homepage only)
  initPortfolioScroll();
}


// Mobile menu
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Function to close mobile menu
  const closeMobileMenu = () => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      gsap.to(mobileMenu, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          mobileMenu.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }
  };
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      gsap.fromTo(mobileMenu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', closeMobileMenu);
  }
  
  // Close menu when any menu link is clicked
  if (mobileMenu) {
    const menuLinks = mobileMenu.querySelectorAll('a[data-route]');
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
}

// Navigation effects
function initNavigation() {
  // Update time displays
  function updateTimes() {
    const now = new Date();
    
    // Singapore time (UTC+8)
    const singaporeTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Singapore"}));
    const singaporeEl = document.getElementById('time-singapore');
    if (singaporeEl) {
      singaporeEl.textContent = singaporeTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    }
    
    // Tokyo time (UTC+9)
    const tokyoTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
    const tokyoEl = document.getElementById('time-tokyo');
    if (tokyoEl) {
      tokyoEl.textContent = tokyoTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    }
    
    // NYC time (UTC-5 or UTC-4 depending on DST)
    const nycTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    const nycEl = document.getElementById('time-nyc');
    if (nycEl) {
      nycEl.textContent = nycTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    }
  }
  
  // Update times immediately and then every minute
  updateTimes();
  setInterval(updateTimes, 60000);
}

// Cookie notice
function initCookieNotice() {
  const cookieNotice = document.getElementById('cookie-notice');
  const acceptCookies = document.getElementById('accept-cookies');
  const rejectCookies = document.getElementById('reject-cookies');

  if (!localStorage.getItem('cookiesDecision') && cookieNotice) {
    cookieNotice.classList.remove('hidden');
    gsap.fromTo(cookieNotice,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 1, ease: 'power2.out' }
    );
  }

  acceptCookies?.addEventListener('click', () => {
    localStorage.setItem('cookiesDecision', 'accepted');
    if (cookieNotice) {
      gsap.to(cookieNotice, {
        y: 100,
        opacity: 0,
        duration: 0.3,
        onComplete: () => cookieNotice.classList.add('hidden')
      });
    }
  });

  rejectCookies?.addEventListener('click', () => {
    localStorage.setItem('cookiesDecision', 'rejected');
    if (cookieNotice) {
      gsap.to(cookieNotice, {
        y: 100,
        opacity: 0,
        duration: 0.3,
        onComplete: () => cookieNotice.classList.add('hidden')
      });
    }
  });
}

// Inject global style to hide branding
function injectBrandingHideStyle() {
  const styleId = 'hide-unicorn-branding';
  if (document.getElementById(styleId)) return;
  
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    /* Hide all Unicorn Studio branding */
    a[href*="unicom"], a[href*="unicorn"], 
    [class*="watermark"], [class*="branding"], 
    [id*="watermark"], [id*="branding"],
    [class*="unicom"], [class*="unicorn"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
      position: absolute !important;
      left: -9999px !important;
      z-index: -9999 !important;
    }
  `;
  document.head.appendChild(style);
}

// Hide Unicorn Studio branding elements - Aggressive approach
function hideUnicornStudioBranding() {
  injectBrandingHideStyle();
  
  // All project IDs
  const projectIds = [
    's6hmZ9QhgQ5a94uYlbFY', // Home
    'zhXexu1MI0SPKztgMvk7', // Work
    'qn4S1BwsQmlLqLzudSQx', // Services
    'QZDPom0n1lRI4LwoRHVV', // Team
    'f6xgIjnKSrj2Y8hxLDvj', // Contact
    'iqAn0SO7cFo2O3Z5dZw0'  // News
  ];
  
  const embedElements = projectIds.map(id => document.querySelector(`[data-us-project="${id}"]`)).filter(el => el);
  const heroSection = document.getElementById('hero-section');
  const sectionOne = document.getElementById('section-one');
  
  if (embedElements.length === 0 && !heroSection && !sectionOne) return;

  // Comprehensive list of selectors
  const selectors = [
    'a[href*="unicorn"]',
    'a[href*="unicornstudio"]',
    'a[href*="unicom"]',
    'a[href*="unicom.studio"]',
    'a[href*="unicorn.studio"]',
    '.us-watermark',
    '.unicorn-watermark',
    '.unicom-watermark',
    '[class*="watermark"]',
    '[class*="branding"]',
    '[id*="watermark"]',
    '[id*="branding"]',
    '[class*="unicorn"]',
    '[class*="unicom"]',
    '[data-us-watermark]',
    '[data-us-branding]',
    '[style*="position: fixed"]',
    '[style*="position:absolute"]',
    '[style*="bottom"]',
    '[style*="right"]'
  ];

  // Aggressive function to hide element
  function hideElement(el) {
    if (!el || el.dataset.hiddenByUs === 'true') return;
    
    try {
      // Mark as hidden
      el.dataset.hiddenByUs = 'true';
      
      // Remove from DOM completely
      if (el.parentNode) {
        el.remove();
      } else {
        // If already removed, set all hiding styles
        el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; width: 0 !important; height: 0 !important; overflow: hidden !important; position: absolute !important; left: -9999px !important; z-index: -9999 !important;';
      }
    } catch (e) {
      // Fallback to style hiding
      try {
        el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; width: 0 !important; height: 0 !important; overflow: hidden !important; position: absolute !important; left: -9999px !important; z-index: -9999 !important;';
      } catch (e2) {
        // Ignore errors
      }
    }
  }

  // Function to check text content
  function hideByTextContent(element) {
    if (!element || element.dataset.hiddenByUs === 'true') return;
    
    try {
      const text = (element.textContent || element.innerText || '').toLowerCase();
      if (text.includes('made with') || 
          text.includes('unicom.studio') || 
          text.includes('unicorn.studio') ||
          text.includes('unicom') ||
          text.includes('unicorn studio') ||
          text.includes('unicornstudio')) {
        hideElement(element);
      }
    } catch (e) {
      // Ignore errors
    }
  }

  // Hide by selectors in all embed elements
  embedElements.forEach(embedElement => {
    if (embedElement) {
      selectors.forEach(selector => {
        try {
          const elements = embedElement.querySelectorAll(selector);
          elements.forEach(hideElement);
        } catch (e) {
          // Ignore selector errors
        }
      });

      // Hide by text content
      const allElements = embedElement.querySelectorAll('*');
      allElements.forEach(hideByTextContent);
    }
  });

  // Also check in hero section
  if (heroSection) {
    selectors.forEach(selector => {
      try {
        const elements = heroSection.querySelectorAll(selector);
        elements.forEach(hideElement);
      } catch (e) {
        // Ignore selector errors
      }
    });

    // Hide by text content in hero section
    const heroElements = heroSection.querySelectorAll('*');
    heroElements.forEach(hideByTextContent);
  }

  // Check fixed/absolute positioned elements (common for watermarks)
  if (heroSection) {
    const allFixed = heroSection.querySelectorAll('*');
    allFixed.forEach(el => {
      try {
        const style = window.getComputedStyle(el);
        if ((style.position === 'fixed' || style.position === 'absolute') && 
            (style.bottom !== 'auto' || style.right !== 'auto')) {
          const text = (el.textContent || el.innerText || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicom') || text.includes('unicorn')) {
            hideElement(el);
          }
        }
      } catch (e) {
        // Ignore errors
      }
    });
  }

  // Also check in section-one
  if (sectionOne) {
    selectors.forEach(selector => {
      try {
        const elements = sectionOne.querySelectorAll(selector);
        elements.forEach(hideElement);
      } catch (e) {
        // Ignore selector errors
      }
    });

    // Hide by text content in section-one
    const sectionOneElements = sectionOne.querySelectorAll('*');
    sectionOneElements.forEach(hideByTextContent);

    // Check fixed/absolute positioned elements
    const allFixed = sectionOne.querySelectorAll('*');
    allFixed.forEach(el => {
      try {
        const style = window.getComputedStyle(el);
        if ((style.position === 'fixed' || style.position === 'absolute') && 
            (style.bottom !== 'auto' || style.right !== 'auto')) {
          const text = (el.textContent || el.innerText || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicom') || text.includes('unicorn')) {
            hideElement(el);
          }
        }
      } catch (e) {
        // Ignore errors
      }
    });
  }

  // Use MutationObserver to hide any dynamically added branding
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          selectors.forEach(selector => {
            try {
              if (node.matches && node.matches(selector)) {
                hideElement(node);
              }
              const children = node.querySelectorAll ? node.querySelectorAll(selector) : [];
              children.forEach(hideElement);
            } catch (e) {
              // Ignore errors
            }
          });
          
          // Also check text content
          hideByTextContent(node);
        }
      });
    });
  });

  // Observe all embed elements
  embedElements.forEach(embedElement => {
    if (embedElement) {
      observer.observe(embedElement, {
        childList: true,
        subtree: true
      });
    }
  });

  // Also observe hero section
  if (heroSection) {
    observer.observe(heroSection, {
      childList: true,
      subtree: true
    });
  }

  // Also observe section-one
  if (sectionOne) {
    observer.observe(sectionOne, {
      childList: true,
      subtree: true
    });
  }
}

// Initialize Unicorn Studio embed - Fresh implementation
function initUnicornStudio() {
  // SSR safety check
  if (typeof window === 'undefined') {
    return;
  }

  // Clear any existing branding interval to prevent duplicates
  if (window.brandingInterval) {
    clearInterval(window.brandingInterval);
    window.brandingInterval = null;
  }

  // Check if embed element exists in DOM
  const embedElement = document.querySelector('[data-us-project="s6hmZ9QhgQ5a94uYlbFY"]');
  
  // If embed element doesn't exist, reset initialization state (page was navigated away)
  if (!embedElement) {
    console.log('Unicorn Studio embed element not found, resetting initialization state');
    if (window.UnicornStudio) {
      window.UnicornStudio.isInitialized = false;
    }
    return;
  }

  // If already initialized and element exists, force refresh to get updated project
  if (window.UnicornStudio && window.UnicornStudio.isInitialized && embedElement) {
    console.log('Unicorn Studio already initialized, forcing refresh for updated project...');
    // Clear any cached data and force re-initialization
    if (typeof UnicornStudio !== 'undefined' && typeof UnicornStudio.init === 'function') {
      try {
        // Clear the embed element's innerHTML to force fresh render
        embedElement.innerHTML = '';
        // Force re-initialization to load updated project
        UnicornStudio.init();
        resumeUnicornStudio();
        hideUnicornStudioBranding();
        // Keep hiding branding periodically (store interval ID for cleanup)
        window.brandingInterval = setInterval(() => hideUnicornStudioBranding(), 1000);
      } catch (error) {
        console.error('Error re-initializing Unicorn Studio:', error);
      }
    }
    return;
  }

  // Use IntersectionObserver for lazy loading and pause/resume (performance optimization)
  let isVisible = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isVisible) {
        isVisible = true;
        if (!window.UnicornStudio?.isInitialized) {
          observer.unobserve(entry.target);
          loadUnicornStudio();
        } else {
          // Resume if already initialized
          resumeUnicornStudio();
        }
        } else if (!entry.isIntersecting && isVisible) {
        isVisible = false;
        // Pause when not visible to save resources
        pauseUnicornStudio();
      }
      
      // Start performance monitoring when visible
      if (entry.isIntersecting && isVisible) {
        setTimeout(() => monitorUnicornStudioPerformance(), 1000);
      }
    });
  }, { 
    rootMargin: '50px', // Reduced from 100px for better performance
    threshold: 0.1 
  });

  // Inject style immediately
  injectBrandingHideStyle();
  
  // Start hiding branding immediately and continuously (store interval ID for cleanup)
  hideUnicornStudioBranding();
  window.brandingInterval = setInterval(() => hideUnicornStudioBranding(), 1000);

  // Wait for DOM to be ready (shorter delay for faster initialization)
  setTimeout(() => {
    // Re-check embed element (it should exist from earlier check, but verify)
    const embedElementCheck = document.querySelector('[data-us-project="s6hmZ9QhgQ5a94uYlbFY"]');
    
    if (!embedElementCheck) {
      console.warn('Unicorn Studio embed element not found after delay');
      return;
    }

    // Observe the hero section for lazy loading
    const section = embedElementCheck.closest('#hero-section');
    if (section && 'IntersectionObserver' in window) {
      observer.observe(section);
      console.log('Observing hero section for Unicorn Studio embed');
    } else {
      // Fallback: load immediately if IntersectionObserver not supported
      console.log('IntersectionObserver not supported, loading Unicorn Studio immediately');
      loadUnicornStudio();
    }
  }, 100);

  function loadUnicornStudio() {
    // Always remove existing script to force fresh load
    const existingScript = document.querySelector('script[src*="unicornstudio.js"]');
    if (existingScript) {
      existingScript.remove();
      // Reset initialization state
      if (window.UnicornStudio) {
        window.UnicornStudio.isInitialized = false;
      }
    }
    
    // Clear embed element to force fresh render
    const embedElement = document.querySelector('[data-us-project="s6hmZ9QhgQ5a94uYlbFY"]');
    if (embedElement) {
      embedElement.innerHTML = '';
    }

    // Load script from CDN with cache-busting timestamp to ensure latest version
    window.UnicornStudio = window.UnicornStudio || { isInitialized: false };
    
    const script = document.createElement('script');
    // Add cache-busting parameter to force refresh of updated projects
    const cacheBuster = new Date().getTime();
    script.src = `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js?v=${cacheBuster}`;
    script.async = true;
    script.defer = true; // Defer loading for better performance
    
    script.onload = function() {
      // Wait a bit for the library to be fully available
      const checkInit = setInterval(() => {
        if (typeof UnicornStudio !== 'undefined' && typeof UnicornStudio.init === 'function') {
          clearInterval(checkInit);
          try {
            // Only initialize if section is visible
            if (isVisible) {
              // Clear embed element to force fresh render of updated project
              const embedElement = document.querySelector('[data-us-project="s6hmZ9QhgQ5a94uYlbFY"]');
              if (embedElement) {
                embedElement.innerHTML = '';
              }
              // Initialize to load updated project
              UnicornStudio.init();
              window.UnicornStudio.isInitialized = true;
              
              // Hide branding immediately and repeatedly
              hideUnicornStudioBranding();
              setTimeout(() => hideUnicornStudioBranding(), 100);
              setTimeout(() => hideUnicornStudioBranding(), 500);
              setTimeout(() => hideUnicornStudioBranding(), 1000);
              setTimeout(() => hideUnicornStudioBranding(), 2000);
              
              // Keep checking periodically (store interval ID for cleanup)
              if (window.brandingInterval) {
                clearInterval(window.brandingInterval);
              }
              window.brandingInterval = setInterval(() => hideUnicornStudioBranding(), 2000);
            }
          } catch (error) {
            console.error('Error calling UnicornStudio.init():', error);
          }
        }
      }, 50);
      
      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkInit);
        if (!window.UnicornStudio.isInitialized && isVisible) {
          console.error('Unicorn Studio failed to initialize within timeout');
        }
      }, 5000);
    };
    
    script.onerror = function() {
      console.error('Failed to load Unicorn Studio script from CDN');
    };
    
    document.head.appendChild(script);
  }

  // Pause Unicorn Studio when not visible (performance optimization)
  function pauseUnicornStudio() {
    if (typeof UnicornStudio !== 'undefined' && window.UnicornStudio?.isInitialized) {
      try {
        const embedElement = document.querySelector('[data-us-project="s6hmZ9QhgQ5a94uYlbFY"]');
        if (embedElement) {
          // Find canvas and pause rendering
          const canvas = embedElement.querySelector('canvas');
          if (canvas) {
            // Store original display if not already stored
            if (!canvas.dataset.originalDisplay) {
              canvas.dataset.originalDisplay = window.getComputedStyle(canvas).display || 'block';
            }
            // Hide canvas to stop rendering
            canvas.style.display = 'none';
            // Remove will-change hint when paused
            canvas.style.willChange = 'auto';
          }
          // Also pause any iframes
          const iframe = embedElement.querySelector('iframe');
          if (iframe) {
            iframe.style.display = 'none';
          }
        }
      } catch (error) {
        console.warn('Error pausing Unicorn Studio:', error);
      }
    }
  }

  // Resume Unicorn Studio when visible (performance optimization)
  function resumeUnicornStudio() {
    if (typeof UnicornStudio !== 'undefined' && window.UnicornStudio?.isInitialized) {
      try {
        const embedElement = document.querySelector('[data-us-project="s6hmZ9QhgQ5a94uYlbFY"]');
        if (embedElement) {
          const canvas = embedElement.querySelector('canvas');
          if (canvas) {
            // Restore canvas display
            canvas.style.display = canvas.dataset.originalDisplay || 'block';
            // Re-add will-change hint for performance
            canvas.style.willChange = 'transform';
          }
          // Resume iframes
          const iframe = embedElement.querySelector('iframe');
          if (iframe) {
            iframe.style.display = 'block';
          }
        }
      } catch (error) {
        console.warn('Error resuming Unicorn Studio:', error);
      }
    }
  }

  // Monitor performance and adjust settings if needed
  function monitorUnicornStudioPerformance() {
    if (typeof UnicornStudio === 'undefined' || !window.UnicornStudio?.isInitialized) {
      return;
    }

    const embedElement = document.querySelector('[data-us-project="s6hmZ9QhgQ5a94uYlbFY"]');
    if (!embedElement) return;

    const canvas = embedElement.querySelector('canvas');
    if (!canvas) return;

    // Monitor frame rate (simple check)
    let lastTime = performance.now();
    let frameCount = 0;
    let lowFPSDetected = false;

    function checkFPS() {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // If FPS is consistently low, reduce quality
        if (fps < 20 && !lowFPSDetected && isVisible) {
          lowFPSDetected = true;
          console.warn('Low FPS detected, reducing Unicorn Studio quality');
          
          // Dynamically reduce scale if possible
          if (embedElement.dataset.usScale) {
            const currentScale = parseFloat(embedElement.dataset.usScale);
            if (currentScale > 0.5) {
              embedElement.dataset.usScale = (currentScale - 0.1).toFixed(2);
            }
          }
        } else if (fps >= 30 && lowFPSDetected) {
          lowFPSDetected = false;
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isVisible) {
        requestAnimationFrame(checkFPS);
      }
    }

    if (isVisible) {
      requestAnimationFrame(checkFPS);
    }
  }
}

// Initialize Unicorn Studio for work page Section 1
function initUnicornStudioWork() {
  initUnicornStudioSectionOne('zhXexu1MI0SPKztgMvk7');
}

// Generic function to initialize Unicorn Studio for Section 1 pages
function initUnicornStudioSectionOne(projectId) {
  // SSR safety check
  if (typeof window === 'undefined') {
    return;
  }

  // Wait for DOM to be ready
  setTimeout(() => {
    const embedElement = document.querySelector(`[data-us-project="${projectId}"]`);
    
    if (!embedElement) {
      console.warn(`Unicorn Studio embed element not found for project ${projectId}`);
      return;
    }

    // Check if UnicornStudio library is already loaded
    if (typeof UnicornStudio !== 'undefined' && typeof UnicornStudio.init === 'function') {
      // Library already loaded, just initialize this embed
      try {
        UnicornStudio.init();
        console.log(`Unicorn Studio initialized successfully for project ${projectId}`);
        
        // Hide branding
        hideUnicornStudioBranding();
        // Store interval ID for cleanup (reuse existing if present)
        if (window.brandingInterval) {
          clearInterval(window.brandingInterval);
        }
        window.brandingInterval = setInterval(() => hideUnicornStudioBranding(), 1000);
      } catch (error) {
        console.error(`Error initializing Unicorn Studio for project ${projectId}:`, error);
      }
      return;
    }

    // Load Unicorn Studio script if not already loaded
    window.UnicornStudio = window.UnicornStudio || { isInitialized: false };
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js';
    script.async = true;
    script.defer = true;
    
    script.onload = function() {
      const checkInit = setInterval(() => {
        if (typeof UnicornStudio !== 'undefined' && typeof UnicornStudio.init === 'function') {
          clearInterval(checkInit);
          try {
            UnicornStudio.init();
            console.log(`Unicorn Studio initialized successfully for project ${projectId}`);
            
            // Hide branding
            hideUnicornStudioBranding();
            setInterval(() => hideUnicornStudioBranding(), 1000);
          } catch (error) {
            console.error(`Error initializing Unicorn Studio for project ${projectId}:`, error);
          }
        }
      }, 50);
      
      setTimeout(() => {
        clearInterval(checkInit);
      }, 5000);
    };
    
    script.onerror = function() {
      console.error('Failed to load Unicorn Studio script from CDN');
    };
    
    document.head.appendChild(script);
  }, 100);
}

// Initialize app when DOM is ready
async function startApp() {
  try {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', async () => {
        try {
          await initApp();
        } catch (error) {
          console.error('Error initializing app:', error);
          showError();
        }
      });
    } else {
      await initApp();
    }
  } catch (error) {
    console.error('Error initializing app:', error);
    showError();
  }
}

function showError() {
  const appContent = document.getElementById('app-content');
  if (appContent) {
    appContent.innerHTML = `
      <section class="pt-32 pb-20 px-5 min-h-screen flex items-center justify-center bg-vici-white">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4 text-vici-black">Error loading application</h1>
          <p class="text-sm text-vici-black/60 mb-8">Please refresh the page.</p>
          <button onclick="window.location.reload()" class="px-6 py-3 bg-vici-red hover:bg-vici-red/90 text-white transition-colors text-sm font-medium">
            Refresh Page
          </button>
        </div>
      </section>
    `;
  }
}

// Start the application
startApp();
