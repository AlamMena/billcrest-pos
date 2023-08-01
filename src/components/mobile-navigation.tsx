"use client";
import { navConfig } from "@/lib/nav-config";
import clsx from "clsx";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function MobileNavigation() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>

      <SheetContent side={"left"}>
        <aside className="fixed py-8 px-2 flex flex-col space-y-4">
          {navConfig.map((item, index) => {
            const isActive = item.href === pathname;
            return (
              <Link href={item.href} key={index}>
                <Button
                  // className="w-full justify-start"
                  className={clsx({
                    ["mr-2 w-full justify-start"]: true,
                    ["text-muted-foreground"]: !isActive,
                  })}
                  variant={isActive ? "secondary" : "ghost"}
                >
                  <i className="mr-2">{item.icon}</i>
                  {item.title}
                </Button>
              </Link>
            );
          })}
        </aside>
      </SheetContent>
    </Sheet>
  );
}
