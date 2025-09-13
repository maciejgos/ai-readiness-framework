export default function Home() {
  return (
    <section id="home" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Hey! I'm Maciej</h1>

      <div className="mt-6 space-y-6 text-lg md:text-[21px] leading-8 md:leading-9 text-neutral-800">
        <p>
          Chief Architect & Technology Strategist. I help companies navigate complexity,
          modernize with clarity, and define their unique technology vision.
        </p>
        <p>
          I’m on a mission to grow as a technology leader on the path toward becoming a Chief
          Technology Officer (CTO) and advisor in the Venture Capital space. This vision fuels my
          dedication to innovation, strategy, and empowering the teams building the future of
          technology.
        </p>
        <p>
          I specialize in cloud‑native systems, generative AI, and scalable architectures tailored for
          startups and digitally maturing enterprises. My leadership style fosters agile,
          collaborative environments where teams move fast, build smart, and deliver meaningful
          outcomes.
        </p>
        <p>
          With a future‑focused mindset and systems thinking, I turn complex business
          challenges into clear, actionable strategies. My work bridges the gap between technology
          and business—accelerating innovation, unlocking growth, and driving long‑term
          impact.
        </p>
      </div>

      <figure className="mt-8 border-l-2 border-neutral-200 pl-5">
        <blockquote className="italic text-neutral-700">
          “Innovation distinguishes between a leader and a follower.”
        </blockquote>
        <figcaption className="mt-2 text-sm text-neutral-600">— <span className="font-medium">Steve Jobs</span></figcaption>
      </figure>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Shape the Future with Confidence
        </h2>
        <p className="mt-3 text-neutral-700 md:text-lg">
          Explore productized services, workshops, and strategic advisory for the AI‑powered era.
        </p>

        <div className="mt-6 space-y-2">
          <a href="#services" className="block w-fit underline underline-offset-2 decoration-neutral-400 hover:decoration-black">
            View Services
          </a>
          <a href="#contact" className="block w-fit underline underline-offset-2 decoration-neutral-400 hover:decoration-black">
            Schedule Intro Call
          </a>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-5 text-neutral-800" aria-label="Social links">
        <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 opacity-80 group-hover:opacity-100"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.18h.05C12.1 8.93 13.67 8 15.8 8 20.14 8 21 10.84 21 15.06V24h-4v-7.38c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V24H7.5V8z"/></svg>
        </a>
        <a aria-label="Instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 opacity-80 group-hover:opacity-100"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.4.42.6.24 1 .53 1.4.96.43.4.72.86.96 1.44.17.45.36 1.2.42 2.39.07 1.34.07 1.72.07 4.92s0 3.58-.07 4.92c-.06 1.18-.25 1.94-.42 2.39-.24.58-.53 1.04-.96 1.44-.4.43-.86.72-1.44.96-.45.17-1.2.36-2.39.42-1.34.07-1.72.07-4.92.07s-3.58 0-4.92-.07c-1.18-.06-1.94-.25-2.39-.42a3.7 3.7 0 0 1-1.44-.96 3.7 3.7 0 0 1-.96-1.44c-.17-.45-.36-1.2-.42-2.39C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.92c.06-1.18.25-1.94.42-2.39.24-.58.53-1.04.96-1.44.4-.43.86-.72 1.44-.96.45-.17 1.2-.36 2.39-.42C8.42 2.2 8.8 2.2 12 2.2m0 1.8c-3.15 0-3.52 0-4.76.07-.99.05-1.52.21-1.87.35-.47.18-.8.39-1.15.74-.35.36-.56.69-.74 1.16-.14.35-.3.88-.35 1.87-.07 1.24-.07 1.61-.07 4.76s0 3.52.07 4.76c.05.99.21 1.52.35 1.87.18.47.39.8.74 1.15.36.35.69.56 1.16.74.35.14.88.3 1.87.35 1.24.07 1.61.07 4.76.07s3.52 0 4.76-.07c.99-.05 1.52-.21 1.87-.35.47-.18.8-.39 1.15-.74.35-.36.56-.69.74-1.16.14-.35.3-.88.35-1.87.07-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-.99-.21-1.52-.35-1.87-.18-.47-.39-.8-.74-1.15a2.8 2.8 0 0 0-1.16-.74c-.35-.14-.88-.3-1.87-.35-1.24-.07-1.61-.07-4.76-.07m0 2.7a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6m0 8.8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m5.7-9.7a1.24 1.24 0 1 1 0-2.48 1.24 1.24 0 0 1 0 2.48"/></svg>
        </a>
        <a aria-label="X" href="https://x.com" target="_blank" rel="noopener noreferrer" className="group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 opacity-80 group-hover:opacity-100"><path d="M18.3 2H21l-6.5 7.4L22 22h-6.8l-4.4-5.8L5.7 22H3l7.1-8.1L2 2h6.9l4 5.4L18.3 2zm-2.4 18h1.9L8.3 4H6.4l9.5 16z"/></svg>
        </a>
      </div>
    </section>
  )
}
