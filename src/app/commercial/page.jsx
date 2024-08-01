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
import LayoutGallery from '../LayoutGallery';

export default function Commercial() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.commercialList);
  const [data, setData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    message: '',
    subject: '',
  });

  const url = 'https://sendoff.wtf/api/files';

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || data.name.length < 3) {
      setNameError(true);
      return;
    }
    if (!data.userEmail || !data.userEmail.includes('@')) {
      setEmailError(true);
      return;
    }
    if (!data.phone) {
      setPhoneError(true);
      return;
    }
    if (!data.message) {
      setMessageError(true);
      return;
    }

    if (!nameError && !emailError && !phoneError && !messageError) {
      setLoading(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            userEmail: data.userEmail,
            phone: data.phone,
            message: data.message,
            subject: data.subject,
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          setData({
            name: '',
            userEmail: '',
            phone: '',
            message: '',
            subject: '',
          });
          setLoading(false);
          // timeout to show success message
          setTimeout(() => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
          }, 700);
        } else {
          console.error('Error sending email');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
  };

  return (
    <main>
      {/* <nav
        ref={subNavRef}
        className=' fixed top-24 z-10 flex h-16 w-full items-center justify-between bg-neutral-800 px-4'
      >
        <span className=' text-3xl font-medium text-neutral-200'>Filters</span>
        <GlobalButton color='white' className=' rounded-full p-4'>
          <Icon icon='clarity:filter-line' />
        </GlobalButton>
      </nav> */}
      <section className=' m-auto   mt-[calc(64px+96px)] flex  h-[60dvh] min-h-[400px] w-full max-w-screen-2xl overflow-hidden'>
        <div className='  flex w-full flex-col items-start'>
          <div className='relative size-full'>
            <Image
              src='/resLarge.png'
              fill
              alt='residential image'
              className=' object-cover object-center'
            ></Image>
          </div>
          <h1 className=' flex h-fit  w-full flex-col p-4 text-5xl text-blue-200 md:text-6xl'>
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
              <div className=' mx-auto flex max-w-screen-2xl  flex-col gap-4  px-4'>
                <h2 className=' text-6xl font-bold text-blue-200'>
                  {item.Title}
                </h2>
                <span className=' flex items-center gap-0.5 text-2xl  font-light italic   text-yellow-200'>
                  <Icon icon='carbon:location-filled' />
                  {item.location}
                </span>
              </div>

              <div className=' mt-10 px-4'>
                <HeroGallery
                  collection={item.collectionName}
                  recordId={item.id}
                  GalleryData={item.hero}
                />
              </div>
            </div>
            <div className='  m-auto mt-4 flex h-fit max-w-screen-2xl flex-col gap-4 px-4 md:flex-row'>
              <div className=' relative  size-full md:h-full md:w-2/3'>
                <div className=' sticky top-0  flex w-full flex-col gap-4 px-2 '>
                  <p className='   my-10 text-lg '>{item.discription}</p>
                  <div className=' grid grid-cols-2 gap-2 '>
                    {item.amenities.map((aminity) => (
                      <div className=' flex items-center gap-2 text-neutral-700'>
                        <div className=' relative size-14'>
                          <Image
                            className=' object-contain object-center'
                            fill
                            alt={aminity.icon}
                            src={`/${aminity.icon}.png`}
                          ></Image>
                        </div>
                        <div className=' flex flex-col gap-1'>
                          <span className='  text-md font-bold'>
                            {aminity.title}
                          </span>
                          <span className='  text-sm font-light'>
                            {aminity.discription}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className=' h-fit w-full overflow-hidden rounded-xl bg-blue-200 p-8  text-white  md:w-1/3'>
                {item.contact_us === true ? (
                  <div className=' flex flex-col gap-2'>
                    <div className=' flex flex-col overflow-hidden text-3xl text-yellow-200 md:text-4xl'>
                      <span className='fadeFromBelow   '>Units Available</span>
                      <span className=' fadeFromBelow  font-black'>
                        For Sale
                      </span>
                    </div>
                    <p className=' text-md font-normal text-zinc-300'>
                      Contact us for more details
                    </p>
                    <form className='flex max-w-3xl flex-col'>
                      <div className=' w-full gap-2 md:flex'>
                        <div className=' w-full'>
                          <label
                            className={`
              ${nameError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                            htmlFor='name'
                          >
                            {nameError
                              ? 'Please enter a valid name'
                              : 'Full Name*'}
                          </label>
                          <input
                            placeholder='Full Name*'
                            className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 autofill:text-white  focus:border-neutral-100 focus:outline-none'
                            type='text'
                            value={data.name}
                            onChange={(e) => {
                              setData({
                                ...data,
                                name: e.target.value,
                                subject: item.Title,
                              }),
                                setNameError(false);
                            }}
                          />
                        </div>

                        <div className=' w-full'>
                          <label
                            className={`
              ${emailError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                            htmlFor='userEmail'
                          >
                            {emailError
                              ? 'Please enter a valid email'
                              : 'Email*'}
                          </label>
                          <input
                            placeholder='Email*'
                            className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 focus:border-neutral-100 focus:outline-none'
                            type='email'
                            value={data.userEmail}
                            onChange={(e) => {
                              setData({ ...data, userEmail: e.target.value }),
                                setEmailError(false);
                            }}
                          />
                        </div>
                      </div>
                      <div className=' items-center gap-7 md:flex'>
                        <div className=' w-full'>
                          <label
                            className={`
              ${phoneError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                            htmlFor='phone'
                          >
                            {phoneError
                              ? 'Please enter a valid phone number'
                              : 'Phone*'}
                          </label>
                          <input
                            placeholder='Phone*'
                            className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 focus:border-neutral-100 focus:outline-none'
                            type='tel'
                            value={data.phone}
                            onChange={(e) => {
                              setData({ ...data, phone: e.target.value }),
                                setPhoneError(false);
                            }}
                          />
                        </div>
                      </div>
                      <div className=' w-full'>
                        <label
                          className={`
              ${messageError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                          htmlFor='message'
                        >
                          {messageError ? 'Please enter a message' : 'Message*'}
                        </label>
                        <textarea
                          placeholder='Message*'
                          className=' cursorHide  h-40 w-full cursor-text resize-none border-b border-neutral-400 bg-transparent p-1 focus:border-neutral-100 focus:outline-none'
                          value={data.message}
                          onChange={(e) => {
                            setData({ ...data, message: e.target.value }),
                              setMessageError(false);
                          }}
                        />
                      </div>
                      <GlobalButton
                        color='white'
                        className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                        onClick={handleSubmit}
                      >
                        {
                          loading
                            ? 'Loading...'
                            : 'Submit' /* Added loading state */
                        }
                      </GlobalButton>
                    </form>
                    <Link
                      className=' size-full'
                      href={`${url}/${item.collectionId}/${item.id}/${item.floorplan}`}
                      target='_blank'
                    >
                      <GlobalButton
                        color='white'
                        className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                      >
                        Download Floor Plan
                      </GlobalButton>
                    </Link>
                  </div>
                ) : (
                  <div className=' flex flex-col gap-2'>
                    <div className=' flex flex-col overflow-hidden text-3xl text-yellow-200 md:text-4xl'>
                      <span className='fadeFromBelow  '>All units </span>
                      <span className=' fadeFromBelow  font-black'>Sold.</span>
                    </div>
                    <p className=' text-md font-normal text-zinc-300'>
                      Contact us for more details
                    </p>

                    <Link
                      className=' size-full'
                      href={`${url}/${item.collectionId}/${item.id}/${item.floorplan}`}
                      target='_blank'
                    >
                      <GlobalButton
                        color='white'
                        className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                      >
                        Download Floor Plan
                      </GlobalButton>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className=' mt-10 px-4'>
              <LayoutGallery
                collection={item.collectionName}
                recordId={item.id}
                GalleryData={item.planviews}
                GalleryDiscription={item.plan_discription}
              />
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
