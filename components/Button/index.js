import React from "react";

const Button = ({ children, type, onClick, classes, href, target }) => {
  const base =
    "text-sm laptop:text-base px-4 py-2 laptop:px-5 laptop:py-2.5 rounded-full transition-all duration-300 ease-out active:scale-95";

  if (type === "primary") {
    const primary = `${base} bg-signal text-white hover:brightness-110 ${classes || ""}`;
    if (href) {
      return (
        <a href={href} target={target} rel="noreferrer" className={primary}>
          {children}
        </a>
      );
    }
    return (
      <button onClick={onClick} type="button" className={primary}>
        {children}
      </button>
    );
  }

  if (type === "ghost") {
    const ghost = `${base} border border-white/15 text-ink hover:border-white/30 hover:bg-white/5 ${classes || ""}`;
    if (href) {
      return (
        <a href={href} target={target} rel="noreferrer" className={ghost}>
          {children}
        </a>
      );
    }
    return (
      <button onClick={onClick} type="button" className={ghost}>
        {children}
      </button>
    );
  }

  const plain = `text-sm laptop:text-base px-3 py-2 rounded-full flex items-center gap-1.5 transition-all duration-300 ease-out text-mist hover:text-ink hover:bg-white/5 ${
    classes || ""
  }`;
  return (
    <button onClick={onClick} type="button" className={plain}>
      {children}
    </button>
  );
};

export default Button;
