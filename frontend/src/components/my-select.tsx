import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface SelectProps {
  options: { label: string; value: string }[];
  placeholder: string;
  urlKey: string;
  className?: string;
}
const CustomSelect = ({ options, placeholder, className, urlKey }: SelectProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedValue, setSelectedValue] = useState("");
  console.log(urlKey);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  const handleValueChange = (value: string) => {
    console.log(value);
    setSelectedValue(value);
    setSearchParams((params) => {
      if (value) params.set(urlKey, value);

      return params;
    });
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className={cn(`w-full`, className)}>
        <SlidersHorizontal className="h-4 w-4 hidden lg:block" />
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default CustomSelect;
