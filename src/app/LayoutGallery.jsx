/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';

export default function LayoutGallery(props) {
  const url = 'https://sendoff.wtf/api/files';

  const [selectedGallery, setSelectedGallery] = useState(props.GalleryData[0]);
  const [nextGallery, setNextGallery] = useState(props.GalleryData[1]);
  const [selectedData, setSelectedData] = useState(props.GalleryDiscription[0]);
  const [lightBox, setLightBox] = useState(false);

  const [direction, setDirection] = useState('next');

  const previousHandler = async () => {
    let index = props.GalleryData.indexOf(selectedGallery);
    if (index === 0) {
      setSelectedGallery(props.GalleryData[props.GalleryData.length - 1]);
      setNextGallery(props.GalleryData[0]);
      setSelectedData(props.GalleryDiscription[props.GalleryData.length - 1]);
    } else {
      setSelectedGallery(props.GalleryData[index - 1]);
      setNextGallery(props.GalleryData[index]);
      setSelectedData(props.GalleryDiscription[index - 1]);
    }
  };

  const nextHandler = async () => {
    let index = props.GalleryData.indexOf(selectedGallery);
    if (index === props.GalleryData.length - 1) {
      setSelectedGallery(props.GalleryData[0]);
      setNextGallery(props.GalleryData[1] || props.GalleryData[0]);
      setSelectedData(props.GalleryDiscription[0]);
    } else {
      setSelectedGallery(props.GalleryData[index + 1]);
      setNextGallery(props.GalleryData[index + 2] || props.GalleryData[0]);
      setSelectedData(props.GalleryDiscription[index + 1]);
    }
  };

  return (
    <>
      {lightBox && (
        <div className='fixed left-0 top-20 z-50 flex h-[calc(100dvh-80px)] w-full items-center justify-center '>
          <div className=' relative z-20 mx-auto flex max-h-[70vh] w-full max-w-screen-2xl items-center justify-center p-3   '>
            <img
              className='  max-h-[70vh] rounded-xl  bg-zinc-200 object-contain object-center'
              src={`${url}/${props.collection}/${props.recordId}/${selectedGallery}`}
              alt={props.collection}
            />
            <div className=' absolute  mx-auto flex w-full max-w-screen-xl  justify-between px-4 '>
              <div
                className='cursorReduce flex aspect-square items-center justify-center rounded-full border-white bg-black p-2   backdrop-blur-xl md:border   md:p-4'
                onClick={previousHandler}
              >
                <PreviousArrow />
              </div>
              <div
                className='cursorReduce flex aspect-square items-center justify-center rounded-full border-white bg-black p-2  backdrop-blur-xl md:border   md:p-4'
                onClick={nextHandler}
              >
                <NextArrow />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setLightBox(false);
              document.body.style.overflow = 'auto';
            }}
            className=' absolute left-0 top-0 z-10 size-full bg-black/70 backdrop-blur-lg'
          ></div>
          <button
            className='absolute right-2 top-2 z-20 rounded-full bg-black p-2 text-white'
            onClick={() => {
              setLightBox(false);
              document.body.style.overflow = 'auto';
            }}
          >
            Close
          </button>
        </div>
      )}
      <div className=' mx-auto w-full max-w-screen-2xl'>
        <div>
          <div className='  relative flex w-full flex-col  items-end justify-center gap-4  overflow-hidden rounded-md md:flex-row '>
            <div className=' relative  w-full md:w-2/3'>
              <div className='absolute mt-4 flex size-full items-center justify-between  px-4 '>
                <div
                  className='cursorReduce flex aspect-square size-14 items-center justify-center rounded-full border border-black bg-black/15 p-2 backdrop-blur-xl   md:size-20 md:p-4'
                  onClick={previousHandler}
                >
                  <PreviousArrow />
                </div>
                <div
                  className='cursorReduce flex aspect-square size-14  items-center justify-center rounded-full border border-black bg-black/15 p-2  backdrop-blur-xl md:size-20  md:p-4'
                  onClick={nextHandler}
                >
                  <NextArrow />
                </div>
              </div>
              <img
                onClick={() => {
                  setLightBox(true);
                  document.body.style.overflow = 'hidden';
                }}
                className=' aspect-video size-full rounded-xl bg-zinc-200 object-contain object-center '
                src={`${url}/${props.collection}/${props.recordId}/${selectedGallery}`}
                alt={props.collection}
              />
            </div>
            <div className=' flex  w-full flex-col items-end justify-start gap-8 md:w-1/3'>
              {selectedData && (
                <div className='flex flex-col gap-2'>
                  <span className='text-2xl font-bold'>
                    {selectedData.title}
                  </span>
                  <p className='text-base'>{selectedData.Discription}</p>
                </div>
              )}
              <img
                className=' hidden aspect-video size-full rounded-xl bg-zinc-200 object-contain object-center md:block ' // Apply the animation class here
                src={`${url}/${props.collection}/${props.recordId}/${nextGallery}`}
                alt={props.collection}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NextArrow() {
  return (
    <svg
      width='48'
      height='15'
      viewBox='0 0 48 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M47.2074 8.09395C47.5979 7.70343 47.5979 7.07026 47.2074 6.67974L40.8434 0.315783C40.4529 -0.0747405 39.8197 -0.0747404 39.4292 0.315784C39.0386 0.706309 39.0386 1.33947 39.4292 1.73L45.086 7.38685L39.4292 13.0437C39.0387 13.4342 39.0387 14.0674 39.4292 14.4579C39.8197 14.8484 40.4529 14.8484 40.8434 14.4579L47.2074 8.09395ZM0.553768 8.38689L46.5002 8.38684L46.5002 6.38685L0.553767 6.38689L0.553768 8.38689Z'
        fill='white'
      />
    </svg>
  );
}

function PreviousArrow() {
  return (
    <svg
      width='48'
      height='15'
      viewBox='0 0 48 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.792649 6.90605C0.402125 7.29657 0.402126 7.92974 0.79265 8.32026L7.15662 14.6842C7.54714 15.0747 8.18031 15.0747 8.57083 14.6842C8.96135 14.2937 8.96135 13.6605 8.57083 13.27L2.91397 7.61315L8.57082 1.95629C8.96134 1.56577 8.96134 0.932603 8.57082 0.542079C8.18029 0.151555 7.54713 0.151555 7.1566 0.54208L0.792649 6.90605ZM47.4462 6.61311L1.49976 6.61315L1.49976 8.61315L47.4462 8.61311L47.4462 6.61311Z'
        fill='white'
      />
    </svg>
  );
}

function NextArrowBlack() {
  return (
    <svg
      width='48'
      height='15'
      viewBox='0 0 48 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M47.2074 8.09395C47.5979 7.70343 47.5979 7.07026 47.2074 6.67974L40.8434 0.315783C40.4529 -0.0747405 39.8197 -0.0747404 39.4292 0.315784C39.0386 0.706309 39.0386 1.33947 39.4292 1.73L45.086 7.38685L39.4292 13.0437C39.0387 13.4342 39.0387 14.0674 39.4292 14.4579C39.8197 14.8484 40.4529 14.8484 40.8434 14.4579L47.2074 8.09395ZM0.553768 8.38689L46.5002 8.38684L46.5002 6.38685L0.553767 6.38689L0.553768 8.38689Z'
        fill='black'
      />
    </svg>
  );
}

function PreviousArrowBlack() {
  return (
    <svg
      width='48'
      height='15'
      viewBox='0 0 48 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.792649 6.90605C0.402125 7.29657 0.402126 7.92974 0.79265 8.32026L7.15662 14.6842C7.54714 15.0747 8.18031 15.0747 8.57083 14.6842C8.96135 14.2937 8.96135 13.6605 8.57083 13.27L2.91397 7.61315L8.57082 1.95629C8.96134 1.56577 8.96134 0.932603 8.57082 0.542079C8.18029 0.151555 7.54713 0.151555 7.1566 0.54208L0.792649 6.90605ZM47.4462 6.61311L1.49976 6.61315L1.49976 8.61315L47.4462 8.61311L47.4462 6.61311Z'
        fill='black'
      />
    </svg>
  );
}
