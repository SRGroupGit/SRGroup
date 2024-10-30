'use client';
import React from 'react';
import Image from 'next/image';
import Hero from './hero.jpg';
import Hero2 from './hero2.png';
import Hero3 from './hero3.png';
import Slider from './Slider';
import GlobalButton from '@/app/GlobalButton';
import { useState } from 'react';
import BrochureForm from './BrochureForm';
import EnquireForm from './EnquireForm';
import EnquireFormStatic from './EnquireFormStatic';
import { Icon } from '@iconify/react';
import ShopHero from './shopHero.jpg';
import ResHero from './resHero.jpg';
import In1 from './interioimage/in1.jpg';
import In2 from './interioimage/in2.jpg';
import In3 from './interioimage/in3.jpg';
import In4 from './interioimage/in4.jpg';
import In5 from './interioimage/in5.jpg';
import In6 from './interioimage/in6.jpg';
import In7 from './interioimage/in7.jpg';
import In8 from './interioimage/in8.jpg';
import In9 from './interioimage/in9.jpg';
import In10 from './interioimage/in10.jpg';
import Am1 from './interioimage/am1.jpg';
import Am2 from './interioimage/am2.jpg';
import Am3 from './interioimage/am3.jpg';
import Am4 from './interioimage/am4.jpg';
import Am5 from './interioimage/am5.jpg';

export default function Page() {
  const HeroImages = [
    {
      id: 1,
      src: Hero,
      alt: 'SR Akshatam 1',
    },
    {
      id: 2,
      src: Hero2,
      alt: 'SR Akshatam 2',
    },
    {
      id: 3,
      src: Hero3,
      alt: 'SR Akshatam 3',
    },
  ];

  const InteriorImages = [
    {
      id: 1,
      src: In1,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 2,
      src: In2,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 3,
      src: In3,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 4,
      src: In4,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 5,
      src: In5,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 6,
      src: In6,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 7,
      src: In7,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 8,
      src: In8,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 9,
      src: In9,
      alt: 'SR Akshatam Interior',
    },
    {
      id: 10,
      src: In10,
      alt: 'SR Akshatam Interior',
    },
  ];

  const ConnectivityData = [
    { name: 'Amanora Mall', distance: '2 km', icon: 'lets-icons:bag' },
    { name: 'SNBP school', distance: '2.4 km', icon: 'mdi:education-outline' },
    {
      name: 'Sahyadri Super Specialty Hospital',
      distance: '10-12 min drive',
      icon: 'mage:hospital-plus',
    },
    {
      name: 'Eon IT Park',
      distance: '15 min drive',
      icon: 'material-symbols-light:computer-outline',
    },
    {
      name: 'Aditi Park',
      distance: '13 min drive',
      icon: 'mynaui:tree',
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
      alt: 'SR Akshatam',
    },
    {
      id: 2,
      src: Am2,
      alt: 'SR Akshatam',
    },
    {
      id: 3,
      src: Am3,
      alt: 'SR Akshatam',
    },
    {
      id: 4,
      src: Am4,
      alt: 'SR Akshatam',
    },
    {
      id: 5,
      src: Am5,
      alt: 'SR Akshatam',
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
        Title='SR Akshatam'
      />
      <EnquireForm
        enquireOpen={EnquireOpen}
        setEnquireOpen={setEnquireOpen}
        Title='SR Akshatam'
      />
      <main className=' m-auto  bg-white '>
        <section className='relative m-auto mt-[110px]  w-full max-w-screen-2xl items-center  md:flex '>
          <div className='  relative aspect-video w-full  '>
            <Slider GalleryData={HeroImages} ArrowType='none' />
          </div>

          <div className=' z-10 flex flex-col gap-3 from-black  to-black/0 p-3 md:absolute md:bg-gradient-to-r md:py-10 md:pl-12 md:pr-10 '>
            <h1 className=' text-5xl text-yellow-200 md:text-7xl'>
              <span className=' md:text-white'>SR</span> AKSHATAM
            </h1>
            <h2 className=' text-xl font-bold md:text-3xl md:text-white'>
              Starting at 81 Lakhs | New Launch |{' '}
              <br className=' max-md:hidden' /> Shops, 2BHKs and 3BHKs
            </h2>
            <span className=' md:text-gray-200'>
              Located at: <br />
              No. 41/14b, Mundhwa-Manjri Rd, Sasane Colony, Keshav Nagar,{' '}
              <br className=' max-md:hidden' /> Mundhwa, Pune, Maharashtra -
              411036
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
                Discover the perfect blend of convenience and luxury at SR
                &apos; latest residential project
              </h3>
              <p className=' mt-2'>
                Introducing SR Akshatam by SR Group; a remarkable mixed-use
                development in the thriving heart of Pune. Blending the vibrancy
                of retail and the tranquillity of residential living, SR
                Akshatam offers a balanced and fulfilling lifestyle for those
                who seek both luxury and convenience. Strategically located in
                close proximity to Koregaon Park, Kharadi, Mundhwa. SR Akshatam
                is poised to be a part of your growing success story.
              </p>
              <div className=' relative mt-10 aspect-video w-full overflow-hidden'>
                <Slider GalleryData={InteriorImages} />
              </div>
            </div>
            <div className=' sticky top-[120px]  z-10 w-1/3 max-lg:hidden'>
              <EnquireFormStatic Title='SR Akshatam' />
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
                Shops
              </h3>
              <div className=' grid  grid-cols-1 gap-3  md:grid-cols-2 '>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='mdi:cart-outline' />
                  </div>

                  <p>
                    <b> Large Shopping Complex</b> <br />A large well designed
                    shopping complex that ensures a high footfall, unlocking
                    opportunities for your business to grow.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='bx:store' />
                  </div>

                  <p>
                    <b>Retail at Your Doorstep</b> <br />
                    Discover 66 beautifully designed shops with spacious
                    mezzanine areas. Made for entrepreneurs and businesses that
                    can thrive in a high-traffic, upscale shopping complex.
                  </p>
                </div>
              </div>
            </div>
            <div className=' w-full'>
              <div className=' relative aspect-video w-full bg-black'>
                <Image
                  src={ShopHero}
                  className=' object-cover object-center'
                  alt='SR Akshatam Shops'
                  fill
                />
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
          </div>
          <div className=' flex w-full flex-col justify-between'>
            <div className=' flex flex-col gap-12'>
              <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
                Residential
              </h3>
              <div className=' grid  grid-cols-1 gap-3  md:grid-cols-2 '>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='grommet-icons:diamond' />
                  </div>

                  <p>
                    <b>Expansive Homes for Elevated Living</b> <br />
                    66 spacious 2BHKs starting at just 81 Lakhs and 44 luxurious
                    3BHKs starting from 1.2 Crore. Experience the perfect
                    combination of Luxury and Comfort.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='mdi:treasure-chest-outline' />
                  </div>

                  <p>
                    <b>Designed with Convenience in Mind</b> <br />
                    Each floor features 6 thoughtfully laid-out 2BHKs and 4
                    well-proportioned 3BHKs, ensuring exclusivity and privacy in
                    every corner.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='hugeicons:kettlebell' />
                  </div>

                  <p>
                    <b>Modern Amenities</b> <br />
                    Enjoy the comfort of a fully equipped gym, clubhouse, and
                    more, designed to provide a complete yet luxurious
                    lifestyle.
                  </p>
                </div>
              </div>
            </div>
            <div className=' mt-4 w-full'>
              <div className=' relative aspect-video w-full bg-black'>
                <Image
                  src={ResHero}
                  className=' object-cover object-center'
                  alt='SR Akshatam residential'
                  fill
                />
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
          </div>
        </section>

        <section className=' m-auto  mt-20 w-full max-w-screen-2xl  p-3'>
          <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
            Amenities for a Complete Lifestyle
          </h3>
          <p className=' mt-4'>
            SR Akshatam offers amenities to enrich your lifestyle: a fully
            equipped gym, clubhouse, party deck, amphitheater, landscaped
            gardens, serene gazebos, a temple for spiritual reflection, and a
            children’s play area. With dedicated parking for residents and
            guests, comfort and convenience are prioritized.
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
          <Slider GalleryData={AmiData} />
        </section>

        <section className=' m-auto mt-10 aspect-video w-full max-w-screen-2xl'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9449496933535!2d73.93697427616912!3d18.531389682564363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3007ccb5ff3%3A0x1df07ff4d5adec30!2sSR%20Akshatam!5e0!3m2!1sen!2sin!4v1730030811122!5m2!1sen!2sin'
            allowfullscreen=''
            className=' size-full'
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>
      </main>
    </>
  );
}
