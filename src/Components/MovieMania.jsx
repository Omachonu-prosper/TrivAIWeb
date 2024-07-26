import React from "react";
import FilledButton from "./Buttons/FIlledButton";
import Image from "next/image";
import movieManiaImage from "../assets/movie_mania_bg.png";

// images
import playButton from "../assets/Play.png";

const MovieMania = () => {
  return (
    <section className="mt-8 lg:mt-[100px] w-[88%] container mx-auto flex font-nunito text-[#fefefe] mb-[100px]">
      <div className="flex flex-col items-center justify-center w-full text-white lg:h-[300px] h-[350px] border-2 custom-border rounded-xl relative overflow-hidden">
        <Image src={movieManiaImage} className="absolute z-0 scale-150 lg:scale-100" />
        <div className="z-10 w-full h-full flex justify-center items-center bg-gradient-to-r from-[#9068C173] to-[#3892DB73]">
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 bg-[#00000070] h-full w-full">
            <h1 className="lg:text-4xl text-2xl font-[900]">Movie Mania</h1>
            <p className="text-[18px] lg:text-xl text-center lg:w-[40%]">
              Test your film knowledge and compete with others in our exciting
              Movie Mania trivia game. Join now and prove you're the ultimate
              movie buff!
            </p>
            <FilledButton img={playButton} text={"Play Now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieMania;
