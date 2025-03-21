import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen  w-full min-w-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default Layout;
