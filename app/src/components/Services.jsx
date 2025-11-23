export default function Services() {
  const serviceTiers = [
    {
      title: 'Agentic Automation Sprint',
      summary: 'Design, build, and launch one governed AI agent that removes a painful workflow while keeping humans in the loop.',
      outcomes: [
        'Clarify the process, KPI, and risk appetite with stakeholders in week one',
        'Deliver a production-ready agent with audit trail, telemetry, and fallback plan',
        'Quantify ROI, change impacts, and the backlog for the next 90 days'
      ],
      investment: '€14,500 fixed | 6 weeks'
    },
    {
      title: 'Trustworthy AI Foundation',
      summary: 'Establish data governance, access controls, and compliance guardrails so AI work scales safely across teams.',
      outcomes: [
        'Map data flows, security posture, and regulatory obligations for each use case',
        'Implement tenant controls, monitoring, and policy-as-code for AI agents',
        'Create approval workflows, training, and documentation auditors accept'
      ],
      investment: 'From €18,000 | 4-week sprint + playbooks'
    },
    {
      title: 'Fractional AI Operator',
      summary: 'Ongoing leadership 1–3 days per week to expand automation wins, coach teams, and report ROI to the board.',
      outcomes: [
        'Prioritized roadmap tied to revenue, margin, or compliance targets',
        'Runbooks, templates, and enablement so teams sustain momentum',
        'Executive updates with KPI tracking, guardrail status, and next bets'
      ],
      investment: 'From €9,800 / month | 3-month minimum'
    }
  ]

  const enablement = [
    'Weekly scorecards that track ROI, adoption, and guardrail health',
    'Templates for process design, risk reviews, and human-in-the-loop playbooks',
    'Coaching for operators, analysts, and compliance partners so the work sticks'
  ]

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-16">
      <header className="space-y-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Signature services</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-neutral-900">Proven paths to trustworthy AI inside your business</h1>
        <p className="mx-auto max-w-3xl text-lg text-neutral-700 md:mx-0">
          Every offer is designed for SMB leaders who need visible ROI within a quarter. Transparent pricing, calm delivery, and agents that live in your tenant mean you can show progress without inviting new risk.
        </p>
      </header>

      <div className="grid gap-6 rounded-4xl border border-neutral-200 bg-neutral-50/70 p-8 md:grid-cols-3 md:p-10">
        {serviceTiers.map(tier => (
          <article key={tier.title} className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{tier.title}</h2>
              <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Focused</span>
            </div>
            <p className="mt-4 text-sm text-neutral-700">{tier.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {tier.outcomes.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Transparent investment</span>
              <span className="text-2xl font-semibold text-neutral-900">{tier.investment}</span>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Scope this engagement →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Enablement</p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Not just recommendations—capability building baked in</h2>
          <p className="text-neutral-700">
            Every package includes enablement so teams feel confident running and scaling what we build together. Calm communication, lightweight documentation, and paired delivery keep your people in control.
          </p>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6">
          <ul className="space-y-4 text-sm text-neutral-700">
            {enablement.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">★</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-4xl border border-neutral-200 bg-neutral-900 px-6 py-10 text-white md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-300">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight">Kick off with the readiness diagnostic sprint</h2>
            <p className="text-neutral-200">
              In fourteen days you get a readiness score, risk register, ROI model, and roadmap that make the first automation decision obvious. It’s the fastest route to a board-ready plan without a long discovery project.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <a
              href="#assessment"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-100"
            >
              Run the readiness diagnostic
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-white transition hover:border-white"
            >
              Book an intro call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
