import { Link } from "react-router-dom";
import { Phone, Globe, ChevronRight, Droplets, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
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

const getModules = (isSpanish: boolean): ModuleData[] => [
  {
    id: "pressure",
    navLabel: isSpanish ? "Prueba de Presión" : "Full System Pressure Test",
    moduleNumber: isSpanish ? "Módulo 01" : "Module 01",
    moduleType: isSpanish ? "Opcional" : "Optional",
    title: isSpanish ? "Prueba de Presión del Sistema Completo" : "Full System Pressure Test",
    description: isSpanish
      ? "Una prueba de presión integral del sistema de agua potable y de cualquier sistema con bomba le da una respuesta definitiva y documentada: ¿tiene esta propiedad fugas? Si se detecta una fuga, tiene la opción de contratar nuestro servicio avanzado de localización exacta antes de comprometerse con la compra."
      : "A comprehensive pressure test of the mains water system and any pumped systems gives you a definitive, documented answer: is this property leak-free? If a leak is detected, you have the option to commission our advanced leak pinpointing service to identify the exact location before committing to a purchase.",
    bullets: isSpanish
      ? [
          "Prueba de presión del sistema de agua potable",
          "Prueba de presión del sistema con bomba",
          "Certificado de aprobación o informe de fuga",
          "Opción de localización exacta si es necesario",
        ]
      : [
          "Mains water system pressure test",
          "Pumped system pressure test",
          "Pass certificate or leak confirmation report",
          "Optional leak pinpointing add-on if required",
        ],
    mainImage: pressureMain,
    mainImageAlt: isSpanish ? "Manómetro digital conectado al sistema de agua" : "Digital pressure gauge connected to water system",
    smallImages: [pressureSmall],
  },
  {
    id: "water-system",
    navLabel: isSpanish ? "Inspección del Sistema de Agua" : "Water System Inspection",
    moduleNumber: isSpanish ? "Módulo 02" : "Module 02",
    moduleType: isSpanish ? "Opcional" : "Optional",
    title: isSpanish ? "Inspección del Sistema de Agua" : "Water System Inspection",
    description: isSpanish
      ? "Las propiedades en Lanzarote tienen una infraestructura hídrica única. Nuestros fontaneros cualificados realizan una inspección exhaustiva del aljibe, la boya, la bomba y el colector. Evaluamos el estado y la funcionalidad de cada componente clave, identificando lo que pueda necesitar atención ahora o en el futuro."
      : "Properties in Lanzarote have unique water infrastructure. Our qualified plumbers conduct a thorough inspection of the aljibe (water storage tank), ball cock condition, pump, and manifold system. We assess the condition and functionality of every key component, identifying anything that may need attention now or in the near future.",
    bullets: isSpanish
      ? [
          "Evaluación del estado del aljibe",
          "Inspección de boya y válvula de flotador",
          "Inspección de bomba y colector",
          "Informe de fontanero cualificado",
        ]
      : [
          "Aljibe (water tank) condition assessment",
          "Ball cock and float valve inspection",
          "Pump and manifold inspection",
          "Qualified plumber report",
        ],
    mainImage: waterSystemMain,
    mainImageAlt: isSpanish ? "Inspección de bomba y colector del sistema de agua" : "Water pump and manifold system inspection",
    smallImages: [waterSystemSmall1, waterSystemSmall2],
  },
  {
    id: "thermal",
    navLabel: isSpanish ? "Imagen Térmica y Humedad" : "Thermal Imaging & Damp",
    moduleNumber: isSpanish ? "Módulo 03" : "Module 03",
    moduleType: isSpanish ? "Opcional" : "Optional",
    title: isSpanish ? "Imagen Térmica e Inspección de Humedad" : "Thermal Imaging & Damp Survey",
    description: isSpanish
      ? "Utilizamos una cámara térmica FLIR de grado profesional — no un accesorio barato de smartphone — junto con medidores de humedad calibrados para mapear cada habitación. La cámara detecta variaciones de temperatura causadas por la humedad, revelando humedades ocultas, filtraciones y problemas en la cubierta que son completamente invisibles a simple vista."
      : "We use a professional-grade FLIR thermal imaging camera — not a cheap smartphone attachment — alongside calibrated moisture meters to map every room. The camera detects temperature variations caused by moisture, revealing hidden damp, water ingress, and roofline issues that are completely invisible to the naked eye.",
    bullets: isSpanish
      ? [
          "Escaneo térmico completo habitación por habitación",
          "Lecturas de humedad en cada pared",
          "Inspección de cubierta y techos",
          "Informe detallado con imágenes térmicas y mediciones",
        ]
      : [
          "Full room-by-room thermal scan",
          "Moisture meter readings at every wall",
          "Roofline and ceiling inspection",
          "Detailed report with thermal images and readings",
        ],
    mainImage: thermalMain,
    mainImageAlt: isSpanish ? "Imagen térmica FLIR mostrando humedad en una pared" : "FLIR thermal imaging showing moisture in a wall",
    smallImages: [thermalSmall1, thermalSmall2],
  },
  {
    id: "drain",
    navLabel: isSpanish ? "Inspección de Desagües" : "Drain Inspection",
    moduleNumber: isSpanish ? "Módulo 04" : "Module 04",
    moduleType: isSpanish ? "Opcional" : "Optional",
    title: isSpanish ? "Inspección de Desagües" : "Drain Inspection",
    description: isSpanish
      ? "Utilizando cámaras CCTV avanzadas, inspeccionamos los desagües principales de la propiedad desde el interior. Capturamos imágenes de las tuberías internas, mapeamos las ubicaciones de los desagües, determinamos si la propiedad conecta al alcantarillado o utiliza fosa séptica, y evaluamos el estado general del sistema de drenaje."
      : "Using advanced CCTV drain cameras, we inspect the main drains of the property from the inside. We capture images of the internal pipework, map drain locations, determine whether the property connects to the main sewer or uses a septic tank, and assess the general condition of the drainage system.",
    bullets: isSpanish
      ? [
          "Inspección CCTV de desagües principales",
          "Fotografía interna de tuberías",
          "Determinación de alcantarillado vs. fosa séptica",
          "Inspección de arquetas e informe de estado",
        ]
      : [
          "CCTV camera inspection of main drains",
          "Internal pipework photography",
          "Sewer vs. septic tank determination",
          "Manhole inspection and condition report",
        ],
    mainImage: drainMain,
    mainImageAlt: isSpanish ? "Inspección CCTV de desagüe" : "CCTV drain camera inspection",
    smallImages: [drainSmall],
  },
  {
    id: "pool",
    navLabel: isSpanish ? "Inspección de Piscina" : "Swimming Pool Survey",
    moduleNumber: isSpanish ? "Módulo 05" : "Module 05",
    moduleType: isSpanish ? "Opcional" : "Optional",
    title: isSpanish ? "Inspección Completa de Piscina" : "Comprehensive Swimming Pool Survey",
    description: isSpanish
      ? "Nuestra inspección de piscina es la más completa disponible en la isla. Probamos cada aspecto de la estructura y los sistemas de la piscina. No solo le decimos si hay un problema — localizamos su ubicación exacta usando tecnología acústica, CCTV y gas trazador. Cada inspección incluye un informe válido para seguros."
      : "Our pool survey is the most comprehensive available on the island. We test every single aspect of the pool's structure and systems. We don't just tell you if there's a problem — we pinpoint its exact location using acoustic, CCTV, and tracer gas technology. Every survey includes an insurance-ready report.",
    bullets: isSpanish
      ? [
          "Prueba acústica de accesorios y vaso de la piscina",
          "Inspección de bomba, filtro y caseta",
          "Prueba de presión completa de tuberías",
          "Prueba electrónica del vaso",
          "Inspección CCTV interna de tuberías",
          "Informe detallado válido para seguros",
        ]
      : [
          "Acoustic testing of all fittings and pool shell",
          "Pump, filter and housing inspection",
          "Full pipework pressure test",
          "Electronic shell testing",
          "CCTV internal pipe inspection",
          "Insurance-ready detailed report",
        ],
    mainImage: poolMain,
    mainImageAlt: isSpanish ? "Inspección de piscina por Canary Detect" : "Canary Detect pool survey in progress",
    smallImages: [poolSmall1, poolSmall2],
  },
  {
    id: "electrical",
    navLabel: isSpanish ? "+ Informe Eléctrico" : "+ Electrical Report",
    moduleNumber: isSpanish ? "Módulo 06" : "Module 06",
    moduleType: isSpanish ? "Complemento Opcional" : "Optional Add-On",
    title: isSpanish ? "Informe de Seguridad Eléctrica" : "Electrical Safety Report",
    description: isSpanish
      ? "Nuestros electricistas cualificados realizan una inspección completa de la instalación eléctrica de la propiedad — desde el cuadro eléctrico hasta los enchufes — comprobando seguridad, cumplimiento normativo y estado. Un control esencial para cualquier compra de propiedad."
      : "Our qualified electricians perform a full inspection of the property's electrical installation — from the fuse board to the outlets — checking safety, compliance, and condition. An essential check for any property purchase.",
    bullets: isSpanish
      ? [
          "Inspección del cuadro eléctrico",
          "Comprobación del estado y cumplimiento del cableado",
          "Prueba de enchufes y tomas",
          "Informe completo de electricista cualificado",
        ]
      : [
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
    footnote: isSpanish
      ? "Realizado por un electricista totalmente cualificado y experimentado. Le da total confianza en la seguridad de los sistemas eléctricos de la propiedad."
      : "Carried out by a fully qualified and experienced electrician. Gives you complete confidence in the safety of the property's electrical systems.",
  },
];

const PrePurchaseSurvey = () => {
  const { isSpanish } = useTranslation();
  const modules = getModules(isSpanish);

  const scrollToModule = (id: string) => {
    const el = document.getElementById(`module-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // FAQ data for schema
  const faqItems = isSpanish
    ? [
        { question: "¿Qué incluye la inspección pre-compra?", answer: "Nuestra inspección modular incluye pruebas de presión, inspección del sistema de agua, imagen térmica, inspección de desagües, inspección de piscina e informe eléctrico. Usted elige los módulos que necesita." },
        { question: "¿Cuánto cuesta una inspección pre-compra en Lanzarote?", answer: "Las inspecciones empiezan desde 99€. El precio final depende de los módulos seleccionados. Contacte con nosotros para un presupuesto personalizado." },
        { question: "¿La inspección es verdaderamente independiente?", answer: "Sí. Canary Detect no tiene relación con ningún agente inmobiliario ni vendedor. Trabajamos exclusivamente para usted, el comprador." },
      ]
    : [
        { question: "What does the pre-purchase survey include?", answer: "Our modular survey includes pressure testing, water system inspection, thermal imaging, drain inspection, pool survey, and electrical report. You choose the modules you need." },
        { question: "How much does a pre-purchase survey cost in Lanzarote?", answer: "Surveys start from €99. The final price depends on which modules you select. Contact us for a tailored quote." },
        { question: "Is the survey truly independent?", answer: "Yes. Canary Detect has no relationship with any estate agent or seller. We work exclusively for you, the buyer." },
      ];

  return (
    <Layout>
      <SEOHead
        title={isSpanish 
          ? "Inspección Pre-Compra Lanzarote | Canary Detect" 
          : "Pre-Purchase Survey Lanzarote | Canary Detect"}
        description={isSpanish 
          ? "Inspección independiente de propiedades en Lanzarote. Imagen térmica, pruebas de presión, inspección de piscinas y más. Desde €99."
          : "Independent property survey in Lanzarote. Thermal imaging, pressure testing, pool inspection & more. From €99."}
        keywords={isSpanish
          ? "inspección pre-compra lanzarote, inspección propiedad lanzarote, inspección vivienda canarias, imagen térmica, inspección piscina lanzarote"
          : "pre-purchase survey lanzarote, property survey lanzarote, property inspection canary islands, thermal imaging survey, pool survey lanzarote"}
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
      <FAQSchema faqs={faqItems} />
      <FAQSchema faqs={faqItems} />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={isSpanish ? "Equipo de Canary Detect realizando inspección de piscina en Lanzarote" : "Canary Detect team conducting a pool survey in Lanzarote"}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6">
              {isSpanish ? "Compradores de Propiedades en Lanzarote" : "Lanzarote Property Buyers"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              {isSpanish ? "La " : "The Canary Detect "}
              <span className="text-primary">{isSpanish ? "Inspección Pre-Compra" : "Pre-Purchase Survey"}</span>
              {isSpanish ? " de Canary Detect" : ""}
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium mb-4">
              {isSpanish ? "Su Inspección Independiente de Propiedad" : "Your Independent Property Survey"}
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {isSpanish
                ? "¿Comprando una propiedad en Lanzarote? Antes de firmar, obtenga una inspección experta totalmente independiente que trabaja para usted — no para la inmobiliaria. Construya la inspección que necesita con nuestra gama de módulos especializados."
                : "Buying a property in Lanzarote? Before you sign, get a fully independent expert survey that works for you — not the estate agent. Build the survey you need from our range of specialist modules."}
            </p>
            <p className="text-white text-lg mb-8">
              {isSpanish ? "Inspecciones desde " : "Surveys from "}
              <span className="text-primary font-bold text-2xl">€99</span>{" "}
              <span className="text-slate-400">{isSpanish ? "— elija los módulos que necesita" : "— build the package you need"}</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+34711051071"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
              >
                {isSpanish ? "Solicitar Presupuesto Gratis" : "Get a Free Quote"}
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 transition-all"
              >
                {isSpanish ? "Ver Qué Incluye" : "See What's Included"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES BAR ===== */}
      <section className="bg-gradient-to-r from-amber-600 via-primary to-amber-600 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white font-semibold text-sm md:text-base">
            {(isSpanish
              ? [
                  "100% Independiente",
                  "Equipos Profesionales",
                  "Informes Escritos Detallados",
                  "Fontaneros y Electricistas Cualificados",
                  "Totalmente Modular — Usted Elige",
                ]
              : [
                  "100% Independent",
                  "Professional-Grade Equipment",
                  "Detailed Written Reports",
                  "Qualified Plumbers & Electricians",
                  "Fully Modular — You Choose",
                ]
            ).map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/80" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                {isSpanish ? "Por Qué Es Importante" : "Why It Matters"}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-8 leading-tight">
                {isSpanish ? "Trabajamos para Usted." : "We Work for You."}{" "}
                <br className="hidden md:block" />
                {isSpanish ? "No para el Vendedor." : "Not the Seller."}
              </h2>
              <div className="space-y-5 mb-8">
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                  {isSpanish
                    ? "Las inmobiliarias se dedican a vender propiedades. Las inspecciones que recomiendan suelen ser básicas y pueden carecer de la independencia que usted necesita para tomar una decisión verdaderamente informada. Existe un conflicto de intereses inherente cuando quien le vende la casa es también quien recomienda al inspector."
                    : "Estate agents are in the business of selling properties. The surveys they recommend are often basic and can lack the independence you need to make a truly informed decision. There is an inherent conflict of interest when the person selling you the house is also recommending the surveyor."}
                </p>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                  {isSpanish
                    ? "Canary Detect no tiene relación con ninguna inmobiliaria ni vendedor. Nuestro único trabajo es darle una imagen precisa y honesta del estado de la propiedad — lo bueno y lo malo — para que pueda negociar con confianza, planificar reparaciones o alejarse de una mala inversión."
                    : "Canary Detect has no relationship with any estate agent or seller. Our only job is to give you an accurate, honest picture of the property's condition — the good and the bad — so you can negotiate with confidence, plan for repairs, or walk away from a bad investment."}
                </p>
              </div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-3">
                {isSpanish ? "Una nota sobre las inmobiliarias" : "A note on estate agents"}
              </span>
              <div className="border-l-4 border-primary pl-6 py-5 bg-slate-800/30 rounded-r-lg max-w-xl mb-8">
                <p className="text-slate-300 text-base leading-relaxed">
                  {isSpanish
                    ? "Las inmobiliarias de reputación reconocen el valor de una inspección independiente contratada directamente por el comprador. Muchas de las mejores agencias en Lanzarote animan activamente a sus clientes a organizar su propia inspección — y están encantados de recomendar a Canary Detect. Si su agente sugiere obtener una inspección independiente, acéptelo. Es señal de que está tratando con alguien que tiene sus mejores intereses en mente."
                    : "Reputable estate agents recognise the value of an independent survey commissioned directly by the buyer. Many of the best agents in Lanzarote actively encourage their clients to arrange their own survey — and are happy to recommend Canary Detect. If your agent suggests getting an independent survey, take them up on it. It is a sign you are dealing with someone who has your best interests at heart."}
                </p>
              </div>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-slate-300 text-lg">
                {isSpanish
                  ? "\"Antes de firmar nada, asegúrese de que la inspección está realmente de su lado.\""
                  : "\"Before you sign anything, make sure the survey is truly on your side.\""}
              </blockquote>
            </div>

            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1,200+", label: isSpanish ? "Fugas Encontradas" : "Leaks Found" },
                  { value: "99%", label: isSpanish ? "Tasa de Éxito" : "Success Rate" },
                  { value: "€80K+", label: isSpanish ? "En Equipos" : "Equipment" },
                  { value: "40+", label: isSpanish ? "Años de Experiencia" : "Years Experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/40 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-primary font-heading font-bold text-3xl md:text-4xl mb-1.5 drop-shadow-[0_0_12px_rgba(249,115,22,0.15)]">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm font-medium tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/40 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300">
                <div className="text-slate-400 text-sm mb-2 tracking-wide">{isSpanish ? "Inspecciones desde" : "Surveys from"}</div>
                <div className="text-primary font-heading font-bold text-5xl md:text-6xl drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">€99</div>
                <div className="text-slate-500 text-xs mt-3 max-w-xs mx-auto">
                  {isSpanish
                    ? "El precio depende de los módulos seleccionados. Contáctenos para un presupuesto personalizado."
                    : "Price depends on modules selected. Contact us for a tailored quote."}
                </div>
              </div>

              <a
                href="tel:+34711051071"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <Phone className="w-5 h-5" />
                {isSpanish ? "Solicitar Presupuesto Gratis" : "Get Your Free Quote"}
              </a>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/40 rounded-2xl p-6">
                <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-4">{isSpanish ? "Módulos Disponibles" : "Available Modules"}</div>
                <ul className="space-y-3">
                  {modules.map((mod) => (
                    <li key={mod.id}>
                      <button
                        onClick={() => scrollToModule(mod.id)}
                        className="flex items-center gap-3 w-full text-left group"
                      >
                        <span className="text-primary text-xs font-bold font-heading shrink-0 w-16">{mod.moduleNumber.replace(isSpanish ? "Módulo " : "Module ", "#")}</span>
                        <span className="text-slate-300 text-sm group-hover:text-primary transition-colors">{mod.navLabel}</span>
                        {mod.isAddOn && <span className="text-[10px] uppercase tracking-wider text-primary/60 border border-primary/20 rounded px-1.5 py-0.5 ml-auto shrink-0">{isSpanish ? "Extra" : "Add-on"}</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILD YOUR OWN SURVEY - ALL MODULES STACKED ===== */}
      <section id="modules" className="bg-slate-900 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
              {isSpanish ? "Sistema Modular de Inspección" : "Modular Survey System"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              {isSpanish ? "Construya Su Propia Inspección" : "Build Your Own Survey"}
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              {isSpanish
                ? "Cada propiedad es diferente. Elija solo los módulos que necesita. Cada elemento es opcional — usted tiene el control total del alcance y el coste."
                : "Every property is different. Choose only the modules you need. Every element is optional — you are in complete control of the scope and cost."}
            </p>
          </div>

          {/* Navigation Pills - scroll to section */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {modules.map((mod, i) => (
              <button
                key={mod.id}
                onClick={() => scrollToModule(mod.id)}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/40 text-slate-300 hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                <span className="text-primary/60 text-xs font-heading font-bold">{String(i + 1).padStart(2, '0')}</span>
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
                    {/* Image — full 50% width, fixed height */}
                    <div className={`min-h-[250px] lg:h-[420px] overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        {mod.smallImages && mod.smallImages.length >= 2 ? (
                          <div className="grid grid-rows-[3fr_2fr] h-full">
                            <img
                              src={mod.mainImage}
                              alt={mod.mainImageAlt || mod.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="grid grid-cols-2">
                              {mod.smallImages.map((img, i) => (
                                <img
                                  key={i}
                                  src={img}
                                  alt={`${mod.title} detail ${i + 1}`}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              ))}
                            </div>
                          </div>
                        ) : mod.smallImages && mod.smallImages.length === 1 ? (
                          <div className="grid grid-cols-2 h-full">
                            <img
                              src={mod.mainImage}
                              alt={mod.mainImageAlt || mod.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <img
                              src={mod.smallImages[0]}
                              alt={`${mod.title} detail`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <img
                            src={mod.mainImage}
                            alt={mod.mainImageAlt || mod.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
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
                {isSpanish ? "Oferta Exclusiva para Clientes" : "Exclusive Customer Offer"}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {isSpanish ? "Proteja Su Nuevo Hogar" : "Protect Your New Home"}{" "}
                <br className="hidden md:block" />
                {isSpanish ? "con LeakGuard" : "with LeakGuard"}
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                {isSpanish
                  ? "Una vez completada su compra, proteja su inversión desde el primer día. Como cliente de la Inspección Pre-Compra de Canary Detect, tiene derecho a una instalación con descuento de LeakGuard — nuestro sistema inteligente de monitorización de agua."
                  : "Once you've completed your purchase, protect your investment from day one. As a Canary Detect Pre-Purchase Survey customer, you are entitled to a discounted installation of LeakGuard — our smart water monitoring system."}
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                {isSpanish
                  ? "LeakGuard monitoriza el sistema de agua de su propiedad las 24 horas del día, los 7 días de la semana. Si se detecta una fuga, corta automáticamente el suministro de agua, evitando los daños catastróficos que pueden costar decenas de miles de euros en reparaciones."
                  : "LeakGuard monitors your property's water system 24 hours a day, 7 days a week. If a leak is detected, it automatically shuts off the water supply, preventing the kind of catastrophic water damage that can cost tens of thousands of euros to repair."}
              </p>
              <a
                href="tel:+34711051071"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
              >
                {isSpanish ? "Preguntar sobre LeakGuard" : "Ask About LeakGuard"}
              </a>
            </div>

            <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">LeakGuard</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto mb-3">
                {isSpanish
                  ? "Monitorización inteligente de agua 24/7 con cierre automático. Total tranquilidad para su nueva propiedad."
                  : "Smart 24/7 water monitoring with automatic shutoff. Complete peace of mind for your new property."}
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {isSpanish ? "Descuento Exclusivo para Clientes de Inspección" : "Exclusive Discount for Survey Customers"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className="bg-slate-950 py-16 md:py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {isSpanish ? "¿Listo para Reservar Su Inspección?" : "Ready to Book Your Survey?"}
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            {isSpanish
              ? "Contáctenos hoy para un presupuesto gratuito y sin compromiso. Cuéntenos sobre la propiedad y le recomendaremos los módulos adecuados."
              : "Contact us today for a free, no-obligation quote. Tell us about the property and we'll recommend the right modules for you."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+34711051071"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            >
              <Phone className="w-5 h-5" />
              {isSpanish ? "Llamar +34 711 051 071" : "Call +34 711 051 071"}
            </a>
            <a
              href="https://canary-detect.com/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-slate-600 text-white font-bold text-base hover:bg-slate-800 transition-all"
            >
              <Globe className="w-5 h-5" />
              {isSpanish ? "Visitar canary-detect.com" : "Visit canary-detect.com"}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrePurchaseSurvey;
