'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function GlobalButton({ children, className, ...props }) {
  const { contextSafe } = useGSAP();
  const button = useRef();

  const rippleOnHover = contextSafe(() => {
    button.current.addEventListener('mousemove', (e) => {
      const rect = button.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distances to the farthest side
      const toLeft = x;
      const toRight = rect.width - x;
      const toTop = y;
      const toBottom = rect.height - y;

      // Maximum distance to ensure the gradient covers the whole button
      const maxDistance = Math.max(toLeft, toRight, toTop, toBottom);

      gsap.set(button.current, {
        backgroundImage:
          'linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff0000)',
        backgroundSize: '0% 0%',
        backgroundPosition: `${x}px ${y}px`,
        backgroundRepeat: 'no-repeat',
      });

      gsap.to(button.current, {
        duration: 0.5,
        backgroundSize: `${2 * maxDistance}px ${2 * maxDistance}px`,
        ease: 'power2.out',
      });
    });
  });

  const rippleOut = contextSafe(() => {
    gsap.to(button.current, {
      duration: 0.5,
      backgroundSize: '0% 0%',
      backgroundImage: 'none',
      ease: 'power2.out',
    });
  });

  return (
    <span className='relative'>
      <span className='absolute z-10 size-full'>
        <span
          onMouseEnter={rippleOnHover}
          onMouseLeave={rippleOut}
          className=' z-10 size-full rounded-full bg-black   bg-blend-difference'
        ></span>
      </span>
      <button className={`${className}`} ref={button} {...props}>
        {children}
      </button>
    </span>
  );
}
