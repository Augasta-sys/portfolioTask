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
        width: "68%",
        borderRadius: "10px",
        padding: "28px",
      }}
    >
      <h2 className="font-dm text-white text-4xl font-bold">
        Skills
      </h2>

    <div
  className="flex justify-between items-center"
  style={{
    marginTop: "30px",
  }}
>
  {/* Icons */}
  <div
    className="flex items-center"
    style={{
      gap: "26px",
    }}
  >
    {icons.map((icon, index) => (
      <img
        key={index}
        src={icon}
        alt=""
        style={{
          width: "54px",
          height: "54px",
          objectFit: "contain",
        }}
      />
    ))}
  </div>

</div>
    </div>
  );
};

export default Skills;