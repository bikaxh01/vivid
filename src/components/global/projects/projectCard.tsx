"use client";

import { Project } from "@prisma/client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { timeAgo } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useSlideStore } from "@/store/slides";

import Image from "next/image";

import AlertDialogComponent from "./alertDialog";
import { deleteProject } from "@/action/project";
import { toast } from "sonner";

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setSlide } = useSlideStore();

  //   const theme =
  //     themes.find((theme) => theme.name === project.themeName) || themes[0];

  const handleProjectNavigate = () => {
    setSlide(JSON.parse(JSON.stringify(project.slides)));

    router.push(`/project/${project.id}`);
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await deleteProject(project.id);
      console.log("🚀 ~ handleDelete ~ res:", res);
      toast.success("Successfully Deleted");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setOpen(false);
      router.refresh();
    }
  };
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ ease: "easeInOut" }}
      className=" w-full   flex items-start justify-center p-2 hover:bg-sidebar-background/50 transition  rounded-md bg-sidebar-background/60 flex-col gap-y-3 "
    >
      <Image
        onClick={handleProjectNavigate}
        src={
          project.thumbnail ||
          "https://images.unsplash.com/photo-1742268351423-6d04402e9090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Thumbnail"
        className=" rounded-md w-[26rem] h-[16rem]  sm:w-[20rem] sm:h-[12rem] lg:w-[20rem] lg:h-[8rem]"
        width={500}
        height={500}
      />
      <div className="  w-full">
        <h1
          className=" text-sm font-semibold truncate w-full"
          onClick={handleProjectNavigate}
        >
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
          {/* <Button
            variant={"ghost"}
            className=" bg-sidebar-background/40  text-gray-300 text-xs"
          >
            Delete
          </Button> */}
          <AlertDialogComponent
            open={open}
            setOpen={setOpen}
            loading={loading}
            alertTitle={`${project.title} will be deleted`}
            btnTitle="Delete"
            description={
              "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
            }
            handleConfirm={handleDelete}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
