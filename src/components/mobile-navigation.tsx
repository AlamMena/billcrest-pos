"use client";
import { navConfig } from "@/lib/nav-config";
import clsx from "clsx";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { TypographySmall } from "./typography";
import React from "react";
import { NavItem } from "./nav-item";

export default function MobileNavigation() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>

      <SheetContent side={"left"}>
        <aside className="fixed flex flex-col space-y-4">
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
        </aside>
      </SheetContent>
    </Sheet>
  );
}
