import html from "../assets/Icons/htmlIcon.png";
import node from "../assets/Icons/nodeIcon.png";
import css from "../assets/Icons/cssIcon.png";
import tailwind from "../assets/Icons/tailwindIcon.png";
import cpp from "../assets/Icons/cppIcon.png";
import premiere from "../assets/Icons/premiereIcon.png";
import react from "../assets/Icons/reactIcon.png";
import figma from "../assets/Icons/figmaIcon.png";
import mui from "../assets/Icons/muiIcon.png";
import qt from "../assets/Icons/qtIcon.png";

const icons = [
  html,
  node,
  css,
  tailwind,
  cpp,
  premiere,
  react,
  figma,
  mui,
  qt,
];

const Skills = () => {
  return (
    <div
      className="bg-[#1B2129]"
      style={{
        width: "100%",
        padding: "28px",
        borderRadius: "10px",
      }}
    >
      {/* Heading */}

      <h2 className="font-dm text-white font-bold text-3xl md:text-4xl">
        Skills
      </h2>

      {/* Icons */}

      <div
        className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between"
        style={{
          marginTop: "30px",
          gap: "24px",
        }}
      >
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Skill ${index + 1}`}
            className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] lg:w-[54px] lg:h-[54px] flex-shrink-0 hover:scale-110 transition duration-300"
            style={{
              objectFit: "contain",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
