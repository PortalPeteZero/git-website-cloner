import { forwardRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = forwardRef<unknown, Record<string, never>>((_, _ref) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
});

ScrollToTop.displayName = "ScrollToTop";

export default ScrollToTop;