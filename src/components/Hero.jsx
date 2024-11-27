import React from 'react'

export default function Hero() {
  return (
    <div className='bg-hero h-[calc(100vh-112px)] bg-center bg-no-repeat bg-cover flex flex-col items-end justify-center text-white'>
        <div className='space-y-3 p-4 md:w-1/2'>
        <h1 className='md:text-5xl text-3xl'>Would you like a Cup of Delicious Coffee?</h1>
        <p className='md:text-lg text-sm font-sans'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button className='bg-bprimary py-2 px-4 text-2xl text-black'>Learn More</button>
        </div>
    </div>
  )
}
