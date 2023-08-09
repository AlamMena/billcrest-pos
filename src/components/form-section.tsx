import { ReactNode } from "react";
import { TypographyH4, TypographyMuted } from "./typography";

export default function FormSectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="w-full grid grid-cols-3  gap-y-4">{children}</div>;
}

export function FormSectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="col-span-3 md:col-span-full  md:mb-0 flex flex-col space-y-1 w-full">
      <TypographyH4>{title}</TypographyH4>
      <TypographyMuted>{subtitle}</TypographyMuted>
    </div>
  );
}

export function FormSectionFields({ children }: { children: ReactNode }) {
  return (
    <div className=" col-span-full md:col-span-2 flex flex-col space-y-4 w-full ">
      {children}
    </div>
  );
}
