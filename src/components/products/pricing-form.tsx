"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { Input } from "@/components/ui/input";
import { TypographyH4, TypographyMuted } from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import FormSectionLayout, {
  FormSectionFields,
  FormSectionTitle,
} from "../form-section";
import { productFormSchema } from "./form";

export default function PricingForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof productFormSchema>>;
}) {
  return (
    <FormSectionLayout>
      <FormSectionTitle
        title="Pricing"
        subtitle="Handle all the cost and profit of your product"
      />
      {/* <Separator orientation="horizontal" className="my-4" /> */}
      <FormSectionFields>
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="120" {...field} />
              </FormControl>
              <FormDescription>
                This is sell amount of your product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cost</FormLabel>
              <FormControl>
                <Input
                  className="flex justify-between"
                  placeholder="320"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the buy amount of your product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profit</FormLabel>
              <FormControl>
                <Input
                  className="flex justify-between"
                  placeholder="320"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the profit amount of your product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tax"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>This product needs to pay taxes</FormLabel>
                <FormDescription>
                  You can manage when a product needs to take taxes
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="taxPercentage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profit</FormLabel>
              <FormControl>
                <Input
                  className="flex justify-between"
                  placeholder="320"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the tax amount of your product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </FormSectionFields>
    </FormSectionLayout>
  );
}
