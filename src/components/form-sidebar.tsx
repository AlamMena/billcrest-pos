import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function FormSidebar({
  children,
  sections,
}: {
  children: React.ReactNode;
  sections: string[];
}) {
  return (
    <div className="w-full">
      <Tabs
        defaultValue="details"
        className="flex flex-col md:flex-row space-x-4 w-full"
      >
        <TabsList className="h-full md:flex-col md:space-y-2 mb-4 md:my-0 flex items-center md:items-start md:justify-start bg-background">
          {sections.map((section, index) => {
            return (
              <TabsTrigger
                value={section}
                defaultValue={index === 0 ? section[0] : ""}
                className="w-full justify-center md:justify-start "
                asChild
              >
                <Button
                  variant={"ghost"}
                  className={cn(
                    "md:w-52 w-full data-[state=active]:bg-muted hover:bg-muted  justify-start shadow-none"
                  )}
                >
                  {section}
                </Button>
              </TabsTrigger>
            );
          })}
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
}
