import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Atom, AudioLines, Thermometer, Mic, Video, CheckCircle, AlertCircle } from "lucide-react";
import titleBg from "@/assets/title-bg.jpg";

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
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.9)] via-[rgba(30,41,59,0.7)] to-[rgba(30,41,59,0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,41,59,0.6)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
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
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-primary-foreground text-lg md:text-xl font-medium">
              Canary Detect carries over{" "}
              <span className="font-heading font-bold text-2xl md:text-3xl">€80,000</span>{" "}
              worth of the latest leak detection equipment
            </p>
            <p className="text-primary-foreground/80 mt-2">
              Delivering centimetre accuracy and keeping repair costs to an absolute minimum
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Detail */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Detection Methods
            </h2>
            <p className="text-muted-foreground">
              Each technology has unique strengths. By combining multiple methods, we achieve 
              results that no single technology could deliver alone.
            </p>
          </motion.div>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left: Title & Icon */}
                  <div className="bg-muted p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                        <tech.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl">{tech.name}</h3>
                        <p className="text-primary text-sm font-medium">{tech.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {/* Right: Best For & Limitations */}
                  <div className="md:col-span-2 p-6 md:p-8 grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-heading font-bold text-sm uppercase tracking-wide">
                          Best For
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tech.bestFor}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="h-5 w-5 text-amber-600" />
                        <h4 className="font-heading font-bold text-sm uppercase tracking-wide">
                          Limitations
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tech.limitations}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Tech Approach */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
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
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="font-heading font-bold text-xl mb-6 text-center">
                Our Guarantee
              </h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="font-heading font-bold text-2xl text-primary mb-2">
                    No Find, No Fee
                  </p>
                  <p className="text-muted-foreground text-sm">
                    If we confirm you have a leak but cannot locate it, there is no charge. 
                    This has never happened so far.
                  </p>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <p className="font-heading font-bold text-xl mb-2">Fixed Fee Policy</p>
                  <p className="text-muted-foreground text-sm">
                    We don't charge extra if the survey takes longer than expected. 
                    We're committed to completing the job.
                  </p>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
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
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
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
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
