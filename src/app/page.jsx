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
      stagger: 0.5,
      scrollTrigger: {
        trigger: bottomTextRef.current,
        start: 'top 100%',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const CardData = [
    {
      title: 'SR Akshatam',
      image: '/images/akshatam.png',
      qrImage: '/images/AkshatamQR.jpg',
      location: 'Keshav Nagar, Pune',
      availability: 'Available',
      locality: 'Mundhwa-Manjri Rd, Sasane Colony',
      type: 'Mixed Use',
      size: '2BHKs | 3BHKs',
      rera: 'P52100052905',
      link: '/SrAkshatam',
      map: 'https://maps.app.goo.gl/qkY5wKS1zetq7rQXA',
    },
    {
      title: 'SR Business Hub',
      image: '/images/businesshub.png',
      qrImage: '/images/BusinesshubQR.jpeg',
      location: 'Baner, Pune',
      availability: 'Available',
      locality: 'Old Baner Balewadi Road',
      type: 'Commercial',
      size: 'Showrooms | Office Spaces',
      rera: 'P52100047555',
      link: '/SRBusinessHub',
      map: 'https://maps.app.goo.gl/znzJ8pFMLpyAspKR9',
    },
    {
      title: 'SR Aishwaryam',
      image: '/images/aishwaryam.png',
      qrImage: 'na',
      location: 'Balewadi, Pune',
      availability: 'Available',
      locality: 'Balewadi',
      type: 'Residential',
      size: '3.5 BHK Homes',
      rera: 'P5210007145',
      link: '/SrAishwaryam',
      map: 'https://maps.app.goo.gl/S9bWYBk3obXSFrPeA',
    },
    {
      title: 'SR House',
      image: '/images/SrHouse.png',
      location: 'Baner, Pune',
      availability: 'In Construction',
      locality: 'Veerbhadra Nagar',
      type: 'Commercial',
      size: 'Showrooms, Office Spaces',
      rera: '',
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
        className='relative mt-[110px] flex w-screen h-auto lg:w-full lg:h-[calc(100vh-110px)] items-end justify-center overflow-hidden  '
      >
        {/* <span className=' absolute right-3 top-2 z-20 text-[8px] text-white mix-blend-difference'>
          Property in video: SR Business Hub, opposite Jupiter hospital, Baner,
          Pune. Rera number - P52100047555
        </span> */}
        <video
          src='/hero_banner_1080.mp4'
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
        {/* <h1
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
        </h1> */}
      </section>

      <section className='mx-auto my-12 flex w-full max-w-screen-2xl flex-col gap-4 p-3 text-2xl font-medium md:text-4xl'>
        <p ref={introTextRef} className='text-black'>
          At SR Group, We shape the way people live, connect, and belong. What
          began as a family vision has grown into a legacy of trust, carried
          forward with a deep responsibility toward the city we call home. Each
          project is a promise of safety, dignity, and spaces that outlast
          generations. By weaving tradition with progress and sustainability
          with design, SR Group builds environments where families thrive,
          communities endure, and the future finds its foundation.
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
        className=' my-10 w-full bg-blue-200 px-3 py-12 '
      >
        <div className=' mx-auto w-full max-w-screen-2xl text-white/80'>
          <div className=' flex h-fit w-full flex-row items-start  lg:items-end '>
            <div className='  flex h-[240px] w-full   flex-col  gap-0 p-5 md:h-[270px] md:gap-4 lg:h-[260px] '>
              <h3 className=' overflow-hidden text-6xl font-bold text-yellow-200 md:text-6xl lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp
                    enableScrollSpy={true}
                    decimals={1}
                    end={9.7}
                    duration={1}
                  />
                  <span className=' text-[0.15em] uppercase'>Lakh Sq Ft</span>
                </span>
              </h3>
              <p className=' fadeIn w-full text-sm md:text-2xl  '>
                With 5 lakh sq.ft. built and 4.7 lakh sq.ft. under construction
              </p>
            </div>

            <div className=' h-[240px] w-px   md:h-[270px] lg:h-[260px]'>
              <div ref={topLine} className=' h-1/2 w-full bg-white'></div>
            </div>

            <div className='  flex h-[240px] w-full   flex-col   gap-0 p-5 md:h-[270px] md:gap-4 lg:h-[260px] '>
              <h3 className=' overflow-hidden text-6xl font-bold text-yellow-200 md:text-6xl lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={17} duration={1.5} />+
                </span>
              </h3>
              <p className=' fadeIn w-full text-sm md:text-2xl  '>
                <b>Years of experience</b>
                <br></br>As we continue to grow and evolve, our extensive
                experience forms the cornerstone of our success, guiding us in
                our mission.
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
            <div className='  flex h-[240px] w-full   flex-col  gap-0 p-5 md:h-[270px] md:gap-4 lg:h-[260px] '>
              <h3 className=' overflow-hidden text-6xl font-bold text-yellow-200 md:text-6xl lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={16} duration={1.5} />+
                </span>
              </h3>
              <p className=' fadeIn w-full text-sm md:text-2xl  '>
                <b>Total projects </b>
                <br></br>With <b>3 on going projects</b>, 1 upcoming
              </p>
            </div>

            <div className=' flex h-[240px] w-px items-end   md:h-[270px] lg:h-[260px]'>
              <div ref={bottomLine} className=' h-1/2 w-full bg-white'></div>
            </div>

            <div className='  flex h-[240px] w-full   flex-col  gap-0 p-5 md:h-[270px] md:gap-4 lg:h-[260px] '>
              <h3 className=' overflow-hidden text-6xl font-bold text-yellow-200 md:text-6xl lg:text-8xl '>
                <span className=' fadeFromBelow'>
                  <CountUp enableScrollSpy={true} end={650} duration={1} />+
                </span>
              </h3>
              <p className=' fadeIn w-full text-sm md:text-2xl  '>
                <b>Customers Served</b>
                <br></br>We grow through the trust of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=' mx-auto mb-12  w-full max-w-screen-2xl overflow-hidden p-3 text-6xl text-blue-200'>
        <h2 className='fadeIn'>Prime Projects</h2>
      </div>
      <section className=' m-auto grid w-full max-w-screen-2xl items-start gap-4 px-3 md:grid-cols-2 lg:grid-cols-3'>
        {CardData.map((card, index) => {
          return (
            <ProjectCard
              key={index}
              title={card.title}
              image={card.image}
              qrImage={card.qrImage}
              location={card.location}
              availability={card.availability}
              locality={card.locality}
              type={card.type}
              size={card.size}
              rera={card.rera}
              link={card.link}
              map={card.map}
            />
          );
        })}
      </section>

      <section className=' mt-12  flex w-full flex-col md:flex-row max-w-screen-2xl mx-auto'>
        <div className=' flex w-full flex-col justify-center gap-6 p-4 md:p-10'>
          <h3 className=' text-4xl font-medium text-blue-200 md:text-6xl'>
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
        <div className=' flex  w-full flex-col bg-[#E8E8E8] '>
          <div className=' relative aspect-video h-full overflow-hidden'>
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
          <div className=' flex w-full flex-col gap-2 bg-yellow-200 p-4 py-6'>
            <h3 className=' text-4xl font-medium text-blue-200'>
              Like What You See?
            </h3>
            <p className=' text-2xl  text-[#3F3F3F]'>
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
