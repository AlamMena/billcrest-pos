import { FormSidebar } from "@/components/form-sidebar";
import PageHeader from "@/components/page-header";
import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
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
      <div className="w-full space-y-6 md:block">
        <PageHeader
          title="Create a new product"
          icon="fi fi-rr-boxes"
          location={["Home", "Products", "New product"]}
        />
        {/* <Separator orientation="horizontal" className="my-6" /> */}
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
