// About Us Page - Values and Mission
export function renderNews() {
  return `
    <!-- About Us Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-vici-white mb-2 md:mb-4">About <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Us</span></h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider mb-6 md:mb-8">VALUES AND MISSION</p>
          <p class="text-base md:text-lg text-vici-white/80 leading-relaxed max-w-3xl">
            To give ambitious brands the strategic and creative foundation to conquer complexity and lead with clarity.
          </p>
        </div>

        <!-- What We Believe Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          <div class="group flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center group-hover:bg-vici-red/30 transition-colors">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed group-hover:text-vici-white transition-colors">
              Strategy is essential. Design must serve direction.
            </p>
          </div>
          
          <div class="group flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center group-hover:bg-vici-red/30 transition-colors">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed group-hover:text-vici-white transition-colors">
              People matter. A brand is only as strong as the connection it creates.
            </p>
          </div>
          
          <div class="group flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center group-hover:bg-vici-red/30 transition-colors">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed group-hover:text-vici-white transition-colors">
              Every detail counts. From first impression to final delivery.
            </p>
          </div>
          
          <div class="group flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center group-hover:bg-vici-red/30 transition-colors">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed group-hover:text-vici-white transition-colors">
              We do not follow trends. We focus on what endures.
            </p>
          </div>
          
          <div class="group flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-vici-red/20 rounded-full flex items-center justify-center group-hover:bg-vici-red/30 transition-colors">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed group-hover:text-vici-white transition-colors">
              We see things through. Strategy. Design. Execution.
            </p>
          </div>
        </div>

        <!-- How We Work Section -->
        <div class="mt-16 md:mt-20 lg:mt-24 pt-12 md:pt-16 lg:pt-20 border-t border-vici-white/10">
          <div class="max-w-4xl">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-light text-vici-white mb-8 md:mb-12">How We <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Work</span></h2>
            
            <div class="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                Our approach is intentional, collaborative, and built for momentum.
              </p>
              <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                Every phase has purpose. Every step moves you closer to clarity and market impact.
              </p>
            </div>

            <!-- Process Steps -->
            <div class="space-y-12 md:space-y-16">
              <!-- Viewpoint -->
              <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 md:w-14 md:h-14 bg-vici-red/20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 md:w-7 md:h-7 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-3 md:mb-4">Viewpoint</h3>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
                    We begin with perspective.
                  </p>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                    We ask the right questions to understand your business, your market, and your ambition. Not just what you want to create, but why it matters.
                  </p>
                </div>
              </div>

              <!-- Identity -->
              <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 md:w-14 md:h-14 bg-vici-red/20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 md:w-7 md:h-7 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-3 md:mb-4">Identity</h3>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
                    We define your brand.
                  </p>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                    Strategy, messaging, and visual direction - all anchored in purpose. We build a brand system that works across audiences, platforms, and moments.
                  </p>
                </div>
              </div>

              <!-- Craft -->
              <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 md:w-14 md:h-14 bg-vici-red/20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 md:w-7 md:h-7 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-3 md:mb-4">Craft</h3>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
                    We bring the brand to life.
                  </p>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                    Design, digital, content, and build. Every execution is considered, consistent, and ready to perform.
                  </p>
                </div>
              </div>

              <!-- Impact -->
              <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 md:w-14 md:h-14 bg-vici-red/20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 md:w-7 md:h-7 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl md:text-2xl font-medium text-vici-white mb-3 md:mb-4">Impact</h3>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
                    We help you launch with precision.
                  </p>
                  <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                    From stakeholder alignment to rollout strategy, we deliver with clarity and care. We do not just hand over. We partner through.
                  </p>
                </div>
              </div>
            </div>

            <!-- Closing Statement -->
            <div class="pt-0 md:pt-0 mt-12 md:mt-16">
              <p class="text-base md:text-lg text-vici-white leading-relaxed">
                The goal is never just to launch. It is to <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">conquer</span>.
              </p>
              <p class="text-base md:text-lg text-vici-white leading-relaxed mt-2">
                Each phase moves you toward a brand that leads, lasts, and leaves no doubt.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center pt-12 md:pt-16 mt-12 md:mt-16">
          <p class="text-xs md:text-sm text-vici-white/80 mb-4 md:mb-6">Ready to work together?</p>
          <a href="/contact" data-route="contact" class="standard-button">
            GET IN TOUCH <span class="text-vici-red">→</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
