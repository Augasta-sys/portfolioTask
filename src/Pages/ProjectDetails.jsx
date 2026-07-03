import { useParams } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import projectData from "../Data/projectData";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectData.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return <h1 className="text-white text-center pt-40">Project Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <section
        className="bg-[#121212] text-white"
        style={{
          paddingTop: "130px",
          paddingBottom: "70px",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >

          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left */}
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl"
              />
            </div>

            {/* Right */}
            <div>

              <h1 className="font-dm text-6xl font-bold">
                {project.title}
              </h1>

              <p
                className="font-dm font-semibold"
                style={{
                  color: "#D9FF2F",
                  fontSize: "28px",
                  marginTop: "12px",
                }}
              >
                {project.category}
              </p>

              <p
                className="text-gray-400"
                style={{
                  marginTop: "28px",
                  lineHeight: "40px",
                  fontSize: "24px",
                }}
              >
                {project.description}
              </p>

              {/* Tech Stack */}

              <h2
                className="font-dm font-bold"
                style={{
                  fontSize: "38px",
                  marginTop: "35px",
                  marginBottom: "20px",
                }}
              >
                Tech Stack
              </h2>

              <div className="flex gap-4">

                {project.technologies?.map((icon, index) => (

                  <div
                    key={index}
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "10px",
                      background: "#2A313B",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={icon}
                      alt=""
                      style={{
                        width: "38px",
                        height: "38px",
                      }}
                    />
                  </div>

                ))}

              </div>

              {/* Buttons */}

              <div
                className="flex gap-5"
                style={{
                  marginTop: "35px",
                }}
              >

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 font-bold"
                  style={{
                    width: "230px",
                    height: "68px",
                    background: "#D9FF2F",
                    color: "#111",
                    borderRadius: "10px",
                    fontSize: "28px",
                  }}
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 font-bold"
                  style={{
                    width: "230px",
                    height: "68px",
                    background: "#D9FF2F",
                    color: "#111",
                    borderRadius: "10px",
                    fontSize: "28px",
                  }}
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>
    
    {/* Main Features */}

<div
  className="bg-[#1B2129]"
  style={{
    marginTop: "70px",
    borderRadius: "10px",
    padding: "40px",
  }}
>
  <h2
    className="font-dm font-bold"
    style={{
      color: "#D9FF2F",
      fontSize: "48px",
      marginBottom: "35px",
    }}
  >
    Main Features
  </h2>

  {project.features?.map((feature, index) => (
    <div
      key={index}
      style={{
        marginBottom: "35px",
      }}
    >
      <h3
        className="font-dm font-bold text-white"
        style={{
          fontSize: "30px",
          marginBottom: "12px",
        }}
      >
        • {feature.title}:
      </h3>

      <p
        className="text-gray-400"
        style={{
          fontSize: "22px",
          lineHeight: "38px",
          paddingLeft: "28px",
        }}
      >
        {feature.description}
      </p>
    </div>
  ))}
</div>

        </div>
      </section>

      <Footer />

    </>
  );
};

export default ProjectDetails;