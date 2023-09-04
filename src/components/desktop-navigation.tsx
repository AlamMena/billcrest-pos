"use client";
import { navConfig } from "@/lib/nav-config";
import { usePathname } from "next/navigation";
import { TypographyMuted, TypographySmall } from "./typography";
import Image from "next/image";

import React from "react";
import { NavItem } from "./nav-item";

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <aside className=" hidden fixed md:flex flex-col w-72 border border-dashed h-full bg-background space-y-4 px-4 py-6 ">
      <Image
        src={"/assets/icons/logo.svg"}
        height={40}
        width={40}
        alt="logo"
        className="mx-4"
      />
      {navConfig.map((section, sectionIndex) => {
        return (
          <ul key={sectionIndex}>
            <li>
              <TypographyMuted className="font-semibold mb-4 mt-2 px-4">
                {section.title}
              </TypographyMuted>
              {section.childs.map((item, itemIndex) => {
                return (
                  <NavItem key={itemIndex} item={item} pathname={pathname} />
                );
              })}
            </li>
          </ul>
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
