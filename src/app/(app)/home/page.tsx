"use client";
import { auth } from "@/lib/Firebase";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  auth.onAuthStateChanged((credentials) => {
    console.log("new one", credentials);
  });
  console.log("credentials", auth.currentUser);
  return (
    <div className="p-8">
      <Suspense>
        <div className="text-white">{JSON.stringify(session)}</div>
      </Suspense>
      <button className="text-white" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}

Home.requireAuth = true;
