import { cn } from "@/lib/utils";
import { SearchIcon, X } from "lucide-react";
import { AllHTMLAttributes, ChangeEvent, useState } from "react";

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Search = ({ className, ...props }: InputProps) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <form className="group not-dark:ring-1 ring-slate-300 dark:bg-slate-800 flex items-center gap-2 px-2 rounded-full">
      <SearchIcon className="w-5 h-5 opacity-70 group-focus-within:opacity-100 text-text" />
      <input onChange={handleQueryChange} value={query} type="text" name="search" id="search" className={cn(`w-full py-1.5 focus-within:outline-0 focus-within:ring-0 text-text placeholder:text-text/60 `, className)} {...props} />
      {query && (
        <span className="dark:bg-slate-700 text-text bg-slate-300 p-0.5 rounded-full cursor-pointer hover:scale-110" onClick={() => setQuery("")} role="button">
          <X className="w-5 h-5 " />
        </span>
      )}
    </form>
  );
};
export default Search;
