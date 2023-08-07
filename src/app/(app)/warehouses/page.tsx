import { DataTable } from "@/components/data-table";
import PageHeader from "@/components/page-header";
import { columns } from "@/components/warehouses/columns";
import axiosInstance from "@/lib/axios-instance";
import { useSearchParams } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: number; limit: number };
}) {
  const { data: brands } = await axiosInstance.get(
    `warehouses?Page=${searchParams.page ?? 1}&Limit=${
      searchParams.limit ?? 10
    }`
  );
  return (
    <>
      <PageHeader
        title="Warehouses"
        icon="fi fi-rr-box-open"
        location={["Home", "Warehouses"]}
        // buttonRef="/products/form"
        buttonTitle="New Warehouse"
      />
      <DataTable columns={columns} data={brands.data} />
    </>
  );
}
