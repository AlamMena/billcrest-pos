"use client";

import { signOut } from "@/app/(auth)/actions";
import Loading from "../loading";

export default function Home() {
  return (
    <div className="p-8">
      <div className="text-white"></div>
      <Loading />
      <button className="text-white" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}

Home.requireAuth = true;
