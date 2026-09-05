import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Database,
  Gauge,
  Layers3,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Centre Technology & AI Consulting | 3P Solutions",
  description:
    "Contact centre technology and AI consulting focused on business outcomes, operating readiness, CCaaS, automation, analytics, knowledge, agent assist, autonomous AI, and measurable return.",
  alternates: {
    canonical: "/contact-centre-technology-ai",
  },
  openGraph: {
    title: "Contact Centre Technology & AI Consulting | 3P Solutions",
    description:
      "Choose and implement contact centre technology and AI around the business problem - not the demo.",
    url: "/contact-centre-technology-ai",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const problems = [
  "Leadership is being pushed to produce an AI roadmap without a clear business case.",
  "The contact centre has accumulated platforms, point solutions, dashboards, and integrations that do not work together cleanly.",
  "Technology decisions are being made from feature comparisons instead of customer journeys and operating needs.",
  "Knowledge, SOPs, data, or process ownership is not strong enough to support reliable automation.",
  "The business cannot clearly quantify whether existing CCaaS, analytics, QA, WFM, CRM, or AI tools are producing the promised return.",
  "Agents are switching between too many systems and the technology stack is adding friction instead of removing it.",
  "AI pilots look impressive, but there is no clear path from demo to governed production use.",
  "The organization is unsure what should be self-service, automated, AI-assisted, autonomous, outsourced, or handled by skilled employees.",
];

const capabilities = [
  {
    icon: Target,
    title: "Business case & use-case prioritization",
    text: "Start with the customer and business outcome, quantify the opportunity, and rank technology or AI use cases by value, feasibility, risk, and sequencing.",
  },
  {
    icon: Layers3,
    title: "Contact centre technology stack",
    text: "Assess CCaaS, CRM, WFM, QA, analytics, knowledge, LMS, performance management, survey, BI, automation, and integration requirements as one operating system.",
  },
  {
    icon: BrainCircuit,
    title: "AI & automation roadmap",
    text: "Define where autonomous AI, agent assist, workflow automation, self-service, next-best-action, analytics, or intelligent routing can create measurable return.",
  },
  {
    icon: Database,
    title: "Knowledge & data readiness",
    text: "Determine whether knowledge, SOPs, data sources, permissions, decision rules, and governance are trusted enough for people and AI to use consistently.",
  },
  {
    icon: Users,
    title: "Human + AI operating design",
    text: "Redesign roles, workflows, escalation, QA, coaching, training, and management routines around the work humans and AI should each perform.",
  },
  {
    icon: Workflow,
    title: "Implementation & change",
    text: "Translate the technology decision into process changes, ownership, rollout sequencing, frontline adoption, controls, and operating measures.",
  },
  {
    icon: Gauge,
    title: "ROI & performance measurement",
    text: "Establish the baseline and track whether technology actually improves cost, customer experience, quality, productivity, revenue, retention, or employee effectiveness.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & risk",
    text: "Define oversight for knowledge, data, model behaviour, escalation, security, compliance, customer impact, and ongoing performance as AI becomes part of production operations.",
  },
];

const approach = [
  {
    number: "01",
    title: "Define the outcome",
    text: "Clarify the customer problem, business objective, baseline performance, constraints, and economics before talking about products or vendors.",
  },
  {
    number: "02",
    title: "Map the operating reality",
    text: "Review customer journeys, workflows, systems, knowledge, data, roles, channels, integrations, vendors, and current pain points end to end.",
  },
  {
    number: "03",
    title: "Separate readiness from aspiration",
    text: "Identify where process, knowledge, data, governance, or leadership gaps would prevent the technology from producing reliable results.",
  },
  {
    number: "04",
    title: "Prioritize the right use cases",
    text: "Compare options based on return, customer impact, effort, risk, dependency, scalability, and fit with the target operating model.",
  },
  {
    number: "05",
    title: "Implement around the business",
    text: "Sequence technology, process, people, measurement, change management, and governance so the investment becomes an operating capability rather than another tool.",
  },
];

const faq = [
  {
    q: "What contact centre technologies should a company evaluate in 2026?",
    a: "The answer depends on the operating problem. Common categories include CCaaS, CRM, workforce management, quality management, interaction analytics, knowledge management, agent assist, autonomous AI, workflow automation, self-service, business intelligence, survey tools, LMS, performance management, and integration platforms. The priority should be based on the customer journey and business outcome, not on which category is receiving the most hype.",
  },
  {
    q: "How do you know if a contact centre is ready for AI?",
    a: "AI readiness depends on more than having APIs or clean data. The organization also needs trusted knowledge, clear processes, current SOPs, defined decision rules, ownership, escalation, governance, measurable outcomes, and people who can validate whether the system is behaving correctly.",
  },
  {
    q: "Should AI replace contact centre agents?",
    a: "Some work can and should move to self-service or autonomous AI. Other work is better suited to AI-assisted employees, specialists, or human-led interactions because of complexity, value, risk, empathy, regulation, or brand impact. The better question is which operating model creates the strongest customer and business outcome for each interaction type.",
  },
  {
    q: "Can 3P help select contact centre technology vendors?",
    a: "Yes, when vendor selection is part of a broader operating need. The work starts by defining requirements, business outcomes, process dependencies, integration needs, and evaluation criteria so the organization can compare vendors against the operating model rather than against a generic feature checklist.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Contact Centre Technology & AI Consulting",
  provider: {
    "@type": "Organization",
    name: "3P Solutions",
    url: "https://www.3psolutions.ca",
  },
  areaServed: ["Canada", "United States"],
  serviceType: "Contact Centre Technology and AI Consulting",
  description:
    "Consulting for contact centre technology strategy, AI readiness, automation, CCaaS, knowledge, analytics, implementation, governance, and ROI.",
  url: "https://www.3psolutions.ca/contact-centre-technology-ai",
};

export default function ContactCentreTechnologyAiPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              <Bot className="h-4 w-4" /> Contact Centre Technology & AI
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Do not buy AI because the demo looked good. Fix the business problem first.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              3P Solutions helps contact centre and CX leaders define where technology, automation, and AI can create measurable customer and business value - then build the operating model required to make it work.
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The principle</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">AI changes the tools. It does not change the fundamentals.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Bad process plus AI is still bad process. Untrusted knowledge plus AI produces faster inconsistency. Weak governance plus autonomous technology creates more risk, not more control.
            </p>
            <p className="mt-5 leading-7 text-slate-300">
              The technology should fit the operating model. The operating model should fit the business strategy and customer journey.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Common technology problems</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">The stack usually is not the problem by itself.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((item) => (
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Where 3P helps</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Technology strategy from the operator side of the table.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The objective is not to sell a platform. It is to determine what the operation needs, what the technology must accomplish, what has to be fixed first, and how the business will know the investment worked.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">AI readiness</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Clean the fuel before installing a bigger engine.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Contact centre AI depends on the quality of the knowledge, data, workflows, decision rules, and feedback loops feeding it. If employees cannot reliably find the right answer today, giving an AI access to the same mess does not make the answer more trustworthy.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
            <p className="text-xl font-black">Before production AI, validate:</p>
            <div className="mt-6 space-y-4">
              {[
                "Customer journeys and use cases are clearly defined.",
                "Knowledge and SOPs are current, governed, and trusted.",
                "Data sources and permissions are understood.",
                "Decision rules and escalation paths are explicit.",
                "Humans know how to validate, override, and improve outputs.",
                "Success measures connect directly to customer and business outcomes.",
                "Governance exists for risk, quality, security, and ongoing change.",
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">How the work gets done</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Business problem first. Technology second.</h2>
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Technology track record</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">This did not start with generative AI.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The technology work spans more than 20 years of contact centre transformation from the business side - including workforce management, QA and coaching, routing, biometrics, productivity tools, speech analytics, recruiting technology, LMS, performance management, business intelligence, and automation.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              AI is the newest layer in a much older operating challenge: matching technology to the customer journey, the people doing the work, and the economics of the business.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-cyan-100">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Related reading</p>
            <Link href="/blog/ai-isnt-broken-untrusted-knowledge-is" className="mt-5 block text-xl font-black hover:text-cyan-800">
              AI Isn't Broken. Untrusted Knowledge Is.
            </Link>
            <Link href="/blog/why-sops-fail-before-ai" className="mt-5 block text-xl font-black hover:text-cyan-800">
              Why SOPs Fail Before AI Ever Gets Involved
            </Link>
            <Link href="/case-studies" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-800 hover:text-cyan-950">
              See the transformation work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Frequently asked questions</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Contact centre technology and AI questions</h2>
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
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Before you invest another dollar in contact centre AI, make sure you are solving the right problem.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start with the operating gaps, customer journey, technology stack, knowledge, data, and business outcomes. Then decide what technology deserves the investment.
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
