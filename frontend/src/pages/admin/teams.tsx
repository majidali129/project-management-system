import AdminTeams from "@/feature/admin/teams";

const AdminTeamsPage = () => {
  return <AdminTeams />;
};
export default AdminTeamsPage;

/*

 <div className="flex items-center gap-2">
            {selectedTasks.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <span>Actions</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Bulk Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark as Completed
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Reassign Tasks
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Tag className="mr-2 h-4 w-4" />
                    Add Tags
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Tasks
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

*/
