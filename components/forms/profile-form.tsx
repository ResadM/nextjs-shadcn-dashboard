"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ProfileSchema, ProfileSchemaCard } from "@/lib/zod";
import { toast } from "../ui/use-toast";

interface profileFormProp {
  session: Session | null;
}

export default function ProfileForm({ session }: profileFormProp) {
  const form = useForm<ProfileSchemaCard>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: session?.user?.name!,
      email: session?.user?.email!,
    },
  });

  const formSubmit = (data: ProfileSchemaCard) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <div className="overflow-hidden">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex gap-10 flex-col md:flex-row">
                <div className="max-w-[150px] bg-slate-100">
                  <Image
                    src="/user.png"
                    alt="Profile picture"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="md:pt-5">
                  <p className="font-sans text-3xl font-semibold">
                    {session?.user?.name}{" "}
                  </p>
                  <p className="font-sans text-2xl ">{session?.user?.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal ",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "MM/dd/yyyy")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button type="submit">Save</Button>
              <Button variant={"destructive"}>Cancel</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
