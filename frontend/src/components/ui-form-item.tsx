import { cn } from "@/lib/utils";
import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

interface FormItemProps {
  control: Control;
  label?: string;
  name: string;
  placeholder: string;
  className?: string;
}

const UiFormItem = ({ name, control, label, placeholder, className }: FormItemProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(`w-full space-y-1 relative  *:text-slate-950 dark:*:text-slate-100`, className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default UiFormItem;
