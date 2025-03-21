import { getAllProjects } from "@/action/project";
import NotFound from "@/components/global/not-found";
import Projects from "@/components/global/projects";
import React from "react";

async function page() {
  // const allProjects = await getAllProjects();
  // console.log("🚀 ~ page ~ allProjects:", allProjects);
  return (
    <>
      <div className="  p-4  bg-black h-full  w-full ">
        <div>
          <h1 className=" text-3xl font-semibold">Projects</h1>
          <span className=" text-sm text-gray-400">
            All fo your work in one place
          </span>
          <div className=" p-2">
            {/* {allProjects.length > 0 ? (
            ) : (
              <NotFound />
              )} */}
              <Projects  />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
