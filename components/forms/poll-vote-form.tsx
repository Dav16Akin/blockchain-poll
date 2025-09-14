"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

type PollVoteFormProps = {
  title: string
  options: string[]
}

const FormSchema = z.object({
  option: z.string().min(1, "Please select an option"),
})

export function PollVoteForm({ title, options }: PollVoteFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Selected option:", data.option)
    // send vote to API here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <FormField
          control={form.control}
          name="option"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  {options.map((opt, i) => (
                    <FormItem
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <FormControl>
                        <RadioGroupItem value={String(i)} />
                      </FormControl>
                      <FormLabel className="font-normal">{opt}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={!form.formState.isValid} type="submit">Submit</Button>
      </form>
    </Form>
  )
}

