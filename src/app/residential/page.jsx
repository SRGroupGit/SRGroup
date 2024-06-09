'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import GlobalButton from '../GlobalButton';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Residential() {
  useGSAP(() => {
    gsap.set(subNavRef.current, {
      top: '6rem',
    });

    let animate = false;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 80 && !animate) {
        gsap.to(subNavRef.current, {
          top: '5rem ',
        }),
          (animate = true);
      } else if (scrollY <= 80 && animate) {
        gsap.to(subNavRef.current, {
          top: '6rem',
        }),
          (animate = false);
      }
    });
  }, []);

  return (
    <main>
      <nav
        ref={subNavRef}
        className=' fixed top-24 z-10 flex h-16 w-full items-center justify-between bg-neutral-800 px-4'
      >
        <span className=' text-3xl font-medium text-neutral-200'>Filters</span>
        <GlobalButton color='white' className=' rounded-full p-4'>
          <Icon icon='clarity:filter-line' />
        </GlobalButton>
      </nav>
      <section className=' mt-[calc(64px+96px)]  flex h-[60dvh] min-h-[400px] w-full overflow-hidden'>
        <div className='  flex w-full flex-col items-start'>
          <div className='relative size-full'>
            <Image
              src='/resLarge.png'
              fill
              alt='residential image'
              className=' object-cover object-center'
            ></Image>
          </div>
          <div className=' flex  h-fit w-full flex-col p-4 text-5xl md:text-6xl'>
            Residential
            <span className='  font-bold'>Projects</span>
          </div>
        </div>
        <div className=' relative hidden w-full md:block '>
          <Image
            src='/resSmall.png'
            fill
            alt='residential image'
            className=' object-cover object-center'
          ></Image>
        </div>
      </section>
      <br />
      <hr className=' border-t-2 border-black' />
      <br />
    </main>
  );
}
