"use client";

import { Project } from "@prisma/client";
import React from "react";
import { motion } from "framer-motion";
import { itemVariants, themes, timeAgo } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useSlideStore } from "@/store/slides";

import Image from "next/image";
import { Button } from "@/components/ui/button";

function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const { setSlide } = useSlideStore();

  //   const theme =
  //     themes.find((theme) => theme.name === project.themeName) || themes[0];

  const handleProjectNavigate = () => {
    setSlide(JSON.parse(JSON.stringify(project.slides)));

    router.push(`/project/${project.id}`);
  };
  return (
    <motion.div
      variants={itemVariants}
      className=" w-full   flex items-start justify-center p-2 hover:bg-sidebar-background/50 transition  rounded-lg bg-sidebar-background/60 flex-col gap-y-3 "
      onClick={handleProjectNavigate}
    >
      <Image
        src={
          project.thumbnail ||
          "https://images.unsplash.com/photo-1742268351423-6d04402e9090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Thumbnail"
        className=" rounded-2xl"
        width={400}
        height={20}
      />
      <div className="  w-full">
        <h1 className=" text-sm font-semibold truncate w-full">
          {project.title || "Title Here  "}
        </h1>

        <div className=" w-full flex  justify-between items-center  ">
          <span className=" text-gray-500 text-xs">
            {timeAgo(
              project.updatedAt
                ? project.updatedAt.toString()
                : "2025-03-20T09:35:48.324Z".toString()
            )}
          </span>
          <Button variant={"ghost"} className=" bg-sidebar-background/40  text-gray-300 text-xs">
            Delete
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
