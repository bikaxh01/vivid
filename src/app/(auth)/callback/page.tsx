import { onAuthenticateUser } from "@/action/auth";
import { redirect } from "next/navigation";

async function page() {
  const auth = await onAuthenticateUser();


  
  if (auth.status === 200 || auth.status === 201) {
    return redirect("/dashboard");
  }
  return redirect("sign-in");
}

export default page;
