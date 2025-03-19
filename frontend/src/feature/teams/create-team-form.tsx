import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import Input from "../../components/Input";
import FormWrapper from "../../components/form-wrapper";
import { useUser } from "../authentication/use-user";

const FormSchema = z.object({
  name: z.string().min(1, "Team name is required"),
  domain: z.string().min(1, "Domain is required"),
  description: z.string().min(1, "Description is required"),
  project: z.string().min(1, "Project is required"),
  teamLead: z.string().min(1, "Team lead is required"),
  createdBy: z.object({
    _id: z.string(),
    userName: z.string(),
  }),
});

const CreateTeamForm = () => {
  const { session } = useUser();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      domain: "",
      description: "",
      project: "",
      teamLead: "",
      createdBy: {
        _id: session?.id,
        userName: session?.userName,
      },
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  if (errors) console.log("Errors", errors);

  return (
    <FormWrapper>
      <h2 className="md:text-4xl text-2xl font-semibold text-center">Create Team</h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
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
            name="project"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Assign a project" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="majidali129">Majid Ali</SelectItem>
                    <SelectItem value="abdul129">Abdul Majid</SelectItem>
                    <SelectItem value="mahad129">Mahad Ali</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teamLead"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Lead</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a team lead" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="majidali129">Majid Ali</SelectItem>
                    <SelectItem value="abdul129">Abdul Majid</SelectItem>
                    <SelectItem value="mahad129">Mahad Ali</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
};
export default CreateTeamForm;
