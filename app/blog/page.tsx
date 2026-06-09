import Link from "next/link";

const posts = [
  {
    title: "AI Isn’t Broken. Untrusted Knowledge Is.",
    date: "2026-06-08",
    summary:
      "Most AI projects do not fail because the model is bad. They fail because the business knowledge underneath the model is outdated, inconsistent, incomplete, or untrusted.",
    href: "/blog/ai-isnt-broken-untrusted-knowledge-is",
    image: "/blog/ChatGPT Image Jun 8, 2026, 10_22_51 PM (1).png",
  },
  {
    title: "Why SOPs Fail Before AI Ever Gets Involved",
    date: "2026-06-08",
    summary:
      "SOPs do not create consistency if teams do not trust them, use them, or maintain them. AI only makes that problem louder.",
    href: "/blog/why-sops-fail-before-ai",
    image: "/blog/ChatGPT Image Jun 8, 2026, 10_22_51 PM (2).png",
  },
  {
    title: "The 3Px3P Matrix: A Practical Way to Diagnose Business Alignment",
    date: "2026-06-08",
    summary:
      "People, Product, and Profit need to be supported by Planning, Processes, and Performance Measurement. The 3Px3P Matrix shows where the business is aligned and where it is not.",
    href: "/blog/3px3p-matrix-business-alignment",
    image: "/blog/ChatGPT Image Jun 8, 2026, 10_22_52 PM (3).png",
  },
  {
    title: "Building a Better Contact Centre Operating Model",
    date: "2026-06-08",
    summary:
      "Whether internal, outsourced, or hybrid, better CX starts with alignment across customer journeys, people, processes, technology, data, and trusted knowledge.",
    href: "/blog/building-a-better-contact-centre-operating-model",
    image: "/blog/from_chaos_to_organized_clarity.png",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <Link href="/" className="text-sm font-bold text-cyan-700 hover:text-cyan-900">
            ← Back to 3P Solutions
          </Link>

          <p className="mt-10 text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
            3P Insights
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
            Practical thinking on AI-readiness, CX, trusted knowledge, and business alignment.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Short, practical articles for leaders who need their people, processes, data, technology,
            and operating rhythm to work together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <Link href={post.href}>
                <img
                  src={post.image}
                  alt=""
                  className="mb-6 aspect-video w-full rounded-2xl object-cover"
                />
              </Link>
              <p className="text-sm font-semibold text-slate-500">{post.date}</p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                <Link href={post.href} className="hover:text-cyan-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">{post.summary}</p>
              <Link
                href={post.href}
                className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
