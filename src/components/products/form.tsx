"use client";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DetailsForm from "./details-form";
import PropertiesForm from "./properties-form";
import PricingForm from "./pricing-form";
import { Button } from "../ui/button";

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-14">
        {/* <TabsContent value="Details"> */}
        <DetailsForm form={form} />
        {/* </TabsContent> */}
        {/* <TabsContent value="Properties"> */}
        <PropertiesForm form={form} />
        {/* </TabsContent> */}
        {/* <TabsContent value="Pricing"> */}
        <PricingForm form={form} />
        {/* </TabsContent> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
