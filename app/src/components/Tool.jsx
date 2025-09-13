import { useState } from 'react'
import { SECTIONS, CHOICES } from '../data'
import { calculateSectionPercent, calculateOverallPercent, determineReadinessBand, calculateProgress } from '../scoring'

export default function Tool() {
  const [answers, setAnswers] = useState({})

  const totalQuestions = SECTIONS.reduce((sum, s) => sum + s.questions.length, 0)
  const sectionPercents = SECTIONS.map(sec => {
    const values = sec.questions
      .map(q => answers[`${sec.key}:${q}`])
      .filter(v => v !== undefined)
    return calculateSectionPercent(values)
  })
  const overallPercent = calculateOverallPercent(sectionPercents)
  const progressPercent = calculateProgress(Object.keys(answers).length, totalQuestions)
  const band = determineReadinessBand(overallPercent)
  const bandClasses = {
    green: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    amber: 'bg-amber-50 text-amber-600',
    red: 'bg-rose-50 text-rose-600'
  }[band.color]

  return (
    <>
      <section id="tool" className="py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">AI Readiness for SMBs</h1>
            <p className="mt-4 text-lg text-neutral-600">A calm, practical assessment that shows how ready your company is to pilot AI safely and get value in weeks, not years.</p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li className="flex items-start gap-3">✅ 10–12 minutes, plain language</li>
              <li className="flex items-start gap-3">✅ Score by section + overall readiness %</li>
              <li className="flex items-start gap-3">✅ Summary + next steps + option to book a call</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6 md:p-8 bg-neutral-50/50">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600">Completion</span>
              <span className="text-sm font-medium">{progressPercent}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full bg-black transition-all" style={{ width: progressPercent + '%' }} />
            </div>
            <a href="#assessment" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-white hover:opacity-90 transition">Start Assessment →</a>
          </div>
        </div>
      </section>

      <section id="assessment" className="pb-20">
        {SECTIONS.map((sec, idx) => (
          <div key={sec.key} className="rounded-3xl border border-neutral-200 p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold tracking-tight">{sec.title}</h2>
              <div className="ml-auto text-sm text-neutral-600">{sectionPercents[idx]}%</div>
            </div>
            <div className="mt-6 space-y-6">
              {sec.questions.map(q => {
                const qKey = `${sec.key}:${q}`
                const value = answers[qKey]
                return (
                  <div key={qKey} className="grid gap-3 md:grid-cols-5 md:items-center">
                    <div className="md:col-span-3 text-sm md:text-base text-neutral-800">{q}</div>
                    <div className="md:col-span-2 flex flex-wrap gap-2">
                      {CHOICES.map(c => (
                        <button
                          key={c.label}
                          className={`rounded-full border px-3 py-1.5 text-sm transition border-neutral-300 hover:bg-neutral-100 ${
                            value === c.value ? 'bg-black text-white border-black' : ''
                          }`}
                          onClick={() => setAnswers(prev => ({ ...prev, [qKey]: c.value }))}
                        >
                          {c.label}
                          <span className="ml-1.5 text-xs opacity-70">{c.hint}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="pb-32">
        <div className="rounded-3xl border border-neutral-200 p-6 md:p-10 bg-neutral-50/40">
          <div className="flex flex-wrap items-end gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Your AI Readiness Summary</h2>
            <div className={`ml-auto rounded-full px-4 py-1.5 text-sm border border-neutral-200 ${bandClasses}`}>{band.label}</div>
          </div>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            <div className="col-span-1 flex flex-col items-center justify-center rounded-2xl bg-white border border-neutral-200 p-6">
              <div className="text-6xl font-semibold tracking-tight"><span>{overallPercent}</span><span className="text-2xl">%</span></div>
              <div className="mt-1 text-sm text-neutral-600">Overall readiness</div>
            </div>
            <div className="col-span-3 grid sm:grid-cols-3 gap-4">
              {SECTIONS.map((s, idx) => {
                const pct = sectionPercents[idx]
                return (
                  <div key={s.key} className="rounded-2xl bg-white border border-neutral-200 p-4">
                    <div className="text-sm text-neutral-600">{s.title}</div>
                    <div className="mt-1 text-2xl font-semibold">{pct}%</div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                      <div className="h-full bg-black" style={{ width: pct + '%' }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h3 className="font-medium">What this means</h3>
              <p className="mt-2 text-sm text-neutral-700">{band.guidance}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h3 className="font-medium">Suggested next step</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>Baseline 1–2 KPIs for your target process</li>
                <li>Confirm tenant and data sources (Drive/SharePoint, CRM/ERP)</li>
                <li>Book a 20‑min call to plan a 2‑week Readiness Sprint</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h3 className="font-medium">What you’ll receive</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>Mini AI policy + DPIA‑lite templates</li>
                <li>Top 3 quick wins with effort/impact</li>
                <li>Pilot plan (6–8 weeks) and fixed price</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
            <a className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-white hover:opacity-90 transition" href="#">Book a 20‑min call →</a>
            <div className="flex items-center gap-4 text-sm text-neutral-700">
              <a className="inline-flex items-center gap-2 hover:underline" href="#">✉️ <span>hello@thefuturethinker.com</span></a>
              <span className="hidden md:inline">•</span>
              <a className="hover:underline" href="#">☎️ <span>+48 600 000 000</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

