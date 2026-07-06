import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]"
    >
      {/* Background Text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <h1
          className="font-humane uppercase text-transparent font-bold whitespace-nowrap"
          style={{
            fontSize: "clamp(60px, 12vw, 220px)",
            lineHeight: "1",
            letterSpacing: "-4px",
            transform: "scaleX(0.75)",
            WebkitTextStroke: "2px rgba(213,255,63,0.12)",
          }}
        >
          UI DESIGNER UI DESIGNER
        </h1>

        <h1
          className="font-humane uppercase text-transparent font-bold whitespace-nowrap"
          style={{
            fontSize: "clamp(60px, 12vw, 220px)",
            lineHeight: "1",
            letterSpacing: "-4px",
            transform: "scaleX(0.75)",
            WebkitTextStroke: "2px rgba(213,255,63,0.12)",
          }}
        >
          FRONTEND DEVELOPER
        </h1>
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          padding: "0 24px",
        }}
      >
        <p
          className="font-general text-[#D9FF2F]"
          style={{
            fontSize: "clamp(18px,2vw,30px)",
            marginBottom: "12px",
          }}
        >
          Hey There I'm
        </p>

        <h1
          className="font-humane uppercase text-[#D9FF2F]"
          style={{
            fontSize: "clamp(100px,18vw,240px)",
            lineHeight: "0.9",
            letterSpacing: "-8px",
            transform: "scaleX(0.75) scaleY(1.15)",
          }}
        >
          RAHUL
        </h1>

        <p
          className="font-general text-[#D9FF2F]"
          style={{
            fontSize: "clamp(14px,2vw,22px)",
            lineHeight: "32px",
            marginTop: "18px",
          }}
        >
          Currently Studying Computer Science
          <br />
          and Engineering
        </p>

        {/* Social Icons */}
        <div
          className="flex"
          style={{
            gap: "28px",
            marginTop: "32px",
          }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-[#D9FF2F] hover:scale-110 transition duration-300"
              style={{
                fontSize: "clamp(34px,4vw,52px)",
              }}
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-[#D9FF2F] hover:scale-110 transition duration-300"
              style={{
                fontSize: "clamp(34px,4vw,52px)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;