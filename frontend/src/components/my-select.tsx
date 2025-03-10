import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SelectProps {
  options: { label: string; value: string }[];
  placeholder: string;
  urlKey: string;
  className?: string;
}
const CustomSelect = ({
  options,
  placeholder,
  className,
  urlKey,
}: SelectProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  console.log(urlKey);
  const handleValueChange = (value: string) => {
    console.log(value);
    setSearchParams((params) => {
      if (value) params.set(urlKey, value);

      return params;
    });
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className={cn(`w-full`, className)}>
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
