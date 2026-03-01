import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getEquivalentRoute } from '@/i18n/routes';
import { Link } from 'react-router-dom';

interface LanguageSwitcherProps {
  variant?: 'default' | 'mobile' | 'compact' | 'dark';
}

const LanguageSwitcher = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const enPath = getEquivalentRoute(location.pathname, 'en');
  const esPath = getEquivalentRoute(location.pathname, 'es');

  const handleClick = (newLang: 'en' | 'es') => {
    setLanguage(newLang);
  };

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-3 px-4 py-3 border-t border-border/50">
        <span className="text-sm text-muted-foreground">Language:</span>
        <div className="flex gap-2">
          <Link
            to={enPath}
            onClick={() => handleClick('en')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              language === 'en'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            English
          </Link>
          <Link
            to={esPath}
            onClick={() => handleClick('es')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              language === 'es'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Español
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className="flex items-center gap-0.5 border border-white/20 rounded-md p-0.5 bg-white/5">
        <Link
          to={enPath}
          onClick={() => handleClick('en')}
          className={`px-2 py-1 rounded font-medium text-xs transition-all ${
            language === 'en'
              ? 'bg-primary text-white'
              : 'text-white/70 hover:text-white'
          }`}
          title="English"
        >
          EN
        </Link>
        <Link
          to={esPath}
          onClick={() => handleClick('es')}
          className={`px-2 py-1 rounded font-medium text-xs transition-all ${
            language === 'es'
              ? 'bg-primary text-white'
              : 'text-white/70 hover:text-white'
          }`}
          title="Español"
        >
          ES
        </Link>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center border border-border/50 rounded-md overflow-hidden bg-background/50">
        <Link
          to={enPath}
          onClick={() => handleClick('en')}
          className={`px-2 py-1 text-xs font-medium transition-all ${
            language === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          title="English"
        >
          EN
        </Link>
        <div className="w-px h-4 bg-border" />
        <Link
          to={esPath}
          onClick={() => handleClick('es')}
          className={`px-2 py-1 text-xs font-medium transition-all ${
            language === 'es'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          title="Español"
        >
          ES
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 border-2 border-border rounded-lg p-0.5 bg-muted/50">
      <Link
        to={enPath}
        onClick={() => handleClick('en')}
        className={`px-2.5 py-1 rounded-md font-medium text-xs transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-primary'
        }`}
        title="English"
      >
        EN
      </Link>
      <Link
        to={esPath}
        onClick={() => handleClick('es')}
        className={`px-2.5 py-1 rounded-md font-medium text-xs transition-all ${
          language === 'es'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-primary'
        }`}
        title="Español"
      >
        ES
      </Link>
    </div>
  );
};

export default LanguageSwitcher;