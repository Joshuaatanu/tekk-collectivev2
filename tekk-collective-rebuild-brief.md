# Tekk Collective — Website Rebuild Brief

**Project:** Comprehensive content and positioning overhaul of tekkcollective.com
**Author:** Joshua Atanu (Co-Founder)
**Goal:** Transform the existing site from a generic "tech consultancy" template with fabricated credentials into an honest, distinctive, bi-national AI consultancy site that wins real clients across the UK, EU, and West Africa.

---

## 1. Context: who we actually are

### Company facts (use these, not what's currently on the site)

- **Name:** Tekk Collective
- **Headquarters:** Manchester, UK
- **Legal entity:** Tekk Collective Ltd (UK)
- **Founders & team locations:**
  - **Joshua Atanu** — Co-Founder & CTO. Based between Manchester (UK) and [GERMANY_CITY — to be filled in]. Owns: technical direction, strategy, business development, EU market. Also leads in-house product builds (Sentino AI, GAVL, YALP).
  - **Oyinkansola Soleye** — Co-Founder. Based in Manchester, UK. Owns: design, UX, partnerships, UK market relationships.
- **Engineering teams:** Lagos and Abuja, Nigeria — senior AI, frontend, backend, and cloud engineers shipping the work alongside the Manchester founders.
- **In-house products:**
  - **Sentino AI** (sentinoai.com) — AI-powered academic research platform; multi-source search across arXiv, PubMed, IEEE Xplore, Semantic Scholar; RAG chat over PDFs. Built and validated in partnership with the University of Greater Manchester. Live and used by researchers globally.
  - **GAVL** — open legal AI foundation model fine-tuned for Nigerian law; powers a constitutional chatbot, contract generator, and document analysis tooling. (Correct spelling: **GAVL** uppercase. The earlier voice transcription that produced "Gavil" / "Gavl" is superseded — the fellowship deck at fellowship.tekkcollective.com confirms GAVL.)
  - **YALP** ("Yet Another Impressive LLM Platform") — eval-first LLM platform; multi-model playground, prompt versioning, cost tracking, RAG builder. Stack: Go, PostgreSQL, Docker, SSE, Grafana.
  - **Raspberry Pi Micro-Cloud** — Docker-based micro-cloud running on Raspberry Pi 4 clusters; deployed for a Nigerian startup to simulate cloud deployments locally and substantially reduce infrastructure testing cost.

### Strategic positioning

Tekk Collective is a **bi-national AI consultancy** with three distinct go-to-market motions:

1. **UK** — AI implementation for SMEs, scale-ups, and public sector (Manchester-led)
2. **EU** — UK-quality AI consulting for European clients without Brexit friction (Joshua-led from Germany)
3. **West Africa** — AI consulting for Nigerian and West African businesses (Lagos/Abuja-based delivery and BD)

**The wedge:** cross-border AI work between these three regions — UK companies entering African or EU markets, African companies expanding internationally, EU companies entering Africa, and diaspora-founded businesses operating across geographies. Almost no other consultancy can credibly serve all three regions with native presence in each.

### One-line description (use this, or a close variant, on the homepage)

> Tekk Collective is an AI consultancy headquartered in Manchester, with engineering teams in Lagos and Abuja and a presence in Germany. We help businesses across the UK, EU, and West Africa implement practical AI — and we specialise in cross-border AI projects most consultancies can't credibly deliver.

---

## 2. The brutal honest reality of the current site

The site has serious credibility problems that must be fixed. **Treat these as Priority 0 — do these before any redesign or new features.**

### Things on the site that are not true and must be removed or replaced

1. **About page claims "guided over 500 companies through their digital transformation journeys, from ambitious startups to Fortune 500 enterprises."** This is false. Remove it entirely.
2. **Work page lists clients that appear to be fabricated:**
   - GlobalBank Corp, MedConnect Inc, RetailForward, Metro City Council, LearnForward Academy, LogiFlow Systems
   - Metrics like "300% increase in transaction processing speed", "99.9% uptime", "500K+ consultations completed", "40% reduction in patient wait times"
   - **Action:** Remove ALL of these. Replace with real projects only, even if there are only 2–3. If we don't have any yet, replace the Work page with a "Selected Projects" section featuring Sentino AI as the primary case study, plus any genuinely real client work.
3. **Homepage testimonials from RoyalQ Assistant, Emperico Works, TechFlow Solutions** — verify these are real clients and real quotes. If not real, remove them.
4. **Blog has six articles dated March 2024** with generic AI-template titles. Verify whether these were actually written by the listed authors or are AI-generated filler. If filler, delete them entirely. Replace with real content over time (see Section 6).
5. **Contact FAQ claims "95% project success rate"** — remove unless we have evidence.
6. **Date inconsistencies:** Site says founded 2019, copyright 2023, contact page shows February 2026. Audit every date reference and make consistent.
7. ~~**Surname inconsistency:** "Olaoluwa Olaogun" (About) vs "Olaoluwa Olagun" (Blog). Correct spelling is **Olaogun** — fix everywhere.~~ **Resolved (and superseded).** Olaoluwa Olaogun has been removed from the site entirely; CTO scope consolidated to Joshua Atanu. See Appendix A.6 for details.

### Dead links to fix everywhere

- Footer social icons (Twitter, Instagram, Facebook, GitHub) all currently `href="#"` — either link to real accounts or remove the icons entirely. Don't leave dead links.
- Footer "Feedback / Email / Phone" links all `href="#"` — same fix.
- Update copyright year to current year (2026) and set up to auto-update.

### Other content to remove or rewrite

- All cosmic/space metaphors throughout the site ("galaxy-minded experts", "blazing supernova of success", "stardust", "cosmic solutions", "align your technological stars"). This language is wrong for a Manchester AI consultancy serving Northern English business culture and German Mittelstand buyers. Replace with plain, specific, confident language.
- Emoji icons (⚡ 👥 🌱 🔍) on About page values section — replace with proper icon set (e.g., Tabler, Heroicons, or Lucide).

---

## 3. New site architecture

### Top-level navigation (replace current)

```
Home  |  About  |  Services  |  Sentino AI  |  Regions  |  Insights  |  Contact
```

Notes:
- **Remove** the duplicate "Project" and "Work" pages — consolidate into a single "Case Studies" section, optionally accessed from Services or Home.
- **Add** a dedicated "Sentino AI" page — this is our single biggest credibility asset and must have a featured place in the navigation.
- **Add** a "Regions" page (or dropdown) with three sub-pages: UK, Europe, West Africa.
- **Rename** "Blog" → "Insights" (keeps consultancy tone).
- **Remove** "Careers" from primary nav unless we are actively hiring; move to footer.

### Page-by-page specification

#### Homepage (`/`)

**Hero section:**
- H1: short, specific, AI-focused. E.g. *"Practical AI for businesses across the UK, EU, and West Africa."*
- Sub-hero: the one-line description from Section 1 above.
- Two CTAs: primary "Book a consultation" → /contact; secondary "Meet Sentino AI" → /sentino-ai
- Below hero: small location strip — "Manchester · Lagos · Abuja · Germany"

**Section: Three regions** (replace the "Digital Transformation / Expert Solutions" panels)
- Three cards: UK / Europe / West Africa
- Each card: one-line value prop + "Learn more" link to the regional page

**Section: What we do**
- Three (max four) services. Lead with AI Implementation. See Section on Services for the actual list. Cut services from current six down to a focused three.

**Section: Featured work**
- Sentino AI as the headline case study (full-bleed visual, brief description, link to /sentino-ai)
- Plus 1–2 real client projects (only when we have them — leave this section as "Sentino AI" alone if we don't yet)

**Section: Cross-border practice**
- Brief callout for our cross-border specialism — "When your AI project crosses regions, you need a team that does too." Link to a /cross-border page or Regions overview.

**Section: Trust strip**
- Real client logos (only real ones, no fakes). If we have fewer than 3, omit this section entirely.

**Section: Final CTA**
- Single CTA: "Tell us about your project" → /contact

#### About page (`/about`)

**Replace the current copy entirely.** New structure:

- **Hero:** "We're an AI consultancy built across borders." Subtitle: 1–2 sentences on the founding premise.
- **Our story:** 2–3 short paragraphs. Honest. Founded by [year] by Joshua, Oyinkansola, and Olaoluwa, who saw a gap between London-priced AI consultancies and the practical needs of UK SMEs, German Mittelstand, and growing African businesses. Note that we built and shipped Sentino AI in-house as proof we ship real AI products, not just advise.
- **The team:**
  - Three founder cards with: real photo, name, title, city, one-sentence bio, LinkedIn URL.
  - **Joshua Atanu** — Co-Founder · Manchester / [GERMANY_CITY]
  - **Oyinkansola Soleye** — Co-Founder · Manchester
  - **Olaoluwa Olaogun** — Chief Technology Officer · Manchester
  - Below the founders: brief mention of the engineering team in Lagos and Abuja, with a group photo if available.
- **How we work:** Replace the emoji values with three or four genuine principles, each with a sentence of explanation. Suggested:
  - *Practical over flashy* — we build AI that actually delivers measurable value.
  - *Honest about scope* — we tell clients what AI can and can't do for them.
  - *Cross-border by design* — our team works across three regions, so our clients can too.
  - *Build, then advise* — we ship our own AI products (Sentino AI) so we know what implementation actually involves.
- **CTA:** "Talk to us about your project" → /contact

#### Services page (`/services`)

**Cut from six services to three** (or four max). AI must be the headline.

Suggested new structure:

1. **AI Implementation** (HEADLINE)
   - LLM and generative AI integration
   - AI agents and workflow automation
   - RAG systems and document intelligence
   - AI strategy and feasibility assessment

2. **Custom Software Development**
   - Web applications
   - Mobile applications
   - API development and system integration
   - Cloud architecture (consolidate the current "Cloud Solutions" service into here)

3. **Data & Analytics**
   - Data strategy and infrastructure
   - Business intelligence and dashboards
   - Machine learning models
   - Data visualisation

**Remove these from the services list:**
- "Cybersecurity" — out of scope for a small AI-focused firm; will lose us credibility
- "Digital Innovation" as a separate item — too vague; folded into AI Implementation
- "Strategy Consulting" as a separate item — folded into AI Implementation feasibility/strategy work

**Process section:** keep the four-step Discovery → Strategy → Implementation → Optimisation framework. It's solid.

**CTA:** Replace "View Service Guide" link (broken) with a real "Book a 30-minute consultation" → calendar booking link (Cal.com or Calendly).

#### Sentino AI page (`/sentino-ai`) — NEW

A dedicated page treating Sentino AI as a flagship case study and proof of capability:

- **Hero:** "We don't just consult on AI. We build it."
- Screenshot or product visual of Sentino AI
- What it is: 200M+ papers, AI analysis, literature reviews, PDF chat, used by researchers globally
- The technical story: what we built, how we built it, what we learned
- Link to sentinoai.com to try it
- Why this matters for clients: "When you hire Tekk Collective, you're hiring a team that has shipped a production AI product — not one that's only talked about it."
- CTA: "Discuss your AI project with the team that built Sentino AI" → /contact

#### Regions section (`/regions`) — NEW

**Overview page** (`/regions`): brief intro to the three-region structure with three cards linking to the sub-pages.

**Three regional landing pages**, each with:

##### `/regions/uk`
- Hero: "AI consultancy for UK businesses, headquartered in Manchester."
- Value prop: senior AI expertise at sensible Northern rates, cross-border delivery capacity
- Memberships and credentials (once we have them): Manchester Digital, pro-manchester, G-Cloud, Made Smarter
- UK case studies (only real ones)
- UK contact details and Manchester address
- CTA: "Book a UK consultation"

##### `/regions/europe`
- Hero: "UK-quality AI consulting for European clients, without Brexit friction."
- Value prop: founder presence in Germany, EUR invoicing via UK Ltd, EU data residency, no procurement complications
- Note: "Currently serving European clients through our UK entity. Local incorporation in Germany available on request for clients with specific procurement requirements."
- European case studies (when we have them)
- CTA: "Book a European consultation"

##### `/regions/west-africa`
- Hero: "AI consultancy with international standards, built locally."
- Value prop: Lagos/Abuja engineering teams, Nigerian entity for local contracting, UK presence for international credibility
- West African case studies (when we have them)
- Local contact details
- CTA: "Book a West Africa consultation"

#### Cross-border page (`/cross-border`) — NEW

This is the moat. A dedicated page on UK ↔ EU ↔ Africa AI work:

- Hero: "When your AI project crosses borders, your team should too."
- Three scenarios with brief descriptions:
  - UK companies entering African or EU markets
  - African companies expanding into the UK or EU
  - EU companies entering African markets
- What makes this hard (data residency, regulatory, cultural, currency) and how we solve it
- The kinds of projects we've done or are equipped to do
- CTA: "Discuss a cross-border project" → /contact

#### Insights / Blog (`/insights`)

- **Delete all current AI-template articles** unless verified as genuinely written by the named authors.
- Start with empty state if necessary: "We publish original analysis on AI implementation across the UK, EU, and West Africa. New writing coming soon."
- As real content is added, organise by category: AI Implementation, Cross-Border, Sentino AI build notes, Regional Insights.

#### Contact page (`/contact`)

- Keep the form structure, it's fine.
- **Remove the "95% project success rate" claim** unless evidenced.
- **Update the dynamically-shown date** (currently shows "Saturday, February 14, 2026" hard-coded — make it actually dynamic or remove it).
- Add real Manchester address (registered office or correspondence address).
- Add separate contact details for each region:
  - UK: Manchester address, UK phone, UK email
  - Europe: Joshua's email or shared inbox; note "based in Germany, contracting via UK entity"
  - West Africa: Lagos/Abuja contact details
- **Add Calendly / Cal.com booking link** as primary CTA (more effective than a contact form for consultancy buyers).
- Keep the FAQ — it's well-written. Remove any false claims.

#### Careers page (`/careers`)

- Keep the page but move out of primary navigation.
- Only show roles when actively hiring. Otherwise: "We're not actively hiring at the moment. Send your CV to [email] if you'd like us to keep you in mind for future roles across our Manchester and Lagos/Abuja teams."

---

## 4. Global / footer fixes

Apply across every page:

1. **Footer copyright:** Make dynamic — `© [current year] Tekk Collective Ltd. Manchester, UK.`
2. **Footer social links:** Either link to real accounts or remove. No `href="#"`.
3. **Footer contact links:** Same — real or remove.
4. **Footer columns** restructure to:
   - Company: About, Services, Sentino AI, Insights, Careers
   - Regions: UK, Europe, West Africa
   - Connect: real email, real phone, LinkedIn, GitHub (if used)
5. **Add legal:** Privacy Policy and Terms of Service pages (basic, GDPR-compliant). This matters for credibility and for German clients especially.
6. **Add cookie consent banner** if any analytics or tracking is used (GDPR requirement).

---

## 5. SEO and meta updates

The current SEO is generic. Update across the site:

- **Site title format:** `[Page Name] | Tekk Collective — AI Consultancy in Manchester`
- **Meta descriptions** rewritten per page with regional keywords (e.g., "AI consultancy in Manchester serving the UK, EU, and West Africa…")
- **Replace meta keywords** with: AI consultancy Manchester, AI implementation UK, AI consulting Nigeria, cross-border AI, Manchester AI agency
- **OG image:** the current `/og-image.jpg` returns a 404 by appearance — generate and upload a real OG image (1200×630) for each major page.
- **Canonical URLs:** ensure each page has a proper canonical tag.
- **Schema.org markup:**
  - Add `Organization` schema to homepage with all three locations
  - Add `LocalBusiness` schema variants per region page
  - Add `Person` schema to the team section on About
  - Add `Article` schema to Insights posts as they go live
- **Sitemap.xml:** generate and submit
- **robots.txt:** verify allowing indexing
- **Google Search Console:** add and verify
- **Bing Webmaster Tools:** add and verify (more important than people think for B2B in the UK)

---

## 6. Content rules (apply to ALL copy)

These rules govern any new content written for the site:

### What we DO
- Specific over generic. "We helped a Manchester logistics SME cut dispatch time by 30%" beats "We help businesses optimise."
- Plain, confident language. Northern English and German business audiences both respond to directness.
- Real names, real numbers, real dates.
- Reference Sentino AI as proof on every relevant page.
- Mention specific cities (Manchester, Lagos, Abuja) — this builds trust with specific buyer segments.
- Offer concrete CTAs ("Book a 30-minute consultation") not vague ones ("Learn more").

### What we DON'T do
- No fabricated client names or metrics — ever
- No "globally recognised" or "Fortune 500" claims unless literally true
- No vague superlatives ("world-class", "cutting-edge", "best-in-class")
- No cosmic/galaxy/stardust metaphors
- No emoji in body content
- No claims about company size we can't back up
- No AI-template generic blog content
- Don't say "we have offices in Germany" — we don't yet. Say "founder presence in Germany"
- Don't claim ISO certifications, awards, or partnerships we don't have

---

## 7. Technical considerations

> **Filled in by Claude Code from repo inspection on 2026-05-09.** Joshua to verify these are correct and amend if anything is off.

- **Framework:** Next.js 13.4.6 (App Router) — `app/` directory, with route folders `about/`, `blog/`, `careers/`, `contact/`, `project/`, `services/`, `work/`
- **Language:** TypeScript 5.1.3
- **Styling:** Tailwind CSS 3.3.2 — custom brand colours and animations already defined in `tailwind.config.js` (brand primary `#3B82F6`, animations: `marquee`, `float`, `fade-in`, `pulse-glow`, `slide-in`)
- **CMS:** None — content is currently hardcoded in TSX components. No headless CMS in use.
- **Hosting:** [Joshua to confirm — Vercel / Netlify / other]
- **Repo location:** Local at `/Users/atanu/dev/web/tekk-collectivev2`. [Joshua to confirm GitHub remote URL.]
- **Existing dependencies of note:** `@react-google-maps/api` (Maps), `react-markdown`, two typewriter libraries (`react-simple-typewriter`, `typewriter-effect`) — the typewriters are partly removed already per recent commit `ba60611`.

### Existing visual design system

The repo already contains two design-system documents:

- `UI-UX-DESIGN-PROMPT.md` (~691 lines) — the high-level design philosophy: minimalist, dark, glassmorphism, system fonts + Inter, blue accent on black.
- `UI-UX-DESIGN-SYSTEM-DETAILED.md` (~2,342 lines) — full detailed design system including colour, typography, spacing, components, animation, accessibility.

**These are not in conflict with this brief — they describe the visual aesthetic the current site already implements. Keep them as reference. The aesthetic itself is fine; the content sitting inside that aesthetic is the problem.** No major visual redesign is in scope here unless explicitly requested. Where this brief calls for icon replacements or footer changes, follow the existing design system's conventions.

### Suggested if starting fresh or migrating

- **Astro** or **Next.js** for performance and SEO (both excellent) — current site is already Next.js, no reason to migrate.
- **MDX-based blog/insights** for easy content management.
- **Tailwind CSS** for styling (already in use).
- **Vercel** or **Cloudflare Pages** for hosting.
- **Cal.com** (open source, self-hostable) or **Calendly** for booking.

### Performance requirements

- Lighthouse score 90+ on Performance, Accessibility, Best Practices, SEO
- Fully responsive (mobile-first)
- Web Core Vitals all green
- Image optimisation (WebP, lazy loading, proper sizing)
- All fonts self-hosted or via system fonts (no FOUT)

### Accessibility

- WCAG 2.1 AA compliance minimum
- Proper heading hierarchy
- Alt text on every image
- Keyboard navigation works throughout
- Focus states visible
- Colour contrast meets standards

---

## 8. Acceptance criteria (definition of done)

The rebuild is complete when ALL of the following are true:

### Credibility (Priority 0)
- [ ] No fabricated client names anywhere on the site
- [ ] No fabricated metrics or outcomes anywhere
- [ ] No claims of company size, awards, or certifications we don't have
- [ ] All AI-template/filler blog content removed
- [ ] Surname spelling consistent ("Olaoluwa Olaogun") everywhere
- [ ] All dates accurate and internally consistent
- [ ] Copyright year auto-updates to current year

### Functional fixes
- [ ] No `href="#"` links anywhere — all links real or removed
- [ ] Footer social links correct or removed
- [ ] Contact form working and tested
- [ ] Calendar booking link integrated and working
- [ ] All internal links resolve (no 404s)
- [ ] OG images render properly when shared on LinkedIn / Twitter / Slack

### New content
- [ ] Homepage hero rewritten with new positioning
- [ ] About page rewritten honestly with real team info
- [ ] Services cut from 6 to 3 with AI as headline
- [ ] Sentino AI page created
- [ ] Three regional pages created (UK, Europe, West Africa)
- [ ] Cross-border page created
- [ ] Cosmic/galaxy metaphors removed throughout

### SEO and meta
- [ ] Page titles and meta descriptions rewritten
- [ ] Schema.org markup implemented
- [ ] Sitemap and robots.txt verified
- [ ] Google Search Console set up
- [ ] OG images created and live

### Legal and compliance
- [ ] Privacy Policy page (GDPR-compliant)
- [ ] Terms of Service page
- [ ] Cookie consent banner if tracking is used
- [ ] ICO registration referenced in privacy policy

### Performance and accessibility
- [ ] Lighthouse 90+ on all four scores
- [ ] WCAG 2.1 AA pass
- [ ] Tested on mobile, tablet, desktop
- [ ] Tested in Chrome, Safari, Firefox, Edge

---

## 9. Out of scope for this rebuild

To keep this focused, the following are explicitly NOT part of this work:

- Setting up a German legal entity (premature — see strategy notes)
- Building a custom CMS (use existing tools)
- Creating new case studies from scratch (we'll add these as real engagements complete)
- Translating the site into German or French (worth doing later, not now)
- Building Sentino AI features (separate project)
- Email marketing setup (separate project)

---

## 10. Suggested execution order

If Claude Code is doing this in stages, the optimal order is:

1. **Stage 1 — Credibility fixes (highest priority).** Remove all false claims, fix dead links, correct date and name inconsistencies. This can ship immediately and stops active harm to the brand.
2. **Stage 2 — Homepage and About rewrite.** Establish the new positioning publicly.
3. **Stage 3 — Services consolidation and Sentino AI page.** Sharpen the offer, surface our biggest credibility asset.
4. **Stage 4 — Regional pages and cross-border page.** Build out the bi-national structure.
5. **Stage 5 — SEO, performance, accessibility, legal pages.** Polish for serious buyer scrutiny.
6. **Stage 6 — Insights content.** Begin publishing real, original articles.

---

## 11. Questions for Joshua to resolve before Claude Code starts

These need answers before starting work:

1. **What is the German city you're based in?** (Berlin / Munich / Frankfurt / Hamburg / other) — needed for the Europe regional page and Joshua's bio.
2. **Year Tekk Collective was actually founded?** — current site says 2019; verify and use real year.
3. **Real client list:** any existing clients whose names and (with permission) testimonials we can use?
4. **Real testimonials:** are RoyalQ Assistant, Emperico Works, TechFlow Solutions real or fabricated? If real, can we get verification and permission to keep them?
5. **Tech stack** of the current site — see Section 7.
6. **GitHub repo URL** so Claude Code can clone, branch, and PR.
7. **LinkedIn URLs** for all three founders to link from team cards.
8. **Real photos** of all three founders (headshots, ideally on a consistent background).
9. **Manchester registered office address** for the footer and Contact page.
10. **Any existing brand assets** — logo files (we have the SVG), brand colours, font choices.

---

## 12. A note on tone for Claude Code

When Claude Code is generating copy or making decisions, default behaviours to apply:

- Err on the side of removing content rather than fabricating to fill space
- When unsure whether a claim is true, ask Joshua rather than guess
- Prefer plain, specific language over corporate-marketing speak
- Match the tone of a well-written Manchester or Berlin tech company — confident but not loud, smart but not pretentious
- If an existing piece of copy is generic but not actively false, it's lower priority than fixing the false claims
- For any technical decisions (framework choice, tooling), default to widely-used, low-maintenance options unless there's a specific reason otherwise

---

**End of brief.**

Hand this whole document to Claude Code in your terminal with a prompt like:

> "I'm rebuilding tekkcollective.com. Please read tekk-collective-rebuild-brief.md in full, then start with Stage 1 (credibility fixes from Section 2 and Section 4) on a new branch. Make a PR when Stage 1 is complete. Ask me any questions from Section 11 before starting."

---

## Appendix A — Editor's review (Claude Code, 2026-05-09)

**Purpose of this appendix:** to flag gaps and questions noticed when ingesting the brief, without rewriting Joshua's prose. Items here should be resolved before Stage 1 starts.

### A.1 Real partnerships and products mentioned in conversation but NOT in the brief

In voice during this brainstorm, Joshua mentioned the following as real:

- **Campus Colab (Nigeria)** — described as a "partnership". Status / nature unclear (paid client? co-build? revenue share?).
- **Royal Q** — described as another partnership. Note: the brief Section 2 also flags "RoyalQ Assistant" as a homepage testimonial to verify. **Are these the same entity?** If yes, the testimonial should be reframed as a partnership quote and the partnership should appear on the relevant page.
- **University of Greater Manchester — MOU with their lab, the "Centre for the Intelligence of Things"** (transcription approximate; correct legal name to be confirmed). This is a strong UK academic credibility signal that the brief currently doesn't surface anywhere.
- **Gavil** — a second in-house product alongside Sentino AI. Joshua's voice description ("for a lower AI and AI") didn't transcribe cleanly; what does Gavil actually do?

These should be added to the brief once verified, almost certainly to:
- Section 1 (under "In-house products" — adding Gavil)
- A new "Partnerships" callout section, perhaps on Homepage and About (Campus Colab, Royal Q, U Greater Manchester MOU)
- The relevant regional page (UK page → U Greater Manchester MOU; West Africa page → Campus Colab, Royal Q)

### A.2 Existing repo files to decide on

- `CONTENT_STRATEGY.md` (root, 318 lines) — this is itself a generic AI-template content plan with fabricated case-study targets and content pillars that don't match the new positioning. **Recommend deleting** as part of Stage 1, since leaving it in the repo signals that the old strategy is still authoritative.
- `untitled folder/` exists at the repo root — empty? Stale? Recommend cleaning up.
- Two typewriter libraries (`react-simple-typewriter`, `typewriter-effect`) are still in `package.json` — recent commit `ba60611` removed typewriter usage from pages. The libraries are now unused dependencies and can be removed in Stage 1 cleanup.

### A.3 Additional questions for Section 11

11. **Campus Colab** — what is the partnership? Can it be named publicly? What did/do we do for them? Where on the site should it appear?
12. **Royal Q** — same questions as Campus Colab. Also: is "RoyalQ Assistant" testimonial on the current homepage the same entity?
13. **University of Greater Manchester MOU** — exact legal name of the lab? Is the MOU public / can we name it? What's its date and current status?
14. **Gavil** — what does it do, who's it for, what's its public URL (if any), and where should it appear on the site?
15. **Existing visual design system** — the brief assumes the current black/glassmorphism aesthetic stays. Confirm this is the intent, or specify if any visual direction is up for change.
16. **Hosting provider** — Vercel? Netlify? Other? Affects deployment workflow for any PRs.
17. **`untitled folder/`** at repo root — keep, clean, or investigate?

### A.4 Decomposition recommendation

The brief is a single document covering six stages. For implementation, suggest treating each stage as its own implementation plan with its own PR:

- Stage 1 (credibility fixes) is the smallest and most urgent — likely a single PR, hours of work.
- Stages 2–4 (rewrites, new pages) are each substantial — separate PRs, days of work each.
- Stages 5–6 (SEO/legal polish, real content) are ongoing — separate plans, possibly broken further.

This appendix doesn't replace the brief above — it's a punch-list of items to resolve so the brief is actionable as a plan source.

### A.5 Resolutions log (2026-05-09 brainstorm session)

| Question | Resolution |
|----------|------------|
| Stage 1 scope | **Aggressive: cleanup + real-entity replacements** (chosen via AskUserQuestion) |
| Section 11 Q4: RoyalQ Assistant / Emperico Works / TechFlow Solutions testimonials real? | **All three real — keep all three on the homepage** |
| Work page clients (GlobalBank Corp, MedConnect Inc, RetailForward, Metro City Council, LearnForward Academy, LogiFlow Systems) and their metrics | **Confirmed fabricated — remove all in Stage 1** |
| Appendix A.3 Q12: is "RoyalQ Assistant" testimonial the same entity as the Royal Q partnership? | **Yes, same entity** — reframe homepage testimonial as a partnership quote in Stage 1 |
| Six March-2024 blog posts | **Real, written by the team — keep all in Stage 1** (no deletion) |
| Appendix A.1 second in-house product name | **Gavl** (voice-transcribed as "Gavil" — corrected) |
| Section 11 Q5: tech stack | Resolved by repo inspection — see Section 7 |
| Section 4 / footer URLs (Twitter / LinkedIn / Instagram / Facebook / GitHub / email / phone) | **Deferred — Joshua to supply later in a separate pass.** Stage 1 will NOT modify the footer; existing dead `href="#"` links remain in place until URLs arrive. |

**Still pending and required before Stage 1b can start:**

- Section 11 Q1 — Joshua's German city
- Section 11 Q2 — actual founding year
- Section 11 Q7 — founder LinkedIn URLs
- Section 11 Q8 — founder photos
- Section 11 Q9 — Manchester registered office address
- Appendix A.3 Q11 — Campus Colab: legal name, what we did, public-naming permission, URL, where on site
- Appendix A.3 Q12 — Royal Q: same fields (the partnership, not the testimonial)
- Appendix A.3 Q13 — University of Greater Manchester MOU: exact lab name, MOU date and current status, public-naming permission
- Appendix A.3 Q14 — Gavl: what it does, who it's for, status (live / beta / private), URL if any, where on site

**Stage decomposition (revised given resolutions):**

- **Stage 1a — pure cleanup, fully unblocked.** Strip fabricated Work page clients, "500 companies / Fortune 500" claim, "95% project success rate" claim, cosmic/galaxy language. Fix surname spelling (Olagun → Olaogun). Make copyright year dynamic. Audit and align date inconsistencies. Reframe RoyalQ Assistant testimonial as partnership quote. Delete `CONTENT_STRATEGY.md`. Remove unused typewriter packages. Investigate and clean `untitled folder/`. **Does NOT touch:** footer (deferred), three homepage testimonials (keep), six blog posts (keep), visual design (out of scope).
- **Stage 1b — real-entity replacements, blocked on entity info.** Add Campus Colab + Royal Q partnership cards on a new Work / Partnerships section, U Greater Manchester MOU as a credibility strip, Gavl alongside Sentino AI as a second in-house product. Plus footer URL swap-in when supplied.
- **Stage 2 onward** — homepage rewrite, About rewrite, Services consolidation, Sentino AI page, regional pages, cross-border page, SEO, legal — as per Section 10.

### A.6 Resolutions log: post-deck discovery and Stage 2 progress (2026-05-09)

After inspecting `fellowship.tekkcollective.com` (the team's deployed pitch deck), several open Stage 1b items resolved themselves with public deck content. This in turn unblocked substantial Stage 2 progress on the same branch. Net effect: Stage 1a + 1b shipped, plus most of Stage 2 except regional pages and cross-border.

**Resolutions discovered from the fellowship deck:**

| Question / Item | Resolution |
|---|---|
| Founders count | **Two, not three.** Olaoluwa Olaogun was not on the deck. Per Joshua's instruction, Olaoluwa removed from site entirely; Joshua absorbs the CTO role with title "Co-Founder & CTO". Two blog posts previously credited to Olaoluwa reattributed to Joshua (Joshua confirmed authorship). Commit `addd4b2`. |
| GAVL spelling | **GAVL** (uppercase). The earlier voice-transcribed "Gavil" / "Gavl" was wrong; deck confirms GAVL. Brief Section 1 updated. |
| Additional in-house products | **YALP** and **Raspberry Pi Micro-Cloud Architecture** discovered on deck. Now listed in Section 1 alongside Sentino AI and GAVL. |
| Royal Q partnership | Public-naming confirmed; framing "Embedded as Royal Q's in-house AI engineering team". Featured on `/work` as engagement 01. Commit `234bd8f`. |
| University of Greater Manchester MOU | Public-naming confirmed; framing as cornerstone academic partnership; Sentino AI integration in research pipelines. Featured on `/work` as engagement 02. **Lab name (Centre for Intelligence of Things?) still unconfirmed; left off the card.** |
| Campus Colab partnership | Public-naming confirmed; framing as talent partnership for sourcing graduates and industry placement. Featured on `/work` as engagement 03. |

**Pages shipped on this branch:**

| Page | What changed | Commit |
|---|---|---|
| `/work` | Populated from placeholder with Royal Q / UoGM / Campus Colab engagement cards | `234bd8f` |
| `/project` | Populated from placeholder with Sentino AI / GAVL / YALP / Pi Micro-Cloud cards | `b80d14c` |
| `/services` | Cut from 6 to 3 AI-led services (AI Implementation headline + Custom Software + Data & Analytics); cybersecurity, strategy consulting, digital innovation dropped; CTA broken link fixed | `cbb576d` |
| `/` (homepage) | New AI-led positioning subtitle, Manchester · Lagos · Abuja location strip, hero CTAs, "What we do" 3-service strip mirroring `/services`, Sentino AI feature section, refreshed JSON-LD (GB country, two founders, AI consultancy description, services array) | `e3b10d2` |
| `/about` | Hero "An AI consultancy built across borders", honest 3-paragraph founding story, brief's 4 principles replacing emoji values (no more ⚡ 👥 🌱 🔍), 2-founder grid with real bios, new Lagos/Abuja engineering team callout | `fb7c692` |
| `/sentino-ai` | **NEW page.** Hero, what-it-is intro, 2x2 features grid, "why this matters for clients" section, CTAs. Sitemap updated. Homepage hero secondary CTA repointed from external sentinoai.com to internal `/sentino-ai`. | `9dd74df` |
| `/work` and `/` testimonial reframe | RoyalQ testimonial card relabelled "Partner · Financial Technology"; section heading "Client Stories" → "Voices" | `aa5ba63` |
| Team consolidation (cross-cutting) | About page team reduced to 2 founders; blog metadata authors reduced to 2; 2 Olaoluwa-bylined posts reattributed to Joshua | `addd4b2` |

**Still pending (gated on user input):**

- Joshua's German city (Section 11 Q1 unanswered; placeholder remains in Section 1)
- Real founding year (Section 11 Q2)
- Founder LinkedIn URLs (Section 11 Q7)
- Founder photos (Section 11 Q8)
- Manchester registered office address (Section 11 Q9)
- Footer URLs (deferred per user instruction; pre-existing dead `href="#"` links remain)
- Regional pages (`/regions/uk`, `/regions/europe`, `/regions/west-africa`) — needs strategic decision on regional structure and confirmation of Germany city
- Cross-border page — needs real cross-border project examples (the moat)
- Calendar booking integration — needs Cal.com/Calendly URL
- Real photos and avatar images on About team cards
- RoyalQ Assistant vs Royal Q brand spelling — same entity, two spellings on the same site (homepage testimonial card uses "RoyalQ Assistant"; `/work` uses "Royal Q" matching the deck). Pick one and standardise.
- Lab name for the U Greater Manchester partnership ("Centre for Intelligence of Things"?) — left off `/work` card pending exact legal name
- Insights / blog content rewrite (Stage 3 territory)

**Other pages added/touched in this iteration but not gated on user input:**

- `/privacy` — Privacy Policy page, GDPR-compliant boilerplate (have a lawyer review before relying on it for compliance)
- `/terms` — Terms of Service page, plain-English boilerplate (same caveat)
