"use client";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/lib/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function NavLinks() {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {sidebarItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className={` hover:bg-gray-800 ${
                pathName.includes(item.path) && "bg-gray-800 font-semibold"
              } `}
            >
              <Link href={item.path}>
                <item.icon size={"12px"} />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default NavLinks;
