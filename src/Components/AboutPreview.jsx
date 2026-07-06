import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{
        padding: "80px 0",
      }}
    >
      {/* Container */}
      <div
        style={{
          width: "80%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Green Card */}
        <div
          className="bg-[#D9FF2F]"
          style={{
            borderRadius: "12px",
            padding: "40px 30px",
          }}
        >
          {/* Heading */}
          <h2
            className="font-bebas text-black text-center"
            style={{
              marginBottom: "25px",
              fontSize: "clamp(42px, 6vw, 64px)",
            }}
          >
            About
          </h2>

          {/* Content */}
          <div
            style={{
              width: "90%",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <p
              className="font-dm text-black text-center"
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                lineHeight: "1.8",
              }}
            >
              Hi there! I'm Rahul, a third-year Computer Science student at
              SRM Institute with a passion for crafting user-centric
              experiences. I specialize in UI/UX design, front-end
              development, and graphic design, with expertise in HTML, CSS,
              JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive
              on collaboration and bring experience in Agile Scrum
              methodologies. Beyond coding, I enjoy photography, graphic
              design, and exploring music. Let's connect and bring your
              digital visions to life.
            </p>
          </div>

          {/* Button */}
          <div
  className="flex justify-end"
  style={{
    marginTop: "35px",
  }}
>
           <Link
  to="/about"
  className="bg-[#1B2129] text-[#D9FF2F] font-dm font-semibold hover:opacity-90 transition"
  style={{
    padding: "14px 30px",
    borderRadius: "8px",
  }}
>
  More...
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;