'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import GlobalButton from './GlobalButton';

export default function Home() {
  const { contextSafe } = useGSAP();
  const heroHeadingLine1 = useRef();
  const homeRef = useRef();
  const heroHeadingLine2 = useRef();
  const heroHeadingLine = useRef();
  const heroSection = useRef();
  const professionalServices = useRef();
  const textInPutIntro = useRef();
  const tl = useRef();

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(TextPlugin);
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

  useGSAP(
    () => {
      gsap.to(textInPutIntro.current, {
        text: ' SR Group specializes in residential and commercial projects and maintains our on-time delivery commitment. Our layouts, crafted in compliance with Good Vastu and Feng Shui principles, ensure harmony and prosperity for your family. Lastly, along with good transparency with our clients, we uphold high compliance with all real estate laws, maintaining our longstanding reputation for integrity and trust.',
        scrollTrigger: {
          trigger: textInPutIntro.current,
          start: 'top bottom',
          end: 'bottom 80%',
          scrub: true,
        },
      });
    },
    { scope: homeRef.current }
  );

  useGSAP(
    () => {
      const headings = gsap.utils.toArray('.fadeFromBelow');
      const fadeIn = gsap.utils.toArray('.fadeIn');
      fadeIn.forEach((fade) => {
        gsap.from(fade, {
          opacity: 0,
          scrollTrigger: {
            trigger: fade,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true,
          },
        });
      });

      headings.forEach((heading) => {
        gsap.from(heading, {
          y: 30,
          opacity: 0,
          scrollTrigger: {
            trigger: heading,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true,
          },
        });
      });
    },
    { scope: homeRef.current }
  );

  return (
    <main ref={homeRef}>
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
      <section ref={professionalServices} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
            <div className=' flex flex-col gap-4'>
              <h2 className=' flex flex-col overflow-hidden text-4xl md:text-6xl'>
                <span className='fadeFromBelow  '>Professional</span>
                <span className=' fadeFromBelow  font-black'>Services</span>
              </h2>
              <GlobalButton
                color='black'
                className=' fadeFromBelow w-fit  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
              >
                Contact Us
              </GlobalButton>
            </div>
            <p
              ref={textInPutIntro}
              className='   l w-full max-w-xl  text-sm font-light text-neutral-800   md:text-base'
            />
          </div>
        </div>
      </section>

      <section ref={FourPointsSection} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' flex flex-col gap-10 md:flex-row md:items-center md:justify-between'></div>
        </div>
      </section>
    </main>
  );
}
