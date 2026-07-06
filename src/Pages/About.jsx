import Navbar from "../Components/Navbar";
import AboutHero from "../Components/AboutHero";
import Skills from "../Components/Skills";
import SocialLinks from "../Components/SocialLinks";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <AboutHero />

      {/* Skills & Social Links */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center"
        style={{
          width: "85%",
          maxWidth: "1180px",
          margin: "30px auto 60px",
          gap: "28px",
        }}
      >
        {/* Skills */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <Skills />
        </div>

        {/* Social Links */}
        <div
          style={{
            width: "380px",
    flexShrink: 0,
          }}
        >
          <SocialLinks />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;