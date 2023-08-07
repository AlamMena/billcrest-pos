"use client";
import { ChevronRight, Plus } from "lucide-react";
import { TypographyH3, TypographyMuted, TypographySmall } from "./typography";
import Link from "next/link";
import { Button } from "./ui/button";
import clsx from "clsx";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  location: string[];
  icon: string;
  buttonTitle?: string;
  buttonRef?: string;
  buttonOnClick?: string;
}
export default function PageHeader({
  title,
  subtitle,
  location,
  icon,
  buttonTitle,
  buttonRef,
  buttonOnClick,
}: PageHeaderProps) {
  return (
    <div className="flex flex-row justify-between mb-6">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-secondary rounded-xl px-2 py-1">
            <i className={clsx("text-lg text-muted-foreground", icon)}></i>
          </div>
          <div className="flex flex-col max-w-2xl">
            <TypographyH3>{title}</TypographyH3>
            {/* <TypographyMuted className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            temporibus laudantium libero ut dolorem quasi voluptate quae
          </TypographyMuted> */}
          </div>
        </div>

        <div className="flex">
          {location.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <TypographyMuted>{item}</TypographyMuted>
                {index !== location.length - 1 && (
                  <ChevronRight className="mx-2 text-muted-foreground h-3 w-3" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {buttonTitle && (
        <Link href={buttonRef ?? "#"}>
          <Button variant="default" onClick={() => buttonOnClick}>
            <Plus className="mr-2" />
            {buttonTitle}
          </Button>
        </Link>
      )}
    </div>
  );
}
