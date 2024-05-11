'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import GlobalButton from './GlobalButton';

export default function GlobalNavBar() {
  const pathname = usePathname();
  const [colorMode, setColorMode] = useState('light');
  const [navOpen, setNavOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  const { contextSafe } = useGSAP();

  const navRef = useRef();
  const customCursor = useRef();
  const navMenu = useRef();
  const firstDash = useRef();
  const secondDash = useRef();
  const thirdDash = useRef();
  const navMenuContainer = useRef();
  const tl = useRef();

  const onClickMenu = contextSafe(() => {
    tl.current = gsap.timeline();

    setNavOpen(!navOpen);
    if (navOpen) {
      document.body.style.overflow = 'auto';
      gsap.to([firstDash.current, secondDash.current, thirdDash.current], {
        duration: 0.3,
        y: 0,
        rotation: 0,
        opacity: 1,
        ease: 'power2.inOut',
      });
      tl.current
        .to(navMenu.current, {
          duration: 1,
          clipPath: 'circle(0% at 99% 2%)',
          ease: 'power2.inOut',
        })
        .to(
          '#line',
          {
            duration: 0.5,
            width: 0,
            ease: 'power2.inOut',
          },
          '>-0.2',
          {
            scope: navMenuContainer,
          }
        )
        .to(
          '#menuItem',
          {
            duration: 0.5,

            opacity: 0,
            ease: 'power2.inOut',
          },
          '>-0.2',
          {
            scope: navMenuContainer,
          }
        );
    } else {
      document.body.style.overflow = 'hidden';
      gsap.to(firstDash.current, {
        duration: 0.3,
        y: 5,
        rotation: 45,
        ease: 'power2.inOut',
      });
      gsap.to(secondDash.current, {
        duration: 0.3,
        opacity: 0,
        ease: 'power2.inOut',
      });
      gsap.to(thirdDash.current, {
        duration: 0.3,
        y: -6,
        rotation: -45,
        ease: 'power2.inOut',
      });
      tl.current
        .to(navMenu.current, {
          duration: 0.7,
          clipPath: 'circle(200% at 99% 2%)',
          ease: 'power2.inOut',
        })
        .to(
          '#line',
          {
            duration: 0.5,
            width: '100%',
            ease: 'power2.inOut',
            stagger: {
              each: 0.2,
            },
          },
          '>-0.6',
          {
            scope: navMenuContainer,
          }
        )
        .to(
          '#menuItem',
          {
            duration: 0.5,

            opacity: 1,
            ease: 'power2.inOut',
            stagger: {
              each: 0.2,
            },
          },
          '>-1.2',
          {
            scope: navMenuContainer,
          }
        );
    }
  });

  useGSAP(() => {
    gsap.set(navRef.current, {
      y: -150, // Adjust this value as needed
      opacity: 0,
    });
    gsap.set(navMenu.current, {
      clipPath: 'circle(0% at 99% 2%)',
    });
    gsap.set(
      '#line',
      {
        width: 0,
      },
      { scope: navMenuContainer }
    );
    gsap.set(
      '#menuItem',
      {
        opacity: 0,
      },
      { scope: navMenuContainer }
    );

    // Animate to final position
    gsap.to(navRef.current, {
      duration: 0.75,
      delay: 0.5,
      y: 0,
      opacity: 1,
      ease: 'power2.In',
    });
  });

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    if (isTouchDevice) {
      setHidden(true);
      return;
    }
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hideCursor = () => setHidden(true);
    const showCursor = () => setHidden(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);
  useEffect(() => {
    gsap.to('.cursor', {
      x: position.x,
      y: position.y,
      stagger: 0.05,
    });

    const enlargeCursor = () => {
      gsap.to('.cursor', { scale: 2, ease: 'power1.inOut' }); // Adjust scale value as needed
    };

    // Function to reset cursor size
    const resetCursorSize = () => {
      gsap.to('.cursor', { scale: 1, ease: 'power1.inOut' });
    };

    const hideCursor = () => {
      gsap.to('.cursor', { opacity: 0, duration: 0, ease: 'power1.inOut' }); // Adjust scale value as needed
    };

    // Function to reset cursor size
    const resetHideCursorSize = () => {
      gsap.to('.cursor', { opacity: 1, duration: 0, ease: 'power1.inOut' });
    };

    // Add event listeners to all buttons
    const cursorBigElements = document.querySelectorAll('.cursorBig');
    cursorBigElements.forEach((element) => {
      element.addEventListener('mouseenter', enlargeCursor);
      element.addEventListener('mouseleave', resetCursorSize);
    });

    const cursorHideElements = document.querySelectorAll('.cursorHide');
    cursorHideElements.forEach((element) => {
      element.addEventListener('mouseenter', hideCursor);
      element.addEventListener('mouseleave', resetHideCursorSize);
    });

    // Cleanup function to remove event listeners
    return () => {
      cursorBigElements.forEach((element) => {
        element.removeEventListener('mouseenter', enlargeCursor);
        element.removeEventListener('mouseleave', resetCursorSize);
      });
      cursorHideElements.forEach((element) => {
        element.removeEventListener('mouseenter', hideCursor);
        element.removeEventListener('mouseleave', resetHideCursorSize);
      });
    };
  }, [position]);

  useEffect(() => {
    if (
      pathname === '/about' ||
      pathname === '/contact' ||
      pathname === '/commercial' ||
      pathname === '/residential'
    ) {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  }, [pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className={`  fixed left-0 top-0 z-[999]  flex h-20  w-full items-center justify-between px-4 py-3 md:h-24 lg:h-28`}
      >
        <Link
          href='/'
          className={`
      ${colorMode === 'light' || navOpen ? ' text-white  bg-blend-difference  ' : ' text-black'}
       aspect-square h-full`}
        >
          <GlobalNavLogo />
        </Link>
        <div />
        <div className=' flex h-fit  items-center gap-2'>
          <GlobalButton
            color={colorMode === 'light' || navOpen ? 'white' : 'black'}
            className={` whitespace-nowrap rounded-full px-9  py-2 text-sm font-normal transition-all duration-300 ease-in-out md:text-base  lg:px-14  lg:py-3 lg:text-lg`}
          >
            Lets Talk
          </GlobalButton>
          <GlobalButton
            color={colorMode === 'light' || navOpen ? 'white' : 'black'}
            onClick={onClickMenu}
            className={`   flex items-center  justify-center rounded-full p-2.5 transition-all duration-300 ease-in-out md:p-3 lg:p-4 `}
          >
            <span className='  flex aspect-square h-4 flex-col justify-center gap-[4.5px] md:h-5 lg:h-6 '>
              <div
                ref={firstDash}
                className={`
                
                  ${
                    colorMode === 'light' || navOpen
                      ? 'bg-black   group-hover:bg-white  group-active:bg-white   '
                      : '  bg-white   group-hover:bg-black  group-active:bg-black '
                  } 
                
                h-px w-full  mix-blend-difference`}
              ></div>
              <div
                ref={secondDash}
                className={`
                
                ${
                  colorMode === 'light' || navOpen
                    ? 'bg-black   group-hover:bg-white  group-active:bg-white   '
                    : '  bg-white   group-hover:bg-black  group-active:bg-black '
                } 
              
              h-px w-full  mix-blend-difference`}
              ></div>
              <div
                ref={thirdDash}
                className={`
                
                  ${
                    colorMode === 'light' || navOpen
                      ? 'bg-black   group-hover:bg-white  group-active:bg-white   '
                      : '  bg-white   group-hover:bg-black  group-active:bg-black '
                  } 
                
                h-px w-full  mix-blend-difference`}
              ></div>
            </span>
          </GlobalButton>
        </div>
      </nav>

      <div
        style={{
          clipPath: 'circle(0% at 99% 2%)',
        }}
        ref={navMenu}
        className=' fixed left-0  z-[99] h-dvh w-full bg-black  '
      >
        <div
          ref={navMenuContainer}
          className=' mt-16 flex h-[calc(100%-64px)] flex-col  items-start  justify-center overflow-hidden text-5xl font-bold text-white md:mt-20  md:h-[calc(100%-80px)] md:text-6xl lg:mt-24  lg:h-[calc(100%-96px)]  lg:text-7xl'
        >
          <hr id='line' className=' w-full bg-white' />
          <Link
            id='menuItem'
            className=' group w-full bg-black text-white  hover:bg-white hover:text-black'
            href='/'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-4 group-hover:hidden md:py-6'>
              HOME
            </div>
            <div className=' relative  hidden w-full items-center  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee  whitespace-nowrap'>
                <span className='mx-4'>HOME</span>
                <span className=' inline-block h-full w-64 rounded-full bg-gray-500'>
                  .
                </span>
                <span className='mx-4'>HOME</span>
                <span className=' inline-block h-full w-64 rounded-full bg-gray-500'>
                  .
                </span>
                <span className='mx-4'>HOME</span>
                <span className=' inline-block h-full w-64 rounded-full bg-gray-500'>
                  .
                </span>
                <span className='mx-4'>HOME</span>
              </div>

              <div className='absolute  m-auto animate-marquee2 whitespace-nowrap'>
                <span className=' inline-block h-full w-64 rounded-full bg-gray-500'>
                  .
                </span>
                <span className='mx-4'>HOME</span>
                <span className=' inline-block h-full w-64 rounded-full bg-gray-500'>
                  .
                </span>
                <span className='mx-4'>HOME</span>
                <span className=' inline-block h-full w-64 rounded-full bg-gray-500'>
                  .
                </span>
                <span className='mx-4'>HOME</span>
                <span className=' inline-block h-full w-64 rounded-full bg-gray-500'>
                  .
                </span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            id='menuItem'
            className=' group w-full bg-black text-white  hover:bg-white hover:text-black'
            href='/contact'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-4 group-hover:hidden md:py-6'>
              CONTACT
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            id='menuItem'
            className=' group w-full bg-black text-white  hover:bg-white hover:text-black'
            href='/about'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-4 group-hover:hidden md:py-6'>
              ABOUT
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            id='menuItem'
            className=' group w-full bg-black text-white  hover:bg-white hover:text-black'
            href='/commercial'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-4 group-hover:hidden md:py-6'>
              COMMERCIAL
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            id='menuItem'
            className=' group w-full bg-black text-white  hover:bg-white hover:text-black'
            href='/residential'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-4 group-hover:hidden md:py-6'>
              RESIDENTIAL
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>Marquee Item 1</span>
                <span className='mx-4 '>Marquee Item 2</span>
                <span className='mx-4 '>Marquee Item 3</span>
                <span className='mx-4 '>Marquee Item 4</span>
                <span className='mx-4 '>Marquee Item 5</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
        </div>
      </div>
      <div
        className='cursor'
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          left: 0,
          top: 0,
          minWidth: '30px',
          width: '3vw',
          maxWidth: '100px',
          aspectRatio: '1/1',
          borderRadius: '50%',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          zIndex: 9999,
          display: hidden ? 'none' : 'block',
        }}
      ></div>
    </>
  );
}

const GlobalNavLogo = () => {
  return (
    <svg
      className=' transition-all duration-300 ease-in-out '
      viewBox='0 0 87 87'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.94 18.0737C23.7091 19.209 23.4589 19.9265 23.1919 20.2235C22.925 20.5205 22.5618 20.6691 22.0976 20.6691C21.6166 20.6691 20.7772 20.367 19.577 19.7628C18.3768 19.1587 17.3594 18.7433 16.5224 18.5193C15.4184 18.2223 14.2808 18.0737 13.1071 18.0737C9.88896 18.0737 7.22163 19.1335 5.10509 21.2556C2.98854 23.3777 1.93027 25.9453 1.93027 28.961C1.93027 30.7307 2.3175 32.3493 3.08956 33.8194C3.86402 35.2895 4.9704 36.6211 6.41109 37.8118C7.85179 39.0025 10.2161 40.4474 13.5063 42.139C15.8538 43.3498 17.4893 44.3316 18.4153 45.0842C19.3413 45.8369 20.0292 46.6324 20.4837 47.4706C20.9383 48.3089 21.1644 49.1723 21.1644 50.0685C21.1644 51.5763 20.5727 52.8979 19.3894 54.0332C18.206 55.1685 16.621 55.7374 14.6271 55.7374C12.0488 55.7374 9.64364 54.6827 7.41164 52.5681C5.17965 50.4561 3.67161 47.3901 2.88993 43.37H1.90381V57.6656H2.88993C3.20981 56.9029 3.62831 56.334 4.14302 55.9614C4.65773 55.5889 5.14838 55.4026 5.61017 55.4026C6.16095 55.4026 6.86326 55.5889 7.7171 55.9614C9.24678 56.631 10.5167 57.0892 11.5317 57.3308C12.5443 57.5725 13.6218 57.6933 14.7594 57.6933C18.3864 57.6933 21.3785 56.553 23.7355 54.2723C26.0902 51.9917 27.2687 49.2705 27.2687 46.1063C27.2687 43.6116 26.5399 41.3989 25.08 39.4606C23.6056 37.5248 20.7507 35.4682 16.5176 33.2907C13.4943 31.7275 11.563 30.6375 10.7284 30.0233C9.59072 29.1674 8.76335 28.3015 8.24864 27.4255C7.87584 26.776 7.68824 26.0309 7.68824 25.1926C7.68824 23.871 8.21737 22.703 9.27565 21.6886C10.3339 20.6741 11.7698 20.1681 13.5833 20.1681C15.9307 20.1681 18.1146 21.1297 20.1326 23.058C22.1505 24.9837 23.418 27.5287 23.9327 30.6929H25.0271L24.7337 18.0737H23.9327H23.94Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M44.0486 18.9399H27.2437V19.9719C28.8984 19.9719 30.0264 20.1305 30.6325 20.4477C31.2362 20.7649 31.6595 21.1878 31.9001 21.7164C32.1406 22.2476 32.2608 23.5364 32.2608 25.583V50.1517C32.2608 52.1983 32.1406 53.4846 31.9001 54.0032C31.6595 54.5242 31.241 54.9497 30.647 55.2744C30.0505 55.6016 28.9152 55.7628 27.2461 55.7628V56.7948H45.7586V55.7628C44.1063 55.7628 42.9759 55.6067 42.3698 55.287C41.7661 54.9698 41.3427 54.5469 41.1022 54.0158C40.8617 53.4846 40.7415 52.1958 40.7415 50.1492V39.5388H43.1154L54.7732 56.7923H66.1641V55.7602C65.202 55.7049 64.3578 55.3877 63.629 54.8112C63.148 54.4009 62.3399 53.3688 61.2022 51.7124L52.5075 38.8969C54.7131 38.3205 56.428 37.4545 57.657 36.3016C59.5787 34.4766 60.5384 32.1682 60.5384 29.3765C60.5384 27.0883 59.8986 25.0921 58.6167 23.3879C57.3371 21.6837 55.6824 20.5157 53.6572 19.8838C51.6296 19.252 48.426 18.9348 44.0534 18.9348L44.0486 18.9399ZM40.7415 20.9763H43.5964C46.4609 20.9763 48.5366 21.6661 49.8258 23.043C51.1149 24.42 51.7595 26.5521 51.7595 29.4369C51.7595 31.4281 51.4084 33.0442 50.7061 34.2802C50.0038 35.5187 49.0393 36.3746 47.8126 36.8504C46.5836 37.3236 44.734 37.5628 42.2639 37.5628H40.7439V20.9789L40.7415 20.9763Z'
      />
      <path d='M7.39829 75.7074C7.79515 75.7074 8.15833 75.6873 8.48784 75.6495C8.81975 75.6093 9.13002 75.5514 9.42585 75.4733C9.71928 75.3953 9.99588 75.3021 10.2556 75.1889C10.5154 75.0781 10.7752 74.9522 11.0349 74.8088V71.423H8.76202C8.63215 71.423 8.52872 71.3827 8.44935 71.3047C8.36998 71.2266 8.3315 71.131 8.3315 71.0152V69.8371H12.8364V75.7301C12.4684 76.0095 12.0836 76.2512 11.6843 76.4601C11.285 76.6665 10.8593 76.8402 10.4048 76.9787C9.95018 77.1171 9.46433 77.2228 8.94722 77.2883C8.42771 77.3563 7.8649 77.389 7.2588 77.389C6.19331 77.389 5.21681 77.1977 4.3293 76.815C3.44179 76.4324 2.67695 75.8962 2.03718 75.209C1.395 74.5193 0.894722 73.6936 0.536352 72.727C0.177982 71.7628 0 70.7031 0 69.5451C0 68.3871 0.175577 67.3047 0.526732 66.3431C0.877886 65.379 1.38057 64.5533 2.03237 63.8611C2.68417 63.1713 3.47306 62.6377 4.39665 62.2601C5.32023 61.8825 6.35686 61.6912 7.50412 61.6912C8.08377 61.6912 8.62253 61.7365 9.12039 61.8246C9.61827 61.9127 10.0801 62.0436 10.5082 62.2097C10.9339 62.3784 11.3283 62.5823 11.6915 62.8214C12.0523 63.0606 12.3914 63.3299 12.7041 63.6295L12.1413 64.5735C12.0258 64.7673 11.8743 64.8629 11.6915 64.8629C11.5809 64.8629 11.463 64.8227 11.3331 64.7446C11.1624 64.6439 10.9724 64.5231 10.7607 64.3796C10.5491 64.2361 10.2917 64.1002 9.98866 63.9668C9.68561 63.8334 9.32724 63.7226 8.91355 63.6295C8.49986 63.5363 8.01161 63.491 7.44399 63.491C6.61902 63.491 5.87101 63.632 5.20238 63.9139C4.53374 64.1959 3.96372 64.5986 3.49471 65.1247C3.0233 65.6509 2.66252 66.2852 2.40998 67.0328C2.15743 67.7805 2.02996 68.6162 2.02996 69.5451C2.02996 70.474 2.16225 71.3827 2.42441 72.1429C2.68657 72.9032 3.05697 73.5501 3.5356 74.0762C4.01182 74.6049 4.57944 75.0076 5.23364 75.287C5.88785 75.5665 6.61181 75.7049 7.40311 75.7049L7.39829 75.7074Z' />
      <path d='M19.0869 69.3011H21.165C21.7447 69.3011 22.2546 69.2281 22.6947 69.0821C23.1348 68.9361 23.5028 68.7296 23.8011 68.4603C24.0993 68.1935 24.323 67.8738 24.4721 67.5012C24.6212 67.1286 24.6982 66.7183 24.6982 66.2702C24.6982 65.3565 24.4096 64.6667 23.8323 64.2035C23.2575 63.7404 22.3989 63.5063 21.2588 63.5063H19.0894V69.3036L19.0869 69.3011ZM19.0869 70.8114V77.2179H17.1123V61.865H21.2588C22.1872 61.865 22.9881 61.9632 23.664 62.1595C24.3398 62.3559 24.8978 62.6403 25.338 63.0104C25.7781 63.3829 26.1052 63.831 26.3169 64.3546C26.5285 64.8782 26.6344 65.4672 26.6344 66.1167C26.6344 66.6604 26.5526 67.1664 26.389 67.6371C26.2255 68.1079 25.9874 68.5308 25.6771 68.9058C25.3668 69.2809 24.9892 69.6006 24.5395 69.8649C24.0921 70.1292 23.587 70.3306 23.0194 70.4666C23.2647 70.6151 23.4836 70.8341 23.6736 71.1185L27.9524 77.2154H26.1918C25.831 77.2154 25.5641 77.0694 25.3933 76.7749L21.5859 71.2897C21.4705 71.1185 21.343 70.9952 21.2083 70.9197C21.0712 70.8442 20.8668 70.8064 20.595 70.8064H19.0894L19.0869 70.8114Z' />
      <path d='M42.2322 69.548C42.2322 68.6066 42.1095 67.7582 41.8642 67.0081C41.6189 66.2579 41.2701 65.6261 40.8204 65.1075C40.3706 64.589 39.8246 64.1912 39.1824 63.9118C38.5403 63.6324 37.8235 63.494 37.0322 63.494C36.2409 63.494 35.5338 63.6324 34.894 63.9118C34.2518 64.1887 33.7035 64.589 33.2513 65.1075C32.7967 65.6261 32.448 66.2605 32.2026 67.0081C31.9573 67.7582 31.8346 68.6066 31.8346 69.548C31.8346 70.4895 31.9573 71.3353 32.2026 72.0829C32.448 72.8306 32.7991 73.4624 33.2513 73.9785C33.7059 74.497 34.2518 74.8922 34.894 75.1666C35.5362 75.441 36.2481 75.5795 37.0322 75.5795C37.8163 75.5795 38.5403 75.441 39.1824 75.1666C39.8246 74.8922 40.3706 74.4945 40.8204 73.9785C41.2701 73.4599 41.6189 72.8281 41.8642 72.0829C42.1095 71.3353 42.2322 70.492 42.2322 69.548ZM44.2694 69.548C44.2694 70.6984 44.0962 71.7532 43.7474 72.7148C43.3987 73.6764 42.908 74.5021 42.2731 75.1968C41.6381 75.8891 40.8757 76.4278 39.9858 76.8079C39.0958 77.1905 38.1097 77.3818 37.0322 77.3818C35.9547 77.3818 34.971 77.1905 34.0835 76.8079C33.196 76.4253 32.4359 75.8891 31.801 75.1968C31.166 74.5046 30.6754 73.6764 30.3266 72.7148C29.9779 71.7532 29.8047 70.6984 29.8047 69.548C29.8047 68.3976 29.9779 67.3429 30.3266 66.3813C30.6754 65.4197 31.166 64.5915 31.801 63.8967C32.4359 63.1994 33.196 62.6582 34.0835 62.2731C34.971 61.8854 35.9523 61.6941 37.0322 61.6941C38.1121 61.6941 39.0958 61.8854 39.9858 62.2731C40.8757 62.6582 41.6381 63.1994 42.2731 63.8967C42.908 64.594 43.3987 65.4222 43.7474 66.3813C44.0962 67.3429 44.2694 68.3976 44.2694 69.548Z' />
      <path d='M53.7078 75.569C54.3139 75.569 54.8575 75.4633 55.3361 75.2468C55.8148 75.0328 56.2188 74.7333 56.5483 74.3481C56.8803 73.963 57.1328 73.5023 57.306 72.9662C57.4815 72.43 57.5657 71.8409 57.5657 71.199V61.8674H59.5428V71.199C59.5428 72.0851 59.4081 72.9057 59.1387 73.6634C58.8693 74.4211 58.4845 75.0756 57.9818 75.6295C57.4815 76.1833 56.8682 76.6162 56.1443 76.9309C55.4203 77.2455 54.6098 77.4016 53.7078 77.4016C52.8059 77.4016 51.9954 77.243 51.2714 76.9309C50.5474 76.6162 49.9341 76.1833 49.429 75.6295C48.924 75.0756 48.5367 74.4211 48.2674 73.6634C47.998 72.9057 47.8633 72.0851 47.8633 71.199V61.8674H49.8403V71.189C49.8403 71.8309 49.9269 72.4199 50.1025 72.9561C50.2757 73.4923 50.5282 73.9529 50.8601 74.3381C51.1896 74.7232 51.5961 75.0253 52.0771 75.2443C52.5582 75.4633 53.1017 75.5716 53.7102 75.5716L53.7078 75.569Z' />
      <path d='M66.1573 69.8272H68.5119C69.0771 69.8272 69.5774 69.7491 70.0103 69.5931C70.4433 69.437 70.8064 69.2155 71.0999 68.9335C71.3933 68.6516 71.6146 68.3143 71.7661 67.9216C71.9152 67.5289 71.9922 67.0959 71.9922 66.6252C71.9922 65.646 71.7036 64.8832 71.1263 64.3319C70.5491 63.7832 69.6784 63.5063 68.5119 63.5063H66.1573V69.8272ZM66.1573 71.476V77.2179H64.1826V61.865H68.5119C69.4379 61.865 70.2461 61.9783 70.9315 62.2023C71.617 62.4263 72.1846 62.746 72.6368 63.1614C73.0866 63.5767 73.4233 64.0752 73.6446 64.6617C73.8658 65.2482 73.9765 65.9027 73.9765 66.6227C73.9765 67.3426 73.8562 67.9896 73.6181 68.5836C73.38 69.1777 73.0312 69.6887 72.5694 70.1167C72.1101 70.5446 71.5376 70.8794 70.8546 71.1185C70.1715 71.3577 69.3898 71.476 68.5119 71.476H66.1573Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M81.2367 11.8686H81.2222C81.1765 11.8686 81.1212 11.8761 81.0539 11.8912C80.3107 12.0498 79.5651 12.1681 78.805 12.226C77.8165 12.3015 76.8328 12.445 75.8443 12.5231C74.4878 12.6313 73.1481 12.8428 71.8565 13.2959C70.6058 13.7339 69.4369 14.3506 68.3594 15.141C67.9048 15.4733 67.5152 15.8811 67.2266 16.4626C67.5248 16.4324 67.5272 16.4349 67.6427 16.3544C68.6817 15.642 69.7688 15.0278 70.9185 14.5319C70.9979 14.4991 71.082 14.4639 71.1686 14.4488C71.7868 14.3456 72.4001 14.2273 73.0278 14.1618C73.7109 14.0913 74.3964 14.0662 75.0794 14.0309C75.7793 13.9957 76.472 13.8975 77.1743 13.8648C78.3264 13.8119 79.4785 13.7616 80.6041 13.457C80.8013 13.4041 80.9625 13.3412 81.0322 13.1222C81.126 12.8176 81.2391 12.5205 81.3305 12.2159C81.4074 11.9693 81.393 11.8686 81.2391 11.8635L81.2367 11.8686Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M79.7224 14.751H79.6863C79.5708 14.751 79.4578 14.7585 79.3471 14.7812C78.5558 14.9398 77.7525 14.9624 76.954 14.9901C75.6143 15.0379 74.277 15.0304 72.9374 15.1386C71.3764 15.2645 69.8996 15.6975 68.4758 16.352C68.2112 16.4728 67.9683 16.6465 67.7206 16.8101C67.5498 16.9234 67.3887 17.0518 67.29 17.3337C67.7711 17.2909 68.1318 17.0895 68.4998 16.9133C69.5918 16.3922 70.7415 16.143 71.9344 16.1204C73.4064 16.0902 74.8759 16.1959 76.3455 16.2236C77.1608 16.2387 77.9762 16.3067 78.7915 16.216C79.4049 16.1481 79.9051 15.6748 80.0687 15.0631C80.124 14.8592 80.047 14.7661 79.8667 14.7585C79.8186 14.7585 79.768 14.7535 79.7175 14.7535L79.7224 14.751Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M72.3264 10.1953C72.2133 10.2633 72.0955 10.3287 71.9945 10.4143C70.8736 11.3583 69.7047 12.2394 68.733 13.3671C68.2448 13.9335 67.7493 14.4873 67.3525 15.1292C67.2972 15.2173 67.2418 15.3079 67.201 15.4061C67.1649 15.4967 67.2178 15.5446 67.302 15.5622C67.4655 15.5446 67.5425 15.4011 67.6459 15.3004C68.3146 14.6484 68.9543 13.9637 69.7577 13.4703C70.3084 13.1305 70.8736 12.8108 71.4172 12.4558C71.7636 12.2293 72.0233 11.9348 72.1821 11.5446C72.3336 11.1645 72.4009 10.7542 72.5741 10.3816C72.6078 10.3136 72.6102 10.2255 72.5573 10.1651C72.5284 10.1324 72.5019 10.1223 72.4779 10.1223C72.425 10.1223 72.3769 10.1701 72.3288 10.1978L72.3264 10.1953Z'
      />
      <path d='M66.3411 7.90429C66.459 7.90429 66.5263 7.97477 66.5287 8.10315C66.5143 8.22398 66.4493 8.30705 66.3339 8.30957C66.2136 8.31209 66.1487 8.22398 66.1487 8.10567C66.1487 7.98736 66.2233 7.9068 66.3411 7.90429ZM86.8933 41.3314C86.761 41.2382 86.6239 41.1476 86.4844 41.0671C85.378 40.4428 84.2428 39.8839 83.1027 39.3352C81.5514 38.59 80.5268 38.0312 78.5666 36.8581C77.0104 35.9267 75.5216 34.872 74.0857 33.7392C73.9342 33.6209 73.761 33.5328 73.6288 33.3868C73.6119 33.3692 73.5734 33.3339 73.5229 33.2861C79.7475 30.8393 84.1874 24.5687 84.1874 17.1981C84.1874 7.70039 76.83 0 67.7553 0C58.6806 0 51.3232 7.70039 51.3232 17.1981C51.3232 17.7242 51.3545 18.2428 51.3978 18.7588C51.7634 18.8218 52.1338 18.8923 52.5066 18.9728C52.444 18.3888 52.408 17.7972 52.408 17.1981C52.408 8.32719 59.2795 1.1353 67.7553 1.1353C76.2312 1.1353 83.1027 8.32719 83.1027 17.1981C83.1027 24.317 78.6724 30.3459 72.544 32.4529C72.2626 32.2163 72.0197 32.0098 71.9451 31.9394C71.6734 31.6851 71.3751 31.4636 71.1154 31.1942C70.7834 30.8519 70.4491 30.507 70.0956 30.1898C69.1864 29.3692 68.3855 28.4504 67.6832 27.4284C67.0434 26.4945 66.5095 25.4951 65.9058 24.541C65.8553 24.463 65.8264 24.3774 65.8408 24.2818C65.8889 23.952 66.37 23.5694 66.7019 23.5996C67.6327 23.6877 68.5611 23.7682 69.4895 23.8664C71.3944 24.0678 73.2776 23.9268 75.1416 23.4687C76.0484 23.2446 76.8805 22.8419 77.6237 22.2579C78.2924 21.7318 78.6291 21.0043 78.6724 20.1333C78.6868 19.8438 78.6363 19.7884 78.3549 19.7708C77.2918 19.7028 76.2336 19.5568 75.1753 19.4435C73.2006 19.2321 71.2236 19.0383 69.249 18.8344C69.1119 18.8193 68.9603 18.8419 68.8401 18.7513C68.8545 18.6984 68.8521 18.6581 68.8689 18.6456C68.9291 18.6028 68.9916 18.5625 69.0589 18.5348C69.5809 18.3183 70.1244 18.2151 70.68 18.1773C72.0967 18.0792 73.5061 18.195 74.9203 18.2705C75.8968 18.3233 76.8709 18.3913 77.845 18.4517C78.136 18.4693 78.4271 18.4819 78.7181 18.5046C78.9971 18.5272 79.1943 18.4467 79.2929 18.1396C79.3795 17.8652 79.5118 17.6084 79.6104 17.3366C79.7235 17.0269 79.6633 16.9338 79.3579 16.9716C77.9124 17.1553 76.4741 17.0194 75.0334 16.9061C73.6384 16.7979 72.2458 16.6091 70.8412 16.7677C69.7781 16.886 68.7703 17.1251 67.89 17.7997C67.3609 18.205 66.7957 18.565 66.3964 19.1314C66.293 19.2799 66.1535 19.4385 66.216 19.6223C66.2834 19.8161 66.4974 19.7456 66.6442 19.7582C67.8059 19.869 68.97 19.9621 70.1316 20.0703C71.8297 20.2289 73.5277 20.39 75.2282 20.5537C75.7357 20.604 76.2456 20.6569 76.7555 20.6594C76.8541 20.6594 76.9743 20.6392 77.0321 20.7525C77.097 20.8834 77.008 20.9892 76.9383 21.0798C76.7723 21.3013 76.5607 21.4599 76.3081 21.5581C75.6924 21.7972 75.0622 21.9936 74.4129 22.1018C73.3738 22.273 72.3276 22.356 71.2765 22.3762C69.8767 22.4014 68.4745 22.4316 67.0747 22.2981C66.8991 22.2805 66.7644 22.2453 66.7235 22.0338C66.5143 20.9313 65.6749 20.2591 65.1746 19.8564C64.8836 19.6223 64.4867 18.4442 64.4579 18.2629C64.3665 17.6764 64.2438 17.0924 64.3015 16.4908C64.3496 15.9898 64.3592 15.4838 64.4098 14.9829C64.4819 14.2806 64.6046 13.5883 64.9317 12.9615C65.1674 12.5109 65.5282 12.1484 66.2738 12.2667C66.8799 12.3624 67.4739 12.5109 68.0752 12.6217C68.2628 12.6569 68.448 12.6997 68.6356 12.7249C68.7535 12.7425 68.8786 12.7224 68.9267 12.5814C68.9748 12.4455 68.9074 12.3473 68.7968 12.2793C68.7583 12.2567 68.7222 12.2315 68.6813 12.2139C68.2508 12.0024 68.0271 11.6223 67.8972 11.1667C67.8155 10.8722 67.7866 10.5701 67.777 10.263C67.7602 9.60597 67.7505 8.94896 67.6976 8.29698C67.6471 7.67018 67.3561 7.17176 66.7548 7.00058C66.4517 6.91499 66.3363 6.74885 66.2208 6.4795C65.9972 5.96094 65.6677 5.54055 65.0736 5.47007C64.785 5.43483 64.5613 5.49272 64.3087 5.68907C64.1308 5.82752 63.9913 5.92318 64.251 6.00877C64.3304 6.03394 64.4723 6.13463 64.4627 6.21519C64.3881 6.74382 64.542 7.27748 64.4049 7.80611C64.3039 8.18874 64.2534 8.58396 64.162 8.9691C63.8373 10.3536 63.5968 11.7482 63.6642 13.183C63.6786 13.5027 63.705 13.8199 63.5054 14.1069C63.4453 14.195 63.4501 14.341 63.4477 14.4618C63.4116 15.577 63.3611 16.6921 63.4212 17.8048C63.4645 18.5977 63.5752 19.3856 63.7507 20.1559C63.9576 21.0596 64.1692 21.9659 64.4194 22.8595C64.5925 23.4737 64.3857 23.8916 63.9359 24.249C63.6281 24.4932 63.2721 24.6266 62.9234 24.7852C61.9998 25.2056 61.0377 25.4196 60.0275 25.3894C59.4864 25.3743 58.9476 25.3692 58.4065 25.3768C58.0433 25.3793 57.6777 25.3969 57.3265 25.5253C57.0211 25.6361 56.8551 26.0414 56.8263 26.3837C56.8022 26.6757 57.0475 26.3006 57.2953 26.2478C57.365 26.2327 57.2592 26.5322 57.252 26.6228C57.2448 26.7059 57.3025 26.8343 57.3313 26.8544C58.0601 26.0137 58.6109 26.1999 58.7817 26.2578C58.9741 26.3233 59.2916 26.3459 59.3541 26.8142C59.3757 26.9652 59.3613 27.2597 59.318 27.4913C59.2819 27.6851 59.8664 27.2043 59.9049 27.0407C59.9337 26.9073 59.9361 26.7688 59.953 26.6329C60.0107 26.1118 60.1646 25.9331 60.6481 25.845C60.879 25.8047 61.1099 25.7645 61.3432 25.7569C61.9637 25.7292 62.5578 25.5857 63.1398 25.3718C63.6497 25.183 64.1716 25.037 64.6936 24.891C65.0736 24.7827 65.1578 24.828 65.2732 25.2182C65.5618 26.1874 65.9803 27.0835 66.5287 27.9218C67.3032 29.1099 68.1594 30.2251 69.1407 31.2345C69.4847 31.5869 69.8334 31.9343 70.1773 32.2868C70.2158 32.3245 70.5093 32.609 70.858 32.9387C69.8575 33.1527 68.8208 33.266 67.7602 33.266C65.2395 33.266 62.8656 32.6165 60.7659 31.4888C60.7082 31.8487 60.6288 32.2289 60.5278 32.6266C62.7141 33.7518 65.1602 34.3988 67.7602 34.3988C69.1744 34.3988 70.5381 34.1923 71.8489 33.8399C71.9019 33.8852 71.9548 33.9305 71.9932 33.9607C72.6811 34.5045 75.1272 36.5057 76.236 37.2357C77.3207 37.9532 81.7342 40.6794 82.2513 40.9638C82.7684 41.2483 83.2759 41.5453 83.793 41.8273C84.0383 41.9632 84.2476 42.0714 84.1802 41.6183C84.0504 40.7348 84.3438 41.0394 84.7406 41.1325C85.212 41.2407 85.6786 41.3591 86.1477 41.4723C86.3617 41.5227 86.5734 41.573 86.7874 41.6209C86.8596 41.636 86.9438 41.641 86.9823 41.563C87.0304 41.4648 86.975 41.3817 86.8981 41.3288L86.8933 41.3314Z' />
    </svg>
  );
};
