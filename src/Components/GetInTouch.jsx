import { FaInstagram, FaYoutube, FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const GetInTouch = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{ padding: "0px" }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1280px",
          margin: "0 auto",
          background: "#D9FF2F",
          borderRadius: "10px",
          padding: "55px 45px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Left Side */}
          <div style={{ maxWidth: "480px" }}>
            <h2
              className="font-humane scale-y-180 font-bold tracking-[-3px]"
              style={{
                fontSize: "60px",
                color: "#121212",
                lineHeight: "100%",
              }}
            >
              Get in Touch
            </h2>

            <p
              className="font-dm"
              style={{
                color: "#121212",
                marginTop: "22px",
                fontSize: "18px",
                lineHeight: "36px",
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "35px",
            }}
          >
            <div style={{ textAlign: "right" }}>
              <p
                className="font-dm"
                style={{
                  color: "#121212",
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                Follow me on
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  color: "#121212",
                  fontSize: "34px",
                }}
              >
                <FaInstagram />
                <FaYoutube />
                <FaBehance />
                <FaLinkedinIn />
                <FaGithub />
              </div>
            </div>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                border: "2px solid #121212",
                borderRadius: "12px",
                padding: "14px 30px",
                color: "#121212",
                fontSize: "22px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Contact Me
              <LuSend />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;