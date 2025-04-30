'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

import ProjectCard from '.././ProjectCard';

export default function Home() {
  const homeRef = useRef();

  const heroHeadingLine = useRef();
  const heroSection = useRef();

  const FourPointsSection = useRef();
  const topLine = useRef();
  const leftLine = useRef();
  const rightLine = useRef();
  const bottomLine = useRef();

  const tl = useRef();

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(TextPlugin);
  }

  useGSAP(() => {
    tl.current = gsap.timeline();

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
      const headings = gsap.utils.toArray('.fadeFromBelow');
      const fadeIn = gsap.utils.toArray('.fadeIn');
      fadeIn.forEach((fade) => {
        gsap.from(fade, {
          opacity: 40,
          y: 200,
          scrollTrigger: {
            trigger: fade,
            start: 'top bottom',
            end: 'bottom 95%',
            scrub: true,
          },
        });
      });

      headings.forEach((heading) => {
        gsap.from(heading, {
          y: 80,
          scrollTrigger: {
            trigger: heading,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true,
          },
        });
      });
    },
    { scope: homeRef.current }
  );

  useGSAP(() => {
    gsap.set(topLine.current, {
      height: '0%',
    });
    gsap.set(leftLine.current, {
      width: '0%',
    });
    gsap.set(rightLine.current, {
      width: '0%',
    });
    gsap.set(bottomLine.current, {
      height: '0%',
    });

    gsap.to(topLine.current, {
      height: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(leftLine.current, {
      width: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(rightLine.current, {
      width: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(bottomLine.current, {
      height: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });
  });

  // Add new ref at the top with other refs
  const introTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  // Add this new GSAP animation
  useGSAP(() => {
    const words = introTextRef.current.textContent.split(' ');
    introTextRef.current.innerHTML = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = '0.1';
      introTextRef.current.appendChild(span);
    });

    gsap.to(introTextRef.current.children, {
      opacity: 0.8,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: introTextRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const UnderConstruction = [
    {
      title: 'SR AKSHATAM',
      image: '/images/akshatam.png',
      location: 'Keshav Nagar, Pune',
      availability: 'Available',
      locality: 'Mundhwa-Manjri Rd, Sasane Colony',
      type: 'Residential',
      size: '2BHKs | 3BHKs',
      link: '/SrAkshatam',
      map: 'https://maps.app.goo.gl/qkY5wKS1zetq7rQXA',
    },
  ];

  const ReadyToMoveIn = [
    {
      title: 'SR Business Hub',
      image: '/images/businesshub.png',
      location: 'Baner, Pune',
      availability: 'Available',
      locality: 'Old Baner Balewadi Road',
      type: 'Commercial',
      size: 'Showrooms | Office Spaces',
      link: '/SRBusinessHub',
      map: 'https://maps.app.goo.gl/znzJ8pFMLpyAspKR9',
    },
    {
      title: 'SR Aishwaryam',
      image: '/images/aishwaryam.png',
      location: 'Balewadi, Pune',
      availability: 'Available',
      locality: 'Balewadi',
      type: 'Residential',
      size: '3.5 BHK Homes',
      link: '/residential/SRAishwaryam',
      map: 'https://maps.app.goo.gl/S9bWYBk3obXSFrPeA',
    },
  ];

  //   const SoldOut = [
  //     {
  //       title: 'SR Business Hub',
  //       image: '/images/businesshub.png',
  //       location: 'Baner, Pune',
  //       availability: 'Available',
  //       locality: 'Old Baner Balewadi Road',
  //       type: 'Commercial',
  //       size: 'Showrooms | Office Spaces',
  //       link: '/SRBusinessHub',
  //       map: 'https://maps.app.goo.gl/znzJ8pFMLpyAspKR9',
  //     },
  //   ];

  return (
    <main ref={homeRef}>
      <section
        ref={heroSection}
        className='relative mt-[110px] flex h-[calc(100vh-110px)] w-full items-end justify-center overflow-hidden  '
      >
        <span className=' absolute right-3 top-2 z-20 text-[8px] text-white mix-blend-difference'>
          Property in video: SR Business Hub, opposite Jupiter hospital, Baner,
          Pune. Rera number - P52100047555
        </span>
        <video
          src='/Video.mp4'
          className=' size-full object-cover contrast-[1.2] '
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          poster='/video-poster.jpg'
          alt='Video background'
        ></video>
      </section>

      <section className='my-12 py-3 px-3 flex flex-col gap-4 font-medium mx-auto w-full text-2xl md:text-4xl max-w-screen-2xl'>
        <p ref={introTextRef} className='text-black'>
          SR Group specialises in residential and commercial projects and
          maintains our on-time delivery commitment. Our layouts, crafted in
          compliance with Good Vastu and Feng Shui principles, ensure harmony
          and prosperity for your family. Lastly, along with good transparency
          with our clients, we uphold high compliance with all real estate laws,
          maintaining our longstanding reputation for integrity and trust.
        </p>
      </section>
      <section>
        <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mt-12 mb-4'>
          <h2 className='fadeIn'>Under Construction</h2>
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
          {UnderConstruction.map((card, index) => {
            return (
              <ProjectCard
                key={index}
                title={card.title}
                image={card.image}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
                type={card.type}
                size={card.size}
                link={card.link}
                map={card.map}
              />
            );
          })}
        </div>
      </section>

      <section>
        <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mt-12 mb-4'>
          <h2 className='fadeIn'>Ready To Move In</h2>
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
          {ReadyToMoveIn.map((card, index) => {
            return (
              <ProjectCard
                key={index}
                title={card.title}
                image={card.image}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
                type={card.type}
                size={card.size}
                link={card.link}
                map={card.map}
              />
            );
          })}
        </div>
      </section>

      <section className=' mb-20'>
        <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mt-12 mb-4'>
          <h2 className='fadeIn'>Under Construction</h2>
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
          {/* {SoldOut.map((card, index) => {
            return (
              <ProjectCard
                key={index}
                title={card.title}
                image={card.image}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
                type={card.type}
                size={card.size}
                link={card.link}
                map={card.map}
              />
            );
          })} */}
        </div>
      </section>
    </main>
  );
}
