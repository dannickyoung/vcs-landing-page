// Section 1 Component - For non-home pages (Viewport Height Responsive)
export function createSectionOne(currentRoute = '', title = '') {
  // Get page title if no project title is provided
  const getPageTitle = () => {
    if (title) return title; // Use provided project title
    
    const baseRoute = currentRoute.split('/')[0];
    const pageTitles = {
      'work': 'We craft<br><span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">exceptional</span> brands',
      'services': 'We deliver<br><span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">creative</span> solutions',
      'team': 'Meet our<br><span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">creative</span> minds',
      'contact': 'Let\'s start<br>a <span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">conversation</span>',
      'about': 'We build brands<br>that <span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">conquer</span>',
      'socialmedia-video': 'Made for<br>the <span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">scroll</span>',
      'privacy': 'Privacy <span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">Policy</span>'
    };
    return pageTitles[baseRoute] || '';
  };

  const pageTitle = getPageTitle();
  
  // Check if this is a project detail page (work/slug)
  const isProjectPage = currentRoute.startsWith('work/') && currentRoute !== 'work';
  
  // Split title into two lines - first line left, second line right
  const getTitleLines = (title) => {
    if (!title) return { line1: '', line2: '' };
    
    // Split by <br> if present, otherwise split by words
    if (title.includes('<br>')) {
      const parts = title.split('<br>');
      return { 
        line1: parts[0]?.trim() || '', 
        line2: parts.slice(1).join('<br>').trim() || '' 
      };
    }
    
    // If no <br>, split words roughly in half
    const textOnly = title.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = textOnly.split(' ');
    
    if (words.length <= 1) {
      return { line1: title, line2: '' };
    }
    
    const midPoint = Math.ceil(words.length / 2);
    const line1Words = words.slice(0, midPoint);
    const line2Words = words.slice(midPoint);
    
    // Try to preserve HTML structure
    let line1 = line1Words.join(' ');
    let line2 = line2Words.join(' ');
    
    // If there's a span, try to keep it with the right words
    if (title.includes('<span')) {
      const spanMatch = title.match(/<span[^>]*>(.*?)<\/span>/);
      if (spanMatch) {
        const spanText = spanMatch[1].trim();
        const spanFull = spanMatch[0];
        // Check which line the span text belongs to
        if (line2Words.some(w => spanText.toLowerCase().includes(w.toLowerCase()) || w.toLowerCase().includes(spanText.toLowerCase()))) {
          // Span is in line 2, reconstruct
          const beforeSpan = title.substring(0, title.indexOf(spanFull));
          const afterSpan = title.substring(title.indexOf(spanFull) + spanFull.length);
          line1 = beforeSpan.trim();
          line2 = (spanFull + ' ' + afterSpan).trim();
        } else {
          // Span is in line 1
          const beforeSpan = title.substring(0, title.indexOf(spanFull));
          const afterSpan = title.substring(title.indexOf(spanFull) + spanFull.length);
          line1 = (beforeSpan + ' ' + spanFull).trim();
          line2 = afterSpan.trim();
        }
      }
    }
    
    return { line1, line2 };
  };
  
  const titleLines = getTitleLines(pageTitle);
  const titleHtml = pageTitle ? `
      <!-- Page/Project Title -->
      <div class="absolute inset-0 z-10 flex flex-col justify-center px-5 md:px-8 section-one-title opacity-0">
        <div class="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[1000px] mx-auto">
          ${titleLines.line1 ? `
            <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight text-vici-white text-left">
              ${titleLines.line1}
            </h1>
          ` : ''}
          ${titleLines.line2 ? `
            <div class="text-right mt-2 md:mt-3">
              <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight text-vici-white">
                ${titleLines.line2}
              </h1>
              ${currentRoute === 'work' ? `
                <p class="section-one-subtitle text-[10px] md:text-xs text-vici-white mt-2 md:mt-3" style="text-align: justify; text-align-last: right; max-width: 240px; margin-left: auto; word-spacing: 0.5em; letter-spacing: 0.05em; text-transform: uppercase;">
                  [ Brand identity, digital experiences and content. ]
                </p>
              ` : currentRoute === 'services' ? `
                <p class="section-one-subtitle text-[10px] md:text-xs text-vici-white mt-2 md:mt-3" style="text-align: justify; text-align-last: right; max-width: 240px; margin-left: auto; word-spacing: 0.5em; letter-spacing: 0.05em; text-transform: uppercase;">
                  [ Brand strategy, digital design and creative content. ]
                </p>
              ` : currentRoute === 'team' ? `
                <p class="section-one-subtitle text-[10px] md:text-xs text-vici-white mt-2 md:mt-3" style="text-align: justify; text-align-last: right; max-width: 240px; margin-left: auto; word-spacing: 0.5em; letter-spacing: 0.05em; text-transform: uppercase;">
                  [ Creative minds driving innovative solutions. ]
                </p>
              ` : currentRoute === 'contact' ? `
                <p class="section-one-subtitle text-[10px] md:text-xs text-vici-white mt-2 md:mt-3" style="text-align: justify; text-align-last: right; max-width: 240px; margin-left: auto; word-spacing: 0.5em; letter-spacing: 0.05em; text-transform: uppercase;">
                  [ Let's bring your vision to life together. ]
                </p>
              ` : currentRoute === 'about' ? `
                <p class="section-one-subtitle text-[10px] md:text-xs text-vici-white mt-2 md:mt-3" style="text-align: justify; text-align-last: right; max-width: 240px; margin-left: auto; word-spacing: 0.5em; letter-spacing: 0.05em; text-transform: uppercase;">
                  [ Building brands that stand the test of time. ]
                </p>
              ` : currentRoute === 'socialmedia-video' ? `
                <p class="section-one-subtitle text-[10px] md:text-xs text-vici-white mt-2 md:mt-3" style="text-align: justify; text-align-last: right; max-width: 240px; margin-left: auto; word-spacing: 0.5em; letter-spacing: 0.05em; text-transform: uppercase;">
                  [ Short-form video for social platforms. ]
                </p>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>
  ` : '';

  // Check if this page needs ColorBends background
  const isWorkPage = currentRoute === 'work' || currentRoute.startsWith('work/');
  const isServicesPage = currentRoute === 'services';
  const isTeamPage = currentRoute === 'team';
  const isContactPage = currentRoute === 'contact';
  const isAboutPage = currentRoute === 'about';
  const isPrivacyPage = currentRoute === 'privacy';
  const isSocialMediaVideoPage = currentRoute === 'socialmedia-video';
  const hasColorBends = isWorkPage || isServicesPage || isTeamPage || isContactPage || isAboutPage || isSocialMediaVideoPage;
  
  // ColorBends Background container
  const colorBendsEmbed = hasColorBends ? `
      <!-- ColorBends Background -->
      <div 
        id="color-bends-container-section-one"
        class="absolute inset-0 w-full h-full z-0"
        style="width: 100%; height: 100%; ${isProjectPage ? 'min-height: 66.67vh;' : 'min-height: 100vh;'} pointer-events: auto;"
      ></div>
  ` : '';
  
  return `
    <!-- Section 1 - Navigation Bar (Viewport Height Responsive) -->
    <section class="relative ${isProjectPage ? 'project-page' : ''} h-screen min-h-screen flex flex-col overflow-hidden bg-vici-black" id="section-one">
      ${colorBendsEmbed}
      <!-- Navigation Bar -->
      <nav class="relative z-50 w-full transition-all duration-300 pt-6 md:pt-8 lg:pt-10 opacity-0" id="main-nav">
        <div class="px-5 md:px-8 py-2 flex items-start justify-between relative">
          <!-- Logo Left -->
          <a href="/" data-route="home" class="flex items-center gap-1 sm:gap-1.5 transition-opacity hover:opacity-80">
            <div class="text-vici-white text-xs sm:text-sm font-light tracking-wider">
              <span class="font-bold">VICI STUDIO®</span>
            </div>
            <div class="text-vici-white text-xs sm:text-sm font-light">|</div>
            <div class="text-vici-white text-xs sm:text-sm font-light tracking-wider">
              Singapore
            </div>
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
      ${titleHtml}
      <!-- Down Arrow -->
      <div class="absolute bottom-6 md:bottom-8 right-5 md:right-8 z-20 pointer-events-none section-one-arrow opacity-0">
        <svg class="w-6 h-6 md:w-8 md:h-8 text-vici-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="height: 100%;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22l6-6m-6 6l-6-6m6 6V2"></path>
        </svg>
      </div>
    </section>
  `;
}

