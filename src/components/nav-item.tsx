import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import clsx from "clsx";
import React from "react";
import { navItem } from "@/lib/nav-config";

export function NavItem({
  item,
  pathname,
}: {
  item: navItem;
  pathname: string;
}) {
  const isActive = item.href?.split("/")[1] === pathname?.split("/")[1];
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Link href={item.href ?? "#"} className="w-full">
          <Button
            // className="w-full justify-start"
            className={clsx({
              ["flex mr-2  w-full px-4 justify-start items-center"]: true,
              ["text-muted-foreground"]: !isActive,
            })}
            variant={isActive ? "secondary" : "ghost"}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-center items-center space-x-2">
                <i className={clsx("mr-2 text-xl", item.icon)}></i>
                <span className="font-normal"> {item.title}</span>
              </div>
              {item.childs &&
                (open ? (
                  <i className="fi fi-rr-angle-small-down"></i>
                ) : (
                  <i className="fi fi-rr-angle-small-right"></i>
                ))}
            </div>
          </Button>
        </Link>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={clsx({ "flex flex-col space-y-2 my-1": true, "my-0": open })}
      >
        {item.childs?.map((child, childIndex) => {
          return (
            <Button
              key={childIndex}
              className="flex  ml-2 w-full justify-start items-center text-muted-foreground"
              variant="ghost"
            >
              <i className="mr-2 text-[8px] fi fi-ss-bullet"></i>
              <span className=" font-normal">{child.title}</span>
            </Button>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
