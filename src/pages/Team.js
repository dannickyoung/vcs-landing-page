// Team Page - Team Members
export function renderTeam() {
  return `
    <!-- Team Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-vici-white mb-2 md:mb-4">Our <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Team</span></h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider">THE PEOPLE BEHIND VICI</p>
        </div>

        <!-- Team Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          <!-- Team Member 1: Vivian Chan -->
          <div class="team-member">
            <div class="mb-4 md:mb-6 relative overflow-hidden group">
              <img src="/src/public/Headshots/Vivian.png" alt="Vivian Chan" class="w-full h-64 md:h-72 lg:h-80 object-cover object-top rounded-sm transition-transform duration-300 group-hover:scale-110" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="w-full h-64 md:h-72 lg:h-80 bg-vici-white/5 rounded-sm flex items-center justify-center" style="display: none;">
                <span class="text-3xl md:text-4xl text-vici-white/20">Photo</span>
              </div>
            </div>
            <h3 class="text-lg md:text-xl font-light text-vici-white mb-1">Vivian Chan</h3>
            <p class="text-xs md:text-sm text-vici-white/60 mb-3 md:mb-4">Founder<br>Business Development</p>
          </div>

          <!-- Team Member 2: Dannick Young -->
          <div class="team-member">
            <div class="mb-4 md:mb-6 relative overflow-hidden group">
              <img src="/src/public/Headshots/Dannick.png" alt="Dannick Young" class="w-full h-64 md:h-72 lg:h-80 object-cover object-top rounded-sm transition-transform duration-300 group-hover:scale-110" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="w-full h-64 md:h-72 lg:h-80 bg-vici-white/5 rounded-sm flex items-center justify-center" style="display: none;">
                <span class="text-3xl md:text-4xl text-vici-white/20">Photo</span>
              </div>
            </div>
            <h3 class="text-lg md:text-xl font-light text-vici-white mb-1">Dannick Young</h3>
            <p class="text-xs md:text-sm text-vici-white/60 mb-3 md:mb-4">Co-Founder<br>Product/ Creative Lead</p>
          </div>

          <!-- Team Member 3: Mathias Choo -->
          <div class="team-member">
            <div class="mb-4 md:mb-6 relative overflow-hidden group">
              <img src="/src/public/Headshots/Mathias.png" alt="Mathias Choo" class="w-full h-64 md:h-72 lg:h-80 object-cover object-top rounded-sm transition-transform duration-300 group-hover:scale-110" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="w-full h-64 md:h-72 lg:h-80 bg-vici-white/5 rounded-sm flex items-center justify-center" style="display: none;">
                <span class="text-3xl md:text-4xl text-vici-white/20">Photo</span>
              </div>
            </div>
            <h3 class="text-lg md:text-xl font-light text-vici-white mb-1">Mathias Choo</h3>
            <p class="text-xs md:text-sm text-vici-white/60 mb-3 md:mb-4">Partner<br>Production Lead/ Videography</p>
          </div>
        </div>

        <!-- Brand DNA Section -->
        <div class="mt-16 md:mt-20 lg:mt-24 pt-12 md:pt-16 lg:pt-20 border-t border-vici-white/10">
          <div class="max-w-4xl">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-light text-vici-white mb-8 md:mb-12">Brand <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">DNA</span></h2>
            
            <!-- What we do -->
            <div class="mb-12 md:mb-16">
              <h3 class="text-lg md:text-xl font-medium text-vici-white mb-4 md:mb-6">What we do</h3>
              <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-4">
                VICI STUDIO builds brands that win in the real world.
              </p>
              <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                We design, position, and launch brand systems, digital products, and websites that don't just look good. They perform. From strategy to execution, we help you speak to the people who matter, clearly and convincingly.
              </p>
            </div>

            <!-- Who we are -->
            <div>
              <h3 class="text-lg md:text-xl font-medium text-vici-white mb-4 md:mb-6">Who we are</h3>
              <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                We are a team of brand strategists, designers, and digital builders with a focus on clarity and commercial impact. We work with founders, marketing leads, and leadership teams at pivotal moments. Launching. Scaling. Repositioning. Whether you are entering new markets or redefining your category, we equip you to conquer your next move.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center pt-12 md:pt-16 mt-12 md:mt-16">
          <p class="text-xs md:text-sm text-vici-white/80 mb-4 md:mb-6">Want to work with us?</p>
          <a href="/contact" data-route="contact" class="standard-button">
            GET IN TOUCH <span class="text-vici-red">→</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

