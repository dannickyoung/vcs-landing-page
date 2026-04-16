// Privacy Policy Page
export function renderPrivacy() {
  return `
    <!-- Privacy Policy Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- PRIVACY Label -->
        <div class="mb-6 md:mb-8 flex items-center gap-2">
          <svg class="w-4 h-4 text-vici-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <p class="text-xs md:text-sm text-vici-red uppercase tracking-wider">PRIVACY</p>
        </div>

        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-vici-white mb-6 md:mb-8">Privacy <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Policy</span></h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider mb-6 md:mb-8">EFFECTIVE DATE: 28 JANUARY 2026</p>
        </div>

        <!-- Privacy Policy Content -->
        <div class="space-y-8 md:space-y-12">
          <!-- Introduction -->
          <div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              This Privacy Policy describes how VICI STUDIO ("we", "our", or "us") collects, uses, discloses, and protects personal data in accordance with the Personal Data Protection Act 2012 of Singapore ("PDPA").
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              This Policy applies to personal data collected through our website <a href="https://www.thevicistudio.com" class="text-vici-red hover:underline">www.thevicistudio.com</a> ("Site") and any related services.
            </p>
          </div>

          <!-- 1. Personal Data We Collect -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">1. Personal Data We Collect</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-4">
              Depending on how you interact with us, we may collect the following personal data:
            </p>

            <div class="space-y-4">
              <div>
                <h3 class="text-lg md:text-xl font-medium text-vici-white mb-2 md:mb-3">A. Personal Data You Provide Voluntarily</h3>
                <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact number</li>
                  <li>Company name</li>
                  <li>Any other information you submit through contact forms, enquiry forms, or direct communications</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg md:text-xl font-medium text-vici-white mb-2 md:mb-3">B. Automatically Collected Data</h3>
                <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our Site</li>
                  <li>Referring URLs</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg md:text-xl font-medium text-vici-white mb-2 md:mb-3">C. Cookies and Similar Technologies</h3>
                <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                  We may use cookies and similar technologies to enable core website functionality, analyse website traffic, and improve user experience. These technologies may include third-party analytics and advertising tools that collect information about your use of our Site. You may manage or disable cookies through your browser settings.
                </p>
              </div>
            </div>
          </div>

          <!-- 2. Purposes for Collection, Use, and Disclosure -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">2. Purposes for Collection, Use, and Disclosure</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              We may collect, use, and disclose personal data for one or more of the following purposes:
            </p>
            <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
              <li>To operate, maintain, and manage our website and services</li>
              <li>To respond to enquiries, requests, or feedback</li>
              <li>To communicate with you regarding our services or business matters</li>
              <li>To send marketing or promotional communications where you have provided consent</li>
              <li>To understand how users interact with our Site and improve its performance and content</li>
              <li>To manage business operations, internal reporting, and compliance</li>
              <li>To comply with applicable laws, regulations, codes of practice, or legal obligations</li>
              <li>To protect our legal rights, business interests, and the security of our systems</li>
            </ul>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              We will not use your personal data for purposes beyond those stated above unless permitted or required by law, or with your consent.
            </p>
          </div>

          <!-- 3. Consent -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">3. Consent</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              By voluntarily providing your personal data to us, you consent to our collection, use, and disclosure of your personal data for the purposes stated in this Privacy Policy.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              Where required under the PDPA, we will obtain your express consent before collecting, using, or disclosing your personal data. In certain circumstances, consent may be deemed under the PDPA, such as where you voluntarily provide personal data for a reasonable purpose.
            </p>
          </div>

          <!-- 4. Withdrawal of Consent -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">4. Withdrawal of Consent</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              You may withdraw your consent to the collection, use, or disclosure of your personal data at any time by contacting us at the details provided below.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              Upon receiving your request, we will process it within a reasonable time, in accordance with the PDPA. Please note that withdrawing consent may affect our ability to continue providing certain services or responding to your requests.
            </p>
          </div>

          <!-- 5. Disclosure of Personal Data -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">5. Disclosure of Personal Data</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              We may disclose your personal data to the following parties, where necessary for the purposes stated above:
            </p>
            <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
              <li>Service providers and vendors who perform services on our behalf (e.g. hosting, analytics, marketing, payment processing)</li>
              <li>Professional advisers, including legal, accounting, or audit service providers</li>
              <li>Regulatory or governmental authorities, where required by law</li>
              <li>Business transferees, in the event of a merger, acquisition, or sale of business assets</li>
            </ul>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              We take reasonable steps to ensure that such third parties are bound by confidentiality and data protection obligations.
            </p>
          </div>

          <!-- 6. Access and Correction -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">6. Access and Correction of Personal Data</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              You may request access to, or correction of, your personal data held by us by submitting a written request using the contact details below.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              We will respond to such requests as soon as reasonably possible and generally within 30 days, unless otherwise permitted under the PDPA.
            </p>
          </div>

          <!-- 7. Protection of Personal Data -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">7. Protection of Personal Data</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect personal data against unauthorised access, collection, use, disclosure, copying, modification, disposal, or similar risks.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <!-- 8. Retention -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">8. Retention of Personal Data</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We will retain personal data only for as long as it is necessary to fulfil the purposes for which it was collected, or as required or permitted by applicable laws.
            </p>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              When personal data is no longer required, we will take reasonable steps to securely delete or anonymise it.
            </p>
          </div>

          <!-- 9. Transfer Outside Singapore -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">9. Transfer of Personal Data Outside Singapore</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              Where personal data is transferred outside Singapore, we will take reasonable steps to ensure that the recipient provides a standard of protection comparable to that required under the PDPA.
            </p>
          </div>

          <!-- 10. Updates -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">10. Updates to This Privacy Policy</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date.
            </p>
          </div>

          <!-- 11. Contact Information -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">11. Contact Information</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              If you have any questions, requests, or concerns regarding this Privacy Policy or our handling of personal data, please contact us at:
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
