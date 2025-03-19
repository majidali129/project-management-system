import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Textarea } from "@/components/ui/textarea";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CreateProject } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import z from "zod";
import FormWrapper from "../../components/form-wrapper";
import Input from "../../components/Input";
import { useUser } from "../authentication/use-user";
import { useCreateProject } from "./use-create-project";

const CreateProjectSchema = z.object({
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Project description is required"),
  domain: z.string().min(1, "Domain is required"),
  createdBy: z.string().min(1, "Assignee is required"),
  startDate: z.date({ required_error: "Project start date is required" }),
  endDate: z.date({ required_error: "Project end date is required" }),
  tags: z.array(z.string()).optional(),
});

type CreateProjectType = z.infer<typeof CreateProjectSchema>;

const CreateProjectForm = ({ close }: { close: (v: boolean) => void }) => {
  const { session } = useUser();
  const { createProject, creatingProject } = useCreateProject();
  const form = useForm<CreateProjectType>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: {
      title: "",
      domain: "",
      description: "",
      createdBy: session?.userName,
      startDate: new Date(),
      endDate: new Date(),
      tags: [],
    },
  });

  const { handleSubmit, reset } = form;

  const onSubmit = (data: z.infer<typeof CreateProjectSchema>) => {
    console.log(data);
    createProject(data satisfies CreateProject, {
      onSuccess: () => {
        reset();
        close?.(false);
      },
    });
  };

  return (
    <FormWrapper className="md:p-6">
      <h2 className="md:text-3xl text-2xl font-semibold text-center">Create Project</h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title*</FormLabel>
                <FormControl>
                  <Input placeholder="project management system i.e" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domain*</FormLabel>
                <FormControl>
                  <Input placeholder="frontend i.e" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description*</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full dark:bg-slate-950 bg-slate-100 border border-slate-500/10 dark:border-slate-400/70 focus-within:dark:border-slate-400 focus-within:border-slate-500 p-2 text-slate-900 dark:text-slate-100   focus:outline-0  focus:ring-0 disabled:bg-slate-900/70 focus-within:outline-0 focus-within:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="tag1, tag2, tag3"
                    onChange={(e) => {
                      field.onChange(
                        e.target.value
                          .split(",")

                          .map((tag) => tag.trim())
                          .filter((tag) => tag.length > 0)
                      );
                    }}
                    className="w-full dark:bg-slate-950 bg-slate-100 border border-slate-500/10 dark:border-slate-400/70 focus-within:dark:border-slate-400 focus-within:border-slate-500 p-2 text-slate-900 dark:text-slate-100   focus:outline-0  focus:ring-0 disabled:bg-slate-900/70 focus-within:outline-0 focus-within:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ✅ Start Date & End Date using Reusable DatePicker */}
          <FormField control={form.control} name="startDate" render={({ field }) => <DatePicker field={field} label="Start Date" />} />
          <FormField control={form.control} name="endDate" render={({ field }) => <DatePicker field={field} label="End Date" />} />

          <div className="flex justify-end gap-2 ">
            <Button type="button" onClick={() => close(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={creatingProject}>
              Create
            </Button>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
};
export default CreateProjectForm;

function DatePicker({ field, label }: { field: ControllerRenderProps<CreateProjectType, "startDate" | "endDate">; label: string }) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={field.value} onSelect={(date) => field.onChange(date)} initialFocus />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
}

// const SelectField = ({ field, label, options, placeholder }: { field: ControllerRenderProps<CreateProjectType, "assignedTeam">; placeholder?: string; label: string; options: { label: string; value: string }[] }) => (
//   <FormItem>
//     <FormLabel>{label}</FormLabel>
//     <Select onValueChange={field.onChange} defaultValue={field.value}>
//       <FormControl>
//         <SelectTrigger className="w-full bg-background rounded-none">
//           <SelectValue placeholder={placeholder} />
//         </SelectTrigger>
//       </FormControl>
//       <SelectContent>
//         {options.map((option) => (
//           <SelectItem key={option.value} value={option.value}>
//             {option.label}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//     <FormMessage />
//   </FormItem>
// );
