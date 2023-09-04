import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button, buttonVariants } from "./ui/button";
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
  const hasChilds = item.childs!!;
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Link
          href={item.href ?? "#"}
          className={buttonVariants({
            variant: isActive ? "secondary" : "ghost",
            className: "w-full items-center mx-0 py-5",
          })}
        >
          <i className={clsx("mr-2 text-xl ", item.icon)}></i>

          <span className="font-normal w-full">{item.title}</span>
          {hasChilds &&
            (open ? (
              <i className="fi fi-rr-angle-small-down text-muted-foreground"></i>
            ) : (
              <i className="fi fi-rr-angle-small-right mt-2 text-muted-foreground"></i>
            ))}
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
