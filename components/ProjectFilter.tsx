"use client";

import { useState } from "react";
import type { Project } from "../data/content";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const industries = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
  const [active, setActive] = useState("All");
  const shown = projects.filter((p) => active === "All" || p.industry === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by industry">
        {industries.map((i) => (
          <button key={i} type="button" aria-pressed={active === i} onClick={() => setActive(i)}>
            {i}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <article key={p.name} className="card">
            <p className="meta">{p.industry}, {p.region}</p>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <ul className="stack">
              {p.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
