"use client";

import * as React from "react";

import { ReloadIcon } from "@radix-ui/react-icons";

export default function Loading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1000);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="w-full h-full">
      <div className="">Home</div>
    </div>
  );
}
