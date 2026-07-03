import projectData from "../Data/projectData";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{
        paddingBottom: "60px",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          width: "90%",
          maxWidth: "1280px",
          margin: "0 auto",
          gap: "28px",
        }}
      >
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;