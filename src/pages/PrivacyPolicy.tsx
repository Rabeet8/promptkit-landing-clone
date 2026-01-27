import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">a. Information You Provide</h3>
              <p>When you create an account or use snapNtrade, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Product details you post</li>
                <li>Messages and communication within the app</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">b. Images and Media (Camera Permission)</h3>
              <p>snapNtrade requires access to your device camera to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Capture real-time product images when posting an ad</li>
                <li>Ensure images are current and authentic</li>
              </ul>
              <p>We do not access your photo gallery without permission, and images are only captured during listing creation.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">c. Location Information</h3>
              <p>We collect approximate location data when you post an ad to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Show relevant listings nearby</li>
                <li>Improve transparency between buyers and sellers</li>
              </ul>
              <p>Location is captured only during ad posting, not continuously.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">d. Notifications</h3>
              <p>We use notifications to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Send important updates</li>
                <li>Notify you about offers, messages, or account activity</li>
              </ul>
              <p>You can disable notifications at any time from your device settings.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">e. Usage & Device Information</h3>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>App usage data</li>
                <li>Device type and operating system</li>
                <li>Crash reports and performance data</li>
              </ul>
              <p>This information helps us improve reliability and user experience.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Operate and maintain snapNtrade</li>
              <li>Verify listings and prevent spam or duplicate ads</li>
              <li>Generate digital invoices for completed transactions</li>
              <li>Improve platform security and performance</li>
              <li>Communicate important updates</li>
            </ul>
            <p className="font-medium">snapNtrade does not sell user data to third parties.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. AI & Image Analysis</h2>
            <p>Images captured during listing creation may be processed by automated systems to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analyze product condition</li>
              <li>Detect duplicate or reused images</li>
            </ul>
            <p>This analysis is used only to improve trust and transparency on the platform.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Data Sharing</h2>
            <p>We may share limited data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>With service providers who help operate the platform (hosting, analytics)</li>
              <li>When required by law or legal request</li>
            </ul>
            <p className="font-medium">snapNtrade does not share personal data for advertising or marketing purposes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Data Storage & Security</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>User data is stored securely using industry-standard practices</li>
              <li>Access is restricted and monitored</li>
              <li>Reasonable measures are taken to prevent unauthorized access</li>
            </ul>
            <p>While no system is completely secure, snapNtrade actively works to protect your information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. User Rights & Controls</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Update or correct your information</li>
              <li>Request account deletion</li>
            </ul>

            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-medium text-foreground">Account Deletion</h3>
              <p>SnapNTrade provides users with full control over their account and data.</p>
              <p>Users can permanently delete their SnapNTrade account directly from within the app by navigating to:</p>
              <p className="font-medium bg-muted px-4 py-2 rounded-lg inline-block">Profile → Settings → Manage Account → Delete Account</p>
              <p>Deleting the account does not require contacting customer support and is processed automatically.</p>
              <p>When an account is deleted, the following data is permanently removed:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>User profile information</li>
                <li>Uploaded listings, ads, and demand posts</li>
                <li>Images and other media</li>
                <li>Chat messages, offers, and interaction history</li>
                <li>App usage data and device-related identifiers</li>
              </ul>
              <p>In addition to full account deletion, users may delete specific data directly from within the app without deleting their account, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Individual ads and demand posts</li>
                <li>Individual chat conversations with specific users</li>
              </ul>
              <p>Certain data may be retained for legal, security, or fraud-prevention purposes for up to 90 days, after which it is permanently deleted.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Children's Privacy</h2>
            <p>SnapNTrade is intended for general audiences and may be used by users of all ages.</p>
            <p>We do not knowingly collect personal data from children in a manner that violates applicable laws. If you believe that a child has provided personal information without appropriate consent, please contact us and we will take steps to delete such information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Third-Party Services</h2>
            <p>snapNtrade may use third-party services for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analytics</li>
              <li>Performance monitoring</li>
              <li>Notifications</li>
            </ul>
            <p>These providers are required to comply with applicable data protection standards.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Changes to This Policy</h2>
            <p>This Privacy Policy may be updated as snapNtrade evolves. Any changes will be reflected on this page with an updated date.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
            <p className="font-medium">
              <a href="mailto:syedrabeet2002@gmail.com" className="text-foreground hover:underline">
                syedrabeet2002@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
