/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function SliderData(props) {
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
      ></div>
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
