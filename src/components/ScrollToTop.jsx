import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll to top on path change
    window.scrollTo(0, 0);
    // Also ensure body/html reset just in case
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
