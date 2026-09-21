import SiteHeader from "./components/SiteHeader";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Handshake,
  Headphones,
  Settings2,
  TrendingUp,
  Users,
} from "lucide-react";

const outcomes = [
  { title: "Lower cost", text: "Remove avoidable demand, waste, rework, and bad operating friction." },
  { title: "Better CX", text: "Make service easier, faster, more consistent, and more valuable to customers." },
  { title: "Protect revenue", text: "Improve retention, conversion, loyalty, and the value created in customer interactions." },
  { title: "Make AI pay", text: "Use automation where it creates real return - not because the demo looked good." },
];

const services = [
  {
    icon: BrainCircuit,
    title: "Contact Centre Performance & AI Gap Review",
    text: "Find what is limiting performance and what to fix first.",
    href: "/cx-ai-technology-gap-review",
  },
  {
    icon: ClipboardCheck,
    title: "Contact Centre Operating Model",
    text: "Align people, process, knowledge, metrics, technology, and ownership.",
    href: "/contact-centre-operating-model",
  },
  {
    icon: Bot,
    title: "Contact Centre Technology & AI",
    text: "Make better technology and AI decisions based on business value.",
    href: "/contact-centre-technology-ai",
  },
  {
    icon: Handshake,
    title: "BPO & Outsourcing Optimization",
    text: "Fix the client-BPO operating model, not just the scorecard.",
    href: "/bpo-outsourcing-optimization",
  },
  {
    icon: Settings2,
    title: "Insourcing & Outsourcing Strategy",
    text: "Decide where the work should actually live - and why.",
    href: "/contact-centre-insourcing-outsourcing-strategy",
  },
  {
    icon: Users,
    title: "Leadership, QA, Training & Coaching",
    text: "Turn expectations into consistent frontline performance.",
    href: "/contact-centre-consulting",
  },
];

const proof = [
  { metric: "$50M+ ARR", text: "BPO program built from zero" },
  { metric: "20% lower attrition", text: "3,000+ FTE telecom transformation" },
  { metric: "20,000+ WAH", text: "Global operating-model transformation" },
  { metric: "10% lower attrition", text: "35,000-FTE support-services redesign" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              <Headphones className="h-4 w-4" /> Contact Centres | CX | BPO | AI
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Make your contact centre worth more to the business.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700 md:text-2xl">
              Better customer experience. Lower cost. More retained revenue. Smarter AI.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="/cx-ai-technology-gap-review" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-black text-white transition hover:bg-slate-800">
                Find the Gaps <ArrowRight className="h-5 w-5" />
              </a>
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:border-cyan-500 hover:text-cyan-700">
                Talk to Brent
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Why now?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">AI is changing the economics of customer service.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              If the operating model is weak, AI makes the weakness faster. If the model is right, AI can make the business stronger.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What&apos;s in it for you?</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A contact centre that creates more value.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">How 3P helps</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Find the problem. Fix the system. Improve the economics.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a key={service.title} href={service.href} className="group rounded-3xl border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/15">
                  <Icon className="h-8 w-8 text-cyan-300" />
                  <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Why 3P?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">I&apos;ve actually run this stuff.</h2>
            <p className="mt-5 text-xl leading-8 text-slate-700">
              30+ years building, running, scaling, outsourcing, insourcing, fixing, and transforming contact centres and BPO operations.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proof.map((item) => (
              <div key={item.metric} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cyan-100">
                <p className="text-3xl font-black tracking-tight text-cyan-700">{item.metric}</p>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
          <a href="/case-studies" className="mt-8 inline-flex items-center gap-2 font-black text-cyan-900">
            See the transformation work <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="framework" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">The 3P lens</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">People. Product. Profit.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Better employee performance. Better customer experience. Better business results. If one breaks, the contact centre feels it.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["People", "Can employees and leaders execute consistently?"],
              ["Product", "Does the customer get the experience the business intends?"],
              ["Profit", "Does the operation create or protect measurable value?"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-2xl font-black text-cyan-700">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Start here</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Where is your contact centre leaving value on the table?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Find the biggest gaps, the real root causes, and what to fix first.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/cx-ai-technology-gap-review" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-400">
              Assess Your Contact Centre <ArrowRight className="h-5 w-5" />
            </a>
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10">
              Book a 30-Minute Fit Call
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-sm text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 3P Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="mailto:brent@3psolutions.ca" className="hover:text-cyan-300">brent@3psolutions.ca</a>
            <a href="tel:+15198352374" className="hover:text-cyan-300">519-835-2374</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
