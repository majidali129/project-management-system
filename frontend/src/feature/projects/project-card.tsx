import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Project, UserRole } from "@/types";
import { differenceInDays, format } from "date-fns";
import { AlertCircle, Calendar, CheckCircle, Clock, Edit, MoreVertical, PauseCircle, Trash2, Users } from "lucide-react";
import { useUser } from "../authentication/use-user";

interface ProjectCardProps {
  project: Project;
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
  const { session } = useUser();

  const statusBadge = getStatusBadge(project.status);
  const isOwnToProjectOrPm = project.createdBy === session?.userName && session.role === UserRole["Project-Manager"];
  return (
    <TooltipProvider>
      <Card className="group relative transition-all hover:shadow-md dark:hover:shadow-primary/5">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-1">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-tight line-clamp-1">{project.title}</h3>
              <p className="text-[15px] text-muted-foreground line-clamp-2">{project.description}</p>
            </div>
            <div className="">
              {isOwnToProjectOrPm && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
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
                    {project.isPersonal && (
                      <DropdownMenuItem>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Mark as completed
                      </DropdownMenuItem>
                    )}
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

        <CardContent className="min-h-24">
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

              {project.tags &&
                project.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>
                  {format(project.startDate, "MM/dd/yyyy")} - {format(project.endDate, "MM/dd/yyyy")}
                </span>
              </div>

              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{differenceInDays(project.endDate, new Date())} days left</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex w-full items-center justify-between">
            {project.assignedTeam && (
              <div className="hidden md:flex -space-x-2">
                {project.assignedTeam.members.slice(0, 5).map((member) => (
                  <Tooltip key={member._id}>
                    <TooltipTrigger asChild>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        profilePhoto <AvatarFallback className="text-xs">{member.userName[0]}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>{member.userName}</TooltipContent>
                  </Tooltip>
                ))}

                {project.assignedTeam.members.length > 5 ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar className="flex h-8 w-8 items-center justify-center border-2 border-background bg-muted text-xs">+{project.assignedTeam.members.length - 5}</Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {project.assignedTeam.members
                        .slice(5)
                        .map((member) => member.userName)
                        .join(", ")}
                    </TooltipContent>
                  </Tooltip>
                ) : null}
              </div>
            )}

            <div className="flex gap-2">
              {isOwnToProjectOrPm && (
                <Button variant="outline" size="sm" className="max-md:h-9">
                  <Users className="mr-2 h-4 w-4" />
                  Assign
                </Button>
              )}
              <Button size="sm">View Details</Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}
