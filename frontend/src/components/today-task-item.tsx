import { Clock, MoreHorizontal } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CardFooter } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const TodayTaskItem = () => {
  return (
    <li className="flex hover:bg-slate-200/50 dark:hover:bg-slate-800  gap-2 not-last:border-b border-b-slate-300 dark:border-b-slate-700 px-3  md:px-5 py-3.5">
      <div className=" w-full">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold md:tracking-wide">Task Name</h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit Task</DropdownMenuItem>
              <DropdownMenuItem>Change Priority</DropdownMenuItem>
              <DropdownMenuItem>Reassign</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardFooter className="flex items-center gap-2 pt-0 px-0 md:px-0">
          <Badge>High</Badge>
          <Badge variant="outline">Noting</Badge>
          <Badge
            variant="outline"
            className="ml-auto flex items-center gap-1.5"
          >
            {/* <Clock className="mr-1 h-3 w-3" /> */}
            <span>Due: </span> <span>{new Date().toLocaleDateString()}</span>
          </Badge>
        </CardFooter>
      </div>
    </li>
  );
};
export default TodayTaskItem;
