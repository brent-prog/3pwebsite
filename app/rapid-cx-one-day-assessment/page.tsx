import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import {
  ArrowRight, CheckCircle2, Headphones, Users, MonitorCog, Target, TrendingUp,
  ClipboardCheck, Building2, Layers3, BriefcaseBusiness, Clock3, BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rapid CX One-Day Assessment | 3P Solutions",
  description: "A one-day, $5,000 contact centre assessment to identify at least $25,000 in credible annual improvement opportunities or get your assessment fee back. For internal teams, BPO accounts and PE-backed operations.",
  alternates: { canonical: "/rapid-cx-one-day-assessment" },
  openGraph: {
    title: "Find $25,000+ in Contact Centre Improvement Opportunities | 3P Solutions",
    description: "Rapid CX One-Day Assessment. One operation. One day. $5,000. At least $25,000 in credible annual improvement opportunities identified or the fee is refunded.",
    url: "/rapid-cx-one-day-assessment",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const areas = [
  { icon: Users, title: "Hiring, training & readiness", text: "Who you hire, how quickly they become effective, where training falls short and what turnover costs the business." },
  { icon: Headphones, title: "Customer work & missed revenue", text: "What agents actually do, why customers contact you, repeated work, broken handoffs, preventable churn and sales opportunities being missed." },
  { icon: MonitorCog, title: "Your entire technology toolkit", text: "What systems you have, what you pay for, what staff actually use, what's underused or disconnected, where AI and automation help, and which capabilities are missing." },
  { icon: Target, title: "Incentives, coaching & performance", text: "What pay plans, targets, QA, workforce management, scorecards and coaching encourage people to do - and whether those behaviours improve customer outcomes, revenue and margin." },
  { icon: TrendingUp, title: "Leadership & business results", text: "How managers make decisions, set priorities and support the team; where operational targets are disconnected from the results the business needs." },
];

const audiences = [
  { icon: Building2, title: "In-house contact centres", text: "One team or department with 30+ frontline employees, including operations that also outsource part of their work." },
  { icon: Layers3, title: "BPO client programs", text: "One department, client account or line of business with 30+ frontline employees. Evaluate value to both the BPO and its client, taking contract economics into account." },
  { icon: BriefcaseBusiness, title: "PE-backed businesses", text: "A focused look at customer operations before or after an acquisition. Identify improvements that may increase EBITDA or reveal opportunities across acquired locations. Broader multi-site reviews are scoped separately." },
];

const proof = [
  { number: "$50M+", label: "Annual recurring revenue", detail: "Fortune 100 BPO program built and scaled from zero." },
  { number: "20%", label: "Lower net attrition", detail: "Delivered within six months across a 3,000+ employee telecom operation." },
  { number: "35,000", label: "Employees supported", detail: "Executive support-services leadership across nine countries." },
];

const booking = "https://calendly.com/brent3p/30min";

function Cta({ secondary = false }: { secondary?: boolean }) {
  return (
    <a href={booking} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-black transition ${secondary ? "border border-slate-300 bg-white text-slate-950 hover:border-cyan-500 hover:text-cyan-700" : "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/15 hover:bg-cyan-400"}`}>
      Book a 30-Minute Fit Call <ArrowRight className="h-5 w-5" />
    </a>
  );
}

export default function ContactCentrePerformanceAssessment() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-200">
              <Headphones className="h-4 w-4" /> 3P Rapid CX One-Day Assessment
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight md:text-6xl">
              Your contact centre could be costing you more than you think.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200 md:text-2xl">
              And your reports might not show it. Find the avoidable costs, missed revenue, wasted technology spend and management gaps that keep your operation from delivering more to the business.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
              <strong>In one focused day, identify at least $25,000 in credible annual improvement opportunities - or get your $5,000 assessment fee back.</strong>
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Cta />
              <a href="#how-it-works" className="inline-flex items-center px-2 py-3 font-bold text-cyan-200 hover:text-white">See what we examine ↓</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm lg:p-9">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">A straightforward first step</p>
            <div className="mt-6 grid grid-cols-3 gap-3 border-b border-white/15 pb-7">
              <div><p className="text-3xl font-black text-white md:text-4xl">1</p><p className="mt-2 text-sm text-slate-300">Focused day</p></div>
              <div><p className="text-3xl font-black text-white md:text-4xl">$5K</p><p className="mt-2 text-sm text-slate-300">Fixed fee</p></div>
              <div><p className="text-3xl font-black text-cyan-300 md:text-4xl">$25K+</p><p className="mt-2 text-sm text-slate-300">Annual opportunity</p></div>
            </div>
            <p className="mt-6 text-lg font-bold">One qualifying operation with 30+ frontline employees.</p>
            <p className="mt-3 leading-7 text-slate-300">No months-long review. No obligation to hire us for the next phase. Just a clear view of what could improve, what it may be worth and where to start.</p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-cyan-400/15 p-4 text-sm leading-6 text-cyan-100">
              <BadgeCheck className="mt-0.5 h-5 w-5 flex-none" />
              If we cannot identify $25,000 in credible estimated annual opportunities under the agreed assessment scope, we refund the assessment fee.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Why act now?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">The cost keeps adding up while everyone watches the dashboard.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>Your team may be meeting service levels, handling calls efficiently and scoring well on quality. Meanwhile, customers are calling back unnecessarily, employees are working around bad systems, technology you've already bought goes unused and incentives reward the wrong outcomes.</p>
            <p>Some problems start in the contact centre. Others begin with policies, products or decisions elsewhere in the company. Either way, the business pays for them - in cost, lost customers and missed revenue.</p>
            <p className="font-bold text-slate-950">The question isn't whether you have KPIs. It's whether you're getting the full value your operation should be delivering.</p>
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Why 3P Solutions</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">I've built businesses, led global operations and delivered the results.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">I'm Brent Pattison. I spent decades responsible for some of the world's largest and most complex contact centre and BPO operations, making decisions about people, customers, technology and profit at scale.</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">But that's only part of the story. I've also built and grown businesses, helped owners prepare companies for acquisition, and worked with private equity-backed groups to find improvements across acquired operations. I understand what those operating decisions mean for profitability, growth and business value.</p>
              <p className="mt-4 text-lg font-bold leading-8 text-slate-950">You aren't buying another opinion about your contact centre. You're getting the perspective of someone who's had to make the decisions, deliver the results and live with the numbers.</p>
            </div>
            <div className="rounded-3xl border border-cyan-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Beyond the contact centre</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight">Building value in the business itself.</h3>
              <p className="mt-4 leading-7 text-slate-700">From growing and selling an independently operated service business to strengthening operating models for acquisition and integration, my work has always come back to the same question: what will make this business perform better and become more valuable?</p>
              <a href="/case-studies" className="mt-6 inline-flex items-center gap-2 font-black text-cyan-900 hover:text-cyan-700">See the work behind 3P <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {proof.map(({ number, label, detail }) => (
              <div key={number} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-cyan-100">
                <p className="text-4xl font-black tracking-tight text-cyan-700">{number}</p>
                <p className="mt-3 font-black">{label}</p>
                <p className="mt-2 leading-7 text-slate-700">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Cta secondary />
            <span className="text-sm font-semibold text-slate-600">See if your operation is a fit. No obligation.</span>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Where we find the value</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">We follow the work, not just the numbers.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">We walk through the operation with the people who know it: recruiting and training, a frontline employee, a supervisor and the manager. We examine how their day-to-day work, tools and decisions connect to customer experience and the business's financial results.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-3xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Not another audit</p>
              <p className="mt-4 text-2xl font-black leading-snug">Find what's costing the business money - without committing to a major consulting project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">What you get</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">A clear answer about where to make more money - and what to do first.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">You'll receive a concise executive summary with evidence, estimated annual impact and recommended actions. The assessment stands on its own.</p>
          </div>
          <div className="space-y-4">
            {[
              ["Where you're losing money or missing revenue", "The specific problems and overlooked opportunities that warrant attention."],
              ["What each opportunity could be worth", "Credible annual estimates with assumptions made clear, not invented savings claims."],
              ["What needs to change", "Practical changes to people, customer workflows, technology, incentives and management."],
              ["What to tackle first", "A sensible order of action, including what needs deeper investigation before investment."],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-cyan-300" />
                <div><h3 className="text-lg font-black">{title}</h3><p className="mt-1 leading-7 text-slate-300">{body}</p></div>
              </div>
            ))}
            <div className="pt-3"><Cta /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Who this is for</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">One assessment. Different ways to put it to work.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {audiences.map(({icon: Icon,title,text}) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <Icon className="h-8 w-8 text-cyan-700" />
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">The guarantee</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">$5,000 to find at least $25,000 in annual opportunities. Or your fee back.</h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-700">
            <p>For a qualifying operation with 30+ frontline employees, we'll identify at least $25,000 in credible, estimated annual cost savings or revenue improvements. If we can't, we'll refund the assessment fee.</p>
            <p>We'll explain the financial assumptions and avoid counting the same benefit twice. Opportunities are estimates, not guaranteed realized savings. The scope, operating and financial information required, and refund conditions are agreed before the assessment begins.</p>
            <p className="font-bold text-slate-950">No requirement to buy more consulting. No pressure to replace your technology. Just a practical first step.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Start with one conversation</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">You don't need another quarter of reports to find out what you're missing.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Let's determine whether your operation qualifies, agree on the scope and see if this assessment makes sense for your business.</p>
          <div className="mt-9"><Cta /></div>
          <p className="mt-6 text-sm text-slate-400">Or email <a className="font-bold text-cyan-300 hover:text-white" href="mailto:brent@3psolutions.ca">brent@3psolutions.ca</a> · <a className="font-bold text-cyan-300 hover:text-white" href="tel:+15198352374">519-835-2374</a></p>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-sm text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div><p className="font-bold text-white">3P Solutions</p><p className="mt-1">Making Businesses More Valuable</p></div>
          <p>© {new Date().getFullYear()} 3P Solutions · <a href="/" className="hover:text-cyan-300">Home</a></p>
        </div>
      </footer>
    </main>
  );
}
