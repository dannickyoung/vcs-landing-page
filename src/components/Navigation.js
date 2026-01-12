// Navigation Component - Monopo-inspired Layout
export function createNavigation() {
  return `
    <nav class="relative z-50 transition-all duration-300" id="main-nav">
      <div class="px-5 md:px-8 py-2 flex items-center justify-between">
        <!-- Logo Left -->
        <a href="/" data-route="home" class="flex items-center gap-2 transition-opacity hover:opacity-80">
          <img src="/Logo-icon-red.png" alt="VICI Studio" class="h-5 w-auto max-w-full" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
          <span class="text-sm font-semibold tracking-tight text-vici-white hidden">VICI</span>
        </a>
        
        <!-- Navigation Links Middle - Two Columns -->
        <div class="hidden md:flex items-center" style="gap: 110px;">
          <div class="flex flex-col gap-4 text-xs text-vici-white">
            <a href="/" data-route="home" class="nav-link transition-colors hover:text-vici-white/70 relative group inline-flex items-center gap-1">
              <span class="text-[10px]">▶</span>
              <span>HOME</span>
            </a>
            <a href="/work" data-route="work" class="nav-link transition-colors hover:text-vici-white/70">
              WORK
            </a>
            <a href="/services" data-route="services" class="nav-link transition-colors hover:text-vici-white/70">
              SERVICES
            </a>
          </div>
          <div class="flex flex-col gap-4 text-xs text-vici-white">
            <a href="/about" data-route="about" class="nav-link transition-colors hover:text-vici-white/70">
              ABOUT US
            </a>
            <a href="/team" data-route="team" class="nav-link transition-colors hover:text-vici-white/70">
              TEAM
            </a>
            <a href="/contact" data-route="contact" class="nav-link transition-colors hover:text-vici-white/70">
              CONTACT
            </a>
          </div>
        </div>
        
        <button id="menu-toggle" class="md:hidden text-xs text-vici-white hover:opacity-70 transition-opacity">Menu</button>
      </div>
    </nav>
  `;
}
