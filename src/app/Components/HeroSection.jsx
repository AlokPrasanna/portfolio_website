import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <div>
      <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello, I'm Alok</h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero sit corporis accusantium aperiam officiis ut asperiores sapiente, cupiditate labore beatae recusandae! Nihil a iure quos quae quibusdam eos atque qui?
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200'>Hire Me</button>
                    <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image src='/Images/hero-image.png'
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  '
                        width={300}
                        height={300}
                    />  
                </div>     
            </div>
        </div>        
      </section>
    </div>
  )
}

export default HeroSection

