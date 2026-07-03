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

      <div
        className="flex justify-between"
        style={{
          width: "90%",
          maxWidth: "1280px",
          margin: "25px auto 0",
          gap: "25px",
        }}
      >
        <Skills />
        <SocialLinks />
      </div>

      <Footer />
    </>
  );
};

export default About;