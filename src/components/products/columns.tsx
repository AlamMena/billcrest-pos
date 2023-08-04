"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { TypographyMuted, TypographySmall } from "../typography";
import { Progress } from "../ui/progress";
import { formatAmount } from "@/lib/utils";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="my-4"
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex space-x-4 items-center my-2">
        <Image
          alt="product-image"
          width={50}
          height={50}
          className=" rounded-xl shadow-md"
          src={
            "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg"
          }
        />
        <div className="flex flex-col">
          <TypographySmall>2750 Cotu Classic Sneaker</TypographySmall>
          <TypographyMuted>Apparel</TypographyMuted>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => (
      <div className="flex flex-col justify-center space-y-2">
        <Progress value={50} className="h-2" />
        <span className="text-xs m-2 text-muted-foreground">10 low stock</span>
      </div>
    ),
  },

  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className=" font-medium">
        {formatAmount(parseFloat(row.getValue("amount")))}
      </div>
    ),
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: ({ row }) => (
      <div className=" font-medium">
        {formatAmount(parseFloat(row.getValue("amount")))}
      </div>
    ),
  },
  {
    accessorKey: "benefit",
    header: "Benefit",
    cell: ({ row }) => (
      <div className="font-medium">
        {formatAmount(parseFloat(row.getValue("amount")))}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge>{row.getValue("status")}</Badge>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className=" p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
