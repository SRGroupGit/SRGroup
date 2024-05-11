'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {
  const { contextSafe } = useGSAP();
  const heroHeadingLine1 = useRef();
  const heroHeadingLine2 = useRef();
  const heroHeadingLine = useRef();
  const heroSection = useRef();
  const professionalServices = useRef();
  const tl = useRef();

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

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

  useGSAP(() => {
    gsap.to(heroHeadingLine.current, {
      y: -200,
      scrollTrigger: {
        trigger: heroSection.current,
        start: 'top',
        end: 'bottom 200px',
        scrub: true,
      },
    });
  });

  return (
    <main>
      <section
        ref={heroSection}
        className='flex h-dvh w-full items-end justify-center overflow-hidden  '
      >
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
        <h1
          ref={heroHeadingLine}
          className=' absolute z-20 m-0 mb-4 flex flex-col items-center overflow-hidden  text-center text-clamp font-black leading-[0.95em]  text-white md:mb-2'
        >
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
      </section>
      <section
        ref={professionalServices}
        className=' bg-neutral-50  w-ful h-screen
      '
      ></section>
    </main>
  );
}
