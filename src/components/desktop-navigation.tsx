"use client";
import { navConfig } from "@/lib/nav-config";
import { usePathname } from "next/navigation";
import { TypographySmall } from "./typography";
import Image from "next/image";

import React from "react";
import { NavItem } from "./nav-item";

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <aside className=" hidden fixed md:flex flex-col w-60 border-r-2 border-dashed h-full bg-background space-y-4 px-2 py-4">
      <Image
        src={"/assets/icons/logo.svg"}
        height={40}
        width={40}
        alt="logo"
        className="ml-4"
      />
      {navConfig.map((section, sectionIndex) => {
        return (
          <div className="p-2" key={sectionIndex}>
            <TypographySmall className=" block mb-4 font-semibold">
              {section.title}
            </TypographySmall>
            {section.childs.map((item, itemIndex) => {
              return (
                <NavItem key={itemIndex} item={item} pathname={pathname} />
              );
            })}
          </div>
        );
      })}
      {/* <div className="flex flex-col left-0 space-y-4 right-0 items-center bottom-8 absolute">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center space-y-2 mx-auto">
          <TypographySmall>Administrator</TypographySmall>
          <TypographyMuted>Admin@billcrest.com</TypographyMuted>
        </div>
        <Button size="sm">Upgrade to pro</Button>
      </div> */}
    </aside>
  );
}
