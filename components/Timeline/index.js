import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../utils";
import { revealOnScroll } from "../../animations";

const Timeline = ({ items }) => {
  const wrapRef = useRef();
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const registerItem = (el) => {
    if (el) itemRefs.current.push(el);
  };

  useIsomorphicLayoutEffect(() => {
    revealOnScroll(wrapRef.current, itemRefs.current, { y: 20, staggerAmount: 0.15 });
  }, []);

  return (
    <div ref={wrapRef} className="relative pl-8 tablet:pl-10">
      <div className="absolute left-[7px] tablet:left-[9px] top-2 bottom-2 w-px bg-white/12" />
      {items.map((item) => (
        <div
          key={item.company + item.period}
          ref={registerItem}
          className="relative pb-12 last:pb-0"
        >
          <span className="absolute -left-8 tablet:-left-10 top-1.5 w-4 h-4 rounded-full bg-void border-2 border-signal transition-transform duration-300 group-hover:scale-110" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg laptop:text-xl font-semibold tracking-tight">
              {item.company}
            </h3>
            <span className="text-sm text-mist">{item.period}</span>
          </div>
          <p className="text-sm text-signal mt-0.5">{item.role}</p>
          <p className="text-sm text-mist mt-0.5">{item.location}</p>
          <ul className="mt-3 space-y-1.5">
            {item.points.map((point, i) => (
              <li key={i} className="text-sm laptop:text-[15px] text-ink/80 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-white/25" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
