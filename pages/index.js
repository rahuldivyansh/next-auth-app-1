import LoginForm from "@/src/components/loginform"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";


export default function Home() {
  
  // This code is used to redirect the user to the dashboard if they are already logged in.
  // This is used to prevent the user from being able to access the login page if they are already logged in.
  const router = useRouter();

  const session = useSession();
  if (session.status === "authenticated") {
    router.push("/dashboard");
    return null;
  }

  // .....Till here


  return (
    <main>
      <LoginForm/>
    </main>
  )
}
