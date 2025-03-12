import DataTable from "@/components/Data-Table";
import CustomSelect from "@/components/my-select";
import TasksFilters from "@/components/task-filters";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { tasks, taskSortOptions } from "@/data";
import { ITableColumnsConfig, ITask, TaskStatus } from "@/types";
import { format, isPast } from "date-fns";
import { Calendar, Edit, MoreHorizontal, Plus, Trash2, User } from "lucide-react";

// Helper function to get status badge styling
const getStatusBadge = (status: string) => {
  switch (status) {
    case "to-do":
      return { variant: "outline" as const, label: "To Do" };
    case "in-progress":
      return { variant: "default" as const, label: "In Progress" };
    case "in-review":
      return { variant: "secondary" as const, label: "In Review" };
    case "completed":
      return { variant: "success" as const, label: "Completed" };
    default:
      return { variant: "outline" as const, label: status };
  }
};

// Helper function to get priority badge styling
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "low":
      return { variant: "outline" as const, label: "Low" };
    case "medium":
      return { variant: "secondary" as const, label: "Medium" };
    case "high":
      return { variant: "default" as const, label: "High" };
    case "urgent":
      return { variant: "destructive" as const, label: "Urgent" };
    default:
      return { variant: "outline" as const, label: priority };
  }
};
export default function TasksPage() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h2>Tasks</h2>
          <span className="text-xl ml-1.5 -mb-1">( {tasks.length} )</span>
        </div>
        <Button size="sm" className="h-9">
          <Plus className="mr-1 h-4 w-4" />
          Add New Task
        </Button>
      </div>
      {/* Filters */}
      <TasksFilters>
        <CustomSelect urlKey="sort" options={taskSortOptions} placeholder="Sort By" />
      </TasksFilters>
      {/* Table View */}
      <DataTable data={tasks} columns={setTaskColumns()} />
    </section>
  );
}

function setTaskColumns() {
  //TODO: Edit/Delete (only task creator), Reassign ( only for team-lead/PM) , Status ( can do team-lead/team-member)
  const taskColumns: ITableColumnsConfig<ITask>[] = [
    {
      key: "title",
      header: "Title",
      render: (_, row) => (
        <div className="flex flex-col">
          <span className="font-medium">{row.title}</span>
          <div className="mt-1 flex flex-wrap gap-1">
            {row.tags?.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (_, row) => (row ? <Badge variant={getStatusBadge(row.status).variant}>{getStatusBadge(row.status).label}</Badge> : "N/A"),
    },
    {
      key: "priority",
      header: "Priority",
      render: (_, row) => (row ? <Badge variant={getPriorityBadge(row.priority).variant}>{getPriorityBadge(row.priority).label}</Badge> : "N/A"),
    },
    {
      key: "dueDate",
      header: "Due Date",
      render: (_, row) =>
        row && (
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className={`${isPast(row.dueDate) ? "text-destructive font-medium" : ""}`}>{format(row.dueDate, "MMM dd, yyyy")}</span>
          </div>
        ),
    },
    {
      key: "project",
      header: "Project",
      render: (_, row) => <Badge variant={getPriorityBadge(row.priority).variant}>{getPriorityBadge(row.priority).label}</Badge>,
    },
    {
      key: "assignee",
      header: "Assignee",
      render: (_, row) => (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={row.assignee.profilePhoto} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm">{row.assignee.userName}</span>
        </div>
      ),
    },
    {
      key: "action",
      header: "Actions",
      render: (_, row) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Reassign
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Change Status</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={row.status === TaskStatus["To-Do"]}>To Do</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={row.status === TaskStatus["In-Progress"]}>In Progress</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={row.status === TaskStatus["In-Review"]}>In Review</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={row.status === TaskStatus.Completed}>Completed</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return taskColumns;
}
