// About Us Page - Values and Mission
export function renderNews() {
  // Helper function to generate thumbnail path with URL encoding
  const getThumbnailPath = (category, projectName) => {
    const categoryMap = {
      'branding': 'Brand Design',
      'product': 'Product Design',
      'content': 'Content Production',
      'ai': 'Ai Products'
    };
    const categoryFolder = categoryMap[category] || category;
    const encodedCategory = encodeURIComponent(categoryFolder);
    const encodedProject = encodeURIComponent(projectName);
    return `/CMS/${encodedCategory}/${encodedProject}/THUMBNAIL.png`;
  };

  // Category label mapping
  const getCategoryLabel = (category) => {
    const labelMap = {
      'branding': 'Brand design',
      'product': 'Product design',
      'content': 'Content production',
      'ai': 'AI Products'
    };
    return labelMap[category] || category;
  };

  // All projects organized by category (same as Work.js)
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

  // Flatten all projects with their category
  const allProjects = [];
  Object.keys(projects).forEach(category => {
    projects[category].forEach(project => {
      allProjects.push({ ...project, category });
    });
  });

  // Randomly select 3 projects
  const getRandomProjects = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProjects = getRandomProjects(allProjects, 3);

  // Render a project card
  const renderProjectCard = (project) => {
    const thumbnailPath = getThumbnailPath(project.category, project.name);
    const categoryLabel = getCategoryLabel(project.category);
    
    return `
      <a href="/work/${project.slug}" data-route="work/${project.slug}" class="group">
        <div class="mb-4">
          <div class="w-full aspect-[4/5] rounded-sm mb-4 overflow-hidden">
            <img src="${thumbnailPath}" alt="${project.name}" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" onerror="this.src='/featured_project_1.png';">
          </div>
          <div class="border-t border-vici-black pt-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">${categoryLabel}</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-normal text-vici-black leading-tight">${project.title.replace(/>/g, ' ‣')}</h3>
          </div>
        </div>
      </a>
    `;
  };

  return `
    <!-- What We Do Section (Dark) -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed text-vici-white">
          <span class="text-vici-red">→</span> We want to provide ambitious brands the strategic and creative foundation to <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">conquer</span> complexity and lead with clarity.
        </p>
      </div>
    </section>

    <!-- What We Believe Section (Light) -->
    <section class="bg-white text-vici-black py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- What We Believe Label -->
        <div class="mb-4 md:mb-6 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">WHAT WE BELIEVE</p>
        </div>

        <!-- Beliefs Rolodex -->
        <div class="relative" id="beliefs-rolodex">
          <div class="beliefs-rolodex-container">
            <div class="beliefs-rolodex-track" id="beliefs-rolodex-track">
              <!-- Belief 1 -->
              <div class="belief-item active" data-index="0">
                <p class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-relaxed text-vici-black">
                  Strategy is essential. Design must serve direction.
                </p>
              </div>

              <!-- Belief 2 -->
              <div class="belief-item" data-index="1">
                <p class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-relaxed text-vici-black">
                  People matter. A brand is only as strong as the connection it creates.
                </p>
              </div>

              <!-- Belief 3 -->
              <div class="belief-item" data-index="2">
                <p class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-relaxed text-vici-black">
                  Every detail counts. From first impression to final delivery.
                </p>
              </div>

              <!-- Belief 4 -->
              <div class="belief-item" data-index="3">
                <p class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-relaxed text-vici-black">
                  We do not follow trends. We focus on what endures.
                </p>
              </div>

              <!-- Belief 5 -->
              <div class="belief-item" data-index="4">
                <p class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-relaxed text-vici-black">
                  We see things through. Strategy. Design. Execution.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Divider Line -->
          <div class="h-px bg-vici-black w-full mt-4 md:mt-6 mb-8 md:mb-12"></div>
        </div>

        <!-- Recent Work -->
        <div>
          <!-- Section Header -->
          <div class="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
            <div>
              <p class="text-xs md:text-sm text-vici-black uppercase tracking-wider mb-2">What we could do together</p>
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-normal text-vici-black leading-tight">Recent work</h2>
            </div>
            <a href="/work" data-route="work" class="standard-button !border-vici-black !text-vici-black hover:!bg-vici-black hover:!text-white">
              DISCOVER ALL PROJECTS <span class="text-vici-red">→</span>
            </a>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            ${randomProjects.map(project => renderProjectCard(project)).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
