import React from 'react'
import Image from 'next/image'

import img from '../assets/Funny.png'
import FilledButton from './Buttons/FIlledButton'

const AboutUs = () => {
  return (
    <div className='h-max mt-10 lg:mt-16 mb-[100px] w-[88%] container mx-auto text-white grid lg:grid-cols-3 items-start justify-center lg:gap-14 gap-8 font-nunito'>
      <Image src={img}  width={350} className='object-cover bg-custom rounded-tl-[200px] rounded-md lg:block hidden' />
      <div className='flex flex-col items-start justify-around col-span-2 gap-[10px]'>
        <h1 className='text-center self-center lg:self-start font-[800] text-[36px] '><span className="gradient-text">About</span> Us</h1>
        <p className='font-[400] text-[20px]'><span className="gradient-text font-[800]">Welcome to TrivAI!</span> At TrivAI, we believe that learning should be fun, engaging, and social. Our platform combines the thrill of trivia with the power of AI to create an exciting and immersive experience for players of all ages. Our mission is to bring people together through the joy of trivia, fostering a community where knowledge is celebrated and competition is friendly. We offer a wide range of trivia categories, from movies and sports to history and science, ensuring there's something for everyone. Our AI-powered questions keep gameplay fresh and challenging, while our competitive leaderboards and rewards system add extra motivation and fun. We are a passionate team of trivia enthusiasts, tech geeks, and creative thinkers dedicated to providing the best trivia experience possible. Whether you're here to test your knowledge, compete with friends, or simply enjoy some quality time, we're thrilled to have you with us. Dive into the world of Trivia Titans and become part of our growing community today! Ready to get started? Join the fun!</p>
      <FilledButton text={'Join Now'} />
      </div>
    </div>
  )
}

export default AboutUs
