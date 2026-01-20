import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    location: "Puerto del Carmen",
    text: "Canary Detect found a leak in our pool that we'd been searching for months. Professional, fast, and saved us thousands in water bills. Highly recommended!",
    rating: 5,
    initials: "MG",
  },
  {
    id: 2,
    name: "John Mitchell",
    location: "Playa Blanca",
    text: "Excellent service! They located a hidden pipe leak under our villa floor without any damage. The thermal imaging technology is impressive.",
    rating: 5,
    initials: "JM",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    location: "Arrecife",
    text: "Very professional team. They helped us map all underground utilities before our construction project. Saved us from costly mistakes.",
    rating: 5,
    initials: "CR",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    location: "Costa Teguise",
    text: "After months of unexplained damp, Canary Detect found the leak in just a few hours. Great communication and fair pricing.",
    rating: 5,
    initials: "ST",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it - hear from property owners across Lanzarote
            who have trusted us with their leak detection needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-card rounded-2xl p-8 border-t-4 border-t-primary hover:border-t-[hsl(25,93%,45%)] border-x border-b border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Large decorative quote */}
              <div className="absolute top-6 right-6">
                <Quote className="h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              </div>

              {/* Animated Stars */}
              <div className="flex gap-1.5 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <Star
                      className="h-5 w-5 fill-primary text-primary drop-shadow-sm"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic relative">
                <span className="text-primary text-2xl font-serif absolute -left-2 -top-2">"</span>
                {testimonial.text}
                <span className="text-primary text-2xl font-serif">"</span>
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-5 border-t border-border/50">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(25,93%,45%)] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                
                <div className="flex-1">
                  <p className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary text-sm">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
