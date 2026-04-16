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
    'first-advisory-brand': {
      id: 'first-advisory-brand',
      title: 'FIRST ADVISORY > BRAND DESIGN',
      category: 'BRAND DESIGN',
      description: 'Brand identity development for First Advisory. Creating a distinctive visual identity that reflects the company\'s expertise and professionalism.',
      year: '2024',
      client: 'First Advisory',
      services: ['Brand Identity', 'Logo Design', 'Visual System', 'Brand Guidelines'],
      images: getProjectImages('brand', 'First Advisory'),
      writeup: `We led the development of a brand system for First Advisory, designed to communicate clarity, confidence, and professional judgment within a highly regulated financial context.\n\nWe focused on building a composed and disciplined visual language that supports credibility at every point of interaction. Typography, colour, and layout were brought together into a structured design system prioritising legibility, consistency, and restraint across client-facing touchpoints.\n\nRather than drawing attention to itself, the brand is designed to do its job quietly. It reinforces trust, signals competence, and supports clear communication between First Advisory and its clients.\n\nThe system gives First Advisory a stable foundation for representing its work with clarity and confidence, aligned with the way the firm operates day to day.`
    },
    'gobrainly': {
      id: 'gobrainly',
      title: 'GOBRAINLY > BRAND IDENTITY',
      category: 'BRAND DESIGN',
      description: 'Complete brand identity system for GoBrainly. A modern and innovative brand design that captures the essence of the company\'s mission.',
      year: '2024',
      client: 'GoBrainly',
      services: ['Brand Identity', 'Logo Design', 'Visual System', 'Brand Guidelines'],
      images: getProjectImages('brand', 'GoBrainly'),
      writeup: `Clarity and accessibility guided the brand identity we developed for GoBrainly, an education technology platform serving a broad and diverse audience.\n\nWe created a complete identity system designed to support learning-focused products across digital environments. Our work defined the core visual language, brand structure, and identity elements, ensuring the system could scale while remaining approachable and easy to understand.\n\nWe balanced precision with warmth throughout the identity. Visual decisions were made to communicate intelligence without intimidation, supporting GoBrainly\u2019s aim to make learning feel intuitive rather than complex.\n\nThe identity equips GoBrainly with a flexible and recognisable system that can grow with the platform, maintaining consistency and clarity as the product evolves.`
    },
    'lumiere-consulting-brand': {
      id: 'lumiere-consulting-brand',
      title: 'LUMIERE CONSULTING > BRAND DESIGN',
      category: 'BRAND DESIGN',
      description: 'Brand strategy and visual identity for Lumiere Consulting. A sophisticated brand design that communicates expertise and trust.',
      year: '2024',
      client: 'Lumiere Consulting',
      services: ['Brand Identity', 'Logo Design', 'Visual System', 'Brand Strategy'],
      images: getProjectImages('brand', 'Lumiere Consulting'),
      writeup: `At the highest levels of legal executive search, credibility is built through discretion, judgment, and trust.\n\nWe developed a brand system for Lumiere Consulting that reflects this reality. Our focus was on establishing a restrained visual language and identity structure that positions the firm as a considered and selective intermediary.\n\nWe shaped typography, colour, and layout to feel composed and deliberate, supporting consistent application across materials while reinforcing authority without excess. Every element was designed to stay out of the way, allowing expertise and relationships to remain central.\n\nThe brand supports Lumiere Consulting by aligning closely with how the firm works: precise, disciplined, and trusted within a senior professional context.`
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
      images: getProjectImages('product', "D'TRAX"),
      writeup: `D\u2019trax\u2019s work is highly visual, with projects that rely on detail, materiality, and spatial clarity to speak for themselves. The website needed to give that work space, without losing structure or control.\n\nThis refresh focused on rebalancing content and visuals. We refined hierarchy and navigation, so imagery leads where it should, while information remains easy to access and understand. The intention was not to simplify the work, but to frame it more deliberately.\n\nDesign and development were handled together to ensure visual impact was not compromised by performance or responsiveness. Layout and interaction decisions were shaped to feel measured across devices, allowing the work to remain the focus.\n\nFor D\u2019trax, the site now functions less as an explanation and more as a lens, giving visitors a clear sense of the practice through the work itself.`
    },
    'first-advisory-product': {
      id: 'first-advisory-product',
      title: 'FIRST ADVISORY > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Digital platform design for First Advisory. A modern and intuitive website that showcases the company\'s services and expertise.',
      year: '2024',
      client: 'First Advisory',
      services: ['UI/UX Design', 'Website Development', 'User Research', 'Prototyping'],
      images: getProjectImages('product', 'First Advisory'),
      writeup: `In financial advisory, trust is built long before a conversation begins. The website plays a role in setting that tone.\n\nThis project involved building a digital presence from the ground up to reflect how First Advisory operates between parties. Content was shaped to prioritise accuracy and pacing, allowing services and areas of expertise to be understood without pressure or embellishment.\n\nWe paid close attention to how information unfolds. Structure and navigation were designed to guide readers steadily, recognising that confidence often comes from what is left unsaid as much as what is presented.\n\nThe site does not attempt to persuade. It establishes a baseline of clarity, allowing discussions to start on solid ground.`
    },
    'loong-colorectal': {
      id: 'loong-colorectal',
      title: 'LOONG COLORECTAL > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Healthcare website design and development for Loong Colorectal. A patient-focused digital experience that combines medical expertise with intuitive design.',
      year: '2024',
      client: 'Loong Colorectal',
      services: ['Website Design', 'Healthcare UX', 'Content Strategy', 'Development'],
      images: getProjectImages('product', 'Loong Colorectal'),
      writeup: `For patients, the first interaction with a clinic is often informational, but it can also be emotional.\n\nThis refresh focused on reshaping how information is encountered. We reorganised content to make essential details easier to find and less intimidating to navigate, particularly for visitors dealing with unfamiliar or sensitive concerns.\n\nDesign decisions were guided by calmness and readability. Layout, spacing, and responsiveness were considered together to reduce friction and maintain a reassuring tone across devices.\n\nThe experience now gives patients time and space to orient themselves, before they ever need to make a decision.`
    },
    'lumiere-consulting-product': {
      id: 'lumiere-consulting-product',
      title: 'LUMIERE CONSULTING > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Consulting firm website design for Lumiere Consulting. A professional and engaging digital platform that reflects the company\'s expertise.',
      year: '2024',
      client: 'Lumiere Consulting',
      services: ['UI/UX Design', 'Website Development', 'User Research', 'Content Strategy'],
      images: getProjectImages('product', 'Lumiere Consulting'),
      writeup: `In executive search, credibility is not declared. It is inferred.\n\nThis website was built to reflect Lumiere Consulting\u2019s role as a selective intermediary operating at senior levels of the legal market. Information is presented with restraint, allowing judgment and experience to register without overt emphasis.\n\nWe focused on pacing and clarity rather than volume. Navigation and structure were shaped to guide visitors efficiently, while visual decisions remained composed and deliberate.\n\nNothing on the site asks for attention. That, in itself, is the signal.`
    },
    'ridm': {
      id: 'ridm',
      title: 'RiDM > WEBSITE DESIGN & DEVELOPMENT',
      category: 'PRODUCT DESIGN',
      description: 'Digital product design and development for RiDM. A comprehensive website redesign that improved user experience and conversion rates through modern UI/UX design principles.',
      year: '2024',
      client: 'RiDM',
      services: ['UI/UX Design', 'Website Development', 'User Research', 'Prototyping'],
      images: getProjectImages('product', 'RiDM'),
      writeup: `RiDM\u2019s product carries complexity, but the website needed to lower the threshold for understanding it.\n\nThis project centred on shaping how the product is explained. We worked through content flow and interaction decisions that help users grasp the offering progressively, rather than all at once.\n\nDesign and development were treated as a single system, allowing layout, responsiveness, and performance to reinforce clarity across devices.\n\nThe site invites exploration without insisting on it, giving users room to understand the product in their own time.`
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
      year: '2025',
      client: 'Banking Circle',
      services: ['Corporate Content', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', 'Banking Circle'),
      writeup: `Banking Circle\u2019s social content sits in a space where clarity and credibility matter more than volume.\n\nOur work focused on editing existing footage into short, considered formats suitable for social platforms. The emphasis was on pacing, clarity, and tone, ensuring messages remained sharp and professional without losing momentum.\n\nEach piece was shaped to support consistent communication across channels, allowing the content to feel purposeful rather than promotional.`
    },
    'dtrax-mitsui': {
      id: 'dtrax-mitsui',
      title: "D'TRAX X MITSUI CHEMICALS > CONTENT PRODUCTION",
      category: 'CONTENT PRODUCTION',
      description: 'Collaborative content production for D\'TRAX and Mitsui Chemicals. Creating engaging visual content for a strategic partnership.',
      year: '2024',
      client: "D'TRAX x Mitsui Chemicals",
      services: ['Event Coverage', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', "D'TRAX x Mitsui Chemicals"),
      writeup: `This project documented the transformation of Mitsui Chemicals\u2019 office in Singapore, from pre-construction to completion, in partnership with D\u2019trax.\n\nWe filmed the space before and after the fit-out, focusing on spatial flow, materiality, and the contrast between stages. The intent was not just to show change, but to make the process legible through visual storytelling.\n\nThe film highlights the design outcome through progression, allowing the work to speak through what it became.`
    },
    'loong-colorectal-content': {
      id: 'loong-colorectal-content',
      title: 'LOONG COLORECTAL > CONTENT PRODUCTION',
      category: 'CONTENT PRODUCTION',
      description: 'Healthcare content production for Loong Colorectal. Professional medical photography and content creation for healthcare communications.',
      year: '2024',
      client: 'Loong Colorectal',
      services: ['Healthcare Content', 'Photography', 'Video Production', 'Content Strategy'],
      images: getProjectImages('content', 'Loong Colorectal'),
      writeup: `For a medical practice, content needs to build trust before it builds familiarity.\n\nWe produced a set of branding and FAQ videos alongside professional-in-action photography, designed for use across the website and social platforms. The focus was on clarity, reassurance, and authenticity, allowing information to be communicated without feeling scripted or impersonal.\n\nVisual choices were kept calm and composed, ensuring the content supports patient understanding while reflecting the clinic\u2019s standard of care.`
    },
    'singapore-pools': {
      id: 'singapore-pools',
      title: 'SINGAPORE POOLS > CONTENT PRODUCTION',
      category: 'CONTENT PRODUCTION',
      description: 'Event coverage and content production for Singapore Pools. Capturing the excitement and energy of major events and campaigns.',
      year: '2025',
      client: 'Singapore Pools',
      services: ['Event Coverage', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', 'Singapore Pools'),
      writeup: `This internal workshop was about interaction, participation, and energy, not presentation.\n\nWe captured the event as it unfolded, focusing on candid moments, group dynamics, and the lighter interactions that shape a shared experience. The approach prioritised observation over direction, allowing the atmosphere of the session to come through naturally.\n\nThe content reflects the tone of the day, balancing professionalism with approachability.`
    },
    'drum-awards': {
      id: 'drum-awards',
      title: 'THE DRUM AWARDS > AWARD NIGHT HIGHLIGHTS',
      category: 'CONTENT PRODUCTION',
      description: 'Event coverage and content production for The Drum Awards. Capturing the highlights of an unforgettable awards night through photography and videography.',
      year: '2023',
      client: 'The Drum Awards',
      services: ['Event Coverage', 'Video Production', 'Photography', 'Content Strategy'],
      images: getProjectImages('content', 'The Drum Awards'),
      writeup: `Awards nights move quickly, and the story is in the rhythm as much as the moments.\n\nWe filmed and edited a highlight piece that captures the pace, scale, and atmosphere of the event, focusing on transitions, reactions, and the collective energy of the room.\n\nThe film distils the evening into a tight narrative, designed to relive the experience rather than document it beat by beat.`
    },
    // AI Products
    'clard': {
      id: 'clard',
      title: 'CLARD > AI PRODUCT',
      category: 'AI PRODUCTS',
      description: 'AI-powered product design for Clard. Innovative digital solutions leveraging artificial intelligence to create cutting-edge user experiences.',
      year: '2025',
      client: 'Clard',
      services: ['AI Integration', 'Product Design', 'UI/UX Design', 'Development'],
      images: getProjectImages('ai', 'Clard'),
      writeup: `We partnered with Clard to shape a digital product designed around usability, structure, and practical adoption.\n\nWe led product definition and experience design end to end, focusing on clear product architecture, well-defined user journeys, and interaction patterns that feel predictable and easy to navigate. We treated AI as infrastructure rather than a headline, using it to support decisions, automation, and insight where it adds value, while keeping the interface calm and intuitive.\n\nOur focus throughout was on adoption. The product is structured so users understand it quickly, move through it with confidence, and integrate it naturally into their existing workflows.`
    }
  };

  const project = projects[projectId] || projects['dtrax-brand'];

  // Create a flat list of all projects in order for navigation
  const allProjectsOrder = [
    // AI Products
    'clard',
    // Brand Design
    'first-advisory-brand', 'gobrainly', 'lumiere-consulting-brand',
    // Product Design
    'dtrax-product', 'first-advisory-product', 'loong-colorectal', 'lumiere-consulting-product', 'ridm',
    // Content Production
    /* 'acw-group', */ 'banking-circle', 'dtrax-mitsui', 'loong-colorectal-content', 'singapore-pools', 'drum-awards'
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
          <div class="mb-6 md:mb-8 flex items-center gap-2">
            <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">${project.category}</p>
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-vici-white mb-4 md:mb-6">${project.title}</h1>
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
                class="w-full h-auto object-contain max-w-full"
                onerror="this.parentElement.style.display='none';"
              >
            </div>
          `).join('')}
        </div>

        ${project.writeup ? `
        <!-- Project Writeup -->
        <div class="mb-8 md:mb-12 lg:mb-16 max-w-3xl">
          ${project.writeup.split('\n\n').map(p => `<p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-4 md:mb-6">${p}</p>`).join('')}
        </div>
        ` : ''}

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
        <div class="mt-8 md:mt-12 lg:mt-16 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
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
