import Layout from "@/components/layout/Layout";
import MeetTheTeamSection from "@/components/home/MeetTheTeamSection";
import SEOHead from "@/components/seo/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const MeetTheTeam = () => {
  const { isSpanish } = useLanguage();

  return (
    <Layout>
      <SEOHead 
        title={isSpanish 
          ? "Conoce a Pete & Dave | Canary Detect Lanzarote" 
          : "Meet Pete & Dave | Canary Detect Lanzarote"}
        description={isSpanish
          ? "Conoce a Pete Ashcroft y Dave Poxon, los propietarios de Canary Detect. 40+ años de experiencia combinada en detección de fugas en Lanzarote."
          : "Meet Pete Ashcroft & Dave Poxon, owners of Canary Detect. 40+ years combined experience in leak detection across Lanzarote."}
        keywords={isSpanish
          ? "equipo canary detect, pete ashcroft, dave poxon, detección fugas lanzarote, los cazafugas"
          : "canary detect team, pete ashcroft, dave poxon, leak detection lanzarote, the leaky finders"}
        canonical={isSpanish 
          ? "https://canary-detect.com/es/equipo" 
          : "https://canary-detect.com/meet-the-team"}
      />
      
      <MeetTheTeamSection />
    </Layout>
  );
};

export default MeetTheTeam;
