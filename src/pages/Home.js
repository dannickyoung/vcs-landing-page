// Home Page - Hero Section with Video Background (Monopo-inspired layout)
export function renderHome(currentRoute = 'home') {
  return `
    <!-- Hero Section -->
    <section class="relative h-screen flex flex-col overflow-hidden bg-vici-black" id="hero-section">
      <!-- Unicorn Studio Background -->
      <div 
        class="absolute inset-0 w-full h-full z-0"
        data-us-project="s6hmZ9QhgQ5a94uYlbFY" 
        data-us-production="true"
        data-us-lazyload="true"
        data-us-scale="0.75"
        data-us-dpi="1.0"
        data-us-fps="30"
        style="width: 100%; height: 100%; min-height: 100vh;"
      ></div>
      
      <!-- Bottom Gradient Overlay to Hide Branding -->
      <div class="absolute bottom-0 left-0 right-0 h-48 md:h-56 lg:h-64 xl:h-72 z-10 pointer-events-none" style="background: linear-gradient(to top, #000000 0%, #000000 20%, rgba(0, 0, 0, 0.95) 40%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 100%);"></div>
      
      <!-- Navigation Bar at Top -->
      <nav class="relative z-50 transition-all duration-300 pt-6 md:pt-8 lg:pt-10" id="main-nav">
        <div class="px-5 md:px-8 py-2 flex items-start justify-between relative">
          <!-- Logo Left -->
          <a href="/" data-route="home" class="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img src="/Logo-icon-red.png" alt="VICI Studio" class="h-6 md:h-7 lg:h-8 w-auto max-w-full" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
            <span class="text-sm font-semibold tracking-tight text-vici-white hidden">VICI</span>
          </a>
          
          <!-- Navigation Links Right - Two Columns -->
          <div class="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12">
            <div class="flex flex-col gap-3 md:gap-4 text-xs text-vici-white">
              ${currentRoute === 'home' || currentRoute === '' 
                ? `<span class="nav-link relative inline-flex items-center gap-1 cursor-default text-vici-red" data-nav-item="home">
                    <span class="text-[10px] nav-arrow">▶</span>
                    <span>HOME</span>
                  </span>`
                : `<a href="/" data-route="home" class="nav-link transition-colors hover:text-vici-red relative group inline-flex items-center gap-1" data-nav-item="home">
                    <span class="text-[10px] nav-arrow" style="display: none;">▶</span>
                    <span>HOME</span>
                  </a>`
              }
              ${currentRoute === 'work' || currentRoute.startsWith('work/') 
                ? `<span class="nav-link relative inline-flex items-center gap-1 cursor-default text-vici-red" data-nav-item="work">
                    <span class="text-[10px] nav-arrow">▶</span>
                    <span>WORK</span>
                  </span>`
                : `<a href="/work" data-route="work" class="nav-link transition-colors hover:text-vici-red relative group inline-flex items-center gap-1" data-nav-item="work">
                    <span class="text-[10px] nav-arrow" style="display: none;">▶</span>
                    <span>WORK</span>
                  </a>`
              }
              ${currentRoute === 'services' 
                ? `<span class="nav-link relative inline-flex items-center gap-1 cursor-default text-vici-red" data-nav-item="services">
                    <span class="text-[10px] nav-arrow">▶</span>
                    <span>SERVICES</span>
                  </span>`
                : `<a href="/services" data-route="services" class="nav-link transition-colors hover:text-vici-red relative group inline-flex items-center gap-1" data-nav-item="services">
                    <span class="text-[10px] nav-arrow" style="display: none;">▶</span>
                    <span>SERVICES</span>
                  </a>`
              }
            </div>
            <div class="flex flex-col gap-3 md:gap-4 text-xs text-vici-white">
              ${currentRoute === 'about' 
                ? `<span class="nav-link relative inline-flex items-center gap-1 cursor-default text-vici-red" data-nav-item="about">
                    <span class="text-[10px] nav-arrow">▶</span>
                    <span>ABOUT US</span>
                  </span>`
                : `<a href="/about" data-route="about" class="nav-link transition-colors hover:text-vici-red relative group inline-flex items-center gap-1" data-nav-item="about">
                    <span class="text-[10px] nav-arrow" style="display: none;">▶</span>
                    <span>ABOUT US</span>
                  </a>`
              }
              ${currentRoute === 'team' 
                ? `<span class="nav-link relative inline-flex items-center gap-1 cursor-default text-vici-red" data-nav-item="team">
                    <span class="text-[10px] nav-arrow">▶</span>
                    <span>TEAM</span>
                  </span>`
                : `<a href="/team" data-route="team" class="nav-link transition-colors hover:text-vici-red relative group inline-flex items-center gap-1" data-nav-item="team">
                    <span class="text-[10px] nav-arrow" style="display: none;">▶</span>
                    <span>TEAM</span>
                  </a>`
              }
              ${currentRoute === 'contact' 
                ? `<span class="nav-link relative inline-flex items-center gap-1 cursor-default text-vici-red" data-nav-item="contact">
                    <span class="text-[10px] nav-arrow">▶</span>
                    <span>CONTACT</span>
                  </span>`
                : `<a href="/contact" data-route="contact" class="nav-link transition-colors hover:text-vici-red relative group inline-flex items-center gap-1" data-nav-item="contact">
                    <span class="text-[10px] nav-arrow" style="display: none;">▶</span>
                    <span>CONTACT</span>
                  </a>`
              }
            </div>
          </div>
          
          <button id="menu-toggle" class="md:hidden absolute right-5 text-xs text-vici-white hover:opacity-70 transition-opacity">Menu</button>
        </div>
      </nav>
      
      <!-- Hero Content - Centered Large Text -->
      <div class="relative z-10 flex-1 flex items-center justify-center px-5 md:px-8 py-8 md:py-12">
        <div class="text-center">
              <div class="hero-title opacity-0">
                <img src="/Wordmark_dark.png" alt="VICI STUDIO" class="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 2xl:h-36 w-auto max-w-[90%] sm:max-w-[80%] md:max-w-none mx-auto" />
              </div>
        </div>
      </div>
      
      <!-- Bottom Informational Elements -->
      <div class="relative z-20 w-full pb-6 md:pb-8 lg:pb-12">
        <div class="px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <!-- Bottom Left - Logo & Location -->
          <div class="flex flex-col gap-2 md:gap-3 hero-bottom-item opacity-0">
            <p class="text-xs md:text-sm text-vici-white/80">Across SG, MY & TH</p>
            <p class="text-xs md:text-sm text-vici-white/80">Based in <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Singapore</span></p>
          </div>
          
          <!-- Bottom Middle - Description -->
          <div class="flex flex-col gap-2 md:gap-3 hero-bottom-item opacity-0">
            <p class="text-xs md:text-sm text-vici-white/80"><span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Design-driven</span></p>
            <p class="text-xs md:text-sm text-vici-white/80">creative agency</p>
          </div>
          
          <!-- Bottom Right - Services & Scroll Indicator -->
          <div class="flex flex-col gap-2 md:gap-3 items-start md:items-end hero-bottom-item opacity-0">
            <p class="text-xs md:text-sm text-vici-white/80">Branding, digital</p>
            <p class="text-xs md:text-sm text-vici-white/80">and <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">communications</span></p>
            <div class="mt-2 md:mt-4">
              <svg class="w-4 h-4 md:w-5 md:h-5 text-vici-white/80 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section 2 - Clean Rebuild -->
    <section id="portfolio-section" class="portfolio-section">
      <div class="portfolio-content">
        <div class="portfolio-wrapper">
          <!-- Project Title -->
          <div class="portfolio-title-container">
            <div class="portfolio-title active" data-index="0">
              <p class="portfolio-label">RECENT WORK</p>
              <h3 class="portfolio-heading">D'TRAX > BRANDING AND IDENTITY</h3>
              <p class="portfolio-category">BRAND DESIGN</p>
            </div>
            <div class="portfolio-title" data-index="1">
              <p class="portfolio-label">RECENT WORK</p>
              <h3 class="portfolio-heading">RiDM > WEBSITE DESIGN & DEVELOPMENT</h3>
              <p class="portfolio-category">PRODUCT DESIGN</p>
            </div>
            <div class="portfolio-title" data-index="2">
              <p class="portfolio-label">RECENT WORK</p>
              <h3 class="portfolio-heading">LOONG COLORECTAL > WEBSITE DESIGN & DEVELOPMENT</h3>
              <p class="portfolio-category">PRODUCT DESIGN</p>
            </div>
            <div class="portfolio-title" data-index="3">
              <p class="portfolio-label">RECENT WORK</p>
              <h3 class="portfolio-heading">THE DRUM AWARDS > AWARD NIGHT HIGHLIGHTS</h3>
              <p class="portfolio-category">CONTENT PRODUCTION</p>
            </div>
          </div>

          <!-- Carousel Container with Tracker -->
          <div class="portfolio-carousel-wrapper">
            <!-- Left Tracker -->
            <div class="portfolio-tracker">
              <div class="portfolio-tracker-marks">
                <div class="portfolio-tracker-mark active" data-index="0">
                  <img src="/Logo-icon-red.png" alt="VICI" class="portfolio-tracker-logo">
                </div>
                <div class="portfolio-tracker-ticks">
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                </div>
                <div class="portfolio-tracker-mark" data-index="1">
                  <img src="/Logo-icon-red.png" alt="VICI" class="portfolio-tracker-logo">
                </div>
                <div class="portfolio-tracker-ticks">
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                </div>
                <div class="portfolio-tracker-mark" data-index="2">
                  <img src="/Logo-icon-red.png" alt="VICI" class="portfolio-tracker-logo">
                </div>
                <div class="portfolio-tracker-ticks">
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                  <div class="portfolio-tracker-tick"></div>
                </div>
                <div class="portfolio-tracker-mark" data-index="3">
                  <img src="/Logo-icon-red.png" alt="VICI" class="portfolio-tracker-logo">
                </div>
              </div>
            </div>

            <!-- Red Carousel Container -->
            <div class="portfolio-carousel" id="portfolio-scroll-container">
              <div class="portfolio-carousel-items">
                <div class="portfolio-carousel-item" data-index="0">
                  <img src="/featured_project_1.png" alt="D'TRAX">
                </div>
                <div class="portfolio-carousel-item" data-index="1">
                  <img src="/featured_project_2.png" alt="RiDM">
                </div>
                <div class="portfolio-carousel-item" data-index="2">
                  <img src="/featured_project_3.png" alt="LOONG COLORECTAL">
                </div>
                <div class="portfolio-carousel-item" data-index="3">
                  <img src="/featured_project_4.png" alt="THE DRUM AWARDS">
                </div>
              </div>
            </div>
          </div>

          <!-- Discover Button -->
          <div class="portfolio-button-container">
            <a href="/work" data-route="work" class="portfolio-button">
              DISCOVER ALL PROJECTS <span class="text-vici-red">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

