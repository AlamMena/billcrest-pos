"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function FormSidebar({
  children,
  sections,
}: {
  children: React.ReactNode;
  sections: string[];
}) {
  const [value, setValue] = useState(sections[0]);
  return (
    <div className="w-full">
      <Tabs
        onValueChange={setValue}
        value={value}
        defaultValue={sections[0]}
        className="flex flex-col justify-center space-x-4 w-full"
      >
        <ScrollArea className="max-w-3xl">
          <TabsList className="h-full mb-4 flex space-x-2 items-center md:items-start md:justify-start bg-background">
            {sections.map((section, index) => {
              return (
                <TabsTrigger
                  value={section}
                  className=" justify-center md:justify-start  hover:cursor-pointer data-[state=active]:shadow-none  "
                  asChild
                >
                  <div className="flex flex-col ">
                    <span
                      className={cn(
                        "flex flex-col justify-center shadow-none pr-4 bg-background "
                      )}
                    >
                      <div className="flex items-center">
                        <i className="fi fi-rr-file-invoice text-lg mr-2" />
                        <span>{section}</span>
                      </div>
                    </span>
                    {value === section && (
                      <Separator className=" mt-1 mx-auto h-[1.5px]  px-2 bg-foreground" />
                    )}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </ScrollArea>

        {children}
      </Tabs>
    </div>
  );
}
