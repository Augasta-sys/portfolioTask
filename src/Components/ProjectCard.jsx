import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block"
    >
      <div className="bg-[#1B2129] rounded-xl overflow-hidden hover:scale-105 transition duration-300">

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        {/* Content */}
        <div style={{ padding: "20px" }}>

          <h3 className="font-dm text-3xl font-bold">
            {project.title}
          </h3>

          <p className="text-[#D9FF2F] mt-1">
            {project.category}
          </p>

          <p className="text-gray-400 mt-4 leading-7">
            {project.description}
          </p>

          {/* Technology Icons */}
          <div
            className="flex"
            style={{
              gap: "12px",
              marginTop: "20px",
              paddingLeft: "12px",
            }}
          >
            {project.technologies?.map((icon, index) => (
              <div
                key={index}
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "8px",
                  backgroundColor: "#2A313B",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={icon}
                  alt="Technology"
                  style={{
                    width: "26px",
                    height: "26px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;