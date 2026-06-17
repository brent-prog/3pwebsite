import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  Gauge,
  Headphones,
  Layers3,
  LineChart,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "CX / AI Technology Gap Review | 3P Solutions",
  description:
    "Assess whether your CX, contact centre, BPO, knowledge, process, reporting, and technology environment is ready for AI and operational improvement.",
  alternates: {
    canonical: "/cx-ai-technology-gap-review",
  },
  openGraph: {
    title: "CX / AI Technology Gap Review | 3P Solutions",
    description:
      "Find the operational gaps that can hold back CX improvement, contact centre optimization, BPO performance, and AI implementation.",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const audiences = [
  "CX leaders who need better consistency across the customer journey",
  "Contact centre leaders improving service, reporting, knowledge, or performance",
  "BPO and vendor management teams trying to compare, govern, or improve outsourced delivery",
  "COOs and CEOs of service businesses that have outgrown informal operating habits",
  "PE-backed or roll-up service businesses that need a scalable operating model",
  "Technology partners who need business-side alignment before implementation",
];

const symptoms = [
  "No clear view of why customers contact the business",
  "Inconsistent customer experience across channels, locations, or vendors",
  "Weak, outdated, duplicated, or untrusted knowledge base content",
  "SOPs exist, but teams do not follow them consistently",
  "Reporting shows activity, but not useful business insight",
  "BPO or vendor performance is hard to compare, manage, or explain",
  "AI pilots are being discussed before the process is clearly defined",
  "Technology spend is increasing, but outcomes are not improving",
];

const reviewAreas = [
  { icon: Headphones, title: "Customer Journey", text: "Contact drivers, channels, handoffs, escalations, and the customer moments that create friction." },
  { icon: Layers3, title: "Operating Model", text: "How the contact centre, CX team, internal teams, and partners actually get the work done." },
  { icon: ShieldCheck, title: "BPO / Vendor Performance", text: "Governance, KPI alignment, reporting, accountability, incentives, and service consistency where vendors are involved." },
  { icon: ClipboardCheck, title: "Knowledge & SOPs", text: "Whether the knowledge base and procedures are current, trusted, owned, usable, and ready for AI." },
  { icon: Users, title: "QA, Training & Coaching", text: "How quality, training, coaching, leadership routines, and front-line adoption support the desired outcome." },
  { icon: Gauge, title: "Performance Measurement", text: "KPIs, dashboards, reporting definitions, review routines, and whether leaders can make useful decisions." },
  { icon: Database, title: "Technology Fit", text: "How the current stack supports the work, where it creates friction, and what should be clear before adding more tools." },
  { icon: Bot, title: "AI Readiness", text: "Whether the business problem, knowledge, process, ownership, data, and adoption model are ready for AI." },
];

const deliverables = [
  "Clear findings on the current operating gaps",
  "Priority gap list tied to practical business risk",
  "Recommendations that separate process issues from technology issues",
  "Technology-readiness view for AI, analytics, automation, CCaaS, or CX tools",
  "Implementation priorities for what should happen first",
  "Suggested next steps for leadership, CX, operations, vendors, and technology partners",
  "A clearer business case for what should happen before buying or expanding AI or CX technology",
];

const notThis = [
  "A generic software demo",
  "A theoretical strategy exercise",
  "A replacement for internal leadership accountability",
  "A way to force a specific vendor or tool",
];

const proof = [
  "30+ years in CX, BPO, and contact centre leadership",
  "Experience building and leading large global teams",
  "Fortune 100 customer operations experience",
  "Practical experience across internal, outsourced, and hybrid environments",
  "Focus on aligning people, process, technology, incentives, and performance measurement",
];

export default function CxAiTechnologyGapReviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-800">
              Primary paid diagnostic
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              CX / AI Technology Gap Review
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">
              Before you spend more on AI, automation, analytics, or contact centre technology, make sure the operating model is ready.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              3P Solutions helps companies identify the operational gaps that prevent successful CX improvement, contact centre optimization, BPO/vendor performance, and AI implementation.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendly.com/brent3p/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-black text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
              >
                Book a Gap Review Call <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/blog/building-a-better-contact-centre-operating-model"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-black text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700"
              >
                Read the Contact Centre Operating Model Article
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Core idea</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              Before you automate the business, align the business.
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                "Clearly defined business problem",
                "Measurable desired outcome",
                "Clear process ownership",
                "Trusted knowledge and usable data",
                "Aligned teams and useful performance measures",
                "Technology fit before technology spend",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-600" />
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Why this matters</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Most AI and CX technology projects do not fail because the tool is bad.
            </h2>
          </div>
          <div className="text-lg leading-8 text-slate-700">
            <p>
              They fail because the business problem is unclear, the process is messy, the knowledge is unreliable, the reporting is weak, or the teams are misaligned.
            </p>
            <p className="mt-5">
              AI readiness depends on operational readiness. If the operation is not clear, measurable, owned, and trusted, new technology usually adds speed to the confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Who it is for</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Built for leaders who need clarity before the next investment.</h2>
            <div className="mt-8 grid gap-4">
              {audiences.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-600" />
                  <p className="font-semibold leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Common symptoms</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">The warning signs usually show up before the technology decision.</h2>
            <div className="mt-8 grid gap-4">
              {symptoms.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <FileSearch className="mt-0.5 h-5 w-5 flex-none text-cyan-600" />
                  <p className="font-semibold leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What gets reviewed</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            A practical look at the operating model underneath the technology.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviewAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{area.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">What you receive</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Clear findings and practical next steps.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The review is designed to help leadership understand what needs to be fixed, clarified, or owned before investing more money in AI, automation, analytics, CCaaS, or CX technology.
            </p>
          </div>
          <div className="grid gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <LineChart className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                <p className="font-semibold leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What it is not</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">This is not another vendor-first conversation.</h2>
            <div className="mt-8 grid gap-4">
              {notThis.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <XCircle className="mt-0.5 h-5 w-5 flex-none text-slate-500" />
                  <p className="font-semibold leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              It is a practical review of whether the operation is ready to improve.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Why 3P Solutions</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Operator experience, not software-first advice.</h2>
            <div className="mt-8 grid gap-4">
              {proof.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-600" />
                  <p className="font-semibold leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Next step</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
            If you are considering AI, start with the gaps.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If you are considering AI, automation, analytics, CCaaS changes, BPO changes, or contact centre improvement, the first step is understanding whether the operation is ready.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/brent3p/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 text-base font-black text-slate-950 transition hover:bg-cyan-400"
            >
              Book a Gap Review Call <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
