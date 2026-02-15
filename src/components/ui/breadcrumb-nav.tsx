import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbNav = ({ items, className = "" }: BreadcrumbNavProps) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`py-3 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1 text-sm text-white/70">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />}
            {item.href && index < items.length - 1 ? (
              <Link 
                to={item.href} 
                className="hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {index === 0 && <Home className="h-3.5 w-3.5" />}
                {item.label}
              </Link>
            ) : (
              <span className="text-white/90 font-medium truncate max-w-[200px] md:max-w-none">
                {index === 0 && !item.href && <Home className="h-3.5 w-3.5 inline mr-1" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
