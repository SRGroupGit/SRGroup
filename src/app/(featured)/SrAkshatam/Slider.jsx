/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Slider(props) {
  const { contextSafe } = useGSAP();
  const activeImage = useRef();
  const upcomingImage = useRef();
  const [selectedGallery, setSelectedGallery] = useState(props.GalleryData[0]);
  const [previousGallery, setPreviousGallery] = useState(
    props.GalleryData[props.GalleryData.length - 1]
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
      const currentIndex = props.GalleryData.findIndex(
        (gallery) => gallery === selectedGallery
      );
      const nextIndex = (currentIndex + 1) % props.GalleryData.length;
      setPreviousGallery(selectedGallery);
      setSelectedGallery(props.GalleryData[nextIndex]);
      setDirection('next');
    }, 5000); // Adjust the time delay as needed

    return () => clearInterval(interval);
  }, [props.GalleryData, selectedGallery]);

  const previousHandler = async () => {
    const currentIndex = props.GalleryData.findIndex(
      (gallery) => gallery === selectedGallery
    );

    const previousIndex =
      (currentIndex - 1 + props.GalleryData.length) % props.GalleryData.length;
    setPreviousGallery(selectedGallery);
    setSelectedGallery(props.GalleryData[previousIndex]);
    setDirection('previous');
  };

  const nextHandler = async () => {
    const currentIndex = props.GalleryData.findIndex(
      (gallery) => gallery === selectedGallery
    );
    const nextIndex = (currentIndex + 1) % props.GalleryData.length;
    setPreviousGallery(selectedGallery);
    setSelectedGallery(props.GalleryData[nextIndex]);
    setDirection('next');
  };

  return (
    <div className='  relative m-auto flex size-full items-center  justify-center  overflow-hidden  '>
      <div
        className={` absolute z-10 flex w-full  bg-blend-difference 
        ${props.ArrowType === 'bottom' ? 'bottom-3' : ''} 
        ${props.ArrowType === 'none' ? 'hidden' : ''}
        justify-between
        px-4 `}
      >
        <div
          className='cursorReduce flex aspect-square items-center justify-center rounded-full border-white/20 bg-black/15 p-2   backdrop-blur-xl md:border   md:p-4'
          onClick={previousHandler}
        >
          <PreviousArrow />
        </div>
        <div
          className='cursorReduce flex aspect-square items-center justify-center rounded-full border-white/20  bg-black/15 p-2  backdrop-blur-xl md:border  md:p-4'
          onClick={nextHandler}
        >
          <NextArrow />
        </div>
      </div>
      <Image
        ref={upcomingImage}
        style={{ zIndex: 1 }}
        className='absolute size-full object-cover object-center '
        src={previousGallery.src}
        alt={previousGallery.alt}
      />
      <Image
        ref={activeImage}
        style={{ zIndex: 2 }}
        className=' absolute size-full object-cover object-center ' // Apply the animation class here
        src={selectedGallery.src}
        alt={selectedGallery.alt}
      />
    </div>
  );
}

function NextArrow() {
  return (
    <svg
      width='48'
      height='15'
      viewBox='0 0 48 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M47.2074 8.09395C47.5979 7.70343 47.5979 7.07026 47.2074 6.67974L40.8434 0.315783C40.4529 -0.0747405 39.8197 -0.0747404 39.4292 0.315784C39.0386 0.706309 39.0386 1.33947 39.4292 1.73L45.086 7.38685L39.4292 13.0437C39.0387 13.4342 39.0387 14.0674 39.4292 14.4579C39.8197 14.8484 40.4529 14.8484 40.8434 14.4579L47.2074 8.09395ZM0.553768 8.38689L46.5002 8.38684L46.5002 6.38685L0.553767 6.38689L0.553768 8.38689Z'
        fill='white'
      />
    </svg>
  );
}

function PreviousArrow() {
  return (
    <svg
      width='48'
      height='15'
      viewBox='0 0 48 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.792649 6.90605C0.402125 7.29657 0.402126 7.92974 0.79265 8.32026L7.15662 14.6842C7.54714 15.0747 8.18031 15.0747 8.57083 14.6842C8.96135 14.2937 8.96135 13.6605 8.57083 13.27L2.91397 7.61315L8.57082 1.95629C8.96134 1.56577 8.96134 0.932603 8.57082 0.542079C8.18029 0.151555 7.54713 0.151555 7.1566 0.54208L0.792649 6.90605ZM47.4462 6.61311L1.49976 6.61315L1.49976 8.61315L47.4462 8.61311L47.4462 6.61311Z'
        fill='white'
      />
    </svg>
  );
}
