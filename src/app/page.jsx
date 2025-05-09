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
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

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

  useGSAP(() => {
    const words = bottomTextRef.current.textContent.split(' ');
    bottomTextRef.current.innerHTML = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = '0.1';
      bottomTextRef.current.appendChild(span);
    });

    gsap.to(bottomTextRef.current.children, {
      opacity: 0.8,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: bottomTextRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const CardData = [
    {
      title: 'SR Akshatam',
      image: '/images/akshatam.png',
      location: 'Keshav Nagar, Pune',
      availability: 'Available',
      locality: 'Mundhwa-Manjri Rd, Sasane Colony',
      type: 'Residential',
      size: '2BHKs | 3BHKs',
      link: '/SrAkshatam',
      map: 'https://maps.app.goo.gl/qkY5wKS1zetq7rQXA',
    },
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
    {
      title: 'SR House',
      image: '/images/SrHouse.png',
      location: 'Baner, Pune',
      availability: 'In Construction',
      locality: 'Veerbhadra Nagar',
      type: 'Commercial',
      size: 'Shops, Showrooms, Office Spaces',
      link: 'na',
      map: 'https://maps.app.goo.gl/HjZdsU9gFLQpkSGz9',
    },
  ];

  return (
    <main ref={homeRef}>
      {/* <marquee
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
      </marquee> */}
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

      <section className='my-12 py-3 px-3 flex flex-col gap-4 font-medium mx-auto w-full text-2xl md:text-4xl max-w-screen-2xl'>
        <p ref={introTextRef} className='text-black'>
          SR Group specialises in residential and commercial projects and
          maintains our on-time delivery commitment. Our layouts, crafted in
          compliance with Good Vastu and Feng Shui principles, ensure harmony
          and prosperity for your family. Lastly, along with good transparency
          with our clients, we uphold high compliance with all real estate laws,
          maintaining our longstanding reputation for integrity and trust.
        </p>
        <Link href='/about'>
          <GlobalButton
            color='white'
            className='  w-fit  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
          >
            About Us
          </GlobalButton>
        </Link>
      </section>
      {/* <section ref={professionalServices} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
            <div className=' flex flex-col gap-4'>
              <h2 className=' flex flex-col overflow-hidden text-4xl text-blue-200 md:text-6xl'>
                <span className='fadeFromBelow  '>Our story in</span>
                <span className=' fadeFromBelow  font-black'>Numbers</span>
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
                SR Group specialises in residential and commercial projects and
                maintains our on-time delivery commitment. Our layouts, crafted
                in compliance with good Vastu and Feng Shui principles, ensure
                harmony and prosperity for your family. Lastly, along with good
                transparency with our clients, we uphold high compliance with
                all real estate laws, maintaining our longstanding reputation
                for integrity and trust.
              </span>
            </p>
          </div>
        </div>
      </section> */}
      <section
        ref={FourPointsSection}
        className=' bg-blue-200 my-10 w-full px-3 py-12 '
      >
        <div className=' mx-auto w-full max-w-screen-2xl text-white/80'>
          <div className=' flex h-fit w-full flex-row items-start  lg:items-end '>
            <div className='  h-[240px] flex flex-col   w-full  gap-0 md:gap-4 p-5 md:h-[270px] lg:h-[260px] '>
              <h3 className=' overflow-hidden text-2xl md:text-4xl font-bold text-yellow-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp
                    enableScrollSpy={true}
                    decimals={2}
                    end={8.63}
                    duration={1}
                  />
                  <span className=' text-[0.2em] uppercase'>Lakh Sq Ft</span>
                </span>
              </h3>
              <p className=' fadeIn text-sm md:text-2xl w-full  '>
                <b>Total volume of area built</b> with 5 lakh sq.ft. built and
                3.63 lakh sq.ft. of on-going projects.
              </p>
            </div>

            <div className=' h-[240px] w-px   md:h-[270px] lg:h-[260px]'>
              <div ref={topLine} className=' h-1/2 w-full bg-white'></div>
            </div>

            <div className='  h-[240px] flex flex-col   w-full   gap-0 md:gap-4 p-5 md:h-[270px] lg:h-[260px] '>
              <h3 className=' overflow-hidden text-2xl md:text-4xl font-bold text-yellow-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={16} duration={1.5} />+
                </span>
              </h3>
              <p className=' fadeIn text-sm md:text-2xl w-full  '>
                <b>Years of experience</b> , as we continue to grow and evolve,
                our extensive experience forms the cornerstone of our success,
                guiding us in our mission.
              </p>
            </div>
          </div>
          <div className=' flex h-px w-full justify-between'>
            <div className=' w-full '>
              <div ref={leftLine} className=' h-full w-1/2 bg-white'></div>
            </div>
            <div className=' flex w-full justify-end'>
              <div ref={rightLine} className=' h-full w-1/2 bg-white'></div>
            </div>
          </div>

          <div className=' flex h-fit w-full flex-row items-start overflow-hidden  lg:items-end '>
            <div className='  h-[240px] flex flex-col   w-full  gap-0 md:gap-4 p-5 md:h-[270px] lg:h-[260px] '>
              <h3 className=' overflow-hidden text-2xl md:text-4xl font-bold text-yellow-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={17} duration={1.5} />+
                </span>
              </h3>
              <p className=' fadeIn text-sm md:text-2xl w-full  '>
                <b>Total projects completed</b> with <b>4 on going projects</b>
                ,Each project, whether large or small, has been meticulously
                planned and executed with precision.
              </p>
            </div>

            <div className=' flex h-[240px] w-px items-end   md:h-[270px] lg:h-[260px]'>
              <div ref={bottomLine} className=' h-1/2 w-full bg-white'></div>
            </div>

            <div className='  h-[240px] flex flex-col   w-full  gap-0 md:gap-4 p-5 md:h-[270px] lg:h-[260px] '>
              <h3 className=' overflow-hidden text-2xl md:text-4xl font-bold text-yellow-200 lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={1100} duration={1} />+
                </span>
              </h3>
              <p className=' fadeIn text-sm md:text-2xl w-full  '>
                <b>Customers Served</b> ,The trust placed in us by our customers
                motivates us to continue improving and innovating.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mb-12'>
        <h2 className='fadeIn'>Prime Projects</h2>
      </div>
      <section className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
        {CardData.map((card, index) => {
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
      </section>

      <section className=' w-full  flex md:flex-row mt-12 flex-col'>
        <div className=' w-full p-4 bg-[#E8E8E8] flex flex-col justify-center gap-6'>
          <h3 className=' md:text-6xl text-4xl text-blue-200 font-medium'>
            Like What You See?
          </h3>
          <p ref={bottomTextRef} className=' text-2xl md:text-4xl'>
            Explore our portfolio of premium commercial and residential spaces
            designed to redefine modern living and business success. From
            state-of-the-art commercial hubs to luxurious residences, our
            projects blend innovation, functionality, and elegance in prime
            locations.
          </p>
          <Link href='/portfolio'>
            <GlobalButton
              color='white'
              className='  w-fit  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
            >
              OUR PORTFOLIO
            </GlobalButton>
          </Link>
        </div>
        <div className=' w-full  bg-[#E8E8E8] flex flex-col '>
          <div className=' h-full aspect-video relative overflow-hidden'>
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
          </div>
          <div className=' w-full p-4 bg-yellow-200 flex flex-col gap-2 py-6'>
            <h3 className=' text-4xl text-blue-200 font-medium'>
              Like What You See?
            </h3>
            <p className=' text-[#3F3F3F]  text-2xl'>
              Explore insights on real estate, design trends,
              <span className=' text-white'> and smart investments!</span>
            </p>
            <Link href='https://blog.sreddygroup.com/' target='_blank'>
              <GlobalButton
                color='yellow'
                className='  w-fit  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
              >
                Check Blogs
              </GlobalButton>
            </Link>
          </div>
        </div>
      </section>

      {/* <section
        ref={selectionGallery}
        className=' my-14 h-[calc(100dvh-80px)]   w-full'
      >
        <SelectGallery />
      </section> */}
      {/* <section ref={upcoming} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
            <div className=' flex flex-col gap-4'>
              <h2 className=' flex flex-col overflow-hidden text-4xl text-blue-200 md:text-6xl'>
                <span className='fadeFromBelow  '>Our latest</span>
                <span className=' fadeFromBelow  pb-2 font-black'>
                  Projects
                </span>
              </h2>
            </div>
            <div className=' flex w-full max-w-xl flex-col   overflow-hidden text-sm  font-normal  text-blue-200  md:text-base'>
              <p className=' fadeIn  '>
                Check our latest upcoming and on sale projects in residential
                and commercial categories. Our layouts, crafted in compliance
                with Good Vastu and Feng Shui principles, ensure harmony and
                prosperity for your family or your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='  mx-auto w-full max-w-screen-2xl'>
        <Gallery />
      </section> */}
    </main>
  );
}
