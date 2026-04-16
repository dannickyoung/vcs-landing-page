// Team Page - Team Members
export function renderTeam() {
  return `
    <!-- Team Section (Light) -->
    <section class="bg-white text-vici-black py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Split Layout: Left Text, Right Portraits -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start">
          <!-- Left: Large Text -->
          <div class="flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] text-vici-black">
              <span class="text-vici-red">→</span> Meet<br>
              our<br>
              team
            </h1>
          </div>

          <!-- Middle: Team Member 1 -->
          <div class="team-member">
            <div class="mb-4 md:mb-6 relative overflow-hidden group aspect-[4/5]">
              <img src="/Headshots/Vivian.png" alt="Vivian Chan" class="w-full h-full object-cover object-top rounded-sm transition-transform duration-300 group-hover:scale-110 max-w-full" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="w-full h-full bg-vici-white/5 rounded-sm flex items-center justify-center" style="display: none;">
                <span class="text-3xl md:text-4xl text-vici-white/20">Photo</span>
              </div>
            </div>
            <div class="pt-4 border-t border-vici-black">
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-light text-vici-black mb-3">Vivian <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Chan</span></h3>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <img src="/Logo-icon-red.png" alt="VICI STUDIO" class="h-2 w-auto flex-shrink-0" style="filter: brightness(0);">
                  <p class="text-[10px] md:text-xs text-vici-black/80 uppercase">Founder</p>
                </div>
                <div class="flex items-center gap-2">
                  <img src="/Logo-icon-red.png" alt="VICI STUDIO" class="h-2 w-auto flex-shrink-0" style="filter: brightness(0);">
                  <p class="text-[10px] md:text-xs text-vici-black/80 uppercase">Business Development</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Team Member 2 -->
          <div class="team-member">
            <div class="mb-4 md:mb-6 relative overflow-hidden group aspect-[4/5]">
              <img src="/Headshots/Dannick.png" alt="Dannick Young" class="w-full h-full object-cover object-top rounded-sm transition-transform duration-300 group-hover:scale-110 max-w-full" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="w-full h-full bg-vici-white/5 rounded-sm flex items-center justify-center" style="display: none;">
                <span class="text-3xl md:text-4xl text-vici-white/20">Photo</span>
              </div>
            </div>
            <div class="pt-4 border-t border-vici-black">
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-light text-vici-black mb-3">Dannick <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Young</span></h3>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <img src="/Logo-icon-red.png" alt="VICI STUDIO" class="h-2 w-auto flex-shrink-0" style="filter: brightness(0);">
                  <p class="text-[10px] md:text-xs text-vici-black/80 uppercase">Co-Founder</p>
                </div>
                <div class="flex items-center gap-2">
                  <img src="/Logo-icon-red.png" alt="VICI STUDIO" class="h-2 w-auto flex-shrink-0" style="filter: brightness(0);">
                  <p class="text-[10px] md:text-xs text-vici-black/80 uppercase">Product/ Creative Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Member 3 (Below) -->
        <div class="mt-8 md:mt-12 lg:mt-16">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start">
            <div></div>
            <div class="team-member">
              <div class="mb-4 md:mb-6 relative overflow-hidden group aspect-[4/5]">
                <img src="/Headshots/Mathias.png" alt="Mathias Choo" class="w-full h-full object-cover object-top rounded-sm transition-transform duration-300 group-hover:scale-110 max-w-full" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="w-full h-full bg-vici-white/5 rounded-sm flex items-center justify-center" style="display: none;">
                  <span class="text-3xl md:text-4xl text-vici-white/20">Photo</span>
                </div>
              </div>
              <div class="pt-4 border-t border-vici-black">
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-light text-vici-black mb-3">Mathias <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Choo</span></h3>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <img src="/Logo-icon-red.png" alt="VICI STUDIO" class="h-2 w-auto flex-shrink-0" style="filter: brightness(0);">
                    <p class="text-[10px] md:text-xs text-vici-black/80 uppercase">Partner</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <img src="/Logo-icon-red.png" alt="VICI STUDIO" class="h-2 w-auto flex-shrink-0" style="filter: brightness(0);">
                    <p class="text-[10px] md:text-xs text-vici-black/80 uppercase">Production Lead/ Videography</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand DNA Section (Dark) -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Main Statement -->
        <div class="mb-12 md:mb-16 lg:mb-20">
          <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light uppercase leading-tight text-vici-white text-center">
            VICI STUDIO BUILDS BRANDS THAT WIN IN THE REAL WORLD. WE DESIGN, POSITION, AND LAUNCH BRAND SYSTEMS THAT GO BEYOND AESTHETICS. THEY DELIVER RESULTS.
          </div>
        </div>

        <!-- Divider Lines -->
        <div class="mb-8 md:mb-12 space-y-2">
          <div class="h-px bg-vici-white w-1/2"></div>
        </div>

        <!-- Lower Text Content - Two Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <!-- Left Column -->
          <div>
            <p class="text-sm md:text-base text-vici-white uppercase">
              [WHAT WE DO]
            </p>
          </div>
          <!-- Right Column -->
          <div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">design</span>, <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">position</span>, and <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">launch</span> <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">brand systems</span>, <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">digital products</span>, and <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">websites</span> that do not just look good. They <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">perform</span>. From <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">strategy</span> to <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">execution</span>, we help you speak to the people who matter, clearly and convincingly.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Are Section (Light) -->
    <section class="bg-white text-vici-black py-12 md:py-16 lg:py-20 px-5 md:px-8 min-h-screen flex flex-col">
      <div class="max-w-7xl mx-auto flex-1 flex flex-col">
        <!-- Who We Are Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">WHO WE ARE</p>
        </div>

        <!-- Heading and Photo Row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-8 md:mb-12 lg:mb-16">
          <!-- Main Heading -->
          <div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-vici-black mb-6 md:mb-8">
              Founded in Singapore 2024, by two university mates
            </h2>
          </div>

          <!-- Photo - Top Right -->
          <div class="w-full flex justify-center lg:justify-end">
            <img src="/Vivian and dan.png" alt="Vivian and Dannick" class="w-full max-w-xs lg:max-w-sm h-auto object-cover rounded-sm">
          </div>
        </div>

        <!-- Body Text and Button Container - Flushed to Bottom -->
        <div class="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <!-- Body Text -->
          <div class="max-w-2xl">
            <p class="text-base md:text-lg text-vici-black/80 leading-relaxed">
              We are a team of brand strategists, AI savvy designers, and digital builders with a focus on clarity and commercial impact. We work with founders, marketing leads, and leadership teams at pivotal moments. Launching. Scaling. Repositioning. Whether you are entering new markets or redefining your category, we equip you to conquer your next move.
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex-shrink-0">
            <a href="/contact" data-route="contact" class="standard-button !border-vici-black !text-vici-black hover:!bg-vici-black hover:!text-white">
              GET IN TOUCH <span class="text-vici-red">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
