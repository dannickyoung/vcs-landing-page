// Services Page - Studio Services
export function renderServices() {
  return `
    <!-- Services Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-vici-white mb-2 md:mb-4">Our <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Services</span></h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider mb-6 md:mb-8">WHAT WE DO</p>
          <p class="text-base md:text-lg text-vici-white/80 leading-relaxed max-w-3xl">
            We partner with brands at critical points of change. Whether you are launching, repositioning, or scaling, our work brings structure, clarity, and momentum to every stage of growth.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          <!-- Service 1: Brand Strategy -->
          <div class="service-item">
            <div class="mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-2 md:mb-3">Brand Strategy</h3>
              <p class="text-xs md:text-sm text-vici-white/80 leading-relaxed">
                Strategic brand positioning and architecture. We define your brand's foundation and guide its strategic direction.
              </p>
            </div>
            <ul class="space-y-1 md:space-y-2 text-xs md:text-sm text-vici-white/60">
              <li>• Brand positioning</li>
              <li>• Brand architecture</li>
              <li>• Messaging and tone of voice</li>
              <li>• Brand/design consultation</li>
            </ul>
          </div>

          <!-- Service 2: Brand Design -->
          <div class="service-item">
            <div class="mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-2 md:mb-3">Brand Design</h3>
              <p class="text-xs md:text-sm text-vici-white/80 leading-relaxed">
                Visual identity and design systems. We create cohesive brand visuals that work across all touchpoints.
              </p>
            </div>
            <ul class="space-y-1 md:space-y-2 text-xs md:text-sm text-vici-white/60">
              <li>• Design systems</li>
              <li>• Art direction</li>
              <li>• Motion systems</li>
              <li>• Brand guidelines</li>
              <li>• Internal brand alignment and brand behaviour</li>
            </ul>
          </div>

          <!-- Service 3: Product Design -->
          <div class="service-item">
            <div class="mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-2 md:mb-3">Product Design</h3>
              <p class="text-xs md:text-sm text-vici-white/80 leading-relaxed">
                Digital product design and development. We create intuitive, beautiful, and functional digital experiences that perform.
              </p>
            </div>
            <ul class="space-y-1 md:space-y-2 text-xs md:text-sm text-vici-white/60">
              <li>• Website design and development</li>
              <li>• UI/UX for digital products</li>
              <li>• Mobile app design and development</li>
              <li>• E-commerce platform design</li>
              <li>• User research and testing</li>
            </ul>
          </div>

          <!-- Service 4: AI Application Development -->
          <div class="service-item">
            <div class="mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-2 md:mb-3">AI Application Development</h3>
              <p class="text-xs md:text-sm text-vici-white/80 leading-relaxed">
                Custom AI-powered applications and solutions. We build intelligent systems that leverage artificial intelligence to solve complex business challenges.
              </p>
            </div>
            <ul class="space-y-1 md:space-y-2 text-xs md:text-sm text-vici-white/60">
              <li>• AI application development</li>
              <li>• Machine learning model integration</li>
              <li>• Natural language processing solutions</li>
              <li>• AI-powered automation systems</li>
              <li>• Custom AI tool development</li>
            </ul>
          </div>

          <!-- Service 5: Content Production -->
          <div class="service-item">
            <div class="mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-2 md:mb-3">Content Production</h3>
              <p class="text-xs md:text-sm text-vici-white/80 leading-relaxed">
                Creative content production and strategy. We produce compelling content that engages audiences and drives results.
              </p>
            </div>
            <ul class="space-y-1 md:space-y-2 text-xs md:text-sm text-vici-white/60">
              <li>• Content strategy</li>
              <li>• Video production, including onsite event filming</li>
              <li>• Campaign and marketing assets</li>
              <li>• Photography and visual content</li>
              <li>• Social media content creation</li>
            </ul>
          </div>
        </div>

        <!-- Why Us Section -->
        <div class="mt-16 md:mt-20 lg:mt-24 pt-12 md:pt-16 lg:pt-20 border-t border-vici-white/10">
          <div class="max-w-4xl">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-light text-vici-white mb-8 md:mb-12">Why <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Us</span></h2>
            
            <div class="space-y-6 md:space-y-8">
              <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                We approach every brand with the same mindset you bring to your business: practical, focused, and built for longevity. Our experience spans early-stage growth to enterprise-scale execution. We understand how to navigate complexity, align stakeholders, and deliver with precision.
              </p>
              
              <div class="space-y-4 md:space-y-6">
                <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                  We do not believe in overcomplication. We believe in brands that communicate with purpose and move with intent.
                </p>
              </div>
              
              <div class="pt-0 md:pt-0">
                <p class="text-base md:text-lg text-vici-white leading-relaxed">
                  VICI means <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">I conquered</span>.
                </p>
                <p class="text-base md:text-lg text-vici-white leading-relaxed mt-2">
                  We exist to make sure you can say the same.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Partnerships Section -->
        <div class="mt-16 md:mt-20 lg:mt-24 pt-12 md:pt-16 lg:pt-20 border-t border-vici-white/10">
          <div class="max-w-4xl">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-light text-vici-white mb-6 md:mb-8">Partnerships</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We work with brands through key moments of change, including launches, transformations and growth. Each partnership is built on clarity, trust and a shared ambition to move the business forward.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center pt-12 md:pt-16 mt-12 md:mt-16">
          <p class="text-xs md:text-sm text-vici-white/80 mb-4 md:mb-6">Ready to start your project?</p>
          <a href="/contact" data-route="contact" class="standard-button">
            GET IN TOUCH <span class="text-vici-red">→</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

