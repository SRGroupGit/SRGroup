'use client';
import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import GlobalButton from './GlobalButton';

export default function ProjectCard(props) {
  const { contextSafe } = useGSAP();
  const CardDrop = useRef(null);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const imageContainer = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(imageContainer, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageContainer, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      imageContainer.removeEventListener('mouseenter', handleMouseEnter);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(detailsRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(detailsRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  const handelOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex border border-black/20 text-zinc-700 text-sm flex-col'>
      <div className=' w-full aspect-[4/3] relative overflow-hidden'>
        <Image
          ref={imageRef}
          src={props.image}
          alt={props.title}
          fill
          className='object-cover'
        />
      </div>
      <div
        onClick={handelOpen}
        className='border-b border-black/20 p-3 flex justify-between items-center w-full cursor-pointer'
      >
        <span>{props.title}</span>
        <div className='flex gap-1 items-center'>
          <span>{props.location}</span>
          <Icon
            icon='mingcute:down-line'
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      <div
        ref={detailsRef}
        className='flex flex-col gap-2 w-full overflow-hidden'
        style={{ height: 0, opacity: 0 }}
      >
        <div className=' flex px-3  pt-3  justify-between w-full   items-center'>
          <span>Availability</span>
          <span>{props.availability}</span>
        </div>
        <div className=' flex px-3  justify-between w-full   items-center'>
          <span>Locality</span>
          <span>{props.locality}</span>
        </div>
        <div className=' flex px-3  justify-between w-full   items-center'>
          <span>Type</span>
          <span>{props.type}</span>
        </div>
        <div className=' flex px-3  justify-between w-full   items-center'>
          <span>Size</span>
          <span>{props.size}</span>
        </div>
        <div className=' flex px-2 pb-5   justify-between w-full text-3xl   items-center'>
          {props.link == 'na' ? null : (
            <Link href={props.link}>
              <GlobalButton
                color='white'
                className='  w-fit  rounded-full px-4 py-2.5  text-sm'
              >
                KNOW MORE
              </GlobalButton>
            </Link>
          )}
          {props.map == 'na' ? null : (
            <Link href={props.map} target='_blank'>
              <Icon icon='tabler:map-2' />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
