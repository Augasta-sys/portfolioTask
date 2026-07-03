const ContactHero = () => {
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
        {/* Contact Heading */}

        <div
          className="bg-[#1B2129]"
          style={{
            padding: "30px 0",
            borderRadius: "10px",
          }}
        >
          <h1
            className="font-humane text-white text-center scale-y-180 font-bold uppercase
                       text-[30px] md:text-[40px] lg:text-[50px]"
            style={{
              lineHeight: "90%",
            }}
          >
            CONTACT
          </h1>
        </div>

        {/* Contact Card */}

        <div
          className="bg-[#D9FF2F] flex flex-col lg:flex-row"
          style={{
            marginTop: "28px",
            padding: "50px",
            gap: "60px",
            borderRadius: "10px",
          }}
        >
          {/* Left */}

          <div className="w-full lg:w-1/2">
            <h2
              className="font-humane text-[#1B2129] font-bold scale-y-180 tracking-[-4px]
                         text-[50px] md:text-[60px]"
              style={{
                lineHeight: "90%",
              }}
            >
              Get In Touch
            </h2>

            <p
              className="font-dm text-[#1B2129]
                         text-xl"
              style={{
                marginTop: "25px",
                lineHeight: "45px",
                maxWidth: "420px",
              }}
            >
              If you are interested in my work or want to
              provide feedback about this website,
              I am open to exchanging ideas.
            </p>
          </div>

          {/* Right */}

          <div className="w-full lg:w-1/2">

            {/* Name */}

            <label className="font-dm font-bold text-[#1B2129] text-2xl">
              Name
            </label>

            <input
              type="text"
              className="w-full bg-white outline-none"
              style={{
                marginTop: "10px",
                height: "55px",
                borderRadius: "8px",
                padding: "0 18px",
              }}
            />

            {/* Email */}

            <label
              className="font-dm font-bold text-[#1B2129] text-2xl block"
              style={{
                marginTop: "22px",
              }}
            >
              Email
            </label>

            <input
              type="email"
              className="w-full bg-white outline-none"
              style={{
                marginTop: "10px",
                height: "55px",
                borderRadius: "8px",
                padding: "0 18px",
              }}
            />

            {/* Message */}

            <label
              className="font-dm font-bold text-[#1B2129] text-2xl block"
              style={{
                marginTop: "22px",
              }}
            >
              Message
            </label>

            <textarea
              className="w-full bg-white resize-none outline-none"
              style={{
                marginTop: "10px",
                height: "220px",
                borderRadius: "8px",
                padding: "18px",
              }}
            />

            {/* Button */}

            <button
              className="w-full bg-[#1B2129] text-[#D9FF2F]
                         font-dm font-semibold text-2xl
                         hover:opacity-90 transition"
              style={{
                marginTop: "20px",
                height: "55px",
                borderRadius: "8px",
              }}
            >
              Send
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;