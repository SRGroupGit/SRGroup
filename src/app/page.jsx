export default function Home() {
  return (
    <main>
      <div className=' flex h-[105dvh] w-full items-end justify-center  '>
        <video
          src='/Video.mp4'
          className='size-full object-cover brightness-50 contrast-125 saturate-150'
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          poster='/video-poster.jpg'
          alt='Video background'
        ></video>
        <div className=' absolute z-10 size-full h-[30%] w-full bg-gradient-to-t  from-black to-transparent bg-blend-multiply'></div>
        <h1 className=' absolute z-20 m-0 mb-4 flex flex-col items-center  text-center text-clamp font-black leading-[0.95em]  text-white md:mb-2'>
          <span className=' text-neutral-200'>We Build the</span>{' '}
          <span className='inline-block bg-gradient-to-b from-neutral-950  to-neutral-100 to-70% bg-clip-text text-transparent'>
            Future
          </span>
        </h1>
      </div>
    </main>
  );
}
