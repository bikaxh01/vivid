import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import NavLinks from "./navLinks";
import RecentProjects from "./recentProjects";
import { Project, User } from "@prisma/client";
import Footer from "./footer";

type Props = {
  projects: Project[];
  user:User
};

function AppSidebar({ projects,user }: Props) {
  return (
    <Sidebar>
      <SidebarHeader className="  items-center justify-start flex flex-row p-4 gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className=" text-2xl text-primary font-semibold">VIVID</span>
      </SidebarHeader>
      <SidebarContent className=" ">
        <NavLinks />
        <RecentProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter>
        <Footer user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
