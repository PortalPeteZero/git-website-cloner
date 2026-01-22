import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/i18n/LanguageContext";
import { getContactPath } from "@/i18n/routes";
import { getLocationsData, getLocationUIText } from "@/data/locationsData";
import titleBg from "@/assets/title-bg.jpg";

const LocationPage = () => {
  const { location } = useParams<{ location: string }>();
  const { isSpanish } = useTranslation();
  
  const locationsData = getLocationsData(isSpanish);
  const uiText = getLocationUIText(isSpanish);
  const locationData = location ? locationsData[location] : null;

  const canonicalUrl = isSpanish 
    ? `https://canary-detect.com/es/ubicaciones/${location}`
    : `https://canary-detect.com/locations/${location}`;

  if (!locationData) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">{uiText.notFound.title}</h1>
          <p className="text-muted-foreground mb-8">{uiText.notFound.description}</p>
          <Button asChild>
            <Link to={getContactPath(isSpanish)}>{uiText.notFound.button}</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead 
        title={locationData.seo.title}
        description={locationData.seo.description}
        keywords={locationData.seo.keywords}
        canonical={canonicalUrl}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt={`${isSpanish ? 'Servicios de detección de fugas en' : 'Leak detection services in'} ${locationData.name} Lanzarote`} className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-12 pb-10 md:pt-16 md:pb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-[0.1em]">{uiText.hero.badge}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {uiText.hero.titlePrefix}<span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{locationData.name}</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">{locationData.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="shadow-lg"><Link to={getContactPath(isSpanish)}>{uiText.cta.getQuote}</Link></Button>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy" asChild>
                <a href="tel:+34711051071"><Phone className="h-4 w-4 mr-2" />{uiText.cta.callNow} +34 711 051 071</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About This Area */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">{uiText.sections.localExperts}</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">{uiText.sections.servicesIn(locationData.name)}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{locationData.areaDescription}</p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {[uiText.features.noFindNoFee, uiText.features.equipment, uiText.features.accuracy, uiText.features.reports].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div><p className="font-semibold">{feature.title}</p><p className="text-sm text-muted-foreground">{feature.description}</p></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-xl p-6 sticky top-24 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">{uiText.sections.getQuoteIn(locationData.name)}</h3>
                <p className="text-foreground/80 text-sm mb-6">{uiText.sections.quoteDescription(locationData.name)}</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><a href="tel:+34711051071" className="hover:text-primary transition-colors">+34 711 051 071</a></div>
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /><span className="text-sm">{uiText.sections.hours}</span></div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full" asChild><Link to={getContactPath(isSpanish)}>{uiText.cta.requestQuote}</Link></Button>
                  <Button variant="outline" className="w-full" asChild><a href="tel:+34711051071">{uiText.cta.callNow}</a></Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">{uiText.sections.ourServices}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">{uiText.sections.servicesAvailable(locationData.name)}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {locationData.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link to={service.href} className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p></div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">{uiText.sections.coverageArea}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">{uiText.sections.nearbyAreas}</h2>
            <p className="text-muted-foreground mb-8">{uiText.sections.nearbyDescription(locationData.name)}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {locationData.nearbyAreas.map((area) => (<span key={area} className="bg-muted px-4 py-2 rounded-full text-sm font-medium">{area}</span>))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{uiText.sections.needLeakDetection(locationData.name)}</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">{uiText.sections.ctaDescription}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild><Link to={getContactPath(isSpanish)}>{uiText.cta.getQuote}</Link></Button>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy" asChild><a href="tel:+34711051071">{uiText.cta.callNow} +34 711 051 071</a></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
