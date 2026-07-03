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
      className="bg-[#1B2129] flex justify-center items-center"
      style={{
        width: "30%",
        borderRadius: "10px",
        gap: "18px",
      }}
    >
      <FaInstagram
        color="#D9FF2F"
        size={44}
      />

      <FaYoutube
        color="#D9FF2F"
        size={44}
      />

      <FaBehance
        color="#D9FF2F"
        size={44}
      />

      <FaLinkedinIn
        color="#D9FF2F"
        size={44}
      />

      <FaGithub
        color="#D9FF2F"
        size={44}
      />
    </div>
  );
};

export default SocialLinks;