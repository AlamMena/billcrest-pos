"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import DetailsForm from "../../../../components/products/details-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingForm from "../../../../components/products/pricing-form";
import PropertiesForm from "../../../../components/products/properties-form";
import { cn } from "@/lib/utils";

export const productFormSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  price: z.coerce.number({
    invalid_type_error: "price must be a number.",
  }),
  cost: z.coerce.number({
    invalid_type_error: "cost must be a number.",
  }),
  profit: z.coerce.number({
    invalid_type_error: "profit must be a number.",
  }),
  tax: z.coerce.boolean(),
  taxPercentage: z.coerce.number({
    invalid_type_error: "taxPercentage must be a number.",
  }),
  code: z.string().min(2).max(50),
  quantity: z.coerce.number({
    invalid_type_error: "Quantity must be a number.",
  }),
  categoryId: z.coerce.number({
    required_error: "Category is required.",
  }),
  subcategoryId: z.coerce.number({
    required_error: "Subcategory is required.",
  }),
});

export default function ProductForm() {
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
  });

  function onSubmit(values: z.infer<typeof productFormSchema>) {
    alert(JSON.stringify(values));
    console.log(values);
  }
  return (
    <div className="w-full">
      <Tabs defaultValue="details" className="flex space-x-4 w-full">
        <TabsList className="h-full md:flex-col md:space-y-2 flex items-center md:items-start md:justify-start bg-background">
          <TabsTrigger
            value="details"
            className="w-full justify-center md:justify-start"
            asChild
          >
            <Button
              variant={"ghost"}
              className={cn(
                " w-44 data-[state=active]:bg-muted hover:bg-muted justify-start shadow-none"
              )}
            >
              Details
            </Button>
          </TabsTrigger>
          <TabsTrigger
            className="w-full justify-center md:justify-start"
            value="properties"
            asChild
          >
            <Button
              variant={"ghost"}
              className={cn(
                "data-[state=active]:bg-muted hover:bg-muted w-full justify-start shadow-none"
              )}
            >
              Properties
            </Button>
          </TabsTrigger>
          <TabsTrigger
            className="w-full justify-center md:justify-start"
            value="pricing"
            asChild
          >
            <Button
              variant={"ghost"}
              className={cn(
                "data-[state=active]:bg-muted hover:bg-muted w-full justify-start shadow-none"
              )}
            >
              Pricing
            </Button>
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[700px]"
          >
            <TabsContent value="details">
              <DetailsForm form={form} />
            </TabsContent>
            <TabsContent value="properties">
              <PropertiesForm form={form} />
            </TabsContent>{" "}
            <TabsContent value="pricing">
              <PricingForm form={form} />
            </TabsContent>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Tabs>
    </div>
  );
}
