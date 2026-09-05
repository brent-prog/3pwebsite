import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Headphones,
  Network,
  Settings2,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Centre Consulting | 3P Solutions",
  description:
    "Contact centre consulting for leaders who need better customer experience, lower cost, stronger performance, smarter AI adoption, and an operating model that creates business value.",
  alternates: {
    canonical: "/contact-centre-consulting",
  },
  openGraph: {
    title: "Contact Centre Consulting | 3P Solutions",
    description:
      "Improve contact centre performance across people, process, technology, data, customer experience, cost, revenue, and AI.",
    url: "/contact-centre-consulting",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const problems = [
  "Customer experience is inconsistent, but the root cause is not obvious.",
  "Cost is too high or productivity is too low without a clear path to improvement.",
  "Leadership is under pressure to use AI or automation but has not defined where it will actually create value.",
  "QA, training, coaching, workforce management, knowledge, or performance management are not producing consistent frontline execution.",
  "Outsourced and internal teams operate to different standards, metrics, or incentives.",
  "Growth, acquisitions, insourcing, outsourcing, or new technology have exposed gaps in the operating model.",
  "The contact centre is measured mainly as a cost centre instead of for the customer and business value it creates or protects.",
  "There is plenty of data, but leaders still cannot see what to change first.",
];

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Performance & Operating Model",
    text: "Assess how customer journeys, workflows, roles, ownership, handoffs, capacity, vendors, and leadership routines fit together - then redesign what is getting in the way of performance.",
  },
  {
    icon: Gauge,
    title: "Metrics & Business Reviews",
    text: "Connect service, quality, employee, cost, retention, revenue, and financial measures so the operation is managed around business outcomes rather than disconnected KPIs.",
  },
  {
    icon: Users,
    title: "Leadership, QA, Training & Coaching",
    text: "Build the management system required to turn expectations into consistent frontline behaviour, proficiency, accountability, improvement, and recognition.",
  },
  {
    icon: Bot,
    title: "Technology, Automation & AI",
    text: "Define the business problem first, then determine where CCaaS, analytics, AI, automation, agent assist, knowledge, or other technology can create measurable return.",
  },
  {
    icon: Network,
    title: "BPO, Outsourcing & Insourcing",
    text: "Improve partner performance, governance, commercial alignment, operating standards, transitions, sourcing strategy, and the right mix of internal and external delivery.",
  },
  {
    icon: Settings2,
    title: "Knowledge, SOPs & Process",
    text: "Create the trusted knowledge, procedures, decision rules, handoffs, and governance required for people and AI to execute consistently.",
  },
];

const engagementSteps = [
  {
    step: "01",
    title: "Define the business problem",
    text: "Start with the outcome the business needs - not a predetermined technology, staffing model, or consulting methodology.",
  },
  {
    step: "02",
    title: "Find the actual gaps",
    text: "Assess the operation across customer experience, people, process, knowledge, performance, data, technology, leadership, and economics.",
  },
  {
    step: "03",
    title: "Prioritize by value",
    text: "Separate symptoms from root causes and rank changes by customer impact, business value, effort, risk, and sequencing.",
  },
  {
    step: "04",
    title: "Build the operating plan",
    text: "Turn the findings into practical ownership, milestones, metrics, and a 30/60/90-day roadmap leaders can actually execute.",
  },
  {
    step: "05",
    title: "Stay involved where useful",
    text: "Support implementation, executive decisions, vendor selection, operating reviews, leadership systems, or transformation execution as needed.",
  },
];

const results = [
  {
    metric: "$50M+ ARR",
    text: "Fortune 100 BPO program built and scaled from zero.",
  },
  {
    metric: "20%",
    text: "Reduction in net attrition within six months across a 3,000+ FTE, nine-site telecom operation.",
  },
  {
    metric: "20,000+",
    text: "Employees ultimately supported in a global work-at-home operating model built during the pandemic response.",
  },
  {
    metric: "10%",
    text: "Reduction in global attrition after redesigning support services around a 35,000-FTE operation across nine countries.",
  },
];

export default function ContactCentreConsultingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              <Headphones className="h-4 w-4" /> Contact Centre Consulting
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Your contact centre should create business value - not just manage contacts.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              3P Solutions helps contact centre, CX, and BPO leaders find what is actually limiting performance and fix the operating model across people, process, technology, data, customer experience, cost, revenue, and AI.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/cx-ai-technology-gap-review" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800">
                Assess Your Contact Centre <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-950 transition hover:border-cyan-500 hover:text-cyan-700">
                Book a 30-Minute Fit Call
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/10 lg:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The problem</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Most contact-centre problems are not contact-centre problems.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              The contact centre is where broken processes, weak product decisions, bad policies, poor knowledge, technology gaps, leadership problems, and misaligned incentives become visible to the customer.
            </p>
            <p className="mt-5 leading-7 text-slate-300">
              Fixing performance means finding those dependencies - not just changing scripts, adding dashboards, buying another platform, or telling agents to try harder.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">When to bring me in</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">You know the operation can perform better. The question is where to start.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-600" />
              <p className="leading-7 text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Contact centre consulting services</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Fix the business behind the customer interaction.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The work is deliberately cross-functional because contact-centre performance is cross-functional. The right engagement depends on the business problem, not on forcing every client into the same consulting package.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div key={capability.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{capability.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">AI & technology</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">AI belongs inside the operating model - not above it.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                AI can reduce cost, improve access, support agents, automate work, improve quality, and create better customer experiences. But automation magnifies whatever operating model you give it.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The sequence matters: define the business outcome, fix the process and knowledge, establish the right measures, then decide what people and technology should each do.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <Target className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-xl font-black">Business outcome first</h3>
                <p className="mt-3 leading-7 text-slate-300">Start with customer value, cost, retention, revenue, quality, risk, or productivity - not with the technology.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <Settings2 className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-xl font-black">Operating readiness</h3>
                <p className="mt-3 leading-7 text-slate-300">Clean up knowledge, decision rules, workflows, ownership, data, and governance before automating the mess.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <Bot className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-xl font-black">Right human + AI mix</h3>
                <p className="mt-3 leading-7 text-slate-300">Determine what should be automated, assisted, self-served, outsourced, or kept with skilled employees.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <TrendingUp className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-xl font-black">Measure the return</h3>
                <p className="mt-3 leading-7 text-slate-300">Track whether the change actually improves the customer and business outcomes used to justify it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">How an engagement works</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Diagnose first. Prioritize second. Then fix what matters.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {engagementSteps.map((item) => (
              <div key={item.step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-black text-cyan-700">{item.step}</p>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Selected results</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">30+ years of operating experience. Not a framework learned last year.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {results.map((item) => (
              <div key={item.metric} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cyan-100">
                <p className="text-3xl font-black tracking-tight text-cyan-700">{item.metric}</p>
                <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 font-black text-cyan-800 hover:text-cyan-950">
            See the transformation work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-cyan-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Best place to start</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Contact Centre Performance & AI Gap Review</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              When the symptoms are clear but the root cause is not, start with a focused diagnostic. The review identifies where the operation is losing customer value, performance, revenue, or margin - and what should change first.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-950 p-7 text-white">
            <p className="font-black">Typical outputs</p>
            <div className="mt-5 space-y-4">
              {[
                "Current-state operating model and customer journey assessment",
                "People, process, knowledge, data, KPI, technology, and AI findings",
                "Priority gaps and root causes",
                "Business-value and investment priorities",
                "30/60/90-day improvement roadmap",
                "Executive readout and recommended next actions",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/cx-ai-technology-gap-review" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">
              Explore the Gap Review <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Next step</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">If the contact centre matters to the business, run it like it matters.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tell me what is happening, what the business needs from the operation, and where you think it is getting stuck. We will figure out quickly whether I can help.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-400">
              Book a 30-Minute Fit Call <ArrowRight className="h-5 w-5" />
            </a>
            <a href="mailto:brent@3psolutions.ca?subject=Contact%20Centre%20Consulting" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10">
              Email Brent
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
