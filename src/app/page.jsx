'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import GlobalButton from './GlobalButton';
import CountUp from 'react-countup';
import SelectGallery from './SelectGallery';
import Gallery from './Gallery';

export default function Home() {
  const { contextSafe } = useGSAP();
  const heroHeadingLine1 = useRef();
  const homeRef = useRef();
  const heroHeadingLine2 = useRef();
  const heroHeadingLine = useRef();
  const heroSection = useRef();
  const professionalServices = useRef();
  const textInPutIntro = useRef();
  const FourPointsSection = useRef();
  const topLine = useRef();
  const leftLine = useRef();
  const rightLine = useRef();
  const bottomLine = useRef();
  const selectionGallery = useRef();
  const textInPutIntro2 = useRef();
  const upcoming = useRef();
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

  return (
    <main ref={homeRef}>
      <marquee
        className=' fixed top-[110px] z-[9999] bg-blue-200 text-white'
        behavior='scroll'
        direction='left'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        consectetur necessitatibus quisquam ipsa quod eveniet, omnis nulla vitae
        aut ullam, vel eum corporis quidem magni vero quae at reiciendis veniam
        et, fuga quam. Veritatis dignissimos ea omnis culpa cum quas! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consectetur
        necessitatibus quisquam ipsa quod eveniet, omnis nulla vitae aut ullam,
        vel eum corporis quidem magni vero quae at reiciendis veniam et, fuga
        quam. Veritatis dignissimos ea omnis culpa cum quas!
      </marquee>
      <section
        ref={heroSection}
        className='mt-[120px] flex h-[calc(100vh-120px)] w-full items-end justify-center overflow-hidden  '
      >
        <video
          src='/Video.mp4'
          className='= size-full object-cover'
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
          className=' absolute z-20 m-0 mb-4  flex flex-col items-center overflow-hidden  text-center text-clamp font-black leading-[0.95em]  text-white md:mb-2'
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
              <h2 className=' flex flex-col overflow-hidden text-4xl text-blue-200 md:text-6xl'>
                <span className='fadeFromBelow  '>Professional</span>
                <span className=' fadeFromBelow  font-black'>Services</span>
              </h2>
              <GlobalButton
                color='white'
                className='  w-fit  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
              >
                Contact Us
              </GlobalButton>
            </div>
            <p className=' flex w-full max-w-xl flex-col   overflow-hidden text-sm  font-normal  text-blue-200    md:text-base'>
              <span className='fadeIn  '>
                SR Group specializes in residential and commercial projects and
                maintains our on-time delivery commitment. Our layouts, crafted
                in compliance with Good Vastu and Feng Shui principles, ensure
                harmony and prosperity for your family. Lastly, along with good
                transparency with our clients, we uphold high compliance with
                all real estate laws, maintaining our longstanding reputation
                for integrity and trust.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section ref={FourPointsSection} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl text-blue-200'>
          <div className=' flex h-fit w-full flex-row items-start  lg:items-end '>
            <div className=' flex h-[320px] w-full   flex-col-reverse gap-3 overflow-hidden px-2 pb-4 md:h-[270px]  lg:h-[260px] lg:flex-row lg:items-end lg:justify-between'>
              <p className=' fadeIn w-full lg:w-1/3 lg:max-w-sm '>
                <b>Total volume of area built</b> with 5 lakh Sq. ft. built with
                3.2lakh sq. ft. of on-going projects
              </p>
              <h3 className=' overflow-hidden text-4xl font-bold text-blue-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp
                    enableScrollSpy={true}
                    decimals={2}
                    end={8.21}
                    duration={1}
                  />
                  <span className=' text-[0.2em] uppercase'>Lakh Sqft</span>
                </span>
              </h3>
            </div>
            <div className=' h-[320px] w-px   md:h-[270px] lg:h-[260px]'>
              <div ref={topLine} className=' h-1/2 w-full bg-blue-200'></div>
            </div>

            <div className=' flex h-[320px] w-full   flex-col-reverse gap-3 overflow-hidden px-2  pb-4 md:h-[270px] lg:h-[260px] lg:flex-row lg:items-end lg:justify-between'>
              <p className=' fadeIn w-full lg:w-1/3 lg:max-w-sm '>
                <b>Years of experience</b> , As we continue to grow and evolve,
                our extensive experience forms the cornerstone of our success,
                guiding us in our mission.
              </p>
              <h3 className=' overflow-hidden text-4xl font-bold text-blue-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={16} duration={1.5} />+
                </span>
              </h3>
            </div>
          </div>
          <div className=' flex h-px w-full justify-between'>
            <div className=' w-full '>
              <div ref={leftLine} className=' h-full w-1/2 bg-blue-200'></div>
            </div>
            <div className=' flex w-full justify-end'>
              <div ref={rightLine} className=' h-full w-1/2 bg-blue-200'></div>
            </div>
          </div>

          <div className=' flex h-fit w-full flex-row items-start overflow-hidden  lg:items-end '>
            <div className=' flex h-[320px]   w-full flex-col-reverse gap-3 px-2 pb-4 md:h-[270px]  lg:h-[260px] lg:flex-row lg:items-end lg:justify-between'>
              <p className=' fadeIn w-full lg:w-1/3 lg:max-w-sm '>
                <b>Total projects completed</b> ,Each project, whether large or
                small, has been meticulously planned and executed with
                precision.
              </p>
              <h3 className=' overflow-hidden text-4xl font-bold text-blue-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={15} duration={1.5} />+
                </span>
              </h3>
            </div>
            <div className=' flex h-[320px] w-px items-end   md:h-[270px] lg:h-[260px]'>
              <div ref={bottomLine} className=' h-1/2 w-full bg-blue-200'></div>
            </div>

            <div className=' flex h-[320px]   w-full flex-col-reverse gap-3 px-2  pb-4 md:h-[270px] lg:h-[260px] lg:flex-row lg:items-end lg:justify-between'>
              <p className=' fadeIn w-full lg:w-1/3 lg:max-w-sm '>
                <b>Customers Served</b> ,The trust placed in us by our customers
                motivates us to continue improving and innovating.
              </p>
              <h3 className=' overflow-hidden text-4xl font-bold text-blue-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={2000} duration={1} />+
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={selectionGallery}
        className=' my-14 h-[calc(100dvh-80px)]   w-full'
      >
        <SelectGallery />
      </section>
      <section ref={upcoming} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
            <div className=' flex flex-col gap-4'>
              <h2 className=' flex flex-col overflow-hidden text-4xl text-blue-200 md:text-6xl'>
                <span className='fadeFromBelow  '>Upcoming</span>
                <span className=' fadeFromBelow  pb-2 font-black'>
                  Projects
                </span>
              </h2>
            </div>
            <div className=' flex w-full max-w-xl flex-col   overflow-hidden text-sm  font-normal  text-blue-200  md:text-base'>
              <p className=' fadeIn  '>
                SR Group specializes in residential and commercial projects and
                maintains our on-time delivery commitment. Our layouts, crafted
                in compliance with Good Vastu and Feng Shui principles, ensure
                harmony and prosperity for your family. Lastly, along with good
                transparency with our clients, we uphold high compliance with
                all real estate laws, maintaining our longstanding reputation
                for integrity and trust.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='  mx-auto w-full max-w-screen-2xl'>
        <Gallery />
      </section>
    </main>
  );
}
