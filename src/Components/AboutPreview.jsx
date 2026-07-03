import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="bg-[#121212] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Green Card */}
        <div className="bg-[#D9FF2F] rounded-lg px-8 lg:translate-x-8 md:px-14 py-10">

          {/* Heading */}
          <h2 className="font-bebas text-black text-6xl text-center leading-relaxed">
            About
          </h2>

          {/* Content */}
         <div className="w-[88%] lg:w-[82%] mx-auto mt-6">
           <p className="font-dm text-black text-[22px] leading-[1.8] text-center lg:translate-x-20 lg:text-left">
            Hi there! I'm Rahul, a third-year Computer Science student at SRM
            Institute with a passion for crafting user-centric experiences. I
            specialize in UI/UX design, front-end development, and graphic
            design, with expertise in HTML, CSS, JavaScript, React, Node.js,
            Tailwind CSS, QML, and C++. I thrive on collaboration and bring
            experience in agile scrum methodologies. Beyond coding, I enjoy
            photography, graphic design, and exploring music. Let's connect
            and bring your digital visions to life.
          </p>
          </div>

          <div
  className="flex justify-end mt-8"
  style={{ paddingRight: "40px" }}
>
  <Link
    to="/about"
    className="bg-[#1B2129] text-[#D9FF2F] font-bold text-xl rounded-lg"
    style={{
      padding: "12px 25px",
      margin: "25px",
    }}
  >
    More...
  </Link>
</div>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;