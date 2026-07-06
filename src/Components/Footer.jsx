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
          width: "85%",
          maxWidth: "1180px",
          margin: "0 auto",
          borderRadius: "10px",
          padding: "45px 35px",
        }}
      >
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          style={{
            gap: "40px",
          }}
        >
          {/* Logo */}

          <div
            className="flex justify-center lg:justify-start"
            style={{
              width: "100%",
              maxWidth: "320px",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-[180px] sm:w-[200px] lg:w-[220px]"
            />
          </div>

          {/* Right Content */}

          <div className="text-center lg:text-right">
            <h2
              className="font-humane font-bold text-[#72767D]
              text-[34px] sm:text-[42px] md:text-[48px] lg:text-[56px]
              scale-y-110"
              style={{
                lineHeight: "1.1",
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
              className="font-dm text-[#72767D]
              text-[15px] sm:text-[16px] md:text-[18px]"
              style={{
                marginTop: "18px",
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