import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Brent Pattison | 3P Solutions CX & Contact Centre Consulting",
  description: "The story behind 3P Solutions. Brent Pattison on what 30+ years in contact centres taught him about customer friction, business value, leadership and making CX better.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Brent Pattison | The 3P Solutions Story",
    description: "From a billing dispute on his first day in collections to leading customer support operations across six countries. Why Brent believes the contact centre can make the whole business better.",
    url: "/about/",
    type: "profile",
  },
};

type Chapter = {
  number: string;
  label: string;
  title: string[];
  paragraphs: string[];
  quote?: string;
  dark?: boolean;
  link?: { label: string; href: string };
};

const chapters: Chapter[] = [
  {
    number: "01", label: "THE FIRST LESSON", title: ["It started with", "an unpaid bill."],
    paragraphs: [
      "I learned something important about customer experience on my very first day working as a third-party debt collector.",
      "A customer had a legitimate billing dispute. They weren't refusing to pay because they couldn't afford the bill. They were refusing because something had gone wrong in their relationship with the business.",
      "By the time I got involved, the problem had already happened. Somewhere upstream, a promise had been broken, a process had failed, or the customer hadn't received what they expected. Collections was simply where the consequences showed up.",
      "I saw variations of that problem again and again. Marketing promising something sales didn't understand. Sales promising something operations couldn't deliver. A delivery problem, a billing error, a confusing policy. Eventually, the customer picks up the phone or sends a message.",
      "And the contact centre gets measured on what happens next."
    ]
  },
  {
    number: "02", label: "WHAT THE CUSTOMER IS TELLING YOU", title: ["The problem started", "before the call."], dark: true,
    paragraphs: [
      "Over more than 30 years in CX and business process outsourcing, that first lesson has only become clearer.",
      "I've listened to countless calls, read customer survey comments, reviewed performance scorecards and analyzed conversations across contact channels. Poor satisfaction scores don't always mean an employee provided poor service. Often, they reveal a problem somewhere else in the business.",
      "Your customers are telling you where the friction is. Over the phone, in email, SMS, chat, social media and even automated interactions. They're also telling you where your people are struggling: unclear policies, broken handoffs, missing information and systems that make it harder to do the right thing.",
      "A contact centre should be one of the most valuable sources of intelligence a business has. But only if somebody is prepared to listen, follow the evidence and act on what they learn."
    ],
    quote: "Your contact centre isn't the source of all your CX problems. It's where the rest of your company's problems show up."
  },
  {
    number: "03", label: "LEARNING BY LEADING", title: ["From 75 people", "to 4,000."],
    paragraphs: [
      "In 2004, I was given the opportunity to build our first customer support program for Sprint. My mandate was to build a contact centre with 75 people and do a good job.",
      "We set a simple purpose: be number one. Outperform the competition, earn the opportunity to grow, and create more opportunities for our people.",
      "And it grew. In less than ten years, we became Sprint's largest provider of customer support, with approximately 4,000 employees across six countries.",
      "As the operation expanded, my job changed. I delegated decisions to supervisors, managers, directors and vice presidents. I spent more and more time travelling between sites, helping leaders understand the business, make better decisions and develop their people.",
      "Running an operation at that scale teaches you about cost, capacity, quality, sales, technology, customer retention and the realities of delivering against a contract. It also teaches you that none of those things works very well when people aren't aligned around the same purpose."
    ]
  },
  {
    number: "04", label: "THE EVERYDAY STANDARD", title: ["Serve. Solve.", "Satisfy."], dark: true,
    paragraphs: [
      "I kept reminding everyone of the purpose of their job: make sure customers leave the interaction happy, valued and satisfied. And I boiled the way to do that down to three words.",
      "Serve. Open with a smile and a genuine willingness to help. You're there for the customer.",
      "Solve. Own the issue. Get to the root cause. If you don't have the answer, find someone who does. If your supervisor can't solve it, escalate it. If your manager can't solve it, keep going. The customer shouldn't have to navigate your organization to find a solution.",
      "Satisfy. Don't end the interaction simply because you've processed the request. Make sure the person feels valued. Ask whether there's another need you can address, another problem you can solve or an opportunity to create more value in the relationship.",
      "I repeated those words constantly. In meetings with managers, supervisors and frontline employees. In our coaching conversations, call flows and documented procedures. Not because the idea was complicated, but because consistent execution takes continuous reinforcement."
    ],
    quote: "Serve. Solve. Satisfy. On every single interaction."
  },
  {
    number: "05", label: "THE ECONOMICS OF CX", title: ["Not just a cost.", "A source of value."],
    paragraphs: [
      "For decades, businesses have treated their contact centres primarily as expense centres. How do we reduce call volumes? Lower average handling time? Automate more interactions? Spend less?",
      "I've managed those measures. They matter. But if reducing contacts becomes the objective, we can miss the larger opportunity.",
      "Every conversation is a chance to learn something about a customer, fix a relationship, prevent someone from leaving, uncover a need or help them get more value from what they already buy. We shouldn't waste that opportunity.",
      "The goal isn't call deflection for its own sake. It's making each interaction worth more to the customer and the business, while removing the avoidable friction that caused unnecessary contacts in the first place.",
      "Sometimes the best answer is automation. Sometimes it's a better process, a clearer promise, more knowledgeable employees or a conversation with a real person. The right answer depends on the business and what its customers actually need.",
      "And now that AI can automate so much more, the fundamentals matter even more. If your processes are broken and your knowledge is unreliable, automation can scale your problems faster."
    ],
    quote: "The opportunity isn't simply to handle fewer contacts. It's to create more value from every customer relationship."
  },
  {
    number: "06", label: "ACCOUNTABILITY IN THE REAL WORLD", title: ["Conviction meets", "the scorecard."], dark: true,
    paragraphs: [
      "I haven't always agreed with every client or every boss. I've challenged decisions, pushed for a different way of doing things and occasionally annoyed people along the way.",
      "I didn't win every argument. And at the end of the day, our agreements, our commitments and our scorecards were real. The client was our customer, too.",
      "When somebody else had the authority to make a decision, I respected it. Then I worked with my teams to meet, and whenever possible exceed, what we'd committed to deliver.",
      "That never meant giving up on serving the end customer. It meant finding the best way to serve, solve and satisfy within the commercial and operational realities of the business.",
      "That's an important part of what I bring to consulting today. I understand both sides of a BPO relationship because I've lived the accountability, the constraints and the trade-offs."
    ]
  },
  {
    number: "07", label: "WHY 3P EXISTS", title: ["People. Product.", "Profit."],
    paragraphs: [
      "When I left iQor, I considered buying a business. I studied acquisitions, business valuations and what makes a company valuable enough that someone else would want to own it.",
      "I realized the thing I knew best was how to build and run a business, develop leaders and create better outcomes for customers. I'd spent years treating the operations I led as businesses in their own right: responsible for the people, the performance, the financial results and the ability to keep succeeding without depending on me.",
      "Those ideas came together in the 3P framework: People, Product and Profit. Help people grow and improve. Deliver products, services and experiences customers value. Create the profit that sustains the business and allows it to grow.",
      "I started 3P Solutions to apply what I've learned to other organizations. Today, the consulting business is deliberately focused on CX and contact centre operations, where my experience is deepest and where the opportunity to uncover wider business value is so often overlooked.",
      "My ambition is to build a consulting firm with a practical, repeatable methodology that other talented CX practitioners can learn, use and improve. That's how we can help more businesses than I could ever help on my own."
    ],
    link: { label: "Explore the 3P framework", href: "/3p-framework" }
  },
  {
    number: "08", label: "WHAT WORKING TOGETHER MEANS", title: ["I care about", "your business."], dark: true,
    paragraphs: [
      "When I take on an engagement, I want to learn the business. I want to understand its customers, what makes those customers happy, what gets in their way, what the employees experience and how the company makes money.",
      "I won't assume the problem is in the contact centre just because that's where the complaint arrived. And I won't recommend a technology platform simply because it's the newest thing on the market.",
      "I'll ask questions. I'll challenge assumptions. I'll look at the data and listen to the conversations. I'll work to understand the people, the product and the profit before deciding where the greatest opportunities lie.",
      "And once I understand the business, I get invested. I can't help myself. I genuinely want it to succeed.",
      "I believe better businesses create better opportunities for employees, customers, owners, families and communities. Helping businesses become more valuable is how I've chosen to contribute to that.",
      "That's why I do this work."
    ],
    quote: "I don't just want your contact centre to perform better. I want your business to be more successful."
  }
];

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section id={`chapter-${chapter.number}`} className={`scroll-mt-28 py-16 md:py-24 ${chapter.dark ? "bg-slate-950 text-white" : "bg-white text-slate-950"}`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.82fr_1.18fr] md:gap-16 lg:px-8">
        <div>
          <p className={`text-xs font-black tracking-[0.24em] ${chapter.dark ? "text-cyan-300" : "text-cyan-700"}`}>{chapter.number} / {chapter.label}</p>
          <h2 className="mt-5 text-4xl font-black leading-[1.06] tracking-tight md:text-5xl lg:text-6xl">
            {chapter.title[0]}<br />{chapter.title[1]}
          </h2>
        </div>
        <div className={`space-y-5 text-lg leading-[1.85] ${chapter.dark ? "text-slate-200" : "text-slate-700"}`}>
          {chapter.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          {chapter.quote && <blockquote className={`my-8 border-l-4 pl-6 text-2xl font-bold leading-snug tracking-tight md:text-3xl ${chapter.dark ? "border-cyan-400 text-white" : "border-cyan-600 text-slate-950"}`}>{chapter.quote}</blockquote>}
          {chapter.link && <a className="inline-flex items-center gap-2 font-black text-cyan-700 hover:text-cyan-900" href={chapter.link.href}>{chapter.link.label}<ArrowRight className="h-4 w-4" /></a>}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-slate-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">About / Brent Pattison</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">The contact centre tells you more about your business than you think.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-700">I've spent more than 30 years listening to customers, leading people and building contact centre operations. Here's why I believe the contact centre can help make the entire business better.</p>
            <a href="#chapter-01" className="mt-8 inline-flex items-center gap-2 font-black text-cyan-800 hover:text-cyan-950">Here's where that started <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl">
            <img src="https://keepbusinesssimple.com/kbs-photo-560-70.webp" alt="Brent Pattison, founder of 3P Solutions" width="560" height="560" className="aspect-square w-full object-cover" />
            <figcaption className="flex flex-col gap-1 px-6 py-5 text-white"><strong className="text-xl">Brent Pattison</strong><span className="text-sm text-slate-300">Founder, 3P Solutions</span></figcaption>
          </figure>
        </div>
      </section>
      <div className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-3 px-5 py-9 text-center lg:px-8">
          <div><p className="text-3xl font-black text-cyan-700 md:text-5xl">75</p><p className="mt-1 text-sm text-slate-600">People at the start</p></div>
          <div><p className="text-3xl font-black text-cyan-700 md:text-5xl">~4,000</p><p className="mt-1 text-sm text-slate-600">Employees at scale</p></div>
          <div><p className="text-3xl font-black text-cyan-700 md:text-5xl">6</p><p className="mt-1 text-sm text-slate-600">Countries</p></div>
        </div>
      </div>
      {chapters.map((chapter) => <ChapterSection key={chapter.number} chapter={chapter} />)}
      <section className="bg-cyan-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-800">Let's put it to work</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Better CX. <span className="text-cyan-700">A more valuable business.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">If your customers are telling you something isn't working, let's find out what it is, what it's costing you and what you can do about it.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://calendly.com/brent3p/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-black text-white hover:bg-slate-800">Let's talk <ArrowRight className="h-5 w-5" /></a>
            <a href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-black text-slate-950 hover:border-cyan-500">See the work <ArrowRight className="h-5 w-5" /></a>
          </div>
          <p className="mt-12 text-sm text-slate-600">Interested in the wider philosophy behind 3P? <a href="https://keepbusinesssimple.com/about/" className="font-bold text-cyan-800 underline underline-offset-4">Read the Keep Business Simple story.</a></p>
        </div>
      </section>
      <footer className="bg-slate-950 px-5 py-9 text-sm text-slate-300 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-black text-white">3P Solutions</p><p className="mt-1">Making Businesses More Valuable</p></div><a href="mailto:brent@3psolutions.ca" className="hover:text-cyan-300">brent@3psolutions.ca</a></div></footer>
    </main>
  );
}
