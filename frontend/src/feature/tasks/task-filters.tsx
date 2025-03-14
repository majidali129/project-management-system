import { tasks } from "@/data";
import { Filter } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import Search from "../../components/search";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

const TasksFilters = ({ children }: { children: ReactNode }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter states
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [priorityFilter, setPriorityFilter] = useState<string[]>([]);
  const [projectFilter, setProjectFilter] = useState<string[]>([]);
  const [assigneeFilter, setAssigneeFilter] = useState<string[]>([]);
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  const handleStatusFilterSelection = useCallback((status: string) => {
    setStatusFilter((prev) => (prev.includes(status) ? prev.filter((item) => item !== status) : [...prev, status]));
  }, []);

  const handlePrioritySelection = useCallback((priority: string) => {
    setPriorityFilter((prev) => (prev.includes(priority) ? prev.filter((item) => item !== priority) : [...prev, priority]));
  }, []);

  const handleAssigneeSelection = (assignee: string) => {
    setAssigneeFilter(assigneeFilter.includes(assignee) ? assigneeFilter.filter((a) => a !== assignee) : [...assigneeFilter, assignee]);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter([]);
    setPriorityFilter([]);
    setProjectFilter([]);
    setAssigneeFilter([]);
    setTagFilter([]);
  };

  const hasActiveFilters = () => {
    return searchQuery !== "" || statusFilter.length > 0 || priorityFilter.length > 0 || projectFilter.length > 0 || assigneeFilter.length > 0 || tagFilter.length > 0;
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 lg:grid-cols-[1fr_150px_100px] gap-4  justify-between">
        <Search placeholder="Search tasks ..." />
        {children}
        <Button variant={hasActiveFilters() ? "default" : "outline"} className="gap-1" onClick={() => setShowFilters(!showFilters)}>
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">{hasActiveFilters() ? "Filters" : "Filter"}</span>
          {hasActiveFilters() && (
            <Badge variant="secondary" className="ml-1 rounded-sm px-1 font-normal">
              {statusFilter.length + priorityFilter.length + projectFilter.length + assigneeFilter.length + tagFilter.length + (searchQuery ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </div>

      {showFilters && (
        <Card className="px-4">
          <CardHeader className="flex flex-row !text-sm items-center justify-between md:px-0 text-text">
            <span className="text-lg">Filters</span>
            {hasActiveFilters() && (
              <Badge className="cursor-pointer" onClick={clearFilters}>
                Clear filters
              </Badge>
            )}
          </CardHeader>

          <Separator className="my-2" />

          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            <div className="space-y-4">
              <h4>Status</h4>
              <div className="space-y-2">
                {["to-do", "in-progress", "in-review", "completed"].map((status) => (
                  <div key={status} className="flex items-center space-x-2">
                    <Checkbox className="border border-zinc-400" onCheckedChange={() => handleStatusFilterSelection(status)} id={`status-${status}`} checked={statusFilter.includes(status)} />
                    <Label htmlFor={`status-${status}`} className="text-sm font-normal ">
                      {status}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4>Priority</h4>
              <div className="space-y-1">
                {["low", "medium", "high", "urgent"].map((priority) => (
                  <div key={priority} className="flex items-center space-x-2">
                    <Checkbox id={`priority-${priority}`} checked={priorityFilter.includes(priority)} onCheckedChange={() => handlePrioritySelection(priority)} />
                    <Label htmlFor={`priority-${priority}`} className="text-sm font-normal capitalize">
                      {priority}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4>Project</h4>
              <div className="space-y-1">
                {["Website Redesign", "E-commerce Platform"].map((project) => (
                  <div key={project} className="flex items-center space-x-2">
                    <Checkbox
                      id={`project-${project}`}
                      checked={projectFilter.includes(project)}
                      onCheckedChange={() => {
                        setProjectFilter(projectFilter.includes(project) ? projectFilter.filter((p) => p !== project) : [...projectFilter, project]);
                      }}
                    />
                    <Label htmlFor={`project-${project}`} className="text-sm font-normal">
                      {project}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4>Assignee</h4>
              <div className="space-y-1">
                {tasks
                  .map((task) => task.assignee.name)
                  .filter((name, index, self) => self.indexOf(name) === index)
                  .map((name) => (
                    <div key={name} className="flex items-center space-x-2">
                      <Checkbox id={`assignee-${name}`} checked={assigneeFilter.includes(name)} onCheckedChange={() => handleAssigneeSelection(name)} />
                      <Label htmlFor={`assignee-${name}`} className="text-sm font-normal">
                        {name}
                      </Label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4>Tags</h4>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(tasks.flatMap((task) => task.tags))).map((tag) => (
                  <Badge
                    key={tag}
                    variant={tagFilter.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => {
                      setTagFilter(tagFilter.includes(tag) ? tagFilter.filter((t) => t !== tag) : [...tagFilter, tag]);
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <Separator className="my-4" />

          <CardFooter className="md:px-4">
            <div className="text-sm text-muted-foreground md:w-2/3">{hasActiveFilters() ? "Showing filtered results" : "Showing all projects"}</div>
            <div className="flex gap-2 md:justify-end md:w-full">
              <Button variant="outline" size="sm" onClick={() => setShowFilters(false)}>
                Cancel
              </Button>
              <Button size="sm">Apply Filters</Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};
export default TasksFilters;
