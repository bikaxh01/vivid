"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { User } from "@prisma/client";
import { AvatarFallback } from "@radix-ui/react-avatar";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Footer({ user }: { user: User }) {
  const { isLoaded, isSignedIn } = useUser();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // if (!isLoaded && !isSignedIn) {
  //   router.push("/sign-in");
  //   return;
  // }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className=" flex flex-col gap-6">
          {!user.subscription && (
            <div className=" flex flex-col rounded-2xl   bg-sidebar-background  gap-y-4 p-5">
              <h1 className=" text-1xl font-semibold">
                Get <span className=" text-primary">Creative AI</span>
              </h1>
              <p className=" text-sm">
                Unlock all feature includes AI and more
              </p>
              <Button className=" rounded-4xl border hover:bg-secondary border-primary  hover:border-primary ">
                Upgrade Now
              </Button>
            </div>
          )}
          <div className="  bg-sidebar-background rounded-2xl flex items-start  gap-x-2  p-2 hover:bg-gray-900 ">
            <div className="  p-2">
              <Avatar>
                <AvatarImage src={user.avatarUrl || ""} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className=" flex flex-col">

            <span className=" text-1xl text-gray-300"> {user.name}</span>
            <span className=" text-sm text-gray-500 truncate w-36">{user.email}</span>
            </div>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default Footer;
