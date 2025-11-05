'use client';
import React from 'react';
import Image from 'next/image';
import Hero0 from './images/hero0.avif';
import Hero1 from './images/hero1.avif';
import Hero2 from './images/hero2.avif';
import Hero3 from './images/hero3.avif';
import iso_labeled from './images/iso_labeled.webp';
import iso2 from './images/iso2.avif';
import Slider from './Slider';
import GlobalButton from '@/app/GlobalButton';
import { useState } from 'react';
import BrochureForm from './BrochureForm';
import EnquireForm from './EnquireForm';
import EnquireFormStatic from './EnquireFormStatic';
import { Icon } from '@iconify/react';
import In0 from './interioimage/in0.avif';
import In1 from './interioimage/in1.avif';
import In2 from './interioimage/in2.avif';
import In3 from './interioimage/in3.avif';
import In4 from './interioimage/in4.avif';
import In5 from './interioimage/in5.avif';
import In6 from './interioimage/in6.avif';
import In7 from './interioimage/in7.avif';
import In8 from './interioimage/in8.avif';
import In9 from './interioimage/in9.avif';
import In10 from './interioimage/in10.avif';
import In11 from './interioimage/in11.avif';
import In12 from './interioimage/in12.avif';
import Am1 from './interioimage/am1.avif';
import Am2 from './interioimage/am2.avif';
import Am3 from './interioimage/am3.avif';
import Am4 from './interioimage/am4.avif';
import Am5 from './interioimage/am5.avif';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Page() {
  const HeroImages = [
    {
      id: 0,
      src: Hero0,
      alt: 'Aishwaryam 0',
    },

    {
      id: 1,
      src: Hero1,
      alt: 'Aishwaryam 1',
    },
    {
      id: 2,
      src: Hero2,
      alt: 'Aishwaryam 2',
    },
    {
      id: 3,
      src: Hero3,
      alt: 'Aishwaryam 3',
    },
  ];

  const InteriorsImages = [
    {
      id: 1,
      src: In1,
      alt: 'Aishwaryam',
    },
    {
      id: 2,
      src: In2,
      alt: 'Aishwaryam',
    },
    {
      id: 3,
      src: In3,
      alt: 'Aishwaryam',
    },
    {
      id: 4,
      src: In4,
      alt: 'Aishwaryam',
    },
    {
      id: 5,
      src: In5,
      alt: 'Aishwaryam',
    },
    {
      id: 6,
      src: In6,
      alt: 'Aishwaryam',
    },
    {
      id: 7,
      src: In7,
      alt: 'Aishwaryam',
    },
    {
      id: 8,
      src: In8,
      alt: 'Aishwaryam',
    },
    {
      id: 9,
      src: In9,
      alt: 'Aishwaryam',
    },
    {
      id: 10,
      src: In10,
      alt: 'Aishwaryam',
    },
    {
      id: 11,
      src: In11,
      alt: 'Aishwaryam',
    },
    {
      id: 12,
      src: In12,
      alt: 'Aishwaryam',
    },
    {
      id: 13,
      src: In0,
      alt: 'Aishwaryam',
    },
  ];

  const ConnectivityData = [
    {
      name: 'Balewadi Highstreet',
      distance: '1.7km',
      icon: 'solar:hospital-outline',
    },
    {
      name: 'Educon International School',
      distance: '1.5km',
      icon: 'material-symbols:school-outline',
    },
    {
      name: 'Amar Tech Park',
      distance: '1.2km',
      icon: 'ep:office-building',
    },
    {
      name: 'Manipal Hospital Baner',
      distance: '1.9km',
      icon: 'material-symbols:local-hospital-outline',
    },
    {
      name: 'DMART',
      distance: '700m',
      icon: 'material-symbols:grocery',
    },
  ];

  const AmenitiesData = [
    {
      name: 'Dedicated Parking',
      icon: 'mdi:car-outline',
    },
    {
      name: 'Fully equipped gym',
      icon: 'fluent-mdl2:weights',
    },
    {
      name: 'Amphitheater',
      icon: 'mdi-light:music',
    },
    {
      name: 'Dedicated temple',
      icon: 'ph:mosque-light',
    },
    {
      name: 'Shrub Gardens',
      icon: 'ph:plant',
    },
    {
      name: 'Gazebos',
      icon: 'devicon-plain:gazebo',
    },
    {
      name: 'Clubhouse',
      icon: 'ic:outline-other-houses',
    },
    {
      name: 'Party deck',
      icon: 'bx:party',
    },
    {
      name: 'Children’s play area',
      icon: 'mdi:slide',
    },
  ];

  const AmiData = [
    {
      id: 1,
      src: Am1,
      alt: 'Private Gymnasium',
    },
    {
      id: 2,
      src: Am2,
      alt: 'Wellness Centre',
    },
    {
      id: 3,
      src: Am3,
      alt: 'High-end Italian Marble Flooring',
    },
    {
      id: 4,
      src: Am4,
      alt: 'Designer Lighting & Fittings',
    },
    {
      id: 5,
      src: Am5,
      alt: 'High End Digital locks',
    },
  ];

  const [FloorPlanOpen, setFloorPlanOpen] = useState(false);
  const [EnquireOpen, setEnquireOpen] = useState(false);

  return (
    <>
      <BrochureForm
        FloorPlanOpen={FloorPlanOpen}
        setFloorPlanOpen={setFloorPlanOpen}
        floorPlanLink='https://www.google.com'
        Title='SR Aishwaryam'
      />
      <EnquireForm
        enquireOpen={EnquireOpen}
        setEnquireOpen={setEnquireOpen}
        Title='SR Aishwaryam'
      />
      <main className=' m-auto  bg-white '>
        <section className='relative m-auto mt-[110px]  w-full max-w-screen-2xl items-center  md:flex '>
          <div className=' relative hidden  aspect-video w-full md:block  '>
            <Slider GalleryData={HeroImages} ArrowType='none' />
          </div>

          <div className=' z-10 flex flex-col gap-3 from-black  to-black/0 p-3 md:absolute md:bg-gradient-to-r md:py-10 md:pl-12 md:pr-10 '>
            <h1 className=' text-5xl text-yellow-200 md:text-7xl'>
              <span className=' md:text-white'>SR</span> Aishwaryam
            </h1>
            <h2 className='text-xl font-bold md:text-3xl md:text-white'>
              2.75CR* Onwards | New Launch
              <br className='max-md:hidden' /> 3 BHKs
            </h2>

            <span className=' text-xs mt-1 text-gray-200'>
              <b>*Basic cost</b>
            </span>
            <span className=' md:text-gray-200'>
              <b>Located at: </b>
              <br />
              S. No. 23/1B/9, 10 & 23, Laxman Nagar,
              <br className=' max-md:hidden' /> Balewadi, Pune, Maharashtra
              411045
            </span>
            <div className=' flex w-full gap-2'>
              {/* <GlobalButton
                color='white'
                className=' mt-4 w-fit whitespace-nowrap rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                onClick={
                  () => setFloorPlanOpen(true)
                  // console.log('Download Brochure')
                }
              >
                Download Brochure
              </GlobalButton> */}
              <GlobalButton
                color='white'
                className=' mt-4 w-fit whitespace-nowrap rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                onClick={() => setEnquireOpen(true)}
              >
                Enquire Now
              </GlobalButton>
            </div>
          </div>
        </section>
        <section className='  mt-10 bg-white p-3 py-10'>
          <div className='relative m-auto flex h-fit w-full max-w-screen-2xl gap-10'>
            <div className='  w-full '>
              <h3 className='  text-3xl font-semibold text-blue-200'>
                A Limited Edition of Spacious Homes in the Heart of Balewadi
              </h3>
              <p className=' mt-2'>
                Experience unmatched exclusivity with just one apartment per
                floor, blending luxury with privacy in a way few homes can.
                These residences are thoughtfully designed to reflect refined
                taste and elevated living, with expansive layouts, elegant
                interiors, and bespoke amenities.
              </p>
              <div className=' relative mt-10 aspect-video w-full overflow-hidden'>
                <div className=' mt-5 relative aspect-video h-full overflow-hidden'>
                  <video
                    src='/Aishwaryam_720p.mp4'
                    className='size-full object-cover contrast-[1.2]'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                    poster='/video-poster.avif'
                  ></video>
                </div>
              </div>
            </div>
            <div className=' sticky top-[120px]  z-10 w-1/3 max-lg:hidden'>
              <EnquireFormStatic Title='SR Aishwaryam' />
            </div>
          </div>
        </section>
        <section className=' m-auto mt-6 w-full max-w-screen-2xl p-3'>
          <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
            Connectivity
          </h3>
          <div className=' mt-6 grid grid-cols-2  gap-4 md:grid-cols-3 lg:grid-cols-5'>
            {ConnectivityData.map((item, index) => (
              <div
                key={index}
                className=' group flex w-full flex-col justify-between gap-4 rounded-lg  bg-[#F9F9F9]  p-4 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-blue-200'
              >
                <div>
                  <Icon
                    icon={item.icon}
                    className=' text-4xl text-yellow-200 group-hover:text-blue-200'
                  />
                  <h4 className=' text-lg font-semibold '>{item.name}</h4>
                </div>
                <span className=' text-black-400'>{item.distance}</span>
              </div>
            ))}
          </div>
        </section>

        <section className=' m-auto mt-20 flex w-full max-w-screen-2xl flex-col items-stretch gap-4 p-3 md:flex-row  md:gap-24'>
          <div className=' flex w-full flex-col justify-between'>
            <div className=' flex flex-col gap-12'>
              <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
                Residential
              </h3>
              <div className=' grid  grid-cols-1 gap-3  md:grid-cols-2 '>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='iconoir:bright-star' />
                  </div>

                  <p>
                    <b>Exclusive Living</b> <br />
                    Only 12 boutique residences, each crafted with high-end
                    finishes, designer fittings, and smart home features.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='gg:pin' />
                  </div>

                  <p>
                    <b>Prime Location</b> <br />
                    Steps from Balewadi Highstreet, Dmart, Metro, and with quick
                    access to the Pune-Mumbai Expressway.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='material-symbols:exercise-outline' />
                  </div>

                  <p>
                    <b>Lifestyle Amenities</b> <br />
                    Private gymnasium and wellness centre for your comfort,
                    privacy, and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex w-full flex-col justify-between'>
            <div className=' flex flex-col gap-12'>
              <div className=' mt-4 w-full'>
                <div className=' relative aspect-video w-full bg-black'>
                  <Slider GalleryData={InteriorsImages} />
                </div>
                <div className=' flex'>
                  {/* <div
                  onClick={() => setFloorPlanOpen(true)}
                  className='flex h-12 w-full cursor-pointer items-center justify-center bg-blue-200 text-yellow-200'
                >
                  Download Brochure
                </div> */}
                  <div
                    onClick={() => setEnquireOpen(true)}
                    className='flex h-12 w-full cursor-pointer items-center justify-center bg-yellow-200 text-blue-200'
                  >
                    Enquire Now
                  </div>
                </div>
              </div>
              {/* <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
                Office Spaces
              </h3>
              <div className=' grid  grid-cols-1 gap-3  md:grid-cols-2 '>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='grommet-icons:diamond' />
                  </div>

                  <p>
                    <b>Tailored for Professionals</b> <br />
                    Spacious office spaces with modern layouts, ideal for
                    medical and business professionals looking for functionality
                    and comfort.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='material-symbols:elevator-outline-rounded' />
                  </div>

                  <p>
                    <b>Efficient Infrastructure</b> <br />
                    Each floor features 3 elevators, energy-saving systems, and
                    DG backup for uninterrupted operations.
                  </p>
                </div>

                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='fluent:connected-32-regular' />
                  </div>

                  <p>
                    <b>Connected & Convenient</b> <br />
                    Located near key landmarks like Jupiter Hospital, offering
                    easy access and enhancing professional visibility.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className='relative m-auto mt-10 aspect-video w-full max-w-screen-2xl '>
            <Image
              src={iso_labeled}
              alt='ISOMETRIC IMAGE'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </section>
        <section className=' m-auto  mt-10 w-full max-w-screen-2xl  p-3'>
          <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
            Amenities
          </h3>
          <p className=' mt-4'>
            Step into a world where every detail is designed around you. From
            the gleam of Italian marble to the glow of designer lighting, every
            element speaks of elegance and precision. Recharge in your private
            gymnasium or unwind in the wellness centre. Enjoy the ease of smart
            home living, tailored for modern lifestyles. Here, comfort, style,
            and exclusivity come together seamlessly.
          </p>
          <div className=' mt-10 flex flex-wrap gap-10'>
            {AmenitiesData.map((item, index) => (
              <div className=' flex items-center gap-1 ' key={index}>
                <Icon icon={item.icon} className=' text-xl text-blue-200' />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className=' relative m-auto my-10 aspect-video w-full max-w-screen-2xl md:aspect-[1443/442]'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {AmiData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=' flex basis-1/2 flex-col items-center md:basis-1/4 '
                >
                  <div className=' relative aspect-square w-full'>
                    <Image
                      className=' aspect-square object-cover object-center'
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                  <span className=' w-full text-center text-xl font-medium'>
                    {item.alt}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className=' m-auto mt-10 aspect-video w-full max-w-screen-2xl'>
          {/* <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.446852301377!2d73.78031525235633!3d18.563963226773968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2a63354711%3A0x8265acef382eb46a!2sSR%20Business%20Hub!5e0!3m2!1sen!2sin!4v1737617643677!5m2!1sen!2sin'
            allowfullscreen=''
            className=' size-full'
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe> */}

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60524.19818688172!2d73.7515088!3d18.5396368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b939d1a9c4db%3A0x38a727dc98992af5!2sSR%20Aishwaryam!5e0!3m2!1sen!2sin!4v1755032695612!5m2!1sen!2sin'
            allowfullscreen=''
            loading='lazy'
            className=' size-full'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>
      </main>
    </>
  );
}
