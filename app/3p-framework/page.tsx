import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Gauge,
  HeartHandshake,
  Lightbulb,
  LineChart,
  MessageCircleMore,
  NotebookTabs,
  Target,
  Users,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "3P Business Success Framework | 3P Solutions",
  description:
    "Explore Brent Pattison's 3P Business Success Framework - an integrated system connecting People, Product, Profit, leadership, management, and coaching to make businesses more valuable.",
  alternates: {
    canonical: "/3p-framework",
  },
  openGraph: {
    title: "3P Business Success Framework | 3P Solutions",
    description:
      "A practical business system connecting employee experience, customer experience, business value, leadership, management, and coaching.",
    url: "/3p-framework",
    siteName: "3P Solutions",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

const business = [
  {
    title: "People",
    label: "Employee Experience",
    text: "Do people want to be part of the business - engaged, supported, capable, appreciated, and able to do great work?",
  },
  {
    title: "Product",
    label: "Customer Experience",
    text: "Does the customer receive the experience, value, quality, and outcome the business intends to deliver?",
  },
  {
    title: "Profit",
    label: "Business Value",
    text: "Does the business create sustainable economic value for owners, investors, employees, customers, and the communities it serves?",
  },
];

const leadership = [
  {
    title: "Purpose",
    text: "Why are we doing this? What worthwhile outcome are we trying to create?",
  },
  {
    title: "Principles",
    text: "What standards and beliefs guide the decisions we make and how we treat people?",
  },
  {
    title: "Progress",
    text: "Are we actually moving toward the worthy ideal - and can we prove it?",
  },
];

const management = [
  {
    title: "Planning",
    text: "Define the goals, priorities, ownership, capacity, resources, and path forward.",
  },
  {
    title: "Processes",
    text: "Processes include the workflows, technology, tools, and incentives people rely on to execute the plan consistently.",
  },
  {
    title: "Performance Measurement",
    text: "Measure the right things the right way, learn from the results, and improve.",
  },
];

const coaching = [
  {
    title: "Preparing",
    text: "Know the person, the performance, the point of focus, the behaviour, and what's in it for them.",
  },
  {
    title: "Presenting",
    text: "Make the conversation clear, personal, specific, respectful, and behaviour-focused.",
  },
  {
    title: "Praise",
    text: "Catch people doing it right. Recognize the behaviour, effort, and persistence you want repeated.",
  },
];

const principles = [
  "Employee experience and customer experience are connected.",
  "Business results improve when the system works for people, customers, and owners at the same time.",
  "Plans are useless without execution.",
  "Processes should be simple enough to follow and strong enough to scale - with technology that enables the work and incentives that reinforce the right behaviours.",
  "What gets measured gets managed - so measure the right things.",
  "Coach behaviours, not just outcomes.",
  "WIIFT matters: people change faster when they understand what's in it for them.",
  "Evaluated experience beats experience alone.",
];

export default function ThreePFrameworkPage() {
  const frameworkSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "3P Business Success Framework",
    url: "https://www.3psolutions.ca/3p-framework",
    description:
      "The 3P Business Success Framework is Brent Pattison's integrated model for aligning business value, leadership, management, and coaching.",
    about: {
      "@type": "Organization",
      name: "3P Solutions",
      url: "https://www.3psolutions.ca",
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(frameworkSchema) }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950/60" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              The 3P Business Success Framework
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              A complete system for making businesses more valuable.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-300 md:text-2xl">
              Better businesses are not built by fixing one department at a time. They are built by aligning the people, the customer value, the economics, the leadership, the processes, the technology, the incentives, and the conversations that drive behaviour every day.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Business", "People · Product · Profit"],
              ["Leadership", "Purpose · Principles · Progress"],
              ["Management", "Planning · Processes + Tech + Incentives · Performance"],
              ["Coaching", "Preparing · Presenting · Praise"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">{title}</p>
                <p className="mt-3 text-lg font-bold text-white">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What is 3P?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Start with who the business has to work for.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The original 3Ps are deliberately simple: People, Product, Profit. A healthy business has to create value across all three at the same time.
            </p>
          </div>

          <div className="grid gap-5">
            {business.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 md:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-3xl font-black text-cyan-700">{item.title}</h3>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="praise-book" className="bg-cyan-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">The full system</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              The business outcome is only the beginning.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              People, Product, and Profit define the value we are trying to create. Leadership gives the business direction. Management turns that direction into an operating system - planning the work, designing the processes, enabling them with technology, aligning incentives, and measuring performance. Coaching turns the system into daily behaviour.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-cyan-100">
              <Compass className="h-9 w-9 text-cyan-700" />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-cyan-700">3P Leadership</p>
              <h3 className="mt-2 text-3xl font-black">Purpose. Principles. Progress.</h3>
              <div className="mt-6 space-y-5">
                {leadership.map((item) => (
                  <div key={item.title}>
                    <p className="font-black text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl">
              <Gauge className="h-9 w-9 text-cyan-300" />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-cyan-300">3P Management</p>
              <h3 className="mt-2 text-3xl font-black">Planning. Processes. Performance.</h3>
              <p className="mt-3 text-sm font-bold text-cyan-700">Processes include Technology &amp; Incentives.</p>
              <div className="mt-6 space-y-5">
                {management.map((item) => (
                  <div key={item.title}>
                    <p className="font-black text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-cyan-100">
              <MessageCircleMore className="h-9 w-9 text-cyan-700" />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-cyan-700">3P Coaching</p>
              <h3 className="mt-2 text-3xl font-black">Preparing. Presenting. Praise.</h3>
              <div className="mt-6 space-y-5">
                {coaching.map((item) => (
                  <div key={item.title}>
                    <p className="font-black text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">The 3Px3P Matrix</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Test whether the management system actually supports the business.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The 3Px3P Matrix connects Planning, Processes, and Performance Measurement to People, Product, and Profit. In the Processes layer, that includes the technology enabling the work and the incentives shaping behaviour. The matrix turns a simple idea into a practical diagnostic: where is the business aligned, where is it disconnected, and where is value leaking?
            </p>
            <Link href="/blog/3px3p-matrix-business-alignment" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-800">
              Read the 3Px3P article <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-4 bg-slate-950 text-sm font-black text-white">
              <div className="p-4">3Px3P</div>
              <div className="p-4 text-cyan-300">People</div>
              <div className="p-4 text-cyan-300">Product</div>
              <div className="p-4 text-cyan-300">Profit</div>
            </div>
            {[
              ["Planning", "Right people", "Right promise", "Right economics"],
              ["Processes + Tech + Incentives", "Right people + incentives", "Right process + technology", "Right efficiency + economics"],
              ["Performance", "Right behaviours", "Right outcomes", "Right results"],
            ].map((row) => (
              <div key={row[0]} className="grid grid-cols-4 border-t border-slate-200 text-sm">
                {row.map((cell, index) => (
                  <div key={cell} className={index === 0 ? "bg-slate-100 p-4 font-black" : "p-4 leading-6 text-slate-700"}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">3P Coaching</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Preparing. Presenting. Praise.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Strategy only matters if it changes behaviour. 3P Coaching helps leaders turn expectations into better day-to-day performance through clear, personal, behaviour-focused coaching and meaningful recognition.
          </p>
          <a href="#praise-book" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-300 hover:text-cyan-200">
            Explore PRAISE Coaching <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">What 3P believes</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Simple ideas. Practiced relentlessly.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-600" />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-cyan-100">
            <BookOpen className="h-10 w-10 text-cyan-700" />
            <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-cyan-700">The book</p>
            <h2 className="mt-2 text-3xl font-black">PRAISE: The Cornerstone of Coaching to Success</h2>
            <p className="mt-4 leading-7 text-slate-700">
              The book goes deeper into the coaching layer of the 3P system - how leaders influence behaviour, make coaching personal, use WIIFT, and create appreciation through meaningful praise.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://www.amazon.ca/PRAISE-Cornerstone-Coaching-Supervisors-Managers-ebook/dp/B0D4NSM7BP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-black text-white">
                Amazon.ca <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://a.co/d/0fd8oGsX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-black text-slate-950">
                Amazon.com <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-cyan-100">
            <NotebookTabs className="h-10 w-10 text-cyan-700" />
            <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-cyan-700">The course</p>
            <h2 className="mt-2 text-3xl font-black">Learn the system. Apply it to the business.</h2>
            <p className="mt-4 leading-7 text-slate-700">
              The course extends the framework into structured learning for leaders who want to understand the model, evaluate their business through the 3P lens, and put the concepts into practice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Why it exists</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Built from operating businesses, not studying them from the sidelines.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">
              Brent Pattison built the 3P framework from more than 30 years of leading, scaling, fixing, and transforming businesses and customer operations. The recurring lesson was simple: most performance problems are not isolated problems. They are alignment problems.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The framework became a way to simplify those connections - from employee experience and customer experience to business economics, from leadership intent to management execution, and from processes, technology, incentives, and performance systems to the coaching conversations that shape behaviour.
            </p>
            <Link href="/case-studies" className="mt-7 inline-flex items-center gap-2 font-black text-cyan-800">
              See the transformation work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">The point of all of it</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
            Make the business more valuable.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Better for the people who work there. Better for the customers who buy from it. Better for the people who own it.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact-centre-consulting" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-400">
              Explore 3P Consulting <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10">
              Talk to Brent
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
