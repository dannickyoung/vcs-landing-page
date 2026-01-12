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
      'privacy': 'Privacy <span style="font-family: \'Playfair Display\', serif; font-style: italic; font-weight: bold;">Policy</span>'
    };
    return pageTitles[baseRoute] || '';
  };

  const pageTitle = getPageTitle();
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
      <div class="absolute inset-0 z-10 flex flex-col justify-center px-5 md:px-8">
        <div class="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[1000px] mx-auto">
          ${titleLines.line1 ? `
            <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight text-vici-white text-left">
              ${titleLines.line1}
            </h1>
          ` : ''}
          ${titleLines.line2 ? `
            <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight text-vici-white text-right mt-2 md:mt-3">
              ${titleLines.line2}
            </h1>
          ` : ''}
        </div>
      </div>
  ` : '';

  // Check if this page needs Unicorn Studio embed
  const isWorkPage = currentRoute === 'work' || currentRoute.startsWith('work/');
  const isServicesPage = currentRoute === 'services';
  const isTeamPage = currentRoute === 'team';
  const isContactPage = currentRoute === 'contact';
  const isAboutPage = currentRoute === 'about';
  const isPrivacyPage = currentRoute === 'privacy';
  const hasUnicornStudio = isWorkPage || isServicesPage || isTeamPage || isContactPage || isAboutPage;
  
  // Get project ID based on page
  let projectId = '';
  if (isWorkPage) {
    projectId = 'zhXexu1MI0SPKztgMvk7';
  } else if (isServicesPage) {
    projectId = 'qn4S1BwsQmlLqLzudSQx';
  } else if (isTeamPage) {
    projectId = 'QZDPom0n1lRI4LwoRHVV';
  } else if (isContactPage) {
    projectId = 'f6xgIjnKSrj2Y8hxLDvj';
  } else if (isAboutPage) {
    projectId = 'iqAn0SO7cFo2O3Z5dZw0';
  }
  
  // Unicorn Studio embed for pages that need it
  const unicornStudioEmbed = hasUnicornStudio ? `
      <!-- Unicorn Studio Background -->
      <div 
        class="absolute inset-0 w-full h-full z-0"
        data-us-project="${projectId}" 
        data-us-production="true"
        data-us-lazyload="true"
        data-us-scale="0.75"
        data-us-dpi="1.0"
        data-us-fps="30"
        style="width: 100%; height: 100%; min-height: 100vh;"
      ></div>
  ` : '';

  return `
    <!-- Section 1 - Navigation Bar (Viewport Height Responsive) -->
    <section class="relative h-screen min-h-screen flex flex-col overflow-hidden bg-vici-black" id="section-one">
      ${unicornStudioEmbed}
      ${hasUnicornStudio ? '<!-- Bottom Gradient Overlay to Hide Branding --><div class="absolute bottom-0 left-0 right-0 h-48 md:h-56 lg:h-64 xl:h-72 z-10 pointer-events-none" style="background: linear-gradient(to top, #000000 0%, #000000 20%, rgba(0, 0, 0, 0.95) 40%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 100%);"></div>' : ''}
      <!-- Navigation Bar -->
      <nav class="relative z-50 w-full transition-all duration-300 pt-6 md:pt-8 lg:pt-10" id="main-nav">
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
      ${titleHtml}
      <!-- Down Arrow -->
      <div class="absolute bottom-6 md:bottom-8 right-5 md:right-8 z-20 pointer-events-none">
        <svg class="w-6 h-6 md:w-8 md:h-8 text-vici-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="height: 100%;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22l6-6m-6 6l-6-6m6 6V2"></path>
        </svg>
      </div>
    </section>
  `;
}

