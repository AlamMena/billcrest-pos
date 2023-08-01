import { FormSidebar } from "@/components/form-sidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const formSidebarItems = [
  {
    title: "Details",
    href: "/products/form",
  },
  {
    title: "Properties",
    href: "/products/form/properties",
  },
  {
    title: "Pricing",
    href: "/products/form/pricing",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className=" space-y-6 max-w-3xl md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Product</h2>
          <p className="text-muted-foreground">
            Create or edit any product of your inventory
          </p>
        </div>
        <Separator orientation="horizontal" className="my-6" />
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </>
  );
}
