import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import Search from "./search";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";

const statuses = [
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
  { value: "paused", label: "Paused" },
  { value: "at-risk", label: "At Risk" },
];

const tags = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "ui-ux", label: "UI/UX" },
  { value: "mobile", label: "Mobile" },
  { value: "api", label: "API" },
  { value: "database", label: "Database" },
  { value: "devops", label: "DevOps" },
  { value: "testing", label: "Testing" },
];

const ProjectFilters = ({ children }: { children: ReactNode }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [progressRange, setProgressRange] = useState<[number, number]>([0, 100]);
  const handleStatusSelection = useCallback((status: string) => {
    setSelectedStatuses((prev) => (prev.includes(status) ? prev.filter((item) => item !== status) : [...prev, status]));
  }, []);

  const handleTagsSelection = useCallback((tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  }, []);
  const handleShowProjects = () => setShowFilters((show) => !show);

  const handleClearFilters = () => {
    setProgressRange([0, 100]);
    setSelectedStatuses([]);
    setSelectedTags([]);
  };

  const hasActiveFilters = () => {
    return selectedStatuses.length > 0 || selectedTags.length > 0 || progressRange[0] > 0 || progressRange[1] < 100;
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 lg:grid-cols-[1fr_150px_100px] gap-4  justify-between">
        <Search placeholder="Search projects ..." />
        {children}

        <Button variant={hasActiveFilters() ? "default" : "outline"} className={cn(`gap-1  ${hasActiveFilters()}`)} onClick={handleShowProjects}>
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline ">Filter</span>
          {hasActiveFilters() && (
            <Badge variant="secondary" className="ml-1 rounded-sm px-1 font-normal">
              {selectedStatuses.length + selectedTags.length + (progressRange[0] > 0 || progressRange[1] < 100 ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </div>
      {showFilters && (
        <Card className="px-4">
          <CardHeader className="flex flex-row !text-sm items-center justify-between md:px-0 text-text">
            <span className="text-lg">Filters</span>
            {hasActiveFilters() && (
              <Badge className="cursor-pointer" onClick={handleClearFilters}>
                Clear filters
              </Badge>
            )}
          </CardHeader>
          <Separator />

          <CardContent className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="space-y-4">
              <h4>Status</h4>
              <div className="space-y-2 grid grid-cols-2 md:max-lg:grid-cols-4">
                {statuses.map((status) => (
                  <div key={status.value} className="flex items-center space-x-2">
                    <Checkbox className="border border-zinc-400" onCheckedChange={() => handleStatusSelection(status.value)} id={`status-${status.value}`} checked={selectedStatuses.includes(status.value)} />
                    <Label htmlFor={`status-${status.value}`} className="text-sm font-normal ">
                      {status.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4>Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge onClick={() => handleTagsSelection(tag.value)} key={tag.value} role="checkbox" variant={selectedTags.includes(tag.value) ? "default" : "outline"} className="cursor-pointer">
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2 lg:space-y-4">
              <h4>Progress</h4>
              <div className="px-2">
                <Slider defaultValue={[50]} min={0} max={100} step={5} value={progressRange} onValueChange={(value) => setProgressRange(value as [number, number])} className="py-4" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{progressRange[0]}%</span>
                  <span>{progressRange[1]}%</span>
                </div>
              </div>
            </div>
          </CardContent>

          <Separator className="my-2" />

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
export default ProjectFilters;
