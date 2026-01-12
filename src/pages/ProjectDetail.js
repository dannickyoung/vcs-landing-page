// Project Detail Page - Individual Project Showcase
export function renderProjectDetail(projectId) {
  // Helper function to get all images for a project with URL encoding
  const getProjectImages = (category, projectName) => {
    const categoryMap = {
      'brand': 'Brand Design',
      'product': 'Product Design',
      'content': 'Content Production',
      'ai': 'Ai Products'
    };
    const categoryFolder = categoryMap[category] || category;
    // URL encode each path segment to handle spaces and special characters
    const encodedCategory = encodeURIComponent(categoryFolder);
    const encodedProject = encodeURIComponent(projectName);
    const images = [];
    // Try to find all numbered images (01.png, 02.png, etc.)
    // We'll include up to 20 images, but the actual number will depend on what exists
    for (let i = 1; i <= 20; i++) {
      const imageNum = i.toString().padStart(2, '0');
      images.push(`/CMS/${encodedCategory}/${encodedProject}/${imageNum}.png`);
    }
    return images;
  };

  // Helper function to get project name from slug
  const getProjectName = (slug) => {
    const nameMap = {
      'dtrax-brand': "D'TRAX",
      'first-advisory-brand': 'First Advisory',
      'gobrainly': 'GoBrainly',
      'lumiere-consulting-brand': 'Lumiere Consulting',
      'dtrax-product': "D'TRAX",
      'first-advisory-product': 'First Advisory',
      'loong-colorectal': 'Loong Colorectal',
      'lumiere-consulting-product': 'Lumiere Consulting',
      'ridm': 'RiDM',
      'acw-group': 'ACW Group',
      'banking-circle': 'Banking Circle',
      'dtrax-mitsui': "D'TRAX x Mitsui Chemicals",
      'loong-colorectal-content': 'Loong Colorectal',
      'singapore-pools': 'Singapore Pools',
      'drum-awards': 'The Drum Awards',
      'clard': 'Clard'
    };
    return nameMap[slug] || slug;
  };

  // Project data - all projects from CMS
  const projects = {
    // Brand Design
    'dtrax-brand': {
      id: 'dtrax-brand',
      title: "D'TRAX > BRANDING AND IDENTITY",
      category: 'BRAND DESIGN',
      description: 'Complete brand identity development for D\'TRAX, including logo design, visual systems, and brand guidelines. A comprehensive rebranding project that established a strong visual identity.',
      year: '2024',
      client: "D'TRAX",
      services: ['Brand Identity', 'Logo Design', 'Visual System', 'Brand Guidelines'],
      images: getProjectImages('brand', "D'TRAX")
    },
    'first-advisory-brand': {
      id: 'first-advisory-brand',
      title: 'FIRST ADVISORY > BRAND DESIGN',
      category: 'BRAND DESIGN',
      description: 'Brand identity development for First Advisory. Creating a distinctive visual identity that reflects the company\'s expertise and professionalism.',
      year: '2024',
      client: 'First Advisory',
      services: ['Brand Identity', 'Logo Design', 'Visual System', 'Brand Guidelines'],
      images: getProjectImages('brand', 'First Advisory')
    },
    'gobrainly': {
      id: 'gobrainly',
      title: 'GOBRAINLY > BRAND IDENTITY',
      category: 'BRAND DESIGN',
      description: 'Complete brand identity system for GoBrainly. A modern and innovative brand design that captures the essence of the company\'s mission.',
      year: '2024',
      client: 'GoBrainly',
      services: ['Brand Identity', 'Logo Design', 'Visual System', 'Brand Guidelines'],
      images: getProjectImages('brand', 'GoBrainly')
    },
    'lumiere-consulting-brand': {
      id: 'lumiere-consulting-brand',
      title: 'LUMIERE CONSULTING > BRAND DESIGN',
      category: 'BRAND DESIGN',
      description: 'Brand strategy and visual identity for Lumiere Consulting. A sophisticated brand design that communicates expertise and trust.',
      year: '2024',
      client: 'Lumiere Consulting',
      services: ['Brand Identity', 'Logo Design', 'Visual System', 'Brand Strategy'],
      images: getProjectImages('brand', 'Lumiere Consulting')
    },
    // Product Design
    'dtrax-product': {
      id: 'dtrax-product',
      title: "D'TRAX > WEBSITE DESIGN & DEVELOPMENT",
      category: 'PRODUCT DESIGN',
      description: 'Digital product design and development for D\'TRAX. A comprehensive website redesign that improved user experience and brand presence.',
      year: '2024',
      client: "D'TRAX",
      services: ['UI/UX Design', 'Website Development', 'User Research', 'Prototyping'],
      images: getProjectImages('product', "D'TRAX")
    },
    'first-advisory-product': {
      id: 'first-advisory-product',
      title: 'FIRST ADVISORY > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Digital platform design for First Advisory. A modern and intuitive website that showcases the company\'s services and expertise.',
      year: '2024',
      client: 'First Advisory',
      services: ['UI/UX Design', 'Website Development', 'User Research', 'Prototyping'],
      images: getProjectImages('product', 'First Advisory')
    },
    'loong-colorectal': {
      id: 'loong-colorectal',
      title: 'LOONG COLORECTAL > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Healthcare website design and development for Loong Colorectal. A patient-focused digital experience that combines medical expertise with intuitive design.',
      year: '2024',
      client: 'Loong Colorectal',
      services: ['Website Design', 'Healthcare UX', 'Content Strategy', 'Development'],
      images: getProjectImages('product', 'Loong Colorectal')
    },
    'lumiere-consulting-product': {
      id: 'lumiere-consulting-product',
      title: 'LUMIERE CONSULTING > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Consulting firm website design for Lumiere Consulting. A professional and engaging digital platform that reflects the company\'s expertise.',
      year: '2024',
      client: 'Lumiere Consulting',
      services: ['UI/UX Design', 'Website Development', 'User Research', 'Content Strategy'],
      images: getProjectImages('product', 'Lumiere Consulting')
    },
    'ridm': {
      id: 'ridm',
      title: 'RiDM > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Digital product design and development for RiDM. A comprehensive website redesign that improved user experience and conversion rates through modern UI/UX design principles.',
      year: '2024',
      client: 'RiDM',
      services: ['UI/UX Design', 'Website Development', 'User Research', 'Prototyping'],
      images: getProjectImages('product', 'RiDM')
    },
    // Content Production
    'acw-group': {
      id: 'acw-group',
      title: 'ACW GROUP > CONTENT PRODUCTION',
      category: 'CONTENT PRODUCTION',
      description: 'Event coverage and content production for ACW Group. Capturing key moments and creating engaging content for corporate events.',
      year: '2024',
      client: 'ACW Group',
      services: ['Event Coverage', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', 'ACW Group')
    },
    'banking-circle': {
      id: 'banking-circle',
      title: 'BANKING CIRCLE > CONTENT PRODUCTION',
      category: 'CONTENT PRODUCTION',
      description: 'Corporate content production for Banking Circle. Professional photography and videography services for corporate communications.',
      year: '2024',
      client: 'Banking Circle',
      services: ['Corporate Content', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', 'Banking Circle')
    },
    'dtrax-mitsui': {
      id: 'dtrax-mitsui',
      title: "D'TRAX X MITSUI CHEMICALS > CONTENT PRODUCTION",
      category: 'CONTENT PRODUCTION',
      description: 'Collaborative content production for D\'TRAX and Mitsui Chemicals. Creating engaging visual content for a strategic partnership.',
      year: '2024',
      client: "D'TRAX x Mitsui Chemicals",
      services: ['Event Coverage', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', "D'TRAX x Mitsui Chemicals")
    },
    'loong-colorectal-content': {
      id: 'loong-colorectal-content',
      title: 'LOONG COLORECTAL > CONTENT PRODUCTION',
      category: 'CONTENT PRODUCTION',
      description: 'Healthcare content production for Loong Colorectal. Professional medical photography and content creation for healthcare communications.',
      year: '2024',
      client: 'Loong Colorectal',
      services: ['Healthcare Content', 'Photography', 'Video Production', 'Content Strategy'],
      images: getProjectImages('content', 'Loong Colorectal')
    },
    'singapore-pools': {
      id: 'singapore-pools',
      title: 'SINGAPORE POOLS > CONTENT PRODUCTION',
      category: 'CONTENT PRODUCTION',
      description: 'Event coverage and content production for Singapore Pools. Capturing the excitement and energy of major events and campaigns.',
      year: '2024',
      client: 'Singapore Pools',
      services: ['Event Coverage', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', 'Singapore Pools')
    },
    'drum-awards': {
      id: 'drum-awards',
      title: 'THE DRUM AWARDS > AWARD NIGHT HIGHLIGHTS',
      category: 'CONTENT PRODUCTION',
      description: 'Event coverage and content production for The Drum Awards. Capturing the highlights of an unforgettable awards night through photography and videography.',
      year: '2023',
      client: 'The Drum Awards',
      services: ['Event Coverage', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', 'The Drum Awards')
    },
    // AI Products
    'clard': {
      id: 'clard',
      title: 'CLARD > AI PRODUCT',
      category: 'AI PRODUCTS',
      description: 'AI-powered product design for Clard. Innovative digital solutions leveraging artificial intelligence to create cutting-edge user experiences.',
      year: '2024',
      client: 'Clard',
      services: ['AI Integration', 'Product Design', 'UI/UX Design', 'Development'],
      images: getProjectImages('ai', 'Clard')
    }
  };

  const project = projects[projectId] || projects['dtrax-brand'];

  // Create a flat list of all projects in order for navigation
  const allProjectsOrder = [
    // AI Products
    'clard',
    // Brand Design
    'dtrax-brand', 'first-advisory-brand', 'gobrainly', 'lumiere-consulting-brand',
    // Product Design
    'dtrax-product', 'first-advisory-product', 'loong-colorectal', 'lumiere-consulting-product', 'ridm',
    // Content Production
    'acw-group', 'banking-circle', 'dtrax-mitsui', 'loong-colorectal-content', 'singapore-pools', 'drum-awards'
  ];

  // Find current project index
  const currentIndex = allProjectsOrder.indexOf(projectId);
  const prevProjectId = currentIndex > 0 ? allProjectsOrder[currentIndex - 1] : null;
  const nextProjectId = currentIndex < allProjectsOrder.length - 1 ? allProjectsOrder[currentIndex + 1] : null;

  const prevProject = prevProjectId ? projects[prevProjectId] : null;
  const nextProject = nextProjectId ? projects[nextProjectId] : null;

  return `
    <!-- Project Detail Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Project Header -->
        <div class="mb-8 md:mb-12">
          <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-2 md:mb-4">${project.category}</p>
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-vici-white mb-4 md:mb-6">${project.title}</h1>
          <div class="flex flex-wrap gap-4 md:gap-8 text-xs md:text-sm text-vici-white/80">
            <div>
              <span class="text-vici-white/60">Year:</span> ${project.year}
            </div>
            <div>
              <span class="text-vici-white/60">Client:</span> ${project.client}
            </div>
          </div>
        </div>

        <!-- Project Description -->
        <div class="mb-8 md:mb-12 lg:mb-16 max-w-3xl">
          <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">${project.description}</p>
        </div>

        <!-- Project Images -->
        <div class="space-y-6 md:space-y-8 mb-8 md:mb-12 lg:mb-16">
          ${project.images.map((image, index) => `
            <div class="project-detail-image">
              <img 
                src="${image}" 
                alt="${project.title} - Image ${index + 1}" 
                class="w-full h-auto object-cover"
                onerror="this.parentElement.style.display='none';"
              >
            </div>
          `).join('')}
        </div>

        <!-- Project Services -->
        <div class="pt-8 md:pt-12">
          <h2 class="text-xl md:text-2xl font-light text-vici-white mb-4 md:mb-6">Services</h2>
          <div class="flex flex-wrap gap-2 md:gap-3">
            ${project.services.map(service => `
              <span class="px-4 py-2 bg-vici-white/5 border border-vici-white/10 rounded-full text-sm text-vici-white/80">
                ${service}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Navigation Between Projects -->
        <div class="mt-8 md:mt-12 lg:mt-16 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-vici-white/10">
          <div class="flex-1">
            ${prevProject ? `
              <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-1 md:mb-2">Previous Project</p>
              <a href="/work/${prevProjectId}" data-route="work/${prevProjectId}" class="inline-flex items-center gap-2 text-xs md:text-sm text-vici-white/80 hover:text-vici-white transition-colors group">
                <span class="text-vici-red">←</span>
                <span class="group-hover:text-vici-red transition-colors">${prevProject.title}</span>
              </a>
            ` : `
              <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-1 md:mb-2">Previous Project</p>
              <span class="text-xs md:text-sm text-vici-white/40">No previous project</span>
            `}
          </div>
          <div class="flex-1 text-left md:text-right">
            ${nextProject ? `
              <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-1 md:mb-2">Next Project</p>
              <a href="/work/${nextProjectId}" data-route="work/${nextProjectId}" class="inline-flex items-center gap-2 text-xs md:text-sm text-vici-white/80 hover:text-vici-white transition-colors group">
                <span class="group-hover:text-vici-red transition-colors">${nextProject.title}</span>
                <span class="text-vici-red">→</span>
              </a>
            ` : `
              <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-1 md:mb-2">Next Project</p>
              <span class="text-xs md:text-sm text-vici-white/40">No next project</span>
            `}
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 md:mt-12 text-center">
          <a href="/work" data-route="work" class="inline-flex items-center gap-2 text-xs md:text-sm text-vici-white/60 hover:text-vici-white transition-colors">
            <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            BACK TO WORK
          </a>
        </div>
      </div>
    </section>
  `;
}
