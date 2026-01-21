import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getEquivalentRoute } from '@/i18n/routes';

interface LanguageSwitcherProps {
  variant?: 'default' | 'mobile' | 'compact';
}

const LanguageSwitcher = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang: 'en' | 'es') => {
    if (newLang === language) return;
    
    setLanguage(newLang);
    const newPath = getEquivalentRoute(location.pathname, newLang);
    navigate(newPath);
  };

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-3 px-4 py-3 border-t border-border/50">
        <span className="text-sm text-muted-foreground">Language:</span>
        <div className="flex gap-2">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              language === 'en'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('es')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              language === 'es'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Español
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center border border-border/50 rounded-md overflow-hidden bg-background/50">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-2 py-1 text-xs font-medium transition-all ${
            language === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          title="English"
        >
          EN
        </button>
        <div className="w-px h-4 bg-border" />
        <button
          onClick={() => handleLanguageChange('es')}
          className={`px-2 py-1 text-xs font-medium transition-all ${
            language === 'es'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          title="Español"
        >
          ES
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 border-2 border-border rounded-lg p-0.5 bg-muted/50">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2.5 py-1 rounded-md font-medium text-xs transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-primary'
        }`}
        title="English"
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-2.5 py-1 rounded-md font-medium text-xs transition-all ${
          language === 'es'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-primary'
        }`}
        title="Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
