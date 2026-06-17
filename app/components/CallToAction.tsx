import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mt-16 rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-cyan-800 shadow-sm">
            CX / AI Technology Gap Review
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">
            Ready to find the gaps holding your operation back?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Start with a practical review of whether your CX, contact centre, BPO, knowledge, process, reporting, and technology environment is ready to improve.
          </p>
        </div>
        <Link
          href="/cx-ai-technology-gap-review"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-black text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
        >
          Start with a Gap Review
        </Link>
      </div>
    </section>
  );
}
