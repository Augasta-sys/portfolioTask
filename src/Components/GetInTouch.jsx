import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaBehance,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const GetInTouch = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{
        padding: "60px 0",
      }}
    >
      <div
        style={{
          width: "85%",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          className="bg-[#D9FF2F] flex flex-col lg:flex-row justify-between items-center"
          style={{
            borderRadius: "10px",
            padding: "45px 35px",
            gap: "40px",
          }}
        >
          {/* Left Side */}

          <div className="text-center lg:text-left">
            <h2
              className="font-humane font-bold text-[#121212] scale-y-125
              text-[48px] md:text-[60px] lg:text-[70px]"
            >
              Get in Touch
            </h2>

            <p
              className="font-dm text-[#121212]
              text-[16px] md:text-[18px] lg:text-[20px]"
              style={{
                marginTop: "20px",
                lineHeight: "34px",
              }}
            >
              If you are interested in my work or want
              <br />
              to provide feedback about this website,
              <br />
              I am open to exchanging ideas.
            </p>
          </div>

          {/* Right Side */}

          <div
            className="flex flex-col items-center lg:items-end"
            style={{
              gap: "30px",
            }}
          >
            <div className="text-center lg:text-right">
              <p
                className="font-dm font-bold text-[#121212]
                text-[20px] md:text-[22px] lg:text-[24px]"
                style={{
                  marginBottom: "15px",
                }}
              >
                Follow me on
              </p>

              <div
                className="flex justify-center lg:justify-end"
                style={{
                  gap: "18px",
                }}
              >
                <FaInstagram className="text-[#121212] text-3xl hover:scale-110 transition" />
                <FaYoutube className="text-[#121212] text-3xl hover:scale-110 transition" />
                <FaBehance className="text-[#121212] text-3xl hover:scale-110 transition" />
                <FaLinkedinIn className="text-[#121212] text-3xl hover:scale-110 transition" />
                <FaGithub className="text-[#121212] text-3xl hover:scale-110 transition" />
              </div>
            </div>

            {/* Contact Button */}

            <Link
  to="/contact"
  className="flex items-center justify-center font-dm font-bold text-[#121212] hover:bg-[#121212] hover:text-white transition duration-300"
  style={{
    padding: "14px 30px",
    gap: "10px",
    borderRadius: "10px",
    border: "2px solid #121212",
  }}
>
  Contact Me
  <LuSend />
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;