export default function Home() {
  const manifesto = [
    {
      title: 'Purpose',
      description:
        'We help modern operators simplify work with boutique automation and AI services that respect people, governance, and the KPIs that matter.'
    },
    {
      title: 'Vision',
      description:
        'A market where trustworthy technology feels like infrastructure—quiet, resilient, and always aligned with the business agenda.'
    },
    {
      title: 'Mission',
      description:
        'Design and deliver governed automations that remove busywork, safeguard data, and prove measurable gains inside a single quarter.'
    }
  ]

  const beliefs = [
    { title: 'Future > hype', description: 'Progress beats buzzwords. Every engagement moves the KPI that matters most.' },
    { title: 'Human in the loop', description: 'AI augments teams and keeps experienced judgment at the helm of key decisions.' },
    { title: 'Trust by design', description: 'Privacy, compliance, and guardrails are built in from sprint one.' },
    { title: 'Value first', description: 'One clear process, one KPI, one win at a time—always tied to measurable ROI.' },
    { title: 'Ownership', description: 'Your data, your tenant, your logs. Always.' },
    { title: 'Simplicity scales', description: 'Small, repeatable solutions beat massive transformations.' }
  ]

  const values = [
    { title: 'Clarity', description: 'Plain language, calm guidance, and transparent pricing that boards and teams can trust.' },
    { title: 'Responsibility', description: 'Privacy, safety, and governance checks woven through every agent and automation.' },
    { title: 'Craft', description: 'Clean architecture, thoughtful design, and documentation that stands up in audits.' },
    { title: 'Empathy', description: 'Tools people enjoy using, with enablement that respects change fatigue.' },
    { title: 'Discipline', description: 'Dates, docs, and deliverables tracked in the open so momentum never slips.' }
  ]

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-24">
      <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-12 text-white md:px-12 md:py-16">
        <div className="absolute inset-0 opacity-60" aria-hidden="true">
          <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-emerald-500/35 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/35 blur-3xl" />
        </div>
        <div className="relative max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-300">Boutique technology services for operators</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Tailored automation engagements that prove out in weeks
          </h1>
          <p className="mt-6 text-lg text-neutral-200 md:text-xl">
            We partner with leadership teams of 20–300 people to modernise operations through governed AI agents and automations. Every engagement ships on your stack with transparent pricing, board-ready guardrails, and measurable ROI inside 6–8 weeks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm shadow-white/20 transition hover:bg-neutral-100"
            >
              Book a consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Explore our services
            </a>
          </div>
        </div>
        <dl className="relative mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { label: 'Time to first result', value: '6–8 weeks' },
            { label: 'Data residency', value: '100% your tenant' },
            { label: 'Client satisfaction', value: '9.6 / 10' }
          ].map(item => (
            <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <dt className="text-sm uppercase tracking-wide text-neutral-200">{item.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Why operators choose our boutique team</h2>
          <p className="text-lg text-neutral-700">
            Each engagement is senior-led and operator-friendly. We partner directly with founders, COOs, and functional leaders to automate the right work, protect sensitive data, and report the gains in language boards understand.
          </p>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
              <span><strong className="font-semibold text-neutral-900">Hands-on delivery.</strong> Strategy, design, and build from one partner so momentum never stalls between vision and production.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-cyan-500" />
              <span><strong className="font-semibold text-neutral-900">Governance by default.</strong> Every agent ships with audit trails, access controls, and operating playbooks.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-indigo-500" />
              <span><strong className="font-semibold text-neutral-900">Measurable ROI.</strong> Start with one KPI, one process, one win—then scale what works.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-900">Engagement snapshot</h3>
          <ul className="mt-5 space-y-4 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">01</span>
              <div>
                <p className="font-medium text-neutral-900">Week 1–2</p>
                <p className="mt-1 text-neutral-600">Readiness diagnostic, risk review, and ROI model agreed with stakeholders.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">02</span>
              <div>
                <p className="font-medium text-neutral-900">Week 3–5</p>
                <p className="mt-1 text-neutral-600">Design, build, and test the pilot agent with security, compliance, and training baked in.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">03</span>
              <div>
                <p className="font-medium text-neutral-900">Week 6+</p>
                <p className="mt-1 text-neutral-600">Launch, measure the KPI, and hand over the playbook or continue as your fractional AI operator.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div id="manifesto" className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Boutique manifesto</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">How Future Thinker Advisory shows up</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900"
          >
            Share your roadmap →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {manifesto.map(item => (
            <article key={item.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-4xl border border-neutral-200 bg-neutral-50/80 p-8 md:p-12">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">What we believe</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Calm, practical, future-focused</h2>
          <p className="text-neutral-700">
            These principles shape every recommendation, sprint, and deliverable. They keep our work grounded, responsible, and tailored to the people who rely on it every day.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {beliefs.map(belief => (
            <div key={belief.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">{belief.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{belief.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Values in action</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">How we deliver work people trust</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(value => (
            <div key={value.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">{value.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="approach" className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Approach</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">Our consulting cadence from idea to measurable ROI</h2>
          </div>
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900"
          >
            Run the readiness diagnostic →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Frame & baseline',
              description: 'Map the process, KPI, data boundaries, and human loop. Quantify risks and opportunity cost up front.'
            },
            {
              title: 'Design & deliver',
              description: 'Architect the agent, integrate with systems, and validate with the people who will use it every day.'
            },
            {
              title: 'Measure & scale',
              description: 'Launch with training, telemetry, and governance. Decide whether to extend, replicate, or hand off.'
            }
          ].map((item, index) => (
            <div key={item.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <span className="text-sm font-semibold text-neutral-500">STEP {index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="clients" className="rounded-4xl border border-neutral-200 bg-neutral-50/80 p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Selected engagements</p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Proof that steady progress beats hype</h2>
            <p className="text-neutral-700">
              Venture-backed SaaS, professional services firms, and private equity operators trust Future Thinker Advisory to automate responsibly. Every case pairs measurable ROI with governance their customers and regulators accept.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-neutral-600">
              {['Revenue operations', 'Client delivery teams', 'Data privacy workflows', 'Portfolio value creation'].map(tag => (
                <span key={tag} className="rounded-full border border-neutral-300 px-4 py-1.5">{tag}</span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <figure className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-lg text-neutral-800">
                “We replaced three manual review queues with a governed agent in six weeks. Support cost per ticket dropped 38% while audit evidence became easier to pull on demand.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-neutral-600">
                <span className="font-semibold text-neutral-900">COO, B2B SaaS (240 people)</span>
              </figcaption>
            </figure>
            <figure className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-lg text-neutral-800">
                “Calm, disciplined, and numbers-driven. The board saw clear ROI and a lightweight legal footprint before we signed off on expansion.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-neutral-600">
                <span className="font-semibold text-neutral-900">Operating Partner, Private Equity</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div id="contact" className="grid gap-10 rounded-4xl border border-neutral-200 bg-white/80 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Start a project</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Let’s scope the automation that proves the model</h2>
          <p className="text-neutral-700">
            Share the process you want to transform, the KPI you need to move, and the systems that matter. Expect a response within one business day with a tailored agenda, stakeholder checklist, and data requirements.
          </p>
          <div className="grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="font-semibold text-neutral-900">Email</p>
              <a href="mailto:hello@thefuturethinker.com" className="mt-1 block text-neutral-700 hover:underline">hello@thefuturethinker.com</a>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="font-semibold text-neutral-900">Phone</p>
              <a href="tel:+48600000000" className="mt-1 block text-neutral-700 hover:underline">+48 600 000 000</a>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:col-span-2">
              <p className="font-semibold text-neutral-900">Availability</p>
              <p className="mt-1 text-neutral-600">Booking new automation sprints for Q3 2025. EU &amp; North America time zones.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <h3 className="text-lg font-semibold text-neutral-900">Three simple steps</h3>
          <ul className="space-y-4 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">1</span>
              <div>
                <p className="font-medium text-neutral-900">30-minute scoping call</p>
                <p className="mt-1 text-neutral-600">Align on objectives, success metrics, and the humans who stay in the loop.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-white">2</span>
              <div>
                <p className="font-medium text-neutral-900">Two-week diagnostic sprint</p>
                <p className="mt-1 text-neutral-600">Baseline readiness, confirm governance, and produce the ROI model.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white">3</span>
              <div>
                <p className="font-medium text-neutral-900">Launch or partner</p>
                <p className="mt-1 text-neutral-600">Kick off the build or engage ongoing fractional leadership to scale wins.</p>
              </div>
            </li>
          </ul>
          <div className="flex gap-4 text-neutral-700" aria-label="Social links">
            <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 opacity-70 transition group-hover:opacity-100"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.18h.05C12.1 8.93 13.67 8 15.8 8 20.14 8 21 10.84 21 15.06V24h-4v-7.38c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V24H7.5V8z"/></svg>
            </a>
            <a aria-label="Email" href="mailto:hello@thefuturethinker.com" className="group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 opacity-70 transition group-hover:opacity-100"><path d="M2 4h20a1 1 0 0 1 .96.73l.04.27v14a1 1 0 0 1-.76.97l-.24.03H2a1 1 0 0 1-.97-.76L1 19V5a1 1 0 0 1 .76-.97L2 4zm18 4.236-8 5.334-8-5.334V18h16zM4.511 6 12 11.097 19.489 6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
