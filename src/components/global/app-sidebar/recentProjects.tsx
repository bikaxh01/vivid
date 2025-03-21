"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSlideStore } from "@/store/slides";
import { Project } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

type props = {
  projects: Project[];
};

function RecentProjects({ projects }: props) {
  const { setSlide } = useSlideStore();
  const router = useRouter();
  const handleClick = (projectId: string, slides: JsonValue) => {
    if (!projectId && !slides) {
      toast.error("Project not found", {
        description: "please try again later",
      });
      return;
    }

    setSlide(JSON.parse(JSON.stringify(slides)));
    router.push(`/project/${projectId}`);
  };
  return (
    <>
      {projects.length > 0 && (
        <SidebarGroup>
          <SidebarGroupLabel className=" text-gray-400 ">
            Recent Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {projects.map((item) => (
              <SidebarMenu key={item.id}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => handleClick(item.id, item.slides)}
                    className=" hover:bg-gray-800 text-gray-400  hover:font-semibold"
                  >
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      )}
    </>
  );
}

export default RecentProjects;
