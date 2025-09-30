"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Ourprocess from "./Ourprocess";
import Serviceslider from "./Serviceslider";
import DesignSection from "./DesignSection";
import Authorize from "./Authorize";
import Floatingbutton from "./Floatingbutton";
import Header from "./Header";

export default function ClientLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLarge, setIsLarge] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1024); // lg breakpoint in Tailwind = 1024px
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only add scroll effect when large screen
  useEffect(() => {
    if (!isLarge) return;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowSidebar(false); // hide on scroll down
      } else {
        setShowSidebar(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLarge]);

  return (
    <div className="flex">
      {/* Sidebar only on large screens */}
      {isLarge && (
        <div
          className={`fixed top-0 left-0 h-screen transition-transform duration-500 hidden lg:block ${
            showSidebar ? "translate-x-0 w-32" : "-translate-x-full w-0"
          }`}
        >
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <main
        className={`transition-all duration-500 flex-1 overflow-y-auto ${
          isLarge && showSidebar ? "ml-32" : "ml-0"
        }`}
      >
        {/* Always show Header */}
        <Header />

        {children}

        {/* Other sections */}
        <Ourprocess />
        <DesignSection />
        <Serviceslider />
        <Authorize />
        <Floatingbutton />
        <Footer />
      </main>
    </div>
  );
}
