import { Link } from "react-router-dom";
import projects from "../Data/projectData";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <section className="bg-[#121212]" style={{ padding: "80px 24px" }}>

      <div className="max-w-7xl mx-auto">

        {/* Heading Bar */}
        <div
          className="bg-[#1B2129] rounded-lg flex justify-between items-center"
          style={{ padding: "25px 35px" }}
        >
          <h2 className="font-humane font-bold text-white text-[40px] leading-none tracking-[-2px] scale-y-150">
           Recent Projects
             </h2>
          <Link
            to="/projects"
            className="font-dm text-white hover:text-[#D9FF2F]"
          >
            See all →
          </Link>
        </div>

        {/* Cards */}
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
          style={{
            gap: "30px",
            marginTop: "35px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentProjects;