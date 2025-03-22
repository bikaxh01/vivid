"use client";
import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function NewProject() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/create-project");
  };
  return (
    <Button
      className=" bg-primary rounded-xl  text-black hover:bg-primary/90"
      onClick={handleClick}
    >
      <PlusCircle className=" text-white" />
      <span className=" text-white ">Add-Project</span>
    </Button>
  );
}

export default NewProject;
