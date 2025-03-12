import List from "@/components/list";
import CustomSelect from "@/components/my-select";
import ProjectCard from "@/components/project-card";
import ProjectFilters from "@/components/project-filters";
import { Button } from "@/components/ui/button";
import { projectSortOptions } from "@/data";
import { Plus } from "lucide-react";

const sampleProject = {
  id: "proj-1",
  createdBy: "majidali129",
  name: "E-Commerce Platform Redesign",
  description: "Modernize the existing e-commerce platform with new UI/UX and improved performance",
  progress: 68,
  status: "completed" as const,
  startDate: "2023-09-15",
  endDate: "2023-12-20",
  team: [
    {
      id: "user1",
      name: "Alex Morgan",
      initials: "AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "user2",
      name: "Jamie Chen",
      initials: "JC",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "user3",
      name: "Taylor Swift",
      initials: "TS",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ],
  tags: ["Frontend", "UI/UX", "React"],
  isStarred: true,
};

const Projects = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2>Projects</h2>
          <span className="text-xl ml-1.5 -mb-1">( 24 )</span>
        </div>
        <Button size="sm" className="h-9">
          <Plus className="mr-1 h-4 w-4" />
          Add New Project
        </Button>
      </div>
      {/* <ProjectFilters /> */}
      <ProjectFilters>
        {/* JUST TO AVOID CHILD's RE-RENDER ON FILTER CHANGE */}
        <CustomSelect urlKey="sort" options={projectSortOptions} placeholder="Sort By" />
      </ProjectFilters>
      {/* Projects List */}
      <List className="sm:grid-cols-1">
        <ProjectCard project={sampleProject} />
        <ProjectCard project={sampleProject} />
        <ProjectCard project={sampleProject} />
      </List>
    </section>
  );
};
export default Projects;
