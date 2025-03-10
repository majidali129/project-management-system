import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle, Calendar, CheckCircle, Clock, Edit, GripVertical, MoreHorizontal, PauseCircle, Star, StarOff, Trash2, Users } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    createdBy: string;
    progress: number;
    status: "active" | "completed" | "paused" | "at-risk";
    startDate: string;
    endDate: string;
    team: {
      id: string;
      name: string;
      avatar?: string;
      initials: string;
    }[];
    tags: string[];
    isStarred?: boolean;
  };
}
// Status badge styling
const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return {
        variant: "default" as const,
        icon: <CheckCircle className="h-3 w-3 mr-1" />,
        label: "Active",
      };
    case "completed":
      return {
        variant: "success" as const,
        icon: <CheckCircle className="h-3 w-3 mr-1" />,
        label: "Completed",
      };
    case "paused":
      return {
        variant: "secondary" as const,
        icon: <PauseCircle className="h-3 w-3 mr-1" />,
        label: "Paused",
      };
    case "at-risk":
      return {
        variant: "destructive" as const,
        icon: <AlertCircle className="h-3 w-3 mr-1" />,
        label: "At Risk",
      };
    default:
      return { variant: "outline" as const, icon: null, label: status };
  }
};
export default function ProjectCard({ project }: ProjectCardProps) {
  const [isStarred, setIsStarred] = useState(project.isStarred || false);
  const currentUser = { username: "majidali129", role: "pm" };

  const statusBadge = getStatusBadge(project.status);
  const isOwnToProject = project.createdBy === currentUser.username && currentUser.role === "pm";
  return (
    <TooltipProvider>
      <Card className="group relative transition-all hover:shadow-md dark:hover:shadow-primary/5">
        {/* Drag handle - visible on hover */}
        <div className="absolute left-1 top-1/2 -translate-y-1/2 cursor-grab opacity-0 transition-opacity group-hover:opacity-100" aria-label="Drag to reorder">
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-tight line-clamp-1">{project.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" onClick={() => setIsStarred(!isStarred)}>
                    {isStarred ? <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> : <StarOff className="h-4 w-4" />}
                    <span className="sr-only">{isStarred ? "Unstar project" : "Star project"}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isStarred ? "Remove from favorites" : "Add to favorites"}</TooltipContent>
              </Tooltip>

              {isOwnToProject && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit project
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      Manage team
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Mark as completed
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <PauseCircle className="mr-2 h-4 w-4" />
                      Pause project
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete project
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant={statusBadge.variant} className="flex items-center">
                {statusBadge.icon}
                {statusBadge.label}
              </Badge>

              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>
                  {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex w-full items-center justify-between">
            <div className="hidden md:flex -space-x-2">
              {project.team.slice(0, 5).map((member) => (
                <Tooltip key={member.id}>
                  <TooltipTrigger asChild>
                    <Avatar className="h-8 w-8 border-2 border-background">
                      {member.avatar ? <AvatarImage src={member.avatar} alt={member.name} /> : null}
                      <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>{member.name}</TooltipContent>
                </Tooltip>
              ))}

              {project.team.length > 5 ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="flex h-8 w-8 items-center justify-center border-2 border-background bg-muted text-xs">+{project.team.length - 5}</Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {project.team
                      .slice(5)
                      .map((member) => member.name)
                      .join(", ")}
                  </TooltipContent>
                </Tooltip>
              ) : null}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="max-md:h-9">
                <Users className="mr-2 h-4 w-4" />
                Assign
              </Button>
              <Button size="sm">View Details</Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}
