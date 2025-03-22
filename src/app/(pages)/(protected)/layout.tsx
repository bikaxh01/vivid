import { onAuthenticateUser } from "@/action/auth";
import { getRecentProjects } from "@/action/project";
import AppSidebar from "@/components/global/app-sidebar";
import NavBar from "@/components/global/nav-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function Layout({ children }: { children: ReactNode }) {
  const recentProjects = await getRecentProjects();
  const { user } = await onAuthenticateUser();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <SidebarProvider className="  ">
      <AppSidebar projects={recentProjects} user={user} />
      <SidebarInset>
        <NavBar user={user} />
        <div className=" p-4 h-full bg-black">

        {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
