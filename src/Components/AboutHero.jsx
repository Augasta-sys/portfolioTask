import rahulImg from "../assets/Images/rahulImg.png";
import { FaFileAlt } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{
        paddingTop: "130px",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* ABOUT Heading */}

        <div
          className="bg-[#1B2129]"
          style={{
            borderRadius: "10px",
            padding: "28px 0",
          }}
        >
          <h1
            className="font-humane text-white text-center scale-y-150 font-bold uppercase
                       text-[60px] md:text-[90px] lg:text-[105px]"
            style={{
              lineHeight: "90%",
            }}
          >
            ABOUT
          </h1>
        </div>

        {/* About Card */}

        <div
          className="bg-[#1B2129] flex flex-col lg:flex-row"
          style={{
            marginTop: "28px",
            padding: "42px",
            gap: "38px",
            borderRadius: "10px",
          }}
        >
          {/* Left Image */}

          <div
            className="w-full lg:w-[38%]"
            style={{
              width: "100%",
            }}
          >
            <img
              src={rahulImg}
              alt="Rahul"
              className="w-full"
              style={{
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Right Content */}

          <div className="w-full lg:w-[62%]">
            <p
              className="font-dm text-white text-[16px] md:text-[18px] lg:text-[20px]"
              style={{
                lineHeight: "38px",
              }}
            >
              I'm a Computer Science student at{" "}
              <span style={{ color: "#D9FF2F" }}>
                SRM Institute of Science and Technology.
              </span>{" "}
              My passion lies in building user-friendly solutions that enhance
              overall user experiences.

              I am currently focused on{" "}
              <span style={{ color: "#D9FF2F" }}>
                React Native, Expo, Firebase and React
              </span>
              , leveraging these technologies to create responsive and
              functional applications.

              One of my ongoing projects is Rescue Paws, a mobile app designed
              to facilitate the rescue and adoption of stray and pet dogs. The
              app will soon be published on the{" "}
              <span style={{ color: "#D9FF2F" }}>
                Play Store and App Store
              </span>
              , and it incorporates AI-driven features to guide users through
              the adoption process.

              In addition to app development, I have led the design and
              development of platforms like the GitHub Community SRM website,
              which serves as an all-in-one platform for the community.

              I have also organized and managed events such as hackathons and
              workshops, mentoring others in UI/UX and graphic design.

              I thrive in{" "}
              <span style={{ color: "#D9FF2F" }}>
                Agile Scrum environments
              </span>{" "}
              and believe collaboration and teamwork are essential to
              delivering successful projects.

              I'm always eager to work on impactful projects that challenge me
              to grow while contributing to meaningful outcomes.

              So, whether you're looking for a{" "}
              <span style={{ color: "#D9FF2F" }}>
                dedicated developer, creative designer, or collaborative team
                member,
              </span>{" "}
              I'm here to help bring ideas to life. Let's connect and create
              innovative solutions together!
            </p>

            <button
              className="flex items-center justify-center md:justify-start font-dm font-semibold"
              style={{
                marginTop: "32px",
                padding: "14px 24px",
                gap: "10px",
                borderRadius: "8px",
                border: "2px solid #D9FF2F",
                background: "transparent",
                color: "#D9FF2F",
                cursor: "pointer",
              }}
            >
              <FaFileAlt />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;