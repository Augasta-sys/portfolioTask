import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] */">

        {/* Background Text */}
<div className="absolute top-3 inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">

  <h1
    className="
      font-humane
      uppercase
      text-[110px]
      sm:text-[90px]
      md:text-[140px]
      lg:text-[220px]
      leading-[1]
      tracking-tighter
      whitespace-nowrap
      text-transparent
      font-bold
      opacity-100
      scale-x-60
      [-webkit-text-stroke:2px_rgba(213,255,63,0.12)]
    "
  >
GNER UI DESIGNER UI
  </h1>

  <h1
    className="
      font-bebas neue
      uppercase
      text-[110px]
      sm:text-[90px]
      md:text-[140px]
      lg:text-[220px]
      leading-70
      whitespace-nowrap
      text-transparent
      tracking-[-5px]
      font-bold
      opacity-100
      scale-x-60
      origin-center
      [-webkit-text-stroke:2px_rgba(189,226,58,0.2)]
    "
  >
   FRONTEND DEVELOPER FRONTEND
  </h1>

</div>

      {/* Main Content */}

      <div className="relative top-5 z-10 flex flex-col items-center">

        <p className="font-general text-[rgba(213,255,63,1)]
        leading-[0] 
        text-lg
         sm:text-xl
         md:text-2xl
         lg:text-3xl mb-2">
          Hey There I'm
        </p>

      <h1
  className="
    font-humane
    font-[900]
    uppercase
    text-[rgba(213,255,63,1)]
    text-[150px]
    leading-[120%]
    lg:leading-[180%]
    tracking-[-10px]
    scale-y-130
    lg:scale-y-180
    scale-x-60
    origin-center
  "
>
  RAHUL
</h1>

        <p className="font-general text-center text-[rgba(213,255,63,1)]
       text-sm
       sm:text-base
       md:text-lg
       lg:text-xl leading-8 mt-2">
          Currently Studying Computer Science
          <br />
          and Engineering
        </p>

        <div className="flex gap-8 mt-5">

          <FaLinkedin
            className="text-[rgba(213,255,63,1)] text-3xl
            sm:text-4xl
             lg:text-5xl cursor-pointer hover:scale-110 duration-300"
          />

          <FaGithub
            className="text-[#D9FF2F] text-3xl
             sm:text-4xl
              lg:text-5xl cursor-pointer hover:scale-110 duration-300"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;