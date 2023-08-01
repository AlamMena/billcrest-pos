"use client";
import Login from "@/app/(auth)/signup/page";
import { auth } from "@/lib/Firebase";
import { User } from "firebase/auth";
import { useState } from "react";
import { ReactNode } from "react";
import { JsxElement } from "typescript";

export interface WithAuthProps {
  children: () => JsxElement;
  rols?: string[];
}
export function useAuth() {
  const [user, setUser] = useState<User | null>();
  auth.onAuthStateChanged((credentials) => {
    if (credentials) {
      setUser(credentials);
    }
  });

  return user;
}
