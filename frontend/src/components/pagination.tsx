import { PAGE_SIZE } from "@/utils/constants";
import { useSearchParams } from "react-router";
import { Button } from "./ui/button";

const Pagination = ({ count }: { count: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const totalPages = Math.ceil(count / PAGE_SIZE);

  const next = () => {
    const next = currentPage === totalPages ? currentPage : currentPage + 1;
    searchParams.set("page", String(next));
    setSearchParams(searchParams);
  };

  const previous = () => {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", String(prevPage));
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-end py-2.5 bg-transparent">
      <div className="flex items-center gap-4">
        <Button disabled={currentPage === 1} onClick={previous}>
          Previous
        </Button>
        <p className="flex items-center gap-2.5">
          Showing
          <span className="font-bold">{(currentPage - 1) * PAGE_SIZE + 1}</span> to
          <span className="font-bold">{currentPage === totalPages ? count : currentPage * PAGE_SIZE}</span>
        </p>
        <Button disabled={currentPage === totalPages} onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
};
export default Pagination;
