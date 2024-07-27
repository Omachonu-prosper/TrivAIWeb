import React from 'react'
import FilledButton from './Buttons/FIlledButton'
import Image from "next/image";

// images
import playButton from '../assets/Play.png'

const MovieMania = () => {
  return (
    <section className="mt-8 lg:mt-16 w-[88%] container mx-auto flex font-nunito text-[#fefefe] mb-10">
      <div className='movieBanner  flex flex-col gap-4 items-center justify-center w-full text-white p-14 lg:h-[300px] h-[350px] border-2 custom-border rounded-xl '>
          <div className='lg:w-1/2 movieBanner flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl font-bold'>Movie Mania</h1>
            <p className='text-xl text-center'>Test your film knowledge and compete with others in our exciting Movie Mania trivia game. Join now and prove you're the ultimate movie buff!</p>
            <FilledButton  img={playButton} text={'Play Now'} />
          </div>
      </div>
    </section>
  )
}

export default MovieMania