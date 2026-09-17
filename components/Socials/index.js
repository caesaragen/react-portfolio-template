import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import data from "../../data/portfolio.json";

const iconFor = (title) => {
  if (title === "GitHub") return <FaGithub />;
  if (title === "LinkedIn") return <FaLinkedinIn />;
  if (title === "Email") return <HiOutlineMail />;
  return null;
};

const Socials = ({ className }) => {
  return (
    <div className={`${className || ""} flex items-center gap-3`}>
      {data.socials.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          aria-label={social.title}
          title={social.title}
          className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center text-lg text-mist transition-all duration-300 ease-out hover:text-ink hover:border-white/30 hover:-translate-y-0.5"
        >
          {iconFor(social.title)}
        </a>
      ))}
    </div>
  );
};

export default Socials;
