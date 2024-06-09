'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import GlobalButton from '../GlobalButton';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { fetchCommercialList } from '@/lib/features/commercialList';
import { useDispatch, useSelector } from 'react-redux';
import HeroGallery from '../HeroGallery';

export default function Commercial() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.commercialList);

  useEffect(() => {
    dispatch(fetchCommercialList());
  }, []);

  const subNavRef = useRef();

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
          <h1 className=' flex  h-fit w-full flex-col p-4 text-5xl md:text-6xl'>
            Commercial
            <span className='  font-bold'>Projects</span>
          </h1>
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
      <section>
        {dataList.data.map((item) => (
          <div key={item.id}>
            <div>
              <div className=' flex flex-col gap-4 px-2'>
                <h2 className=' text-4xl font-bold'>{item.Title}</h2>
                <span className=' flex items-center gap-0.5  text-xl font-light  italic text-neutral-700'>
                  <Icon icon='carbon:location-filled' />
                  {item.location}
                </span>
              </div>

              <div className=' mt-10'>
                <HeroGallery
                  collection={item.collectionName}
                  recordId={item.id}
                  GalleryData={item.hero}
                />
              </div>
            </div>

            <div className=' flex flex-col gap-4 px-2'>
              <p className=' text-xl font-medium'>{item.discription}</p>
              <span className=' flex items-center gap-0.5  text-xl font-light  italic text-neutral-700'>
                <Icon icon='carbon:location-filled' />
                {item.location}
              </span>
            </div>
            <br />
            <hr className=' border-t-2 border-black' />
            <br />
          </div>
        ))}
      </section>
    </main>
  );
}
