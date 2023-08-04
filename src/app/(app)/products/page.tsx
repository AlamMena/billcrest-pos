import { DataTable } from "@/components/data-table";
import { columns } from "@/components/products/columns";
import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios-instance";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const { data: brands } = await axiosInstance.get("brands?Page=1&Limit=10");
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
      <DataTable columns={columns} data={brands} />
    </div>
  );
}
