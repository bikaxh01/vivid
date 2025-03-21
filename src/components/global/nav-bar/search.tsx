import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function SearchComponent() {
  return (
    <div className=" flex min-w-[40%]  gap-x-2 bg-[#26262A] items-center justify-center rounded-4xl  p-1 ">
      <Button  variant={"ghost"}>
        <Search className=" size-4 " />
      </Button>
      <Input type="text" className=" border-none focus-visible:ring-0" placeholder="Search Here" />
    </div>
  );
}

export default SearchComponent;
