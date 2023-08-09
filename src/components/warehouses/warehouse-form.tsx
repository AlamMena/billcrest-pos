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
import { warehouseSchema } from "@/app/(app)/warehouses/form/page";

export default function WarehouseForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof warehouseSchema>>;
}) {
  return (
    <div className="w-full max-w-6xl">
      <div className="flex flex-col space-y-2">
        <TypographyH4>Details</TypographyH4>
        <TypographyMuted>
          Handle basic informtaion of your warehouse
        </TypographyMuted>
      </div>
      <Separator orientation="horizontal" className="my-4" />
      <div className="flex flex-col space-y-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="main warehouse" {...field} />
              </FormControl>
              <FormDescription>
                This is your warehouse display name.
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
                  placeholder="warehouse description"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your warehouse description.
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
      </div>
    </div>
  );
}
