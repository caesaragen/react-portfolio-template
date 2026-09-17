import React from "react";

const initials = (title) =>
  title
    .split(" ")
    .filter((w) => /[a-zA-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const ProjectRow = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group grid grid-cols-1 tablet:grid-cols-[88px_1fr_auto] gap-4 tablet:gap-8 items-start tablet:items-center py-8 border-b border-white/10 first:pt-0 last:border-none transition-transform duration-300 ease-out tablet:hover:translate-x-1.5"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold text-white shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-105"
        style={{ backgroundColor: project.color }}
      >
        {initials(project.title)}
      </div>

      <div>
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-xl laptop:text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="text-mist text-sm">{project.tagline}</span>
        </div>
        <p className="mt-2 text-mist text-sm laptop:text-base max-w-2xl leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex tablet:flex-col tablet:items-end gap-2 tablet:gap-3 tablet:text-right shrink-0">
        <span
          className="text-xs px-3 py-1 rounded-full border tablet:order-2"
          style={{ borderColor: `${project.color}55`, color: project.color }}
        >
          {project.metric}
        </span>
        <span className="text-sm font-medium text-ink group-hover:text-signal transition-colors tablet:order-1">
          View app
        </span>
      </div>
    </a>
  );
};

export default ProjectRow;
