import logo from "../assets/Images/logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-[#121212]"
      style={{
        padding: "50px 0",
      }}
    >
      <div
        className="bg-[#1B2129]"
        style={{
          width: "90%",
          maxWidth: "1280px",
          margin: "0 auto",
          borderRadius: "10px",
          padding: "55px 45px",
        }}
      >
        <div
          className="flex justify-between items-center"
          style={{
            gap: "40px",
          }}
        >
          {/* Left Logo */}
          <div
            style={{
              width: "35%",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "220px",
              }}
            />
          </div>

          {/* Right Content */}
          <div
            style={{
              width: "65%",
              textAlign: "right",
            }}
          >
            <h2
              className="font-humane font-bold leading-15 style-y-200 tracking-[-2px]"
              style={{
                fontSize: "50px",
                color: "#72767D",
              }}
            >
              Designing the{" "}
              <span style={{ color: "#D9FF2F" }}>
                extraordinary
              </span>
              <br />
              one{" "}
              <span style={{ color: "#D9FF2F" }}>
                pixel
              </span>{" "}
              at a time.
            </h2>

            <p
              className="font-dm"
              style={{
                color: "#72767D",
                marginTop: "18px",
                fontSize: "18px",
              }}
            >
              Portfolio v2.3 © 2024 Rahul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;