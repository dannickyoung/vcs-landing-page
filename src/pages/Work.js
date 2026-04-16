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

  // All projects organized by category
  const projects = {
    branding: [
      { name: "First Advisory", title: "FIRST ADVISORY", description: "Brand identity development", slug: 'first-advisory-brand' },
      { name: "GoBrainly", title: "GOBRAINLY", description: "Complete brand identity system", slug: 'gobrainly' },
      { name: "Lumiere Consulting", title: "LUMIERE CONSULTING", description: "Brand strategy and visual identity", slug: 'lumiere-consulting-brand' }
    ],
    product: [
      { name: "D'TRAX", title: "D'TRAX", description: "Digital product design and development", slug: 'dtrax-product' },
      { name: "First Advisory", title: "FIRST ADVISORY", description: "Digital platform design", slug: 'first-advisory-product' },
      { name: "Loong Colorectal", title: "LOONG COLORECTAL", description: "Healthcare website design", slug: 'loong-colorectal' },
      { name: "Lumiere Consulting", title: "LUMIERE CONSULTING", description: "Consulting firm website design", slug: 'lumiere-consulting-product' },
      { name: "RiDM", title: "RiDM", description: "Digital product design and development", slug: 'ridm' }
    ],
    content: [
      // { name: "ACW Group", title: "ACW GROUP", description: "Event coverage and content production", slug: 'acw-group' },
      { name: "Banking Circle", title: "BANKING CIRCLE", description: "Corporate content production", slug: 'banking-circle' },
      { name: "D'TRAX x Mitsui Chemicals", title: "D'TRAX X MITSUI CHEMICALS", description: "Collaborative content production", slug: 'dtrax-mitsui' },
      { name: "Loong Colorectal", title: "LOONG COLORECTAL", description: "Healthcare content production", slug: 'loong-colorectal-content' },
      { name: "Singapore Pools", title: "SINGAPORE POOLS", description: "Event coverage and content", slug: 'singapore-pools' },
      { name: "The Drum Awards", title: "THE DRUM AWARDS", description: "Event coverage and content production", slug: 'drum-awards' }
    ],
    ai: [
      { name: "Clard", title: "CLARD", description: "AI-powered product design", slug: 'clard' }
    ]
  };

  // Render project item
  const renderProject = (project, category, categoryLabel) => {
    const thumbnailPath = getThumbnailPath(category, project.name);
    return `
      <a href="/work/${project.slug}" data-route="work/${project.slug}" class="work-project-item block" data-category="${category}">
        <div class="relative overflow-hidden group cursor-pointer aspect-[4/5]">
          <img src="${thumbnailPath}" alt="${project.name}" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 max-w-full" onerror="this.src='/featured_project_1.png';">
          <div class="absolute inset-0 bg-vici-black/0 group-hover:bg-vici-black/20 transition-all duration-300"></div>
        </div>
        <div class="mt-3 md:mt-4">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1 md:mb-2">${categoryLabel}</p>
          <h3 class="text-lg md:text-xl font-light text-vici-black mb-1 md:mb-2 group-hover:text-vici-red transition-colors">${project.title}</h3>
          <p class="text-xs md:text-sm text-vici-black/80">${project.description}</p>
        </div>
      </a>
    `;
  };

  return `
    <!-- Work Content Section (Light) -->
    <section class="bg-white text-vici-black py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- WORK Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">OUR WORK</p>
        </div>

        <!-- Filter Tabs -->
        <div class="mb-8 md:mb-12 flex flex-wrap gap-3 md:gap-4 border-b border-vici-black pb-3 md:pb-4">
          <button class="work-filter-btn active text-xs text-vici-black hover:text-vici-black transition-colors pb-2" data-filter="all">
            ALL
          </button>
          <button class="work-filter-btn text-xs text-vici-black/60 hover:text-vici-black transition-colors pb-2" data-filter="ai">
            AI PRODUCTS
          </button>
          <button class="work-filter-btn text-xs text-vici-black/60 hover:text-vici-black transition-colors pb-2" data-filter="branding">
            BRAND DESIGN
          </button>
          <button class="work-filter-btn text-xs text-vici-black/60 hover:text-vici-black transition-colors pb-2" data-filter="product">
            PRODUCT DESIGN
          </button>
          <button class="work-filter-btn text-xs text-vici-black/60 hover:text-vici-black transition-colors pb-2" data-filter="content">
            CONTENT PRODUCTION
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="work-projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          ${projects.ai.map(p => renderProject(p, 'ai', 'AI PRODUCTS')).join('')}
          ${projects.branding.map(p => renderProject(p, 'branding', 'BRAND DESIGN')).join('')}
          ${projects.product.map(p => renderProject(p, 'product', 'PRODUCT DESIGN')).join('')}
          ${projects.content.map(p => renderProject(p, 'content', 'CONTENT PRODUCTION')).join('')}
        </div>
      </div>
    </section>
  `;
}
