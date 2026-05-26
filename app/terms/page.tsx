import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for tekkcollective.com and Tekk Collective consultancy engagements."
};

export default function Terms() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <UnicornBackground />

      {/* Hero strip */}
      <section className="relative pt-32 pb-16 px-6">
        <Navbar />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm font-light">
            Last updated: 9 May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto text-white/70 font-light leading-relaxed space-y-10">

          <div className="border-l-2 border-white/20 pl-6 py-2 bg-white/5">
            <p className="text-white/60 text-sm m-0">
              These terms cover your use of tekkcollective.com. Consultancy engagements have their
              own contracts; nothing here overrides whatever we&apos;ve signed for a specific project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Who we are</h2>
            <p>
              Tekk Collective Ltd (&ldquo;Tekk Collective&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
              is a UK-registered company headquartered in Manchester, England.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Acceptance</h2>
            <p>
              By using tekkcollective.com you agree to these terms. If you don&apos;t agree, please
              don&apos;t use the site. Continued use after we change the terms counts as acceptance
              of the updated version.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">What this site is</h2>
            <p>
              tekkcollective.com is the marketing website of Tekk Collective. It describes our
              services, our in-house products (Sentino AI, GAVL, YALP, Raspberry Pi Micro-Cloud),
              our team, and our work, and provides a way to contact us. It is not a contract for
              services and it is not a legally binding offer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Use of the site</h2>
            <p>You agree not to:</p>
            <ul className="list-none space-y-2 pl-0">
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Use the site to break the law or anyone else&apos;s rights</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Probe, scan, or test the vulnerability of the site without our written permission</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Submit content through the contact form that is unlawful, defamatory, or designed to mislead us</li>
              <li className="pl-6 relative"><span className="absolute left-0 text-white/40">·</span> Scrape the site at a rate that interferes with normal operation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Intellectual property</h2>
            <p>
              The Tekk Collective name, logo, copy, and design on this site are ours (or used
              under licence) and protected under UK and international copyright and trademark
              law. You may share links to pages on the site freely. You may not republish our
              copy or visual assets without written permission.
            </p>
            <p className="mt-4">
              References to third-party brands (universities, partner companies, technologies) are
              made for descriptive purposes only and remain the property of their respective
              owners.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Our products</h2>
            <p>
              Tekk Collective&apos;s in-house products (including Sentino AI at sentinoai.com) have
              their own terms of service when accessed at their respective domains. The terms on
              this page do not govern your use of those products.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Accuracy</h2>
            <p>
              We try hard to keep the information on this site accurate and current. We don&apos;t
              guarantee that every page is free of errors or out-of-date claims. If you spot
              something wrong, tell us at <a className="underline hover:text-white" href="mailto:atanu@tekkcollective.com">atanu@tekkcollective.com</a> and we&apos;ll fix it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Limitation of liability</h2>
            <p>
              The site is provided &ldquo;as is&rdquo;. To the extent permitted by law, Tekk Collective
              is not liable for any indirect, incidental, special, or consequential losses arising
              from your use of the site. Nothing in these terms limits liability for death,
              personal injury caused by negligence, fraud, or any other liability that cannot be
              limited under English law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Governing law</h2>
            <p>
              These terms and any dispute arising from them are governed by the laws of England
              and Wales. The courts of England and Wales have exclusive jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-thin text-white mb-4">Changes</h2>
            <p>
              We may update these terms from time to time. We&apos;ll change the &ldquo;Last updated&rdquo;
              date at the top. Material changes will be flagged on the homepage for at least 30 days.
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
