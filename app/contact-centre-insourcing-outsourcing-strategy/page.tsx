import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Gauge,
  Handshake,
  Network,
  Scale,
  Settings2,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Centre Insourcing & Outsourcing Strategy | 3P Solutions",
  description:
    "Decide what contact centre work should be insourced, outsourced, hybrid, automated, or retained internally based on customer value, economics, capability, risk, and operating model fit.",
  alternates: {
    canonical: "/contact-centre-insourcing-outsourcing-strategy",
  },
  openGraph: {
    title: "Contact Centre Insourcing & Outsourcing Strategy | 3P Solutions",
    description:
      "Build the right contact centre delivery model across internal teams, BPO partners, technology, automation, and AI.",
    url: "/contact-centre-insourcing-outsourcing-strategy",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const decisionFactors = [
  {
    icon: Target,
    title: "Customer & brand impact",
    text: "Which interactions are high-value, complex, sensitive, revenue-critical, retention-critical, or central to the brand promise?",
  },
  {
    icon: Scale,
    title: "Economics",
    text: "Compare the real cost to serve, management overhead, recruiting, training, technology, facilities, risk, scale, and transition cost - not just hourly rates.",
  },
  {
    icon: Users,
    title: "Talent & capability",
    text: "Assess whether the required leadership, frontline skills, language, hours, specialization, recruiting capacity, and management capability exist internally or externally.",
  },
  {
    icon: Gauge,
    title: "Performance & control",
    text: "Determine the level of control required over quality, customer outcomes, speed of change, coaching, knowledge, data, and decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & resilience",
    text: "Consider compliance, security, concentration risk, business continuity, geographic diversity, vendor dependency, and the consequences of service failure.",
  },
  {
    icon: Settings2,
    title: "Technology & AI",
    text: "Account for automation, self-service, agent assist, autonomous AI, CCaaS, data, and knowledge architecture before locking in a future staffing model.",
  },
  {
    icon: Network,
    title: "Scale & flexibility",
    text: "Evaluate seasonality, growth, acquisitions, new markets, ramp speed, coverage, languages, and the need to flex capacity without overbuilding fixed cost.",
  },
  {
    icon: Handshake,
    title: "Governance & partner fit",
    text: "A great outsourcing strategy still fails with weak governance, poor incentives, unclear ownership, bad contracts, or the wrong BPO partner.",
  },
];

const triggers = [
  "Outsourcing costs are rising and leadership is questioning whether the savings still exist.",
  "Customer experience is inconsistent between internal and outsourced teams.",
  "A BPO contract is approaching renewal and the business wants to reconsider the model before renegotiating.",
  "Leadership is considering bringing work back in-house after poor vendor performance.",
  "The company is growing, acquiring businesses, entering new markets, or adding new channels and needs a scalable delivery model.",
  "AI and automation are changing forecasted staffing needs and the current sourcing strategy no longer fits the future operating model.",
  "Multiple BPOs, sites, or geographies have accumulated without a clear reason for where work should sit.",
  "The business wants to outsource for the first time but needs an operating and governance model before selecting a partner.",
];

const approach = [
  {
    step: "01",
    title: "Define the work",
    text: "Segment customer interactions by complexity, value, volume, risk, channel, required expertise, customer type, and business outcome.",
  },
  {
    step: "02",
    title: "Establish the true economics",
    text: "Build an apples-to-apples view of internal, outsourced, hybrid, and technology-enabled cost - including support functions, management, tools, training, facilities, transition, and risk.",
  },
  {
    step: "03",
    title: "Assess capability and operating fit",
    text: "Evaluate leadership, talent, process maturity, knowledge, technology, WFM, QA, training, governance, and scalability across each delivery option.",
  },
  {
    step: "04",
    title: "Design the target model",
    text: "Decide what should stay internal, move to a BPO, remain hybrid, consolidate, automate, or be redesigned entirely - and why.",
  },
  {
    step: "05",
    title: "Build the transition and governance plan",
    text: "Define sequencing, partner requirements, roles, scorecards, commercial principles, knowledge transfer, technology dependencies, change management, and business continuity.",
  },
];

const faq = [
  {
    q: "Is outsourcing always cheaper than running a contact centre internally?",
    a: "No. Outsourcing can reduce cost and improve flexibility, access to talent, scale, coverage, and capability, but the answer depends on the work, geography, volume, management overhead, technology, support functions, transition cost, commercial model, and how well the partnership is run. Hourly rate comparisons alone are usually misleading.",
  },
  {
    q: "When should a company insource customer service?",
    a: "Insourcing can make sense when interactions are highly strategic, complex, sensitive, tightly connected to product or operations, require rapid cross-functional change, or when the business can build the capability more effectively internally. It can also make sense when outsourcing economics or governance no longer work. The decision should be based on the operating model, not ideology.",
  },
  {
    q: "Is a hybrid contact centre model usually better?",
    a: "Often, but not automatically. Hybrid models can combine internal ownership of high-value or brand-sensitive work with BPO scale, flexibility, specialized capability, or geographic coverage. They also create more governance and integration complexity. Hybrid only works when roles, standards, data, technology, metrics, knowledge, and accountability are aligned.",
  },
  {
    q: "How does AI change insourcing and outsourcing decisions?",
    a: "AI changes contact demand, task mix, staffing, economics, required skills, and the division of work between customers, employees, BPOs, and technology. It can reduce the volume of simple work while making the remaining human work more complex. Sourcing strategy therefore needs to be designed around the future operating model, not historical headcount.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Contact Centre Insourcing & Outsourcing Strategy",
  provider: {
    "@type": "Organization",
    name: "3P Solutions",
    url: "https://www.3psolutions.ca",
  },
  areaServed: ["Canada", "United States"],
  serviceType: "Contact Centre Insourcing and Outsourcing Strategy Consulting",
  description:
    "Consulting to determine the right mix of internal, outsourced, hybrid, automated, and AI-enabled customer operations based on business outcomes, economics, capability, and risk.",
  url: "https://www.3psolutions.ca/contact-centre-insourcing-outsourcing-strategy",
};

export default function InsourcingOutsourcingStrategyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              Insourcing & Outsourcing Strategy
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              The question is not “insource or outsource?” It is “where should this work actually live?”
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              3P Solutions helps leaders design the right contact centre delivery model across internal teams, BPO partners, hybrid operations, automation, self-service, and AI - based on customer value, economics, capability, risk, and business strategy.
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The mistake</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Changing where the work sits does not fix a broken operating model.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              A weak internal operation does not become strong because it is outsourced. A poorly governed BPO does not become better because the work is insourced. The delivery model should come after the business has defined what the work requires and how success will be managed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Common decision points</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">When the sourcing model deserves a fresh look.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {triggers.map((item) => (
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What should drive the decision</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Build the delivery model around the work - not the other way around.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {decisionFactors.map((item) => {
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The 2026 wrinkle</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">AI is changing what should be outsourced before many contracts have caught up.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The easiest contacts to outsource historically are also among the easiest to automate. As self-service and AI remove simple work, the remaining human interactions can become more complex, more valuable, and more dependent on judgment.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              That changes staffing assumptions, pricing models, location strategies, skill requirements, and the economics of both internal and outsourced delivery.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
            <p className="text-xl font-black">The future model may include all five</p>
            <div className="mt-6 space-y-4">
              {["Internal employees", "BPO partners", "Customer self-service", "AI-assisted employees", "Autonomous AI"].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-7 text-slate-300">The strategic job is deciding which work belongs where, how the pieces connect, and how the business measures value across the whole system.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">How the strategy gets built</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Make the sourcing decision with the full operating model in view.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {approach.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Operator perspective</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">The answer is not “outsourcing good” or “outsourcing bad.”</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              I spent 30+ years building and leading BPO and contact centre operations across multiple countries, customers, technologies, delivery models, and transformations. I have seen outsourcing create enormous value - and I have seen it fail when the operating model, incentives, governance, or partner fit were wrong.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The objective is to design the right model for the business, then make whichever delivery choice you make actually work.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-cyan-100">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Related services</p>
            <Link href="/bpo-outsourcing-optimization" className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4 font-black hover:border-cyan-400">
              BPO & Outsourcing Optimization <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact-centre-operating-model" className="mt-3 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4 font-black hover:border-cyan-400">
              Contact Centre Operating Model <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact-centre-technology-ai" className="mt-3 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4 font-black hover:border-cyan-400">
              Contact Centre Technology & AI <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Frequently asked questions</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Insourcing and outsourcing questions</h2>
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
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Do not move the work until you know why you are moving it.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If you are reconsidering where customer work should sit, start with the business outcome, the real economics, and the operating model. Then make the sourcing decision.
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
