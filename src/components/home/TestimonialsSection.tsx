import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    location: "Puerto del Carmen",
    text: "Canary Detect found a leak in our pool that we'd been searching for months. Professional, fast, and saved us thousands in water bills. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "John Mitchell",
    location: "Playa Blanca",
    text: "Excellent service! They located a hidden pipe leak under our villa floor without any damage. The thermal imaging technology is impressive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    location: "Arrecife",
    text: "Very professional team. They helped us map all underground utilities before our construction project. Saved us from costly mistakes.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Thompson",
    location: "Costa Teguise",
    text: "After months of unexplained damp, Canary Detect found the leak in just a few hours. Great communication and fair pricing.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-primary">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
