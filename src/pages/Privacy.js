// Privacy Policy Page
export function renderPrivacy() {
  return `
    <!-- Privacy Policy Content Section -->
    <section class="bg-vici-black text-vici-white py-12 md:py-16 lg:py-20 px-5 md:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8 md:mb-12 lg:mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-vici-white mb-2 md:mb-4">Privacy <span style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: bold;">Policy</span></h1>
          <p class="text-xs md:text-sm text-vici-white/60 uppercase tracking-wider mb-6 md:mb-8">LAST UPDATED: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <!-- Privacy Policy Content -->
        <div class="space-y-8 md:space-y-12">
          <!-- Introduction -->
          <div>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              VICI Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </div>

          <!-- Information We Collect -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Information We Collect</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg md:text-xl font-medium text-vici-white mb-2 md:mb-3">Personal Information</h3>
                <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
                  <li>Fill out our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or other means</li>
                  <li>Request information about our services</li>
                </ul>
                <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
                  This information may include your name, email address, company name, phone number, and any other information you choose to provide.
                </p>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-medium text-vici-white mb-2 md:mb-3">Automatically Collected Information</h3>
                <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                </p>
              </div>
            </div>
          </div>

          <!-- How We Use Your Information -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">How We Use Your Information</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our services and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </div>

          <!-- Information Sharing -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Information Sharing and Disclosure</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, property, or safety, or that of our clients or others</li>
              <li>In connection with a business transfer, such as a merger or acquisition</li>
            </ul>
          </div>

          <!-- Data Security -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Data Security</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <!-- Your Rights -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Your Rights</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed ml-4 list-disc">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mt-3">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <!-- Cookies -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Cookies and Tracking Technologies</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>

          <!-- Third-Party Links -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Third-Party Links</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <!-- Children's Privacy -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Children's Privacy</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </div>

          <!-- Changes to Privacy Policy -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Changes to This Privacy Policy</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-xl md:text-2xl font-medium text-vici-white mb-4 md:mb-6">Contact Us</h2>
            <p class="text-base md:text-lg text-vici-white/80 leading-relaxed mb-3">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div class="space-y-2 text-base md:text-lg text-vici-white/80 leading-relaxed">
              <p><strong>VICI Studio</strong></p>
              <p>7 Temasek Blvd, #12-07</p>
              <p>Singapore 038987</p>
              <p>Email: <a href="mailto:business@thevicistudio.com" class="text-vici-red hover:underline">business@thevicistudio.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}



