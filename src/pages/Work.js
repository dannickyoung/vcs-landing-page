// Work Page - Portfolio Showcase (CMS-like)
export function renderWork() {
  // Helper function to generate thumbnail path with URL encoding
  const getThumbnailPath = (category, projectName) => {
    const categoryMap = {
      'branding': 'Brand Design',
      'product': 'Product Design',
      'content': 'Content Production',
      'ai': 'Ai Products'
    };
    const categoryFolder = categoryMap[category] || category;
    // URL encode each path segment to handle spaces and special characters
    const encodedCategory = encodeURIComponent(categoryFolder);
    const encodedProject = encodeURIComponent(projectName);
    return `/CMS/${encodedCategory}/${encodedProject}/THUMBNAIL.png`;
  };

  // Helper function to create project slug
  const createSlug = (name, category) => {
    const baseSlug = name.toLowerCase()
      .replace(/'/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `${baseSlug}-${category}`;
  };

  // All projects organized by category
  const projects = {
    branding: [
      { name: "D'TRAX", title: "D'TRAX > BRANDING AND IDENTITY", description: "Brand identity and visual system", slug: 'dtrax-brand' },
      { name: "First Advisory", title: "FIRST ADVISORY > BRAND DESIGN", description: "Brand identity development", slug: 'first-advisory-brand' },
      { name: "GoBrainly", title: "GOBRAINLY > BRAND IDENTITY", description: "Complete brand identity system", slug: 'gobrainly' },
      { name: "Lumiere Consulting", title: "LUMIERE CONSULTING > BRAND DESIGN", description: "Brand strategy and visual identity", slug: 'lumiere-consulting-brand' }
    ],
    product: [
      { name: "D'TRAX", title: "D'TRAX > WEBSITE DESIGN & DEVELOPMENT", description: "Digital product design and development", slug: 'dtrax-product' },
      { name: "First Advisory", title: "FIRST ADVISORY > WEBSITE DESIGN & DEVELOPMENT", description: "Digital platform design", slug: 'first-advisory-product' },
      { name: "Loong Colorectal", title: "LOONG COLORECTAL > WEBSITE DESIGN & DEVELOPMENT", description: "Healthcare website design", slug: 'loong-colorectal' },
      { name: "Lumiere Consulting", title: "LUMIERE CONSULTING > WEBSITE DESIGN & DEVELOPMENT", description: "Consulting firm website design", slug: 'lumiere-consulting-product' },
      { name: "RiDM", title: "RiDM > WEBSITE DESIGN & DEVELOPMENT", description: "Digital product design and development", slug: 'ridm' }
    ],
    content: [
      { name: "ACW Group", title: "ACW GROUP > CONTENT PRODUCTION", description: "Event coverage and content production", slug: 'acw-group' },
      { name: "Banking Circle", title: "BANKING CIRCLE > CONTENT PRODUCTION", description: "Corporate content production", slug: 'banking-circle' },
      { name: "D'TRAX x Mitsui Chemicals", title: "D'TRAX X MITSUI CHEMICALS > CONTENT PRODUCTION", description: "Collaborative content production", slug: 'dtrax-mitsui' },
      { name: "Loong Colorectal", title: "LOONG COLORECTAL > CONTENT PRODUCTION", description: "Healthcare content production", slug: 'loong-colorectal-content' },
      { name: "Singapore Pools", title: "SINGAPORE POOLS > CONTENT PRODUCTION", description: "Event coverage and content", slug: 'singapore-pools' },
      { name: "The Drum Awards", title: "THE DRUM AWARDS > AWARD NIGHT HIGHLIGHTS", description: "Event coverage and content production", slug: 'drum-awards' }
    ],
    ai: [
      { name: "Clard", title: "CLARD > AI PRODUCT", description: "AI-powered product design", slug: 'clard' }
    ]
  };

  // Render project item
  const renderProject = (project, category, categoryLabel) => {
    const thumbnailPath = getThumbnailPath(category, project.name);
    return `
      <a href="/work/${project.slug}" data-route="work/${project.slug}" class="work-project-item block" data-category="${category}">
        <div class="relative overflow-hidden group cursor-pointer aspect-[4/5]">
          <img src="${thumbnailPath}" alt="${project.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='/featured_project_1.png';">
          <div class="absolute inset-0 bg-vici-black/0 group-hover:bg-vici-black/40 transition-all duration-300"></div>
        </div>
        <div class="mt-3 md:mt-4">
          <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-1 md:mb-2">${categoryLabel}</p>
          <h3 class="text-lg md:text-xl font-light text-vici-white mb-1 md:mb-2 group-hover:text-vici-red transition-colors">${project.title}</h3>
          <p class="text-xs md:text-sm text-vici-white/80">${project.description}</p>
        </div>
      </a>
    `;
  };

  return `
    <!-- Work Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-vici-white mb-2 md:mb-4">Our <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Work</span></h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider">PORTFOLIO</p>
        </div>

        <!-- Filter Tabs -->
        <div class="mb-8 md:mb-12 flex flex-wrap gap-3 md:gap-4 border-b border-vici-white/10 pb-3 md:pb-4">
          <button class="work-filter-btn active text-sm text-vici-white hover:text-vici-white transition-colors pb-2 border-b-2 border-vici-red" data-filter="all">
            ALL
          </button>
          <button class="work-filter-btn text-sm text-vici-white/60 hover:text-vici-white transition-colors pb-2 border-b-2 border-transparent" data-filter="ai">
            AI PRODUCTS
          </button>
          <button class="work-filter-btn text-sm text-vici-white/60 hover:text-vici-white transition-colors pb-2 border-b-2 border-transparent" data-filter="branding">
            BRAND DESIGN
          </button>
          <button class="work-filter-btn text-sm text-vici-white/60 hover:text-vici-white transition-colors pb-2 border-b-2 border-transparent" data-filter="product">
            PRODUCT DESIGN
          </button>
          <button class="work-filter-btn text-sm text-vici-white/60 hover:text-vici-white transition-colors pb-2 border-b-2 border-transparent" data-filter="content">
            CONTENT PRODUCTION
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="work-projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          ${projects.ai.map(p => renderProject(p, 'ai', 'AI PRODUCTS')).join('')}
          ${projects.branding.map(p => renderProject(p, 'branding', 'BRAND DESIGN')).join('')}
          ${projects.product.map(p => renderProject(p, 'product', 'PRODUCT DESIGN')).join('')}
          ${projects.content.map(p => renderProject(p, 'content', 'CONTENT PRODUCTION')).join('')}
        </div>

        <!-- CTA Section -->
        <div class="text-center pt-12 md:pt-16 mt-12 md:mt-16">
          <p class="text-xs md:text-sm text-vici-white/80 mb-4 md:mb-6">Interested in our work?</p>
          <a href="/contact" data-route="contact" class="standard-button">
            GET IN TOUCH <span class="text-vici-red">→</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
