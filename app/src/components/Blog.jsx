import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownFiles = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })

const parseFrontmatter = (raw = '') => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/)
  if (!match) {
    return { frontmatter: {}, body: raw.trim() }
  }

  const [, frontmatterBlock, body] = match
  const frontmatter = frontmatterBlock.split('\n').reduce((acc, line) => {
    const [key, ...rest] = line.split(':')
    if (key) {
      acc[key.trim()] = rest.join(':').trim()
    }
    return acc
  }, {})

  return { frontmatter, body: body.trim() }
}

const posts = Object.entries(markdownFiles)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace('.md', '')
    const { frontmatter, body } = parseFrontmatter(raw)
    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || '',
      summary: frontmatter.summary || '',
      body
    }
  })
  .sort((a, b) => (a.date && b.date ? new Date(b.date) - new Date(a.date) : 0))

const markdownComponents = {
  h2: props => <h2 className="mt-10 text-2xl font-semibold text-neutral-900" {...props} />,
  h3: props => <h3 className="mt-8 text-xl font-semibold text-neutral-900" {...props} />,
  p: props => <p className="mt-4 text-neutral-700 leading-relaxed" {...props} />,
  ul: props => <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700" {...props} />,
  ol: props => <ol className="mt-4 list-decimal space-y-2 pl-5 text-neutral-700" {...props} />,
  li: props => <li className="leading-relaxed" {...props} />,
}

export default function Blog({ route = 'blog' }) {
  const selectedPost = posts.find(post => post.slug === route.split('/')[1]) || posts[0]

  if (!selectedPost) {
    return (
      <section id="blog" className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Automation & AI field notes</h1>
        <p className="mt-4 text-neutral-700">No posts available yet. Add a Markdown file to <code className="rounded bg-neutral-100 px-2 py-1">src/posts</code> to publish your first article.</p>
      </section>
    )
  }

  const navigateTo = slug => {
    window.location.hash = slug ? `#blog/${slug}` : '#blog'
  }

  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Insights</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">Automation & AI field notes</h1>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Short, practical posts from the delivery team. Every article ships as Markdown so you can keep a versioned, auditable knowledge base.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigateTo('')}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100"
          aria-label="Back to all posts"
        >
          View all posts
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.38fr]">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">{selectedPost.date}</span>
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">{selectedPost.title}</h2>
            {selectedPost.summary ? <p className="text-neutral-700">{selectedPost.summary}</p> : null}
          </div>
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {selectedPost.body}
            </ReactMarkdown>
          </div>
        </article>

        <aside className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">Latest posts</h3>
          <ul className="space-y-3">
            {posts.map(post => (
              <li key={post.slug}>
                <button
                  type="button"
                  onClick={() => navigateTo(post.slug)}
                  className={`w-full text-left rounded-2xl border px-4 py-3 transition ${
                    selectedPost.slug === post.slug
                      ? 'border-neutral-900 bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{post.date}</p>
                  <p className="mt-1 text-base font-semibold text-neutral-900">{post.title}</p>
                  {post.summary ? <p className="mt-1 text-sm text-neutral-700">{post.summary}</p> : null}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
