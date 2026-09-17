import React from "react";

const SkillGroup = ({ category, items }) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-[220px_1fr] gap-3 tablet:gap-8 py-6 border-b border-white/10 last:border-none">
      <h3 className="text-base laptop:text-lg font-medium text-ink">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1.5 rounded-full border border-white/12 text-mist transition-all duration-200 ease-out hover:border-signal/50 hover:text-ink hover:-translate-y-0.5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
