import { DataTable } from "@/components/data-table";
import PageHeader from "@/components/page-header";
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
  const { data: products } = await axiosInstance.get(
    "products?Page=1&Limit=10"
  );
  return (
    <>
      <PageHeader
        title="Products"
        icon="fi fi-rr-boxes"
        location={["Home", "Products"]}
        buttonRef="/products/form"
        buttonTitle="New Product"
      />
      <DataTable columns={columns} data={products.data} />
    </>
  );
}
