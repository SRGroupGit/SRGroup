import React from 'react';
import CommercialCover from './_images/commercialCover.jpg';
import ResidentialCover from './_images/residentialCover.jpg';
import Image from 'next/image';

export default function SelectGalLery() {
  return (
    <div className=' flex size-full overflow-hidden bg-black'>
      <div className='cursorBig relative h-full w-1/2  overflow-hidden transition-all    duration-200 hover:w-5/6'>
        <Image
          className='  object-cover object-center '
          src={CommercialCover}
          alt='Commercial Cover'
          fill
        />
        <div className=' absolute z-10 flex size-full flex-col items-center justify-between p-12'>
          <p className=' text-lg font-medium text-gray-200'>
            Business Environment: Explore SR Group&apos;s Meticulously Designed
            Commercial Spaces, Where Light, Space, and Positive Vastu Unite
          </p>
          <h4 className=' text-2xl font-bold text-yellow-200 md:text-4xl lg:text-5xl'>
            Commercial
          </h4>
        </div>
      </div>
      <div className='cursorBig group relative h-full w-1/2   overflow-hidden transition-all  duration-200  hover:w-5/6'>
        <Image
          className='  object-cover object-center  '
          src={ResidentialCover}
          alt='Residential Cover'
          fill
        />
        <div className=' absolute z-10 flex size-full flex-col items-center justify-between p-12'>
          <p className=' text-lg font-medium text-gray-200'>
            Discover Your Perfect Harmony: Explore SR Group&apos;s Exquisite
            Residences Where Vastu, Space, and Luxury Converge
          </p>
          <h4 className=' text-2xl font-bold text-yellow-200 md:text-4xl lg:text-5xl'>
            Residential
          </h4>
        </div>
      </div>
    </div>
  );
}
