import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import React from "react";

function NewProject() {
  return (
    <Button className=" bg-primary rounded-2xl  text-black hover:bg-primary/90">
      <PlusCircle className=" text-white" />
      <span className=" text-white ">Add-Project</span>
    </Button>
  );
}

export default NewProject;
