'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function GlobalButton({ children, className, ...props }) {
  const { contextSafe } = useGSAP();

  const buttonRef = useRef();
  const buttonBg = useRef();
  const tl = useRef();

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
      onClick={props.onClick}
      className={`${className} 
    ${
      props.color === 'white'
        ? '  text-neutral-900 bg-neutral-200   active:text-neutral-900   hover:text-neutral-200 '
        : '  text-neutral-200 bg-neutral-900  active:text-neutral-200   hover:text-neutral-900  '
    } group
    active:scale-90 transition-transform duration-200
    relative cursor-none cursorHide `}
      {...props}
    >
      <span className=' pointer-events-none relative z-20'>{children}</span>

      <span
        ref={buttonBg}
        style={{
          clipPath: 'circle(0% at 50% 50%)',
        }}
        className={` 
        ${
          props.color === 'white'
            ? '    bg-neutral-900 -outline-offset-1 outline-neutral-900  outline group-active:bg-neutral-100  group-active:outline-neutral-100'
            : '   bg-neutral-200  -outline-offset-1 outline-neutral-200 outline group-active:bg-neutral-900 group-active:outline-neutral-900'
        } 
        z-10 transition-[background-color,outline]   duration-200  size-full absolute left-0 top-0  rounded-full`}
      ></span>
    </button>
  );
}
