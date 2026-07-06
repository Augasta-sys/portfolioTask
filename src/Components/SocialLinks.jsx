import {
  FaInstagram,
  FaYoutube,
  FaBehance,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
<div
  className="bg-[#1B2129] flex flex-row flex-wrap justify-center items-center"
  style={{
    width: "100%",
    borderRadius: "10px",
    padding: "28px",
    gap: "20px",
  }}
>
      <FaInstagram
        className="text-[#D9FF2F] text-[34px] sm:text-[38px] md:text-[44px] cursor-pointer hover:scale-110 transition duration-300"
      />

      <FaYoutube
        className="text-[#D9FF2F] text-[34px] sm:text-[38px] md:text-[44px] cursor-pointer hover:scale-110 transition duration-300"
      />

      <FaBehance
        className="text-[#D9FF2F] text-[34px] sm:text-[38px] md:text-[44px] cursor-pointer hover:scale-110 transition duration-300"
      />

      <FaLinkedinIn
        className="text-[#D9FF2F] text-[34px] sm:text-[38px] md:text-[44px] cursor-pointer hover:scale-110 transition duration-300"
      />

      <FaGithub
        className="text-[#D9FF2F] text-[34px] sm:text-[38px] md:text-[44px] cursor-pointer hover:scale-110 transition duration-300"
      />
    </div>
  );
};

export default SocialLinks;