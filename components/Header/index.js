import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const useScrolled = (threshold = 8) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
};

const NavLinks = ({ handleWorkScroll, handleExperienceScroll, handleAboutScroll, isBlog, onNavigate }) => {
  const router = useRouter();
  if (isBlog) {
    return (
      <>
        <Button onClick={() => { onNavigate && onNavigate(); router.push("/"); }}>Home</Button>
        {data.showBlog && (
          <Button onClick={() => { onNavigate && onNavigate(); router.push("/blog"); }}>Blog</Button>
        )}
      </>
    );
  }
  return (
    <>
      <Button onClick={() => { onNavigate && onNavigate(); handleWorkScroll(); }}>Work</Button>
      <Button onClick={() => { onNavigate && onNavigate(); handleExperienceScroll(); }}>Experience</Button>
      <Button onClick={() => { onNavigate && onNavigate(); handleAboutScroll(); }}>About</Button>
    </>
  );
};

const Header = ({ handleWorkScroll, handleExperienceScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const scrolled = useScrolled();

  return (
    <>
      {/* Mobile */}
      <Popover
        className={`block tablet:hidden sticky top-0 z-20 -mx-2 px-2 pt-3 pb-2 bg-void/80 backdrop-blur-lg transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
        }`}
      >
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between">
              <h1
                onClick={() => router.push("/")}
                className="font-semibold cursor-pointer text-lg tracking-tight"
              >
                {data.name}
              </h1>
              <Popover.Button
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center transition-colors duration-200 hover:border-white/30"
              >
                {open ? "✕" : "☰"}
              </Popover.Button>
            </div>
            <Popover.Panel className="mt-3 grid grid-cols-1 gap-1 rounded-2xl border border-white/10 bg-surface p-2 animate-[fadeIn_0.15s_ease-out]">
              <NavLinks
                handleWorkScroll={handleWorkScroll}
                handleExperienceScroll={handleExperienceScroll}
                handleAboutScroll={handleAboutScroll}
                isBlog={isBlog}
                onNavigate={close}
              />
              <Button type="ghost" classes="mt-1" href={data.email && `mailto:${data.email}`}>
                Contact
              </Button>
              <Button type="primary" classes="mt-1" href={data.resumeUrl} target="_blank">
                Résumé
              </Button>
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop */}
      <div
        className={`hidden tablet:flex sticky top-0 z-20 items-center justify-between py-4 -mx-4 px-4 bg-void/70 backdrop-blur-lg transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
        }`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-semibold cursor-pointer text-lg tracking-tight transition-colors duration-200 hover:text-signal"
        >
          {data.name}
        </h1>
        <div className="flex items-center gap-1">
          <NavLinks
            handleWorkScroll={handleWorkScroll}
            handleExperienceScroll={handleExperienceScroll}
            handleAboutScroll={handleAboutScroll}
            isBlog={isBlog}
          />
          <Button type="ghost" classes="ml-2" href={data.email && `mailto:${data.email}`}>
            Contact
          </Button>
          <Button type="primary" classes="ml-2" href={data.resumeUrl} target="_blank">
            Résumé
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
