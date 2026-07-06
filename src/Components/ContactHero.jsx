import { useState } from "react";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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
          width: "85%",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}

        <div
          className="bg-[#1B2129]"
          style={{
            padding: "30px 0",
            borderRadius: "10px",
          }}
        >
          <h1
            className="font-humane text-white text-center uppercase font-bold
            text-[40px] md:text-[70px] lg:text-[90px] scale-y-125"
          >
            CONTACT
          </h1>
        </div>

        {/* Contact Card */}

        <div
          className="bg-[#D9FF2F] flex flex-col lg:flex-row items-center"
          style={{
            marginTop: "28px",
            padding: "40px",
            gap: "50px",
            borderRadius: "10px",
          }}
        >
          {/* Left */}

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2
              className="font-humane text-[#121212] font-bold
              text-[50px] md:text-[65px] lg:text-[80px] scale-y-110"
            >
              Get In Touch
            </h2>

            <p
              className="font-dm text-[#121212]
              text-[18px] md:text-[20px]"
              style={{
                marginTop: "20px",
                lineHeight: "38px",
              }}
            >
              If you are interested in my work or want to
              provide feedback about this website,
              I am open to exchanging ideas.
            </p>
          </div>

          {/* Right */}

        <form
  onSubmit={handleSubmit}
  className="w-full lg:w-1/2"
  style={{
    position: "relative",
  }}
>

            {/* Name */}

            <label className="font-dm font-bold text-[#121212] text-xl">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white text-black outline-none"
              style={{
                marginTop: "10px",
                padding: "15px",
                borderRadius: "8px",
              }}
            />

            {/* Email */}

            <label
              className="font-dm font-bold text-[#121212] text-xl block"
              style={{
                marginTop: "20px",
              }}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white text-black outline-none"
              style={{
                marginTop: "10px",
                padding: "15px",
                borderRadius: "8px",
              }}
            />

            {/* Message */}

            <label
              className="font-dm font-bold text-[#121212] text-xl block"
              style={{
                marginTop: "20px",
              }}
            >
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white text-black resize-none outline-none"
              style={{
                marginTop: "10px",
                padding: "15px",
                height: "180px",
                borderRadius: "8px",
              }}
            />

            {/* Button */}

            <button
              type="submit"
              className="w-full bg-[#121212] text-[#D9FF2F]
              font-dm font-semibold text-xl hover:opacity-90 transition"
              style={{
                marginTop: "25px",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;