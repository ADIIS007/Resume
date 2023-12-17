import Link from 'next/link';
import React from 'react';
import Particles from '../components/public/particles';

// This will make up the home page
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={200}
      />
      <h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
        ADIIS007
      </h1>

      <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-16 text-center animate-fade-in'>
        <h2 className='text-sm text-zinc-500 '>
          I&apos;m building this{' '}
          {/* <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            unkey.dev 
          </Link>  */}
          to build their own site for developers.
        </h2>
      </div>
    </div>
  );
}
