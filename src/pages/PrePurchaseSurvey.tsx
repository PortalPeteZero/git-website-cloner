import { Link } from "react-router-dom";
import { Phone, Globe, ChevronRight, Droplets, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { useTranslation } from "@/i18n/LanguageContext";

// Survey images
import heroImg from "@/assets/services/survey/hero-pool-survey.jpg";
import thermalMain from "@/assets/services/survey/thermal-imaging-wall.jpg";
import thermalSmall1 from "@/assets/services/survey/thermal-small-1.jpg";
import thermalSmall2 from "@/assets/services/survey/thermal-small-2.jpg";
import pressureMain from "@/assets/services/survey/pressure-test-gauge.jpg";
import pressureSmall from "@/assets/services/survey/pressure-test-small.jpg";
import waterSystemMain from "@/assets/services/survey/water-system-pump.jpg";
import waterSystemSmall1 from "@/assets/services/survey/water-system-small-1.jpg";
import waterSystemSmall2 from "@/assets/services/survey/water-system-small-2.jpg";
import drainMain from "@/assets/services/survey/drain-cctv-camera.jpg";
import drainSmall from "@/assets/services/survey/drain-small.jpg";
import poolMain from "@/assets/services/survey/hero-pool-survey.jpg";
import poolSmall1 from "@/assets/services/survey/pool-survey-small-1.jpg";
import poolSmall2 from "@/assets/services/survey/pool-survey-small-2.jpg";

interface ModuleData {
  id: string;
  navLabel: string;
  moduleNumber: string;
  moduleType: string;
  title: string;
  description: string;
  bullets: string[];
  mainImage?: string;
  mainImageAlt?: string;
  smallImages?: string[];
  isAddOn?: boolean;
  iconSection?: React.ReactNode;
  footnote?: string;
}

const modules: ModuleData[] = [
  {
    id: "thermal",
    navLabel: "Thermal Imaging & Damp",
    moduleNumber: "Module 01",
    moduleType: "Optional",
    title: "Thermal Imaging & Damp Survey",
    description: "We use a professional-grade FLIR thermal imaging camera — not a cheap smartphone attachment — alongside calibrated moisture meters to map every room. The camera detects temperature variations caused by moisture, revealing hidden damp, water ingress, and roofline issues that are completely invisible to the naked eye.",
    bullets: [
      "Full room-by-room thermal scan",
      "Moisture meter readings at every wall",
      "Roofline and ceiling inspection",
      "Detailed report with thermal images and readings",
    ],
    mainImage: thermalMain,
    mainImageAlt: "FLIR thermal imaging showing moisture in a wall",
    smallImages: [thermalSmall1, thermalSmall2],
  },
  {
    id: "pressure",
    navLabel: "Full System Pressure Test",
    moduleNumber: "Module 02",
    moduleType: "Optional",
    title: "Full System Pressure Test",
    description: "A comprehensive pressure test of the mains water system and any pumped systems gives you a definitive, documented answer: is this property leak-free? If a leak is detected, you have the option to commission our advanced leak pinpointing service to identify the exact location before committing to a purchase.",
    bullets: [
      "Mains water system pressure test",
      "Pumped system pressure test",
      "Pass certificate or leak confirmation report",
      "Optional leak pinpointing add-on if required",
    ],
    mainImage: pressureMain,
    mainImageAlt: "Digital pressure gauge connected to water system",
    smallImages: [pressureSmall],
  },
  {
    id: "water-system",
    navLabel: "Water System Inspection",
    moduleNumber: "Module 03",
    moduleType: "Optional",
    title: "Water System Inspection",
    description: "Properties in Lanzarote have unique water infrastructure. Our qualified plumbers conduct a thorough inspection of the aljibe (water storage tank), ball cock condition, pump, and manifold system. We assess the condition and functionality of every key component, identifying anything that may need attention now or in the near future.",
    bullets: [
      "Aljibe (water tank) condition assessment",
      "Ball cock and float valve inspection",
      "Pump and manifold inspection",
      "Qualified plumber report",
    ],
    mainImage: waterSystemMain,
    mainImageAlt: "Water pump and manifold system inspection",
    smallImages: [waterSystemSmall1, waterSystemSmall2],
  },
  {
    id: "drain",
    navLabel: "Drain Inspection",
    moduleNumber: "Module 04",
    moduleType: "Optional",
    title: "Drain Inspection",
    description: "Using advanced CCTV drain cameras, we inspect the main drains of the property from the inside. We capture images of the internal pipework, map drain locations, determine whether the property connects to the main sewer or uses a septic tank, and assess the general condition of the drainage system.",
    bullets: [
      "CCTV camera inspection of main drains",
      "Internal pipework photography",
      "Sewer vs. septic tank determination",
      "Manhole inspection and condition report",
    ],
    mainImage: drainMain,
    mainImageAlt: "CCTV drain camera inspection",
    smallImages: [drainSmall],
  },
  {
    id: "pool",
    navLabel: "Swimming Pool Survey",
    moduleNumber: "Module 05",
    moduleType: "Optional",
    title: "Comprehensive Swimming Pool Survey",
    description: "Our pool survey is the most comprehensive available on the island. We test every single aspect of the pool's structure and systems. We don't just tell you if there's a problem — we pinpoint its exact location using acoustic, CCTV, and tracer gas technology. Every survey includes an insurance-ready report.",
    bullets: [
      "Acoustic testing of all fittings and pool shell",
      "Pump, filter and housing inspection",
      "Full pipework pressure test",
      "Electronic shell testing",
      "CCTV internal pipe inspection",
      "Insurance-ready detailed report",
    ],
    mainImage: poolMain,
    mainImageAlt: "Canary Detect pool survey in progress",
    smallImages: [poolSmall1, poolSmall2],
  },
  {
    id: "electrical",
    navLabel: "+ Electrical Report",
    moduleNumber: "Module 06",
    moduleType: "Optional Add-On",
    title: "Electrical Safety Report",
    description: "Our qualified electricians perform a full inspection of the property's electrical installation — from the fuse board to the outlets — checking safety, compliance, and condition. An essential check for any property purchase.",
    bullets: [
      "Fuse board and consumer unit inspection",
      "Wiring condition and compliance check",
      "Socket and outlet testing",
      "Full report from a qualified electrician",
    ],
    isAddOn: true,
    iconSection: (
      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 mx-auto mb-6">
        <Zap className="w-10 h-10 text-primary" />
      </div>
    ),
    footnote: "Carried out by a fully qualified and experienced electrician. Gives you complete confidence in the safety of the property's electrical systems.",
  },
];

const PrePurchaseSurvey = () => {
  const { isSpanish } = useTranslation();

  const scrollToModule = (id: string) => {
    const el = document.getElementById(`module-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <SEOHead
        title={isSpanish 
          ? "Inspección Pre-Compra Lanzarote | Canary Detect" 
          : "Pre-Purchase Property Survey Lanzarote | Canary Detect"}
        description={isSpanish 
          ? "Inspección independiente de propiedades en Lanzarote. Imagen térmica, pruebas de presión, inspección de piscinas y más. Desde €99."
          : "Independent property survey in Lanzarote. Thermal imaging, pressure testing, pool inspection & more. Surveys from €99."}
        keywords="pre-purchase survey lanzarote, property survey lanzarote, property inspection canary islands, thermal imaging survey, pool survey lanzarote"
        canonical={isSpanish 
          ? "https://canary-detect.com/es/servicios/inspeccion-precompra" 
          : "https://canary-detect.com/services/pre-purchase-survey"}
        type="service"
      />
      <BreadcrumbSchema
        items={[
          { name: isSpanish ? "Inicio" : "Home", url: isSpanish ? "/es" : "/" },
          { name: isSpanish ? "Servicios" : "Services", url: isSpanish ? "/es/servicios" : "/services" },
          { name: isSpanish ? "Inspección Pre-Compra" : "Pre-Purchase Survey", url: isSpanish ? "/es/servicios/inspeccion-precompra" : "/services/pre-purchase-survey" },
        ]}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Canary Detect team conducting a pool survey in Lanzarote"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6">
              New Service · Lanzarote Property Buyers
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              The Canary Detect{" "}
              <span className="text-primary">Pre-Purchase Survey</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium mb-4">
              Your Independent Property Survey
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Buying a property in Lanzarote? Before you sign, get a fully independent expert survey that works for you — not the estate agent. Build the survey you need from our range of specialist modules.
            </p>
            <p className="text-white text-lg mb-8">
              Surveys from <span className="text-primary font-bold text-2xl">€99</span>{" "}
              <span className="text-slate-400">— build the package you need</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+34711051071"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
              >
                Get a Free Quote
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 transition-all"
              >
                See What's Included
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES BAR ===== */}
      <section className="bg-gradient-to-r from-amber-600 via-primary to-amber-600 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white font-semibold text-sm md:text-base">
            {[
              "100% Independent",
              "Professional-Grade Equipment",
              "Detailed Written Reports",
              "Qualified Plumbers & Electricians",
              "Fully Modular — You Choose",
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/80" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                Why It Matters
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                We Work for You.{" "}
                <br className="hidden md:block" />
                Not the Seller.
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Estate agents are in the business of selling properties. The surveys they recommend are often basic and can lack the independence you need to make a truly informed decision. There is an inherent conflict of interest when the person selling you the house is also recommending the surveyor.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Canary Detect has no relationship with any estate agent or seller. Our only job is to give you an accurate, honest picture of the property's condition — the good and the bad — so you can negotiate with confidence, plan for repairs, or walk away from a bad investment.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-slate-300 text-lg">
                "Before you sign anything, make sure the survey is truly on your side."
              </blockquote>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1,200+", label: "Leaks Found" },
                  { value: "99%", label: "Success Rate" },
                  { value: "€80K+", label: "Equipment" },
                  { value: "40+", label: "Years Experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="text-primary font-heading font-bold text-3xl md:text-4xl mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="text-slate-400 text-sm mb-1">Surveys from</div>
                <div className="text-primary font-heading font-bold text-5xl md:text-6xl">€99</div>
                <div className="text-slate-500 text-xs mt-2">
                  Price depends on modules selected. Contact us for a tailored quote.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILD YOUR OWN SURVEY - ALL MODULES STACKED ===== */}
      <section id="modules" className="bg-slate-900 py-16 md:py-24 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Build Your Own Survey
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Every property is different. Choose only the modules you need. Every element is optional — you are in complete control of the scope and cost.
            </p>
          </div>

          {/* Navigation Pills - scroll to section */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => scrollToModule(mod.id)}
                className="px-4 py-2.5 rounded-full text-sm font-semibold bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all"
              >
                {mod.navLabel}
              </button>
            ))}
          </div>
        </div>

        {/* All modules stacked vertically — no card wrappers, alternating bg */}
        <div>
          {modules.map((mod, index) => {
            const isEven = index % 2 === 1;
            const bgColor = isEven ? "bg-[#f9f9f9]" : "bg-white";

            if (mod.isAddOn) {
              return (
                <div
                  key={mod.id}
                  id={`module-${mod.id}`}
                  className={`${bgColor} scroll-mt-24`}
                >
                  <div className="container mx-auto max-w-6xl px-8 md:px-12 py-12 md:py-16 text-center">
                    {mod.iconSection}
                    <span className="text-[#f97316] font-bold text-xs uppercase tracking-widest mb-2 block">
                      {mod.moduleNumber} · {mod.moduleType}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-4">
                      {mod.title}
                    </h3>
                    <p className="text-[#374151] leading-relaxed mb-6 max-w-2xl mx-auto">
                      {mod.description}
                    </p>
                    <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                      {mod.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-[#374151]">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {mod.footnote && (
                      <p className="text-[#6b7280] text-sm italic max-w-md mx-auto">
                        {mod.footnote}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={mod.id}
                id={`module-${mod.id}`}
                className={`${bgColor} scroll-mt-24`}
              >
                <div className="max-w-6xl mx-auto overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0`}>
                    {/* Image — full 50% width, edge-to-edge, no padding */}
                    <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <img
                        src={mod.mainImage}
                        alt={mod.mainImageAlt || mod.title}
                        className="w-full h-full object-cover min-h-[300px] lg:min-h-[500px]"
                        loading="lazy"
                      />
                    </div>
                    {/* Content panel */}
                    <div className={`px-8 md:px-12 py-12 md:py-16 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <span className="text-[#f97316] font-bold text-xs uppercase tracking-widest mb-2">
                        {mod.moduleNumber} · {mod.moduleType}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-4">
                        {mod.title}
                      </h3>
                      <p className="text-[#374151] leading-relaxed mb-6 max-w-lg">
                        {mod.description}
                      </p>
                      <ul className="space-y-3">
                        {mod.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-[#374151]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] shrink-0 mt-1.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== LEAKGUARD UPSELL ===== */}
      <section className="bg-slate-900 py-16 md:py-24 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                Exclusive Customer Offer
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Protect Your New Home{" "}
                <br className="hidden md:block" />
                with LeakGuard
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                Once you've completed your purchase, protect your investment from day one. As a Canary Detect Pre-Purchase Survey customer, you are entitled to a discounted installation of LeakGuard — our smart water monitoring system.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                LeakGuard monitors your property's water system 24 hours a day, 7 days a week. If a leak is detected, it automatically shuts off the water supply, preventing the kind of catastrophic water damage that can cost tens of thousands of euros to repair.
              </p>
              <a
                href="tel:+34711051071"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
              >
                Ask About LeakGuard
              </a>
            </div>

            <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">LeakGuard</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto mb-3">
                Smart 24/7 water monitoring with automatic shutoff. Complete peace of mind for your new property.
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Exclusive Discount for Survey Customers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className="bg-slate-950 py-16 md:py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Survey?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Contact us today for a free, no-obligation quote. Tell us about the property and we'll recommend the right modules for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+34711051071"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            >
              <Phone className="w-5 h-5" />
              Call +34 711 051 071
            </a>
            <a
              href="https://canary-detect.com/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-slate-600 text-white font-bold text-base hover:bg-slate-800 transition-all"
            >
              <Globe className="w-5 h-5" />
              Visit canary-detect.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrePurchaseSurvey;
