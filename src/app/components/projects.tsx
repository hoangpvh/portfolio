"use client";

import { projectsData } from "../lib/data";
import SectionHeading from "./section-heading";
import Project from "./project-card";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        My Projects
      </SectionHeading>

      <div>
        {
          projectsData.map((project, index) => (
            <Project {...project} key={index} />
          ))
        }
      </div>
    </section>
  )
}