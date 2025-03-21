import { Loader } from "lucide-react";
import React from "react";

function AuthLoading() {
  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <Loader className=" animate-spin" />
    </div>
  );
}

export default AuthLoading;
