import List from "@/components/list";
import Loader from "@/components/loader";
import CustomSelect from "@/components/my-select";
import Pagination from "@/components/pagination";
import ReusableDialog from "@/components/reusable-dialog";
import { Button } from "@/components/ui/button";
import { projectSortOptions } from "@/data";
import ProjectCard from "@/feature/projects/project-card";
import ProjectFilters from "@/feature/projects/project-filters";
import { Plus } from "lucide-react";
import { useState } from "react";
import CreateProjectForm from "./create-project-form";
import { useProjects } from "./use-projects";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const { projects, loadingProjects } = useProjects();

  if (loadingProjects) return <Loader />;
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2>Projects</h2>
          <span className="text-xl ml-1.5 -mb-1">( {projects.length} )</span>
        </div>
        <Button size="sm" className="h-9" onClick={() => setOpen(true)}>
          <Plus className="mr-1 h-4 w-4" />
          Add New Project
        </Button>
        {/* <Button size="sm" className="h-9" disabled={seedingDB} onClick={seedDB}>
          <Plus className="mr-1 h-4 w-4" />
          {seedingDB ? "Seeding Projects" : "Seed Projects"}
        </Button> */}
      </div>
      <ReusableDialog open={open} setOpen={setOpen}>
        <CreateProjectForm close={setOpen} />
      </ReusableDialog>

      {/* <ProjectFilters /> */}
      <ProjectFilters>
        {/* JUST TO AVOID CHILD's RE-RENDER ON FILTER CHANGE */}
        <CustomSelect urlKey="sort" options={projectSortOptions} placeholder="Sort By" />
      </ProjectFilters>
      {/* Projects List */}
      <List className="sm:grid-cols-1 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </List>

      <Pagination count={30} />
    </section>
  );
};
export default Projects;
