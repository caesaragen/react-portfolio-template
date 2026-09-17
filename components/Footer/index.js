import React from "react";
import Socials from "../Socials";
import data from "../../data/portfolio.json";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-24 laptop:mt-32 pt-10 border-t border-white/10 flex flex-col tablet:flex-row tablet:items-end justify-between gap-8">
      <div>
        <h2 className="text-2xl laptop:text-3xl font-semibold tracking-tight">
          Let’s build something that has to work.
        </h2>
        <a
          href={`mailto:${data.email}`}
          className="mt-2 inline-block text-mist hover:text-signal transition-colors"
        >
          {data.email}
        </a>
      </div>
      <div className="flex flex-col tablet:items-end gap-4">
        <Socials />
        <p className="text-xs text-mist/60">
          © {year} {data.name}. Built with Next.js.
        </p>
      </div>
    </div>
  );
};

export default Footer;
