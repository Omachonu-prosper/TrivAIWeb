import React from 'react'

const Newsletter = () => {
    return (
        <section className="mt-8 lg:mt-16 w-[88%] h-max container mx-auto flex font-nunito text-[#fefefe] mb-10">
            <div className='flex flex-col gap-4 items-center justify-center w-full text-white p-14 lg:h-[300px] h-max border-2 custom-border rounded-xl '>
                <div className='lg:w-[60%] flex flex-col gap-4 items-center justify-center'>
                    <h1 className='font-[800] text-[36px] text-center'><span className="gradient-text">Subscribe</span> to our newsletter</h1>
                    <p className='font-[400] text-center text-[20px]'><span className="gradient-text font-[800]">Stay Updated with TrivAI!</span> Subscribe to our newsletter and be the first to know about new game releases, special events, and exclusive offers. Get insider tips, exciting trivia facts, and updates straight to your inbox. Don't miss out on the latest news and the opportunity to enhance your trivia experience.</p>
                    <div className='flex items-center h-[50px] w-full'>
                        <input className='lg:h-[50px] h-[40px] lg:w-2/3 outline-none rounded-l-full text-white px-4 bg-transparent  border-transparent border-2 custom-border' type="text" />
                        <button className='lg:h-[50px] h-[40px] lg:w-1/4 rounded-r-full gradient-bg lg:text-md text-xs p-2'>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
