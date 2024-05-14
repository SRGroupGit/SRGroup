import React from 'react';
import Image from 'next/image';
import TestimonialsBackground from './testimonials.png';

export default function Testimonials() {
  return (
    <div className=' relative size-full overflow-hidden'>
      <Image
        className=' object-cover object-center'
        src={TestimonialsBackground}
        fill
        alt='Testimonials'
      />
    </div>
  );
}
