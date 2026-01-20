import { Link } from "react-router-dom";
import { BadgeCheck, CheckCircle2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  phone: string;
  email: string;
  includes: string[];
  importantNote: string;
  subNote: string;
};

export default function FreeLeakConfirmationSection({
  phone,
  email,
  includes,
  importantNote,
  subNote,
}: Props) {
  return (
    <section className="w-full bg-gradient-to-br from-canary-navy via-canary-dark to-canary-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header - Full width, big typography */}
        <header className="text-center mb-10 md:mb-14">
          <p className="text-primary font-bold text-sm md:text-base uppercase tracking-[0.25em] mb-3">
            CANARY DETECT'S NEW SERVICE FOR 2026
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-canary-white leading-tight">
            FREE LEAK CONFIRMATION TESTS
          </h2>
          <p className="text-canary-white/90 text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 font-light">
            No more guessing. No wasted money. No catch.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left Content - 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-canary-white/90 text-base md:text-lg leading-relaxed">
              Here in Lanzarote, <span className="text-primary font-semibold">95% of the leaks we deal with are hidden</span>—no visible signs, no
              obvious clues. Even massive leaks in villas can go completely unnoticed for weeks. Add in the complexity of
              local water systems (mains supply through a meter, electric pumps, underground tanks), and it's no wonder
              homeowners aren't sure if they actually have a leak or not.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 md:p-6">
                <p className="text-orange-400 font-bold text-xs uppercase tracking-widest">The old problem</p>
                <p className="text-canary-white/90 mt-3 text-sm md:text-base leading-relaxed">
                  You suspect a leak. You book a survey. We arrive. Turns out there's no leak—just a dripping tap or a meter
                  misread. You've paid for peace of mind, but it feels like wasted money.
                </p>
              </div>
              <div className="rounded-xl bg-primary/15 border border-primary/40 p-5 md:p-6">
                <p className="text-primary font-bold text-xs uppercase tracking-widest">The new solution</p>
                <p className="text-canary-white/90 mt-3 text-sm md:text-base leading-relaxed">
                  Before you book a full survey, we'll come to your property for a free leak confirmation test. We'll assess
                  your system, check the basics, and give you a professional report—at no cost.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-5 md:p-6">
              <p className="text-canary-cyan font-bold text-xs uppercase tracking-widest">What's in it for us?</p>
              <p className="text-canary-white/85 mt-3 text-sm md:text-base leading-relaxed">
                Honestly? Efficiency. We often reserve half-day slots for surveys, only to discover on arrival there's no
                leak. That's lost time we could've spent helping someone with a real problem. This way, we fill our schedule
                with genuine leaks, you only pay when there's something to find, and nobody wastes time or money.
              </p>
              <p className="text-canary-white font-bold mt-3 text-base md:text-lg">Win-win. No catch. Just smarter service.</p>
            </div>
          </div>

          {/* Right Sidebar - 2 cols */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-canary-cyan/10 border-2 border-canary-cyan/50 p-5 md:p-6 lg:p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">Important</p>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-canary-white">
                    What this includes
                  </h3>
                </div>
              </div>

              <p className="text-canary-white text-sm md:text-base leading-relaxed">{importantNote}</p>
              <p className="text-canary-white/75 mt-3 text-sm leading-relaxed">{subNote}</p>

              <div className="mt-5">
                <h4 className="font-heading font-bold text-canary-white text-sm mb-3">Included</h4>
                <ul className="space-y-2">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-canary-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-canary-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Button asChild size="lg" className="w-full shadow-lg text-base">
                  <Link to="/contact">Request your free confirmation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                >
                  <a href={`tel:${phone}`}>Call {phone}</a>
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-canary-white/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{email}</span>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-canary-white/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>{phone}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-canary-white/60 text-sm">
          <span className="text-canary-white/80 font-medium">Note:</span> This is a confirmation visit and report — not a pinpointing survey.
        </p>
      </div>
    </section>
  );
}
