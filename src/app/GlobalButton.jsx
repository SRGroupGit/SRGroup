'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function GlobalButton({ children, className, ...props }) {
  const { contextSafe } = useGSAP();

  const buttonRef = useRef();
  const buttonBg = useRef();
  /** @type {import('gsap').core.Timeline | null} */
  const tl = useRef(null);

  const rippleOnHover = contextSafe((e) => {
    tl.current = gsap.timeline();
    const rect = buttonBg.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tl.current
      .set(buttonBg.current, {
        clipPath: `circle(0px at ${x}px ${y}px)`,
      })
      .to(buttonBg.current, {
        duration: 0.5,
        clipPath: `circle(150% at ${x}px ${y}px)`,
      });
  });

  const rippleOut = contextSafe((e) => {
    tl.current = gsap.timeline();
    const rect = buttonBg.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tl.current
      .set(buttonBg.current, {
        clipPath: `circle(150px at ${x}px ${y}px)`,
      })
      .to(buttonBg.current, {
        duration: 0.5,
        clipPath: `circle(0% at ${x}px ${y}px)`,
      });
  });

  return (
    <button
      onMouseEnter={rippleOnHover}
      onMouseLeave={rippleOut}
      ref={buttonRef}
      type={props.type || 'button'}
      onClick={props.onClick}
      className={`uppercase ${className} 
    ${
      props.color === 'white'
        ? '  bg-yellow-200 text-neutral-900     '
        : '  bg-blue-200 text-neutral-200  '
    } cursorHide
    group relative
    transition-transform duration-200 active:scale-90 `}
      {...props}
    >
      <span className=' pointer-events-none  relative z-20'>{children}</span>

      <span
        ref={buttonBg}
        style={{
          clipPath: 'circle(0% at 50% 50%)',
        }}
        className={` 
        ${
          props.color === 'white'
            ? '    bg-yellow-100 outline -outline-offset-1  outline-yellow-100 group-active:bg-yellow-200  group-active:outline-yellow-200'
            : '   bg-blue-100 outline -outline-offset-1 outline-blue-100 group-active:bg-blue-200 group-active:outline-blue-200'
        } 
        absolute left-0   top-0  z-10 size-full rounded-full transition-[background-color,outline]  duration-200`}
      ></span>
    </button>
  );
}

