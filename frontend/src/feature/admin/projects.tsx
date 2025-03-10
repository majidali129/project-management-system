import List from "@/components/list";
import CustomSelect from "@/components/my-select";
import ProjectCard from "@/components/project-card";
import ProjectFilters from "@/components/project-filters";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { projectSortOptions } from "@/data";
import { useState } from "react";

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
  const [showProjects, setShowProjects] = useState(false);
  const handleShowProjects = () => setShowProjects((show) => !show);
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid items-center grid-cols-1 lg:grid-cols-[1fr_100px_100px] gap-4  justify-between">
        <Search placeholder="Search projects ..." />

        <CustomSelect urlKey="sort" options={projectSortOptions} placeholder="Sort By" />
        <Button onClick={handleShowProjects}>Apply Filters</Button>
        {/* <ProjectFilters /> */}
      </div>
      {showProjects && <ProjectFilters onCancel={() => setShowProjects(false)} />}
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
