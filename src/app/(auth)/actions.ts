"use server";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { cookies } from "next/headers";

export async function signIn(email: string, password: string) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  const token = await res.user.getIdToken();
  const options = {
    name: "session",
    value: token,
    secure: true,
  };

  cookies().set(options);
}

export async function signOut() {
  await auth.signOut();
  const options = {
    name: "session",
    value: "",
    secure: true,
  };
  cookies().set(options);
}
export async function getToken() {
  return cookies().get("session")?.value || "";
}
