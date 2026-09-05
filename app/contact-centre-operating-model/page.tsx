import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Gauge,
  Network,
  Settings2,
  Target,
  Users,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Centre Operating Model Consulting | 3P Solutions",
  description:
    "Design a contact centre operating model that aligns customer journeys, people, process, knowledge, data, technology, AI, vendors, and performance around business outcomes.",
  alternates: {
    canonical: "/contact-centre-operating-model",
  },
  openGraph: {
    title: "Contact Centre Operating Model Consulting | 3P Solutions",
    description:
      "Rebuild the operating model behind customer experience so people, process, technology, data, AI, and performance work as one system.",
    url: "/contact-centre-operating-model",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const modelAreas = [
  {
    icon: Target,
    title: "Customer journey & business outcomes",
    text: "Define the customer need, business objective, channel, ownership, handoffs, and measures for each meaningful interaction.",
  },
  {
    icon: Users,
    title: "Roles, leadership & accountability",
    text: "Clarify who owns what, how decisions get made, how leaders manage performance, and how frontline teams are supported.",
  },
  {
    icon: ClipboardCheck,
    title: "Process, knowledge & SOPs",
    text: "Create clear workflows, decision rules, trusted knowledge, escalation paths, and governance so execution is consistent.",
  },
  {
    icon: Gauge,
    title: "Performance management",
    text: "Connect service, quality, employee, customer, revenue, retention, cost, and productivity measures into one operating rhythm.",
  },
  {
    icon: Database,
    title: "Data & management visibility",
    text: "Make sure leaders can see the right information quickly enough to identify root causes, make decisions, and act.",
  },
  {
    icon: Bot,
    title: "Technology, automation & AI",
    text: "Decide what should be human, assisted, automated, autonomous, self-service, or outsourced only after the operating need is clear.",
  },
  {
    icon: Network,
    title: "BPO, vendors & channel integration",
    text: "Align internal teams, outsourcing partners, tools, service levels, incentives, governance, and customer standards across the model.",
  },
  {
    icon: Settings2,
    title: "Continuous improvement",
    text: "Build feedback loops from customers, employees, quality, analytics, and business results back into process and operating decisions.",
  },
];

const symptoms = [
  "Different sites, channels, teams, or vendors run the same work differently.",
  "Nobody can clearly explain who owns a customer issue from beginning to end.",
  "Metrics exist, but they do not tell leaders what to change.",
  "QA, training, coaching, WFM, knowledge, and Operations work as separate functions instead of one system.",
  "Technology has accumulated faster than process design and governance.",
  "AI or automation is being evaluated before the underlying workflow and knowledge are trusted.",
  "Growth or acquisitions have created duplicate processes, systems, roles, and management routines.",
  "The contact centre is optimized for cost while customer friction, retention, revenue, or brand impact sit somewhere else in the business.",
];

const approach = [
  {
    number: "01",
    title: "Map what really happens",
    text: "Start with the actual customer journey, not the org chart or the documented process. Trace work across functions, channels, systems, and vendors.",
  },
  {
    number: "02",
    title: "Find the alignment gaps",
    text: "Identify where ownership, process, knowledge, incentives, data, technology, measures, or leadership routines conflict with the customer and business outcome.",
  },
  {
    number: "03",
    title: "Design the target model",
    text: "Define the future-state roles, workflows, governance, technology responsibilities, performance system, and human-AI operating model.",
  },
  {
    number: "04",
    title: "Sequence the change",
    text: "Prioritize what has to be fixed first, what can wait, what should be automated, and what requires cross-functional leadership decisions.",
  },
  {
    number: "05",
    title: "Operationalize it",
    text: "Turn the design into owners, milestones, KPIs, WBR routines, SOP governance, implementation workstreams, and a practical 30/60/90-day plan.",
  },
];

const faq = [
  {
    q: "What is a contact centre operating model?",
    a: "A contact centre operating model defines how customer work is actually delivered across people, processes, knowledge, technology, data, measures, leadership, vendors, and channels. It connects the customer journey to the way the business organizes and manages the work.",
  },
  {
    q: "Is an operating model the same as an org chart?",
    a: "No. The org chart is only one piece. A functioning operating model also defines ownership, workflows, handoffs, decision rights, metrics, governance, technology, knowledge, capacity, vendors, and management routines.",
  },
  {
    q: "Does the right operating model depend on whether the contact centre is insourced or outsourced?",
    a: "The delivery model matters, but it is not the starting point. Internal, outsourced, and hybrid models can all work well when responsibilities, standards, measures, incentives, technology, and governance are aligned to the business strategy and customer journey.",
  },
  {
    q: "How does AI change the contact centre operating model?",
    a: "AI changes who or what performs parts of the work, but it increases the need for clear processes, trusted knowledge, clean data, decision rules, governance, escalation paths, and outcome measurement. Automating a poorly defined process usually scales the problem rather than fixing it.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Contact Centre Operating Model Consulting",
  provider: {
    "@type": "Organization",
    name: "3P Solutions",
    url: "https://www.3psolutions.ca",
  },
  areaServed: ["Canada", "United States"],
  serviceType: "Contact Centre Operating Model Consulting",
  description:
    "Consulting to align customer journeys, people, process, knowledge, data, technology, AI, vendors, and performance around business outcomes.",
  url: "https://www.3psolutions.ca/contact-centre-operating-model",
};

export default function ContactCentreOperatingModelPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              Contact Centre Operating Model
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              The contact centre cannot outperform the operating model behind it.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              3P Solutions helps contact centre and CX leaders align customer journeys, people, process, knowledge, data, technology, AI, vendors, and performance into one operating system built around customer and business value.
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The core issue</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">The model is not the strategy. The model should serve the strategy.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              A poorly designed internal contact centre will struggle. A poorly governed BPO will struggle. A poorly aligned hybrid model will struggle. Adding AI does not remove the need for clarity - it makes clarity more important.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Common symptoms</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">When the operating model is wrong, the symptoms show up everywhere.</h2>
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What gets aligned</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">A contact centre is a system - not a department with a phone queue.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The work spans multiple business functions. The operating model has to connect them so the customer gets a consistent experience and the business can manage cost, quality, retention, revenue, productivity, risk, and growth together.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {modelAreas.map((item) => {
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
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">AI-ready by design</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Do not automate the mess.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                AI needs clear processes, current SOPs, trusted knowledge, reliable data, explicit decision rules, strong feedback loops, and humans who know when the answer is wrong.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The operating model should define what work belongs with people, what can be assisted, what should be self-service, what can be automated, and where autonomous AI actually creates value without adding unacceptable risk or customer friction.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
              <p className="text-xl font-black">The sequence matters</p>
              <div className="mt-6 space-y-4">
                {[
                  "Define the customer and business outcome.",
                  "Map the current process and ownership.",
                  "Fix knowledge, handoffs, decision rules, and data gaps.",
                  "Define the right measures and governance.",
                  "Then decide where AI, automation, people, vendors, and self-service fit.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                    <p className="leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">How the work gets done</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">From current-state chaos to a model leaders can actually run.</h2>
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Related perspective</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Why now may be the time to rebuild the operating model.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The deeper article explains why the real question is not insourcing versus outsourcing, why AI readiness starts with alignment, and why the contact centre should be managed for customer and enterprise value - not simply lower cost.
            </p>
            <Link href="/blog/building-a-better-contact-centre-operating-model" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-800 hover:text-cyan-950">
              Read the operating model article <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-cyan-100">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Operator perspective</p>
            <p className="mt-4 text-2xl font-black leading-tight">
              30+ years building, running, scaling, integrating, outsourcing, transforming, and fixing contact centre operations.
            </p>
            <Link href="/case-studies" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-800 hover:text-cyan-950">
              See the transformation work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Frequently asked questions</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Contact centre operating model questions</h2>
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
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Before you buy another tool, fix the model it has to operate inside.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If performance problems cross people, process, technology, data, vendors, or business functions, start by finding the gaps in the operating model and deciding what needs to change first.
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
