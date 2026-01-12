// Contact Page - Contact Form and Information
export function renderContact() {
  return `
    <!-- Contact Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-vici-white mb-2 md:mb-4"><span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Contact</span> Us</h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider">GET IN TOUCH</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <!-- Contact Form -->
          <div>
            <h2 class="text-xl md:text-2xl font-light text-vici-white mb-6 md:mb-8">Send us a message</h2>
            <div class="mb-6 md:mb-8">
              <a href="https://wa.me/6592320483?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20VICI%20Studio's%20services." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm md:text-base text-vici-white/80 hover:text-vici-red transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Drop a WhatsApp message instead
              </a>
            </div>
            <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-4 md:space-y-6">
              <input type="hidden" name="access_key" value="1b88aa4e-81db-4d6f-82a6-a2a07e5d8f77">
              <input type="hidden" name="subject" value="New Contact Form Submission from VICI Studio Website">
              <input type="hidden" name="to" value="business@thevicistudio.com">
              <input type="hidden" name="from_name" value="VICI Studio Contact Form">
              <div>
                <label for="name" class="block text-xs md:text-sm text-vici-white/80 mb-1 md:mb-2">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 bg-vici-white/5 border border-vici-white/10 rounded-sm text-sm md:text-base text-vici-white placeholder-vici-white/30 focus:outline-none focus:border-vici-red transition-colors"
                  placeholder="Your name"
                >
              </div>
              <div>
                <label for="email" class="block text-xs md:text-sm text-vici-white/80 mb-1 md:mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 bg-vici-white/5 border border-vici-white/10 rounded-sm text-sm md:text-base text-vici-white placeholder-vici-white/30 focus:outline-none focus:border-vici-red transition-colors"
                  placeholder="your.email@example.com"
                >
              </div>
              <div>
                <label for="company" class="block text-xs md:text-sm text-vici-white/80 mb-1 md:mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  class="w-full px-3 md:px-4 py-2 md:py-3 bg-vici-white/5 border border-vici-white/10 rounded-sm text-sm md:text-base text-vici-white placeholder-vici-white/30 focus:outline-none focus:border-vici-red transition-colors"
                  placeholder="Your company"
                >
              </div>
              <div>
                <label for="subject" class="block text-xs md:text-sm text-vici-white/80 mb-1 md:mb-2">Subject *</label>
                <select 
                  id="subject" 
                  name="service_type" 
                  required
                  class="w-full pl-3 md:pl-4 pr-8 md:pr-10 py-2 md:py-3 bg-vici-white/5 border border-vici-white/10 rounded-sm text-sm md:text-base text-vici-white focus:outline-none focus:border-vici-red transition-colors appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="Brand Design">Brand Design</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Content Production">Content Production</option>
                  <option value="AI Application Development">AI Application Development</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-xs md:text-sm text-vici-white/80 mb-1 md:mb-2">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 bg-vici-white/5 border border-vici-white/10 rounded-sm text-sm md:text-base text-vici-white placeholder-vici-white/30 focus:outline-none focus:border-vici-red transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                class="standard-button"
              >
                SEND MESSAGE <span class="text-vici-red">→</span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-xl md:text-2xl font-light text-vici-white mb-6 md:mb-8">Contact Information</h2>
            <div class="space-y-6 md:space-y-8 mb-8 md:mb-12">
              <div>
                <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-2">Location</p>
                <a href="https://www.google.com/maps/search/?api=1&query=7+Temasek+Blvd,+%2312-07,+Singapore+038987" target="_blank" rel="noopener noreferrer" class="text-sm text-vici-white/80 hover:text-vici-red transition-colors block">
                  7 Temasek Blvd, #12-07<br>
                  Singapore 038987
                </a>
              </div>
              <div>
                <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:business@thevicistudio.com" class="text-sm text-vici-white/80 hover:text-vici-red transition-colors">business@thevicistudio.com</a>
              </div>
              <div>
                <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-2">WhatsApp</p>
                <a href="https://wa.me/6592320483" target="_blank" rel="noopener noreferrer" class="text-sm text-vici-white/80 hover:text-vici-red transition-colors">+65 9232 0483</a>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="pt-6 md:pt-8">
              <p class="text-xs text-vici-white/60 uppercase tracking-wider mb-3 md:mb-4">Office Hours</p>
              <div class="space-y-1 md:space-y-2 text-xs md:text-sm text-vici-white/80">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

