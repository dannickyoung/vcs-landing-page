// Social Media Video Page - Short-form vertical video showcase (dark)
// Route: /socialmedia-video
// Assets live in /public/social-media-video/<slug>.mp4 + <slug>-poster.jpg (720x1280 H.264, web-optimised)

export const socialMediaVideos = [
  {
    slug: 'imperial-harvest',
    client: 'Imperial Harvest',
    title: 'Chinese Bazi, made conversational',
    category: 'Lifestyle · Chinese Metaphysics',
    duration: '1:06',
    tone: ['Upbeat', 'Conversational'],
    description:
      'Chinese Bazi for a modern audience. An upbeat, conversational edit that keeps ancient wisdom approachable and easy to follow on the feed.'
  },
  {
    slug: 'vectra-search',
    client: 'Vectra Search',
    title: 'Recruitment, keyword by keyword',
    category: 'Corporate · Recruitment',
    duration: '1:06',
    tone: ['Professional', 'Keyword-led'],
    description:
      'A professional recruitment firm. Measured pacing and focused keyword typography let a business audience take in the message quickly.'
  },
  {
    slug: 'world-cup-roulette',
    client: 'NHG Health',
    title: 'World Cup Healthier Choice Roulette',
    category: 'Campaign · 15M Social Movement',
    duration: '0:35',
    tone: ['Candid', 'Playful'],
    description:
      'A healthy-eating piece for NHG Health Singapore’s 15M social movement. The World Cup roulette turns healthier choices into a game.'
  },
  {
    slug: 'active-at-any-age',
    client: 'NHG Health',
    title: 'Active at Any Age',
    category: 'Campaign · 15M Social Movement',
    duration: '0:53',
    tone: ['Documentary', 'Warm'],
    description:
      'Also for the 15M social movement. A simple point, warmly made: being active has no age limit.'
  },
  {
    slug: 'sabic-zoff',
    client: 'SABIC',
    title: 'Zoff — 30s cutdown',
    category: 'Product · Materials',
    duration: '0:34',
    tone: ['Cutdown', 'Product-led'],
    description:
      'A 30-second cutdown of SABIC’s Zoff story, spotlighting the materials that go into the frame of the glasses.'
  },
  {
    slug: 'sabic-resin',
    client: 'SABIC',
    title: 'Resin and food packaging',
    category: 'Explainer · Industrial',
    duration: '0:47',
    tone: ['Explainer', 'B2B'],
    description:
      'A short film on SABIC’s resin material and how it shapes modern food packaging, told as a clear visual narrative.'
  },
  {
    slug: 'vici-x-calent3',
    client: 'VICI Studio × Calent3',
    title: 'Studio collaboration for the EDG grant',
    category: 'Collaboration · Studio',
    duration: '0:25',
    tone: ['Collaboration', 'Studio voice'],
    description:
      'A collaborative piece by VICI Studio and Calent3, produced for the EDG grant. Our own voice, in short vertical form.'
  }
];

export function renderSocialMediaVideo() {
  const basePath = '/social-media-video';
  const total = String(socialMediaVideos.length).padStart(2, '0');

  const renderToneChips = (tone) =>
    tone
      .map(
        (t) =>
          `<span class="px-3 py-1 border border-vici-white/20 rounded-full text-[10px] uppercase tracking-wider text-vici-white/70">${t}</span>`
      )
      .join('');

  const renderPlayer = (item, index) => `
    <div class="smv-player relative aspect-[9/16] w-full bg-vici-black overflow-hidden group cursor-pointer select-none" data-smv-player>
      <video
        class="smv-video absolute inset-0 w-full h-full object-cover"
        src="${basePath}/${item.slug}.mp4"
        poster="${basePath}/${item.slug}-poster.jpg"
        preload="metadata"
        playsinline
        loop
        muted
        aria-label="${item.client} - ${item.title}"
      ></video>

      <!-- Idle overlay (play) -->
      <div class="smv-overlay absolute inset-0 flex items-center justify-center bg-vici-black/10 group-hover:bg-vici-black/25 transition-colors duration-300 pointer-events-none">
        <div class="smv-play-btn w-14 h-14 md:w-16 md:h-16 rounded-full border border-vici-white/80 bg-vici-black/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-white ml-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </div>
      </div>

      <!-- Corner meta -->
      <div class="absolute top-3 left-3 md:top-4 md:left-4 flex items-center gap-2 pointer-events-none">
        <span class="text-[10px] md:text-[11px] tracking-wider text-vici-white/90 bg-vici-black/40 backdrop-blur-sm px-2 py-1">${String(index + 1).padStart(2, '0')}</span>
        <span class="text-[10px] md:text-[11px] tracking-wider text-vici-white/90 bg-vici-black/40 backdrop-blur-sm px-2 py-1">9:16</span>
      </div>
      <div class="absolute top-3 right-3 md:top-4 md:right-4 pointer-events-none">
        <span class="smv-duration text-[10px] md:text-[11px] tracking-wider text-vici-white/90 bg-vici-black/40 backdrop-blur-sm px-2 py-1">${item.duration}</span>
      </div>

      <!-- Playing controls (visible when active) -->
      <div class="smv-controls absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 opacity-0 pointer-events-none transition-opacity duration-300">
        <button type="button" class="smv-mute w-9 h-9 rounded-full border border-vici-white/60 bg-vici-black/40 backdrop-blur-sm flex items-center justify-center text-vici-white hover:bg-vici-black/70 transition-colors" aria-label="Toggle sound" data-smv-mute>
          <svg class="smv-icon-sound-on w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
            <path d="M15.5 8.5a5 5 0 010 7"></path>
            <path d="M18.5 5.5a9 9 0 010 13"></path>
          </svg>
          <svg class="smv-icon-sound-off w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
            <path d="M23 9l-6 6"></path>
            <path d="M17 9l6 6"></path>
          </svg>
        </button>
      </div>

      <!-- Progress bar -->
      <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-vici-white/20 pointer-events-none">
        <div class="smv-progress h-full bg-vici-red" style="width: 0%;"></div>
      </div>
    </div>
  `;

  // Description box.
  // On sm+ it is absolutely positioned inside a column that stretches to the row height,
  // so it is always exactly the video's height (the video's 9:16 box defines the row).
  const renderDescription = (item, index) => `
    <div class="smv-desc sm:absolute sm:inset-0 flex flex-col overflow-hidden border border-vici-white/15 bg-vici-white/[0.03] p-4 md:p-5 xl:p-6">
      <div class="flex items-center justify-between gap-3 mb-3 md:mb-4">
        <p class="text-[10px] md:text-[11px] text-vici-red uppercase tracking-wider truncate">${item.category}</p>
        <span class="text-[10px] md:text-[11px] text-vici-white/40 tracking-wider flex-shrink-0">${String(index + 1).padStart(2, '0')} / ${total}</span>
      </div>
      <h3 class="text-lg md:text-xl xl:text-2xl font-light text-vici-white leading-tight mb-1">${item.client}</h3>
      <p class="text-xs md:text-sm text-vici-white/60 mb-3 md:mb-4">
        <span style="font-family: 'Playfair Display', serif; font-style: italic;">${item.title}</span>
      </p>
      <p class="text-xs md:text-sm lg:text-xs xl:text-sm lg:line-clamp-5 xl:line-clamp-none text-vici-white/80 leading-relaxed">${item.description}</p>
      <div class="mt-auto pt-4">
        <div class="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">${renderToneChips(item.tone)}</div>
        <div class="pt-3 border-t border-vici-white/10 flex flex-wrap gap-x-4 gap-y-1 text-[10px] md:text-[11px] text-vici-white/50 tracking-wide">
          <span>9:16</span>
          <span>${item.duration}</span>
          <span>Reels / TikTok / Shorts</span>
        </div>
      </div>
    </div>
  `;

  // Card: video on the left, description on the right (stacked on mobile). All cards identical.
  const renderCard = (item, index) => `
    <article class="smv-card flex flex-col sm:flex-row gap-4 md:gap-5" data-smv-card data-slug="${item.slug}">
      <div class="w-full sm:w-[46%] lg:w-[44%] flex-shrink-0">
        ${renderPlayer(item, index)}
      </div>
      <div class="flex-1 min-w-0 relative">
        ${renderDescription(item, index)}
      </div>
    </article>
  `;

  const cardsHtml = socialMediaVideos.map((item, index) => renderCard(item, index)).join('');

  return `
    <!-- Social Media Video Section (Dark) -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8" id="social-media-video-section">
      <div class="max-w-7xl mx-auto">
        <!-- Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">SOCIAL MEDIA VIDEO</p>
        </div>

        <!-- Intro -->
        <div class="mb-10 md:mb-14 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
          <h2 class="text-3xl md:text-4xl xl:text-5xl font-light leading-tight text-vici-white max-w-4xl">
            Short-form video, built for the feed.<br class="hidden lg:block">
            Shaped around each client’s <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">voice</span>.
          </h2>
          <p class="text-xs md:text-sm text-vici-white/50 lg:max-w-xs lg:text-right leading-relaxed">
            ${socialMediaVideos.length} selected reels. Tap any video to play with sound.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="smv-grid grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-10 md:gap-y-12 lg:gap-y-16">
          ${cardsHtml}
        </div>

        <!-- Footer row -->
        <div class="mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-10 border-t border-vici-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p class="text-sm md:text-base text-vici-white/70 max-w-xl leading-relaxed">
            Need short-form content that sounds like your brand? We handle concept, shoot, edit and delivery for Reels, TikTok and Shorts.
          </p>
          <div class="flex flex-wrap gap-3 md:gap-4">
            <a href="/work" data-route="work" class="standard-button">
              SEE ALL WORK <span class="text-vici-red">→</span>
            </a>
            <a href="/contact" data-route="contact" class="standard-button">
              START A PROJECT <span class="text-vici-red">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
