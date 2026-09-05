import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Handshake,
  Network,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "BPO & Outsourcing Optimization Consulting | 3P Solutions",
  description:
    "Improve BPO and contact centre outsourcing performance across governance, operating standards, SLAs, incentives, quality, workforce, technology, AI, and commercial alignment.",
  alternates: {
    canonical: "/bpo-outsourcing-optimization",
  },
  openGraph: {
    title: "BPO & Outsourcing Optimization Consulting | 3P Solutions",
    description:
      "Turn outsourcing from vendor management into a stronger operating model for customer experience, cost, performance, revenue, and scale.",
    url: "/bpo-outsourcing-optimization",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const symptoms = [
  "The BPO consistently meets some SLAs but the business still feels the customer experience is underperforming.",
  "Client and BPO teams use different definitions of success, different data, or different priorities.",
  "Governance meetings focus on scorecards and explanations instead of decisions and improvement.",
  "The commercial model rewards activity or efficiency without enough connection to quality, retention, revenue, or customer value.",
  "QA, training, coaching, workforce management, knowledge, and operations are not aligned across internal and outsourced teams.",
  "Multiple BPOs or locations run the same customer work differently.",
  "Technology, automation, or AI decisions are being made separately by the client, BPO, and platform vendors.",
  "Leadership is debating whether to insource, outsource more, consolidate vendors, or move work without first fixing the operating model.",
];

const levers = [
  {
    icon: Handshake,
    title: "Governance & accountability",
    text: "Clarify decision rights, ownership, escalation, operating cadence, executive governance, and what each side is accountable to improve.",
  },
  {
    icon: Gauge,
    title: "Performance & scorecards",
    text: "Connect service, quality, productivity, customer, employee, revenue, retention, and financial measures so performance is managed as a business system.",
  },
  {
    icon: Scale,
    title: "Commercial & incentive alignment",
    text: "Review whether pricing, penalties, incentives, staffing assumptions, and contractual measures encourage the behaviours and outcomes the business actually wants.",
  },
  {
    icon: ClipboardCheck,
    title: "Operating standards",
    text: "Standardize processes, QA, coaching, training, knowledge, WFM, escalation, reporting, and customer experience expectations across delivery teams.",
  },
  {
    icon: Network,
    title: "Multi-site & multi-vendor integration",
    text: "Create one operating framework across locations, vendors, internal teams, channels, and geographies while preserving the flexibility each model needs.",
  },
  {
    icon: Bot,
    title: "Technology, automation & AI",
    text: "Determine who owns the technology roadmap, where AI creates measurable value, how data and knowledge are governed, and how benefits are shared.",
  },
  {
    icon: Users,
    title: "Leadership & frontline execution",
    text: "Strengthen leadership routines, manager capability, coaching, recognition, proficiency, and employee accountability so standards become consistent behaviour.",
  },
  {
    icon: ShieldCheck,
    title: "Transitions, risk & continuity",
    text: "Support new launches, vendor changes, site transitions, insourcing, outsourcing, migrations, and contingency planning without losing customer or business performance.",
  },
];

const approach = [
  {
    number: "01",
    title: "Define what outsourcing must accomplish",
    text: "Start with the customer and business outcomes - cost, quality, scale, coverage, revenue, retention, capability, flexibility, or risk - before judging the vendor model.",
  },
  {
    number: "02",
    title: "Assess both sides of the model",
    text: "Review the client and BPO together across governance, process, knowledge, people, metrics, technology, capacity, incentives, and decision-making.",
  },
  {
    number: "03",
    title: "Separate vendor problems from model problems",
    text: "Identify whether the issue is BPO execution, client inputs, bad commercial design, weak governance, broken processes, unclear standards, or a combination.",
  },
  {
    number: "04",
    title: "Redesign the operating relationship",
    text: "Build the target governance model, scorecard, accountability, operating standards, technology responsibilities, and improvement priorities.",
  },
  {
    number: "05",
    title: "Execute the change",
    text: "Support implementation, vendor conversations, operating reviews, transitions, leadership routines, or sourcing decisions as needed.",
  },
];

const faq = [
  {
    q: "What is BPO optimization?",
    a: "BPO optimization is the process of improving the outsourced operating model - not simply negotiating a lower rate. It looks at governance, roles, service levels, process, knowledge, quality, workforce management, training, coaching, technology, incentives, data, and the way client and BPO teams work together to create customer and business value.",
  },
  {
    q: "How do you know whether the problem is the BPO or the client operating model?",
    a: "You have to assess both sides. BPO performance is heavily influenced by the client’s processes, policies, knowledge, forecasts, technology, product decisions, scorecards, incentives, and governance. A vendor can be underperforming, but replacing the vendor without fixing those dependencies often recreates the same problem with a different logo.",
  },
  {
    q: "Should a company insource a poorly performing outsourced contact centre?",
    a: "Not automatically. Insourcing, outsourcing, and hybrid models can all work. The better decision starts with the business outcomes, required capabilities, economics, risk, customer journey, talent model, technology roadmap, and the root causes of current performance. The delivery model should serve the strategy.",
  },
  {
    q: "How does AI affect BPO strategy?",
    a: "AI changes the economics and division of work between client, BPO, technology providers, and customers. The important questions include who owns the automation roadmap, who funds it, who receives the savings, how performance is measured, how trusted knowledge and data are governed, and which interactions should remain human because of complexity, value, risk, or brand impact.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BPO & Outsourcing Optimization Consulting",
  provider: {
    "@type": "Organization",
    name: "3P Solutions",
    url: "https://www.3psolutions.ca",
  },
  areaServed: ["Canada", "United States"],
  serviceType: "BPO and Contact Centre Outsourcing Optimization",
  description:
    "Consulting to improve BPO governance, operating standards, performance, incentives, technology, AI, transitions, and commercial alignment.",
  url: "https://www.3psolutions.ca/bpo-outsourcing-optimization",
};

export default function BpoOutsourcingOptimizationPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              BPO & Outsourcing Optimization
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Outsourcing should improve the operating model - not just move the work somewhere else.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              3P Solutions helps brands and BPO leaders improve the outsourced contact centre across governance, operating standards, performance, incentives, people, technology, AI, cost, customer experience, and commercial alignment.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/cx-ai-technology-gap-review" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800">
                Assess Your Contact Centre <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold transition hover:border-cyan-500 hover:text-cyan-700">
                Book a 30-Minute Fit Call
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/10 lg:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The trap</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">A vendor can hit the SLA and the operating model can still be failing.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Service levels matter. So do price and productivity. But outsourcing performance also depends on the client’s policies, knowledge, forecasts, technology, incentives, customer journey, leadership, and governance.
            </p>
            <p className="mt-5 leading-7 text-slate-300">
              Replacing the BPO without fixing those dependencies can reproduce the same problem with a different supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">When to look deeper</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">If these problems sound familiar, the issue may be bigger than vendor performance.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {symptoms.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-600" />
              <p className="leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What gets optimized</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Manage the relationship like one operating system.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Strong outsourcing performance comes from alignment between the client and BPO. That means looking beyond the contract and connecting the operating model end to end.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {levers.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">AI changes the economics</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">The next BPO negotiation is about more than price per hour.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              AI can reduce contact demand, automate work, assist employees, improve quality, and change staffing requirements. It also creates new questions about ownership, investment, savings, risk, knowledge, data, and incentives.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              If the commercial and operating model does not evolve with the technology, the client and BPO can end up with competing incentives around the very automation both sides say they want.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
            <p className="text-xl font-black">Questions the model should answer</p>
            <div className="mt-6 space-y-4">
              {[
                "Who owns the AI and automation roadmap?",
                "Who funds implementation and change management?",
                "How are productivity gains and savings measured and shared?",
                "What customer interactions should remain human?",
                "Who governs the knowledge, data, quality, and escalation model?",
                "What happens to SLAs, staffing assumptions, and pricing as work changes?",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">How an optimization engagement works</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Fix the model before deciding whether to replace it.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {approach.map((item) => (
              <div key={item.number} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-black text-cyan-700">{item.number}</p>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Operator perspective</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">I have spent 30+ years on the BPO side of this relationship.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The work has included launching and scaling outsourced programs, multi-country operations, global support functions, client governance, technology transformation, workforce management, QA, training, coaching, recruiting, and large-scale operating change.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              That matters because the objective is not to blame the vendor or defend the vendor. It is to understand how the whole client-BPO system is designed and what will actually improve performance.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-cyan-100">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Selected scale</p>
            <p className="mt-4 text-4xl font-black text-cyan-700">$50M+ ARR</p>
            <p className="mt-2 leading-7 text-slate-700">Fortune 100 BPO customer program built and scaled from zero.</p>
            <p className="mt-7 text-4xl font-black text-cyan-700">35,000 FTE</p>
            <p className="mt-2 leading-7 text-slate-700">Global operations and support infrastructure across nine countries.</p>
            <Link href="/case-studies" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-800 hover:text-cyan-950">
              See the transformation work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Frequently asked questions</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">BPO and outsourcing questions</h2>
        </div>
        <div className="mt-10 space-y-5">
          {faq.map((item) => (
            <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black">{item.q}</h3>
              <p className="mt-3 leading-7 text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Next step</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Before you replace the BPO, find out what is actually broken.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If outsourcing performance is not where it should be, start with the operating model across both sides of the relationship. Then decide what to fix, renegotiate, consolidate, insource, outsource, automate, or replace.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/cx-ai-technology-gap-review" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-400">
              Assess Your Contact Centre <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10">
              Book a 30-Minute Fit Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
