import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  BriefcaseBusiness,
  Users,
  Target,
  Layers3,
  Phone,
  Mail,
  MapPin,
  Menu,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Building2,
  Headphones,
  Handshake,
} from "lucide-react";

const proof = [
  "$50M+ ARR flagship Fortune 100 BPO program built from zero",
  "$50M+ P&L and global people infrastructure supporting 35,000 employees",
  "20-100% YoY profitability improvement across consulting engagements",
  "300 leaders trained with 100% participant satisfaction",
  "Post-acquisition integration leadership across people, technology, operations, and culture",
];

const fit = [
  "Your leadership team is working hard, but not working from the same playbook.",
  "Growth has created complexity your current operating model cannot handle.",
  "Customer experience, delivery consistency, or profitability is slipping.",
  "Your tools, SOPs, processes, and data exist, but they are not trusted or used consistently.",
  "You have completed an acquisition and need practical integration leadership.",
  "You know something is off, but need a clear diagnosis and action plan.",
];

const audiences = [
  {
    icon: Headphones,
    title: "CX & Contact Centre Teams",
    text: "Improve customer experience, service consistency, leadership rhythm, workforce performance, and technology use.",
  },
  {
    icon: Building2,
    title: "BPO & Outsourcing Operators",
    text: "Align people, product, and profit across complex client programs, delivery teams, and performance targets.",
  },
  {
    icon: TrendingUp,
    title: "PE-backed / Founder-led Service Businesses",
    text: "Create structure, accountability, and operating discipline as the business grows beyond founder-led execution.",
  },
  {
    icon: Handshake,
    title: "Post-Acquisition Teams",
    text: "Build the integration roadmap, align leadership, clarify workstreams, and keep execution moving.",
  },
];

const services = [
  {
    icon: ClipboardCheck,
    title: "3P Operational Alignment Review",
    text: "A focused diagnostic to identify the biggest gaps across leadership, customer experience, process execution, technology use, metrics, and financial impact.",
  },
  {
    icon: Gauge,
    title: "Business Reviews & Operating Rhythm",
    text: "Weekly, monthly, quarterly, or annual review systems that turn performance data into practical, accountable decisions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Fractional COO / Executive Advisory",
    text: "Embedded operator support for CEOs who need structure, traction, and cross-functional execution without adding a full-time executive role.",
  },
  {
    icon: Users,
    title: "Leadership Training & Coaching Systems",
    text: "Practical leadership development built around decision-making, coaching, KPI literacy, accountability, and performance culture.",
  },
  {
    icon: Target,
    title: "CX / BPO Performance Improvement",
    text: "Support for BPOs, CX teams, and contact centres dealing with cost, quality, retention, customer experience, or outsourcing alignment challenges.",
  },
  {
    icon: Layers3,
    title: "Post-Acquisition Integration",
    text: "Practical roadmap design and leadership facilitation across people, systems, culture, process, and operating model integration.",
  },
];

const assessmentSteps = [
  "Current-state assessment",
  "Priority gap list",
  "30/60/90-day action plan",
  "Executive readout with recommended next steps",
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.544l-5.124-6.708L5.214 22H1.956l7.604-8.693L1.5 2h6.71l4.632 6.113L18.244 2Zm-1.143 18.05h1.803L7.229 3.845H5.295L17.1 20.05Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.67c0 .93.65 1.67 1.71 1.67h.02c1.1 0 1.78-.74 1.78-1.67C6.99 3.72 6.34 3 5.25 3ZM20.5 12.92c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.42c.04.8 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.87-1.38 1.88-1.38 1.33 0 1.86 1.02 1.86 2.5V20h3.38v-6.08Z" />
    </svg>
  );
}

function SocialIconLink({ href, label, dark = false, children }: { href: string; label: string; dark?: boolean; children: ReactNode }) {
  const className = dark
    ? "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
    : "flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="3P Solutions home">
            <Image src="/3p-logo.png" alt="3P Solutions logo" width={56} height={56} className="h-12 w-auto" priority />
            <div>
              <p className="text-sm font-black tracking-wide text-slate-950">3P SOLUTIONS</p>
              <p className="text-xs text-slate-500">Founded by Brent Pattison</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex" aria-label="Main navigation">
            <a href="#who" className="hover:text-cyan-700">Who I Help</a>
            <a href="#services" className="hover:text-cyan-700">Services</a>
            <a href="#framework" className="hover:text-cyan-700">3P Framework</a>
            <a href="#proof" className="hover:text-cyan-700">Proof</a>
            <a href="#about" className="hover:text-cyan-700">About</a>
          </nav>

          <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-700 sm:inline-flex">
            Book a fit call <ArrowRight className="h-4 w-4" />
          </a>

          <Menu className="h-6 w-6 text-slate-700 md:hidden" aria-hidden="true" />
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
              <Target className="h-4 w-4" /> Management Consultant | Operations Due Diligence | Executive Advisor
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              Find and fix the operational gaps slowing growth, margin, and customer experience.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Practical advisory support for CEOs and executive teams of service businesses navigating growth, change, integration, and performance improvement.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                Book a 30-minute fit call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#review" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700">
                Start with an alignment review
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-700" /> Guelph, Ontario</span>
              <a href="mailto:brent@3psolutions.ca" className="inline-flex items-center gap-2 hover:text-cyan-700"><Mail className="h-4 w-4 text-cyan-700" /> brent@3psolutions.ca</a>
              <a href="tel:+15198352374" className="inline-flex items-center gap-2 hover:text-cyan-700"><Phone className="h-4 w-4 text-cyan-700" /> (519) 835-2374</a>
              <div className="flex items-center gap-2">
                <SocialIconLink href="https://www.linkedin.com/in/brent-pattison-canada/" label="Brent Pattison on LinkedIn"><LinkedInIcon /></SocialIconLink>
                <SocialIconLink href="https://x.com/3PSolutionsCA" label="3P Solutions on X"><XIcon /></SocialIconLink>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Good fit when</p>
              <h2 className="mt-3 text-2xl font-black">You know something is off, but need a practical operator to diagnose it.</h2>
            </div>
            <div className="mt-6 space-y-4">
              {fit.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-600" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Who I help</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Built for service businesses where execution depends on people, process, technology, and trust.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div key={audience.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{audience.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">How I help</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Practical support for businesses that need traction, not theory.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The front-door offer is the 3P Operational Alignment Review. From there, support can expand into strategic planning, operating rhythm, leadership development, CX/BPO improvement, or fractional COO execution.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="review" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Fast-start offer</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">3P Operational Alignment Review</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                A focused diagnostic engagement to identify the biggest gaps across leadership, customer experience, process execution, technology use, performance metrics, and financial impact.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-lg font-black text-slate-950">You receive:</p>
              <div className="mt-5 grid gap-4">
                {assessmentSteps.map((step) => (
                  <div key={step} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-none text-cyan-600" />
                    <p className="font-semibold text-slate-800">{step}</p>
                  </div>
                ))}
              </div>
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800">
                Talk about the review <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="framework" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The 3P Framework</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">The 3Ps of Business need leadership and management alignment underneath them.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                People create the employee experience. Product is the full customer experience. Profit is the owner experience and the fuel that keeps the business moving. The job of leadership and management is to keep all three aligned.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The 3Px3P Matrix shows where those systems are aligned, where they are weak, and where leaders need to act.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="text-2xl font-black text-cyan-300">People</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Employee experience, leadership capability, roles, culture, coaching, and workforce performance.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="text-2xl font-black text-cyan-300">Product</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Customer experience, service quality, delivery consistency, market value, and client outcomes.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="text-2xl font-black text-cyan-300">Profit</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Owner return, margin, cost structure, cash flow, sustainability, and enterprise value.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Supported by the 3Ps of Leadership</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-900 p-4"><h4 className="font-black text-white">Purpose</h4><p className="mt-2 text-sm leading-6 text-slate-300">Why the business exists and where it is going.</p></div>
                <div className="rounded-2xl bg-slate-900 p-4"><h4 className="font-black text-white">Principles</h4><p className="mt-2 text-sm leading-6 text-slate-300">How decisions are made and which behaviours are expected.</p></div>
                <div className="rounded-2xl bg-slate-900 p-4"><h4 className="font-black text-white">Progress</h4><p className="mt-2 text-sm leading-6 text-slate-300">How the organization knows it is moving in the right direction.</p></div>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Executed through the 3Ps of Management</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-900 p-4"><h4 className="font-black text-white">Planning</h4><p className="mt-2 text-sm leading-6 text-slate-300">Goals, priorities, roles, resources, and decision-making.</p></div>
                <div className="rounded-2xl bg-slate-900 p-4"><h4 className="font-black text-white">Processes</h4><p className="mt-2 text-sm leading-6 text-slate-300">Workflows, SOPs, systems, handoffs, tools, and execution.</p></div>
                <div className="rounded-2xl bg-slate-900 p-4"><h4 className="font-black text-white">Performance</h4><p className="mt-2 text-sm leading-6 text-slate-300">KPIs, scorecards, accountability, and review rhythm.</p></div>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-950 shadow-2xl shadow-black/20">
            <div className="border-b border-slate-200 bg-slate-100 px-6 py-5">
              <h3 className="text-2xl font-black">The 3Px3P Matrix</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">A practical diagnostic for testing whether Planning, Processes, and Performance Measurement properly support People, Product, and Profit.</p>
            </div>
            <div className="grid text-sm md:grid-cols-4">
              <div className="hidden bg-slate-950 p-4 font-black text-white md:block">Management Support</div>
              <div className="bg-cyan-50 p-4 font-black text-cyan-900">People</div>
              <div className="bg-cyan-50 p-4 font-black text-cyan-900">Product</div>
              <div className="bg-cyan-50 p-4 font-black text-cyan-900">Profit</div>
              <div className="bg-slate-100 p-4 font-black">Planning</div>
              <div className="p-4 leading-6 text-slate-700">Right roles, capacity, leadership priorities, and talent plans.</div>
              <div className="p-4 leading-6 text-slate-700">Clear customer journey, service promise, and delivery expectations.</div>
              <div className="p-4 leading-6 text-slate-700">Plans tied to margin, cash flow, growth, and owner return.</div>
              <div className="bg-slate-100 p-4 font-black">Processes</div>
              <div className="p-4 leading-6 text-slate-700">Clear workflows, coaching, tools, SOPs, and support systems.</div>
              <div className="p-4 leading-6 text-slate-700">Consistent delivery, handoffs, quality controls, and customer outcomes.</div>
              <div className="p-4 leading-6 text-slate-700">Controlled pricing, cost, billing, revenue, and financial routines.</div>
              <div className="bg-slate-100 p-4 font-black">Performance</div>
              <div className="p-4 leading-6 text-slate-700">People measured on the right behaviours, capability, and outcomes.</div>
              <div className="p-4 leading-6 text-slate-700">Customer outcomes tracked, reviewed, and acted on consistently.</div>
              <div className="p-4 leading-6 text-slate-700">Financial measures driving informed and accountable decisions.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Relevant proof</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Operator credibility, not consultant theatre.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Brent has sat in the chair: carrying the P&L, building teams, leading integrations, improving performance, and helping leaders make decisions with real consequences.
            </p>
          </div>
          <div className="space-y-4">
            {proof.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-cyan-600" />
                <p className="font-semibold leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10">
            <Image src="/3p-logo.png" alt="3P Solutions logo" width={160} height={160} className="h-28 w-auto" />
            <h2 className="mt-6 text-3xl font-black">About Brent Pattison</h2>
            <p className="mt-4 text-slate-300">Founder, 3P Solutions</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">I have sat in the chair.</h3>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              I started in front-line customer service and grew into global executive leadership. I have built teams, carried the P&L, supported Fortune 100 client relationships, led major operational change, and managed people infrastructure at global scale.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              My consulting work focuses on BPO and CX operations, PE-backed or founder-led service businesses, technology-enabled service companies, post-acquisition integration, leadership development, and practical operating systems that help businesses scale without losing control.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-cyan-50 p-5"><TrendingUp className="h-7 w-7 text-cyan-700" /><p className="mt-3 font-black">Growth</p></div>
              <div className="rounded-2xl bg-cyan-50 p-5"><ShieldCheck className="h-7 w-7 text-cyan-700" /><p className="mt-3 font-black">Accountability</p></div>
              <div className="rounded-2xl bg-cyan-50 p-5"><CalendarDays className="h-7 w-7 text-cyan-700" /><p className="mt-3 font-black">Execution</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="praise" className="bg-cyan-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <BookOpen className="h-12 w-12 text-cyan-700" />
            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950">PRAISE Coaching Methodology</h2>
            <p className="mt-4 text-slate-700">A practical leadership system for improving specific behaviours, closing the loop, and building performance culture.</p>
          </div>
          <div className="rounded-[2rem] border border-cyan-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-700">
              Brent is the author of <span className="font-bold text-slate-950">PRAISE: The Cornerstone of Coaching to Success</span> and creator of the PRAISE coaching methodology. The approach helps managers prepare for coaching, present feedback clearly, and follow up with specific praise when the right behaviours are demonstrated.
            </p>
            <a href="https://www.amazon.com/s?k=PRAISE+The+Cornerstone+of+Coaching+to+Success+Brent+Pattison" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800">
              View the book <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Next step</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Let&apos;s find out if I can help.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If you know something is off but need a practical operator to diagnose it and move it forward, book a 30-minute fit call.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 text-base font-black text-slate-950 transition hover:bg-cyan-400">
              Book on Calendly <ArrowRight className="h-5 w-5" />
            </a>
            <a href="mailto:brent@3psolutions.ca?subject=30-minute%20fit%20call&body=Hi%20Brent%2C%0A%0AI%27d%20like%20to%20book%20a%2030-minute%20fit%20call.%0A%0AThanks%2C" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-black text-white transition hover:bg-white/10">
              Email Brent <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+15198352374" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-black text-white transition hover:bg-white/10">
              Call 519-835-2374 <Phone className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <a href="https://3psolutions.ca" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">3psolutions.ca</a>
            <div className="flex items-center gap-3">
              <SocialIconLink href="https://www.linkedin.com/in/brent-pattison-canada/" label="Brent Pattison on LinkedIn" dark><LinkedInIcon /></SocialIconLink>
              <SocialIconLink href="https://x.com/3PSolutionsCA" label="3P Solutions on X" dark><XIcon /></SocialIconLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-sm text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 3P Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="mailto:brent@3psolutions.ca" className="hover:text-cyan-300">brent@3psolutions.ca</a>
            <a href="tel:+15198352374" className="hover:text-cyan-300">519-835-2374</a>
            <a href="https://3psolutions.ca" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">3psolutions.ca</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
