import React from "react";
import FilledButton from "./Buttons/FIlledButton";
import ImagePalette from "./ImagePalette";

const HowToPlay = () => {
  return (
    <section className="w-[88%] container mx-auto flex lg:flex-row flex-col-reverse font-nunito text-[#fefefe] mb-10">
      <div className="lg:w-[60%] flex flex-col gap-6 lg:gap-[40px] lg:mt-0 -mt-20">
        <h3 className="font-[800] lg:text-[36px] text-2xl">
          How to <span className="gradient-text">Play</span> TrivAI
        </h3>
        <p className="text-[#7AC4FF] font-[700] lg:text-[24px] text-[18px]">
          Welcome to TrivAI! Follow these simple steps to join the fun and start
          competing in our exciting AI-powered trivia games.
        </p>
        <p className="text-[400] text-[18px] lg:text-[20px] line-clamp-6 lg:line-clamp-none">
          Browse through our list of available trivAI games and select one that
          interests you. We have a variety of categories to choose from,
          including movies, sports, history, and more. Once you&apos;ve chosen
          your game, click on the "Join Now" button to enter a game room. Each
          room has a limited number of players, so make sure to join quickly!
          Before the game starts, take a moment to read the game rules and
          instructions. This will help you understand how to play and score
          points. Once the game begins, answer the trivia questions as quickly
          and accurately as possible. The faster you answer, the more points you
          earn! Compete against other players and aim for the top of the
          leaderboard. The player with the most points at the end of the game
          wins! Earn rewards and achievements based on your performance. Use
          these to showcase your trivia skills and motivate yourself to keep
          playing.
        </p>
        <div className="flex">
          <FilledButton text={"Join Now"} />
        </div>
      </div>
      <div className="lg:w-[40%] h-[300px] flex justify-center items-center">
        <ImagePalette/>
      </div>
    </section>
  );
};

export default HowToPlay;
