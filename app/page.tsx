"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, FileText, Flag, Gauge, GraduationCap, HeartHandshake, Menu, Repeat2, SearchCheck, ShieldCheck, Sparkles, Target, Users, X } from "lucide-react";

const painPoints = [
  "Managers coach the same issues over and over, but leadership only sees the final numbers.",
  "Follow-up is inconsistent, so behaviour change is assumed instead of verified.",
  "Training gaps, unclear standards, and broken processes stay hidden inside one-off coaching conversations.",
  "KMS and LMS content gets updated too late, if it gets updated at all."
];

const workflow = [
  { title: "Observe", text: "Capture the specific behaviour, not vague impressions or lagging results." },
  { title: "Coach", text: "Document the Continue, Stop, or Start action that was discussed." },
  { title: "Follow up", text: "Set a clear date to check whether the behaviour actually changed." },
  { title: "Verify", text: "Confirm the outcome and identify whether the issue repeated." },
  { title: "Recognize", text: "Close the loop with specific praise when improvement is seen." }
];

const signals = [
  "Repeated coaching theme",
  "Behaviour change verified or not verified",
  "Training or knowledge gap",
  "Unclear standard or process issue",
  "Manager follow-up completion",
  "Location, team, or role pattern"
];

const dashboards = [
  { icon: Gauge, title: "Coaching completion", text: "See whether managers are closing the loop, not just starting conversations." },
  { icon: SearchCheck, title: "Verified change", text: "Track whether behaviour changed after coaching and where it did not stick." },
  { icon: Repeat2, title: "Repeat themes", text: "Find the same coaching issues across teams, locations, programs, and roles." },
  { icon: FileText, title: "KMS and LMS signals", text: "Identify the standards, SOPs, or training content that need attention next." }
];

const pilot = [
  "Simple manager coaching documentation workflow",
  "Employee, team, location, and issue tagging",
  "Follow-up reminders and completion tracking",
  "Behaviour change verification",
  "Repeat coaching theme reporting",
  "Knowledge, training, process, and accountability gap flags"
];

const products = [
  { title: "3P Solutions", text: "Finds alignment, process, performance, and knowledge gaps through consulting and operational analysis." },
  { title: "AlignRise", text: "Helps teams implement an aligned business operating system when the issue is broader than coaching alone." },
  { title: "CompleteLoop", text: "Turns ongoing coaching documentation into the operational signal that keeps gaps visible after the assessment ends." }
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-cyan-900/20">
        <Repeat2 className="h-6 w-6" />
      </div>
      <div>
        <p className="text-lg font-black tracking-tight text-slate-950">CompleteLoop</p>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Coaching Signal Platform</p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">{children}</p>;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const close = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" aria-label="CompleteLoop home"><LogoMark /></a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 md:flex" aria-label="Main navigation">
            <a href="#problem" className="hover:text-cyan-700">Problem</a>
            <a href="#product" className="hover:text-cyan-700">Product</a>
            <a href="#signal" className="hover:text-cyan-700">Signal</a>
            <a href="#pilot" className="hover:text-cyan-700">Pilot</a>
            <a href="#about" className="hover:text-cyan-700">3P Backing</a>
          </nav>
          <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-cyan-700 sm:inline-flex">
            Book a pilot call <ArrowRight className="h-4 w-4" />
          </a>
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden" aria-label="Mobile navigation">
            <div className="grid gap-2 text-base font-bold text-slate-800">
              {["problem", "product", "signal", "pilot", "about"].map((item) => (
                <a key={item} href={`#${item}`} onClick={close} className="rounded-2xl px-4 py-3 capitalize hover:bg-cyan-50 hover:text-cyan-700">{item}</a>
              ))}
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" onClick={close} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-white">
                Book a pilot call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-800">
              <ClipboardCheck className="h-4 w-4" /> Coaching Documentation as Operational Signal
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              Turn frontline coaching into the signal that shows why problems keep repeating.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              CompleteLoop helps managers document coaching, verify behaviour change, and reveal the training, process, knowledge, and accountability gaps behind recurring execution issues.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-black text-white shadow-lg transition hover:bg-slate-800">
                Book a pilot call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#product" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-black text-slate-900 transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-800">
                See how the loop works
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Manager coaching record</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Observed behaviour</p>
                  <p className="mt-2 font-semibold">Agent skipped the identity verification step on 3 of 5 reviewed calls.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {["Coach", "Follow up", "Verify"].map((step) => <div key={step} className="rounded-2xl bg-cyan-400/15 p-4 text-center font-black text-cyan-100">{step}</div>)}
                </div>
                <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Signal created</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">Repeat issue across 2 teams. Possible training refresh and SOP clarity gap.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>The real gap</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Your managers are coaching. The organization is not learning.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Coaching conversations happen every day, but most of the evidence disappears. Leaders see quality scores, complaints, turnover, and missed KPIs. They rarely see the coaching patterns that explain them.
            </p>
          </div>
          <div className="grid gap-4">
            {painPoints.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <Flag className="mt-1 h-5 w-5 flex-none text-cyan-700" />
                <p className="text-base font-semibold leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The MVP</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">A simple coaching workflow that makes behaviour change visible.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">CompleteLoop is built for the manager first. Document the coaching in minutes, follow up on time, verify what changed, and close the loop with recognition.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {workflow.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-sm font-black text-white">{index + 1}</div>
                <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="signal" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>The signal layer</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Every completed coaching loop creates operational evidence.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              CompleteLoop does not start by replacing your KMS, LMS, HRIS, or dashboards. It gives those systems a better input: verified coaching outcomes from the people closest to the work.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {signals.map((signal) => (
                <div key={signal} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 className="h-5 w-5 flex-none text-cyan-700" />
                  <span className="font-bold text-slate-800">{signal}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {dashboards.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-cyan-700" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pilot" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">Pilot offer</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Start with one team, one location, or one recurring issue.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The first pilot should prove one thing: coaching documentation can show where repeat execution problems are really coming from.
            </p>
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300">
              Discuss a pilot <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pilot.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-white/10 bg-white/10 p-5">
                <ShieldCheck className="mt-1 h-5 w-5 flex-none text-cyan-300" />
                <p className="font-semibold leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Where it fits</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">CompleteLoop is the coaching signal layer, backed by 3P operating discipline.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              3P Solutions can diagnose alignment and knowledge gaps. AlignRise can help implement a stronger business operating system. CompleteLoop keeps the learning loop alive by turning ongoing coaching into evidence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] bg-cyan-50 p-8 ring-1 ring-cyan-100 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">Core belief</p>
                <h3 className="mt-3 text-2xl font-black md:text-3xl">If coaching happens but knowledge does not improve, the loop is not complete.</h3>
              </div>
              <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-black text-white transition hover:bg-slate-800">
                Book a call <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <LogoMark />
          <p className="text-sm text-slate-300">CompleteLoop is being built as the coaching documentation signal layer for better training, knowledge, process, and performance alignment.</p>
        </div>
      </footer>
    </main>
  );
}
