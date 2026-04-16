// Terms of Use Page
export function renderTerms() {
  return `
    <!-- Terms of Use Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- TERMS Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">TERMS</p>
        </div>

        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-vici-white mb-6 md:mb-8">Terms of <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Use</span></h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider mb-6 md:mb-8">LAST UPDATED: 28 JANUARY 2026</p>
        </div>

        <!-- Terms of Use Content -->
        <div class="space-y-8 md:space-y-12">
          <!-- Introduction -->
          <div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              These Terms of Use ("Terms") govern your access to and use of the website <a href="https://www.thevicistudio.com" class="text-vici-red hover:underline">www.thevicistudio.com</a> ("Site"), operated by VICI STUDIO ("we", "our", or "us").
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              By accessing or using this Site, you agree to be bound by these Terms. If you do not agree, please discontinue use of the Site.
            </p>
          </div>

          <!-- 1. Use of the Site -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">1. Use of the Site</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              You may use this Site solely for lawful purposes and in accordance with these Terms.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
              <li>Use the Site in any manner that violates applicable laws or regulations</li>
              <li>Interfere with or disrupt the operation, security, or functionality of the Site</li>
              <li>Introduce viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorised access to any systems, servers, or data connected to the Site</li>
              <li>Use automated systems (including bots or scrapers) to access the Site without permission</li>
            </ul>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              We may suspend or restrict access to the Site where misuse is suspected.
            </p>
          </div>

          <!-- 2. Intellectual Property -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">2. Intellectual Property</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              All content on this Site, including but not limited to text, graphics, logos, images, videos, layouts, and software, is owned by or licensed to VICI STUDIO and is protected under applicable intellectual property laws.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              You may view and use the content for personal or internal business purposes only.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              You must not copy, reproduce, modify, distribute, publish, or create derivative works from any content on this Site without prior written consent from VICI STUDIO.
            </p>
          </div>

          <!-- 3. Accuracy of Information -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">3. Accuracy of Information</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              While we take reasonable steps to ensure that information on this Site is accurate and up to date, we do not warrant or guarantee its completeness, accuracy, or reliability.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              Content on this Site is provided for general information purposes only and should not be relied upon as professional or legal advice.
            </p>
          </div>

          <!-- 4. Limitation of Liability -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">4. Limitation of Liability</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              To the fullest extent permitted by law, VICI STUDIO shall not be liable for any loss, damage, or expense arising out of or in connection with your use of, or inability to use, this Site.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              This includes, without limitation, indirect or consequential losses, loss of profits, loss of business, loss of data, or loss of goodwill, even if such loss was foreseeable.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              Nothing in these Terms limits liability where such limitation is not permitted under Singapore law.
            </p>
          </div>

          <!-- 5. Third-Party Links -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">5. Third-Party Links</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              This Site may contain links to third-party websites for convenience or reference. These websites are not controlled by VICI STUDIO, and we are not responsible for their content, availability, or practices.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              Accessing third-party websites is at your own risk and subject to their respective terms and policies.
            </p>
          </div>

          <!-- 6. Privacy -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">6. Privacy</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              Your use of this Site is also governed by our <a href="/privacy" data-route="privacy" class="text-vici-red hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect personal data in accordance with the Personal Data Protection Act 2012 of Singapore.
            </p>
          </div>

          <!-- 7. Changes to These Terms -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">7. Changes to These Terms</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We may update or revise these Terms at any time. Updated Terms will be posted on this page with a revised effective date.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              Your continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </div>

          <!-- 8. Governing Law and Jurisdiction -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">8. Governing Law and Jurisdiction</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of Singapore.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </div>

          <!-- 9. Contact Information -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">9. Contact Information</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              If you have any questions regarding these Terms, please contact us at:
            </p>
            <div class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed">
              <p><strong>VICI STUDIO Pte. Ltd.</strong></p>
              <p>Address: 7 Temasek Boulevard #12-07, Singapore 038987</p>
              <p>Email: <a href="mailto:business@thevicistudio.com" class="text-vici-red hover:underline">business@thevicistudio.com</a></p>
              <p>Phone: <a href="tel:+6592320483" class="text-vici-red hover:underline">+65 9232 0483</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
