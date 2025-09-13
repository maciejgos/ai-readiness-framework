export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <header>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Services</h1>
        <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
          Practical, productized offerings designed to reduce risk and deliver value fast. We operate with clear scopes, fixed pricing, and outcomes you can measure.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 p-6 bg-white">
          <h2 className="text-xl font-semibold tracking-tight">AI Readiness Sprint</h2>
          <p className="mt-2 text-neutral-700 text-sm">
            Two weeks to baseline data, policies, and target use‑cases. Leaves you with a prioritized roadmap and pilot plan.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
            <li>Data + tenant check, light DPIA</li>
            <li>Top 3 opportunities with effort/impact</li>
            <li>KPIs + pilot plan (6–8 weeks)</li>
          </ul>
          <a href="#tool" className="mt-5 inline-flex rounded-2xl bg-black px-4 py-2 text-white text-sm hover:opacity-90 transition">Run the assessment →</a>
        </article>

        <article className="rounded-3xl border border-neutral-200 p-6 bg-white">
          <h2 className="text-xl font-semibold tracking-tight">Architecture Advisory</h2>
          <p className="mt-2 text-neutral-700 text-sm">
            Hands‑on guidance for cloud‑native, AI‑enabled platforms. Reviews, technical direction, and decision support for teams.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
            <li>System design and trade‑off reviews</li>
            <li>Reliability, cost, and security tuning</li>
            <li>Make‑vs‑buy and vendor selection</li>
          </ul>
          <a href="#contact" className="mt-5 inline-flex rounded-2xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100 transition">Book intro call</a>
        </article>

        <article className="rounded-3xl border border-neutral-200 p-6 bg-white">
          <h2 className="text-xl font-semibold tracking-tight">Team Workshops</h2>
          <p className="mt-2 text-neutral-700 text-sm">
            Focused sessions to align leadership and engineering on AI patterns, risks, and winning first pilots.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
            <li>AI safety & policy quickstart</li>
            <li>Use‑case discovery and scoring</li>
            <li>Proof‑of‑concept playbook</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-neutral-200 p-6 bg-white">
          <h2 className="text-xl font-semibold tracking-tight">CTO Advisory</h2>
          <p className="mt-2 text-neutral-700 text-sm">
            Strategic partner to founders and VCs. Product, platform, and org decisions backed by pragmatic execution.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
            <li>Tech strategy and roadmap</li>
            <li>Architecture and hiring reviews</li>
            <li>Value metrics and governance</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

