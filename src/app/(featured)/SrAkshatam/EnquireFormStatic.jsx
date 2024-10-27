'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import GlobalButton from '@/app/GlobalButton';
import { Icon } from '@iconify/react';
import BrochureForm from './BrochureForm';

export default function EnquireFormStatic(props) {
  const [FloorFormData, setFloorPlanFormData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    message: '',
    subject: '',
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [floorPlanSuccess, setFloorPlanSuccess] = useState(false);
  const [floorPlanLoading, setFloorPlanLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const handleSubmitFloorPlan = async (e) => {
    e.preventDefault();

    if (!FloorFormData.name || FloorFormData.name.length < 3) {
      setNameError(true);
      return;
    }
    if (!FloorFormData.userEmail || !FloorFormData.userEmail.includes('@')) {
      setEmailError(true);
      return;
    }
    if (!FloorFormData.phone) {
      setPhoneError(true);
      return;
    }

    if (!nameError && !emailError && !phoneError) {
      setFloorPlanLoading(true);
      setFloorPlanSuccess(false);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: FloorFormData.name,
            userEmail: FloorFormData.userEmail,
            phone: FloorFormData.phone,
            message: FloorFormData.message,
            subject: FloorFormData.subject,
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          setFloorPlanFormData({
            name: '',
            userEmail: '',
            phone: '',
            message: '',
            subject: '',
          });
          setFloorPlanSuccess(true);
          setFloorPlanLoading(false);
          console.log(floorPlanSuccess);
        } else {
          console.error('Error sending email');
          setFloorPlanLoading(false);
          setFloorPlanSuccess(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setFloorPlanLoading(false);
        setFloorPlanSuccess(false);
      }
    }
  };

  return (
    <>
      <BrochureForm
        FloorPlanOpen={open}
        setFloorPlanOpen={setOpen}
        floorPlanLink='https://www.google.com'
        Title='SR Akshatam'
      />
      <div className=' z-10  flex w-full flex-col gap-2 rounded-md bg-blue-200 px-6 py-8'>
        <div className=' flex justify-between gap-4  overflow-hidden text-3xl text-yellow-200 md:text-4xl'>
          <span>{floorPlanSuccess ? 'Thanks' : 'Enquire Now'}</span>
          <span
            onClick={() => {
              props.setEnquireOpen(false);
              setFloorPlanSuccess(false);
            }}
            className=' cursor-pointer text-2xl'
          >
            ⛌
          </span>
        </div>

        <span className=' text-white'>
          {floorPlanSuccess
            ? 'We will contact you shortly'
            : `Enquire for ${props.Title}`}
        </span>
        <div className=' mt-4 flex w-full flex-wrap items-center gap-2'>
          <Link
            href='https://api.whatsapp.com/send/?phone=%2B917448007500&text&type=phone_number&app_absent=0'
            target='_blank'
          >
            <GlobalButton
              color='white'
              className=' w-fit rounded-full p-2  text-base font-medium  '
            >
              Whatsapp
            </GlobalButton>
          </Link>
          <Link
            href='tel:+917448007500'
            className=' text-white'
            target='_blank'
          >
            <GlobalButton
              color='white'
              className=' w-fit whitespace-nowrap rounded-full  p-2 text-base font-medium  '
            >
              Number : +91 7448007500
            </GlobalButton>
          </Link>
        </div>

        {floorPlanSuccess ? (
          <GlobalButton
            color='white'
            className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  '
            onClick={() => {
              setFloorPlanSuccess(false);
            }}
          >
            Done
          </GlobalButton>
        ) : (
          <form className='flex max-w-3xl flex-col'>
            <div className=' w-full gap-2 '>
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
                  className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 text-white autofill:text-white  focus:border-neutral-100 focus:outline-none'
                  type='text'
                  value={FloorFormData.name}
                  onChange={(e) => {
                    setFloorPlanFormData({
                      ...FloorFormData,
                      name: e.target.value,
                      subject: props.Title,
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
                  {emailError ? 'Please enter a valid email' : 'Email*'}
                </label>
                <input
                  placeholder='Email*'
                  className='  cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 text-white focus:border-neutral-100 focus:outline-none'
                  type='email'
                  value={FloorFormData.userEmail}
                  onChange={(e) => {
                    setFloorPlanFormData({
                      ...FloorFormData,
                      userEmail: e.target.value,
                    }),
                      setEmailError(false);
                  }}
                />
              </div>
            </div>
            <div className=' items-center gap-7 '>
              <div className=' w-full'>
                <label
                  className={`
              ${phoneError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                  htmlFor='phone'
                >
                  {phoneError ? 'Please enter a valid phone number' : 'Phone*'}
                </label>
                <input
                  placeholder='Phone*'
                  className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 text-white focus:border-neutral-100 focus:outline-none'
                  type='tel'
                  value={FloorFormData.phone}
                  onChange={(e) => {
                    setFloorPlanFormData({
                      ...FloorFormData,
                      phone: e.target.value,
                    }),
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
                placeholder='Message'
                className=' cursorHide h-32  w-full cursor-text resize-none border-b border-neutral-400 bg-transparent p-1 text-white focus:border-neutral-100 focus:outline-none'
                value={FloorFormData.message}
                onChange={(e) => {
                  setFloorPlanFormData({
                    ...FloorFormData,
                    message: e.target.value,
                  }),
                    setMessageError(false);
                }}
              />
            </div>

            <GlobalButton
              color='white'
              className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  '
              onClick={handleSubmitFloorPlan}
            >
              {
                floorPlanLoading
                  ? 'Loading...'
                  : 'Submit' /* Added loading state */
              }
            </GlobalButton>
            <GlobalButton
              color='white'
              className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit '
              onClick={() => {
                setOpen(true);
              }}
            >
              Download Floor Plan
            </GlobalButton>
          </form>
        )}
      </div>
    </>
  );
}
