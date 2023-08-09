"use client";
import { FormSidebar } from "@/components/form-sidebar";
import ProductForm from "@/components/products/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="w-full ">
      <FormSidebar
        sections={[
          "General",
          "Invoices",
          "Good Receipts",
          "Debit Note",
          "Credit Note",
          "Quotations",
          "Quotations",
          "Quotations",
          "Quotations",
          "Quotations",
        ]}
      >
        <TabsContent value="General">
          <ProductForm />
        </TabsContent>
        <TabsContent value="other"></TabsContent>
      </FormSidebar>
    </div>
  );
}
