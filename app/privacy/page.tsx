import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Tekk Collective collects, uses, and protects your personal data. UK GDPR-aligned privacy policy."
};

export default function Privacy() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <UnicornBackground />

      {/* Hero strip — compact, no full-screen takeover for legal pages */}
      <section className="relative pt-32 pb-16 px-6">
        <Navbar />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm font-light">
            Last updated: 9 May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto prose prose-invert prose-light text-white/70 font-light leading-relaxed space-y-10">

          <div className="border-l-2 border-white/20 pl-6 py-2 bg-white/5">
            <p className="text-white/60 text-sm m-0">
              This is the Tekk Collective privacy policy. We&apos;ve written it in plain English so you
              can actually read it. If anything is unclear, email <a className="underline hover:text-white" href="mailto:atanu@tekkcollective.com">atanu@tekkcollective.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Who we are</h2>
            <p>
              Tekk Collective Ltd (&ldquo;Tekk Collective&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
              UK-registered company with headquarters in Manchester, England, and engineering teams in
              Lagos and Abuja, Nigeria. For the purposes of UK GDPR, we are the data controller for
              personal data collected through tekkcollective.com.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">What data we collect</h2>
            <p>We collect personal data in two ways:</p>
            <ul className="list-none space-y-2 pl-0">
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> <strong className="text-white/80">Contact form submissions.</strong> When you submit our contact form, we collect the name, email address, subject line, and message you provide.</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> <strong className="text-white/80">Direct correspondence.</strong> If you email us directly, we receive whatever you put in the email.</li>
            </ul>
            <p className="mt-4">
              We do not currently use cookies for analytics, advertising, or tracking. We do not run
              a Customer Relationship Management (CRM) tool that profiles visitors. The site is
              statically rendered and your browser&apos;s normal request data (IP, user agent) is
              handled only by our hosting provider for the duration of serving each request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Why we use your data</h2>
            <p>
              We use the personal data you submit through the contact form solely to respond to
              your enquiry, scope potential work, and follow up on the conversation you started.
              That&apos;s it. We do not add you to a marketing list, sell your details, or share
              them with third parties for unrelated purposes.
            </p>
            <p className="mt-4">
              The lawful basis for this processing is &ldquo;legitimate interests&rdquo; (UK GDPR
              Article 6(1)(f)) — specifically, our legitimate interest in answering people who
              have actively reached out to us about our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Who else sees your data</h2>
            <p>Two third parties are involved in delivering this site:</p>
            <ul className="list-none space-y-2 pl-0">
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> <strong className="text-white/80">Web3Forms</strong> — our contact-form backend. They receive your form submission and forward it to us by email. See their privacy policy at <a className="underline hover:text-white" href="https://web3forms.com/privacy-policy" target="_blank" rel="noopener noreferrer">web3forms.com/privacy-policy</a>.</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> <strong className="text-white/80">Our hosting provider</strong> — receives standard web-server request data when your browser loads pages.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">International transfers</h2>
            <p>
              Tekk Collective has team members in the UK and Nigeria. Personal data you submit may
              be accessed from either location for the purpose of responding to you. We rely on
              UK GDPR-recognised safeguards for any transfer outside the UK.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">How long we keep your data</h2>
            <p>
              We retain contact-form submissions and email correspondence for as long as is
              reasonable to handle the conversation and any follow-up — typically up to two years
              from your last contact, after which we delete unless we have an active engagement
              with you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-none space-y-2 pl-0">
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Access the personal data we hold about you</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Have inaccurate data corrected</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Have your data erased (&ldquo;right to be forgotten&rdquo;)</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Object to processing or restrict it</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Receive your data in a portable format</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Complain to the UK Information Commissioner&apos;s Office (<a className="underline hover:text-white" href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>) if you think we&apos;ve mishandled your data</li>
            </ul>
            <p className="mt-4">
              To exercise any of these, email <a className="underline hover:text-white" href="mailto:atanu@tekkcollective.com">atanu@tekkcollective.com</a>. We&apos;ll respond within one calendar month.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Children</h2>
            <p>
              This site is not directed at children, and we do not knowingly collect personal
              data from anyone under 16.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Changes to this policy</h2>
            <p>
              If we change this policy, we&apos;ll update the &ldquo;Last updated&rdquo; date at the top.
              Material changes will be flagged on the homepage for at least 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Contact</h2>
            <p>
              Email: <a className="underline hover:text-white" href="mailto:atanu@tekkcollective.com">atanu@tekkcollective.com</a><br />
              Phone: +44 7375 433 203<br />
              Tekk Collective Ltd, Manchester, United Kingdom
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
