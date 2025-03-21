import { Button } from "@/components/ui/button";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "@prisma/client";
import React from "react";
import SearchComponent from "./search";
import NewProject from "./New-project";
import { Import } from "lucide-react";

type Prop = {
  user: User;
};

function NavBar({ user }: Prop) {
  return (
    <header className=" p-2 sticky z-[10] flex  bg-black justify-between   top-0 ">
      <SidebarTrigger />
      <SearchComponent />
      {/* <ThemeToggle/> */}
      <div className=" flex gap-6">
        <Button className=" rounded-2xl hover:bg-gray-700 bg-[#26262A]">
          <Import />
          <span>Import</span>
        </Button>
        <NewProject />
      </div>
    </header>
  );
}

export default NavBar;
