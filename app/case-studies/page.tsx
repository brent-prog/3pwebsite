import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Centre & CX Transformation Case Studies | 3P Solutions",
  description:
    "Anonymized examples of contact centre, CX, BPO, operating model, workforce, leadership, and business transformation work led by 3P Solutions founder Brent Pattison.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Contact Centre & CX Transformation Case Studies | 3P Solutions",
    description:
      "Anonymized examples of contact centre, CX, BPO, operating model, workforce, leadership, and business transformation work.",
    url: "/case-studies",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const cases = [
  {
    label: "Telecommunications | 3,000+ FTE | 9 Sites",
    title: "Unifying fragmented contact centres into one operating model",
    problem:
      "A major telecommunications program had grown through both acquisition and organic expansion. Nine contact centres and more than 3,000 employees were operating across legacy cultures, inconsistent leadership practices, disconnected sites, and uneven adoption of the client's customer-experience model.",
    work: [
      "Assessed acquired and legacy sites through leadership meetings, employee focus groups, and operating reviews",
      "Created a consistent customer interaction, QA, coaching, and performance framework across all locations",
      "Aligned company values, client expectations, leadership routines, coaching documentation, and employee recognition",
      "Created centralized support and cross-site leadership routines to replace isolated site-level execution",
      "Introduced technology-enabled performance recognition and stronger operating consistency",
    ],
    result: [
      "20% reduction in net employee attrition within the first six months",
      "Material improvement in client scorecard performance",
      "Client expanded the relationship by three additional locations and approximately 1,000 FTE within 12 months",
    ],
  },
  {
    label: "Global BPO | 35,000 Employees | 9 Countries",
    title: "Rebuilding the operating infrastructure for a 20,000+ employee virtual workforce",
    problem:
      "A global BPO faced an immediate business-continuity crisis when pandemic lockdowns prevented tens of thousands of employees from reaching physical contact centres. Work-at-home capability existed only in limited pockets and was not designed to support enterprise scale.",
    work: [
      "Coordinated Operations, Technology, HR, Legal, Facilities, Training, Reporting, Marketing, and client teams around one deployment model",
      "Built standardized processes for employee eligibility, equipment distribution, security, client approvals, policies, connectivity, productivity, and reporting",
      "Developed centralized Power BI visibility into workforce status, equipment, productivity, connectivity, and compliance",
      "Expanded secure work-at-home capability through MFA, BYOD, virtual recruiting, onboarding, training, coaching, and employee communications",
      "Helped establish the management infrastructure required to operate a large distributed workforce sustainably",
    ],
    result: [
      "200 employees working from home within 48 hours",
      "5,000 within four days and 9,000 within seven days",
      "18,000+ employees migrated within three weeks with approvals from 78 clients",
      "20,000+ employees ultimately supported in the virtual operating model",
      "Virtual recruiting and training infrastructure supported more than 10,000 hires by the end of 2020",
    ],
  },
  {
    label: "Global BPO Support Services | 35,000 FTE",
    title: "Aligning the functions around Operations - not just fixing Operations",
    problem:
      "Global operations depended on HR, Recruiting, Training, Workforce Management, and other support functions that had evolved independently across geographies. The result was inconsistent support, fragmented accountability, and unnecessary employee-performance friction.",
    work: [
      "Created a centralized Global Operations Support Services model",
      "Aligned HR, Recruiting, Corporate Training, Leadership Development, and Workforce Management around operating priorities",
      "Standardized global support processes, performance visibility, leadership expectations, and functional accountability",
      "Connected support-function decisions more directly to frontline operations and employee outcomes",
    ],
    result: [
      "Operating model supported approximately 35,000 employees across nine countries",
      "10% reduction in global employee attrition",
    ],
  },
  {
    label: "Multi-Location Service Business | 20+ Locations",
    title: "Finding the operating gaps created by growth and acquisition",
    problem:
      "A fast-growing, acquisition-heavy service business had more than 20 locations but no consistent customer-operations model. Customer queues, routing, lead management, callbacks, reporting, knowledge, QA, workforce management, coaching, training, and ownership varied across the organization.",
    work: [
      "Completed a detailed current-state CX and contact-centre gap analysis",
      "Mapped customer journeys, operating ownership, queues, lead handling, reporting, knowledge, technology, and support functions",
      "Designed a target centralized CX operating model and clearer accountability structure",
      "Recommended standardized lead and routing processes plus formal WFM, QA, training, and coaching systems",
      "Built KPI, business-review, knowledge-governance, omnichannel, and acquisition-integration recommendations",
    ],
    result: [
      "Delivered an executive target operating model and prioritized implementation roadmap",
      "Created a common framework for integrating customer operations across existing and future acquisitions",
    ],
  },
  {
    label: "Technology Services | Founder-Led Business",
    title: "From owner-operated to acquisition-ready - then into post-merger strategy",
    problem:
      "A successful 30-year technology-services business was profitable but heavily dependent on its owner. It lacked a formal organization structure, clear role definitions, consistent performance management, structured client profitability analysis, and scalable management systems.",
    work: [
      "Completed a comprehensive business gap analysis and established clear mission, vision, and values",
      "Designed the organizational structure, role descriptions, responsibilities, and initial employee performance standards",
      "Created client-level revenue and profitability visibility and clarified services and key revenue drivers",
      "Standardized knowledge and SOP management and implemented SOC 2 controls through a successful completed audit",
      "Organized operating, financial, compliance, and customer information into a structured acquisition due-diligence package",
      "After acquisition, assessed both organizations and facilitated a three-day combined leadership planning session",
      "Created a unified strategic foundation including three-year goals, annual and quarterly priorities, KPIs, weekly leadership cadence, and combined organization structure",
    ],
    result: [
      "Owner entered acquisition discussions with substantially stronger operating and financial visibility",
      "Transaction completed within 12 months of the initial engagement",
      "Owner achieved a valuation above expectations",
      "Combined leadership team received a structured post-merger roadmap for the incoming CEO to build from",
    ],
  },
];

const supportingProof = [
  {
    title: "Leadership system at scale",
    text: "Designed a customized leadership, management, and coaching system for a consumer-finance organization with 8,000+ frontline sales associates and 300+ sales managers. 267 leaders completed the program and 100% reported it was relevant and immediately applicable to their role.",
  },
  {
    title: "First Philippines offshoring launch",
    text: "Designed the process, training, quality, escalation, productivity, and reporting model for an initial 25-person offshore team. The operation expanded to 75 FTE and then approximately 300 FTE in its first year.",
  },
  {
    title: "Performance-measurement intervention",
    text: "Identified a serious unintended-behaviour issue created by a poorly designed performance metric, traced the root cause into leadership practices, and led the corrective operating and leadership response while protecting the client relationship and business continuity.",
  },
  {
    title: "20+ years of contact-centre technology transformation",
    text: "Business-side leadership across WFM, QA and coaching platforms, speech analytics, LMS, HRIS, recruiting technology, next-best-action, gamification, workforce analytics, Power BI, virtual operations, and enterprise reporting - long before AI became the industry's dominant headline.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Anonymized transformation work</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
            Real operating problems. Real scale. Measurable business outcomes.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">
            Client names are intentionally withheld. The point is not the logo. It is the problem, the operating work required to fix it, and the outcome created for the business.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="space-y-8">
          {cases.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
                <div className="bg-slate-950 p-8 text-white lg:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Case {index + 1}</p>
                  <p className="mt-5 text-sm font-bold text-slate-300">{item.label}</p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight">{item.title}</h2>
                  <p className="mt-6 leading-7 text-slate-300">{item.problem}</p>
                </div>
                <div className="p-8 lg:p-10">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">What changed</p>
                    <div className="mt-5 space-y-3">
                      {item.work.map((point) => (
                        <div key={point} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                          <p className="leading-7 text-slate-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 rounded-3xl bg-cyan-50 p-6">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Outcome</p>
                    <div className="mt-4 space-y-3">
                      {item.result.map((point) => (
                        <div key={point} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-700" />
                          <p className="font-semibold leading-7 text-slate-800">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Additional proof</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">Different problems. Same operating discipline.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {supportingProof.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Your operation</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">The symptoms are usually visible. The root cause usually is not.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If your contact centre is underperforming, costing too much, struggling to scale, or facing an AI and technology mandate, start by finding the actual operating gaps.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/cx-ai-technology-gap-review" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-400">
              Assess Your Contact Centre <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10">
              Book a 30-Minute Fit Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
