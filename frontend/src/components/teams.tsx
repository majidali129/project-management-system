import DataTable from "@/components/Data-Table";
import Pagination from "@/components/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { teams } from "@/data";
import { ITableColumnsConfig, ITeam } from "@/types";
import { Edit, MoreHorizontal, Plus, Trash2, User } from "lucide-react";

const Teams = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h2>Teams</h2>
          <span className="text-xl ml-1.5 -mb-1">( {teams.length} )</span>
        </div>
        <Button size="sm" className="h-9">
          <Plus className="mr-1 h-4 w-4" />
          Add New Team
        </Button>
      </div>
      {/* Table View */}
      <DataTable data={teams} columns={setTeamColumns()} />
      <Pagination count={100} />
    </section>
  );
};
export default Teams;

function setTeamColumns() {
  const teamColumns: ITableColumnsConfig<ITeam>[] = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "domain",
      header: "Domain",
    },
    {
      key: "teamLead",
      header: "Team Lead",
      render: (_, row) => (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={row.teamLead.profilePhoto} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm">{row.teamLead.userName}</span>
        </div>
      ),
    },
    {
      key: "project",
      header: "Project",
      render: (_value, row) => (
        <div className="flex flex-col gap-1">
          <Badge variant={"outline"} className="text-sm">
            {row.project.title}
          </Badge>
        </div>
      ),
    },
    {
      key: "members",
      header: "Members",
      render: (_value, row) => <span className="">{row.members.length}</span>,
    },
    {
      key: "action",
      header: "Actions",
      render: () => (
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
              Add Member
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return teamColumns;
}
