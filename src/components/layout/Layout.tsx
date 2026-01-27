import { ReactNode, forwardRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => (
  <div ref={ref} className="min-h-screen flex flex-col overflow-x-hidden">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
));

Layout.displayName = "Layout";

export default Layout;
