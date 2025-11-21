'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import GlobalButton from '@/app/GlobalButton';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function About() {
  const heroHeadingLine1 = useRef();
  const heroHeadingLine2 = useRef();
  const heroHeadingLine = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline();
  });

  const introTextRef = useRef(null);
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
  const tl = useRef();

  return (
    <div>
      {' '}
      {/* ✅ wrap everything inside a parent div */}
      <section className='relative w-full h-[100vh] overflow-hidden'>
        {/* Background Image */}
        <Image
          src='/images/Akshatam_hi_rez.avif'
          alt='Building'
          layout='fill'
          objectFit='cover'
          className=' z-0'
          priority
        />

        {/* Overlay Content */}
        <section className='relative mt-[110px] flex w-screen h-auto lg:w-full lg:h-[calc(100vh-110px)] items-end justify-center overflow-hidden'>
          <div className=' absolute z-10 size-full h-[40%] w-full bg-gradient-to-t  from-black to-transparent bg-blend-multiply'></div>
          <h1
            // ref={heroHeadingLine}
            className=' absolute z-20 m-0 mb-4  flex flex-col items-center overflow-hidden  text-center text-6xl font-black leading-[1em]  text-white md:mb-2'
          >
            <span ref={heroHeadingLine1} className=' text-neutral-200'>
              Delivering Consistent
            </span>{' '}
            <span className='inline-block p-3 bg-gradient-to-b from-neutral-500  to-neutral-100 to-70% bg-clip-text text-transparent'>
              Quality And Luxury.
            </span>
          </h1>
        </section>
      </section>
      <section className='mx-auto my-12 flex w-full max-w-screen-2xl flex-col gap-4 p-3 text-2xl font-medium md:text-4xl'>
        <p ref={introTextRef} className='text-black'>
          SR Group specialises in residential and commercial projects and
          maintains our on-time delivery commitment. Our layouts, crafted in
          compliance with Good Vastu and Feng Shui principles, ensure harmony
          and prosperity for your family. Lastly, along with good transparency
          with our clients, we uphold high compliance with all real estate laws,
          maintaining our longstanding reputation for integrity and trust.
        </p>
        <Link href='/portfolio'>
          <GlobalButton
            color='white'
            className='w-fit rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg'
          >
            Our Portfolio
          </GlobalButton>
        </Link>
      </section>
      <section className=' mt-12  flex w-full flex-col md:flex-row max-w-screen-2xl mx-auto'>
        <div className=' relative aspect-video h-full overflow-hidden'>
          <video
            src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/b5kwg01rsv7gfm5/interior_p2RFOLtHal.mp4'
            className=' size-full object-cover contrast-[1.2] '
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            poster='/thumbnail.avif'
            alt='Video background'
          ></video>
        </div>
        <div className=' relative aspect-video h-full overflow-hidden'>
          <video
            src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/b5kwg01rsv7gfm5/exterior_dKIMhGuwzA.mp4'
            className=' size-full object-cover contrast-[1.2] '
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            poster='/thumbnail_alt.avif'
            alt='Video background'
          ></video>
        </div>
      </section>
      {/* <section className=' mt-12 flex justify-center w-full flex-row md:flex-row max-w-screen-2xl mx-auto'></section> */}
      <section className='w-full h-full'>
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8 py-12 md:py-16'>
          {/* Heading */}
          <h3 className='text-center text-4xl md:text-6xl font-medium text-blue-200 md:sticky md:top-48'>
            Our Leadership
          </h3>

          {/* Rajendra */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:sticky md:top-64 bg-neutral-50 isolate md:z-[15] p-6'>
            <div className='md:col-span-6 xl:col-span-4'>
              <div className='relative w-full bg-gray-200 rounded-md shadow-sm overflow-hidden aspect-[4/5]'>
                <Image
                  src='/images/founders/rajendra.avif'
                  alt='Mr. Rajendra Reddy'
                  fill
                  className='object-cover'
                  priority
                />

                {/* LinkedIn button */}
                {/* <a
                  href='https://www.linkedin.com/feed/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn profile'
                  className='absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    className='h-4 w-4'
                    fill='currentColor'
                  >
                    <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.9A53.79 53.79 0 0 1 107.58 54c0 29.6-24.09 54.1-53.79 54.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.26-79.2-48.3 0-55.7 37.7-55.7 76.6V448H158.6V148.9h88.9v40.8h1.3c12.4-23.5 42.5-48.3 87.4-48.3 93.5 0 110.7 61.5 110.7 141.5V448z' />
                  </svg>
                  <span className='text-sm'>LinkedIn</span>
                </a> */}
              </div>
            </div>

            {/* Rajendra Copy */}
            <div className='md:col-span-6 xl:col-span-8'>
              <h4 className='text-xl md:text-2xl font-semibold text-yellow-200'>
                Mr. Rajendra Reddy
              </h4>
              <p className='mt-1 text-sm md:text-base text-black font-bold'>
                Managing Director, SR Group
              </p>

              <div className='mt-4 space-y-4 text-black leading-relaxed text-sm md:text-base'>
                <p>
                  Mr. Rajendra Reddy, Founder and Managing Director of SR Group,
                  has made the name synonymous with trust, quality, and
                  consistency in Pune’s real estate landscape. With over three
                  decades of experience built through ground-level learning, his
                  journey reflects the spirit of Maharashtra: resilient, rooted,
                  and forward-looking.
                </p>
                <p>
                  Born in Parbhani and having spent much of his professional
                  life in Pune, Mr. Reddy carries a deep cultural connection to
                  Maharashtra. His approach to development is inspired by the
                  region’s values: integrity, community, pragmatism, and respect
                  for legacy forming the cornerstone of SR Group’s ethos.
                </p>
                <p>
                  Entering construction through hands-on experience rather than
                  formal education, he mastered the craft on-site with tireless
                  dedication. His practical understanding of land trading and
                  instinctive grasp of Pune’s evolving urban pulse have shaped
                  SR Group into a developer attuned to both the emotional and
                  economic needs of its customers.
                </p>
                <p>
                  Leading with humility, clarity, and conviction, Mr. Reddy
                  believes in building not just structures but relationships — a
                  philosophy that has earned SR Group enduring goodwill across
                  generations. Under his leadership, the company upholds the
                  Marathi ethos of “सत्य, सेवा, समर्पण” (Truth, Service, and
                  Dedication).
                </p>
              </div>
            </div>
          </div>

          {/* Shailendra */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:sticky md:top-64 bg-neutral-50 isolate md:z-[16] p-6'>
            {/* Shailendra Portrait - first on mobile, right on desktop */}
            <div className='order-1 md:order-2 md:col-span-6 xl:col-span-4 md:z-0'>
              <div className='relative w-full bg-gray-200 rounded-md shadow-sm overflow-hidden aspect-[4/5]'>
                <Image
                  src='/images/founders/shailendra.avif'
                  alt='Mr. Shailendra Reddy'
                  fill
                  className='object-cover'
                  priority
                />
                <a
                  href='https://www.linkedin.com/in/shailendra-reddy/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn profile'
                  className='absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    className='h-4 w-4'
                    fill='currentColor'
                  >
                    <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.9A53.79 53.79 0 0 1 107.58 54c0 29.6-24.09 54.1-53.79 54.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.26-79.2-48.3 0-55.7 37.7-55.7 76.6V448H158.6V148.9h88.9v40.8h1.3c12.4-23.5 42.5-48.3 87.4-48.3 93.5 0 110.7 61.5 110.7 141.5V448z' />
                  </svg>
                  <span className='text-sm'>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Shailendra Copy - second on mobile, left on desktop */}
            <div className='order-2 md:order-1 md:col-span-6 xl:col-span-8'>
              <h4 className='text-xl md:text-2xl font-semibold text-yellow-200'>
                Mr. Shailendra Reddy
              </h4>
              <p className='mt-1 text-sm md:text-base text-black font-bold'>
                Director, SR Group
              </p>

              <div className='mt-4 space-y-4 text-black leading-relaxed text-sm md:text-base'>
                <p>
                  Mr. Shailendra Reddy brings global insight and technical
                  excellence to the leadership of SR Group. A graduate with
                  distinction in Building Construction Management and Electrical
                  Engineering from Purdue University (USA), he has contributed
                  to large-scale infrastructure projects across Texas, including
                  the landmark redevelopment of the Houston Airport Terminal.
                </p>
                <p>
                  Before returning to India, Mr. Reddy sharpened his expertise
                  at McCarthy Building Companies — a Fortune 500 construction
                  leader — where he oversaw on-ground execution for complex,
                  high-value projects, including Houston Airport and Corpus
                  Christi’s largest hospital. His core competencies include
                  active site management, systems integration, and the
                  disciplined delivery of complex builds with speed and
                  precision.
                </p>
                <p>
                  At SR Group, he plays a pivotal role in aligning global best
                  practices with local execution. He drives innovation across
                  verticals by championing modern construction systems such as
                  Building Information Modeling (BIM), cost optimization, lean
                  methodologies, and digital project tracking. His leadership
                  reflects a new generation of builders — rooted in engineering
                  discipline, driven by data, and committed to future-ready
                  urban development.
                </p>
              </div>
            </div>
          </div>

          {/* Onkar */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:sticky md:top-64 bg-neutral-50 isolate md:z-[17] p-6'>
            {/* Onkar Portrait */}
            <div className='md:col-span-6 xl:col-span-4'>
              <div className='relative w-full bg-gray-200 rounded-md shadow-sm overflow-hidden aspect-[4/5]'>
                <Image
                  src='/images/founders/onkar.avif'
                  alt='Mr. Onkar Reddy'
                  fill
                  className='object-cover'
                  priority
                />
                <a
                  href='https://www.linkedin.com/in/onkarsrgroup/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn profile'
                  className='absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    className='h-4 w-4'
                    fill='currentColor'
                  >
                    <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.9A53.79 53.79 0 0 1 107.58 54c0 29.6-24.09 54.1-53.79 54.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.26-79.2-48.3 0-55.7 37.7-55.7 76.6V448H158.6V148.9h88.9v40.8h1.3c12.4-23.5 42.5-48.3 87.4-48.3 93.5 0 110.7 61.5 110.7 141.5V448z' />
                  </svg>
                  <span className='text-sm'>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Onkar Copy */}
            <div className='md:col-span-6 xl:col-span-8'>
              <h4 className='text-xl md:text-2xl font-semibold text-yellow-200'>
                Mr. Onkar Reddy
              </h4>
              <p className='mt-1 text-sm md:text-base text-black font-bold'>
                Project Manager, SR Group
              </p>

              <div className='mt-4 space-y-4 text-black leading-relaxed text-sm md:text-base'>
                <p>
                  Mr. Onkar Reddy is a design-led project manager at SR Group,
                  bringing global academic training and contextual sensitivity
                  to the firm’s execution and vision. He holds an honours degree
                  in Architecture from the Architectural Association School of
                  Architecture (AA) in London, one of the world’s most
                  prestigious architectural institutions.
                </p>
                <p>
                  His experience spans research-based projects across the UK,
                  Paris, and the Netherlands, where he explored the intersection
                  of urban life, culture, and the built environment. Onkar
                  approaches architecture as a medium for human connection —
                  aiming to soften the boundary between structured spaces and
                  lived experience, and to foster more intuitive, informal
                  interactions between people and place.
                </p>
                <p>
                  Well-versed in advanced architectural software and digital
                  tools, he applies a systems-driven approach to design
                  coordination and site execution. At SR Group, he is actively
                  involved in the day-to-day management of operations, ensuring
                  that each project reflects both creative intent and
                  constructional clarity.
                </p>
                <p>
                  Blending critical design thinking with on-ground
                  problem-solving, Onkar brings a fresh, human-centred lens to
                  how buildings are imagined, constructed, and ultimately
                  experienced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Mission */}
            <div className='bg-blue-200 text-slate-100'>
              <div className='px-6 md:px-10 lg:px-14 py-10 md:py-14 min-h-[220px] flex flex-col justify-center'>
                <h3 className='text-3xl md:text-4xl font-semibold'>
                  Our Mission
                </h3>
                <p className='mt-4 text-sm md:text-base leading-relaxed text-slate-200/90 max-w-prose'>
                  To deliver affordable & top-quality service employing latest
                  construction techniques with meticulous planning and
                  execution. Ensuring our clients and investors get unparalleled
                  value and Returns-on-Investment. We aim to attract and nurture
                  the best-in-class teams with the best practices in the
                  construction business.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className='bg-amber-500'>
              <div className='px-6 md:px-10 lg:px-14 py-10 md:py-14 min-h-[220px] flex flex-col justify-center'>
                <h3 className='text-3xl md:text-4xl font-semibold text-blue-200'>
                  Our Vision
                </h3>
                <p className='mt-4 text-sm md:text-base leading-relaxed text-blue-200 max-w-prose'>
                  SR Group will endeavor to enhance lives by creating great
                  places to live, invest, and rejuvenate. We commit to
                  continuously improve upon the standards of excellence by
                  providing sustainable integrated solutions that align with our
                  core values of honesty, innovation, teamwork, customer
                  satisfaction, and affordability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
