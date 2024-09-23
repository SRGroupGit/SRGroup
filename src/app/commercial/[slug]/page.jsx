'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import GlobalButton from '../../GlobalButton';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { fetchCommercial } from '@/lib/features/commercial';
import { useDispatch, useSelector } from 'react-redux';
import HeroGallery from '../../HeroGallery';
import LayoutGallery from '../../LayoutGallery';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useParams } from 'next/navigation';

export default function CommercialSolo() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
  }

  const params = useParams();

  const dispatch = useDispatch();
  const detail = useSelector((state) => state.commercial);
  const [data, setData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    message: '',
    subject: '',
  });

  const url = 'https://admin.sreddygroup.com/api/files';

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [indexMenu, setIndexMenu] = useState(false);
  const [indexId, setIndexId] = useState('none');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCommercial(params.slug));
      } catch (error) {
        console.error('Error fetching commercial:', error);
      } finally {
        setLoadingData(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subNavRef = useRef();

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
      {success && (
        <div className=' fixed bottom-10 right-0 z-[9] bg-black px-12 py-3 text-white'>
          Message sent successfully
        </div>
      )}
      {loadingData ? (
        <div>Loading</div>
      ) : (
        <section className=' w-full overflow-x-hidden px-3'>
          <div className='fadeIn'>
            <div>
              <div className=' mx-auto flex max-w-screen-2xl  flex-col gap-4  px-4'>
                <h2 className=' text-6xl font-bold text-blue-200'>
                  {detail.data.Title}
                </h2>
                <span className=' flex items-center gap-0.5 text-2xl  font-light italic   text-yellow-200'>
                  <Icon icon='carbon:location-filled' />
                  {detail.data.location}
                </span>
              </div>

              <div className=' mt-10'>
                <HeroGallery
                  collection={detail.data.collectionName}
                  recordId={detail.data.id}
                  GalleryData={detail.data.hero}
                />
              </div>
            </div>
            <div className='m-auto  mt-4 flex h-fit max-w-screen-2xl flex-col gap-4 md:flex-row'>
              <div className=' relative  size-full md:h-full md:w-2/3'>
                <div className=' sticky top-0  flex w-full flex-col gap-4  '>
                  <p className='   my-10 text-lg '>{detail.data.discription}</p>
                  <div className=' grid grid-cols-2 gap-2 '>
                    {detail.data.amenities.map((aminity) => (
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
                {detail.data.contact_us === true ? (
                  <div className=' flex flex-col gap-2'>
                    <div className=' flex flex-col overflow-hidden text-3xl text-yellow-200 md:text-4xl'>
                      <span className='fadeFromBelow   '>Units Available</span>
                      <span className=' fadeFromBelow  font-black'>
                        For Sale
                      </span>
                    </div>
                    <p className=' text-md font-normal text-zinc-300'>
                      Contact us for more details.
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
                                subject: detail.data.Title,
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
                      <div className=' details.-center gap-7 md:flex'>
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
                      href={`${url}/${detail.data.collectionId}/${detail.data.id}/${detail.data.floorplan}`}
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
                      Contact us for more details.
                    </p>

                    <Link
                      className=' size-full'
                      href={`${url}/${detail.data.collectionId}/${detail.data.id}/${detail.data.floorplan}`}
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
            <div className=' mt-10 '>
              <LayoutGallery
                collection={detail.data.collectionName}
                recordId={detail.data.id}
                GalleryData={detail.data.planviews}
                GalleryDiscription={detail.data.plan_discription}
              />
            </div>
            <div className=' mb-40 size-1'></div>
          </div>
        </section>
      )}
    </main>
  );
}
