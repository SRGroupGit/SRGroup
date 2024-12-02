'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import GlobalButton from '@/app/GlobalButton';

export default function BrochureForm(props) {
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
            message: `Floor plan requested for ${props.Title}`,
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
    <div>
      {props.FloorPlanOpen && (
        <div className=' fixed left-0 top-0  z-[999] flex h-dvh w-full items-center justify-center  px-3 '>
          <div
            onClick={() => {
              props.setFloorPlanOpen(false);
              setFloorPlanSuccess(false);
            }}
            className=' absolute left-0 top-0 size-full bg-black/40 backdrop-blur-md'
          ></div>
          <div className=' relative z-10 flex flex-col gap-2 rounded-md bg-white px-6 py-8'>
            <div className=' flex justify-between gap-4  overflow-hidden text-3xl text-blue-200 md:text-4xl'>
              <span>
                {floorPlanSuccess ? 'Thanks' : 'Please fill the Form '}
              </span>
              <span
                onClick={() => {
                  props.setFloorPlanOpen(false);
                  setFloorPlanSuccess(false);
                }}
                className=' cursor-pointer text-2xl'
              >
                ⛌
              </span>
            </div>
            <span className=' text-black'>
              download Floor plan for {props.Title}
            </span>

            {floorPlanSuccess ? (
              <Link href={props.floorPlanLink} target='_bank'>
                <GlobalButton
                  color='white'
                  className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                  onClick={() => {}}
                >
                  Download Floor Plan
                </GlobalButton>
              </Link>
            ) : (
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
                      className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 text-black autofill:text-black  focus:border-neutral-100 focus:outline-none'
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
                      className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 text-black focus:border-neutral-100 focus:outline-none'
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
                      className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 text-black focus:border-neutral-100 focus:outline-none'
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

                <GlobalButton
                  color='white'
                  className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                  onClick={handleSubmitFloorPlan}
                >
                  {
                    floorPlanLoading
                      ? 'Loading...'
                      : 'Submit' /* Added loading state */
                  }
                </GlobalButton>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}