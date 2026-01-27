import { motion } from "framer-motion";
import { Heart, Users, Trophy, Theater, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Import team images
import peteDaveMain from "@/assets/team/pete-dave-main.jpg";
import peteDaveSuits from "@/assets/team/pete-dave-suits.png";
import pantoMatching from "@/assets/team/panto-matching.jpg";
import daveUnicorn from "@/assets/team/dave-unicorn.jpg";
import pantoGreen from "@/assets/team/panto-green.jpg";
import pantoGroup from "@/assets/team/panto-group.jpg";

const MeetTheTeamSection = () => {
  const { isSpanish } = useLanguage();

  const stats = [
    { 
      value: "28+", 
      label: isSpanish ? "Años de Experiencia (Pete)" : "Years Experience (Pete)",
      icon: Trophy
    },
    { 
      value: "20+", 
      label: isSpanish ? "Años en Lanzarote (Dave)" : "Years in Lanzarote (Dave)",
      icon: Star
    },
    { 
      value: "€25k+", 
      label: isSpanish ? "Donado a Familias (2025)" : "Given to Families (2025)",
      icon: Heart
    },
    { 
      value: "9", 
      label: isSpanish ? "Miembros del Equipo" : "Team Members",
      icon: Users
    },
  ];

  const galleryImages = [
    { src: pantoMatching, alt: "Pete and Dave in matching pantomime costumes" },
    { src: pantoGreen, alt: "Pete and Dave in pantomime costumes backstage" },
    { src: daveUnicorn, alt: "Dave the expert unicorn rider" },
    { src: pantoGroup, alt: "Finchy Fairytales pantomime cast" },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Fun decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-canary-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" />
            {isSpanish ? "Conoce a los Propietarios" : "Meet the Owners"}
            <Sparkles className="h-4 w-4" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-canary-navy">
            Pete Ashcroft & Dave Poxon
          </h2>
          <p className="text-muted-foreground mt-2 text-lg italic">
            {isSpanish ? "Los Cazafugas" : "The Leaky Finders"}
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Main hero image */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img 
                  src={peteDaveMain}
                  alt="Pete Ashcroft and Dave Poxon - Canary Detect owners"
                  className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                {isSpanish ? "Propietarios desde 2020" : "Owners since 2020"}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img 
                  src={peteDaveSuits}
                  alt="Pete and Dave in Lanzarote"
                  className="w-full h-full object-cover object-[center_55%]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Professional credentials */}
            <div className="bg-white rounded-xl p-6 shadow-lg ring-1 ring-black/5">
              <h3 className="font-heading text-xl font-bold text-canary-navy mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                {isSpanish ? "Credenciales Profesionales" : "Professional Credentials"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isSpanish ? (
                  <>
                    El equipo de encuestas está dirigido por Pete y Dave, dos veteranos de la industria con credenciales excepcionales. Pete aporta <strong className="text-canary-navy">28 años de experiencia</strong> en inspección de servicios subterráneos y es propietario de la academia de formación más grande del Reino Unido, empleando a 16 formadores y enseñando a otros cómo encontrar fugas, tuberías y cables.
                  </>
                ) : (
                  <>
                    The survey team is led by Pete and Dave, two industry veterans with exceptional credentials. Pete brings <strong className="text-canary-navy">28 years of experience</strong> in underground utility surveying and is the owner of the biggest training academy in the UK, employing 16 trainers and teaching others how to find leaks, pipes, and cables.
                  </>
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {isSpanish ? (
                  <>
                    Dave es un ingeniero de agua altamente cualificado y propietario del Grupo MVP y Lanzarote Pool and Spa Shop durante los últimos <strong className="text-canary-navy">20 años</strong>. Dave también es un <em className="text-primary">experto jinete de unicornios</em>. Junto con su equipo de nueve personas, incluidos fontaneros totalmente cualificados, han construido una reputación de precisión y profesionalismo.
                  </>
                ) : (
                  <>
                    Dave is a highly qualified water engineer and owner of the MVP Group and Lanzarote Pool and Spa Shop for the last <strong className="text-canary-navy">20 years</strong>. Dave is also an <em className="text-primary">expert unicorn rider</em>. Together with their nine-strong team, including fully qualified and time-served plumbers, they have built a reputation for accuracy and professionalism.
                  </>
                )}
              </p>
            </div>

            {/* Community involvement */}
            <div className="bg-gradient-to-br from-primary/5 to-canary-cyan/5 rounded-xl p-6 shadow-lg ring-1 ring-primary/10">
              <h3 className="font-heading text-xl font-bold text-canary-navy mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                {isSpanish ? "Participación Comunitaria" : "Community Involvement"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isSpanish ? (
                  <>
                    Para Pete y Dave, ser parte de la comunidad significa más que vivir aquí. Co-fundaron <strong className="text-canary-navy">El Atico De Abuela</strong>, una organización sin fines de lucro local que ayuda a familias necesitadas, donde se desempeñan como Presidente y Vicepresidente junto con un equipo de 30 voluntarios increíbles. Solo en 2025, se donaron más de <strong className="text-primary">€25,000</strong> a estas familias.
                  </>
                ) : (
                  <>
                    For Pete and Dave, being part of the community means more than just living here. They co-founded <strong className="text-canary-navy">El Atico De Abuela</strong>, a local non-profit helping families in need, where they serve as Chair and Vice Chair alongside a team of 30 awesome volunteers. In 2025 alone, over <strong className="text-primary">€25,000</strong> was given to these families.
                  </>
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {isSpanish ? (
                  <>
                    Pete también es líder scout y participó en la creación de 1st Lanzarote Scouts. A principios de 2025, se asoció con Lee de Colour Team para establecer la <strong className="text-canary-navy">Carrera Semanal de 5k de Playa Blanca</strong>, que ahora atrae a 40-50 participantes regulares cada sábado por la mañana. Canary Detect también patrocina con orgullo el Club de Triatlón de Playa Blanca.
                  </>
                ) : (
                  <>
                    Pete is also a scout leader and was involved in setting up 1st Lanzarote Scouts. In early 2025, he partnered with Lee from Colour Team to establish the weekly <strong className="text-canary-navy">Playa Blanca 5k Fun Run</strong>, now attracting 40-50 regular participants every Saturday morning. Canary Detect also proudly sponsors the Playa Blanca Triathlon Club.
                  </>
                )}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-3 shadow-md ring-1 ring-black/5 text-center"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="text-xl font-bold text-canary-navy">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun side section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-canary-navy to-canary-navy/90 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-canary-cyan rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                <Theater className="h-6 w-6 text-primary" />
                {isSpanish ? "El Lado Divertido" : "The Fun Side"}
              </h3>
              <p className="text-white/90 leading-relaxed mb-6 max-w-3xl">
                {isSpanish ? (
                  <>
                    Cada enero puedes encontrar a Pete y Dave—normalmente vestidos de drag—actuando en la pantomima anual producida por <strong className="text-primary">Finchy Fairytales</strong>, un espectáculo dirigido por voluntarios que dona todas las ganancias a caridad. Para apoyar a las empresas locales, Canary Detect lanzó recientemente <strong className="text-primary">"Spot the Leak"</strong>, una competición gratuita donde los jugadores prueban sus habilidades detectivescas encontrando fugas ocultas para ganar premios.
                  </>
                ) : (
                  <>
                    Every January you can catch Pete and Dave—usually in drag—performing in the annual pantomime produced by <strong className="text-primary">Finchy Fairytales</strong>, a volunteer-run show that donates all proceeds to charity. To support local businesses, Canary Detect recently launched <strong className="text-primary">"Spot the Leak"</strong>, a free competition where players test their detective skills by finding hidden leaks in various scenarios to win prizes.
                  </>
                )}
              </p>

              {/* Image gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden ring-2 ring-white/20 group-hover:ring-primary transition-all duration-300">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
