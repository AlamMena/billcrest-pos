"use client";
import { navConfig } from "@/lib/nav-config";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { TypographyMuted, TypographySmall } from "./typography";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <aside className=" hidden fixed md:flex flex-col w-60 border-r-2 border-dashed h-full bg-background space-y-4 p-4">
      {navConfig.map((item, index) => {
        const isActive = item.href.split("/")[1] === pathname?.split("/")[1];
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
