import { Project } from "@prisma/client";
import React from "react";

import ProjectCard from "./projectCard";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2  scroll-smooth lg:grid-cols-5 gap-7 overflow-auto  p-3 ">
      {projects.map((item, idx) => (
        <ProjectCard key={idx} project={{ id: "werew", title: "Tititle" }} />
      ))}
    </div>
  );
}

export default Projects;
