// Footer Component - Professional Design Studio Layout
export function createFooter() {
  return `
    <footer class="text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8 bg-vici-black" id="footer-section">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:justify-between mb-8 md:mb-12 md:items-start">
          <!-- Left Section - Contact Message -->
          <div class="md:flex-shrink-0 w-full md:max-w-[450px]">
            <!-- Brand Logo -->
            <div class="mb-4 md:mb-6 footer-item opacity-0">
              <img src="/logo-icon-white.png" alt="VICI Studio" class="h-5 w-auto max-w-full" onerror="this.style.display='none';">
            </div>
            <!-- Contact Heading -->
            <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-[50px] font-medium mb-3 md:mb-4 text-vici-white footer-item opacity-0" style="line-height: 1.27;" id="footer-heading">
              WE WOULD <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">LOVE</span> TO <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">HEAR</span> FROM YOU.
            </h2>
            <p class="text-xs text-vici-white/50 mb-6 md:mb-8 leading-relaxed footer-item opacity-0">
              Feel free to reach out if you want to <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">collaborate</span> with us, or simply have a <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">chat</span>.
            </p>
            <a href="mailto:business@thevicistudio.com" class="text-base md:text-lg font-medium text-vici-white hover:text-vici-red transition-colors inline-flex items-center gap-2 footer-item opacity-0">
              business@thevicistudio.com →
            </a>
          </div>

          <!-- Right Container - Address, Follow Us, Navigation Links -->
          <div class="flex flex-col md:flex-row md:ml-auto md:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20 mt-8 md:mt-0">
            <!-- Section - Address -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-wider mb-4 md:mb-6 text-vici-white footer-item opacity-0">
                OUR ADDRESS
              </h3>
              <address class="text-xs md:text-sm leading-relaxed text-vici-white/50 not-italic footer-item opacity-0">
                <a href="https://www.google.com/maps/search/?api=1&query=7+Temasek+Blvd,+%2312-07,+Singapore+038987" target="_blank" rel="noopener noreferrer" class="hover:text-vici-red transition-colors cursor-pointer">
                  7 Temasek Blvd, #12-07<br>
                  Singapore 038987
                </a>
              </address>
            </div>

            <!-- Section - Follow Us -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-wider mb-4 md:mb-6 text-vici-white footer-item opacity-0">
                FOLLOW US
              </h3>
              <div class="flex gap-3 md:gap-4 text-xs md:text-sm text-vici-white/50 footer-item opacity-0">
                <a href="https://www.facebook.com/thevicistudio/" target="_blank" rel="noopener noreferrer" class="hover:text-vici-red transition-colors">Fb</a>
                <a href="https://www.instagram.com/thevicistudio/?hl=en" target="_blank" rel="noopener noreferrer" class="hover:text-vici-red transition-colors">Ig</a>
                <a href="https://sg.linkedin.com/company/thevicistudio" target="_blank" rel="noopener noreferrer" class="hover:text-vici-red transition-colors">Li</a>
              </div>
            </div>

            <!-- Section - Navigation Links -->
            <div>
              <nav class="flex flex-col gap-4 md:gap-5 text-[10px] md:text-xs">
                <a href="/" data-route="home" class="text-vici-white/50 hover:text-vici-red transition-colors inline-flex items-center gap-1 footer-item opacity-0">
                  → HOME
                </a>
                <a href="/work" data-route="work" class="text-vici-white/50 hover:text-vici-red transition-colors footer-item opacity-0">
                  WORK
                </a>
                <a href="/services" data-route="services" class="text-vici-white/50 hover:text-vici-red transition-colors footer-item opacity-0">
                  SERVICES
                </a>
                <a href="/about" data-route="about" class="text-vici-white/50 hover:text-vici-red transition-colors footer-item opacity-0">
                  ABOUT US
                </a>
                <a href="/team" data-route="team" class="text-vici-white/50 hover:text-vici-red transition-colors footer-item opacity-0">
                  TEAM
                </a>
                <a href="/contact" data-route="contact" class="text-vici-white/50 hover:text-vici-red transition-colors footer-item opacity-0">
                  CONTACT
                </a>
                <a href="/privacy" data-route="privacy" class="text-vici-white/50 hover:text-vici-red transition-colors footer-item opacity-0">
                  PRIVACY POLICY
                </a>
              </nav>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative pt-8 md:pt-12 lg:pt-16 xl:pt-20">
          <!-- Copyright -->
          <p class="text-xs text-vici-white/60 footer-item opacity-0">
            © ${new Date().getFullYear()} VICI STUDIO. All rights reserved.
          </p>
          
          <!-- Scroll to Top Button -->
          <button id="scroll-to-top" class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-vici-white/30 text-vici-white/50 hover:border-vici-white hover:text-vici-red transition-colors flex items-center justify-center text-xs font-medium absolute bottom-0 right-0 md:relative md:bottom-auto md:right-auto footer-item opacity-0">
            TOP ↑
          </button>
        </div>
      </div>
    </footer>
  `;
}
