import React, { useState, useEffect, useRef } from 'react';
import commercialCover from './_images/commercialCover.jpg';
import residentialCover from './_images/residentialCover.jpg';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GalleryData = [
  {
    title: 'Commercial',
    location: 'commercial location',
    description:
      "Business Environment: Explore SR Group's Meticulously Designed Commercial Spaces, Where Light, Space, and Positive Vastu Unite",
    image: commercialCover,
  },
  {
    title: 'Residential',
    location: 'residential location',
    description:
      "Discover Your Perfect Harmony: Explore SR Group's Exquisite Residences Where Vastu, Space, and Luxury Converge",
    image: residentialCover,
  },
];

export default function Gallery() {
  const { contextSafe } = useGSAP();
  const activeImage = useRef();
  const upcomingImage = useRef();
  const [selectedGallery, setSelectedGallery] = useState(GalleryData[0]);
  const [previousGallery, setPreviousGallery] = useState(
    GalleryData[GalleryData.length - 1]
  );

  const [direction, setDirection] = useState('next');

  useGSAP(() => {
    const tl = gsap.timeline();

    if (direction === 'next') {
      tl.fromTo(
        activeImage.current,
        { clipPath: 'circle(50% at -50% 50%)' },
        {
          clipPath: 'circle(150% at 100% 50%)',
          duration: 2,
          ease: 'power2.inOut',
        }
      );
    } else {
      // Animation for the "previous" button
      tl.fromTo(
        activeImage.current,
        { clipPath: 'circle(50% at 150% 50%)' }, // Start from the right
        {
          clipPath: 'circle(150% at 0% 50%)', // Move to the left
          duration: 2,
          ease: 'power2.inOut',
        }
      );
    }

    tl.fromTo(
      upcomingImage.current,
      { opacity: 1 },
      { opacity: 1, duration: 0.5 },
      '<=1'
    );

    return tl;
  }, [selectedGallery, direction]); // Include direction in the dependency array

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = GalleryData.findIndex(
        (gallery) => gallery.title === selectedGallery.title
      );
      const nextIndex = (currentIndex + 1) % GalleryData.length;
      setPreviousGallery(selectedGallery);
      setSelectedGallery(GalleryData[nextIndex]);
      setDirection('next');
    }, 10000); // Adjust the time delay as needed

    return () => clearInterval(interval);
  }, [selectedGallery]);

  const previousHandler = async () => {
    const currentIndex = GalleryData.findIndex(
      (gallery) => gallery.title === selectedGallery.title
    );

    const previousIndex =
      (currentIndex - 1 + GalleryData.length) % GalleryData.length;
    setPreviousGallery(selectedGallery);
    setSelectedGallery(GalleryData[previousIndex]);
    setDirection('previous');
  };

  const nextHandler = async () => {
    const currentIndex = GalleryData.findIndex(
      (gallery) => gallery.title === selectedGallery.title
    );
    const nextIndex = (currentIndex + 1) % GalleryData.length;
    setPreviousGallery(selectedGallery);
    setSelectedGallery(GalleryData[nextIndex]);
    setDirection('next');
  };

  return (
    <div className=' flex  flex-col px-4 md:gap-3 '>
      <div className=' flex w-full justify-between max-md:mb-3'>
        <div className='cursorReduce p-4' onClick={previousHandler}>
          <PreviousArrow />
        </div>
        <div className='cursorReduce p-4' onClick={nextHandler}>
          <NextArrow />
        </div>
      </div>
      <div className=' flex flex-col-reverse md:flex-row md:gap-4 lg:gap-6 '>
        <div className=' flex flex-col justify-between md:w-1/4 md:max-w-sm'>
          <h5 className=' block hyphens-auto break-words text-xl    font-medium text-neutral-700 md:hidden md:w-1/4 md:max-w-sm md:text-3xl lg:text-4xl'>
            {selectedGallery.location}
          </h5>
          <h4 className=' block text-2xl font-bold  text-black md:hidden md:text-3xl lg:text-5xl'>
            {selectedGallery.title}
          </h4>
          <p>{selectedGallery.description}</p>
        </div>
        <div className=' cursorBig relative aspect-video max-h-[calc(70dvh-90px)]   w-full overflow-hidden rounded-md '>
          <Image
            fill
            ref={upcomingImage}
            style={{ zIndex: 1 }}
            className='absolute object-cover object-center '
            src={previousGallery.image}
            alt='asaS'
          />

          <Image
            ref={activeImage}
            fill
            style={{ zIndex: 2 }}
            className=' absolute object-cover object-center ' // Apply the animation class here
            src={selectedGallery.image}
            alt='asaS'
          />
        </div>
      </div>

      <div className=' flex flex-col md:flex-row md:items-end  md:gap-4 lg:gap-6'>
        <h5 className=' hidden hyphens-auto break-words text-xl font-bold md:block md:w-1/4 md:max-w-sm md:text-3xl lg:text-4xl'>
          {selectedGallery.location}
        </h5>
        <div className=' flex w-full flex-col justify-between md:flex-row md:items-end'>
          <h4 className=' hidden  text-2xl  font-bold md:block md:text-3xl lg:text-5xl'>
            {selectedGallery.title}
          </h4>
          <span className=' cursorBig  text-xl font-medium underline md:text-3xl lg:text-4xl'>
            See Details
          </span>
        </div>
      </div>
    </div>
  );
}

function NextArrow() {
  return (
    <svg
      width='93'
      height='23'
      viewBox='0 0 93 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M82.5147 0.43934L92.0607 9.98528C92.6464 10.5711 92.6464 11.5208 92.0607 12.1066L82.5147 21.6525C81.9289 22.2383 80.9792 22.2383 80.3934 21.6525C79.8076 21.0668 79.8076 20.117 80.3934 19.5312L87.3787 12.5459H0V9.54594H87.3787L80.3934 2.56066C79.8076 1.97487 79.8076 1.02513 80.3934 0.43934C80.9792 -0.146447 81.9289 -0.146447 82.5147 0.43934Z'
        fill='black'
      />
    </svg>
  );
}

function PreviousArrow() {
  return (
    <svg
      width='93'
      height='23'
      viewBox='0 0 93 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.4853 21.6525L0.93934 12.1066C0.353555 11.5208 0.353555 10.5711 0.93934 9.98528L10.4853 0.439337C11.0711 -0.14645 12.0208 -0.146449 12.6066 0.439337C13.1924 1.02512 13.1924 1.97487 12.6066 2.56066L5.62132 9.54594L93 9.54595L93 12.5459L5.62132 12.5459L12.6066 19.5312C13.1924 20.117 13.1924 21.0668 12.6066 21.6525C12.0208 22.2383 11.0711 22.2383 10.4853 21.6525Z'
        fill='black'
      />
    </svg>
  );
}
