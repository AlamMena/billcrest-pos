import { DataTableDemo } from "@/components/data-table";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLarge,
  TypographyMuted,
  TypographySmall,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/Firebase";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ChevronRight, Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="w-full flex flex-col space-y-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-6">
          <TypographyH3>Products</TypographyH3>
          <div className="flex space-x-2 items-center">
            <TypographyMuted>Home</TypographyMuted>
            <ChevronRight className="mr-2 text-muted-foreground" />
            <TypographySmall>Products</TypographySmall>
          </div>
        </div>
        <Link href="/products/form">
          <Button variant="default">
            <Plus className="mr-2" />
            Add product
          </Button>
        </Link>
      </div>
      <DataTableDemo />
    </div>
  );
}
