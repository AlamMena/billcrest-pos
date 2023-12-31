"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import {
  TypographyH4,
  TypographyMuted,
  TypographySmall,
} from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import FormSectionLayout, {
  FormSectionFields,
  FormSectionTitle,
} from "../form-section";
import { productFormSchema } from "./form";

export default function DetailsForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof productFormSchema>>;
}) {
  return (
    <FormSectionLayout>
      <FormSectionTitle
        title="Details"
        subtitle="Handle basic informtaion of your product"
      />
      {/* <Separator orientation="horizontal" className="my-4" /> */}
      <FormSectionFields>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="my new product" {...field} />
              </FormControl>
              <FormDescription>
                This is your product display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className=" resize-none"
                  placeholder="product description"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your product description.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-3">
          <TypographySmall>Images</TypographySmall>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Image
                width={120}
                height={120}
                alt="input-image"
                src="/assets/icons/image-space.svg"
              />
              <TypographySmall className="mt-2">
                Drop or Select file
              </TypographySmall>
              <TypographyMuted className="mt-2">
                Drop files here or click{" "}
                <Button size="sm" className="px-1" variant="link">
                  browse
                </Button>
                thorought your machine
              </TypographyMuted>
            </CardContent>
          </Card>
        </div>
      </FormSectionFields>
    </FormSectionLayout>
  );
}
