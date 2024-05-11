'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Home() {
  const { contextSafe } = useGSAP();
  const heroHeadingLine1 = useRef();
  const heroHeadingLine2 = useRef();
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl.current
      .from(heroHeadingLine1.current, {
        duration: 0.75,
        opacity: 0,
        delay: 0.5,
        y: 300,
        ease: 'power2.out',
      })
      .from(
        heroHeadingLine2.current,
        {
          duration: 0.75,
          opacity: 0,
          y: 200,
          ease: 'power2.out',
        },
        '>-0.1'
      );
  });

  return (
    <main>
      <div className=' flex h-dvh w-full items-end justify-center  '>
        <video
          src='/Video.mp4'
          className='size-full object-cover brightness-50 contrast-125 saturate-150'
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          poster='/video-poster.jpg'
          alt='Video background'
        ></video>
        <div className=' absolute z-10 size-full h-[30%] w-full bg-gradient-to-t  from-black to-transparent bg-blend-multiply'></div>
        <h1 className=' absolute z-20 m-0 mb-4 flex flex-col items-center overflow-hidden  text-center text-clamp font-black leading-[0.95em]  text-white md:mb-2'>
          <span ref={heroHeadingLine1} className=' text-neutral-200'>
            We Build the
          </span>{' '}
          <span
            ref={heroHeadingLine2}
            className='inline-block bg-gradient-to-b from-neutral-950  to-neutral-100 to-70% bg-clip-text text-transparent'
          >
            Future
          </span>
        </h1>
      </div>
    </main>
  );
}
