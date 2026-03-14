import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, FileText, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HomepageSEOContent = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();
  const getRoute = (en: string, es: string) => (isSpanish ? es : en);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-background section-divider">
      <div className="container mx-auto px-4 md:px-6 space-y-16">

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-canary-navy">
              {isSpanish ? "Nuestro Equipo" : "Our Team"}
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isSpanish
              ? "La fortaleza de Canary Detect reside en nuestro dedicado equipo de profesionales, que aportan más de 40 años de experiencia combinada en detección de fugas y localización de servicios subterráneos. Cada miembro de nuestro equipo de inspección es un fontanero totalmente cualificado y experimentado, asegurando que cada servicio de detección de fugas que proporcionamos sea profesional y preciso. Nuestro compromiso con la satisfacción del cliente nos impulsa a ofrecer asesoramiento experto y soluciones adaptadas para una amplia gama de problemas relacionados con fugas."
              : "The strength of Canary Detect lies in our dedicated team of professionals, who bring over 40 years of combined experience in leak detection and underground utility location. Each member of our survey team is a fully qualified and time-served plumber, ensuring that every leak detection service we provide is both professional and precise. Our commitment to customer satisfaction drives us to deliver expert advice and tailored solutions for a wide range of leak-related challenges."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isSpanish
              ? "Habiendo identificado y reparado con éxito miles de fugas, la experiencia y el conocimiento de nuestro equipo nos permiten detectar y resolver problemas rápidamente, minimizando las interrupciones y maximizando el valor para nuestros clientes. Cuando elige Canary Detect, se beneficia de un equipo apasionado por ofrecer un servicio excepcional y resultados precisos en todo momento."
              : "Having successfully identified and repaired thousands of leaks, our team's expertise and knowledge enable us to detect and resolve issues quickly, minimizing disruption and maximizing value for our customers. When you choose Canary Detect, you benefit from a team that is passionate about delivering exceptional service and accurate results every time."}
          </p>
          <Link to={getRoute("/meet-the-team", "/es/equipo")} className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
            {isSpanish ? "Conoce al Equipo" : "Meet the Team"} →
          </Link>
        </motion.div>

        {/* Professional Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-canary-navy">
              {isSpanish ? "Informes Profesionales" : "Professional Reports"}
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isSpanish
              ? "Después de cada inspección de detección de fugas, Canary Detect proporciona a los clientes informes profesionales y detallados que describen nuestra metodología y hallazgos. Estos informes están diseñados para ser aptos para reclamaciones de seguros y registros del cliente, asegurando que tenga toda la información que necesita para tomar decisiones informadas sobre su propiedad."
              : "After every leak detection survey, Canary Detect provides customers with professional, detailed reports that outline our methodology and findings. These reports are designed to be suitable for insurance claims and customer records, ensuring you have all the information you need to make informed decisions about your property."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isSpanish
              ? "Nuestro compromiso con la entrega de documentación clara, precisa y fiable significa que puede confiar en los resultados y recomendaciones que proporcionamos. Cada informe está elaborado para ser fácil de entender, ofreciéndole una visión completa del proceso de detección de fugas y cualquier reparación necesaria."
              : "Our commitment to delivering clear, accurate, and reliable documentation means you can trust the results and recommendations we provide. Each report is crafted to be easy to understand, giving you a comprehensive overview of the leak detection process and any necessary repairs."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {isSpanish
              ? "Con Canary Detect, recibe no solo servicios expertos de detección de fugas sino también la tranquilidad que viene de informes profesionales y exhaustivos y un compromiso con la seguridad de su propiedad."
              : "With Canary Detect, you receive not only expert leak detection services but also the peace of mind that comes from thorough, professional reporting and a commitment to your property's safety and security."}
          </p>
        </motion.div>

        {/* Why Choose The Leaky Finders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-canary-navy">
              {isSpanish ? "Por Qué Elegir a Los Cazafugas" : "Why Choose The Leaky Finders"}
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isSpanish
              ? "En Canary Detect, nos diferenciamos con las décadas combinadas de experiencia de nuestro equipo en detección de fugas. Nuestro compromiso es satisfacer las necesidades únicas de nuestros clientes proporcionando un servicio fiable, transparente y receptivo en cada paso del camino."
              : "At Canary Detect, we set ourselves apart with our team's combined decades of experience in leak detection. Our commitment is to meet the unique needs of our customers by providing reliable, transparent, and responsive service every step of the way."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isSpanish
              ? "Utilizamos múltiples tecnologías avanzadas para garantizar la detección más precisa y eficiente posible. No existe un método único que garantice el 100% de precisión en la detección de fugas, por eso Canary Detect confirma cada fuga usando al menos dos tecnologías independientes. El uso de múltiples métodos de detección minimiza el trabajo de excavación costoso y ahorra tiempo y dinero a los propietarios."
              : "We utilize multiple advanced technologies to ensure the most accurate and efficient detection possible. There is no single method that guarantees 100% accuracy in leak detection, which is why Canary Detect confirms every leak using at least two independent technologies. The use of multiple detection methods minimizes costly excavation work and saves homeowners time and money."}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {(isSpanish ? [
              { title: "Métodos No Invasivos", text: "Utilizamos tecnología avanzada para encontrar fugas sin romper paredes o suelos innecesariamente." },
              { title: "Última Tecnología", text: "Sensores acústicos, cámaras térmicas y equipos GPR para una detección precisa." },
              { title: "Resultados Rápidos", text: "Tiempos de respuesta rápidos y detección eficiente minimizan la interrupción para usted." },
            ] : [
              { title: "Non-Invasive Methods", text: "We use advanced technology to find leaks without breaking walls or floors unnecessarily." },
              { title: "Latest Technology", text: "Acoustic sensors, thermal cameras, and GPR equipment for accurate detection." },
              { title: "Fast Results", text: "Quick response times and efficient detection minimize the time required to detect and repair leaks." },
            ]).map((item, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-5 border border-border">
                <h3 className="font-heading font-bold text-sm mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-canary-navy">
            {isSpanish ? "Testimonios de Clientes" : "Client Testimonials"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {isSpanish
              ? "En Canary Detect, nuestro compromiso con la entrega de servicios excepcionales de detección de fugas en las Islas Canarias se refleja en los comentarios que recibimos de nuestros valiosos clientes. Combinando experiencia inigualable con la última tecnología de vanguardia—incluyendo imagen térmica, sensores acústicos y tecnología de gas trazador—proporcionamos constantemente resultados precisos y fiables que ahorran a los propietarios y administradores de propiedades miles de euros en agua desperdiciada y previenen daños costosos a la propiedad."
              : "At Canary Detect, our commitment to delivering exceptional leak detection services across the Canary Islands is reflected in the feedback we receive from our valued clients. By combining unrivalled experience with the latest cutting-edge technology—including thermal imaging, acoustic sensors, and tracer gas technology—we consistently provide accurate, reliable results that save homeowners and property managers thousands of euros in wasted water and prevent costly property damage."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isSpanish
              ? "Nuestros clientes destacan frecuentemente los beneficios de nuestra prueba gratuita de confirmación de fugas, que les permite evaluar sus sistemas de fontanería sin compromiso. Este servicio, junto con nuestras capacidades avanzadas de detección, da tranquilidad y asegura que las fugas se localicen con precisión centimétrica—minimizando las interrupciones y reparaciones innecesarias."
              : "Our clients frequently highlight the benefits of our free leak confirmation test, which allows them to assess their plumbing systems with no obligation. This service, paired with our advanced detection capabilities, gives peace of mind and ensures that leaks are pinpointed with centimetre accuracy—minimizing disruption and unnecessary repairs."}
          </p>
          
          {/* Testimonial quotes */}
          <div className="space-y-4">
            <blockquote className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-foreground italic leading-relaxed mb-2">
                {isSpanish
                  ? '"Quedamos impresionados por la profesionalidad y experiencia del equipo de Canary Detect. Su uso de tecnología avanzada, incluyendo imagen térmica y sensores acústicos, les permitió detectar la fuga en nuestra piscina de forma rápida y precisa. Pudimos ahorrar una cantidad significativa de dinero en reparaciones y prevenir más daños a nuestra propiedad."'
                  : '"We were impressed by the professionalism and expertise of the Canary Detect team. Their use of advanced technology, including thermal imaging and acoustic sensors, allowed them to detect the leak in our pool quickly and accurately. We were able to save a significant amount of money on repairs and prevent further damage to our property."'}
              </p>
            </blockquote>
            <blockquote className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-foreground italic leading-relaxed mb-2">
                {isSpanish
                  ? '"El equipo de Canary Detect fue receptivo y servicial durante todo el proceso. Explicaron todo claramente y nos proporcionaron un informe detallado de sus hallazgos. Pudimos entender el alcance de la fuga y tomar decisiones informadas sobre las reparaciones."'
                  : '"The team at Canary Detect was responsive and helpful throughout the entire process. They explained everything clearly and provided us with a detailed report of their findings. We were able to understand the extent of the leak and make informed decisions about the repairs."'}
              </p>
            </blockquote>
          </div>

          {/* Leak Confirmation Test */}
          <div className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="font-heading font-bold text-lg mb-4 text-canary-navy">
              {isSpanish ? "Cómo Funciona Nuestra Prueba de Confirmación de Fugas" : "How Our Leak Confirmation Test Works"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isSpanish
                ? "Canary Detect ofrece una prueba gratuita de confirmación de fugas para evaluar su sistema y comprobar si hay fugas antes de reservar una inspección completa. Esta prueba está diseñada para darle claridad y confianza antes de comprometerse con una inspección completa."
                : "Canary Detect offers a free leak confirmation test to assess your system and check for leaks before booking a full survey. This test is designed to give you clarity and confidence before committing to a full inspection."}
            </p>
            <p className="font-heading font-semibold text-foreground mb-3">
              {isSpanish ? "Cómo empezar:" : "How to get started:"}
            </p>
            <ol className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                {isSpanish
                  ? "Contáctenos a través de nuestra web o teléfono para solicitar una prueba gratuita de confirmación de fugas."
                  : "Contact us via our website or phone to request a free leak confirmation test."}
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                {isSpanish
                  ? "Nuestro equipo organizará un horario conveniente para evaluar su sistema."
                  : "Our team will arrange a convenient time to assess your system."}
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                {isSpanish
                  ? "Si se confirma una fuga, proporcionaremos un informe detallado y recomendaremos los siguientes pasos."
                  : "If a leak is confirmed, we will provide a detailed report and recommend the next steps."}
              </li>
            </ol>
            <Link to={getRoute("/services/free-leak-confirmation", "/es/servicios/confirmacion-fugas-gratis")} className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
              {isSpanish ? "Más Información" : "Learn More"} →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HomepageSEOContent.displayName = "HomepageSEOContent";

export default HomepageSEOContent;
