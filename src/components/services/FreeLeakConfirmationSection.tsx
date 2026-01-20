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
  title,
  phone,
  email,
  includes,
  importantNote,
  subNote,
}: Props) {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden border border-canary-white/10 bg-gradient-to-br from-canary-navy to-canary-dark">
          <div className="p-6 md:p-10 lg:p-12">
            <header className="max-w-4xl">
              <p className="text-primary font-semibold text-xs md:text-sm uppercase tracking-[0.22em]">
                CANARY DETECT'S NEW SERVICE FOR 2026
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-canary-white mt-3">
                FREE LEAK CONFIRMATION TESTS
              </h2>
              <p className="text-canary-white/90 text-lg md:text-xl mt-4">
                No more guessing. No wasted money. No catch.
              </p>
            </header>

            <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Story */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-canary-white/85 leading-relaxed">
                  Here in Lanzarote, <span className="text-canary-white font-semibold">95% of the leaks we deal with are hidden</span>—no visible signs, no
                  obvious clues. Even massive leaks in villas can go completely unnoticed for weeks. Add in the complexity of
                  local water systems (mains supply through a meter, electric pumps, underground tanks), and it's no wonder
                  homeowners aren't sure if they actually have a leak or not.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <p className="text-primary font-semibold text-xs uppercase tracking-widest">The old problem</p>
                    <p className="text-canary-white/90 mt-3 leading-relaxed">
                      You suspect a leak. You book a survey. We arrive. Turns out there's no leak—just a dripping tap or a meter
                      misread. You've paid for peace of mind, but it feels like wasted money.
                    </p>
                  </div>
                  <div className="rounded-xl bg-primary/10 border border-primary/30 p-5">
                    <p className="text-primary font-semibold text-xs uppercase tracking-widest">The new solution</p>
                    <p className="text-canary-white/90 mt-3 leading-relaxed">
                      Before you book a full survey, we'll come to your property for a free leak confirmation test. We'll assess
                      your system, check the basics, and give you a professional report—at no cost.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <p className="text-primary font-semibold text-xs uppercase tracking-widest">What's in it for us?</p>
                  <p className="text-canary-white/85 mt-3 leading-relaxed">
                    Honestly? Efficiency. We often reserve half-day slots for surveys, only to discover on arrival there's no
                    leak. That's lost time we could've spent helping someone with a real problem. This way, we fill our schedule
                    with genuine leaks, you only pay when there's something to find, and nobody wastes time or money.
                  </p>
                  <p className="text-canary-white font-semibold mt-3">Win-win. No catch. Just smarter service.</p>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-5">
                <div className="rounded-2xl bg-canary-cyan/10 border border-canary-cyan/60 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                      <BadgeCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-xs uppercase tracking-widest">Important</p>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-canary-white">
                        What this includes
                      </h3>
                    </div>
                  </div>

                  <p className="text-canary-white mt-5 leading-relaxed">{importantNote}</p>
                  <p className="text-canary-white/80 mt-4 leading-relaxed">{subNote}</p>

                  <div className="mt-6">
                    <h4 className="font-heading font-bold text-canary-white mb-3">Included</h4>
                    <ul className="space-y-3">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-canary-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-canary-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <Button asChild size="lg" className="w-full shadow-lg">
                      <Link to="/contact">Request your free confirmation</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full bg-white/10 border-white/25 text-white hover:bg-white/15 hover:text-white"
                    >
                      <a href={`tel:${phone}`}>Call {phone}</a>
                    </Button>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 text-canary-white/90 hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>{email}</span>
                    </a>
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-canary-white/90 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>{phone}</span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-canary-white/75 text-sm">
              <span className="text-canary-white/90">Note:</span> This is a confirmation visit and report — not a pinpointing survey.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
