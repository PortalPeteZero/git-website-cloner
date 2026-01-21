import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Atom, AudioLines, Thermometer, Mic, Video, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import technologyHero from "@/assets/hero/technology-hero.jpg";

const technologies = [
  {
    name: "GASENSE",
    subtitle: "Tracer Gas Detection",
    icon: Atom,
    description:
      "GASENSE is a tracer gas detection system. We pressurise the pipe with a safe, inert gas mixture containing nitrogen and hydrogen. Where a leak exists, this gas escapes through the fault and rises to the surface. Our highly sensitive sensors detect the gas at ground level, allowing us to pinpoint the location of the leak without excavation.",
    bestFor: "Particularly effective for locating leaks in buried pipework.",
    limitations:
      "Gas travels through the path of least resistance. If a leak is underneath concrete but there is softer ground nearby, the highest reading may appear in the softer area. We account for this when interpreting results.",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Geophone",
    subtitle: "Acoustic Listening Device",
    icon: AudioLines,
    description:
      "A geophone is an acoustic listening device that detects the sound of water escaping from a pressurised pipe. When water leaks from a pipe under pressure, it creates a distinctive noise as it passes through the fault. By placing the geophone at various points along the pipe route and listening for this sound, we can identify the loudest point, which indicates the leak location.",
    bestFor: "Works best on hard surfaces where sound travels clearly.",
    limitations:
      "Background noise from traffic, machinery, or other water sources can interfere. Sound can also travel along the pipe, meaning the loudest surface point may not be directly above the leak.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Infrared Thermal Imaging",
    subtitle: "Temperature Detection",
    icon: Thermometer,
    description:
      "Infrared thermal imaging detects temperature differences on surfaces. When water leaks from a pipe, it often causes localised cooling or heating depending on the water temperature and surroundings. Our thermal camera identifies these temperature anomalies, revealing areas of moisture that are not visible to the naked eye.",
    bestFor: "Excellent for detecting leaks behind walls, under floors, and where water has spread from the original leak point.",
    limitations:
      "Other heat sources such as underfloor heating, sun exposure, or electrical equipment can affect readings and must be accounted for.",
    color: "from-red-500 to-orange-600",
  },
  {
    name: "Pipe Mic",
    subtitle: "Internal Contact Microphone",
    icon: Mic,
    description:
      "A pipe mic is a contact microphone that we insert directly into the pipework. It amplifies the sound of water flowing through the pipe and any turbulence caused by a leak. Our equipment can locate the position of the microphone from above ground to centimetre accuracy, making this the most precise method available for pinpointing a leak.",
    bestFor: "The most precise method available - centimetre accuracy for pinpointing leaks.",
    limitations:
      "We need clear access into the pipe. This can be blocked by 90-degree bends, debris, or pipework that is too narrow for the equipment.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Internal CCTV Inspection",
    subtitle: "Visual Pipe Inspection",
    icon: Video,
    description:
      "Internal CCTV inspection allows us to see inside your pipework and visually identify faults. We carry four different camera systems to suit different pipe diameters. Flexible cameras navigate around bends to access hard-to-reach areas, while more rigid cameras travel greater distances through longer pipe runs.",
    bestFor: "Reveals the true layout of pipework including T-junctions and hidden branches. Identifies cracks, corrosion, joint failures, and root intrusion.",
    limitations:
      "Access can be limited by narrow pipes, sharp 90-degree bends, T-junctions, debris, or standing water.",
    color: "from-amber-500 to-yellow-600",
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={technologyHero} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.9)] via-[rgba(30,41,59,0.7)] to-[rgba(30,41,59,0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,41,59,0.6)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Our Technology</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Multi-Technology <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Leak Detection</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              Many leak detection companies rely on just one technology, but no single method is 100% accurate. 
              Each has its own strengths and limitations. That's why we always confirm a leak location using 
              at least two independent technologies.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Equipment Value */}
      <section className="py-12 bg-gradient-to-r from-primary to-[hsl(25,93%,45%)] section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <Sparkles className="h-10 w-10 text-white/80" />
            <div>
              <p className="text-primary-foreground text-lg md:text-xl font-medium">
                Canary Detect carries over{" "}
                <span className="font-heading font-bold text-2xl md:text-3xl">€80,000</span>{" "}
                worth of the latest leak detection equipment
              </p>
              <p className="text-primary-foreground/80 mt-2">
                Delivering centimetre accuracy and keeping repair costs to an absolute minimum
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Detail */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Detection Methods
            </h2>
            <p className="text-muted-foreground">
              Each technology has unique strengths. By combining multiple methods, we achieve 
              results that no single technology could deliver alone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-card border-2 border-border hover:border-primary/30 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Header with Icon */}
                <div className="p-8 pb-6">
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wide mt-1">
                        {tech.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mt-5">
                    {tech.description}
                  </p>
                </div>

                {/* Best For & Limitations */}
                <div className="grid sm:grid-cols-2 gap-4 p-8 pt-0">
                  <div className="bg-green-500/5 border-l-4 border-green-500 rounded-r-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="font-heading font-bold text-xs uppercase tracking-wide text-green-700">
                        Best For
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tech.bestFor}
                    </p>
                  </div>
                  
                  <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-r-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <span className="font-heading font-bold text-xs uppercase tracking-wide text-amber-700">
                        Limitations
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tech.limitations}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Tech Approach */}
      <section className="py-20 md:py-28 bg-muted section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">Why It Matters</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                The Multi-Technology Advantage
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every leak presents unique challenges. Ground conditions, pipe materials, background noise, 
                and property construction all affect which detection method works best. By using multiple 
                technologies, we can:
              </p>
              <div className="space-y-4">
                {[
                  "Confirm findings with independent verification",
                  "Overcome limitations of individual methods",
                  "Achieve centimetre accuracy in most cases",
                  "Provide confidence in our findings",
                  "Minimise the size and cost of repairs",
                  "Reduce disruption to your property",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-heading font-bold text-xl mb-6 text-center">
                Our Guarantee
              </h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <p className="font-heading font-bold text-2xl text-primary mb-2">
                    No Find, No Fee
                  </p>
                  <p className="text-muted-foreground text-sm">
                    If we confirm you have a leak but cannot locate it, there is no charge. 
                    This has never happened so far.
                  </p>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <p className="font-heading font-bold text-xl mb-2">Fixed Fee Policy</p>
                  <p className="text-muted-foreground text-sm">
                    We don't charge extra if the survey takes longer than expected. 
                    We're committed to completing the job.
                  </p>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <p className="font-heading font-bold text-xl mb-2">Insurance Reports</p>
                  <p className="text-muted-foreground text-sm">
                    Every survey includes a detailed professional report that can be 
                    used for your insurance company.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-[hsl(25,93%,45%)] section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Leak?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation. Our multi-technology approach 
              means we'll find your leak with confidence.
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
