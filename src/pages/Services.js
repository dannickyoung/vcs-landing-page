// Services Page - Studio Services
export function renderServices() {
  return `
    <!-- Services Section (Light) -->
    <section class="bg-white text-vici-black py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- SERVICES Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">SERVICES</p>
        </div>

        <!-- Main Heading -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-vici-black mb-6 md:mb-8">
            We partner with brands at critical points of change. Whether you are launching, repositioning, or scaling, our services brings structure, clarity, and momentum to every stage of growth.
          </h2>
          
          <!-- Discover all projects button -->
          <a href="/work" data-route="work" class="standard-button !border-vici-black !text-vici-black hover:!bg-vici-black hover:!text-white">
            Discover all projects <span class="text-vici-red">→</span>
          </a>
        </div>

        <!-- Three Column Services Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 pt-8 md:pt-12 border-t border-vici-black">
          <!-- Column 1: Branding -->
          <div class="relative pl-0 pr-4 md:pr-8">
            <div class="pl-0 md:pl-8">
              <div class="text-7xl md:text-8xl lg:text-9xl font-bold text-vici-red mb-4 md:mb-6 leading-none">I</div>
              <h3 class="text-base md:text-lg font-normal text-vici-black mb-6 md:mb-8">Branding</h3>
              <ul class="space-y-2 md:space-y-3 text-2xl md:text-3xl lg:text-4xl font-light text-vici-black leading-tight">
                <li>Art direction</li>
                <li>Brand architecture</li>
                <li>Brand behavior and internal alignment</li>
                <li>Brand consultation</li>
                <li>Brand guidelines</li>
                <li>Brand positioning</li>
                <li>Design systems</li>
                <li>Messaging and tone of voice</li>
                <li>Motion design systems</li>
              </ul>
            </div>
          </div>

          <!-- Column 2: Digital -->
          <div class="relative border-l border-vici-black pl-4 md:pl-8 pr-4 md:pr-8">
            <div>
              <div class="text-7xl md:text-8xl lg:text-9xl font-bold text-vici-red mb-4 md:mb-6 leading-none">II</div>
              <h3 class="text-base md:text-lg font-normal text-vici-black mb-6 md:mb-8">Digital</h3>
              <ul class="space-y-2 md:space-y-3 text-2xl md:text-3xl lg:text-4xl font-light text-vici-black leading-tight">
                <li>AI application development</li>
                <li>AI-powered automation systems</li>
                <li>Custom AI tool development</li>
                <li>E-commerce platform design</li>
                <li>Mobile application design and development</li>
                <li>UI/UX design for digital products</li>
                <li>User research and usability testing</li>
                <li>Website design and development</li>
              </ul>
            </div>
          </div>

          <!-- Column 3: Content -->
          <div class="relative border-l border-vici-black pl-4 md:pl-8 pr-0">
            <div>
              <div class="text-7xl md:text-8xl lg:text-9xl font-bold text-vici-red mb-4 md:mb-6 leading-none">III</div>
              <h3 class="text-base md:text-lg font-normal text-vici-black mb-6 md:mb-8">Content</h3>
              <ul class="space-y-2 md:space-y-3 text-2xl md:text-3xl lg:text-4xl font-light text-vici-black leading-tight">
                <li>Campaign and marketing asset creation</li>
                <li>Content strategy</li>
                <li>Photography and visual content production</li>
                <li>Social media content creation</li>
                <li>Video production and onsite event filming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section (Dark) -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- CLIENTS Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">CLIENTS</p>
        </div>

        <!-- Main Heading -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-vici-white mb-6 md:mb-8">
            Partnerships built on trust
          </h2>
        </div>

        <!-- Client Logos Grid -->
        <div class="space-y-4 md:space-y-6">
          <!-- Row 1 -->
          <div class="flex justify-end">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center w-full md:w-auto md:max-w-4xl">
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/ACW.png" alt="ACW" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/Banking_Circle.svg" alt="Banking Circle" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/Clard.svg" alt="Clard" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <div class="w-full md:w-auto md:max-w-4xl border-t border-vici-white"></div>
          </div>

          <!-- Row 2 -->
          <div class="flex justify-end">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center w-full md:w-auto md:max-w-4xl">
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/DTRAX.svg" alt="DTRAX" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/Frist_Advisory.svg" alt="First Advisory" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/GoBrainly.svg" alt="GoBrainly" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <div class="w-full md:w-auto md:max-w-4xl border-t border-vici-white"></div>
          </div>

          <!-- Row 3 -->
          <div class="flex justify-end">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center w-full md:w-auto md:max-w-4xl">
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/Loong_Colorectal.svg" alt="Loong Colorectal" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/Lumiere_Consulting.svg" alt="Lumiere Consulting" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/Mitsui_Chemicals.svg" alt="Mitsui Chemicals" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <div class="w-full md:w-auto md:max-w-4xl border-t border-vici-white"></div>
          </div>

          <!-- Row 4 -->
          <div class="flex justify-end">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center w-full md:w-auto md:max-w-4xl">
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/RIDM.svg" alt="RIDM" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/Singapore Pools.svg" alt="Singapore Pools" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
              <div class="flex items-center justify-center h-16 md:h-20 w-full">
                <img src="/Clients/The_Drum.svg" alt="The Drum" class="h-10 md:h-12 max-w-32 md:max-w-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" style="filter: brightness(0) invert(1);">
              </div>
            </div>
          </div>
        </div>

        <!-- Body Text -->
        <div class="mt-8 md:mt-12">
          <div class="max-w-2xl">
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We work with brands through key moments of change, including launches, transformations and growth. Each partnership is built on clarity, trust and a shared ambition to move the business forward.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call Us Section (Light) -->
    <section class="bg-white text-vici-black py-12 md:py-16 lg:py-20 px-5 md:px-8 min-h-screen flex flex-col">
      <div class="max-w-7xl mx-auto flex-1 flex flex-col">
        <!-- Why Us Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">WHY US</p>
        </div>

        <!-- Main Heading -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-vici-black mb-6 md:mb-8">
            We approach every brand with the same mindset you bring to your business: practical, focused, and built for longevity.
          </h2>
        </div>

        <!-- Body Text and Button Container - Flushed to Bottom -->
        <div class="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <!-- Body Text -->
          <div class="max-w-2xl">
            <p class="text-base md:text-lg text-vici-black/80 leading-relaxed">
              We do not believe in overcomplication. We believe in brands that communicate with purpose and move with intent. VICI means I <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">conquered</span>. We exist to make sure you can say the same.
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex-shrink-0">
            <a href="/contact" data-route="contact" class="standard-button !border-vici-black !text-vici-black hover:!bg-vici-black hover:!text-white">
              <span>GET IN TOUCH</span>
              <span class="text-vici-red">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

