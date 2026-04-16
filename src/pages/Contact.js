// Contact Page - Contact Form and Information
export function renderContact() {
  return `
    <!-- Contact Section - Color Transition -->
    <section id="contact-section" class="contact-transition-section h-screen py-12 md:py-16 lg:py-20 px-5 md:px-8" style="background-color: rgb(0, 0, 0);">
      <div class="max-w-7xl mx-auto">
        <!-- CONTACT Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red contact-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider contact-label">CONTACT</p>
        </div>

        <!-- Split Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start relative">
          <!-- Left: Large Text -->
          <div class="flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
            <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] contact-heading">
              We're<br>
              here to<br>
              <span id="contact-verb" class="contact-verb-highlight" style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">build</span><br>
              your<br>
              brand<br>
              <span class="text-vici-red">→</span>
            </h1>
          </div>

          <!-- Right Column Container -->
          <div class="w-full relative">
            <!-- Right: Contact Form (Dark State) -->
            <div id="contact-form-container" class="w-full">
            <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-6 md:space-y-8">
              <input type="hidden" name="access_key" value="1b88aa4e-81db-4d6f-82a6-a2a07e5d8f77">
              <input type="hidden" name="subject" value="New Contact Form Submission from VICI STUDIO Website">
              <input type="hidden" name="to" value="business@thevicistudio.com">
              <input type="hidden" name="from_name" value="VICI STUDIO Contact Form">
              
              <div>
                <label for="fullName" class="block text-xs md:text-sm mb-2 uppercase tracking-wider contact-form-label">FULL NAME *</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="name" 
                  required
                  class="w-full bg-transparent border-b pb-2 text-sm md:text-base placeholder-opacity-30 focus:outline-none transition-colors contact-input"
                  placeholder=""
                  style="background-color: transparent !important;"
                >
              </div>

              <div>
                <label for="email" class="block text-xs md:text-sm mb-2 uppercase tracking-wider contact-form-label">EMAIL *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  class="w-full bg-transparent border-b pb-2 text-sm md:text-base placeholder-opacity-30 focus:outline-none transition-colors contact-input"
                  placeholder=""
                  style="background-color: transparent !important;"
                >
              </div>

              <div>
                <label for="phone" class="block text-xs md:text-sm mb-2 uppercase tracking-wider contact-form-label">PHONE NUMBER</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  class="w-full bg-transparent border-b pb-2 text-sm md:text-base placeholder-opacity-30 focus:outline-none transition-colors contact-input"
                  placeholder=""
                  style="background-color: transparent !important;"
                >
              </div>

              <div>
                <label for="message" class="block text-xs md:text-sm mb-2 uppercase tracking-wider contact-form-label">YOUR MESSAGE *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required
                  class="w-full bg-transparent border-b pb-2 text-sm md:text-base placeholder-opacity-30 focus:outline-none transition-colors resize-none contact-input"
                  placeholder=""
                  style="background-color: transparent !important;"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="standard-button contact-button"
              >
                SUBMIT <span class="text-vici-red">→</span>
              </button>
            </form>
            </div>

            <!-- Right: Contact Information (Light State) -->
            <div id="contact-info-container" class="w-full space-y-8 md:space-y-12 opacity-0 pointer-events-none absolute top-0 left-0 right-0">
            <!-- Logo -->
            <div class="mb-8 md:mb-12">
              <img src="/Logo-icon-red.png" alt="VICI STUDIO" class="h-20 md:h-24 lg:h-32 w-auto contact-logo-black" style="filter: brightness(0);">
            </div>

            <!-- Description Text -->
            <p class="text-base md:text-lg leading-relaxed max-w-md contact-info-text">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </p>

            <!-- Email -->
            <div class="pt-4 border-t contact-info-border">
              <a href="mailto:business@thevicistudio.com" class="inline-flex items-center gap-2 text-sm md:text-base font-normal transition-colors contact-info-link hover:text-vici-red">
                <span>business@thevicistudio.com</span>
                <span class="text-vici-red font-normal">↗</span>
              </a>
            </div>

            <!-- WhatsApp -->
            <div class="pt-4 border-t contact-info-border">
              <a href="https://wa.me/6592320483?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20VICI%20Studio's%20services." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm md:text-base font-normal transition-colors contact-info-link hover:text-vici-red">
                <span>Drop a WhatsApp message instead</span>
                <span class="text-vici-red font-normal">↗</span>
              </a>
            </div>

            <!-- Address -->
            <div class="pt-4 border-t contact-info-border">
              <p class="text-sm md:text-base font-normal mb-2 contact-info-text">
                7 Temasek Blvd, #12-07<br>
                Singapore 038987
              </p>
              <a href="https://www.google.com/maps/search/?api=1&query=7+Temasek+Blvd,+%2312-07,+Singapore+038987" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm md:text-base font-normal transition-colors contact-info-link hover:text-vici-red">
                <span>VIEW ON GOOGLE MAPS</span>
                <span class="text-vici-red font-normal">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spacer for scrolling -->
    <div id="contact-scroll-spacer" style="height: 200vh;"></div>
  `;
}
