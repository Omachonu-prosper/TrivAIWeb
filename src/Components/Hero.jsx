import Image from "next/image";
import heroImage from "../assets/hero_abstract_bg.png";
import FilledButton from "./Buttons/FIlledButton";
import OutlinedButton from "./Buttons/OutlinedButton";
import browserDark from "../assets/browser_dark.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col">
      <Image
        src={heroImage}
        className="lg:w-[75%] z-0 inset-0 absolute left-[50%] lg:translate-y-0 translate-y-[120%] -translate-x-[50%]"
      />

      <div className="z-30 flex flex-col lg:gap-[36px] gap-[20px] lg:w-[830px] mx-auto lg:mt-[70px] mt-16">
        <div className="flex flex-col items-center font-nunito font-[900] text-4xl lg:text-[50px] text-[#fefefe]">
          <h2 className="text-center">
            Unleash <span className="gradient-text">Your Trivia Genius </span>{" "}
            with
          </h2>
          <h2 className="text-center">AI-Powered Challenges!</h2>
        </div>
        <div className="text-[#fefefe] font-nunito">
          <p className="font-[400] text-[20px] text-center p-2">
            Join the ultimate trivia showdown and compete against players
            worldwide. Experience smart, fun, and dynamic quizzes powered by
            cutting-edge AI. Are you ready to become the trivia champion?
          </p>
        </div>
        <div className="flex w-full justify-center gap-[20px]">
          <FilledButton text={"Play Now"} />
          <OutlinedButton text={"Learn More"} />
        </div>
      </div>

      <div className="bg-[#d9d9d9] mt-[40px] px-2 py-5 lg:px-32 lg:py-10 z-10 bg-opacity-20 blur-bottom relative overflow-hidden">
        <Image src={browserDark} className="opacity-100"/>
      </div>
    </div>
  );
};

export default Hero;
