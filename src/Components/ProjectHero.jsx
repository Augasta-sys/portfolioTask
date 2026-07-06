const ProjectHero = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{
        paddingTop: "130px",
        paddingBottom: "30px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}

        <div
          className="bg-[#1B2129]"
          style={{
            padding: "30px 0",
            borderRadius: "10px",
          }}
        >
          <h1
            className="font-humane font-bold scale-y-150 text-white text-center uppercase
                       text-[50px] md:text-[100px] lg:text-[50px]"
            style={{
              lineHeight: "88%",
              letterSpacing: "1px",
            }}
          >
            PROJECTS
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;