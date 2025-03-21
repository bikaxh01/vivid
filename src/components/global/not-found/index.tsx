import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";
import React from "react";

import { User } from "@clerk/nextjs/server";

function NotFound() {
  return (
    <div className=" flex  flex-col gap-y-3 items-center mt-7 bg-sidebar-background  rounded-2xl h-96 justify-center">
      <Inbox className=" size-20" />
      <span>No Projects Found</span>
      <Button variant={"link"} className=" text-primary/90">Create New one</Button>
    </div>
  );
}

export default NotFound;
