import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { TabsContent } from "@/components/ui/tabs";

import { FormSidebar } from "@/components/form-sidebar";
import WarehouseForm from "@/components/warehouses/warehouse-form";
import { DataTable } from "@/components/data-table";
import { productColumns } from "@/components/products/columns";

export const warehouseSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});
export default function WarehousePage() {
  //   const form = useForm<z.infer<typeof warehouseSchema>>({
  //     resolver: zodResolver(warehouseSchema),
  //   });

  //   function onSubmit(values: z.infer<typeof warehouseSchema>) {
  //     alert(JSON.stringify(values));
  //     console.log(values);
  //   }
  return (
    <div className="w-full">
      <FormSidebar sections={["Details", "Items"]}>
        {/* <Form {...form}> */}
        <form
          //   onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:w-[700px]"
        >
          {/* <TabsContent value="Details"> */}
          {/* <WarehouseForm form={form} /> */}
          <TabsContent value="Details">
            <Button className="mt-4" type="submit">
              Submit
            </Button>
          </TabsContent>
        </form>
        {/* </Form> */}
      </FormSidebar>
    </div>
  );
}
