import { Link } from "react-router-dom";
import projects from "../Data/projectData";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{
        padding: "80px 0",
      }}
    >
      <div
        style={{
          width: "85%",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* Heading Bar */}

        <div
          className="bg-[#1B2129] flex justify-between items-center"
          style={{
            padding: "25px 35px",
            borderRadius: "10px",
          }}
        >
          <h2
            className="font-humane text-white font-bold text-[28px] md:text-[36px] lg:text-[42px] scale-y-125"
          >
            Recent Projects
          </h2>

          <Link
            to="/projects"
            className="font-dm text-white hover:text-[#D9FF2F] transition"
          >
            See all →
          </Link>
        </div>

        {/* Project Cards */}

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
          style={{
            gap: "30px",
            marginTop: "35px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full"
              style={{
                maxWidth: "360px",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;