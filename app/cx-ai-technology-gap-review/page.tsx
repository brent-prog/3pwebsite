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
  title: "Contact Centre Performance & AI Gap Review | 3P Solutions",
  description:
    "Identify where your contact centre is losing customer value, operational performance, revenue, or margin - and what to fix first across people, process, technology, data, BPO, and AI.",
  alternates: {
    canonical: "/cx-ai-technology-gap-review",
  },
  openGraph: {
    title: "Contact Centre Performance & AI Gap Review | 3P Solutions",
    description:
      "Identify where your contact centre is losing customer value, operational performance, revenue, or margin - and what to fix first across people, process, technology, data, BPO, and AI.",
    url: "/cx-ai-technology-gap-review",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const audiences = [
  "CX and contact centre leaders accountable for service, cost, quality, retention, revenue, or workforce performance",
  "Executives who need their contact centre to operate as a stronger business unit instead of simply managing cost",
  "BPO and vendor management teams trying to improve outsourced performance, governance, or economics",
  "Leaders evaluating AI, automation, analytics, CCaaS, or other contact centre technology",
  "Organizations considering insourcing, outsourcing, consolidation, or a new operating model",
  "Post-acquisition and transformation teams trying to standardize customer operations before scaling",
];

const symptoms = [
  "Service levels, quality, cost, retention, revenue, or employee performance are not where they should be",
  "The contact centre is measured mainly as a cost centre with little connection to business value",
  "No clear view of why customers contact the business or what those interactions are worth",
  "Inconsistent customer experience across channels, locations, teams, or vendors",
  "Reporting shows activity, but not enough insight to drive better decisions",
  "Knowledge, SOPs, QA, training, coaching, or workforce practices are inconsistent or immature",
  "AI and automation are being discussed without a clear view of the operating problem they should solve",
  "Technology spend is increasing, but customer and business outcomes are not improving fast enough",
];

const reviewAreas = [
  { icon: Headphones, title: "Customer Journey", text: "Contact drivers, channels, handoffs, escalations, friction, customer outcomes, and where interactions create or destroy value." },
  { icon: Layers3, title: "Operating Model", text: "How work is organized across leadership, front-line teams, channels, locations, vendors, roles, ownership, and decision-making." },
  { icon: ShieldCheck, title: "BPO / Vendor Performance", text: "Governance, KPI alignment, incentives, reporting, accountability, economics, and service consistency where partners are involved." },
  { icon: ClipboardCheck, title: "Knowledge & SOPs", text: "Whether knowledge and procedures are current, trusted, usable, owned, consistently followed, and ready for human or AI execution." },
  { icon: Users, title: "QA, Training & Coaching", text: "How quality, proficiency, coaching, leadership routines, recognition, and front-line adoption translate expectations into performance." },
  { icon: Gauge, title: "Performance & Economics", text: "Whether KPIs connect customer outcomes, employee performance, operational efficiency, cost, retention, revenue, and enterprise value." },
  { icon: Database, title: "Technology Fit", text: "How the current stack supports the operating model, where it creates friction, and which problems should be solved before adding more technology." },
  { icon: Bot, title: "AI & Automation", text: "Where AI can realistically improve cost, service, employee effectiveness, customer value, or scalability - and whether the operation is ready." },
];

const deliverables = [
  "Clear findings on where the operating model is limiting customer and business value",
  "Priority gaps tied to cost, quality, retention, revenue, risk, and performance",
  "Recommendations that separate people, process, performance, and technology issues",
  "AI and automation opportunities tied to defined business outcomes",
  "A view of what should change before major technology, BPO, insourcing, or transformation decisions",
  "30/60/90-day performance improvement roadmap",
  "Executive readout with recommended actions and investment priorities",
];

const notThis = [
  "A generic software demo",
  "An AI strategy disconnected from operations",
  "A theoretical consulting exercise",
  "A way to force a specific vendor, platform, or outsourcing model",
];

const proof = [
  "30+ years in CX, BPO, and contact centre leadership",
  "Experience building and leading large global customer operations",
  "Fortune 100 client and customer operations experience",
  "Practical experience across internal, outsourced, and hybrid environments",
  "P&L responsibility and a focus on aligning customer value, employee performance, cost, revenue, technology, and execution",
];

export default function CxAiTechnologyGapReviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-20 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-24 lg:pb-12">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-800">
              Contact centre diagnostic
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Contact Centre Performance & AI Gap Review
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">
              Find where your contact centre is losing customer value, operational performance, revenue, or margin - and what to fix first.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              3P Solutions reviews the operating model across customer experience, people, process, performance, technology, BPO, and AI so leadership can make better decisions about improvement and investment.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendly.com/brent3p/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 text-base font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                Book a 30-Minute Fit Call <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/blog/building-a-better-contact-centre-operating-model"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-black text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700"
              >
                Read the Contact Centre Playbook
              </Link>
            </div>
            <Link
              href="#what-gets-reviewed"
              className="mt-6 inline-flex text-sm font-black text-cyan-700 transition hover:text-cyan-900"
            >
              What gets reviewed ↓
            </Link>
          </div>

          <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Core idea</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              AI changes the tools. The contact centre still has to create value.
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                "Clear customer and business outcomes",
                "A contact centre operating model built around those outcomes",
                "People, process, knowledge, and ownership that support execution",
                "Performance measures tied to cost, quality, retention, and revenue",
                "Technology and AI solving defined business problems",
                "Investment priorities based on value, not noise",
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

      <section className="bg-cyan-50/70 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Why this matters</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                A contact centre can destroy value just as easily as it creates it.
              </h2>
            </div>
            <div className="text-lg leading-8 text-slate-700">
              <p>
                Long waits, repeat contacts, poor handoffs, weak coaching, bad vendor incentives, broken processes, disconnected data, and the wrong technology all show up somewhere in cost, customer loyalty, employee performance, revenue, or risk.
              </p>
              <p className="mt-5">
                AI can improve the equation dramatically. But only when leadership understands the operation well enough to know where automation creates value and where the underlying business still needs to be fixed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Who it is for</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">For leaders accountable for making customer operations perform.</h2>
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
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">You can usually see the symptoms. The harder part is finding the real cause.</h2>
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

      <section id="what-gets-reviewed" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What gets reviewed</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            The whole operating system behind the customer experience.
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
              Clarity on what is costing you value - and what to do about it.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The review is designed to give leadership a practical sequence for improving the operation, using AI intelligently, and making better decisions about technology, BPO, people, process, and investment.
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
              It is an operator-led assessment of how the contact centre creates value today, where it is underperforming, and where change will matter most.
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
            Find out what your contact centre could be worth to the business.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether the pressure is AI, cost, CX, BPO performance, growth, technology, or simply an operation that should be performing better, start by understanding the gaps.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/brent3p/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 text-base font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              Book a 30-Minute Fit Call <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
