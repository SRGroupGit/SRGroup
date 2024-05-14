'use client';
import React from 'react';

import { useState } from 'react';
import GlobalButton from './GlobalButton';
import Link from 'next/link';

export default function GlobalFooter() {
  const [data, setData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    message: '',
  });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          setData({
            name: '',
            userEmail: '',
            phone: '',
            message: '',
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
    <footer className=' mt-10 w-full bg-neutral-950 px-3 py-8 text-neutral-200'>
      {success && (
        <div className=' fixed bottom-10 right-0 z-[9] bg-black px-12 py-3 text-white'>
          Message sent successfully
        </div>
      )}
      <div className=' m-auto w-full max-w-screen-2xl'>
        <div className=' grid-cols-2 gap-20 md:grid'>
          <div>
            <span className=' text-4xl font-bold'>Contact Us</span>
            <form className='flex max-w-3xl flex-col'>
              <div className=' w-full gap-2 md:flex'>
                <div className=' w-full'>
                  <label
                    className={`
              ${nameError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                    htmlFor='name'
                  >
                    {nameError ? 'Please enter a valid name' : 'Full Name*'}
                  </label>
                  <input
                    placeholder='Full Name*'
                    className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 autofill:text-white  focus:border-neutral-100 focus:outline-none'
                    type='text'
                    value={data.name}
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value }),
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
                    {emailError ? 'Please enter a valid email' : 'Email*'}
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
                <GlobalButton
                  color='white'
                  className=' mt-4 hidden w-full rounded-full px-6  py-2 text-base font-medium md:block md:h-fit md:w-32'
                  onClick={handleSubmit}
                >
                  {loading ? 'Loading...' : 'Submit' /* Added loading state */}
                </GlobalButton>
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
                className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium md:hidden md:h-fit md:w-28'
                onClick={handleSubmit}
              >
                {loading ? 'Loading...' : 'Submit' /* Added loading state */}
              </GlobalButton>
            </form>
          </div>
          <div className='  mt-20 flex w-full  flex-col gap-7'>
            <div className=' grid grid-cols-2'>
              <span>CONTACT</span>
              <span className=' flex flex-col gap-4'>
                +91 7448007500 info@sreddygroup.com
              </span>
            </div>
            <div className=' grid grid-cols-2'>
              <span>OFFICE</span>
              <span>
                5th floor, Business Point, Sai Chowk Rd, Laxman Nagar, Baner,
                Pune, Maharashtra, 411045
              </span>
            </div>
            <div className=' grid grid-cols-2'>
              <span>SOCIALS</span>
              <span className=' flex flex-col gap-2'>
                <Link
                  href='https://www.instagram.com/sr_group_pune/'
                  className='cursorReduce '
                  target='_blank'
                >
                  Instagram
                </Link>

                <Link
                  href='https://www.facebook.com/people/SRGroupPune/61557562022935/'
                  className='cursorReduce '
                  target='_blank'
                >
                  Facebook
                </Link>

                <Link
                  href='https://www.linkedin.com/company/sr-group-pune/about/'
                  className='cursorReduce '
                  target='_blank'
                >
                  LinkedIn
                </Link>

                <Link
                  href='https://wa.me/+917448007500'
                  className='cursorReduce '
                  target='_blank'
                >
                  Whatsapp
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
